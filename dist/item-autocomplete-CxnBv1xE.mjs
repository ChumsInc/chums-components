import { useCallback as e, useEffect as t, useRef as n, useState as r, useTransition as i } from "react";
import { fetchJSON as a } from "@chumsinc/ui-utils";
import { Fragment as o, jsx as s, jsxs as c } from "react/jsx-runtime";
import { Spinner as l } from "react-bootstrap";
import { Autocomplete as u } from "@base-ui/react";
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
//#endregion
//#region src/item-autocomplete/ItemAutocomplete.tsx
function p({ slotProps: a, item: p, onSelectItem: m, ...h }) {
	let [g, _] = r(""), [v, y] = r(null), [b, x] = r([]), S = n(null), [C, w] = i(), { contains: T } = u.useFilter(), [E, D] = r(!1), O = d(e((e) => {
		let t = new AbortController();
		S.current?.abort(), S.current = t, w(async () => {
			y(null);
			let n = (await f(e)).filter((t) => T(t.ItemCode, e) || T(t.ItemCodeDesc, e));
			t.signal.aborted || w(() => {
				x(n);
			});
		});
	}, [T]), 350), k = (e) => {
		_(e);
		let t = new AbortController();
		if (S.current?.abort(), S.current = t, e === "") {
			S.current?.abort(), x([]), y(null);
			return;
		}
		O(e);
	};
	t(() => {
		w(() => {
			_(p ?? "");
		});
	}, [p, _]);
	function A() {
		return C ? /* @__PURE__ */ c(o, { children: [/* @__PURE__ */ s(l, {
			animation: "border",
			size: "sm",
			role: "status",
			className: "me-1"
		}), "Searching..."] }) : v ? /* @__PURE__ */ s("span", {
			className: "text-danger",
			children: v
		}) : g === "" ? null : b.length === 0 ? /* @__PURE__ */ s("span", {
			className: "text-muted",
			children: "No results found"
		}) : `${b.length} items found`;
	}
	let j = A();
	return /* @__PURE__ */ c(u.Root, {
		open: E,
		onOpenChange: (e) => D(e),
		value: g,
		onValueChange: k,
		items: b,
		itemToStringValue: (e) => e.ItemCode,
		filter: null,
		...h,
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
					children: /* @__PURE__ */ s("span", { className: E ? "bi-chevron-up" : "bi-chevron-down" })
				})
			]
		}), /* @__PURE__ */ s(u.Portal, {
			hidden: !j,
			className: "autocomplete-portal",
			children: /* @__PURE__ */ s(u.Positioner, {
				sideOffset: 4,
				align: "start",
				className: "autocomplete-positioner",
				children: /* @__PURE__ */ s(u.Popup, {
					"aria-busy": C || void 0,
					className: "autocomplete-popup",
					children: /* @__PURE__ */ c("div", {
						className: "bg-body p-1 border rounded",
						children: [/* @__PURE__ */ s(u.Status, { children: j && /* @__PURE__ */ s("div", {
							className: "text-secondary",
							children: j
						}) }), /* @__PURE__ */ s(u.List, {
							className: "autocomplete-list",
							children: (e) => /* @__PURE__ */ s(u.Item, {
								value: e,
								onClick: () => {
									m(e), D(!1);
								},
								className: "autocomplete-item",
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
p.displayName = "ItemAutocomplete";
//#endregion
export { f as n, p as t };

//# sourceMappingURL=item-autocomplete-CxnBv1xE.mjs.map