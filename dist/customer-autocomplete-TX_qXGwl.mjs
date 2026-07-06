import { useEffect as e, useRef as t, useState as n, useTransition as r } from "react";
import { fetchJSON as i } from "@chumsinc/ui-utils";
import { Fragment as a, jsx as o, jsxs as s } from "react/jsx-runtime";
import { Spinner as c } from "react-bootstrap";
import { Autocomplete as l } from "@base-ui/react";
import { useDebouncedCallback as u } from "@mantine/hooks";
//#region src/customer-autocomplete/api.ts
async function d(e, t) {
	try {
		if (e === "") return [];
		let n = new URLSearchParams();
		return n.set("search", e), (await i(`/api/search/customer.json?${n.toString()}`, { signal: t }))?.result ?? [];
	} catch (e) {
		return e instanceof Error ? e.name === "AbortError" ? [] : (console.debug("getCustomerLookup()", e.name, e.message), Promise.reject(e)) : (console.debug("getCustomerLookup()", e), Promise.reject(/* @__PURE__ */ Error("Error in getCustomerLookup()")));
	}
}
//#endregion
//#region src/customer-autocomplete/utils.ts
var f = (e) => [e.ARDivisionNo, e.CustomerNo].filter((e) => !!e).join("-");
//#endregion
//#region src/customer-autocomplete/CustomerAutocomplete.tsx
function p({ slotProps: i, customer: p, onSelectCustomer: m, ...h }) {
	let [g, _] = n(""), [v, y] = n(null), [b, x] = n([]), S = t(null), [C, w] = r(), { contains: T } = l.useFilter(), [E, D] = n(!1);
	e(() => {
		w(() => {
			_(p ? f(p) : "");
		});
	}, [p]);
	let O = u((e) => {
		let t = new AbortController();
		S.current?.abort(), S.current = t, w(async () => {
			try {
				y(null);
				let n = (await d(e, t.signal)).filter((t) => T(f(t), e) || T(t.CustomerName, e));
				if (t.signal.aborted) return;
				w(() => {
					x(n);
				});
			} catch (e) {
				y(e instanceof Error ? e.message : "Error in searchChangeHandler()");
			}
		});
	}, 350), k = (e) => {
		if (_(e), e === "") {
			S.current?.abort(), x([]), y(null);
			return;
		}
		O(e);
	};
	function A() {
		return C ? /* @__PURE__ */ s(a, { children: [/* @__PURE__ */ o(c, {
			animation: "border",
			size: "sm",
			role: "status",
			className: "me-1"
		}), "Searching..."] }) : v ? /* @__PURE__ */ o("span", {
			className: "text-danger",
			children: v
		}) : g === "" ? null : b.length === 0 ? /* @__PURE__ */ o("span", {
			className: "text-muted",
			children: "No results found"
		}) : `${b.length} customers found`;
	}
	let j = A();
	return /* @__PURE__ */ s(l.Root, {
		open: E,
		onOpenChange: (e) => D(e),
		value: g,
		onValueChange: k,
		items: b,
		itemToStringValue: (e) => f(e),
		filter: null,
		...h,
		children: [/* @__PURE__ */ s(l.InputGroup, {
			className: "input-group input-group-sm",
			children: [
				i?.label && /* @__PURE__ */ o("label", {
					className: "input-group-text",
					htmlFor: i.labelProps?.htmlFor,
					children: i.label
				}),
				/* @__PURE__ */ o(l.Input, {
					className: "form-control",
					placeholder: "Customer No",
					...i?.inputProps
				}),
				/* @__PURE__ */ o(l.Trigger, {
					className: "btn btn-outline-secondary",
					children: /* @__PURE__ */ o("span", { className: E ? "bi-chevron-up" : "bi-chevron-down" })
				})
			]
		}), /* @__PURE__ */ o(l.Portal, {
			hidden: !j,
			className: "autocomplete-portal",
			children: /* @__PURE__ */ o(l.Positioner, {
				sideOffset: 4,
				align: "start",
				children: /* @__PURE__ */ o(l.Popup, {
					"aria-busy": C || void 0,
					className: "autocomplete-popup",
					children: /* @__PURE__ */ s("div", {
						className: "bg-body p-1 border rounded",
						children: [/* @__PURE__ */ o(l.Status, { children: j && /* @__PURE__ */ o("div", {
							className: "text-secondary",
							children: j
						}) }), /* @__PURE__ */ o(l.List, {
							className: "autocomplete-list",
							children: (e) => /* @__PURE__ */ o(l.Item, {
								value: e,
								onClick: () => {
									m(e), D(!1);
								},
								className: "autocomplete-item",
								children: /* @__PURE__ */ s("div", {
									className: "d-flex align-items-center=",
									style: { gap: "3rem" },
									children: [/* @__PURE__ */ o("div", {
										className: "flex-grow-1",
										children: /* @__PURE__ */ o("div", {
											className: "fw-bold",
											children: f(e)
										})
									}), /* @__PURE__ */ o("div", {
										className: "flex-shrink-0",
										children: e.CustomerName
									})]
								})
							}, f(e))
						})]
					})
				})
			})
		})]
	});
}
p.displayName = "CustomerAutocomplete";
//#endregion
export { f as n, d as r, p as t };

//# sourceMappingURL=customer-autocomplete-TX_qXGwl.mjs.map