import { useCallback as e, useEffect as t, useRef as n, useState as r, useTransition as i } from "react";
import { fetchJSON as a } from "@chumsinc/ui-utils";
import { Fragment as o, jsx as s, jsxs as c } from "react/jsx-runtime";
import { Spinner as l } from "react-bootstrap";
import { Autocomplete as u } from "C:/Users/steve/PhpstormProjects/chums-components/node_modules/@base-ui/react/autocomplete/index.mjs";
import { useDebouncedCallback as d } from "@mantine/hooks";
//#region src/item-autocomplete/api.ts
async function f(e, t) {
	try {
		let n = new URLSearchParams();
		return t ? n.set("exact", e) : n.set("search", e), (await a(`/api/search/item.json?${n.toString()}`))?.result ?? [];
	} catch (e) {
		return e === "AbortError" ? [] : e instanceof Error ? (console.debug("fetchItemLookup()", e.message), Promise.reject(e)) : (console.debug("fetchItemLookup()", e), Promise.reject(/* @__PURE__ */ Error("Error in fetchItemLookup()")));
	}
}
var p = {
	Portal: "_Portal_4tv3b_3",
	Positioner: "_Positioner_4tv3b_83",
	Popup: "_Popup_4tv3b_93",
	List: "_List_4tv3b_101",
	Item: "_Item_4tv3b_109"
};
//#endregion
//#region src/item-autocomplete/ItemAutocomplete.tsx
function m({ slotProps: a, item: m, onSelectItem: h, ...g }) {
	let [_, v] = r(""), [y, b] = r(null), [x, S] = r([]), C = n(null), [w, T] = i(), { contains: E } = u.useFilter(), [D, O] = r(!1), k = d(e((e) => {
		let t = new AbortController();
		C.current?.abort(), C.current = t, T(async () => {
			b(null);
			let n = (await f(e)).filter((t) => E(t.ItemCode, e) || E(t.ItemCodeDesc, e));
			t.signal.aborted || T(() => {
				S(n);
			});
		});
	}, [E]), 350), A = (e) => {
		v(e);
		let t = new AbortController();
		if (C.current?.abort(), C.current = t, e === "") {
			C.current?.abort(), S([]), b(null);
			return;
		}
		k(e);
	};
	t(() => {
		T(() => {
			v(m ?? "");
		});
	}, [m, v]);
	function j() {
		return w ? /* @__PURE__ */ c(o, { children: [/* @__PURE__ */ s(l, {
			animation: "border",
			size: "sm",
			role: "status"
		}), "Searching..."] }) : y ? /* @__PURE__ */ s("span", {
			className: "text-danger",
			children: y
		}) : _ === "" ? null : x.length === 0 ? /* @__PURE__ */ s("span", {
			className: "text-muted",
			children: "No results found"
		}) : `${x.length} items found`;
	}
	let M = j();
	return /* @__PURE__ */ c(u.Root, {
		open: D,
		onOpenChange: (e) => O(e),
		value: _,
		onValueChange: A,
		items: x,
		itemToStringValue: (e) => e.ItemCode,
		filter: null,
		...g,
		children: [/* @__PURE__ */ c(u.InputGroup, {
			className: "input-group input-group-sm",
			children: [
				a?.label && /* @__PURE__ */ s("label", {
					className: "input-group-text",
					htmlFor: a.labelProps?.htmlFor,
					children: a.label
				}),
				/* @__PURE__ */ s(u.Input, {
					className: "form-control",
					placeholder: "Item Code",
					...a?.inputProps
				}),
				/* @__PURE__ */ s(u.Trigger, {
					className: "btn btn-outline-secondary",
					children: /* @__PURE__ */ s("span", { className: D ? "bi-chevron-up" : "bi-chevron-down" })
				})
			]
		}), /* @__PURE__ */ s(u.Portal, {
			hidden: !M,
			className: p.Portal,
			children: /* @__PURE__ */ s(u.Positioner, {
				sideOffset: 4,
				align: "start",
				className: p.Positioner,
				children: /* @__PURE__ */ s(u.Popup, {
					"aria-busy": w || void 0,
					className: p.Popup,
					children: /* @__PURE__ */ c("div", {
						className: "bg-body p-1 border rounded",
						children: [/* @__PURE__ */ s(u.Status, { children: M && /* @__PURE__ */ s("div", {
							className: "text-secondary",
							children: M
						}) }), /* @__PURE__ */ s(u.List, {
							className: p.List,
							children: (e) => /* @__PURE__ */ s(u.Item, {
								value: e,
								onClick: () => {
									h(e), O(!1);
								},
								className: p.Item,
								children: /* @__PURE__ */ c("div", {
									className: "d-flex align-items-center=",
									style: { gap: "3rem" },
									children: [/* @__PURE__ */ s("div", {
										className: "flex-grow-1",
										children: /* @__PURE__ */ s("div", {
											className: "fw-bold",
											children: e.ItemCode
										})
									}), /* @__PURE__ */ s("div", {
										className: "flex-shrink-0",
										children: e.ItemCodeDesc
									})]
								})
							}, e?.ItemCode)
						})]
					})
				})
			})
		})]
	});
}
m.displayName = "ItemAutocomplete";
//#endregion
export { f as n, m as t };
