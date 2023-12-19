function e(e, o, t, n) {
  Object.defineProperty(e, o, {
    get: t,
    set: n,
    enumerable: !0,
    configurable: !0,
  });
}
var o =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof self
      ? self
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : {},
  t = {},
  n = {},
  i = o.parcelRequireef96;
null == i &&
  (((i = function (e) {
    if (e in t) return t[e].exports;
    if (e in n) {
      var o = n[e];
      delete n[e];
      var i = { id: e, exports: {} };
      return (t[e] = i), o.call(i.exports, i, i.exports), i.exports;
    }
    var r = Error("Cannot find module '" + e + "'");
    throw ((r.code = "MODULE_NOT_FOUND"), r);
  }).register = function (e, o) {
    n[e] = o;
  }),
  (o.parcelRequireef96 = i)),
  i.register("8aIAD", function (o, t) {
    e(o.exports, "exist", function () {
      return r;
    }),
      e(o.exports, "calcViewportHeight", function () {
        return l;
      }),
      e(o.exports, "onWindowResize", function () {
        return c;
      }),
      e(o.exports, "onWindowScroll", function () {
        return u;
      }),
      e(o.exports, "documentReady", function () {
        return f;
      }),
      e(o.exports, "pageLoad", function () {
        return p;
      }),
      e(o.exports, "page", function () {
        return w;
      }),
      i("5fmqB");
    var n = i("fVPVN");
    let r = (e) => (!!e || 0 === e) && 0 !== e.length;
    function a(e, o) {
      let t;
      return (...n) => {
        t && clearTimeout(t),
          (t = setTimeout(() => {
            o(...n), (t = null);
          }, e));
      };
    }
    let d = () =>
        "ontouchstart" in window ||
        window.navigator.maxTouchPoints > 0 ||
        window.navigator.msMaxTouchPoints > 0,
      l = () => {
        let e = (0, n.default)(),
          o = e.apple.phone,
          t = e.android.phone,
          i = e.seven_inch;
        if (o || t || i || d()) {
          let e = 0.01 * window.innerHeight; // console.log(vh);
          document.documentElement.style.setProperty("--vh", `${e}px`);
        }
      };
    function s(e) {
      return e instanceof Function;
    }
    let c = (e) => {
        if (!e && !s(e)) return;
        let o = () => {
          e();
        };
        window.addEventListener("resize", a(15, o)), o();
      },
      u = (e) => {
        if (!e && !s(e)) return;
        let o = () => {
          e(window.pageYOffset);
        };
        window.addEventListener("scroll", a(15, o)), o();
      },
      f = (e) => {
        (e || s(e)) && document.addEventListener("DOMContentLoaded", e);
      },
      p = (e) => {
        (e || s(e)) &&
          window.addEventListener("load", () => {
            (window.loaded = !0),
              e(),
              window.onWindowLoadCallbacks?.forEach((e) => {
                (e || s(e)) && e();
              }),
              (window.onWindowLoadCallbacks = []);
          });
      },
      w = (e) => {
        (e || s(e)) &&
          (window.loaded
            ? e()
            : (window.onWindowLoadCallbacks ||
                (window.onWindowLoadCallbacks = []),
              window.onWindowLoadCallbacks.push(e)));
      };
  }),
  i.register("5fmqB", function (o, t) {
    e(o.exports, "default", function () {
      return i("fVPVN").default;
    }),
      i("fVPVN");
  }),
  i.register("fVPVN", function (o, t) {
    e(o.exports, "default", function () {
      return v;
    });
    var n = /iPhone/i,
      i = /iPod/i,
      r = /iPad/i,
      a = /\biOS-universal(?:.+)Mac\b/i,
      d = /\bAndroid(?:.+)Mobile\b/i,
      l = /Android/i,
      s = /(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,
      c = /Silk/i,
      u = /Windows Phone/i,
      f = /\bWindows(?:.+)ARM\b/i,
      p = /BlackBerry/i,
      w = /BB10/i,
      h = /Opera Mini/i,
      b = /\b(CriOS|Chrome)(?:.+)Mobile/i,
      m = /Mobile(?:.+)Firefox\b/i,
      g = function (e) {
        return (
          void 0 !== e &&
          "MacIntel" === e.platform &&
          "number" == typeof e.maxTouchPoints &&
          e.maxTouchPoints > 1 &&
          "undefined" == typeof MSStream
        );
      };
    function v(e) {
      var o,
        t = { userAgent: "", platform: "", maxTouchPoints: 0 };
      e || "undefined" == typeof navigator
        ? "string" == typeof e
          ? (t.userAgent = e)
          : e &&
            e.userAgent &&
            (t = {
              userAgent: e.userAgent,
              platform: e.platform,
              maxTouchPoints: e.maxTouchPoints || 0,
            })
        : (t = {
            userAgent: navigator.userAgent,
            platform: navigator.platform,
            maxTouchPoints: navigator.maxTouchPoints || 0,
          });
      var v = t.userAgent,
        x = v.split("[FBAN");
      void 0 !== x[1] && (v = x[0]),
        void 0 !== (x = v.split("Twitter"))[1] && (v = x[0]);
      var y =
          ((o = v),
          function (e) {
            return e.test(o);
          }),
        S = {
          apple: {
            phone: y(n) && !y(u),
            ipod: y(i),
            tablet: !y(n) && (y(r) || g(t)) && !y(u),
            universal: y(a),
            device: (y(n) || y(i) || y(r) || y(a) || g(t)) && !y(u),
          },
          amazon: { phone: y(s), tablet: !y(s) && y(c), device: y(s) || y(c) },
          android: {
            phone: (!y(u) && y(s)) || (!y(u) && y(d)),
            tablet: !y(u) && !y(s) && !y(d) && (y(c) || y(l)),
            device:
              (!y(u) && (y(s) || y(c) || y(d) || y(l))) || y(/\bokhttp\b/i),
          },
          windows: { phone: y(u), tablet: y(f), device: y(u) || y(f) },
          other: {
            blackberry: y(p),
            blackberry10: y(w),
            opera: y(h),
            firefox: y(m),
            chrome: y(b),
            device: y(p) || y(w) || y(h) || y(m) || y(b),
          },
          any: !1,
          phone: !1,
          tablet: !1,
        };
      return (
        (S.any =
          S.apple.device ||
          S.android.device ||
          S.windows.device ||
          S.other.device),
        (S.phone = S.apple.phone || S.android.phone || S.windows.phone),
        (S.tablet = S.apple.tablet || S.android.tablet || S.windows.tablet),
        S
      );
    }
  });
var r = (i("8aIAD"), i("8aIAD"), i("8aIAD")),
  a = () => {
    (0, r.onWindowResize)(() => {
      (0, r.calcViewportHeight)();
    }),
      (0, r.calcViewportHeight)();
  },
  r = (i("8aIAD"), i("8aIAD")),
  d = () => {
    let e = { header: ".js-header", menuTrigger: ".js-header-menu-trigger" },
      o = {
        bodyOpenMenuState: "body--open_menu_state",
        headerScrollState: "header--scroll_state",
      },
      t = document.body,
      n = document.querySelector(e.header),
      i = document.querySelectorAll(e.menuTrigger),
      a = !1,
      d = () => {
        a
          ? (t.classList.remove(o.bodyOpenMenuState), (a = !1))
          : (t.classList.add(o.bodyOpenMenuState), (a = !0));
      };
    (0, r.exist)(n) &&
      ((0, r.onWindowScroll)((e) => {
        e > 10 && !n.classList.contains(o.headerScrollState)
          ? n.classList.add(o.headerScrollState)
          : e <= 10 &&
            n.classList.contains(o.headerScrollState) &&
            n.classList.remove(o.headerScrollState);
        /**
         * if you need header dissapear
         * 1. Add this to CLASSNAMES: bodyScrollPos: 'body--pos_state',
         * 2. Add this variable: let prevScrollPos = window.scrollY;
         * 3. Get Header height: const headerHeight = $header.clientHeight;
         * 4. Paste:
         * if (prevScrollPos < window.scrollY && scrollY > headerHeight) {
         * 	$header.classList.add(CLASSNAMES.bodyScrollPos);
         * } else {
         * 	$header.classList.remove(CLASSNAMES.bodyScrollPos);
         * }
         * prevScrollPos = window.scrollY;
         */
      }),
      (0, r.exist)(i) &&
        i.forEach((e) => {
          e.addEventListener("click", () => {
            d();
          });
        }));
  },
  l = () => {
    a(),
      (0, r.pageLoad)(() => {
        document.body.classList.add("body--loaded"), d();
      });
  }; // eslint-disable-next-line no-console
console.info(
  "%c%s",
  "color: #fff;background: #cf8e1f",
  "Developed by Glivera-team https://glivera-team.com/"
), // -------------------  init App
  (0, r.documentReady)(() => {
    l();
  }); // -------------------  init App##
