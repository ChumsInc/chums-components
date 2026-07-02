import { useEffect as e, useRef as t, useState as n, useTransition as r } from "react";
import { fetchJSON as i } from "@chumsinc/ui-utils";
import { Fragment as a, jsx as o, jsxs as s } from "react/jsx-runtime";
import { Spinner as c } from "react-bootstrap";
import { Autocomplete as l } from "C:/Users/steve/PhpstormProjects/chums-components/node_modules/@base-ui/react/autocomplete/index.mjs";
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
var f = (e) => [e.ARDivisionNo, e.CustomerNo].filter((e) => !!e).join("-"), p = {
	Portal: "_Portal_4tv3b_3",
	Positioner: "_Positioner_4tv3b_83",
	Popup: "_Popup_4tv3b_93",
	List: "_List_4tv3b_101",
	Item: "_Item_4tv3b_109"
};
//#endregion
//#region src/customer-autocomplete/CustomerAutocomplete.tsx
function m({ slotProps: i, customer: m, onSelectCustomer: h, ...g }) {
	let [_, v] = n(""), [y, b] = n(null), [x, S] = n([]), C = t(null), [w, T] = r(), { contains: E } = l.useFilter(), [D, O] = n(!1);
	e(() => {
		T(() => {
			v(m ? f(m) : "");
		});
	}, [m]);
	let k = u((e) => {
		let t = new AbortController();
		C.current?.abort(), C.current = t, T(async () => {
			try {
				b(null);
				let n = (await d(e, t.signal)).filter((t) => E(f(t), e) || E(t.CustomerName, e));
				if (t.signal.aborted) return;
				T(() => {
					S(n);
				});
			} catch (e) {
				b(e instanceof Error ? e.message : "Error in searchChangeHandler()");
			}
		});
	}, 350), A = (e) => {
		if (v(e), e === "") {
			C.current?.abort(), S([]), b(null);
			return;
		}
		k(e);
	};
	function j() {
		return w ? /* @__PURE__ */ s(a, { children: [/* @__PURE__ */ o(c, {
			animation: "border",
			size: "sm",
			role: "status"
		}), "Searching..."] }) : y ? /* @__PURE__ */ o("span", {
			className: "text-danger",
			children: y
		}) : _ === "" ? null : x.length === 0 ? /* @__PURE__ */ o("span", {
			className: "text-muted",
			children: "No results found"
		}) : `${x.length} customers found`;
	}
	let M = j();
	return /* @__PURE__ */ s(l.Root, {
		open: D,
		onOpenChange: (e) => O(e),
		value: _,
		onValueChange: A,
		items: x,
		itemToStringValue: (e) => f(e),
		filter: null,
		...g,
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
					children: /* @__PURE__ */ o("span", { className: D ? "bi-chevron-up" : "bi-chevron-down" })
				})
			]
		}), /* @__PURE__ */ o(l.Portal, {
			hidden: !M,
			className: p.Portal,
			children: /* @__PURE__ */ o(l.Positioner, {
				sideOffset: 4,
				align: "start",
				children: /* @__PURE__ */ o(l.Popup, {
					"aria-busy": w || void 0,
					className: p.Popup,
					children: /* @__PURE__ */ s("div", {
						className: "bg-body p-1 border rounded",
						children: [/* @__PURE__ */ o(l.Status, { children: M && /* @__PURE__ */ o("div", {
							className: "text-secondary",
							children: M
						}) }), /* @__PURE__ */ o(l.List, { children: (e) => /* @__PURE__ */ o(l.Item, {
							value: e,
							onClick: () => {
								h(e), O(!1);
							},
							className: p.Item,
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
						}, f(e)) })]
					})
				})
			})
		})]
	});
}
m.displayName = "CustomerAutocomplete";
//#endregion
export { f as n, d as r, m as t };
