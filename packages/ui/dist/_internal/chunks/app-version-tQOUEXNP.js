import { createContext as e, startTransition as t, useCallback as n, useContext as r, useEffect as i, useMemo as a, useRef as o, useState as s } from "react";
import { fetchJSON as c } from "@chumsinc/ui-utils";
import { jsx as l, jsxs as u } from "react/jsx-runtime";
import { Button as d, Spinner as f, Toast as p, ToastContainer as m } from "react-bootstrap";
//#region src/app-version/VersionContext.tsx
var h = e(null);
//#endregion
//#region src/app-version/VersionProvider.tsx
function g({ children: e, defaultInterval: r, versionUrl: u, onError: d }) {
	let [f, p] = s(null), [m, g] = s("idle"), [_, v] = s(!1), y = o(0), b = o(null), x = o(!1), S = r ?? 3600 * 1e3, C = u ?? "./package.json", w = n(async (e, t) => {
		try {
			if (!window.navigator.onLine) return;
			b.current = new AbortController(), g("loading");
			let t = await c(C, {
				cache: "no-store",
				signal: b.current.signal
			});
			if (b.current = null, g("idle"), !e) {
				p(t?.version ?? null), v(!1);
				return;
			}
			t?.version && t.version !== e && v(t.version);
		} catch (e) {
			console.log("VersionProvider.loadVersion() error", e), t && t(e instanceof Error ? e.message : "Error in VersionProvider.loadVersion()"), g("idle");
		}
	}, [C]);
	i(() => (t(() => {
		x.current || (x.current = !0, w(null, d).catch(console.error)), S > 0 && (y.current = window.setInterval(w, S));
	}), () => {
		y.current && window.clearInterval(y.current);
	}), [
		S,
		d,
		w
	]);
	let T = n(() => {
		b.current && b.current.abort("User clicked reload button"), window.clearInterval(y.current), w(f, d).catch(console.error), S > 0 && (y.current = window.setInterval(w, S));
	}, [
		f,
		d,
		w,
		S
	]);
	return /* @__PURE__ */ l(h, {
		value: a(() => ({
			version: f,
			status: m,
			hasUpdate: _,
			onClick: T,
			loadVersion: w
		}), [
			T,
			f,
			m,
			_,
			w
		]),
		children: e
	});
}
//#endregion
//#region src/app-version/useVersion.ts
var _ = () => {
	let e = r(h);
	if (!e) throw Error("useVersion must be used within a VersionProvider");
	return e;
};
//#endregion
//#region src/app-version/CurrentVersion.tsx
function v({ versionContainerProps: e, spinnerProps: t, ...n }) {
	let { version: r, status: i, onClick: a, hasUpdate: o } = _();
	return /* @__PURE__ */ l(d, {
		variant: o ? "warning" : "link",
		className: "d-flex",
		onClick: a,
		"aria-description": "check for updates",
		style: { cursor: "pointer" },
		...n,
		children: /* @__PURE__ */ u("div", {
			className: "d-flex gap-2 align-items-center",
			children: [
				/* @__PURE__ */ l("span", { className: "bi-info-circle" }),
				/* @__PURE__ */ l("span", { children: "Version:" }),
				/* @__PURE__ */ l("span", {
					...e,
					children: r ?? (i === "loading" ? "loading" : "unknown")
				}),
				i === "loading" && /* @__PURE__ */ l(f, {
					animation: "border",
					size: "sm",
					className: "ms-2",
					...t
				})
			]
		})
	});
}
//#endregion
//#region src/app-version/VersionUpdateToast.tsx
function y() {
	let { hasUpdate: e } = _(), [n, r] = s(!1);
	i(() => {
		t(() => {
			e && r(!0);
		});
	}, [e]);
	let a = () => {
		r(!1);
	}, o = typeof e == "string" ? e : null;
	return /* @__PURE__ */ l(m, {
		position: "bottom-end",
		children: /* @__PURE__ */ u(p, {
			show: n,
			onClose: a,
			bg: "warning",
			className: "text-dark",
			children: [/* @__PURE__ */ l(p.Header, {
				closeButton: !0,
				children: /* @__PURE__ */ l("strong", {
					className: "me-auto",
					children: "Update Available"
				})
			}), /* @__PURE__ */ u(p.Body, { children: [/* @__PURE__ */ l("span", {
				className: "me-2",
				children: `Version ${o} is available.`
			}), /* @__PURE__ */ l("span", { children: "Please refresh the page to update." })] })]
		})
	});
}
//#endregion
//#region src/app-version/AppVersion.tsx
function b({ versionComponent: e, toastComponent: t, defaultInterval: n, versionUrl: r, onError: i }) {
	return /* @__PURE__ */ u(g, {
		defaultInterval: n,
		versionUrl: r,
		onError: i,
		children: [e || /* @__PURE__ */ l(v, {}), t || /* @__PURE__ */ l(y, {})]
	});
}
b.displayName = "AppVersion";
//#endregion
export { g as a, _ as i, y as n, h as o, v as r, b as t };
