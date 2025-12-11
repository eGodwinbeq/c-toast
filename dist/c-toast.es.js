import { ref as w, computed as T, createElementBlock as f, openBlock as l, normalizeClass as u, createElementVNode as c, createBlock as p, resolveDynamicComponent as h, toDisplayString as k, onMounted as I, onUnmounted as _, createVNode as y, Teleport as $, TransitionGroup as S, withCtx as B, Fragment as N, renderList as E, unref as b } from "vue";
const d = w([]);
let M = 0;
function v() {
  const e = (n, s = "info", g = 3e3) => {
    const x = ++M;
    return d.value.push({ id: x, message: n, type: s, duration: g }), x;
  };
  return {
    toasts: d,
    addToast: e,
    removeToast: (n) => {
      const s = d.value.findIndex((g) => g.id === n);
      s > -1 && d.value.splice(s, 1);
    },
    success: (n, s = 3e3) => e(n, "success", s),
    error: (n, s = 4e3) => e(n, "error", s),
    warning: (n, s = 3500) => e(n, "warning", s),
    info: (n, s = 3e3) => e(n, "info", s),
    clear: () => {
      d.value = [];
    }
  };
}
const z = { class: "flex-shrink-0" }, C = {
  __name: "CToast",
  props: {
    message: {
      type: String,
      required: !0
    },
    type: {
      type: String,
      default: "info",
      validator: (e) => ["success", "error", "warning", "info"].includes(e)
    }
  },
  emits: ["close"],
  setup(e) {
    const i = e, t = {
      success: {
        bg: "bg-green-50",
        border: "border-green-200",
        icon: "text-green-500",
        text: "text-green-900"
      },
      error: {
        bg: "bg-red-50",
        border: "border-red-200",
        icon: "text-red-500",
        text: "text-red-900"
      },
      warning: {
        bg: "bg-yellow-50",
        border: "border-yellow-200",
        icon: "text-yellow-500",
        text: "text-yellow-900"
      },
      info: {
        bg: "bg-blue-50",
        border: "border-blue-200",
        icon: "text-blue-500",
        text: "text-blue-900"
      }
    }, a = T(() => ({
      success: "IconSuccess",
      error: "IconError",
      warning: "IconWarning",
      info: "IconInfo"
    })[i.type]);
    return (r, o) => (l(), f("div", {
      class: u([
        "flex items-start gap-3 p-4 rounded-lg border shadow-lg transition-all duration-300",
        t[e.type].bg,
        t[e.type].border
      ]),
      style: { "min-width": "320px", "max-width": "420px" }
    }, [
      c("div", z, [
        (l(), p(h(a.value), {
          class: u([t[e.type].icon, "w-5 h-5"])
        }, null, 8, ["class"]))
      ]),
      c("div", {
        class: u(["flex-1 text-sm font-medium", t[e.type].text])
      }, k(e.message), 3),
      c("button", {
        onClick: o[0] || (o[0] = (m) => r.$emit("close")),
        class: u(["flex-shrink-0 hover:opacity-70 transition-opacity", t[e.type].icon])
      }, [...o[1] || (o[1] = [
        c("svg", {
          class: "w-4 h-4",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor"
        }, [
          c("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M6 18L18 6M6 6l12 12"
          })
        ], -1)
      ])], 2)
    ], 2));
  }
}, D = {
  __name: "CToastItem",
  props: {
    message: String,
    type: String,
    duration: Number,
    toastId: Number
  },
  emits: ["close"],
  setup(e, { emit: i }) {
    const t = e, a = i;
    let r;
    const o = () => {
      a("close");
    };
    return I(() => {
      r = setTimeout(() => {
        o();
      }, t.duration);
    }), _(() => {
      r && clearTimeout(r);
    }), (m, n) => (l(), f("div", null, [
      y(C, {
        message: e.message,
        type: e.type,
        onClose: o
      }, null, 8, ["message", "type"])
    ]));
  }
}, L = (e, i) => {
  const t = e.__vccOpts || e;
  for (const [a, r] of i)
    t[a] = r;
  return t;
}, V = { class: "fixed top-4 right-4 z-50 flex flex-col items-end space-y-3" }, j = {
  __name: "CToastContainer",
  setup(e) {
    const { toasts: i, removeToast: t } = v();
    return (a, r) => (l(), p($, { to: "body" }, [
      c("div", V, [
        y(S, { name: "c-toast" }, {
          default: B(() => [
            (l(!0), f(N, null, E(b(i), (o) => (l(), p(D, {
              key: o.id,
              message: o.message,
              type: o.type,
              duration: o.duration,
              "toast-id": o.id,
              onClose: (m) => b(t)(o.id)
            }, null, 8, ["message", "type", "duration", "toast-id", "onClose"]))), 128))
          ]),
          _: 1
        })
      ])
    ]));
  }
}, q = /* @__PURE__ */ L(j, [["__scopeId", "data-v-3b6a2072"]]), G = {
  install(e, i = {}) {
    e.component("CToastContainer", q), e.component("CToast", C);
    const t = v();
    e.config.globalProperties.$ctoast = t, e.provide("ctoast", t);
  }
};
export {
  C as CToast,
  q as CToastContainer,
  D as CToastItem,
  G as default,
  v as useCToast
};
