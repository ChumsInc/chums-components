import { a as e, i as t, n, r, t as i } from "./AutocompletePositioner-Tzlxi8zX.mjs";
import { useEffect as a, useRef as o, useState as s, useTransition as c } from "react";
import { fetchJSON as l } from "@chumsinc/ui-utils";
import { Fragment as u, jsx as d, jsxs as f } from "react/jsx-runtime";
import { Spinner as p } from "react-bootstrap";
import { Autocomplete as m } from "@base-ui/react";
import { useDebouncedCallback as h } from "@mantine/hooks";
//#region src/customer-autocomplete/api.ts
async function g(e, t) {
	try {
		if (e === "") return [];
		let n = new URLSearchParams();
		return n.set("search", e), (await l(`/api/search/customer.json?${n.toString()}`, { signal: t }))?.result ?? [];
	} catch (e) {
		return e instanceof Error ? e.name === "AbortError" ? [] : (console.debug("getCustomerLookup()", e.name, e.message), Promise.reject(e)) : (console.debug("getCustomerLookup()", e), Promise.reject(/* @__PURE__ */ Error("Error in getCustomerLookup()")));
	}
}
//#endregion
//#region src/customer-autocomplete/utils.ts
var _ = (e) => [e.ARDivisionNo, e.CustomerNo].filter((e) => !!e).join("-");
//#endregion
//#region src/customer-autocomplete/CustomerAutocomplete.tsx
function v({ slotProps: l, customer: v, onSelectCustomer: y, ...b }) {
	let [x, S] = s(""), [C, w] = s(null), [T, E] = s([]), D = o(null), [O, k] = c(), { contains: A } = m.useFilter(), [j, M] = s(!1);
	a(() => {
		k(() => {
			S(v ? _(v) : "");
		});
	}, [v]);
	let N = h((e) => {
		let t = new AbortController();
		D.current?.abort(), D.current = t, k(async () => {
			try {
				w(null);
				let n = (await g(e, t.signal)).filter((t) => A(_(t), e) || A(t.CustomerName, e));
				if (t.signal.aborted) return;
				k(() => {
					E(n);
				});
			} catch (e) {
				w(e instanceof Error ? e.message : "Error in searchChangeHandler()");
			}
		});
	}, 350), P = (e) => {
		if (S(e), e === "") {
			D.current?.abort(), E([]), w(null);
			return;
		}
		N(e);
	};
	function F() {
		return O ? /* @__PURE__ */ f(u, { children: [/* @__PURE__ */ d(p, {
			animation: "border",
			size: "sm",
			role: "status",
			className: "me-1"
		}), "Searching..."] }) : C ? /* @__PURE__ */ d("span", {
			className: "text-danger",
			children: C
		}) : x === "" ? null : T.length === 0 ? /* @__PURE__ */ d("span", {
			className: "text-muted",
			children: "No results found"
		}) : `${T.length} customers found`;
	}
	let I = F();
	return /* @__PURE__ */ f(m.Root, {
		open: j,
		onOpenChange: (e) => M(e),
		value: x,
		onValueChange: P,
		items: T,
		itemToStringValue: (e) => _(e),
		filter: null,
		...b,
		children: [/* @__PURE__ */ f(m.InputGroup, {
			className: "input-group input-group-sm",
			children: [
				l?.label && /* @__PURE__ */ d("label", {
					className: "input-group-text",
					htmlFor: l.labelProps?.htmlFor,
					children: l.label
				}),
				/* @__PURE__ */ d(m.Input, {
					className: "form-control",
					placeholder: "Customer No",
					...l?.inputProps
				}),
				/* @__PURE__ */ d(m.Trigger, {
					className: "btn btn-outline-secondary",
					children: /* @__PURE__ */ d("span", { className: j ? "bi-chevron-up" : "bi-chevron-down" })
				})
			]
		}), /* @__PURE__ */ d(e, {
			hidden: !I,
			children: /* @__PURE__ */ d(i, {
				sideOffset: 4,
				align: "start",
				children: /* @__PURE__ */ d(t, {
					"aria-busy": O || void 0,
					children: /* @__PURE__ */ f("div", {
						className: "bg-body p-1 border rounded",
						children: [/* @__PURE__ */ d(m.Status, { children: I && /* @__PURE__ */ d("div", {
							className: "text-secondary",
							children: I
						}) }), /* @__PURE__ */ d(n, { children: (e) => /* @__PURE__ */ d(r, {
							value: e,
							onClick: () => {
								y(e), M(!1);
							},
							children: /* @__PURE__ */ f("div", {
								className: "d-flex align-items-center=",
								style: { gap: "3rem" },
								children: [/* @__PURE__ */ d("div", {
									className: "flex-grow-1",
									children: /* @__PURE__ */ d("div", {
										className: "fw-bold",
										children: _(e)
									})
								}), /* @__PURE__ */ d("div", {
									className: "flex-shrink-0",
									children: e.CustomerName
								})]
							})
						}, _(e)) })]
					})
				})
			})
		})]
	});
}
v.displayName = "CustomerAutocomplete";
//#endregion
export { _ as n, g as r, v as t };

//# sourceMappingURL=customer-autocomplete-DK3amqYr.mjs.map