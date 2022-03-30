/*! For license information please see main.js.LICENSE.txt */
(() => {
  "use strict";
  var t = {
      d: (e, n) => {
        for (var i in n)
          t.o(n, i) &&
            !t.o(e, i) &&
            Object.defineProperty(e, i, { enumerable: !0, get: n[i] });
      },
      o: (t, e) => Object.prototype.hasOwnProperty.call(t, e),
      r: (t) => {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      },
    },
    e = {};
  t.r(e),
    t.d(e, {
      afterMain: () => w,
      afterRead: () => v,
      afterWrite: () => O,
      applyStyles: () => S,
      arrow: () => K,
      auto: () => o,
      basePlacements: () => a,
      beforeMain: () => b,
      beforeRead: () => m,
      beforeWrite: () => E,
      bottom: () => i,
      clippingParents: () => u,
      computeStyles: () => J,
      createPopper: () => kt,
      createPopperBase: () => Ct,
      createPopperLite: () => Lt,
      detectOverflow: () => pt,
      end: () => c,
      eventListeners: () => et,
      flip: () => gt,
      hide: () => vt,
      left: () => r,
      main: () => y,
      modifierPhases: () => T,
      offset: () => bt,
      placements: () => g,
      popper: () => d,
      popperGenerator: () => xt,
      popperOffsets: () => yt,
      preventOverflow: () => wt,
      read: () => _,
      reference: () => f,
      right: () => s,
      start: () => l,
      top: () => n,
      variationPlacements: () => p,
      viewport: () => h,
      write: () => A,
    });
  var n = "top",
    i = "bottom",
    s = "right",
    r = "left",
    o = "auto",
    a = [n, i, s, r],
    l = "start",
    c = "end",
    u = "clippingParents",
    h = "viewport",
    d = "popper",
    f = "reference",
    p = a.reduce(function (t, e) {
      return t.concat([e + "-" + l, e + "-" + c]);
    }, []),
    g = [].concat(a, [o]).reduce(function (t, e) {
      return t.concat([e, e + "-" + l, e + "-" + c]);
    }, []),
    m = "beforeRead",
    _ = "read",
    v = "afterRead",
    b = "beforeMain",
    y = "main",
    w = "afterMain",
    E = "beforeWrite",
    A = "write",
    O = "afterWrite",
    T = [m, _, v, b, y, w, E, A, O];
  function x(t) {
    return t ? (t.nodeName || "").toLowerCase() : null;
  }
  function C(t) {
    if (null == t) return window;
    if ("[object Window]" !== t.toString()) {
      var e = t.ownerDocument;
      return (e && e.defaultView) || window;
    }
    return t;
  }
  function k(t) {
    return t instanceof C(t).Element || t instanceof Element;
  }
  function L(t) {
    return t instanceof C(t).HTMLElement || t instanceof HTMLElement;
  }
  function D(t) {
    return (
      "undefined" != typeof ShadowRoot &&
      (t instanceof C(t).ShadowRoot || t instanceof ShadowRoot)
    );
  }
  const S = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: function (t) {
      var e = t.state;
      Object.keys(e.elements).forEach(function (t) {
        var n = e.styles[t] || {},
          i = e.attributes[t] || {},
          s = e.elements[t];
        L(s) &&
          x(s) &&
          (Object.assign(s.style, n),
          Object.keys(i).forEach(function (t) {
            var e = i[t];
            !1 === e
              ? s.removeAttribute(t)
              : s.setAttribute(t, !0 === e ? "" : e);
          }));
      });
    },
    effect: function (t) {
      var e = t.state,
        n = {
          popper: {
            position: e.options.strategy,
            left: "0",
            top: "0",
            margin: "0",
          },
          arrow: { position: "absolute" },
          reference: {},
        };
      return (
        Object.assign(e.elements.popper.style, n.popper),
        (e.styles = n),
        e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow),
        function () {
          Object.keys(e.elements).forEach(function (t) {
            var i = e.elements[t],
              s = e.attributes[t] || {},
              r = Object.keys(
                e.styles.hasOwnProperty(t) ? e.styles[t] : n[t]
              ).reduce(function (t, e) {
                return (t[e] = ""), t;
              }, {});
            L(i) &&
              x(i) &&
              (Object.assign(i.style, r),
              Object.keys(s).forEach(function (t) {
                i.removeAttribute(t);
              }));
          });
        }
      );
    },
    requires: ["computeStyles"],
  };
  function N(t) {
    return t.split("-")[0];
  }
  var I = Math.max,
    M = Math.min,
    P = Math.round;
  function j(t, e) {
    void 0 === e && (e = !1);
    var n = t.getBoundingClientRect(),
      i = 1,
      s = 1;
    if (L(t) && e) {
      var r = t.offsetHeight,
        o = t.offsetWidth;
      o > 0 && (i = P(n.width) / o || 1), r > 0 && (s = P(n.height) / r || 1);
    }
    return {
      width: n.width / i,
      height: n.height / s,
      top: n.top / s,
      right: n.right / i,
      bottom: n.bottom / s,
      left: n.left / i,
      x: n.left / i,
      y: n.top / s,
    };
  }
  function B(t) {
    var e = j(t),
      n = t.offsetWidth,
      i = t.offsetHeight;
    return (
      Math.abs(e.width - n) <= 1 && (n = e.width),
      Math.abs(e.height - i) <= 1 && (i = e.height),
      { x: t.offsetLeft, y: t.offsetTop, width: n, height: i }
    );
  }
  function H(t, e) {
    var n = e.getRootNode && e.getRootNode();
    if (t.contains(e)) return !0;
    if (n && D(n)) {
      var i = e;
      do {
        if (i && t.isSameNode(i)) return !0;
        i = i.parentNode || i.host;
      } while (i);
    }
    return !1;
  }
  function W(t) {
    return C(t).getComputedStyle(t);
  }
  function R(t) {
    return ["table", "td", "th"].indexOf(x(t)) >= 0;
  }
  function $(t) {
    return ((k(t) ? t.ownerDocument : t.document) || window.document)
      .documentElement;
  }
  function F(t) {
    return "html" === x(t)
      ? t
      : t.assignedSlot || t.parentNode || (D(t) ? t.host : null) || $(t);
  }
  function q(t) {
    return L(t) && "fixed" !== W(t).position ? t.offsetParent : null;
  }
  function z(t) {
    for (var e = C(t), n = q(t); n && R(n) && "static" === W(n).position; )
      n = q(n);
    return n &&
      ("html" === x(n) || ("body" === x(n) && "static" === W(n).position))
      ? e
      : n ||
          (function (t) {
            var e = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
            if (
              -1 !== navigator.userAgent.indexOf("Trident") &&
              L(t) &&
              "fixed" === W(t).position
            )
              return null;
            var n = F(t);
            for (
              D(n) && (n = n.host);
              L(n) && ["html", "body"].indexOf(x(n)) < 0;

            ) {
              var i = W(n);
              if (
                "none" !== i.transform ||
                "none" !== i.perspective ||
                "paint" === i.contain ||
                -1 !== ["transform", "perspective"].indexOf(i.willChange) ||
                (e && "filter" === i.willChange) ||
                (e && i.filter && "none" !== i.filter)
              )
                return n;
              n = n.parentNode;
            }
            return null;
          })(t) ||
          e;
  }
  function V(t) {
    return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
  }
  function U(t, e, n) {
    return I(t, M(e, n));
  }
  function X(t) {
    return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, t);
  }
  function Y(t, e) {
    return e.reduce(function (e, n) {
      return (e[n] = t), e;
    }, {});
  }
  const K = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: function (t) {
      var e,
        o = t.state,
        l = t.name,
        c = t.options,
        u = o.elements.arrow,
        h = o.modifiersData.popperOffsets,
        d = N(o.placement),
        f = V(d),
        p = [r, s].indexOf(d) >= 0 ? "height" : "width";
      if (u && h) {
        var g = (function (t, e) {
            return X(
              "number" !=
                typeof (t =
                  "function" == typeof t
                    ? t(Object.assign({}, e.rects, { placement: e.placement }))
                    : t)
                ? t
                : Y(t, a)
            );
          })(c.padding, o),
          m = B(u),
          _ = "y" === f ? n : r,
          v = "y" === f ? i : s,
          b =
            o.rects.reference[p] +
            o.rects.reference[f] -
            h[f] -
            o.rects.popper[p],
          y = h[f] - o.rects.reference[f],
          w = z(u),
          E = w ? ("y" === f ? w.clientHeight || 0 : w.clientWidth || 0) : 0,
          A = b / 2 - y / 2,
          O = g[_],
          T = E - m[p] - g[v],
          x = E / 2 - m[p] / 2 + A,
          C = U(O, x, T),
          k = f;
        o.modifiersData[l] = (((e = {})[k] = C), (e.centerOffset = C - x), e);
      }
    },
    effect: function (t) {
      var e = t.state,
        n = t.options.element,
        i = void 0 === n ? "[data-popper-arrow]" : n;
      null != i &&
        ("string" != typeof i || (i = e.elements.popper.querySelector(i))) &&
        H(e.elements.popper, i) &&
        (e.elements.arrow = i);
    },
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"],
  };
  function Q(t) {
    return t.split("-")[1];
  }
  var G = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
  function Z(t) {
    var e,
      o = t.popper,
      a = t.popperRect,
      l = t.placement,
      u = t.variation,
      h = t.offsets,
      d = t.position,
      f = t.gpuAcceleration,
      p = t.adaptive,
      g = t.roundOffsets,
      m = t.isFixed,
      _ = h.x,
      v = void 0 === _ ? 0 : _,
      b = h.y,
      y = void 0 === b ? 0 : b,
      w = "function" == typeof g ? g({ x: v, y }) : { x: v, y };
    (v = w.x), (y = w.y);
    var E = h.hasOwnProperty("x"),
      A = h.hasOwnProperty("y"),
      O = r,
      T = n,
      x = window;
    if (p) {
      var k = z(o),
        L = "clientHeight",
        D = "clientWidth";
      k === C(o) &&
        "static" !== W((k = $(o))).position &&
        "absolute" === d &&
        ((L = "scrollHeight"), (D = "scrollWidth")),
        (k = k),
        (l === n || ((l === r || l === s) && u === c)) &&
          ((T = i),
          (y -=
            (m && k === x && x.visualViewport
              ? x.visualViewport.height
              : k[L]) - a.height),
          (y *= f ? 1 : -1)),
        (l !== r && ((l !== n && l !== i) || u !== c)) ||
          ((O = s),
          (v -=
            (m && k === x && x.visualViewport ? x.visualViewport.width : k[D]) -
            a.width),
          (v *= f ? 1 : -1));
    }
    var S,
      N = Object.assign({ position: d }, p && G),
      I =
        !0 === g
          ? (function (t) {
              var e = t.x,
                n = t.y,
                i = window.devicePixelRatio || 1;
              return { x: P(e * i) / i || 0, y: P(n * i) / i || 0 };
            })({ x: v, y })
          : { x: v, y };
    return (
      (v = I.x),
      (y = I.y),
      f
        ? Object.assign(
            {},
            N,
            (((S = {})[T] = A ? "0" : ""),
            (S[O] = E ? "0" : ""),
            (S.transform =
              (x.devicePixelRatio || 1) <= 1
                ? "translate(" + v + "px, " + y + "px)"
                : "translate3d(" + v + "px, " + y + "px, 0)"),
            S)
          )
        : Object.assign(
            {},
            N,
            (((e = {})[T] = A ? y + "px" : ""),
            (e[O] = E ? v + "px" : ""),
            (e.transform = ""),
            e)
          )
    );
  }
  const J = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: function (t) {
      var e = t.state,
        n = t.options,
        i = n.gpuAcceleration,
        s = void 0 === i || i,
        r = n.adaptive,
        o = void 0 === r || r,
        a = n.roundOffsets,
        l = void 0 === a || a,
        c = {
          placement: N(e.placement),
          variation: Q(e.placement),
          popper: e.elements.popper,
          popperRect: e.rects.popper,
          gpuAcceleration: s,
          isFixed: "fixed" === e.options.strategy,
        };
      null != e.modifiersData.popperOffsets &&
        (e.styles.popper = Object.assign(
          {},
          e.styles.popper,
          Z(
            Object.assign({}, c, {
              offsets: e.modifiersData.popperOffsets,
              position: e.options.strategy,
              adaptive: o,
              roundOffsets: l,
            })
          )
        )),
        null != e.modifiersData.arrow &&
          (e.styles.arrow = Object.assign(
            {},
            e.styles.arrow,
            Z(
              Object.assign({}, c, {
                offsets: e.modifiersData.arrow,
                position: "absolute",
                adaptive: !1,
                roundOffsets: l,
              })
            )
          )),
        (e.attributes.popper = Object.assign({}, e.attributes.popper, {
          "data-popper-placement": e.placement,
        }));
    },
    data: {},
  };
  var tt = { passive: !0 };
  const et = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function () {},
    effect: function (t) {
      var e = t.state,
        n = t.instance,
        i = t.options,
        s = i.scroll,
        r = void 0 === s || s,
        o = i.resize,
        a = void 0 === o || o,
        l = C(e.elements.popper),
        c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
      return (
        r &&
          c.forEach(function (t) {
            t.addEventListener("scroll", n.update, tt);
          }),
        a && l.addEventListener("resize", n.update, tt),
        function () {
          r &&
            c.forEach(function (t) {
              t.removeEventListener("scroll", n.update, tt);
            }),
            a && l.removeEventListener("resize", n.update, tt);
        }
      );
    },
    data: {},
  };
  var nt = { left: "right", right: "left", bottom: "top", top: "bottom" };
  function it(t) {
    return t.replace(/left|right|bottom|top/g, function (t) {
      return nt[t];
    });
  }
  var st = { start: "end", end: "start" };
  function rt(t) {
    return t.replace(/start|end/g, function (t) {
      return st[t];
    });
  }
  function ot(t) {
    var e = C(t);
    return { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
  }
  function at(t) {
    return j($(t)).left + ot(t).scrollLeft;
  }
  function lt(t) {
    var e = W(t),
      n = e.overflow,
      i = e.overflowX,
      s = e.overflowY;
    return /auto|scroll|overlay|hidden/.test(n + s + i);
  }
  function ct(t) {
    return ["html", "body", "#document"].indexOf(x(t)) >= 0
      ? t.ownerDocument.body
      : L(t) && lt(t)
      ? t
      : ct(F(t));
  }
  function ut(t, e) {
    var n;
    void 0 === e && (e = []);
    var i = ct(t),
      s = i === (null == (n = t.ownerDocument) ? void 0 : n.body),
      r = C(i),
      o = s ? [r].concat(r.visualViewport || [], lt(i) ? i : []) : i,
      a = e.concat(o);
    return s ? a : a.concat(ut(F(o)));
  }
  function ht(t) {
    return Object.assign({}, t, {
      left: t.x,
      top: t.y,
      right: t.x + t.width,
      bottom: t.y + t.height,
    });
  }
  function dt(t, e) {
    return e === h
      ? ht(
          (function (t) {
            var e = C(t),
              n = $(t),
              i = e.visualViewport,
              s = n.clientWidth,
              r = n.clientHeight,
              o = 0,
              a = 0;
            return (
              i &&
                ((s = i.width),
                (r = i.height),
                /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
                  ((o = i.offsetLeft), (a = i.offsetTop))),
              { width: s, height: r, x: o + at(t), y: a }
            );
          })(t)
        )
      : k(e)
      ? (function (t) {
          var e = j(t);
          return (
            (e.top = e.top + t.clientTop),
            (e.left = e.left + t.clientLeft),
            (e.bottom = e.top + t.clientHeight),
            (e.right = e.left + t.clientWidth),
            (e.width = t.clientWidth),
            (e.height = t.clientHeight),
            (e.x = e.left),
            (e.y = e.top),
            e
          );
        })(e)
      : ht(
          (function (t) {
            var e,
              n = $(t),
              i = ot(t),
              s = null == (e = t.ownerDocument) ? void 0 : e.body,
              r = I(
                n.scrollWidth,
                n.clientWidth,
                s ? s.scrollWidth : 0,
                s ? s.clientWidth : 0
              ),
              o = I(
                n.scrollHeight,
                n.clientHeight,
                s ? s.scrollHeight : 0,
                s ? s.clientHeight : 0
              ),
              a = -i.scrollLeft + at(t),
              l = -i.scrollTop;
            return (
              "rtl" === W(s || n).direction &&
                (a += I(n.clientWidth, s ? s.clientWidth : 0) - r),
              { width: r, height: o, x: a, y: l }
            );
          })($(t))
        );
  }
  function ft(t) {
    var e,
      o = t.reference,
      a = t.element,
      u = t.placement,
      h = u ? N(u) : null,
      d = u ? Q(u) : null,
      f = o.x + o.width / 2 - a.width / 2,
      p = o.y + o.height / 2 - a.height / 2;
    switch (h) {
      case n:
        e = { x: f, y: o.y - a.height };
        break;
      case i:
        e = { x: f, y: o.y + o.height };
        break;
      case s:
        e = { x: o.x + o.width, y: p };
        break;
      case r:
        e = { x: o.x - a.width, y: p };
        break;
      default:
        e = { x: o.x, y: o.y };
    }
    var g = h ? V(h) : null;
    if (null != g) {
      var m = "y" === g ? "height" : "width";
      switch (d) {
        case l:
          e[g] = e[g] - (o[m] / 2 - a[m] / 2);
          break;
        case c:
          e[g] = e[g] + (o[m] / 2 - a[m] / 2);
      }
    }
    return e;
  }
  function pt(t, e) {
    void 0 === e && (e = {});
    var r = e,
      o = r.placement,
      l = void 0 === o ? t.placement : o,
      c = r.boundary,
      p = void 0 === c ? u : c,
      g = r.rootBoundary,
      m = void 0 === g ? h : g,
      _ = r.elementContext,
      v = void 0 === _ ? d : _,
      b = r.altBoundary,
      y = void 0 !== b && b,
      w = r.padding,
      E = void 0 === w ? 0 : w,
      A = X("number" != typeof E ? E : Y(E, a)),
      O = v === d ? f : d,
      T = t.rects.popper,
      C = t.elements[y ? O : v],
      D = (function (t, e, n) {
        var i =
            "clippingParents" === e
              ? (function (t) {
                  var e = ut(F(t)),
                    n =
                      ["absolute", "fixed"].indexOf(W(t).position) >= 0 && L(t)
                        ? z(t)
                        : t;
                  return k(n)
                    ? e.filter(function (t) {
                        return k(t) && H(t, n) && "body" !== x(t);
                      })
                    : [];
                })(t)
              : [].concat(e),
          s = [].concat(i, [n]),
          r = s[0],
          o = s.reduce(function (e, n) {
            var i = dt(t, n);
            return (
              (e.top = I(i.top, e.top)),
              (e.right = M(i.right, e.right)),
              (e.bottom = M(i.bottom, e.bottom)),
              (e.left = I(i.left, e.left)),
              e
            );
          }, dt(t, r));
        return (
          (o.width = o.right - o.left),
          (o.height = o.bottom - o.top),
          (o.x = o.left),
          (o.y = o.top),
          o
        );
      })(k(C) ? C : C.contextElement || $(t.elements.popper), p, m),
      S = j(t.elements.reference),
      N = ft({ reference: S, element: T, strategy: "absolute", placement: l }),
      P = ht(Object.assign({}, T, N)),
      B = v === d ? P : S,
      R = {
        top: D.top - B.top + A.top,
        bottom: B.bottom - D.bottom + A.bottom,
        left: D.left - B.left + A.left,
        right: B.right - D.right + A.right,
      },
      q = t.modifiersData.offset;
    if (v === d && q) {
      var V = q[l];
      Object.keys(R).forEach(function (t) {
        var e = [s, i].indexOf(t) >= 0 ? 1 : -1,
          r = [n, i].indexOf(t) >= 0 ? "y" : "x";
        R[t] += V[r] * e;
      });
    }
    return R;
  }
  const gt = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: function (t) {
      var e = t.state,
        c = t.options,
        u = t.name;
      if (!e.modifiersData[u]._skip) {
        for (
          var h = c.mainAxis,
            d = void 0 === h || h,
            f = c.altAxis,
            m = void 0 === f || f,
            _ = c.fallbackPlacements,
            v = c.padding,
            b = c.boundary,
            y = c.rootBoundary,
            w = c.altBoundary,
            E = c.flipVariations,
            A = void 0 === E || E,
            O = c.allowedAutoPlacements,
            T = e.options.placement,
            x = N(T),
            C =
              _ ||
              (x !== T && A
                ? (function (t) {
                    if (N(t) === o) return [];
                    var e = it(t);
                    return [rt(t), e, rt(e)];
                  })(T)
                : [it(T)]),
            k = [T].concat(C).reduce(function (t, n) {
              return t.concat(
                N(n) === o
                  ? (function (t, e) {
                      void 0 === e && (e = {});
                      var n = e,
                        i = n.placement,
                        s = n.boundary,
                        r = n.rootBoundary,
                        o = n.padding,
                        l = n.flipVariations,
                        c = n.allowedAutoPlacements,
                        u = void 0 === c ? g : c,
                        h = Q(i),
                        d = h
                          ? l
                            ? p
                            : p.filter(function (t) {
                                return Q(t) === h;
                              })
                          : a,
                        f = d.filter(function (t) {
                          return u.indexOf(t) >= 0;
                        });
                      0 === f.length && (f = d);
                      var m = f.reduce(function (e, n) {
                        return (
                          (e[n] = pt(t, {
                            placement: n,
                            boundary: s,
                            rootBoundary: r,
                            padding: o,
                          })[N(n)]),
                          e
                        );
                      }, {});
                      return Object.keys(m).sort(function (t, e) {
                        return m[t] - m[e];
                      });
                    })(e, {
                      placement: n,
                      boundary: b,
                      rootBoundary: y,
                      padding: v,
                      flipVariations: A,
                      allowedAutoPlacements: O,
                    })
                  : n
              );
            }, []),
            L = e.rects.reference,
            D = e.rects.popper,
            S = new Map(),
            I = !0,
            M = k[0],
            P = 0;
          P < k.length;
          P++
        ) {
          var j = k[P],
            B = N(j),
            H = Q(j) === l,
            W = [n, i].indexOf(B) >= 0,
            R = W ? "width" : "height",
            $ = pt(e, {
              placement: j,
              boundary: b,
              rootBoundary: y,
              altBoundary: w,
              padding: v,
            }),
            F = W ? (H ? s : r) : H ? i : n;
          L[R] > D[R] && (F = it(F));
          var q = it(F),
            z = [];
          if (
            (d && z.push($[B] <= 0),
            m && z.push($[F] <= 0, $[q] <= 0),
            z.every(function (t) {
              return t;
            }))
          ) {
            (M = j), (I = !1);
            break;
          }
          S.set(j, z);
        }
        if (I)
          for (
            var V = function (t) {
                var e = k.find(function (e) {
                  var n = S.get(e);
                  if (n)
                    return n.slice(0, t).every(function (t) {
                      return t;
                    });
                });
                if (e) return (M = e), "break";
              },
              U = A ? 3 : 1;
            U > 0 && "break" !== V(U);
            U--
          );
        e.placement !== M &&
          ((e.modifiersData[u]._skip = !0), (e.placement = M), (e.reset = !0));
      }
    },
    requiresIfExists: ["offset"],
    data: { _skip: !1 },
  };
  function mt(t, e, n) {
    return (
      void 0 === n && (n = { x: 0, y: 0 }),
      {
        top: t.top - e.height - n.y,
        right: t.right - e.width + n.x,
        bottom: t.bottom - e.height + n.y,
        left: t.left - e.width - n.x,
      }
    );
  }
  function _t(t) {
    return [n, s, i, r].some(function (e) {
      return t[e] >= 0;
    });
  }
  const vt = {
      name: "hide",
      enabled: !0,
      phase: "main",
      requiresIfExists: ["preventOverflow"],
      fn: function (t) {
        var e = t.state,
          n = t.name,
          i = e.rects.reference,
          s = e.rects.popper,
          r = e.modifiersData.preventOverflow,
          o = pt(e, { elementContext: "reference" }),
          a = pt(e, { altBoundary: !0 }),
          l = mt(o, i),
          c = mt(a, s, r),
          u = _t(l),
          h = _t(c);
        (e.modifiersData[n] = {
          referenceClippingOffsets: l,
          popperEscapeOffsets: c,
          isReferenceHidden: u,
          hasPopperEscaped: h,
        }),
          (e.attributes.popper = Object.assign({}, e.attributes.popper, {
            "data-popper-reference-hidden": u,
            "data-popper-escaped": h,
          }));
      },
    },
    bt = {
      name: "offset",
      enabled: !0,
      phase: "main",
      requires: ["popperOffsets"],
      fn: function (t) {
        var e = t.state,
          i = t.options,
          o = t.name,
          a = i.offset,
          l = void 0 === a ? [0, 0] : a,
          c = g.reduce(function (t, i) {
            return (
              (t[i] = (function (t, e, i) {
                var o = N(t),
                  a = [r, n].indexOf(o) >= 0 ? -1 : 1,
                  l =
                    "function" == typeof i
                      ? i(Object.assign({}, e, { placement: t }))
                      : i,
                  c = l[0],
                  u = l[1];
                return (
                  (c = c || 0),
                  (u = (u || 0) * a),
                  [r, s].indexOf(o) >= 0 ? { x: u, y: c } : { x: c, y: u }
                );
              })(i, e.rects, l)),
              t
            );
          }, {}),
          u = c[e.placement],
          h = u.x,
          d = u.y;
        null != e.modifiersData.popperOffsets &&
          ((e.modifiersData.popperOffsets.x += h),
          (e.modifiersData.popperOffsets.y += d)),
          (e.modifiersData[o] = c);
      },
    },
    yt = {
      name: "popperOffsets",
      enabled: !0,
      phase: "read",
      fn: function (t) {
        var e = t.state,
          n = t.name;
        e.modifiersData[n] = ft({
          reference: e.rects.reference,
          element: e.rects.popper,
          strategy: "absolute",
          placement: e.placement,
        });
      },
      data: {},
    },
    wt = {
      name: "preventOverflow",
      enabled: !0,
      phase: "main",
      fn: function (t) {
        var e = t.state,
          o = t.options,
          a = t.name,
          c = o.mainAxis,
          u = void 0 === c || c,
          h = o.altAxis,
          d = void 0 !== h && h,
          f = o.boundary,
          p = o.rootBoundary,
          g = o.altBoundary,
          m = o.padding,
          _ = o.tether,
          v = void 0 === _ || _,
          b = o.tetherOffset,
          y = void 0 === b ? 0 : b,
          w = pt(e, {
            boundary: f,
            rootBoundary: p,
            padding: m,
            altBoundary: g,
          }),
          E = N(e.placement),
          A = Q(e.placement),
          O = !A,
          T = V(E),
          x = "x" === T ? "y" : "x",
          C = e.modifiersData.popperOffsets,
          k = e.rects.reference,
          L = e.rects.popper,
          D =
            "function" == typeof y
              ? y(Object.assign({}, e.rects, { placement: e.placement }))
              : y,
          S =
            "number" == typeof D
              ? { mainAxis: D, altAxis: D }
              : Object.assign({ mainAxis: 0, altAxis: 0 }, D),
          P = e.modifiersData.offset
            ? e.modifiersData.offset[e.placement]
            : null,
          j = { x: 0, y: 0 };
        if (C) {
          if (u) {
            var H,
              W = "y" === T ? n : r,
              R = "y" === T ? i : s,
              $ = "y" === T ? "height" : "width",
              F = C[T],
              q = F + w[W],
              X = F - w[R],
              Y = v ? -L[$] / 2 : 0,
              K = A === l ? k[$] : L[$],
              G = A === l ? -L[$] : -k[$],
              Z = e.elements.arrow,
              J = v && Z ? B(Z) : { width: 0, height: 0 },
              tt = e.modifiersData["arrow#persistent"]
                ? e.modifiersData["arrow#persistent"].padding
                : { top: 0, right: 0, bottom: 0, left: 0 },
              et = tt[W],
              nt = tt[R],
              it = U(0, k[$], J[$]),
              st = O
                ? k[$] / 2 - Y - it - et - S.mainAxis
                : K - it - et - S.mainAxis,
              rt = O
                ? -k[$] / 2 + Y + it + nt + S.mainAxis
                : G + it + nt + S.mainAxis,
              ot = e.elements.arrow && z(e.elements.arrow),
              at = ot
                ? "y" === T
                  ? ot.clientTop || 0
                  : ot.clientLeft || 0
                : 0,
              lt = null != (H = null == P ? void 0 : P[T]) ? H : 0,
              ct = F + rt - lt,
              ut = U(v ? M(q, F + st - lt - at) : q, F, v ? I(X, ct) : X);
            (C[T] = ut), (j[T] = ut - F);
          }
          if (d) {
            var ht,
              dt = "x" === T ? n : r,
              ft = "x" === T ? i : s,
              gt = C[x],
              mt = "y" === x ? "height" : "width",
              _t = gt + w[dt],
              vt = gt - w[ft],
              bt = -1 !== [n, r].indexOf(E),
              yt = null != (ht = null == P ? void 0 : P[x]) ? ht : 0,
              wt = bt ? _t : gt - k[mt] - L[mt] - yt + S.altAxis,
              Et = bt ? gt + k[mt] + L[mt] - yt - S.altAxis : vt,
              At =
                v && bt
                  ? (function (t, e, n) {
                      var i = U(t, e, n);
                      return i > n ? n : i;
                    })(wt, gt, Et)
                  : U(v ? wt : _t, gt, v ? Et : vt);
            (C[x] = At), (j[x] = At - gt);
          }
          e.modifiersData[a] = j;
        }
      },
      requiresIfExists: ["offset"],
    };
  function Et(t, e, n) {
    void 0 === n && (n = !1);
    var i,
      s,
      r = L(e),
      o =
        L(e) &&
        (function (t) {
          var e = t.getBoundingClientRect(),
            n = P(e.width) / t.offsetWidth || 1,
            i = P(e.height) / t.offsetHeight || 1;
          return 1 !== n || 1 !== i;
        })(e),
      a = $(e),
      l = j(t, o),
      c = { scrollLeft: 0, scrollTop: 0 },
      u = { x: 0, y: 0 };
    return (
      (r || (!r && !n)) &&
        (("body" !== x(e) || lt(a)) &&
          (c =
            (i = e) !== C(i) && L(i)
              ? { scrollLeft: (s = i).scrollLeft, scrollTop: s.scrollTop }
              : ot(i)),
        L(e)
          ? (((u = j(e, !0)).x += e.clientLeft), (u.y += e.clientTop))
          : a && (u.x = at(a))),
      {
        x: l.left + c.scrollLeft - u.x,
        y: l.top + c.scrollTop - u.y,
        width: l.width,
        height: l.height,
      }
    );
  }
  function At(t) {
    var e = new Map(),
      n = new Set(),
      i = [];
    function s(t) {
      n.add(t.name),
        []
          .concat(t.requires || [], t.requiresIfExists || [])
          .forEach(function (t) {
            if (!n.has(t)) {
              var i = e.get(t);
              i && s(i);
            }
          }),
        i.push(t);
    }
    return (
      t.forEach(function (t) {
        e.set(t.name, t);
      }),
      t.forEach(function (t) {
        n.has(t.name) || s(t);
      }),
      i
    );
  }
  var Ot = { placement: "bottom", modifiers: [], strategy: "absolute" };
  function Tt() {
    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
      e[n] = arguments[n];
    return !e.some(function (t) {
      return !(t && "function" == typeof t.getBoundingClientRect);
    });
  }
  function xt(t) {
    void 0 === t && (t = {});
    var e = t,
      n = e.defaultModifiers,
      i = void 0 === n ? [] : n,
      s = e.defaultOptions,
      r = void 0 === s ? Ot : s;
    return function (t, e, n) {
      void 0 === n && (n = r);
      var s,
        o,
        a = {
          placement: "bottom",
          orderedModifiers: [],
          options: Object.assign({}, Ot, r),
          modifiersData: {},
          elements: { reference: t, popper: e },
          attributes: {},
          styles: {},
        },
        l = [],
        c = !1,
        u = {
          state: a,
          setOptions: function (n) {
            var s = "function" == typeof n ? n(a.options) : n;
            h(),
              (a.options = Object.assign({}, r, a.options, s)),
              (a.scrollParents = {
                reference: k(t)
                  ? ut(t)
                  : t.contextElement
                  ? ut(t.contextElement)
                  : [],
                popper: ut(e),
              });
            var o,
              c,
              d = (function (t) {
                var e = At(t);
                return T.reduce(function (t, n) {
                  return t.concat(
                    e.filter(function (t) {
                      return t.phase === n;
                    })
                  );
                }, []);
              })(
                ((o = [].concat(i, a.options.modifiers)),
                (c = o.reduce(function (t, e) {
                  var n = t[e.name];
                  return (
                    (t[e.name] = n
                      ? Object.assign({}, n, e, {
                          options: Object.assign({}, n.options, e.options),
                          data: Object.assign({}, n.data, e.data),
                        })
                      : e),
                    t
                  );
                }, {})),
                Object.keys(c).map(function (t) {
                  return c[t];
                }))
              );
            return (
              (a.orderedModifiers = d.filter(function (t) {
                return t.enabled;
              })),
              a.orderedModifiers.forEach(function (t) {
                var e = t.name,
                  n = t.options,
                  i = void 0 === n ? {} : n,
                  s = t.effect;
                if ("function" == typeof s) {
                  var r = s({ state: a, name: e, instance: u, options: i });
                  l.push(r || function () {});
                }
              }),
              u.update()
            );
          },
          forceUpdate: function () {
            if (!c) {
              var t = a.elements,
                e = t.reference,
                n = t.popper;
              if (Tt(e, n)) {
                (a.rects = {
                  reference: Et(e, z(n), "fixed" === a.options.strategy),
                  popper: B(n),
                }),
                  (a.reset = !1),
                  (a.placement = a.options.placement),
                  a.orderedModifiers.forEach(function (t) {
                    return (a.modifiersData[t.name] = Object.assign(
                      {},
                      t.data
                    ));
                  });
                for (var i = 0; i < a.orderedModifiers.length; i++)
                  if (!0 !== a.reset) {
                    var s = a.orderedModifiers[i],
                      r = s.fn,
                      o = s.options,
                      l = void 0 === o ? {} : o,
                      h = s.name;
                    "function" == typeof r &&
                      (a =
                        r({ state: a, options: l, name: h, instance: u }) || a);
                  } else (a.reset = !1), (i = -1);
              }
            }
          },
          update:
            ((s = function () {
              return new Promise(function (t) {
                u.forceUpdate(), t(a);
              });
            }),
            function () {
              return (
                o ||
                  (o = new Promise(function (t) {
                    Promise.resolve().then(function () {
                      (o = void 0), t(s());
                    });
                  })),
                o
              );
            }),
          destroy: function () {
            h(), (c = !0);
          },
        };
      if (!Tt(t, e)) return u;
      function h() {
        l.forEach(function (t) {
          return t();
        }),
          (l = []);
      }
      return (
        u.setOptions(n).then(function (t) {
          !c && n.onFirstUpdate && n.onFirstUpdate(t);
        }),
        u
      );
    };
  }
  var Ct = xt(),
    kt = xt({ defaultModifiers: [et, yt, J, S, bt, gt, wt, K, vt] }),
    Lt = xt({ defaultModifiers: [et, yt, J, S] });
  const Dt = "transitionend",
    St = (t) => {
      let e = t.getAttribute("data-bs-target");
      if (!e || "#" === e) {
        let n = t.getAttribute("href");
        if (!n || (!n.includes("#") && !n.startsWith("."))) return null;
        n.includes("#") && !n.startsWith("#") && (n = `#${n.split("#")[1]}`),
          (e = n && "#" !== n ? n.trim() : null);
      }
      return e;
    },
    Nt = (t) => {
      const e = St(t);
      return e && document.querySelector(e) ? e : null;
    },
    It = (t) => {
      const e = St(t);
      return e ? document.querySelector(e) : null;
    },
    Mt = (t) => {
      t.dispatchEvent(new Event(Dt));
    },
    Pt = (t) =>
      !(!t || "object" != typeof t) &&
      (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
    jt = (t) =>
      Pt(t)
        ? t.jquery
          ? t[0]
          : t
        : "string" == typeof t && t.length > 0
        ? document.querySelector(t)
        : null,
    Bt = (t, e, n) => {
      Object.keys(n).forEach((i) => {
        const s = n[i],
          r = e[i],
          o =
            r && Pt(r)
              ? "element"
              : null == (a = r)
              ? `${a}`
              : {}.toString
                  .call(a)
                  .match(/\s([a-z]+)/i)[1]
                  .toLowerCase();
        var a;
        if (!new RegExp(s).test(o))
          throw new TypeError(
            `${t.toUpperCase()}: Option "${i}" provided type "${o}" but expected type "${s}".`
          );
      });
    },
    Ht = (t) =>
      !(!Pt(t) || 0 === t.getClientRects().length) &&
      "visible" === getComputedStyle(t).getPropertyValue("visibility"),
    Wt = (t) =>
      !t ||
      t.nodeType !== Node.ELEMENT_NODE ||
      !!t.classList.contains("disabled") ||
      (void 0 !== t.disabled
        ? t.disabled
        : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")),
    Rt = (t) => {
      if (!document.documentElement.attachShadow) return null;
      if ("function" == typeof t.getRootNode) {
        const e = t.getRootNode();
        return e instanceof ShadowRoot ? e : null;
      }
      return t instanceof ShadowRoot
        ? t
        : t.parentNode
        ? Rt(t.parentNode)
        : null;
    },
    $t = () => {},
    Ft = (t) => {
      t.offsetHeight;
    },
    qt = () => {
      const { jQuery: t } = window;
      return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null;
    },
    zt = [],
    Vt = () => "rtl" === document.documentElement.dir,
    Ut = (t) => {
      var e;
      (e = () => {
        const e = qt();
        if (e) {
          const n = t.NAME,
            i = e.fn[n];
          (e.fn[n] = t.jQueryInterface),
            (e.fn[n].Constructor = t),
            (e.fn[n].noConflict = () => ((e.fn[n] = i), t.jQueryInterface));
        }
      }),
        "loading" === document.readyState
          ? (zt.length ||
              document.addEventListener("DOMContentLoaded", () => {
                zt.forEach((t) => t());
              }),
            zt.push(e))
          : e();
    },
    Xt = (t) => {
      "function" == typeof t && t();
    },
    Yt = (t, e, n = !0) => {
      if (!n) return void Xt(t);
      const i =
        ((t) => {
          if (!t) return 0;
          let { transitionDuration: e, transitionDelay: n } =
            window.getComputedStyle(t);
          const i = Number.parseFloat(e),
            s = Number.parseFloat(n);
          return i || s
            ? ((e = e.split(",")[0]),
              (n = n.split(",")[0]),
              1e3 * (Number.parseFloat(e) + Number.parseFloat(n)))
            : 0;
        })(e) + 5;
      let s = !1;
      const r = ({ target: n }) => {
        n === e && ((s = !0), e.removeEventListener(Dt, r), Xt(t));
      };
      e.addEventListener(Dt, r),
        setTimeout(() => {
          s || Mt(e);
        }, i);
    },
    Kt = (t, e, n, i) => {
      let s = t.indexOf(e);
      if (-1 === s) return t[!n && i ? t.length - 1 : 0];
      const r = t.length;
      return (
        (s += n ? 1 : -1),
        i && (s = (s + r) % r),
        t[Math.max(0, Math.min(s, r - 1))]
      );
    },
    Qt = /[^.]*(?=\..*)\.|.*/,
    Gt = /\..*/,
    Zt = /::\d+$/,
    Jt = {};
  let te = 1;
  const ee = { mouseenter: "mouseover", mouseleave: "mouseout" },
    ne = /^(mouseenter|mouseleave)/i,
    ie = new Set([
      "click",
      "dblclick",
      "mouseup",
      "mousedown",
      "contextmenu",
      "mousewheel",
      "DOMMouseScroll",
      "mouseover",
      "mouseout",
      "mousemove",
      "selectstart",
      "selectend",
      "keydown",
      "keypress",
      "keyup",
      "orientationchange",
      "touchstart",
      "touchmove",
      "touchend",
      "touchcancel",
      "pointerdown",
      "pointermove",
      "pointerup",
      "pointerleave",
      "pointercancel",
      "gesturestart",
      "gesturechange",
      "gestureend",
      "focus",
      "blur",
      "change",
      "reset",
      "select",
      "submit",
      "focusin",
      "focusout",
      "load",
      "unload",
      "beforeunload",
      "resize",
      "move",
      "DOMContentLoaded",
      "readystatechange",
      "error",
      "abort",
      "scroll",
    ]);
  function se(t, e) {
    return (e && `${e}::${te++}`) || t.uidEvent || te++;
  }
  function re(t) {
    const e = se(t);
    return (t.uidEvent = e), (Jt[e] = Jt[e] || {}), Jt[e];
  }
  function oe(t, e, n = null) {
    const i = Object.keys(t);
    for (let s = 0, r = i.length; s < r; s++) {
      const r = t[i[s]];
      if (r.originalHandler === e && r.delegationSelector === n) return r;
    }
    return null;
  }
  function ae(t, e, n) {
    const i = "string" == typeof e,
      s = i ? n : e;
    let r = ue(t);
    return ie.has(r) || (r = t), [i, s, r];
  }
  function le(t, e, n, i, s) {
    if ("string" != typeof e || !t) return;
    if ((n || ((n = i), (i = null)), ne.test(e))) {
      const t = (t) =>
        function (e) {
          if (
            !e.relatedTarget ||
            (e.relatedTarget !== e.delegateTarget &&
              !e.delegateTarget.contains(e.relatedTarget))
          )
            return t.call(this, e);
        };
      i ? (i = t(i)) : (n = t(n));
    }
    const [r, o, a] = ae(e, n, i),
      l = re(t),
      c = l[a] || (l[a] = {}),
      u = oe(c, o, r ? n : null);
    if (u) return void (u.oneOff = u.oneOff && s);
    const h = se(o, e.replace(Qt, "")),
      d = r
        ? (function (t, e, n) {
            return function i(s) {
              const r = t.querySelectorAll(e);
              for (let { target: o } = s; o && o !== this; o = o.parentNode)
                for (let a = r.length; a--; )
                  if (r[a] === o)
                    return (
                      (s.delegateTarget = o),
                      i.oneOff && he.off(t, s.type, e, n),
                      n.apply(o, [s])
                    );
              return null;
            };
          })(t, n, i)
        : (function (t, e) {
            return function n(i) {
              return (
                (i.delegateTarget = t),
                n.oneOff && he.off(t, i.type, e),
                e.apply(t, [i])
              );
            };
          })(t, n);
    (d.delegationSelector = r ? n : null),
      (d.originalHandler = o),
      (d.oneOff = s),
      (d.uidEvent = h),
      (c[h] = d),
      t.addEventListener(a, d, r);
  }
  function ce(t, e, n, i, s) {
    const r = oe(e[n], i, s);
    r && (t.removeEventListener(n, r, Boolean(s)), delete e[n][r.uidEvent]);
  }
  function ue(t) {
    return (t = t.replace(Gt, "")), ee[t] || t;
  }
  const he = {
      on(t, e, n, i) {
        le(t, e, n, i, !1);
      },
      one(t, e, n, i) {
        le(t, e, n, i, !0);
      },
      off(t, e, n, i) {
        if ("string" != typeof e || !t) return;
        const [s, r, o] = ae(e, n, i),
          a = o !== e,
          l = re(t),
          c = e.startsWith(".");
        if (void 0 !== r) {
          if (!l || !l[o]) return;
          return void ce(t, l, o, r, s ? n : null);
        }
        c &&
          Object.keys(l).forEach((n) => {
            !(function (t, e, n, i) {
              const s = e[n] || {};
              Object.keys(s).forEach((r) => {
                if (r.includes(i)) {
                  const i = s[r];
                  ce(t, e, n, i.originalHandler, i.delegationSelector);
                }
              });
            })(t, l, n, e.slice(1));
          });
        const u = l[o] || {};
        Object.keys(u).forEach((n) => {
          const i = n.replace(Zt, "");
          if (!a || e.includes(i)) {
            const e = u[n];
            ce(t, l, o, e.originalHandler, e.delegationSelector);
          }
        });
      },
      trigger(t, e, n) {
        if ("string" != typeof e || !t) return null;
        const i = qt(),
          s = ue(e),
          r = e !== s,
          o = ie.has(s);
        let a,
          l = !0,
          c = !0,
          u = !1,
          h = null;
        return (
          r &&
            i &&
            ((a = i.Event(e, n)),
            i(t).trigger(a),
            (l = !a.isPropagationStopped()),
            (c = !a.isImmediatePropagationStopped()),
            (u = a.isDefaultPrevented())),
          o
            ? ((h = document.createEvent("HTMLEvents")), h.initEvent(s, l, !0))
            : (h = new CustomEvent(e, { bubbles: l, cancelable: !0 })),
          void 0 !== n &&
            Object.keys(n).forEach((t) => {
              Object.defineProperty(h, t, { get: () => n[t] });
            }),
          u && h.preventDefault(),
          c && t.dispatchEvent(h),
          h.defaultPrevented && void 0 !== a && a.preventDefault(),
          h
        );
      },
    },
    de = new Map(),
    fe = {
      set(t, e, n) {
        de.has(t) || de.set(t, new Map());
        const i = de.get(t);
        i.has(e) || 0 === i.size
          ? i.set(e, n)
          : console.error(
              `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
                Array.from(i.keys())[0]
              }.`
            );
      },
      get: (t, e) => (de.has(t) && de.get(t).get(e)) || null,
      remove(t, e) {
        if (!de.has(t)) return;
        const n = de.get(t);
        n.delete(e), 0 === n.size && de.delete(t);
      },
    };
  class pe {
    constructor(t) {
      (t = jt(t)) &&
        ((this._element = t),
        fe.set(this._element, this.constructor.DATA_KEY, this));
    }
    dispose() {
      fe.remove(this._element, this.constructor.DATA_KEY),
        he.off(this._element, this.constructor.EVENT_KEY),
        Object.getOwnPropertyNames(this).forEach((t) => {
          this[t] = null;
        });
    }
    _queueCallback(t, e, n = !0) {
      Yt(t, e, n);
    }
    static getInstance(t) {
      return fe.get(jt(t), this.DATA_KEY);
    }
    static getOrCreateInstance(t, e = {}) {
      return (
        this.getInstance(t) || new this(t, "object" == typeof e ? e : null)
      );
    }
    static get VERSION() {
      return "5.1.3";
    }
    static get NAME() {
      throw new Error(
        'You have to implement the static method "NAME", for each component!'
      );
    }
    static get DATA_KEY() {
      return `bs.${this.NAME}`;
    }
    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`;
    }
  }
  const ge = (t, e = "hide") => {
    const n = `click.dismiss${t.EVENT_KEY}`,
      i = t.NAME;
    he.on(document, n, `[data-bs-dismiss="${i}"]`, function (n) {
      if (
        (["A", "AREA"].includes(this.tagName) && n.preventDefault(), Wt(this))
      )
        return;
      const s = It(this) || this.closest(`.${i}`);
      t.getOrCreateInstance(s)[e]();
    });
  };
  class me extends pe {
    static get NAME() {
      return "alert";
    }
    close() {
      if (he.trigger(this._element, "close.bs.alert").defaultPrevented) return;
      this._element.classList.remove("show");
      const t = this._element.classList.contains("fade");
      this._queueCallback(() => this._destroyElement(), this._element, t);
    }
    _destroyElement() {
      this._element.remove(),
        he.trigger(this._element, "closed.bs.alert"),
        this.dispose();
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = me.getOrCreateInstance(this);
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
            throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  }
  ge(me, "close"), Ut(me);
  const _e = '[data-bs-toggle="button"]';
  class ve extends pe {
    static get NAME() {
      return "button";
    }
    toggle() {
      this._element.setAttribute(
        "aria-pressed",
        this._element.classList.toggle("active")
      );
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = ve.getOrCreateInstance(this);
        "toggle" === t && e[t]();
      });
    }
  }
  function be(t) {
    return (
      "true" === t ||
      ("false" !== t &&
        (t === Number(t).toString()
          ? Number(t)
          : "" === t || "null" === t
          ? null
          : t))
    );
  }
  function ye(t) {
    return t.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
  }
  he.on(document, "click.bs.button.data-api", _e, (t) => {
    t.preventDefault();
    const e = t.target.closest(_e);
    ve.getOrCreateInstance(e).toggle();
  }),
    Ut(ve);
  const we = {
      setDataAttribute(t, e, n) {
        t.setAttribute(`data-bs-${ye(e)}`, n);
      },
      removeDataAttribute(t, e) {
        t.removeAttribute(`data-bs-${ye(e)}`);
      },
      getDataAttributes(t) {
        if (!t) return {};
        const e = {};
        return (
          Object.keys(t.dataset)
            .filter((t) => t.startsWith("bs"))
            .forEach((n) => {
              let i = n.replace(/^bs/, "");
              (i = i.charAt(0).toLowerCase() + i.slice(1, i.length)),
                (e[i] = be(t.dataset[n]));
            }),
          e
        );
      },
      getDataAttribute: (t, e) => be(t.getAttribute(`data-bs-${ye(e)}`)),
      offset(t) {
        const e = t.getBoundingClientRect();
        return {
          top: e.top + window.pageYOffset,
          left: e.left + window.pageXOffset,
        };
      },
      position: (t) => ({ top: t.offsetTop, left: t.offsetLeft }),
    },
    Ee = {
      find: (t, e = document.documentElement) =>
        [].concat(...Element.prototype.querySelectorAll.call(e, t)),
      findOne: (t, e = document.documentElement) =>
        Element.prototype.querySelector.call(e, t),
      children: (t, e) => [].concat(...t.children).filter((t) => t.matches(e)),
      parents(t, e) {
        const n = [];
        let i = t.parentNode;
        for (; i && i.nodeType === Node.ELEMENT_NODE && 3 !== i.nodeType; )
          i.matches(e) && n.push(i), (i = i.parentNode);
        return n;
      },
      prev(t, e) {
        let n = t.previousElementSibling;
        for (; n; ) {
          if (n.matches(e)) return [n];
          n = n.previousElementSibling;
        }
        return [];
      },
      next(t, e) {
        let n = t.nextElementSibling;
        for (; n; ) {
          if (n.matches(e)) return [n];
          n = n.nextElementSibling;
        }
        return [];
      },
      focusableChildren(t) {
        const e = [
          "a",
          "button",
          "input",
          "textarea",
          "select",
          "details",
          "[tabindex]",
          '[contenteditable="true"]',
        ]
          .map((t) => `${t}:not([tabindex^="-"])`)
          .join(", ");
        return this.find(e, t).filter((t) => !Wt(t) && Ht(t));
      },
    },
    Ae = "carousel",
    Oe = {
      interval: 5e3,
      keyboard: !0,
      slide: !1,
      pause: "hover",
      wrap: !0,
      touch: !0,
    },
    Te = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      slide: "(boolean|string)",
      pause: "(string|boolean)",
      wrap: "boolean",
      touch: "boolean",
    },
    xe = "next",
    Ce = "prev",
    ke = "left",
    Le = "right",
    De = { ArrowLeft: Le, ArrowRight: ke },
    Se = "slid.bs.carousel",
    Ne = "active",
    Ie = ".active.carousel-item";
  class Me extends pe {
    constructor(t, e) {
      super(t),
        (this._items = null),
        (this._interval = null),
        (this._activeElement = null),
        (this._isPaused = !1),
        (this._isSliding = !1),
        (this.touchTimeout = null),
        (this.touchStartX = 0),
        (this.touchDeltaX = 0),
        (this._config = this._getConfig(e)),
        (this._indicatorsElement = Ee.findOne(
          ".carousel-indicators",
          this._element
        )),
        (this._touchSupported =
          "ontouchstart" in document.documentElement ||
          navigator.maxTouchPoints > 0),
        (this._pointerEvent = Boolean(window.PointerEvent)),
        this._addEventListeners();
    }
    static get Default() {
      return Oe;
    }
    static get NAME() {
      return Ae;
    }
    next() {
      this._slide(xe);
    }
    nextWhenVisible() {
      !document.hidden && Ht(this._element) && this.next();
    }
    prev() {
      this._slide(Ce);
    }
    pause(t) {
      t || (this._isPaused = !0),
        Ee.findOne(".carousel-item-next, .carousel-item-prev", this._element) &&
          (Mt(this._element), this.cycle(!0)),
        clearInterval(this._interval),
        (this._interval = null);
    }
    cycle(t) {
      t || (this._isPaused = !1),
        this._interval &&
          (clearInterval(this._interval), (this._interval = null)),
        this._config &&
          this._config.interval &&
          !this._isPaused &&
          (this._updateInterval(),
          (this._interval = setInterval(
            (document.visibilityState ? this.nextWhenVisible : this.next).bind(
              this
            ),
            this._config.interval
          )));
    }
    to(t) {
      this._activeElement = Ee.findOne(Ie, this._element);
      const e = this._getItemIndex(this._activeElement);
      if (t > this._items.length - 1 || t < 0) return;
      if (this._isSliding)
        return void he.one(this._element, Se, () => this.to(t));
      if (e === t) return this.pause(), void this.cycle();
      const n = t > e ? xe : Ce;
      this._slide(n, this._items[t]);
    }
    _getConfig(t) {
      return (
        (t = {
          ...Oe,
          ...we.getDataAttributes(this._element),
          ...("object" == typeof t ? t : {}),
        }),
        Bt(Ae, t, Te),
        t
      );
    }
    _handleSwipe() {
      const t = Math.abs(this.touchDeltaX);
      if (t <= 40) return;
      const e = t / this.touchDeltaX;
      (this.touchDeltaX = 0), e && this._slide(e > 0 ? Le : ke);
    }
    _addEventListeners() {
      this._config.keyboard &&
        he.on(this._element, "keydown.bs.carousel", (t) => this._keydown(t)),
        "hover" === this._config.pause &&
          (he.on(this._element, "mouseenter.bs.carousel", (t) => this.pause(t)),
          he.on(this._element, "mouseleave.bs.carousel", (t) => this.cycle(t))),
        this._config.touch &&
          this._touchSupported &&
          this._addTouchEventListeners();
    }
    _addTouchEventListeners() {
      const t = (t) =>
          this._pointerEvent &&
          ("pen" === t.pointerType || "touch" === t.pointerType),
        e = (e) => {
          t(e)
            ? (this.touchStartX = e.clientX)
            : this._pointerEvent || (this.touchStartX = e.touches[0].clientX);
        },
        n = (t) => {
          this.touchDeltaX =
            t.touches && t.touches.length > 1
              ? 0
              : t.touches[0].clientX - this.touchStartX;
        },
        i = (e) => {
          t(e) && (this.touchDeltaX = e.clientX - this.touchStartX),
            this._handleSwipe(),
            "hover" === this._config.pause &&
              (this.pause(),
              this.touchTimeout && clearTimeout(this.touchTimeout),
              (this.touchTimeout = setTimeout(
                (t) => this.cycle(t),
                500 + this._config.interval
              )));
        };
      Ee.find(".carousel-item img", this._element).forEach((t) => {
        he.on(t, "dragstart.bs.carousel", (t) => t.preventDefault());
      }),
        this._pointerEvent
          ? (he.on(this._element, "pointerdown.bs.carousel", (t) => e(t)),
            he.on(this._element, "pointerup.bs.carousel", (t) => i(t)),
            this._element.classList.add("pointer-event"))
          : (he.on(this._element, "touchstart.bs.carousel", (t) => e(t)),
            he.on(this._element, "touchmove.bs.carousel", (t) => n(t)),
            he.on(this._element, "touchend.bs.carousel", (t) => i(t)));
    }
    _keydown(t) {
      if (/input|textarea/i.test(t.target.tagName)) return;
      const e = De[t.key];
      e && (t.preventDefault(), this._slide(e));
    }
    _getItemIndex(t) {
      return (
        (this._items =
          t && t.parentNode ? Ee.find(".carousel-item", t.parentNode) : []),
        this._items.indexOf(t)
      );
    }
    _getItemByOrder(t, e) {
      const n = t === xe;
      return Kt(this._items, e, n, this._config.wrap);
    }
    _triggerSlideEvent(t, e) {
      const n = this._getItemIndex(t),
        i = this._getItemIndex(Ee.findOne(Ie, this._element));
      return he.trigger(this._element, "slide.bs.carousel", {
        relatedTarget: t,
        direction: e,
        from: i,
        to: n,
      });
    }
    _setActiveIndicatorElement(t) {
      if (this._indicatorsElement) {
        const e = Ee.findOne(".active", this._indicatorsElement);
        e.classList.remove(Ne), e.removeAttribute("aria-current");
        const n = Ee.find("[data-bs-target]", this._indicatorsElement);
        for (let e = 0; e < n.length; e++)
          if (
            Number.parseInt(n[e].getAttribute("data-bs-slide-to"), 10) ===
            this._getItemIndex(t)
          ) {
            n[e].classList.add(Ne), n[e].setAttribute("aria-current", "true");
            break;
          }
      }
    }
    _updateInterval() {
      const t = this._activeElement || Ee.findOne(Ie, this._element);
      if (!t) return;
      const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
      e
        ? ((this._config.defaultInterval =
            this._config.defaultInterval || this._config.interval),
          (this._config.interval = e))
        : (this._config.interval =
            this._config.defaultInterval || this._config.interval);
    }
    _slide(t, e) {
      const n = this._directionToOrder(t),
        i = Ee.findOne(Ie, this._element),
        s = this._getItemIndex(i),
        r = e || this._getItemByOrder(n, i),
        o = this._getItemIndex(r),
        a = Boolean(this._interval),
        l = n === xe,
        c = l ? "carousel-item-start" : "carousel-item-end",
        u = l ? "carousel-item-next" : "carousel-item-prev",
        h = this._orderToDirection(n);
      if (r && r.classList.contains(Ne)) return void (this._isSliding = !1);
      if (this._isSliding) return;
      if (this._triggerSlideEvent(r, h).defaultPrevented) return;
      if (!i || !r) return;
      (this._isSliding = !0),
        a && this.pause(),
        this._setActiveIndicatorElement(r),
        (this._activeElement = r);
      const d = () => {
        he.trigger(this._element, Se, {
          relatedTarget: r,
          direction: h,
          from: s,
          to: o,
        });
      };
      if (this._element.classList.contains("slide")) {
        r.classList.add(u), Ft(r), i.classList.add(c), r.classList.add(c);
        const t = () => {
          r.classList.remove(c, u),
            r.classList.add(Ne),
            i.classList.remove(Ne, u, c),
            (this._isSliding = !1),
            setTimeout(d, 0);
        };
        this._queueCallback(t, i, !0);
      } else
        i.classList.remove(Ne),
          r.classList.add(Ne),
          (this._isSliding = !1),
          d();
      a && this.cycle();
    }
    _directionToOrder(t) {
      return [Le, ke].includes(t)
        ? Vt()
          ? t === ke
            ? Ce
            : xe
          : t === ke
          ? xe
          : Ce
        : t;
    }
    _orderToDirection(t) {
      return [xe, Ce].includes(t)
        ? Vt()
          ? t === Ce
            ? ke
            : Le
          : t === Ce
          ? Le
          : ke
        : t;
    }
    static carouselInterface(t, e) {
      const n = Me.getOrCreateInstance(t, e);
      let { _config: i } = n;
      "object" == typeof e && (i = { ...i, ...e });
      const s = "string" == typeof e ? e : i.slide;
      if ("number" == typeof e) n.to(e);
      else if ("string" == typeof s) {
        if (void 0 === n[s]) throw new TypeError(`No method named "${s}"`);
        n[s]();
      } else i.interval && i.ride && (n.pause(), n.cycle());
    }
    static jQueryInterface(t) {
      return this.each(function () {
        Me.carouselInterface(this, t);
      });
    }
    static dataApiClickHandler(t) {
      const e = It(this);
      if (!e || !e.classList.contains("carousel")) return;
      const n = { ...we.getDataAttributes(e), ...we.getDataAttributes(this) },
        i = this.getAttribute("data-bs-slide-to");
      i && (n.interval = !1),
        Me.carouselInterface(e, n),
        i && Me.getInstance(e).to(i),
        t.preventDefault();
    }
  }
  he.on(
    document,
    "click.bs.carousel.data-api",
    "[data-bs-slide], [data-bs-slide-to]",
    Me.dataApiClickHandler
  ),
    he.on(window, "load.bs.carousel.data-api", () => {
      const t = Ee.find('[data-bs-ride="carousel"]');
      for (let e = 0, n = t.length; e < n; e++)
        Me.carouselInterface(t[e], Me.getInstance(t[e]));
    }),
    Ut(Me);
  const Pe = "collapse",
    je = { toggle: !0, parent: null },
    Be = { toggle: "boolean", parent: "(null|element)" },
    He = "show",
    We = "collapse",
    Re = "collapsing",
    $e = "collapsed",
    Fe = ":scope .collapse .collapse",
    qe = '[data-bs-toggle="collapse"]';
  class ze extends pe {
    constructor(t, e) {
      super(t),
        (this._isTransitioning = !1),
        (this._config = this._getConfig(e)),
        (this._triggerArray = []);
      const n = Ee.find(qe);
      for (let t = 0, e = n.length; t < e; t++) {
        const e = n[t],
          i = Nt(e),
          s = Ee.find(i).filter((t) => t === this._element);
        null !== i &&
          s.length &&
          ((this._selector = i), this._triggerArray.push(e));
      }
      this._initializeChildren(),
        this._config.parent ||
          this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
        this._config.toggle && this.toggle();
    }
    static get Default() {
      return je;
    }
    static get NAME() {
      return Pe;
    }
    toggle() {
      this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (this._isTransitioning || this._isShown()) return;
      let t,
        e = [];
      if (this._config.parent) {
        const t = Ee.find(Fe, this._config.parent);
        e = Ee.find(
          ".collapse.show, .collapse.collapsing",
          this._config.parent
        ).filter((e) => !t.includes(e));
      }
      const n = Ee.findOne(this._selector);
      if (e.length) {
        const i = e.find((t) => n !== t);
        if (((t = i ? ze.getInstance(i) : null), t && t._isTransitioning))
          return;
      }
      if (he.trigger(this._element, "show.bs.collapse").defaultPrevented)
        return;
      e.forEach((e) => {
        n !== e && ze.getOrCreateInstance(e, { toggle: !1 }).hide(),
          t || fe.set(e, "bs.collapse", null);
      });
      const i = this._getDimension();
      this._element.classList.remove(We),
        this._element.classList.add(Re),
        (this._element.style[i] = 0),
        this._addAriaAndCollapsedClass(this._triggerArray, !0),
        (this._isTransitioning = !0);
      const s = `scroll${i[0].toUpperCase() + i.slice(1)}`;
      this._queueCallback(
        () => {
          (this._isTransitioning = !1),
            this._element.classList.remove(Re),
            this._element.classList.add(We, He),
            (this._element.style[i] = ""),
            he.trigger(this._element, "shown.bs.collapse");
        },
        this._element,
        !0
      ),
        (this._element.style[i] = `${this._element[s]}px`);
    }
    hide() {
      if (this._isTransitioning || !this._isShown()) return;
      if (he.trigger(this._element, "hide.bs.collapse").defaultPrevented)
        return;
      const t = this._getDimension();
      (this._element.style[t] = `${
        this._element.getBoundingClientRect()[t]
      }px`),
        Ft(this._element),
        this._element.classList.add(Re),
        this._element.classList.remove(We, He);
      const e = this._triggerArray.length;
      for (let t = 0; t < e; t++) {
        const e = this._triggerArray[t],
          n = It(e);
        n && !this._isShown(n) && this._addAriaAndCollapsedClass([e], !1);
      }
      (this._isTransitioning = !0),
        (this._element.style[t] = ""),
        this._queueCallback(
          () => {
            (this._isTransitioning = !1),
              this._element.classList.remove(Re),
              this._element.classList.add(We),
              he.trigger(this._element, "hidden.bs.collapse");
          },
          this._element,
          !0
        );
    }
    _isShown(t = this._element) {
      return t.classList.contains(He);
    }
    _getConfig(t) {
      return (
        ((t = { ...je, ...we.getDataAttributes(this._element), ...t }).toggle =
          Boolean(t.toggle)),
        (t.parent = jt(t.parent)),
        Bt(Pe, t, Be),
        t
      );
    }
    _getDimension() {
      return this._element.classList.contains("collapse-horizontal")
        ? "width"
        : "height";
    }
    _initializeChildren() {
      if (!this._config.parent) return;
      const t = Ee.find(Fe, this._config.parent);
      Ee.find(qe, this._config.parent)
        .filter((e) => !t.includes(e))
        .forEach((t) => {
          const e = It(t);
          e && this._addAriaAndCollapsedClass([t], this._isShown(e));
        });
    }
    _addAriaAndCollapsedClass(t, e) {
      t.length &&
        t.forEach((t) => {
          e ? t.classList.remove($e) : t.classList.add($e),
            t.setAttribute("aria-expanded", e);
        });
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = {};
        "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1);
        const n = ze.getOrCreateInstance(this, e);
        if ("string" == typeof t) {
          if (void 0 === n[t]) throw new TypeError(`No method named "${t}"`);
          n[t]();
        }
      });
    }
  }
  he.on(document, "click.bs.collapse.data-api", qe, function (t) {
    ("A" === t.target.tagName ||
      (t.delegateTarget && "A" === t.delegateTarget.tagName)) &&
      t.preventDefault();
    const e = Nt(this);
    Ee.find(e).forEach((t) => {
      ze.getOrCreateInstance(t, { toggle: !1 }).toggle();
    });
  }),
    Ut(ze);
  const Ve = "dropdown",
    Ue = "Escape",
    Xe = "Space",
    Ye = "ArrowUp",
    Ke = "ArrowDown",
    Qe = new RegExp("ArrowUp|ArrowDown|Escape"),
    Ge = "click.bs.dropdown.data-api",
    Ze = "keydown.bs.dropdown.data-api",
    Je = "show",
    tn = '[data-bs-toggle="dropdown"]',
    en = ".dropdown-menu",
    nn = Vt() ? "top-end" : "top-start",
    sn = Vt() ? "top-start" : "top-end",
    rn = Vt() ? "bottom-end" : "bottom-start",
    on = Vt() ? "bottom-start" : "bottom-end",
    an = Vt() ? "left-start" : "right-start",
    ln = Vt() ? "right-start" : "left-start",
    cn = {
      offset: [0, 2],
      boundary: "clippingParents",
      reference: "toggle",
      display: "dynamic",
      popperConfig: null,
      autoClose: !0,
    },
    un = {
      offset: "(array|string|function)",
      boundary: "(string|element)",
      reference: "(string|element|object)",
      display: "string",
      popperConfig: "(null|object|function)",
      autoClose: "(boolean|string)",
    };
  class hn extends pe {
    constructor(t, e) {
      super(t),
        (this._popper = null),
        (this._config = this._getConfig(e)),
        (this._menu = this._getMenuElement()),
        (this._inNavbar = this._detectNavbar());
    }
    static get Default() {
      return cn;
    }
    static get DefaultType() {
      return un;
    }
    static get NAME() {
      return Ve;
    }
    toggle() {
      return this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (Wt(this._element) || this._isShown(this._menu)) return;
      const t = { relatedTarget: this._element };
      if (he.trigger(this._element, "show.bs.dropdown", t).defaultPrevented)
        return;
      const e = hn.getParentFromElement(this._element);
      this._inNavbar
        ? we.setDataAttribute(this._menu, "popper", "none")
        : this._createPopper(e),
        "ontouchstart" in document.documentElement &&
          !e.closest(".navbar-nav") &&
          []
            .concat(...document.body.children)
            .forEach((t) => he.on(t, "mouseover", $t)),
        this._element.focus(),
        this._element.setAttribute("aria-expanded", !0),
        this._menu.classList.add(Je),
        this._element.classList.add(Je),
        he.trigger(this._element, "shown.bs.dropdown", t);
    }
    hide() {
      if (Wt(this._element) || !this._isShown(this._menu)) return;
      const t = { relatedTarget: this._element };
      this._completeHide(t);
    }
    dispose() {
      this._popper && this._popper.destroy(), super.dispose();
    }
    update() {
      (this._inNavbar = this._detectNavbar()),
        this._popper && this._popper.update();
    }
    _completeHide(t) {
      he.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented ||
        ("ontouchstart" in document.documentElement &&
          []
            .concat(...document.body.children)
            .forEach((t) => he.off(t, "mouseover", $t)),
        this._popper && this._popper.destroy(),
        this._menu.classList.remove(Je),
        this._element.classList.remove(Je),
        this._element.setAttribute("aria-expanded", "false"),
        we.removeDataAttribute(this._menu, "popper"),
        he.trigger(this._element, "hidden.bs.dropdown", t));
    }
    _getConfig(t) {
      if (
        ((t = {
          ...this.constructor.Default,
          ...we.getDataAttributes(this._element),
          ...t,
        }),
        Bt(Ve, t, this.constructor.DefaultType),
        "object" == typeof t.reference &&
          !Pt(t.reference) &&
          "function" != typeof t.reference.getBoundingClientRect)
      )
        throw new TypeError(
          `${Ve.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
        );
      return t;
    }
    _createPopper(t) {
      if (void 0 === e)
        throw new TypeError(
          "Bootstrap's dropdowns require Popper (https://popper.js.org)"
        );
      let n = this._element;
      "parent" === this._config.reference
        ? (n = t)
        : Pt(this._config.reference)
        ? (n = jt(this._config.reference))
        : "object" == typeof this._config.reference &&
          (n = this._config.reference);
      const i = this._getPopperConfig(),
        s = i.modifiers.find(
          (t) => "applyStyles" === t.name && !1 === t.enabled
        );
      (this._popper = kt(n, this._menu, i)),
        s && we.setDataAttribute(this._menu, "popper", "static");
    }
    _isShown(t = this._element) {
      return t.classList.contains(Je);
    }
    _getMenuElement() {
      return Ee.next(this._element, en)[0];
    }
    _getPlacement() {
      const t = this._element.parentNode;
      if (t.classList.contains("dropend")) return an;
      if (t.classList.contains("dropstart")) return ln;
      const e =
        "end" ===
        getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
      return t.classList.contains("dropup") ? (e ? sn : nn) : e ? on : rn;
    }
    _detectNavbar() {
      return null !== this._element.closest(".navbar");
    }
    _getOffset() {
      const { offset: t } = this._config;
      return "string" == typeof t
        ? t.split(",").map((t) => Number.parseInt(t, 10))
        : "function" == typeof t
        ? (e) => t(e, this._element)
        : t;
    }
    _getPopperConfig() {
      const t = {
        placement: this._getPlacement(),
        modifiers: [
          {
            name: "preventOverflow",
            options: { boundary: this._config.boundary },
          },
          { name: "offset", options: { offset: this._getOffset() } },
        ],
      };
      return (
        "static" === this._config.display &&
          (t.modifiers = [{ name: "applyStyles", enabled: !1 }]),
        {
          ...t,
          ...("function" == typeof this._config.popperConfig
            ? this._config.popperConfig(t)
            : this._config.popperConfig),
        }
      );
    }
    _selectMenuItem({ key: t, target: e }) {
      const n = Ee.find(
        ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
        this._menu
      ).filter(Ht);
      n.length && Kt(n, e, t === Ke, !n.includes(e)).focus();
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = hn.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
    static clearMenus(t) {
      if (t && (2 === t.button || ("keyup" === t.type && "Tab" !== t.key)))
        return;
      const e = Ee.find(tn);
      for (let n = 0, i = e.length; n < i; n++) {
        const i = hn.getInstance(e[n]);
        if (!i || !1 === i._config.autoClose) continue;
        if (!i._isShown()) continue;
        const s = { relatedTarget: i._element };
        if (t) {
          const e = t.composedPath(),
            n = e.includes(i._menu);
          if (
            e.includes(i._element) ||
            ("inside" === i._config.autoClose && !n) ||
            ("outside" === i._config.autoClose && n)
          )
            continue;
          if (
            i._menu.contains(t.target) &&
            (("keyup" === t.type && "Tab" === t.key) ||
              /input|select|option|textarea|form/i.test(t.target.tagName))
          )
            continue;
          "click" === t.type && (s.clickEvent = t);
        }
        i._completeHide(s);
      }
    }
    static getParentFromElement(t) {
      return It(t) || t.parentNode;
    }
    static dataApiKeydownHandler(t) {
      if (
        /input|textarea/i.test(t.target.tagName)
          ? t.key === Xe ||
            (t.key !== Ue &&
              ((t.key !== Ke && t.key !== Ye) || t.target.closest(en)))
          : !Qe.test(t.key)
      )
        return;
      const e = this.classList.contains(Je);
      if (!e && t.key === Ue) return;
      if ((t.preventDefault(), t.stopPropagation(), Wt(this))) return;
      const n = this.matches(tn) ? this : Ee.prev(this, tn)[0],
        i = hn.getOrCreateInstance(n);
      if (t.key !== Ue)
        return t.key === Ye || t.key === Ke
          ? (e || i.show(), void i._selectMenuItem(t))
          : void ((e && t.key !== Xe) || hn.clearMenus());
      i.hide();
    }
  }
  he.on(document, Ze, tn, hn.dataApiKeydownHandler),
    he.on(document, Ze, en, hn.dataApiKeydownHandler),
    he.on(document, Ge, hn.clearMenus),
    he.on(document, "keyup.bs.dropdown.data-api", hn.clearMenus),
    he.on(document, Ge, tn, function (t) {
      t.preventDefault(), hn.getOrCreateInstance(this).toggle();
    }),
    Ut(hn);
  const dn = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
    fn = ".sticky-top";
  class pn {
    constructor() {
      this._element = document.body;
    }
    getWidth() {
      const t = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - t);
    }
    hide() {
      const t = this.getWidth();
      this._disableOverFlow(),
        this._setElementAttributes(this._element, "paddingRight", (e) => e + t),
        this._setElementAttributes(dn, "paddingRight", (e) => e + t),
        this._setElementAttributes(fn, "marginRight", (e) => e - t);
    }
    _disableOverFlow() {
      this._saveInitialAttribute(this._element, "overflow"),
        (this._element.style.overflow = "hidden");
    }
    _setElementAttributes(t, e, n) {
      const i = this.getWidth();
      this._applyManipulationCallback(t, (t) => {
        if (t !== this._element && window.innerWidth > t.clientWidth + i)
          return;
        this._saveInitialAttribute(t, e);
        const s = window.getComputedStyle(t)[e];
        t.style[e] = `${n(Number.parseFloat(s))}px`;
      });
    }
    reset() {
      this._resetElementAttributes(this._element, "overflow"),
        this._resetElementAttributes(this._element, "paddingRight"),
        this._resetElementAttributes(dn, "paddingRight"),
        this._resetElementAttributes(fn, "marginRight");
    }
    _saveInitialAttribute(t, e) {
      const n = t.style[e];
      n && we.setDataAttribute(t, e, n);
    }
    _resetElementAttributes(t, e) {
      this._applyManipulationCallback(t, (t) => {
        const n = we.getDataAttribute(t, e);
        void 0 === n
          ? t.style.removeProperty(e)
          : (we.removeDataAttribute(t, e), (t.style[e] = n));
      });
    }
    _applyManipulationCallback(t, e) {
      Pt(t) ? e(t) : Ee.find(t, this._element).forEach(e);
    }
    isOverflowing() {
      return this.getWidth() > 0;
    }
  }
  const gn = {
      className: "modal-backdrop",
      isVisible: !0,
      isAnimated: !1,
      rootElement: "body",
      clickCallback: null,
    },
    mn = {
      className: "string",
      isVisible: "boolean",
      isAnimated: "boolean",
      rootElement: "(element|string)",
      clickCallback: "(function|null)",
    },
    _n = "show",
    vn = "mousedown.bs.backdrop";
  class bn {
    constructor(t) {
      (this._config = this._getConfig(t)),
        (this._isAppended = !1),
        (this._element = null);
    }
    show(t) {
      this._config.isVisible
        ? (this._append(),
          this._config.isAnimated && Ft(this._getElement()),
          this._getElement().classList.add(_n),
          this._emulateAnimation(() => {
            Xt(t);
          }))
        : Xt(t);
    }
    hide(t) {
      this._config.isVisible
        ? (this._getElement().classList.remove(_n),
          this._emulateAnimation(() => {
            this.dispose(), Xt(t);
          }))
        : Xt(t);
    }
    _getElement() {
      if (!this._element) {
        const t = document.createElement("div");
        (t.className = this._config.className),
          this._config.isAnimated && t.classList.add("fade"),
          (this._element = t);
      }
      return this._element;
    }
    _getConfig(t) {
      return (
        ((t = { ...gn, ...("object" == typeof t ? t : {}) }).rootElement = jt(
          t.rootElement
        )),
        Bt("backdrop", t, mn),
        t
      );
    }
    _append() {
      this._isAppended ||
        (this._config.rootElement.append(this._getElement()),
        he.on(this._getElement(), vn, () => {
          Xt(this._config.clickCallback);
        }),
        (this._isAppended = !0));
    }
    dispose() {
      this._isAppended &&
        (he.off(this._element, vn),
        this._element.remove(),
        (this._isAppended = !1));
    }
    _emulateAnimation(t) {
      Yt(t, this._getElement(), this._config.isAnimated);
    }
  }
  const yn = { trapElement: null, autofocus: !0 },
    wn = { trapElement: "element", autofocus: "boolean" },
    En = ".bs.focustrap",
    An = "backward";
  class On {
    constructor(t) {
      (this._config = this._getConfig(t)),
        (this._isActive = !1),
        (this._lastTabNavDirection = null);
    }
    activate() {
      const { trapElement: t, autofocus: e } = this._config;
      this._isActive ||
        (e && t.focus(),
        he.off(document, En),
        he.on(document, "focusin.bs.focustrap", (t) => this._handleFocusin(t)),
        he.on(document, "keydown.tab.bs.focustrap", (t) =>
          this._handleKeydown(t)
        ),
        (this._isActive = !0));
    }
    deactivate() {
      this._isActive && ((this._isActive = !1), he.off(document, En));
    }
    _handleFocusin(t) {
      const { target: e } = t,
        { trapElement: n } = this._config;
      if (e === document || e === n || n.contains(e)) return;
      const i = Ee.focusableChildren(n);
      0 === i.length
        ? n.focus()
        : this._lastTabNavDirection === An
        ? i[i.length - 1].focus()
        : i[0].focus();
    }
    _handleKeydown(t) {
      "Tab" === t.key &&
        (this._lastTabNavDirection = t.shiftKey ? An : "forward");
    }
    _getConfig(t) {
      return (
        (t = { ...yn, ...("object" == typeof t ? t : {}) }),
        Bt("focustrap", t, wn),
        t
      );
    }
  }
  const Tn = "modal",
    xn = "Escape",
    Cn = { backdrop: !0, keyboard: !0, focus: !0 },
    kn = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      focus: "boolean",
    },
    Ln = "hidden.bs.modal",
    Dn = "show.bs.modal",
    Sn = "resize.bs.modal",
    Nn = "click.dismiss.bs.modal",
    In = "keydown.dismiss.bs.modal",
    Mn = "mousedown.dismiss.bs.modal",
    Pn = "modal-open",
    jn = "show",
    Bn = "modal-static";
  class Hn extends pe {
    constructor(t, e) {
      super(t),
        (this._config = this._getConfig(e)),
        (this._dialog = Ee.findOne(".modal-dialog", this._element)),
        (this._backdrop = this._initializeBackDrop()),
        (this._focustrap = this._initializeFocusTrap()),
        (this._isShown = !1),
        (this._ignoreBackdropClick = !1),
        (this._isTransitioning = !1),
        (this._scrollBar = new pn());
    }
    static get Default() {
      return Cn;
    }
    static get NAME() {
      return Tn;
    }
    toggle(t) {
      return this._isShown ? this.hide() : this.show(t);
    }
    show(t) {
      this._isShown ||
        this._isTransitioning ||
        he.trigger(this._element, Dn, { relatedTarget: t }).defaultPrevented ||
        ((this._isShown = !0),
        this._isAnimated() && (this._isTransitioning = !0),
        this._scrollBar.hide(),
        document.body.classList.add(Pn),
        this._adjustDialog(),
        this._setEscapeEvent(),
        this._setResizeEvent(),
        he.on(this._dialog, Mn, () => {
          he.one(this._element, "mouseup.dismiss.bs.modal", (t) => {
            t.target === this._element && (this._ignoreBackdropClick = !0);
          });
        }),
        this._showBackdrop(() => this._showElement(t)));
    }
    hide() {
      if (!this._isShown || this._isTransitioning) return;
      if (he.trigger(this._element, "hide.bs.modal").defaultPrevented) return;
      this._isShown = !1;
      const t = this._isAnimated();
      t && (this._isTransitioning = !0),
        this._setEscapeEvent(),
        this._setResizeEvent(),
        this._focustrap.deactivate(),
        this._element.classList.remove(jn),
        he.off(this._element, Nn),
        he.off(this._dialog, Mn),
        this._queueCallback(() => this._hideModal(), this._element, t);
    }
    dispose() {
      [window, this._dialog].forEach((t) => he.off(t, ".bs.modal")),
        this._backdrop.dispose(),
        this._focustrap.deactivate(),
        super.dispose();
    }
    handleUpdate() {
      this._adjustDialog();
    }
    _initializeBackDrop() {
      return new bn({
        isVisible: Boolean(this._config.backdrop),
        isAnimated: this._isAnimated(),
      });
    }
    _initializeFocusTrap() {
      return new On({ trapElement: this._element });
    }
    _getConfig(t) {
      return (
        (t = {
          ...Cn,
          ...we.getDataAttributes(this._element),
          ...("object" == typeof t ? t : {}),
        }),
        Bt(Tn, t, kn),
        t
      );
    }
    _showElement(t) {
      const e = this._isAnimated(),
        n = Ee.findOne(".modal-body", this._dialog);
      (this._element.parentNode &&
        this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
        document.body.append(this._element),
        (this._element.style.display = "block"),
        this._element.removeAttribute("aria-hidden"),
        this._element.setAttribute("aria-modal", !0),
        this._element.setAttribute("role", "dialog"),
        (this._element.scrollTop = 0),
        n && (n.scrollTop = 0),
        e && Ft(this._element),
        this._element.classList.add(jn),
        this._queueCallback(
          () => {
            this._config.focus && this._focustrap.activate(),
              (this._isTransitioning = !1),
              he.trigger(this._element, "shown.bs.modal", { relatedTarget: t });
          },
          this._dialog,
          e
        );
    }
    _setEscapeEvent() {
      this._isShown
        ? he.on(this._element, In, (t) => {
            this._config.keyboard && t.key === xn
              ? (t.preventDefault(), this.hide())
              : this._config.keyboard ||
                t.key !== xn ||
                this._triggerBackdropTransition();
          })
        : he.off(this._element, In);
    }
    _setResizeEvent() {
      this._isShown
        ? he.on(window, Sn, () => this._adjustDialog())
        : he.off(window, Sn);
    }
    _hideModal() {
      (this._element.style.display = "none"),
        this._element.setAttribute("aria-hidden", !0),
        this._element.removeAttribute("aria-modal"),
        this._element.removeAttribute("role"),
        (this._isTransitioning = !1),
        this._backdrop.hide(() => {
          document.body.classList.remove(Pn),
            this._resetAdjustments(),
            this._scrollBar.reset(),
            he.trigger(this._element, Ln);
        });
    }
    _showBackdrop(t) {
      he.on(this._element, Nn, (t) => {
        this._ignoreBackdropClick
          ? (this._ignoreBackdropClick = !1)
          : t.target === t.currentTarget &&
            (!0 === this._config.backdrop
              ? this.hide()
              : "static" === this._config.backdrop &&
                this._triggerBackdropTransition());
      }),
        this._backdrop.show(t);
    }
    _isAnimated() {
      return this._element.classList.contains("fade");
    }
    _triggerBackdropTransition() {
      if (he.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented)
        return;
      const { classList: t, scrollHeight: e, style: n } = this._element,
        i = e > document.documentElement.clientHeight;
      (!i && "hidden" === n.overflowY) ||
        t.contains(Bn) ||
        (i || (n.overflowY = "hidden"),
        t.add(Bn),
        this._queueCallback(() => {
          t.remove(Bn),
            i ||
              this._queueCallback(() => {
                n.overflowY = "";
              }, this._dialog);
        }, this._dialog),
        this._element.focus());
    }
    _adjustDialog() {
      const t =
          this._element.scrollHeight > document.documentElement.clientHeight,
        e = this._scrollBar.getWidth(),
        n = e > 0;
      ((!n && t && !Vt()) || (n && !t && Vt())) &&
        (this._element.style.paddingLeft = `${e}px`),
        ((n && !t && !Vt()) || (!n && t && Vt())) &&
          (this._element.style.paddingRight = `${e}px`);
    }
    _resetAdjustments() {
      (this._element.style.paddingLeft = ""),
        (this._element.style.paddingRight = "");
    }
    static jQueryInterface(t, e) {
      return this.each(function () {
        const n = Hn.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === n[t]) throw new TypeError(`No method named "${t}"`);
          n[t](e);
        }
      });
    }
  }
  he.on(
    document,
    "click.bs.modal.data-api",
    '[data-bs-toggle="modal"]',
    function (t) {
      const e = It(this);
      ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
        he.one(e, Dn, (t) => {
          t.defaultPrevented ||
            he.one(e, Ln, () => {
              Ht(this) && this.focus();
            });
        });
      const n = Ee.findOne(".modal.show");
      n && Hn.getInstance(n).hide(), Hn.getOrCreateInstance(e).toggle(this);
    }
  ),
    ge(Hn),
    Ut(Hn);
  const Wn = "offcanvas",
    Rn = { backdrop: !0, keyboard: !0, scroll: !1 },
    $n = { backdrop: "boolean", keyboard: "boolean", scroll: "boolean" },
    Fn = "show",
    qn = ".offcanvas.show",
    zn = "hidden.bs.offcanvas";
  class Vn extends pe {
    constructor(t, e) {
      super(t),
        (this._config = this._getConfig(e)),
        (this._isShown = !1),
        (this._backdrop = this._initializeBackDrop()),
        (this._focustrap = this._initializeFocusTrap()),
        this._addEventListeners();
    }
    static get NAME() {
      return Wn;
    }
    static get Default() {
      return Rn;
    }
    toggle(t) {
      return this._isShown ? this.hide() : this.show(t);
    }
    show(t) {
      this._isShown ||
        he.trigger(this._element, "show.bs.offcanvas", { relatedTarget: t })
          .defaultPrevented ||
        ((this._isShown = !0),
        (this._element.style.visibility = "visible"),
        this._backdrop.show(),
        this._config.scroll || new pn().hide(),
        this._element.removeAttribute("aria-hidden"),
        this._element.setAttribute("aria-modal", !0),
        this._element.setAttribute("role", "dialog"),
        this._element.classList.add(Fn),
        this._queueCallback(
          () => {
            this._config.scroll || this._focustrap.activate(),
              he.trigger(this._element, "shown.bs.offcanvas", {
                relatedTarget: t,
              });
          },
          this._element,
          !0
        ));
    }
    hide() {
      this._isShown &&
        (he.trigger(this._element, "hide.bs.offcanvas").defaultPrevented ||
          (this._focustrap.deactivate(),
          this._element.blur(),
          (this._isShown = !1),
          this._element.classList.remove(Fn),
          this._backdrop.hide(),
          this._queueCallback(
            () => {
              this._element.setAttribute("aria-hidden", !0),
                this._element.removeAttribute("aria-modal"),
                this._element.removeAttribute("role"),
                (this._element.style.visibility = "hidden"),
                this._config.scroll || new pn().reset(),
                he.trigger(this._element, zn);
            },
            this._element,
            !0
          )));
    }
    dispose() {
      this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
    }
    _getConfig(t) {
      return (
        (t = {
          ...Rn,
          ...we.getDataAttributes(this._element),
          ...("object" == typeof t ? t : {}),
        }),
        Bt(Wn, t, $n),
        t
      );
    }
    _initializeBackDrop() {
      return new bn({
        className: "offcanvas-backdrop",
        isVisible: this._config.backdrop,
        isAnimated: !0,
        rootElement: this._element.parentNode,
        clickCallback: () => this.hide(),
      });
    }
    _initializeFocusTrap() {
      return new On({ trapElement: this._element });
    }
    _addEventListeners() {
      he.on(this._element, "keydown.dismiss.bs.offcanvas", (t) => {
        this._config.keyboard && "Escape" === t.key && this.hide();
      });
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = Vn.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
            throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  }
  he.on(
    document,
    "click.bs.offcanvas.data-api",
    '[data-bs-toggle="offcanvas"]',
    function (t) {
      const e = It(this);
      if (
        (["A", "AREA"].includes(this.tagName) && t.preventDefault(), Wt(this))
      )
        return;
      he.one(e, zn, () => {
        Ht(this) && this.focus();
      });
      const n = Ee.findOne(qn);
      n && n !== e && Vn.getInstance(n).hide(),
        Vn.getOrCreateInstance(e).toggle(this);
    }
  ),
    he.on(window, "load.bs.offcanvas.data-api", () =>
      Ee.find(qn).forEach((t) => Vn.getOrCreateInstance(t).show())
    ),
    ge(Vn),
    Ut(Vn);
  const Un = new Set([
      "background",
      "cite",
      "href",
      "itemtype",
      "longdesc",
      "poster",
      "src",
      "xlink:href",
    ]),
    Xn = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
    Yn =
      /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
    Kn = (t, e) => {
      const n = t.nodeName.toLowerCase();
      if (e.includes(n))
        return (
          !Un.has(n) || Boolean(Xn.test(t.nodeValue) || Yn.test(t.nodeValue))
        );
      const i = e.filter((t) => t instanceof RegExp);
      for (let t = 0, e = i.length; t < e; t++) if (i[t].test(n)) return !0;
      return !1;
    };
  function Qn(t, e, n) {
    if (!t.length) return t;
    if (n && "function" == typeof n) return n(t);
    const i = new window.DOMParser().parseFromString(t, "text/html"),
      s = [].concat(...i.body.querySelectorAll("*"));
    for (let t = 0, n = s.length; t < n; t++) {
      const n = s[t],
        i = n.nodeName.toLowerCase();
      if (!Object.keys(e).includes(i)) {
        n.remove();
        continue;
      }
      const r = [].concat(...n.attributes),
        o = [].concat(e["*"] || [], e[i] || []);
      r.forEach((t) => {
        Kn(t, o) || n.removeAttribute(t.nodeName);
      });
    }
    return i.body.innerHTML;
  }
  const Gn = "tooltip",
    Zn = new Set(["sanitize", "allowList", "sanitizeFn"]),
    Jn = {
      animation: "boolean",
      template: "string",
      title: "(string|element|function)",
      trigger: "string",
      delay: "(number|object)",
      html: "boolean",
      selector: "(string|boolean)",
      placement: "(string|function)",
      offset: "(array|string|function)",
      container: "(string|element|boolean)",
      fallbackPlacements: "array",
      boundary: "(string|element)",
      customClass: "(string|function)",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      allowList: "object",
      popperConfig: "(null|object|function)",
    },
    ti = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: Vt() ? "left" : "right",
      BOTTOM: "bottom",
      LEFT: Vt() ? "right" : "left",
    },
    ei = {
      animation: !0,
      template:
        '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: "hover focus",
      title: "",
      delay: 0,
      html: !1,
      selector: !1,
      placement: "top",
      offset: [0, 0],
      container: !1,
      fallbackPlacements: ["top", "right", "bottom", "left"],
      boundary: "clippingParents",
      customClass: "",
      sanitize: !0,
      sanitizeFn: null,
      allowList: {
        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "srcset", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: [],
      },
      popperConfig: null,
    },
    ni = {
      HIDE: "hide.bs.tooltip",
      HIDDEN: "hidden.bs.tooltip",
      SHOW: "show.bs.tooltip",
      SHOWN: "shown.bs.tooltip",
      INSERTED: "inserted.bs.tooltip",
      CLICK: "click.bs.tooltip",
      FOCUSIN: "focusin.bs.tooltip",
      FOCUSOUT: "focusout.bs.tooltip",
      MOUSEENTER: "mouseenter.bs.tooltip",
      MOUSELEAVE: "mouseleave.bs.tooltip",
    },
    ii = "fade",
    si = "show",
    ri = "show",
    oi = "out",
    ai = ".tooltip-inner",
    li = ".modal",
    ci = "hide.bs.modal",
    ui = "hover",
    hi = "focus";
  class di extends pe {
    constructor(t, n) {
      if (void 0 === e)
        throw new TypeError(
          "Bootstrap's tooltips require Popper (https://popper.js.org)"
        );
      super(t),
        (this._isEnabled = !0),
        (this._timeout = 0),
        (this._hoverState = ""),
        (this._activeTrigger = {}),
        (this._popper = null),
        (this._config = this._getConfig(n)),
        (this.tip = null),
        this._setListeners();
    }
    static get Default() {
      return ei;
    }
    static get NAME() {
      return Gn;
    }
    static get Event() {
      return ni;
    }
    static get DefaultType() {
      return Jn;
    }
    enable() {
      this._isEnabled = !0;
    }
    disable() {
      this._isEnabled = !1;
    }
    toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }
    toggle(t) {
      if (this._isEnabled)
        if (t) {
          const e = this._initializeOnDelegatedTarget(t);
          (e._activeTrigger.click = !e._activeTrigger.click),
            e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e);
        } else {
          if (this.getTipElement().classList.contains(si))
            return void this._leave(null, this);
          this._enter(null, this);
        }
    }
    dispose() {
      clearTimeout(this._timeout),
        he.off(this._element.closest(li), ci, this._hideModalHandler),
        this.tip && this.tip.remove(),
        this._disposePopper(),
        super.dispose();
    }
    show() {
      if ("none" === this._element.style.display)
        throw new Error("Please use show on visible elements");
      if (!this.isWithContent() || !this._isEnabled) return;
      const t = he.trigger(this._element, this.constructor.Event.SHOW),
        e = Rt(this._element),
        n =
          null === e
            ? this._element.ownerDocument.documentElement.contains(
                this._element
              )
            : e.contains(this._element);
      if (t.defaultPrevented || !n) return;
      "tooltip" === this.constructor.NAME &&
        this.tip &&
        this.getTitle() !== this.tip.querySelector(ai).innerHTML &&
        (this._disposePopper(), this.tip.remove(), (this.tip = null));
      const i = this.getTipElement(),
        s = ((t) => {
          do {
            t += Math.floor(1e6 * Math.random());
          } while (document.getElementById(t));
          return t;
        })(this.constructor.NAME);
      i.setAttribute("id", s),
        this._element.setAttribute("aria-describedby", s),
        this._config.animation && i.classList.add(ii);
      const r =
          "function" == typeof this._config.placement
            ? this._config.placement.call(this, i, this._element)
            : this._config.placement,
        o = this._getAttachment(r);
      this._addAttachmentClass(o);
      const { container: a } = this._config;
      fe.set(i, this.constructor.DATA_KEY, this),
        this._element.ownerDocument.documentElement.contains(this.tip) ||
          (a.append(i),
          he.trigger(this._element, this.constructor.Event.INSERTED)),
        this._popper
          ? this._popper.update()
          : (this._popper = kt(this._element, i, this._getPopperConfig(o))),
        i.classList.add(si);
      const l = this._resolvePossibleFunction(this._config.customClass);
      l && i.classList.add(...l.split(" ")),
        "ontouchstart" in document.documentElement &&
          [].concat(...document.body.children).forEach((t) => {
            he.on(t, "mouseover", $t);
          });
      const c = this.tip.classList.contains(ii);
      this._queueCallback(
        () => {
          const t = this._hoverState;
          (this._hoverState = null),
            he.trigger(this._element, this.constructor.Event.SHOWN),
            t === oi && this._leave(null, this);
        },
        this.tip,
        c
      );
    }
    hide() {
      if (!this._popper) return;
      const t = this.getTipElement();
      if (
        he.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented
      )
        return;
      t.classList.remove(si),
        "ontouchstart" in document.documentElement &&
          []
            .concat(...document.body.children)
            .forEach((t) => he.off(t, "mouseover", $t)),
        (this._activeTrigger.click = !1),
        (this._activeTrigger.focus = !1),
        (this._activeTrigger.hover = !1);
      const e = this.tip.classList.contains(ii);
      this._queueCallback(
        () => {
          this._isWithActiveTrigger() ||
            (this._hoverState !== ri && t.remove(),
            this._cleanTipClass(),
            this._element.removeAttribute("aria-describedby"),
            he.trigger(this._element, this.constructor.Event.HIDDEN),
            this._disposePopper());
        },
        this.tip,
        e
      ),
        (this._hoverState = "");
    }
    update() {
      null !== this._popper && this._popper.update();
    }
    isWithContent() {
      return Boolean(this.getTitle());
    }
    getTipElement() {
      if (this.tip) return this.tip;
      const t = document.createElement("div");
      t.innerHTML = this._config.template;
      const e = t.children[0];
      return (
        this.setContent(e), e.classList.remove(ii, si), (this.tip = e), this.tip
      );
    }
    setContent(t) {
      this._sanitizeAndSetContent(t, this.getTitle(), ai);
    }
    _sanitizeAndSetContent(t, e, n) {
      const i = Ee.findOne(n, t);
      e || !i ? this.setElementContent(i, e) : i.remove();
    }
    setElementContent(t, e) {
      if (null !== t)
        return Pt(e)
          ? ((e = jt(e)),
            void (this._config.html
              ? e.parentNode !== t && ((t.innerHTML = ""), t.append(e))
              : (t.textContent = e.textContent)))
          : void (this._config.html
              ? (this._config.sanitize &&
                  (e = Qn(e, this._config.allowList, this._config.sanitizeFn)),
                (t.innerHTML = e))
              : (t.textContent = e));
    }
    getTitle() {
      const t =
        this._element.getAttribute("data-bs-original-title") ||
        this._config.title;
      return this._resolvePossibleFunction(t);
    }
    updateAttachment(t) {
      return "right" === t ? "end" : "left" === t ? "start" : t;
    }
    _initializeOnDelegatedTarget(t, e) {
      return (
        e ||
        this.constructor.getOrCreateInstance(
          t.delegateTarget,
          this._getDelegateConfig()
        )
      );
    }
    _getOffset() {
      const { offset: t } = this._config;
      return "string" == typeof t
        ? t.split(",").map((t) => Number.parseInt(t, 10))
        : "function" == typeof t
        ? (e) => t(e, this._element)
        : t;
    }
    _resolvePossibleFunction(t) {
      return "function" == typeof t ? t.call(this._element) : t;
    }
    _getPopperConfig(t) {
      const e = {
        placement: t,
        modifiers: [
          {
            name: "flip",
            options: { fallbackPlacements: this._config.fallbackPlacements },
          },
          { name: "offset", options: { offset: this._getOffset() } },
          {
            name: "preventOverflow",
            options: { boundary: this._config.boundary },
          },
          {
            name: "arrow",
            options: { element: `.${this.constructor.NAME}-arrow` },
          },
          {
            name: "onChange",
            enabled: !0,
            phase: "afterWrite",
            fn: (t) => this._handlePopperPlacementChange(t),
          },
        ],
        onFirstUpdate: (t) => {
          t.options.placement !== t.placement &&
            this._handlePopperPlacementChange(t);
        },
      };
      return {
        ...e,
        ...("function" == typeof this._config.popperConfig
          ? this._config.popperConfig(e)
          : this._config.popperConfig),
      };
    }
    _addAttachmentClass(t) {
      this.getTipElement().classList.add(
        `${this._getBasicClassPrefix()}-${this.updateAttachment(t)}`
      );
    }
    _getAttachment(t) {
      return ti[t.toUpperCase()];
    }
    _setListeners() {
      this._config.trigger.split(" ").forEach((t) => {
        if ("click" === t)
          he.on(
            this._element,
            this.constructor.Event.CLICK,
            this._config.selector,
            (t) => this.toggle(t)
          );
        else if ("manual" !== t) {
          const e =
              t === ui
                ? this.constructor.Event.MOUSEENTER
                : this.constructor.Event.FOCUSIN,
            n =
              t === ui
                ? this.constructor.Event.MOUSELEAVE
                : this.constructor.Event.FOCUSOUT;
          he.on(this._element, e, this._config.selector, (t) => this._enter(t)),
            he.on(this._element, n, this._config.selector, (t) =>
              this._leave(t)
            );
        }
      }),
        (this._hideModalHandler = () => {
          this._element && this.hide();
        }),
        he.on(this._element.closest(li), ci, this._hideModalHandler),
        this._config.selector
          ? (this._config = {
              ...this._config,
              trigger: "manual",
              selector: "",
            })
          : this._fixTitle();
    }
    _fixTitle() {
      const t = this._element.getAttribute("title"),
        e = typeof this._element.getAttribute("data-bs-original-title");
      (t || "string" !== e) &&
        (this._element.setAttribute("data-bs-original-title", t || ""),
        !t ||
          this._element.getAttribute("aria-label") ||
          this._element.textContent ||
          this._element.setAttribute("aria-label", t),
        this._element.setAttribute("title", ""));
    }
    _enter(t, e) {
      (e = this._initializeOnDelegatedTarget(t, e)),
        t && (e._activeTrigger["focusin" === t.type ? hi : ui] = !0),
        e.getTipElement().classList.contains(si) || e._hoverState === ri
          ? (e._hoverState = ri)
          : (clearTimeout(e._timeout),
            (e._hoverState = ri),
            e._config.delay && e._config.delay.show
              ? (e._timeout = setTimeout(() => {
                  e._hoverState === ri && e.show();
                }, e._config.delay.show))
              : e.show());
    }
    _leave(t, e) {
      (e = this._initializeOnDelegatedTarget(t, e)),
        t &&
          (e._activeTrigger["focusout" === t.type ? hi : ui] =
            e._element.contains(t.relatedTarget)),
        e._isWithActiveTrigger() ||
          (clearTimeout(e._timeout),
          (e._hoverState = oi),
          e._config.delay && e._config.delay.hide
            ? (e._timeout = setTimeout(() => {
                e._hoverState === oi && e.hide();
              }, e._config.delay.hide))
            : e.hide());
    }
    _isWithActiveTrigger() {
      for (const t in this._activeTrigger)
        if (this._activeTrigger[t]) return !0;
      return !1;
    }
    _getConfig(t) {
      const e = we.getDataAttributes(this._element);
      return (
        Object.keys(e).forEach((t) => {
          Zn.has(t) && delete e[t];
        }),
        ((t = {
          ...this.constructor.Default,
          ...e,
          ...("object" == typeof t && t ? t : {}),
        }).container = !1 === t.container ? document.body : jt(t.container)),
        "number" == typeof t.delay &&
          (t.delay = { show: t.delay, hide: t.delay }),
        "number" == typeof t.title && (t.title = t.title.toString()),
        "number" == typeof t.content && (t.content = t.content.toString()),
        Bt(Gn, t, this.constructor.DefaultType),
        t.sanitize && (t.template = Qn(t.template, t.allowList, t.sanitizeFn)),
        t
      );
    }
    _getDelegateConfig() {
      const t = {};
      for (const e in this._config)
        this.constructor.Default[e] !== this._config[e] &&
          (t[e] = this._config[e]);
      return t;
    }
    _cleanTipClass() {
      const t = this.getTipElement(),
        e = new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`, "g"),
        n = t.getAttribute("class").match(e);
      null !== n &&
        n.length > 0 &&
        n.map((t) => t.trim()).forEach((e) => t.classList.remove(e));
    }
    _getBasicClassPrefix() {
      return "bs-tooltip";
    }
    _handlePopperPlacementChange(t) {
      const { state: e } = t;
      e &&
        ((this.tip = e.elements.popper),
        this._cleanTipClass(),
        this._addAttachmentClass(this._getAttachment(e.placement)));
    }
    _disposePopper() {
      this._popper && (this._popper.destroy(), (this._popper = null));
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = di.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  Ut(di);
  const fi = {
      ...di.Default,
      placement: "right",
      offset: [0, 8],
      trigger: "click",
      content: "",
      template:
        '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    },
    pi = { ...di.DefaultType, content: "(string|element|function)" },
    gi = {
      HIDE: "hide.bs.popover",
      HIDDEN: "hidden.bs.popover",
      SHOW: "show.bs.popover",
      SHOWN: "shown.bs.popover",
      INSERTED: "inserted.bs.popover",
      CLICK: "click.bs.popover",
      FOCUSIN: "focusin.bs.popover",
      FOCUSOUT: "focusout.bs.popover",
      MOUSEENTER: "mouseenter.bs.popover",
      MOUSELEAVE: "mouseleave.bs.popover",
    };
  class mi extends di {
    static get Default() {
      return fi;
    }
    static get NAME() {
      return "popover";
    }
    static get Event() {
      return gi;
    }
    static get DefaultType() {
      return pi;
    }
    isWithContent() {
      return this.getTitle() || this._getContent();
    }
    setContent(t) {
      this._sanitizeAndSetContent(t, this.getTitle(), ".popover-header"),
        this._sanitizeAndSetContent(t, this._getContent(), ".popover-body");
    }
    _getContent() {
      return this._resolvePossibleFunction(this._config.content);
    }
    _getBasicClassPrefix() {
      return "bs-popover";
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = mi.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  Ut(mi);
  const _i = "scrollspy",
    vi = { offset: 10, method: "auto", target: "" },
    bi = { offset: "number", method: "string", target: "(string|element)" },
    yi = "active",
    wi = ".nav-link, .list-group-item, .dropdown-item",
    Ei = "position";
  class Ai extends pe {
    constructor(t, e) {
      super(t),
        (this._scrollElement =
          "BODY" === this._element.tagName ? window : this._element),
        (this._config = this._getConfig(e)),
        (this._offsets = []),
        (this._targets = []),
        (this._activeTarget = null),
        (this._scrollHeight = 0),
        he.on(this._scrollElement, "scroll.bs.scrollspy", () =>
          this._process()
        ),
        this.refresh(),
        this._process();
    }
    static get Default() {
      return vi;
    }
    static get NAME() {
      return _i;
    }
    refresh() {
      const t =
          this._scrollElement === this._scrollElement.window ? "offset" : Ei,
        e = "auto" === this._config.method ? t : this._config.method,
        n = e === Ei ? this._getScrollTop() : 0;
      (this._offsets = []),
        (this._targets = []),
        (this._scrollHeight = this._getScrollHeight()),
        Ee.find(wi, this._config.target)
          .map((t) => {
            const i = Nt(t),
              s = i ? Ee.findOne(i) : null;
            if (s) {
              const t = s.getBoundingClientRect();
              if (t.width || t.height) return [we[e](s).top + n, i];
            }
            return null;
          })
          .filter((t) => t)
          .sort((t, e) => t[0] - e[0])
          .forEach((t) => {
            this._offsets.push(t[0]), this._targets.push(t[1]);
          });
    }
    dispose() {
      he.off(this._scrollElement, ".bs.scrollspy"), super.dispose();
    }
    _getConfig(t) {
      return (
        ((t = {
          ...vi,
          ...we.getDataAttributes(this._element),
          ...("object" == typeof t && t ? t : {}),
        }).target = jt(t.target) || document.documentElement),
        Bt(_i, t, bi),
        t
      );
    }
    _getScrollTop() {
      return this._scrollElement === window
        ? this._scrollElement.pageYOffset
        : this._scrollElement.scrollTop;
    }
    _getScrollHeight() {
      return (
        this._scrollElement.scrollHeight ||
        Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight
        )
      );
    }
    _getOffsetHeight() {
      return this._scrollElement === window
        ? window.innerHeight
        : this._scrollElement.getBoundingClientRect().height;
    }
    _process() {
      const t = this._getScrollTop() + this._config.offset,
        e = this._getScrollHeight(),
        n = this._config.offset + e - this._getOffsetHeight();
      if ((this._scrollHeight !== e && this.refresh(), t >= n)) {
        const t = this._targets[this._targets.length - 1];
        this._activeTarget !== t && this._activate(t);
      } else {
        if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0)
          return (this._activeTarget = null), void this._clear();
        for (let e = this._offsets.length; e--; )
          this._activeTarget !== this._targets[e] &&
            t >= this._offsets[e] &&
            (void 0 === this._offsets[e + 1] || t < this._offsets[e + 1]) &&
            this._activate(this._targets[e]);
      }
    }
    _activate(t) {
      (this._activeTarget = t), this._clear();
      const e = wi
          .split(",")
          .map((e) => `${e}[data-bs-target="${t}"],${e}[href="${t}"]`),
        n = Ee.findOne(e.join(","), this._config.target);
      n.classList.add(yi),
        n.classList.contains("dropdown-item")
          ? Ee.findOne(
              ".dropdown-toggle",
              n.closest(".dropdown")
            ).classList.add(yi)
          : Ee.parents(n, ".nav, .list-group").forEach((t) => {
              Ee.prev(t, ".nav-link, .list-group-item").forEach((t) =>
                t.classList.add(yi)
              ),
                Ee.prev(t, ".nav-item").forEach((t) => {
                  Ee.children(t, ".nav-link").forEach((t) =>
                    t.classList.add(yi)
                  );
                });
            }),
        he.trigger(this._scrollElement, "activate.bs.scrollspy", {
          relatedTarget: t,
        });
    }
    _clear() {
      Ee.find(wi, this._config.target)
        .filter((t) => t.classList.contains(yi))
        .forEach((t) => t.classList.remove(yi));
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = Ai.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  he.on(window, "load.bs.scrollspy.data-api", () => {
    Ee.find('[data-bs-spy="scroll"]').forEach((t) => new Ai(t));
  }),
    Ut(Ai);
  const Oi = "active",
    Ti = "fade",
    xi = "show",
    Ci = ".active",
    ki = ":scope > li > .active";
  class Li extends pe {
    static get NAME() {
      return "tab";
    }
    show() {
      if (
        this._element.parentNode &&
        this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
        this._element.classList.contains(Oi)
      )
        return;
      let t;
      const e = It(this._element),
        n = this._element.closest(".nav, .list-group");
      if (n) {
        const e = "UL" === n.nodeName || "OL" === n.nodeName ? ki : Ci;
        (t = Ee.find(e, n)), (t = t[t.length - 1]);
      }
      const i = t
        ? he.trigger(t, "hide.bs.tab", { relatedTarget: this._element })
        : null;
      if (
        he.trigger(this._element, "show.bs.tab", { relatedTarget: t })
          .defaultPrevented ||
        (null !== i && i.defaultPrevented)
      )
        return;
      this._activate(this._element, n);
      const s = () => {
        he.trigger(t, "hidden.bs.tab", { relatedTarget: this._element }),
          he.trigger(this._element, "shown.bs.tab", { relatedTarget: t });
      };
      e ? this._activate(e, e.parentNode, s) : s();
    }
    _activate(t, e, n) {
      const i = (
          !e || ("UL" !== e.nodeName && "OL" !== e.nodeName)
            ? Ee.children(e, Ci)
            : Ee.find(ki, e)
        )[0],
        s = n && i && i.classList.contains(Ti),
        r = () => this._transitionComplete(t, i, n);
      i && s ? (i.classList.remove(xi), this._queueCallback(r, t, !0)) : r();
    }
    _transitionComplete(t, e, n) {
      if (e) {
        e.classList.remove(Oi);
        const t = Ee.findOne(":scope > .dropdown-menu .active", e.parentNode);
        t && t.classList.remove(Oi),
          "tab" === e.getAttribute("role") &&
            e.setAttribute("aria-selected", !1);
      }
      t.classList.add(Oi),
        "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0),
        Ft(t),
        t.classList.contains(Ti) && t.classList.add(xi);
      let i = t.parentNode;
      if (
        (i && "LI" === i.nodeName && (i = i.parentNode),
        i && i.classList.contains("dropdown-menu"))
      ) {
        const e = t.closest(".dropdown");
        e && Ee.find(".dropdown-toggle", e).forEach((t) => t.classList.add(Oi)),
          t.setAttribute("aria-expanded", !0);
      }
      n && n();
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = Li.getOrCreateInstance(this);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  he.on(
    document,
    "click.bs.tab.data-api",
    '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
    function (t) {
      ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
        Wt(this) || Li.getOrCreateInstance(this).show();
    }
  ),
    Ut(Li);
  const Di = "toast",
    Si = "hide",
    Ni = "show",
    Ii = "showing",
    Mi = { animation: "boolean", autohide: "boolean", delay: "number" },
    Pi = { animation: !0, autohide: !0, delay: 5e3 };
  class ji extends pe {
    constructor(t, e) {
      super(t),
        (this._config = this._getConfig(e)),
        (this._timeout = null),
        (this._hasMouseInteraction = !1),
        (this._hasKeyboardInteraction = !1),
        this._setListeners();
    }
    static get DefaultType() {
      return Mi;
    }
    static get Default() {
      return Pi;
    }
    static get NAME() {
      return Di;
    }
    show() {
      he.trigger(this._element, "show.bs.toast").defaultPrevented ||
        (this._clearTimeout(),
        this._config.animation && this._element.classList.add("fade"),
        this._element.classList.remove(Si),
        Ft(this._element),
        this._element.classList.add(Ni),
        this._element.classList.add(Ii),
        this._queueCallback(
          () => {
            this._element.classList.remove(Ii),
              he.trigger(this._element, "shown.bs.toast"),
              this._maybeScheduleHide();
          },
          this._element,
          this._config.animation
        ));
    }
    hide() {
      this._element.classList.contains(Ni) &&
        (he.trigger(this._element, "hide.bs.toast").defaultPrevented ||
          (this._element.classList.add(Ii),
          this._queueCallback(
            () => {
              this._element.classList.add(Si),
                this._element.classList.remove(Ii),
                this._element.classList.remove(Ni),
                he.trigger(this._element, "hidden.bs.toast");
            },
            this._element,
            this._config.animation
          )));
    }
    dispose() {
      this._clearTimeout(),
        this._element.classList.contains(Ni) &&
          this._element.classList.remove(Ni),
        super.dispose();
    }
    _getConfig(t) {
      return (
        (t = {
          ...Pi,
          ...we.getDataAttributes(this._element),
          ...("object" == typeof t && t ? t : {}),
        }),
        Bt(Di, t, this.constructor.DefaultType),
        t
      );
    }
    _maybeScheduleHide() {
      this._config.autohide &&
        (this._hasMouseInteraction ||
          this._hasKeyboardInteraction ||
          (this._timeout = setTimeout(() => {
            this.hide();
          }, this._config.delay)));
    }
    _onInteraction(t, e) {
      switch (t.type) {
        case "mouseover":
        case "mouseout":
          this._hasMouseInteraction = e;
          break;
        case "focusin":
        case "focusout":
          this._hasKeyboardInteraction = e;
      }
      if (e) return void this._clearTimeout();
      const n = t.relatedTarget;
      this._element === n ||
        this._element.contains(n) ||
        this._maybeScheduleHide();
    }
    _setListeners() {
      he.on(this._element, "mouseover.bs.toast", (t) =>
        this._onInteraction(t, !0)
      ),
        he.on(this._element, "mouseout.bs.toast", (t) =>
          this._onInteraction(t, !1)
        ),
        he.on(this._element, "focusin.bs.toast", (t) =>
          this._onInteraction(t, !0)
        ),
        he.on(this._element, "focusout.bs.toast", (t) =>
          this._onInteraction(t, !1)
        );
    }
    _clearTimeout() {
      clearTimeout(this._timeout), (this._timeout = null);
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = ji.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  }
  ge(ji), Ut(ji);
  var Bi = {
      update: null,
      begin: null,
      loopBegin: null,
      changeBegin: null,
      change: null,
      changeComplete: null,
      loopComplete: null,
      complete: null,
      loop: 1,
      direction: "normal",
      autoplay: !0,
      timelineOffset: 0,
    },
    Hi = {
      duration: 1e3,
      delay: 0,
      endDelay: 0,
      easing: "easeOutElastic(1, .5)",
      round: 0,
    },
    Wi = [
      "translateX",
      "translateY",
      "translateZ",
      "rotate",
      "rotateX",
      "rotateY",
      "rotateZ",
      "scale",
      "scaleX",
      "scaleY",
      "scaleZ",
      "skew",
      "skewX",
      "skewY",
      "perspective",
      "matrix",
      "matrix3d",
    ],
    Ri = { CSS: {}, springs: {} };
  function $i(t, e, n) {
    return Math.min(Math.max(t, e), n);
  }
  function Fi(t, e) {
    return t.indexOf(e) > -1;
  }
  function qi(t, e) {
    return t.apply(null, e);
  }
  var zi = {
    arr: function (t) {
      return Array.isArray(t);
    },
    obj: function (t) {
      return Fi(Object.prototype.toString.call(t), "Object");
    },
    pth: function (t) {
      return zi.obj(t) && t.hasOwnProperty("totalLength");
    },
    svg: function (t) {
      return t instanceof SVGElement;
    },
    inp: function (t) {
      return t instanceof HTMLInputElement;
    },
    dom: function (t) {
      return t.nodeType || zi.svg(t);
    },
    str: function (t) {
      return "string" == typeof t;
    },
    fnc: function (t) {
      return "function" == typeof t;
    },
    und: function (t) {
      return void 0 === t;
    },
    nil: function (t) {
      return zi.und(t) || null === t;
    },
    hex: function (t) {
      return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t);
    },
    rgb: function (t) {
      return /^rgb/.test(t);
    },
    hsl: function (t) {
      return /^hsl/.test(t);
    },
    col: function (t) {
      return zi.hex(t) || zi.rgb(t) || zi.hsl(t);
    },
    key: function (t) {
      return (
        !Bi.hasOwnProperty(t) &&
        !Hi.hasOwnProperty(t) &&
        "targets" !== t &&
        "keyframes" !== t
      );
    },
  };
  function Vi(t) {
    var e = /\(([^)]+)\)/.exec(t);
    return e
      ? e[1].split(",").map(function (t) {
          return parseFloat(t);
        })
      : [];
  }
  function Ui(t, e) {
    var n = Vi(t),
      i = $i(zi.und(n[0]) ? 1 : n[0], 0.1, 100),
      s = $i(zi.und(n[1]) ? 100 : n[1], 0.1, 100),
      r = $i(zi.und(n[2]) ? 10 : n[2], 0.1, 100),
      o = $i(zi.und(n[3]) ? 0 : n[3], 0.1, 100),
      a = Math.sqrt(s / i),
      l = r / (2 * Math.sqrt(s * i)),
      c = l < 1 ? a * Math.sqrt(1 - l * l) : 0,
      u = l < 1 ? (l * a - o) / c : -o + a;
    function h(t) {
      var n = e ? (e * t) / 1e3 : t;
      return (
        (n =
          l < 1
            ? Math.exp(-n * l * a) * (1 * Math.cos(c * n) + u * Math.sin(c * n))
            : (1 + u * n) * Math.exp(-n * a)),
        0 === t || 1 === t ? t : 1 - n
      );
    }
    return e
      ? h
      : function () {
          var e = Ri.springs[t];
          if (e) return e;
          for (var n = 1 / 6, i = 0, s = 0; ; )
            if (1 === h((i += n))) {
              if (++s >= 16) break;
            } else s = 0;
          var r = i * n * 1e3;
          return (Ri.springs[t] = r), r;
        };
  }
  function Xi(t) {
    return (
      void 0 === t && (t = 10),
      function (e) {
        return Math.ceil($i(e, 1e-6, 1) * t) * (1 / t);
      }
    );
  }
  var Yi,
    Ki,
    Qi = (function () {
      var t = 0.1;
      function e(t, e) {
        return 1 - 3 * e + 3 * t;
      }
      function n(t, e) {
        return 3 * e - 6 * t;
      }
      function i(t) {
        return 3 * t;
      }
      function s(t, s, r) {
        return ((e(s, r) * t + n(s, r)) * t + i(s)) * t;
      }
      function r(t, s, r) {
        return 3 * e(s, r) * t * t + 2 * n(s, r) * t + i(s);
      }
      return function (e, n, i, o) {
        if (0 <= e && e <= 1 && 0 <= i && i <= 1) {
          var a = new Float32Array(11);
          if (e !== n || i !== o)
            for (var l = 0; l < 11; ++l) a[l] = s(l * t, e, i);
          return function (l) {
            return (e === n && i === o) || 0 === l || 1 === l
              ? l
              : s(
                  (function (n) {
                    for (var o = 0, l = 1; 10 !== l && a[l] <= n; ++l) o += t;
                    --l;
                    var c = o + ((n - a[l]) / (a[l + 1] - a[l])) * t,
                      u = r(c, e, i);
                    return u >= 0.001
                      ? (function (t, e, n, i) {
                          for (var o = 0; o < 4; ++o) {
                            var a = r(e, n, i);
                            if (0 === a) return e;
                            e -= (s(e, n, i) - t) / a;
                          }
                          return e;
                        })(n, c, e, i)
                      : 0 === u
                      ? c
                      : (function (t, e, n, i, r) {
                          var o,
                            a,
                            l = 0;
                          do {
                            (o = s((a = e + (n - e) / 2), i, r) - t) > 0
                              ? (n = a)
                              : (e = a);
                          } while (Math.abs(o) > 1e-7 && ++l < 10);
                          return a;
                        })(n, o, o + t, e, i);
                  })(l),
                  n,
                  o
                );
          };
        }
      };
    })(),
    Gi =
      ((Yi = {
        linear: function () {
          return function (t) {
            return t;
          };
        },
      }),
      (Ki = {
        Sine: function () {
          return function (t) {
            return 1 - Math.cos((t * Math.PI) / 2);
          };
        },
        Circ: function () {
          return function (t) {
            return 1 - Math.sqrt(1 - t * t);
          };
        },
        Back: function () {
          return function (t) {
            return t * t * (3 * t - 2);
          };
        },
        Bounce: function () {
          return function (t) {
            for (var e, n = 4; t < ((e = Math.pow(2, --n)) - 1) / 11; );
            return (
              1 / Math.pow(4, 3 - n) -
              7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
            );
          };
        },
        Elastic: function (t, e) {
          void 0 === t && (t = 1), void 0 === e && (e = 0.5);
          var n = $i(t, 1, 10),
            i = $i(e, 0.1, 2);
          return function (t) {
            return 0 === t || 1 === t
              ? t
              : -n *
                  Math.pow(2, 10 * (t - 1)) *
                  Math.sin(
                    ((t - 1 - (i / (2 * Math.PI)) * Math.asin(1 / n)) *
                      (2 * Math.PI)) /
                      i
                  );
          };
        },
      }),
      ["Quad", "Cubic", "Quart", "Quint", "Expo"].forEach(function (t, e) {
        Ki[t] = function () {
          return function (t) {
            return Math.pow(t, e + 2);
          };
        };
      }),
      Object.keys(Ki).forEach(function (t) {
        var e = Ki[t];
        (Yi["easeIn" + t] = e),
          (Yi["easeOut" + t] = function (t, n) {
            return function (i) {
              return 1 - e(t, n)(1 - i);
            };
          }),
          (Yi["easeInOut" + t] = function (t, n) {
            return function (i) {
              return i < 0.5 ? e(t, n)(2 * i) / 2 : 1 - e(t, n)(-2 * i + 2) / 2;
            };
          }),
          (Yi["easeOutIn" + t] = function (t, n) {
            return function (i) {
              return i < 0.5
                ? (1 - e(t, n)(1 - 2 * i)) / 2
                : (e(t, n)(2 * i - 1) + 1) / 2;
            };
          });
      }),
      Yi);
  function Zi(t, e) {
    if (zi.fnc(t)) return t;
    var n = t.split("(")[0],
      i = Gi[n],
      s = Vi(t);
    switch (n) {
      case "spring":
        return Ui(t, e);
      case "cubicBezier":
        return qi(Qi, s);
      case "steps":
        return qi(Xi, s);
      default:
        return qi(i, s);
    }
  }
  function Ji(t) {
    try {
      return document.querySelectorAll(t);
    } catch (t) {
      return;
    }
  }
  function ts(t, e) {
    for (
      var n = t.length,
        i = arguments.length >= 2 ? arguments[1] : void 0,
        s = [],
        r = 0;
      r < n;
      r++
    )
      if (r in t) {
        var o = t[r];
        e.call(i, o, r, t) && s.push(o);
      }
    return s;
  }
  function es(t) {
    return t.reduce(function (t, e) {
      return t.concat(zi.arr(e) ? es(e) : e);
    }, []);
  }
  function ns(t) {
    return zi.arr(t)
      ? t
      : (zi.str(t) && (t = Ji(t) || t),
        t instanceof NodeList || t instanceof HTMLCollection
          ? [].slice.call(t)
          : [t]);
  }
  function is(t, e) {
    return t.some(function (t) {
      return t === e;
    });
  }
  function ss(t) {
    var e = {};
    for (var n in t) e[n] = t[n];
    return e;
  }
  function rs(t, e) {
    var n = ss(t);
    for (var i in t) n[i] = e.hasOwnProperty(i) ? e[i] : t[i];
    return n;
  }
  function os(t, e) {
    var n = ss(t);
    for (var i in e) n[i] = zi.und(t[i]) ? e[i] : t[i];
    return n;
  }
  function as(t) {
    var e =
      /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(
        t
      );
    if (e) return e[1];
  }
  function ls(t, e) {
    return zi.fnc(t) ? t(e.target, e.id, e.total) : t;
  }
  function cs(t, e) {
    return t.getAttribute(e);
  }
  function us(t, e, n) {
    if (is([n, "deg", "rad", "turn"], as(e))) return e;
    var i = Ri.CSS[e + n];
    if (!zi.und(i)) return i;
    var s = document.createElement(t.tagName),
      r =
        t.parentNode && t.parentNode !== document
          ? t.parentNode
          : document.body;
    r.appendChild(s),
      (s.style.position = "absolute"),
      (s.style.width = 100 + n);
    var o = 100 / s.offsetWidth;
    r.removeChild(s);
    var a = o * parseFloat(e);
    return (Ri.CSS[e + n] = a), a;
  }
  function hs(t, e, n) {
    if (e in t.style) {
      var i = e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
        s = t.style[e] || getComputedStyle(t).getPropertyValue(i) || "0";
      return n ? us(t, s, n) : s;
    }
  }
  function ds(t, e) {
    return zi.dom(t) && !zi.inp(t) && (!zi.nil(cs(t, e)) || (zi.svg(t) && t[e]))
      ? "attribute"
      : zi.dom(t) && is(Wi, e)
      ? "transform"
      : zi.dom(t) && "transform" !== e && hs(t, e)
      ? "css"
      : null != t[e]
      ? "object"
      : void 0;
  }
  function fs(t) {
    if (zi.dom(t)) {
      for (
        var e,
          n = t.style.transform || "",
          i = /(\w+)\(([^)]*)\)/g,
          s = new Map();
        (e = i.exec(n));

      )
        s.set(e[1], e[2]);
      return s;
    }
  }
  function ps(t, e, n, i) {
    switch (ds(t, e)) {
      case "transform":
        return (function (t, e, n, i) {
          var s = Fi(e, "scale")
              ? 1
              : 0 +
                (function (t) {
                  return Fi(t, "translate") || "perspective" === t
                    ? "px"
                    : Fi(t, "rotate") || Fi(t, "skew")
                    ? "deg"
                    : void 0;
                })(e),
            r = fs(t).get(e) || s;
          return (
            n && (n.transforms.list.set(e, r), (n.transforms.last = e)),
            i ? us(t, r, i) : r
          );
        })(t, e, i, n);
      case "css":
        return hs(t, e, n);
      case "attribute":
        return cs(t, e);
      default:
        return t[e] || 0;
    }
  }
  function gs(t, e) {
    var n = /^(\*=|\+=|-=)/.exec(t);
    if (!n) return t;
    var i = as(t) || 0,
      s = parseFloat(e),
      r = parseFloat(t.replace(n[0], ""));
    switch (n[0][0]) {
      case "+":
        return s + r + i;
      case "-":
        return s - r + i;
      case "*":
        return s * r + i;
    }
  }
  function ms(t, e) {
    if (zi.col(t))
      return (function (t) {
        return zi.rgb(t)
          ? (n = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec((e = t)))
            ? "rgba(" + n[1] + ",1)"
            : e
          : zi.hex(t)
          ? (function (t) {
              var e = t.replace(
                  /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                  function (t, e, n, i) {
                    return e + e + n + n + i + i;
                  }
                ),
                n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
              return (
                "rgba(" +
                parseInt(n[1], 16) +
                "," +
                parseInt(n[2], 16) +
                "," +
                parseInt(n[3], 16) +
                ",1)"
              );
            })(t)
          : zi.hsl(t)
          ? (function (t) {
              var e,
                n,
                i,
                s =
                  /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t) ||
                  /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(
                    t
                  ),
                r = parseInt(s[1], 10) / 360,
                o = parseInt(s[2], 10) / 100,
                a = parseInt(s[3], 10) / 100,
                l = s[4] || 1;
              function c(t, e, n) {
                return (
                  n < 0 && (n += 1),
                  n > 1 && (n -= 1),
                  n < 1 / 6
                    ? t + 6 * (e - t) * n
                    : n < 0.5
                    ? e
                    : n < 2 / 3
                    ? t + (e - t) * (2 / 3 - n) * 6
                    : t
                );
              }
              if (0 == o) e = n = i = a;
              else {
                var u = a < 0.5 ? a * (1 + o) : a + o - a * o,
                  h = 2 * a - u;
                (e = c(h, u, r + 1 / 3)),
                  (n = c(h, u, r)),
                  (i = c(h, u, r - 1 / 3));
              }
              return (
                "rgba(" +
                255 * e +
                "," +
                255 * n +
                "," +
                255 * i +
                "," +
                l +
                ")"
              );
            })(t)
          : void 0;
        var e, n;
      })(t);
    if (/\s/g.test(t)) return t;
    var n = as(t),
      i = n ? t.substr(0, t.length - n.length) : t;
    return e ? i + e : i;
  }
  function _s(t, e) {
    return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
  }
  function vs(t) {
    for (var e, n = t.points, i = 0, s = 0; s < n.numberOfItems; s++) {
      var r = n.getItem(s);
      s > 0 && (i += _s(e, r)), (e = r);
    }
    return i;
  }
  function bs(t) {
    if (t.getTotalLength) return t.getTotalLength();
    switch (t.tagName.toLowerCase()) {
      case "circle":
        return (function (t) {
          return 2 * Math.PI * cs(t, "r");
        })(t);
      case "rect":
        return (function (t) {
          return 2 * cs(t, "width") + 2 * cs(t, "height");
        })(t);
      case "line":
        return (function (t) {
          return _s(
            { x: cs(t, "x1"), y: cs(t, "y1") },
            { x: cs(t, "x2"), y: cs(t, "y2") }
          );
        })(t);
      case "polyline":
        return vs(t);
      case "polygon":
        return (function (t) {
          var e = t.points;
          return vs(t) + _s(e.getItem(e.numberOfItems - 1), e.getItem(0));
        })(t);
    }
  }
  function ys(t, e) {
    var n = e || {},
      i =
        n.el ||
        (function (t) {
          for (var e = t.parentNode; zi.svg(e) && zi.svg(e.parentNode); )
            e = e.parentNode;
          return e;
        })(t),
      s = i.getBoundingClientRect(),
      r = cs(i, "viewBox"),
      o = s.width,
      a = s.height,
      l = n.viewBox || (r ? r.split(" ") : [0, 0, o, a]);
    return {
      el: i,
      viewBox: l,
      x: l[0] / 1,
      y: l[1] / 1,
      w: o,
      h: a,
      vW: l[2],
      vH: l[3],
    };
  }
  function ws(t, e, n) {
    function i(n) {
      void 0 === n && (n = 0);
      var i = e + n >= 1 ? e + n : 0;
      return t.el.getPointAtLength(i);
    }
    var s = ys(t.el, t.svg),
      r = i(),
      o = i(-1),
      a = i(1),
      l = n ? 1 : s.w / s.vW,
      c = n ? 1 : s.h / s.vH;
    switch (t.property) {
      case "x":
        return (r.x - s.x) * l;
      case "y":
        return (r.y - s.y) * c;
      case "angle":
        return (180 * Math.atan2(a.y - o.y, a.x - o.x)) / Math.PI;
    }
  }
  function Es(t, e) {
    var n = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,
      i = ms(zi.pth(t) ? t.totalLength : t, e) + "";
    return {
      original: i,
      numbers: i.match(n) ? i.match(n).map(Number) : [0],
      strings: zi.str(t) || e ? i.split(n) : [],
    };
  }
  function As(t) {
    return ts(t ? es(zi.arr(t) ? t.map(ns) : ns(t)) : [], function (t, e, n) {
      return n.indexOf(t) === e;
    });
  }
  function Os(t) {
    var e = As(t);
    return e.map(function (t, n) {
      return { target: t, id: n, total: e.length, transforms: { list: fs(t) } };
    });
  }
  function Ts(t, e) {
    var n = ss(e);
    if ((/^spring/.test(n.easing) && (n.duration = Ui(n.easing)), zi.arr(t))) {
      var i = t.length;
      2 !== i || zi.obj(t[0])
        ? zi.fnc(e.duration) || (n.duration = e.duration / i)
        : (t = { value: t });
    }
    var s = zi.arr(t) ? t : [t];
    return s
      .map(function (t, n) {
        var i = zi.obj(t) && !zi.pth(t) ? t : { value: t };
        return (
          zi.und(i.delay) && (i.delay = n ? 0 : e.delay),
          zi.und(i.endDelay) &&
            (i.endDelay = n === s.length - 1 ? e.endDelay : 0),
          i
        );
      })
      .map(function (t) {
        return os(t, n);
      });
  }
  var xs = {
    css: function (t, e, n) {
      return (t.style[e] = n);
    },
    attribute: function (t, e, n) {
      return t.setAttribute(e, n);
    },
    object: function (t, e, n) {
      return (t[e] = n);
    },
    transform: function (t, e, n, i, s) {
      if ((i.list.set(e, n), e === i.last || s)) {
        var r = "";
        i.list.forEach(function (t, e) {
          r += e + "(" + t + ") ";
        }),
          (t.style.transform = r);
      }
    },
  };
  function Cs(t, e) {
    Os(t).forEach(function (t) {
      for (var n in e) {
        var i = ls(e[n], t),
          s = t.target,
          r = as(i),
          o = ps(s, n, r, t),
          a = gs(ms(i, r || as(o)), o),
          l = ds(s, n);
        xs[l](s, n, a, t.transforms, !0);
      }
    });
  }
  function ks(t, e) {
    return ts(
      es(
        t.map(function (t) {
          return e.map(function (e) {
            return (function (t, e) {
              var n = ds(t.target, e.name);
              if (n) {
                var i = (function (t, e) {
                    var n;
                    return t.tweens.map(function (i) {
                      var s = (function (t, e) {
                          var n = {};
                          for (var i in t) {
                            var s = ls(t[i], e);
                            zi.arr(s) &&
                              1 ===
                                (s = s.map(function (t) {
                                  return ls(t, e);
                                })).length &&
                              (s = s[0]),
                              (n[i] = s);
                          }
                          return (
                            (n.duration = parseFloat(n.duration)),
                            (n.delay = parseFloat(n.delay)),
                            n
                          );
                        })(i, e),
                        r = s.value,
                        o = zi.arr(r) ? r[1] : r,
                        a = as(o),
                        l = ps(e.target, t.name, a, e),
                        c = n ? n.to.original : l,
                        u = zi.arr(r) ? r[0] : c,
                        h = as(u) || as(l),
                        d = a || h;
                      return (
                        zi.und(o) && (o = c),
                        (s.from = Es(u, d)),
                        (s.to = Es(gs(o, u), d)),
                        (s.start = n ? n.end : 0),
                        (s.end = s.start + s.delay + s.duration + s.endDelay),
                        (s.easing = Zi(s.easing, s.duration)),
                        (s.isPath = zi.pth(r)),
                        (s.isPathTargetInsideSVG =
                          s.isPath && zi.svg(e.target)),
                        (s.isColor = zi.col(s.from.original)),
                        s.isColor && (s.round = 1),
                        (n = s),
                        s
                      );
                    });
                  })(e, t),
                  s = i[i.length - 1];
                return {
                  type: n,
                  property: e.name,
                  animatable: t,
                  tweens: i,
                  duration: s.end,
                  delay: i[0].delay,
                  endDelay: s.endDelay,
                };
              }
            })(t, e);
          });
        })
      ),
      function (t) {
        return !zi.und(t);
      }
    );
  }
  function Ls(t, e) {
    var n = t.length,
      i = function (t) {
        return t.timelineOffset ? t.timelineOffset : 0;
      },
      s = {};
    return (
      (s.duration = n
        ? Math.max.apply(
            Math,
            t.map(function (t) {
              return i(t) + t.duration;
            })
          )
        : e.duration),
      (s.delay = n
        ? Math.min.apply(
            Math,
            t.map(function (t) {
              return i(t) + t.delay;
            })
          )
        : e.delay),
      (s.endDelay = n
        ? s.duration -
          Math.max.apply(
            Math,
            t.map(function (t) {
              return i(t) + t.duration - t.endDelay;
            })
          )
        : e.endDelay),
      s
    );
  }
  var Ds = 0,
    Ss = [],
    Ns = (function () {
      var t;
      function e(n) {
        for (var i = Ss.length, s = 0; s < i; ) {
          var r = Ss[s];
          r.paused ? (Ss.splice(s, 1), i--) : (r.tick(n), s++);
        }
        t = s > 0 ? requestAnimationFrame(e) : void 0;
      }
      return (
        "undefined" != typeof document &&
          document.addEventListener("visibilitychange", function () {
            Ms.suspendWhenDocumentHidden &&
              (Is()
                ? (t = cancelAnimationFrame(t))
                : (Ss.forEach(function (t) {
                    return t._onDocumentVisibility();
                  }),
                  Ns()));
          }),
        function () {
          t ||
            (Is() && Ms.suspendWhenDocumentHidden) ||
            !(Ss.length > 0) ||
            (t = requestAnimationFrame(e));
        }
      );
    })();
  function Is() {
    return !!document && document.hidden;
  }
  function Ms(t) {
    void 0 === t && (t = {});
    var e,
      n = 0,
      i = 0,
      s = 0,
      r = 0,
      o = null;
    function a(t) {
      var e =
        window.Promise &&
        new Promise(function (t) {
          return (o = t);
        });
      return (t.finished = e), e;
    }
    var l = (function (t) {
      var e = rs(Bi, t),
        n = rs(Hi, t),
        i = (function (t, e) {
          var n = [],
            i = e.keyframes;
          for (var s in (i &&
            (e = os(
              (function (t) {
                for (
                  var e = ts(
                      es(
                        t.map(function (t) {
                          return Object.keys(t);
                        })
                      ),
                      function (t) {
                        return zi.key(t);
                      }
                    ).reduce(function (t, e) {
                      return t.indexOf(e) < 0 && t.push(e), t;
                    }, []),
                    n = {},
                    i = function (i) {
                      var s = e[i];
                      n[s] = t.map(function (t) {
                        var e = {};
                        for (var n in t)
                          zi.key(n)
                            ? n == s && (e.value = t[n])
                            : (e[n] = t[n]);
                        return e;
                      });
                    },
                    s = 0;
                  s < e.length;
                  s++
                )
                  i(s);
                return n;
              })(i),
              e
            )),
          e))
            zi.key(s) && n.push({ name: s, tweens: Ts(e[s], t) });
          return n;
        })(n, t),
        s = Os(t.targets),
        r = ks(s, i),
        o = Ls(r, n),
        a = Ds;
      return (
        Ds++,
        os(e, {
          id: a,
          children: [],
          animatables: s,
          animations: r,
          duration: o.duration,
          delay: o.delay,
          endDelay: o.endDelay,
        })
      );
    })(t);
    function c() {
      var t = l.direction;
      "alternate" !== t &&
        (l.direction = "normal" !== t ? "normal" : "reverse"),
        (l.reversed = !l.reversed),
        e.forEach(function (t) {
          return (t.reversed = l.reversed);
        });
    }
    function u(t) {
      return l.reversed ? l.duration - t : t;
    }
    function h() {
      (n = 0), (i = u(l.currentTime) * (1 / Ms.speed));
    }
    function d(t, e) {
      e && e.seek(t - e.timelineOffset);
    }
    function f(t) {
      for (var e = 0, n = l.animations, i = n.length; e < i; ) {
        var s = n[e],
          r = s.animatable,
          o = s.tweens,
          a = o.length - 1,
          c = o[a];
        a &&
          (c =
            ts(o, function (e) {
              return t < e.end;
            })[0] || c);
        for (
          var u = $i(t - c.start - c.delay, 0, c.duration) / c.duration,
            h = isNaN(u) ? 1 : c.easing(u),
            d = c.to.strings,
            f = c.round,
            p = [],
            g = c.to.numbers.length,
            m = void 0,
            _ = 0;
          _ < g;
          _++
        ) {
          var v = void 0,
            b = c.to.numbers[_],
            y = c.from.numbers[_] || 0;
          (v = c.isPath
            ? ws(c.value, h * b, c.isPathTargetInsideSVG)
            : y + h * (b - y)),
            f && ((c.isColor && _ > 2) || (v = Math.round(v * f) / f)),
            p.push(v);
        }
        var w = d.length;
        if (w) {
          m = d[0];
          for (var E = 0; E < w; E++) {
            d[E];
            var A = d[E + 1],
              O = p[E];
            isNaN(O) || (m += A ? O + A : O + " ");
          }
        } else m = p[0];
        xs[s.type](r.target, s.property, m, r.transforms),
          (s.currentValue = m),
          e++;
      }
    }
    function p(t) {
      l[t] && !l.passThrough && l[t](l);
    }
    function g(t) {
      var h = l.duration,
        g = l.delay,
        m = h - l.endDelay,
        _ = u(t);
      (l.progress = $i((_ / h) * 100, 0, 100)),
        (l.reversePlayback = _ < l.currentTime),
        e &&
          (function (t) {
            if (l.reversePlayback) for (var n = r; n--; ) d(t, e[n]);
            else for (var i = 0; i < r; i++) d(t, e[i]);
          })(_),
        !l.began && l.currentTime > 0 && ((l.began = !0), p("begin")),
        !l.loopBegan &&
          l.currentTime > 0 &&
          ((l.loopBegan = !0), p("loopBegin")),
        _ <= g && 0 !== l.currentTime && f(0),
        ((_ >= m && l.currentTime !== h) || !h) && f(h),
        _ > g && _ < m
          ? (l.changeBegan ||
              ((l.changeBegan = !0),
              (l.changeCompleted = !1),
              p("changeBegin")),
            p("change"),
            f(_))
          : l.changeBegan &&
            ((l.changeCompleted = !0),
            (l.changeBegan = !1),
            p("changeComplete")),
        (l.currentTime = $i(_, 0, h)),
        l.began && p("update"),
        t >= h &&
          ((i = 0),
          l.remaining && !0 !== l.remaining && l.remaining--,
          l.remaining
            ? ((n = s),
              p("loopComplete"),
              (l.loopBegan = !1),
              "alternate" === l.direction && c())
            : ((l.paused = !0),
              l.completed ||
                ((l.completed = !0),
                p("loopComplete"),
                p("complete"),
                !l.passThrough && "Promise" in window && (o(), a(l)))));
    }
    return (
      a(l),
      (l.reset = function () {
        var t = l.direction;
        (l.passThrough = !1),
          (l.currentTime = 0),
          (l.progress = 0),
          (l.paused = !0),
          (l.began = !1),
          (l.loopBegan = !1),
          (l.changeBegan = !1),
          (l.completed = !1),
          (l.changeCompleted = !1),
          (l.reversePlayback = !1),
          (l.reversed = "reverse" === t),
          (l.remaining = l.loop),
          (e = l.children);
        for (var n = (r = e.length); n--; ) l.children[n].reset();
        ((l.reversed && !0 !== l.loop) ||
          ("alternate" === t && 1 === l.loop)) &&
          l.remaining++,
          f(l.reversed ? l.duration : 0);
      }),
      (l._onDocumentVisibility = h),
      (l.set = function (t, e) {
        return Cs(t, e), l;
      }),
      (l.tick = function (t) {
        (s = t), n || (n = s), g((s + (i - n)) * Ms.speed);
      }),
      (l.seek = function (t) {
        g(u(t));
      }),
      (l.pause = function () {
        (l.paused = !0), h();
      }),
      (l.play = function () {
        l.paused &&
          (l.completed && l.reset(), (l.paused = !1), Ss.push(l), h(), Ns());
      }),
      (l.reverse = function () {
        c(), (l.completed = !l.reversed), h();
      }),
      (l.restart = function () {
        l.reset(), l.play();
      }),
      (l.remove = function (t) {
        js(As(t), l);
      }),
      l.reset(),
      l.autoplay && l.play(),
      l
    );
  }
  function Ps(t, e) {
    for (var n = e.length; n--; )
      is(t, e[n].animatable.target) && e.splice(n, 1);
  }
  function js(t, e) {
    var n = e.animations,
      i = e.children;
    Ps(t, n);
    for (var s = i.length; s--; ) {
      var r = i[s],
        o = r.animations;
      Ps(t, o), o.length || r.children.length || i.splice(s, 1);
    }
    n.length || i.length || e.pause();
  }
  (Ms.version = "3.2.1"),
    (Ms.speed = 1),
    (Ms.suspendWhenDocumentHidden = !0),
    (Ms.running = Ss),
    (Ms.remove = function (t) {
      for (var e = As(t), n = Ss.length; n--; ) js(e, Ss[n]);
    }),
    (Ms.get = ps),
    (Ms.set = Cs),
    (Ms.convertPx = us),
    (Ms.path = function (t, e) {
      var n = zi.str(t) ? Ji(t)[0] : t,
        i = e || 100;
      return function (t) {
        return {
          property: t,
          el: n,
          svg: ys(n),
          totalLength: bs(n) * (i / 100),
        };
      };
    }),
    (Ms.setDashoffset = function (t) {
      var e = bs(t);
      return t.setAttribute("stroke-dasharray", e), e;
    }),
    (Ms.stagger = function (t, e) {
      void 0 === e && (e = {});
      var n = e.direction || "normal",
        i = e.easing ? Zi(e.easing) : null,
        s = e.grid,
        r = e.axis,
        o = e.from || 0,
        a = "first" === o,
        l = "center" === o,
        c = "last" === o,
        u = zi.arr(t),
        h = u ? parseFloat(t[0]) : parseFloat(t),
        d = u ? parseFloat(t[1]) : 0,
        f = as(u ? t[1] : t) || 0,
        p = e.start || 0 + (u ? h : 0),
        g = [],
        m = 0;
      return function (t, e, _) {
        if (
          (a && (o = 0), l && (o = (_ - 1) / 2), c && (o = _ - 1), !g.length)
        ) {
          for (var v = 0; v < _; v++) {
            if (s) {
              var b = l ? (s[0] - 1) / 2 : o % s[0],
                y = l ? (s[1] - 1) / 2 : Math.floor(o / s[0]),
                w = b - (v % s[0]),
                E = y - Math.floor(v / s[0]),
                A = Math.sqrt(w * w + E * E);
              "x" === r && (A = -w), "y" === r && (A = -E), g.push(A);
            } else g.push(Math.abs(o - v));
            m = Math.max.apply(Math, g);
          }
          i &&
            (g = g.map(function (t) {
              return i(t / m) * m;
            })),
            "reverse" === n &&
              (g = g.map(function (t) {
                return r ? (t < 0 ? -1 * t : -t) : Math.abs(m - t);
              }));
        }
        return p + (u ? (d - h) / m : h) * (Math.round(100 * g[e]) / 100) + f;
      };
    }),
    (Ms.timeline = function (t) {
      void 0 === t && (t = {});
      var e = Ms(t);
      return (
        (e.duration = 0),
        (e.add = function (n, i) {
          var s = Ss.indexOf(e),
            r = e.children;
          function o(t) {
            t.passThrough = !0;
          }
          s > -1 && Ss.splice(s, 1);
          for (var a = 0; a < r.length; a++) o(r[a]);
          var l = os(n, rs(Hi, t));
          l.targets = l.targets || t.targets;
          var c = e.duration;
          (l.autoplay = !1),
            (l.direction = e.direction),
            (l.timelineOffset = zi.und(i) ? c : gs(i, c)),
            o(e),
            e.seek(l.timelineOffset);
          var u = Ms(l);
          o(u), r.push(u);
          var h = Ls(r, t);
          return (
            (e.delay = h.delay),
            (e.endDelay = h.endDelay),
            (e.duration = h.duration),
            e.seek(0),
            e.reset(),
            e.autoplay && e.play(),
            e
          );
        }),
        e
      );
    }),
    (Ms.easing = Zi),
    (Ms.penner = Gi),
    (Ms.random = function (t, e) {
      return Math.floor(Math.random() * (e - t + 1)) + t;
    });
  var Bs = document.querySelector(".app"),
    Hs = document.createElement("h2");
  (Hs.textContent = "hola"), Bs.appendChild(Hs);
})();
