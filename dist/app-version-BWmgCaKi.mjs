import { t as e } from "./jsx-runtime-Boo2vksn.mjs";
import { createContext as t, startTransition as n, useCallback as r, useContext as i, useEffect as a, useMemo as o, useRef as s, useState as c } from "react";
import { fetchJSON as l } from "@chumsinc/ui-utils";
import { Button as u, Spinner as d, Toast as f, ToastContainer as p } from "react-bootstrap";
//#region src/app-version/VersionContext.tsx
var m = t(null), h = e();
function g({ children: e, defaultInterval: t, versionUrl: i, onError: u }) {
	let [d, f] = c(null), [p, g] = c("idle"), [_, v] = c(!1), y = s(0), b = s(null), x = s(!1), S = t ?? 3600 * 1e3, C = i ?? "./package.json", w = r(async (e, t) => {
		try {
			if (!window.navigator.onLine) return;
			b.current = new AbortController(), g("loading");
			let t = await l(C, {
				cache: "no-store",
				signal: b.current.signal
			});
			if (b.current = null, g("idle"), !e) {
				f(t?.version ?? null), v(!1);
				return;
			}
			t?.version && t.version !== e && v(t.version);
		} catch (e) {
			console.log("VersionProvider.loadVersion() error", e), t && t(e instanceof Error ? e.message : "Error in VersionProvider.loadVersion()"), g("idle");
		}
	}, [C]);
	a(() => () => {
		window.clearInterval(y.current);
	}, []), a(() => (n(() => {
		x.current || (x.current = !0, w(null, u).catch(console.error)), S > 0 && (y.current = window.setInterval(w, S));
	}), () => {
		y.current && window.clearInterval(y.current);
	}), [
		S,
		u,
		w
	]);
	let T = r(() => {
		b.current && b.current.abort("User clicked reload button"), window.clearInterval(y.current), w(d, u).catch(console.error), S > 0 && (y.current = window.setInterval(w, S));
	}, [
		d,
		u,
		w,
		S
	]);
	return /* @__PURE__ */ (0, h.jsx)(m, {
		value: o(() => ({
			version: d,
			status: p,
			hasUpdate: _,
			onClick: T,
			loadVersion: w
		}), [
			T,
			d,
			p,
			_,
			w
		]),
		children: e
	});
}
//#endregion
//#region src/app-version/useVersion.ts
var _ = () => {
	let e = i(m);
	if (!e) throw Error("useVersion must be used within a VersionProvider");
	return e;
};
//#endregion
//#region src/app-version/CurrentVersion.tsx
function v({ versionContainerProps: e, spinnerProps: t, ...n }) {
	let { version: r, status: i, onClick: a, hasUpdate: o } = _();
	return /* @__PURE__ */ (0, h.jsx)(u, {
		variant: o ? "warning" : "link",
		className: "d-flex",
		onClick: a,
		"aria-description": "check for updates",
		style: { cursor: "pointer" },
		...n,
		children: /* @__PURE__ */ (0, h.jsxs)("div", {
			className: "d-flex gap-2 align-items-center",
			children: [
				/* @__PURE__ */ (0, h.jsx)("span", { className: "bi-info-circle" }),
				/* @__PURE__ */ (0, h.jsx)("span", { children: "Version:" }),
				/* @__PURE__ */ (0, h.jsx)("span", {
					...e,
					children: r ?? (i === "loading" ? "loading" : "unknown")
				}),
				i === "loading" && /* @__PURE__ */ (0, h.jsx)(d, {
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
	let { hasUpdate: e } = _(), [t, r] = c(!1);
	a(() => {
		n(() => {
			e && r(!0);
		});
	}, [e]);
	let i = () => {
		r(!1);
	}, o = typeof e == "string" ? e : null;
	return /* @__PURE__ */ (0, h.jsx)(p, {
		position: "bottom-end",
		children: /* @__PURE__ */ (0, h.jsxs)(f, {
			show: t,
			onClose: i,
			bg: "warning",
			className: "text-dark",
			children: [/* @__PURE__ */ (0, h.jsx)(f.Header, {
				closeButton: !0,
				children: /* @__PURE__ */ (0, h.jsx)("strong", {
					className: "me-auto",
					children: "Update Available"
				})
			}), /* @__PURE__ */ (0, h.jsxs)(f.Body, { children: [/* @__PURE__ */ (0, h.jsx)("span", {
				className: "me-2",
				children: `Version ${o} is available.`
			}), /* @__PURE__ */ (0, h.jsx)("span", { children: "Please refresh the page to update." })] })]
		})
	});
}
//#endregion
//#region src/app-version/AppVersion.tsx
function b({ versionComponent: e, toastComponent: t, defaultInterval: n, versionUrl: r, onError: i }) {
	return /* @__PURE__ */ (0, h.jsxs)(g, {
		defaultInterval: n,
		versionUrl: r,
		onError: i,
		children: [e || /* @__PURE__ */ (0, h.jsx)(v, {}), t || /* @__PURE__ */ (0, h.jsx)(y, {})]
	});
}
b.displayName = "AppVersion";
//#endregion
export { g as a, _ as i, y as n, m as o, v as r, b as t };

//# sourceMappingURL=app-version-BWmgCaKi.mjs.map