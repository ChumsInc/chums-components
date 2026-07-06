import { t as e } from "./jsx-runtime-Boo2vksn.mjs";
import { useEffect as t, useRef as n, useState as r, useTransition as i } from "react";
import { fetchJSON as a } from "@chumsinc/ui-utils";
import { Spinner as o } from "react-bootstrap";
import { Autocomplete as s } from "@base-ui/react";
import { useDebouncedCallback as c } from "@mantine/hooks";
//#region src/customer-autocomplete/api.ts
async function l(e, t) {
	try {
		if (e === "") return [];
		let n = new URLSearchParams();
		return n.set("search", e), (await a(`/api/search/customer.json?${n.toString()}`, { signal: t }))?.result ?? [];
	} catch (e) {
		return e instanceof Error ? e.name === "AbortError" ? [] : (console.debug("getCustomerLookup()", e.name, e.message), Promise.reject(e)) : (console.debug("getCustomerLookup()", e), Promise.reject(/* @__PURE__ */ Error("Error in getCustomerLookup()")));
	}
}
//#endregion
//#region src/customer-autocomplete/utils.ts
var u = (e) => [e.ARDivisionNo, e.CustomerNo].filter((e) => !!e).join("-"), d = e();
function f({ slotProps: e, customer: a, onSelectCustomer: f, ...p }) {
	let [m, h] = r(""), [g, _] = r(null), [v, y] = r([]), b = n(null), [x, S] = i(), { contains: C } = s.useFilter(), [w, T] = r(!1);
	t(() => {
		S(() => {
			h(a ? u(a) : "");
		});
	}, [a]);
	let E = c((e) => {
		let t = new AbortController();
		b.current?.abort(), b.current = t, S(async () => {
			try {
				_(null);
				let n = (await l(e, t.signal)).filter((t) => C(u(t), e) || C(t.CustomerName, e));
				if (t.signal.aborted) return;
				S(() => {
					y(n);
				});
			} catch (e) {
				_(e instanceof Error ? e.message : "Error in searchChangeHandler()");
			}
		});
	}, 350), D = (e) => {
		if (h(e), e === "") {
			b.current?.abort(), y([]), _(null);
			return;
		}
		E(e);
	};
	function O() {
		return x ? /* @__PURE__ */ (0, d.jsxs)(d.Fragment, { children: [/* @__PURE__ */ (0, d.jsx)(o, {
			animation: "border",
			size: "sm",
			role: "status",
			className: "me-1"
		}), "Searching..."] }) : g ? /* @__PURE__ */ (0, d.jsx)("span", {
			className: "text-danger",
			children: g
		}) : m === "" ? null : v.length === 0 ? /* @__PURE__ */ (0, d.jsx)("span", {
			className: "text-muted",
			children: "No results found"
		}) : `${v.length} customers found`;
	}
	let k = O();
	return /* @__PURE__ */ (0, d.jsxs)(s.Root, {
		open: w,
		onOpenChange: (e) => T(e),
		value: m,
		onValueChange: D,
		items: v,
		itemToStringValue: (e) => u(e),
		filter: null,
		...p,
		children: [/* @__PURE__ */ (0, d.jsxs)(s.InputGroup, {
			className: "input-group input-group-sm",
			children: [
				e?.label && /* @__PURE__ */ (0, d.jsx)("label", {
					className: "input-group-text",
					htmlFor: e.labelProps?.htmlFor,
					children: e.label
				}),
				/* @__PURE__ */ (0, d.jsx)(s.Input, {
					className: "form-control",
					placeholder: "Customer No",
					...e?.inputProps
				}),
				/* @__PURE__ */ (0, d.jsx)(s.Trigger, {
					className: "btn btn-outline-secondary",
					children: /* @__PURE__ */ (0, d.jsx)("span", { className: w ? "bi-chevron-up" : "bi-chevron-down" })
				})
			]
		}), /* @__PURE__ */ (0, d.jsx)(s.Portal, {
			hidden: !k,
			className: "autocomplete-portal",
			children: /* @__PURE__ */ (0, d.jsx)(s.Positioner, {
				sideOffset: 4,
				align: "start",
				children: /* @__PURE__ */ (0, d.jsx)(s.Popup, {
					"aria-busy": x || void 0,
					className: "autocomplete-popup",
					children: /* @__PURE__ */ (0, d.jsxs)("div", {
						className: "bg-body p-1 border rounded",
						children: [/* @__PURE__ */ (0, d.jsx)(s.Status, { children: k && /* @__PURE__ */ (0, d.jsx)("div", {
							className: "text-secondary",
							children: k
						}) }), /* @__PURE__ */ (0, d.jsx)(s.List, {
							className: "autocomplete-list",
							children: (e) => /* @__PURE__ */ (0, d.jsx)(s.Item, {
								value: e,
								onClick: () => {
									f(e), T(!1);
								},
								className: "autocomplete-item",
								children: /* @__PURE__ */ (0, d.jsxs)("div", {
									className: "d-flex align-items-center=",
									style: { gap: "3rem" },
									children: [/* @__PURE__ */ (0, d.jsx)("div", {
										className: "flex-grow-1",
										children: /* @__PURE__ */ (0, d.jsx)("div", {
											className: "fw-bold",
											children: u(e)
										})
									}), /* @__PURE__ */ (0, d.jsx)("div", {
										className: "flex-shrink-0",
										children: e.CustomerName
									})]
								})
							}, u(e))
						})]
					})
				})
			})
		})]
	});
}
f.displayName = "CustomerAutocomplete";
//#endregion
export { u as n, l as r, f as t };

//# sourceMappingURL=customer-autocomplete-D4V9onBL.mjs.map