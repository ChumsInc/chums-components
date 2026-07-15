import { useEffect as e, useRef as t, useState as n, useTransition as r } from "react";
import { fetchJSON as i } from "@chumsinc/ui-utils";
import { Fragment as a, jsx as o, jsxs as s } from "react/jsx-runtime";
import { Spinner as c } from "react-bootstrap";
import { Autocomplete as l } from "@base-ui/react";
import { useDebouncedCallback as u } from "@mantine/hooks";
import d from "@emotion/styled";
//#region src/customer-autocomplete/api.ts
async function f(e, t) {
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
var p = (e) => [e.ARDivisionNo, e.CustomerNo].filter((e) => !!e).join("-"), m = d(l.Portal)`
    --bs-dropdown-zindex: 1000;
    --bs-dropdown-min-width: 10rem;
    --bs-dropdown-padding-x: 0;
    --bs-dropdown-padding-y: 0.5rem;
    --bs-dropdown-spacer: 0.125rem;
    --bs-dropdown-font-size: 1rem;
    --bs-dropdown-color: var(--bs-body-color);
    --bs-dropdown-bg: var(--bs-body-bg);
    --bs-dropdown-border-color: var(--bs-border-color-translucent);
    --bs-dropdown-border-radius: var(--bs-border-radius);
    --bs-dropdown-border-width: var(--bs-border-width);
    --bs-dropdown-inner-border-radius: calc(var(--bs-border-radius) - var(--bs-border-width));
    --bs-dropdown-divider-bg: var(--bs-border-color-translucent);
    --bs-dropdown-divider-margin-y: 0.5rem;
    --bs-dropdown-box-shadow: var(--bs-box-shadow);
    --bs-dropdown-link-color: var(--bs-body-color);
    --bs-dropdown-link-hover-color: var(--bs-body-color);
    --bs-dropdown-link-hover-bg: var(--bs-tertiary-bg);
    --bs-dropdown-link-active-color: #fff;
    --bs-dropdown-link-active-bg: #0d6efd;
    --bs-dropdown-link-disabled-color: var(--bs-tertiary-color);
    --bs-dropdown-item-padding-x: 1rem;
    --bs-dropdown-item-padding-y: 0.25rem;
    --bs-dropdown-header-color: #6c757d;
    --bs-dropdown-header-padding-x: 1rem;
    --bs-dropdown-header-padding-y: 0.5rem;
    z-index: var(--bs-dropdown-zindex);
    min-width: var(--bs-dropdown-min-width);
    padding: var(--bs-dropdown-padding-y) var(--bs-dropdown-padding-x);
    margin: 0;
    font-size: var(--bs-dropdown-font-size);
    color: var(--bs-dropdown-color);
    text-align: left;
    list-style: none;
    background-color: var(--bs-dropdown-bg);
    background-clip: padding-box;
    border: var(--bs-dropdown-border-width) solid var(--bs-dropdown-border-color);
    border-radius: var(--bs-dropdown-border-radius);
`, h = d(l.Popup)`
    background-color: var(--bs-dropdown-bg);
    color: var(--bs-dropdown-color);
`, g = d(l.Item)`
    padding: var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x);
    color: var(--bs-dropdown-link-color);
    &[data-highlighted] {
        background-color: var(--bs-dropdown-link-active-bg);
        color: var(--bs-dropdown-link-active-color)
    }
`, _ = d(l.List)`
    max-height: 50vh;
    overflow-y: auto;
`, v = d(l.Positioner)`
    z-index: 5;
    box-shadow: var(--bs-box-shadow);
    border-radius: var(--bs-border-radius);
`;
//#endregion
//#region src/customer-autocomplete/CustomerAutocomplete.tsx
function y({ slotProps: i, customer: d, onSelectCustomer: y, data: b, children: x, ...S }) {
	let [C, w] = n(""), [T, E] = n(null), [D, O] = n([]), k = t(null), [A, j] = r(), { contains: M } = l.useFilter(), [N, P] = n(!1);
	e(() => {
		j(() => {
			w(d ? p(d) : "");
		});
	}, [d]);
	let F = u((e) => {
		if (b) {
			let t = b.filter((t) => M(p(t), e) || M(t.CustomerName, e));
			j(() => {
				O(t);
			});
			return;
		}
		let t = new AbortController();
		k.current?.abort(), k.current = t, j(async () => {
			try {
				E(null);
				let n = (await f(e, t.signal)).filter((t) => M(p(t), e) || M(t.CustomerName, e));
				if (t.signal.aborted) return;
				j(() => {
					O(n);
				});
			} catch (e) {
				E(e instanceof Error ? e.message : "Error in searchChangeHandler()");
			}
		});
	}, 350), I = (e) => {
		if (w(e), e === "") {
			k.current?.abort(), O([]), E(null);
			return;
		}
		F(e);
	};
	function L() {
		return A ? /* @__PURE__ */ s(a, { children: [/* @__PURE__ */ o(c, {
			animation: "border",
			size: "sm",
			role: "status",
			className: "me-1"
		}), "Searching..."] }) : T ? /* @__PURE__ */ o("span", {
			className: "text-danger",
			children: T
		}) : C === "" ? null : D.length === 0 ? /* @__PURE__ */ o("span", {
			className: "text-muted",
			children: "No results found"
		}) : `${D.length} customers found`;
	}
	let R = L();
	return /* @__PURE__ */ s(l.Root, {
		open: N,
		onOpenChange: (e) => P(e),
		value: C,
		onValueChange: I,
		items: D,
		itemToStringValue: (e) => p(e),
		filter: null,
		...S,
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
					"aria-label": "Toggle customer autocomplete list",
					children: /* @__PURE__ */ o("span", { className: N ? "bi-chevron-up" : "bi-chevron-down" })
				}),
				x
			]
		}), /* @__PURE__ */ o(m, {
			hidden: !R,
			children: /* @__PURE__ */ o(v, {
				sideOffset: 4,
				align: "start",
				children: /* @__PURE__ */ o(h, {
					"aria-busy": A || void 0,
					children: /* @__PURE__ */ s("div", {
						className: "bg-body p-1 border rounded",
						children: [/* @__PURE__ */ o(l.Status, { children: R && /* @__PURE__ */ o("div", {
							className: "text-secondary",
							children: R
						}) }), /* @__PURE__ */ o(_, { children: (e) => /* @__PURE__ */ o(g, {
							value: e,
							onClick: () => {
								y(e), P(!1);
							},
							children: /* @__PURE__ */ s("div", {
								className: "d-flex align-items-center=",
								style: { gap: "3rem" },
								children: [/* @__PURE__ */ o("div", {
									className: "flex-grow-1",
									children: /* @__PURE__ */ o("div", {
										className: "fw-bold",
										children: p(e)
									})
								}), /* @__PURE__ */ o("div", {
									className: "flex-shrink-0",
									children: e.CustomerName
								})]
							})
						}, p(e)) })]
					})
				})
			})
		})]
	});
}
y.displayName = "CustomerAutocomplete";
//#endregion
export { h as a, f as c, g as i, v as n, m as o, _ as r, p as s, y as t };

//# sourceMappingURL=customer-autocomplete-CkzS7c1W.mjs.map