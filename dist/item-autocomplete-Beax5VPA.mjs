import { t as e } from "./jsx-runtime-Boo2vksn.mjs";
import { useCallback as t, useEffect as n, useRef as r, useState as i, useTransition as a } from "react";
import { fetchJSON as o } from "@chumsinc/ui-utils";
import { Spinner as s } from "react-bootstrap";
import { Autocomplete as c } from "@base-ui/react";
import { useDebouncedCallback as l } from "@mantine/hooks";
//#region src/item-autocomplete/api.ts
async function u(e, t) {
	try {
		let n = new URLSearchParams();
		return t ? n.set("exact", e) : n.set("search", e), (await o(`/api/search/item.json?${n.toString()}`))?.result ?? [];
	} catch (e) {
		return e === "AbortError" ? [] : e instanceof Error ? (console.debug("fetchItemLookup()", e.message), Promise.reject(e)) : (console.debug("fetchItemLookup()", e), Promise.reject(/* @__PURE__ */ Error("Error in fetchItemLookup()")));
	}
}
//#endregion
//#region src/item-autocomplete/ItemAutocomplete.tsx
var d = e();
function f({ slotProps: e, item: o, onSelectItem: f, ...p }) {
	let [m, h] = i(""), [g, _] = i(null), [v, y] = i([]), b = r(null), [x, S] = a(), { contains: C } = c.useFilter(), [w, T] = i(!1), E = l(t((e) => {
		let t = new AbortController();
		b.current?.abort(), b.current = t, S(async () => {
			_(null);
			let n = (await u(e)).filter((t) => C(t.ItemCode, e) || C(t.ItemCodeDesc, e));
			t.signal.aborted || S(() => {
				y(n);
			});
		});
	}, [C]), 350), D = (e) => {
		h(e);
		let t = new AbortController();
		if (b.current?.abort(), b.current = t, e === "") {
			b.current?.abort(), y([]), _(null);
			return;
		}
		E(e);
	};
	n(() => {
		S(() => {
			h(o ?? "");
		});
	}, [o, h]);
	function O() {
		return x ? /* @__PURE__ */ (0, d.jsxs)(d.Fragment, { children: [/* @__PURE__ */ (0, d.jsx)(s, {
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
		}) : `${v.length} items found`;
	}
	let k = O();
	return /* @__PURE__ */ (0, d.jsxs)(c.Root, {
		open: w,
		onOpenChange: (e) => T(e),
		value: m,
		onValueChange: D,
		items: v,
		itemToStringValue: (e) => e.ItemCode,
		filter: null,
		...p,
		children: [/* @__PURE__ */ (0, d.jsxs)(c.InputGroup, {
			className: "input-group input-group-sm",
			children: [
				e?.label && /* @__PURE__ */ (0, d.jsx)("label", {
					className: "input-group-text",
					htmlFor: e.labelProps?.htmlFor,
					children: e.label
				}),
				/* @__PURE__ */ (0, d.jsx)(c.Input, {
					className: "form-control",
					placeholder: "Item Code",
					...e?.inputProps
				}),
				/* @__PURE__ */ (0, d.jsx)(c.Trigger, {
					className: "btn btn-outline-secondary",
					children: /* @__PURE__ */ (0, d.jsx)("span", { className: w ? "bi-chevron-up" : "bi-chevron-down" })
				})
			]
		}), /* @__PURE__ */ (0, d.jsx)(c.Portal, {
			hidden: !k,
			className: "autocomplete-portal",
			children: /* @__PURE__ */ (0, d.jsx)(c.Positioner, {
				sideOffset: 4,
				align: "start",
				className: "autocomplete-positioner",
				children: /* @__PURE__ */ (0, d.jsx)(c.Popup, {
					"aria-busy": x || void 0,
					className: "autocomplete-popup",
					children: /* @__PURE__ */ (0, d.jsxs)("div", {
						className: "bg-body p-1 border rounded",
						children: [/* @__PURE__ */ (0, d.jsx)(c.Status, { children: k && /* @__PURE__ */ (0, d.jsx)("div", {
							className: "text-secondary",
							children: k
						}) }), /* @__PURE__ */ (0, d.jsx)(c.List, {
							className: "autocomplete-list",
							children: (e) => /* @__PURE__ */ (0, d.jsx)(c.Item, {
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
											children: e.ItemCode
										})
									}), /* @__PURE__ */ (0, d.jsx)("div", {
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
f.displayName = "ItemAutocomplete";
//#endregion
export { u as n, f as t };

//# sourceMappingURL=item-autocomplete-Beax5VPA.mjs.map