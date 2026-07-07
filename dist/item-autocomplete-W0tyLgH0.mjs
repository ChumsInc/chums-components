import { a as e, i as t, n, r, t as i } from "./AutocompletePositioner-Tzlxi8zX.mjs";
import { useCallback as a, useEffect as o, useRef as s, useState as c, useTransition as l } from "react";
import { fetchJSON as u } from "@chumsinc/ui-utils";
import { Fragment as d, jsx as f, jsxs as p } from "react/jsx-runtime";
import { Spinner as m } from "react-bootstrap";
import { Autocomplete as h } from "@base-ui/react";
import { useDebouncedCallback as g } from "@mantine/hooks";
//#region src/item-autocomplete/api.ts
async function _(e, t) {
	try {
		let n = new URLSearchParams();
		return t ? n.set("exact", e) : n.set("search", e), (await u(`/api/search/item.json?${n.toString()}`))?.result ?? [];
	} catch (e) {
		return e === "AbortError" ? [] : e instanceof Error ? (console.debug("fetchItemLookup()", e.message), Promise.reject(e)) : (console.debug("fetchItemLookup()", e), Promise.reject(/* @__PURE__ */ Error("Error in fetchItemLookup()")));
	}
}
//#endregion
//#region src/item-autocomplete/ItemAutocomplete.tsx
function v({ slotProps: u, item: v, onSelectItem: y, children: b, ...x }) {
	let [S, C] = c(""), [w, T] = c(null), [E, D] = c([]), O = s(null), [k, A] = l(), { contains: j } = h.useFilter(), [M, N] = c(!1), P = g(a((e) => {
		let t = new AbortController();
		O.current?.abort(), O.current = t, A(async () => {
			T(null);
			let n = (await _(e)).filter((t) => j(t.ItemCode, e) || j(t.ItemCodeDesc, e));
			t.signal.aborted || A(() => {
				D(n);
			});
		});
	}, [j]), 350), F = (e) => {
		C(e);
		let t = new AbortController();
		if (O.current?.abort(), O.current = t, e === "") {
			O.current?.abort(), D([]), T(null);
			return;
		}
		P(e);
	};
	o(() => {
		A(() => {
			C(v ?? "");
		});
	}, [v, C]);
	function I() {
		return k ? /* @__PURE__ */ p(d, { children: [/* @__PURE__ */ f(m, {
			animation: "border",
			size: "sm",
			role: "status",
			className: "me-1"
		}), "Searching..."] }) : w ? /* @__PURE__ */ f("span", {
			className: "text-danger",
			children: w
		}) : S === "" ? null : E.length === 0 ? /* @__PURE__ */ f("span", {
			className: "text-muted",
			children: "No results found"
		}) : `${E.length} items found`;
	}
	let L = I();
	return /* @__PURE__ */ p(h.Root, {
		open: M,
		onOpenChange: (e) => N(e),
		value: S,
		onValueChange: F,
		items: E,
		itemToStringValue: (e) => e.ItemCode,
		filter: null,
		...x,
		children: [/* @__PURE__ */ p(h.InputGroup, {
			className: "input-group input-group-sm",
			children: [
				u?.label && /* @__PURE__ */ f("label", {
					className: "input-group-text",
					htmlFor: u.labelProps?.htmlFor,
					children: u.label
				}),
				/* @__PURE__ */ f(h.Input, {
					className: "form-control",
					placeholder: "Item Code",
					...u?.inputProps
				}),
				/* @__PURE__ */ f(h.Trigger, {
					className: "btn btn-outline-secondary",
					children: /* @__PURE__ */ f("span", { className: M ? "bi-chevron-up" : "bi-chevron-down" })
				}),
				b
			]
		}), /* @__PURE__ */ f(e, {
			hidden: !L,
			children: /* @__PURE__ */ f(i, {
				sideOffset: 4,
				align: "start",
				children: /* @__PURE__ */ f(t, {
					"aria-busy": k || void 0,
					children: /* @__PURE__ */ p("div", {
						className: "bg-body p-1 border rounded",
						children: [/* @__PURE__ */ f(h.Status, { children: L && /* @__PURE__ */ f("div", {
							className: "text-secondary",
							children: L
						}) }), /* @__PURE__ */ f(n, { children: (e) => /* @__PURE__ */ f(r, {
							value: e,
							onClick: () => {
								y(e), N(!1);
							},
							children: /* @__PURE__ */ p("div", {
								className: "d-flex align-items-center=",
								style: { gap: "3rem" },
								children: [/* @__PURE__ */ f("div", {
									className: "flex-grow-1",
									children: /* @__PURE__ */ f("div", {
										className: "fw-bold",
										children: e.ItemCode
									})
								}), /* @__PURE__ */ f("div", {
									className: "flex-shrink-0",
									children: e.ItemCodeDesc
								})]
							})
						}, e?.ItemCode) })]
					})
				})
			})
		})]
	});
}
v.displayName = "ItemAutocomplete";
//#endregion
export { _ as n, v as t };

//# sourceMappingURL=item-autocomplete-W0tyLgH0.mjs.map