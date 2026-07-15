import { a as e, i as t, n, o as r, r as i } from "./customer-autocomplete-CkzS7c1W.mjs";
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
function v({ slotProps: u, item: v, data: y, onSelectItem: b, children: x, ...S }) {
	let [C, w] = c(""), [T, E] = c(null), [D, O] = c([]), k = s(null), [A, j] = l(), { contains: M } = h.useFilter(), [N, P] = c(!1), F = g(a((e) => {
		if (y) {
			let t = y.filter((t) => M(t.ItemCode, e) || M(t.ItemCodeDesc, e));
			j(() => {
				O(t);
			});
			return;
		}
		let t = new AbortController();
		k.current?.abort(), k.current = t, j(async () => {
			E(null);
			let n = (await _(e)).filter((t) => M(t.ItemCode, e) || M(t.ItemCodeDesc, e));
			t.signal.aborted || j(() => {
				O(n);
			});
		});
	}, [M, y]), 350), I = (e) => {
		w(e);
		let t = new AbortController();
		if (k.current?.abort(), k.current = t, e === "") {
			k.current?.abort(), O([]), E(null);
			return;
		}
		F(e);
	};
	o(() => {
		j(() => {
			w(v ?? "");
		});
	}, [v, w]);
	function L() {
		return A ? /* @__PURE__ */ p(d, { children: [/* @__PURE__ */ f(m, {
			animation: "border",
			size: "sm",
			role: "status",
			className: "me-1"
		}), "Searching..."] }) : T ? /* @__PURE__ */ f("span", {
			className: "text-danger",
			children: T
		}) : C === "" ? null : D.length === 0 ? /* @__PURE__ */ f("span", {
			className: "text-muted",
			children: "No results found"
		}) : `${D.length} items found`;
	}
	let R = L();
	return /* @__PURE__ */ p(h.Root, {
		open: N,
		onOpenChange: (e) => P(e),
		value: C,
		onValueChange: I,
		items: D,
		itemToStringValue: (e) => e.ItemCode,
		filter: null,
		...S,
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
					"aria-label": "Toggle item autocomplete list",
					children: /* @__PURE__ */ f("span", { className: N ? "bi-chevron-up" : "bi-chevron-down" })
				}),
				x
			]
		}), /* @__PURE__ */ f(r, {
			hidden: !R,
			children: /* @__PURE__ */ f(n, {
				sideOffset: 4,
				align: "start",
				children: /* @__PURE__ */ f(e, {
					"aria-busy": A || void 0,
					children: /* @__PURE__ */ p("div", {
						className: "bg-body p-1 border rounded",
						children: [/* @__PURE__ */ f(h.Status, { children: R && /* @__PURE__ */ f("div", {
							className: "text-secondary",
							children: R
						}) }), /* @__PURE__ */ f(i, { children: (e) => /* @__PURE__ */ f(t, {
							value: e,
							onClick: () => {
								b(e), P(!1);
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

//# sourceMappingURL=item-autocomplete-CIk91Zq3.mjs.map