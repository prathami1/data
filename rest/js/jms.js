(self.webpackJsonp = self.webpackJsonp || []).push([
    [3], {
        ZMKu: function(t, n, e) {
            "use strict";
            e.d(n, "a", (function() {
                return be
            })), e.d(n, "b", (function() {
                return Ve
            })), e.d(n, "c", (function() {
                return je
            })), e.d(n, "d", (function() {
                return Ae
            }));
            var r = e("mrSG"),
                i = e("zx1J"),
                o = e("eUsl"),
                a = e("tKSW"),
                s = e("2Deh"),
                u = e("82gj"),
                c = e("Ibe6"),
                f = e("Neuu"),
                l = e("lyHL"),
                p = function(t) {
                    return !isNaN(parseFloat(t))
                },
                d = function() {
                    function t(t, n) {
                        var e = this,
                            r = void 0 === n ? {} : n,
                            i = r.transformer,
                            a = r.parent;
                        this.timeDelta = 0, this.lastUpdated = 0, this.canTrackVelocity = !1, this.updateAndNotify = function(t, n) {
                            void 0 === n && (n = !0), e.prev = e.current, e.current = e.transformer ? e.transformer(t) : t, e.updateSubscribers && e.prev !== e.current && e.updateSubscribers.forEach(e.notifySubscriber), e.children && e.children.forEach(e.setChild), n && e.renderSubscribers && e.renderSubscribers.forEach(e.notifySubscriber);
                            var r = Object(o.c)(),
                                i = r.delta,
                                a = r.timestamp;
                            e.lastUpdated !== a && (e.timeDelta = i, e.lastUpdated = a, o.b.postRender(e.scheduleVelocityCheck))
                        }, this.notifySubscriber = function(t) {
                            t(e.current)
                        }, this.scheduleVelocityCheck = function() {
                            return o.b.postRender(e.velocityCheck)
                        }, this.velocityCheck = function(t) {
                            t.timestamp !== e.lastUpdated && (e.prev = e.current)
                        }, this.setChild = function(t) {
                            return t.set(e.current)
                        }, this.parent = a, this.transformer = i, this.set(t, !1), this.canTrackVelocity = p(this.current)
                    }
                    return t.prototype.addChild = function(n) {
                        void 0 === n && (n = {});
                        var e = new t(this.current, Object(r.__assign)({
                            parent: this
                        }, n));
                        return this.children || (this.children = new Set), this.children.add(e), e
                    }, t.prototype.removeChild = function(t) {
                        this.children && this.children.delete(t)
                    }, t.prototype.subscribeTo = function(t, n) {
                        var e = this,
                            r = function() {
                                return n(e.current)
                            };
                        return t.add(r),
                            function() {
                                return t.delete(r)
                            }
                    }, t.prototype.onChange = function(t) {
                        return this.updateSubscribers || (this.updateSubscribers = new Set), this.subscribeTo(this.updateSubscribers, t)
                    }, t.prototype.onRenderRequest = function(t) {
                        return this.renderSubscribers || (this.renderSubscribers = new Set), this.notifySubscriber(t), this.subscribeTo(this.renderSubscribers, t)
                    }, t.prototype.attach = function(t) {
                        this.passiveEffect = t
                    }, t.prototype.set = function(t, n) {
                        void 0 === n && (n = !0), n && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, n)
                    }, t.prototype.get = function() {
                        return this.current
                    }, t.prototype.getVelocity = function() {
                        return this.canTrackVelocity ? Object(a.l)(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
                    }, t.prototype.start = function(t) {
                        var n = this;
                        return this.stop(), new Promise((function(e) {
                            n.stopAnimation = t(e)
                        })).then((function() {
                            return n.clearAnimation()
                        }))
                    }, t.prototype.stop = function() {
                        this.stopAnimation && this.stopAnimation(), this.clearAnimation()
                    }, t.prototype.isAnimating = function() {
                        return !!this.stopAnimation
                    }, t.prototype.clearAnimation = function() {
                        this.stopAnimation = null
                    }, t.prototype.destroy = function() {
                        this.updateSubscribers && this.updateSubscribers.clear(), this.renderSubscribers && this.renderSubscribers.clear(), this.parent && this.parent.removeChild(this), this.stop()
                    }, t
                }();

            function h(t, n) {
                return new d(t, n)
            }

            function v(t) {
                var n = Object(i.useRef)(null);
                return null === n.current && (n.current = t()), n.current
            }
            var g, m = function(t) {
                    return t instanceof d
                },
                y = Object(s.c)({
                    onRead: function() {
                        return null
                    },
                    onRender: function(t, n) {
                        return (0, n.onUpdate)(t)
                    }
                }),
                b = function() {
                    function t() {
                        this.hasMounted = !1, this.values = new Map, this.unsubscribers = new Map
                    }
                    return t.prototype.has = function(t) {
                        return this.values.has(t)
                    }, t.prototype.set = function(t, n) {
                        this.values.set(t, n), this.hasMounted && this.bindValueToOutput(t, n)
                    }, t.prototype.get = function(t, n) {
                        var e = this.values.get(t);
                        return void 0 === e && void 0 !== n && (e = new d(n), this.set(t, e)), e
                    }, t.prototype.forEach = function(t) {
                        return this.values.forEach(t)
                    }, t.prototype.bindValueToOutput = function(t, n) {
                        var e = this,
                            r = n.onRenderRequest((function(n) {
                                return e.output && e.output(t, n)
                            })),
                            i = n.onChange((function(n) {
                                e.onUpdate && e.onUpdate.set(t, n)
                            }));
                        this.unsubscribers.has(t) && this.unsubscribers.get(t)(), this.unsubscribers.set(t, (function() {
                            r(), i()
                        }))
                    }, t.prototype.setOnUpdate = function(t) {
                        this.onUpdate = void 0, t && (this.onUpdate = y({
                            onUpdate: t
                        }))
                    }, t.prototype.setTransformTemplate = function(t) {
                        this.transformTemplate !== t && (this.transformTemplate = t, this.updateTransformTemplate())
                    }, t.prototype.getTransformTemplate = function() {
                        return this.transformTemplate
                    }, t.prototype.updateTransformTemplate = function() {
                        this.output && this.output("transform", this.transformTemplate)
                    }, t.prototype.mount = function(t) {
                        var n = this;
                        this.hasMounted = !0, t && (this.output = t), this.values.forEach((function(t, e) {
                            return n.bindValueToOutput(e, t)
                        })), this.updateTransformTemplate()
                    }, t.prototype.unmount = function() {
                        var t = this;
                        this.values.forEach((function(n, e) {
                            var r = t.unsubscribers.get(e);
                            r && r()
                        }))
                    }, t
                }(),
                O = new Set(["dragOriginX", "dragOriginY"]),
                j = function(t) {
                    var n = v((function() {
                        var n = new b;
                        for (var e in t) m(t[e]) && !O.has(e) && n.set(e, t[e]);
                        return n
                    }));
                    return n.setOnUpdate(t.onUpdate), n.setTransformTemplate(t.transformTemplate), n
                },
                w = null,
                _ = function() {
                    return null !== w
                },
                E = function() {
                    Object(u.a)(!w, "Sync render session already open"), w = []
                },
                x = function() {
                    Object(u.a)(null !== w, "No sync render session found"), w && w.forEach((function(t) {
                        return t.render()
                    })), w = null
                },
                P = function(t) {
                    Object(u.a)(null !== w, "No sync render session found"), w && w.push(t)
                },
                C = Object(i.memo)((function(t) {
                    var n = t.innerRef,
                        e = t.values,
                        r = t.isStatic;
                    return Object(i.useEffect)((function() {
                        Object(u.a)(n.current instanceof Element, "No `ref` found. Ensure components created with `motion.custom` forward refs using `React.forwardRef`");
                        var t = Object(s.d)(n.current, {
                            preparseOutput: !1,
                            enableHardwareAcceleration: !r
                        });
                        return e.mount((function(n, e) {
                                t.set(n, e), _() && P(t)
                            })),
                            function() {
                                return e.unmount()
                            }
                    }), []), null
                })),
                T = (g = function(t) {
                    return t.get()
                }, function(t) {
                    var n = {};
                    return t.forEach((function(t, e) {
                        return n[e] = g(t)
                    })), n
                }),
                S = new Set(["originX", "originY", "originZ"]),
                A = function(t) {
                    return S.has(t)
                },
                V = function(t, n, e) {
                    var i = T(t),
                        o = t.getTransformTemplate();
                    return o && (i.transform = n.transform ? o({}, n.transform) : o), Object(s.b)(Object(r.__assign)(Object(r.__assign)({}, n), i), !e)
                },
                k = function(t, n, e, r) {
                    void 0 === n && (n = {});
                    var o = {},
                        a = Object(i.useRef)({}).current;
                    for (var u in n) {
                        var c = n[u];
                        if (m(c)) t.set(u, c);
                        else if (e || !Object(s.e)(u) && !A(u)) o[u] = c;
                        else {
                            if (t.has(u)) {
                                if (c !== a[u]) t.get(u).set(c)
                            } else t.set(u, h(c));
                            a[u] = c
                        }
                    }
                    return r ? r(o) : o
                },
                D = function(t) {
                    return Array.isArray(t)
                },
                M = function(t) {
                    return D(t) ? t[t.length - 1] || 0 : t
                },
                R = [c.g, c.j, c.h, c.d, c.n, c.m, {
                    test: function(t) {
                        return "auto" === t
                    },
                    parse: function(t) {
                        return t
                    }
                }],
                L = Object(r.__spreadArrays)(R, [c.b, c.c]),
                B = function(t) {
                    return function(n) {
                        return n.test(t)
                    }
                },
                F = function(t) {
                    return R.find(B(t))
                },
                H = function(t) {
                    return L.find(B(t))
                },
                I = function() {
                    return {
                        type: "spring",
                        stiffness: 500,
                        damping: 25,
                        restDelta: .5,
                        restSpeed: 10
                    }
                },
                N = function(t) {
                    return {
                        type: "spring",
                        stiffness: 700,
                        damping: 0 === t ? 100 : 35
                    }
                },
                X = function() {
                    return {
                        ease: "linear",
                        duration: .3
                    }
                },
                Y = function(t) {
                    return {
                        type: "keyframes",
                        duration: .8,
                        values: t
                    }
                },
                U = {
                    x: I,
                    y: I,
                    z: I,
                    rotate: I,
                    rotateX: I,
                    rotateY: I,
                    rotateZ: I,
                    scaleX: N,
                    scaleY: N,
                    scale: N,
                    opacity: X,
                    backgroundColor: X,
                    color: X,
                    default: N
                },
                z = function(t) {
                    var n = t.to,
                        e = t.duration;
                    return Object(f.a)((function(t) {
                        var r = t.update,
                            i = t.complete;
                        r(n), e ? Object(f.b)(e).start({
                            complete: i
                        }) : i()
                    }))
                },
                G = function(t) {
                    if (Array.isArray(t)) {
                        Object(u.a)(4 === t.length, "Cubic bezier arrays must contain four numerical values.");
                        var n = t[0],
                            e = t[1],
                            r = t[2],
                            i = t[3];
                        return Object(l.cubicBezier)(n, e, r, i)
                    }
                    return "string" === typeof t ? (Object(u.a)(void 0 !== l[t], "Invalid easing type '" + t + "'"), l[t]) : t
                },
                W = function(t) {
                    return Array.isArray(t) && "number" !== typeof t[0]
                },
                Z = function(t, n) {
                    return "zIndex" !== t && (!("number" !== typeof n && !Array.isArray(n)) || !("string" !== typeof n || !c.c.test(n) || n.startsWith("url(")))
                },
                q = function(t) {
                    return 1e3 * t
                },
                J = {
                    tween: f.f,
                    spring: f.e,
                    keyframes: f.d,
                    inertia: f.c,
                    just: z
                },
                K = {
                    tween: function(t) {
                        if (t.ease) {
                            var n = W(t.ease) ? t.ease[0] : t.ease;
                            t.ease = G(n)
                        }
                        return t
                    },
                    keyframes: function(t) {
                        var n = t.from,
                            e = (t.to, t.velocity, Object(r.__rest)(t, ["from", "to", "velocity"]));
                        if (e.values && null === e.values[0]) {
                            var i = Object(r.__spreadArrays)(e.values);
                            i[0] = n, e.values = i
                        }
                        return e.ease && (e.easings = W(e.ease) ? e.ease.map(G) : G(e.ease)), e.ease = l.linear, e
                    }
                },
                $ = function(t, n, e) {
                    var i = e ? e.delay : 0;
                    if (void 0 === e || ! function(t) {
                            t.when, t.delay, t.delayChildren, t.staggerChildren, t.staggerDirection;
                            var n = Object(r.__rest)(t, ["when", "delay", "delayChildren", "staggerChildren", "staggerDirection"]);
                            return Object.keys(n).length
                        }(e)) return Object(r.__assign)({
                        delay: i
                    }, function(t, n) {
                        var e;
                        return e = D(n) ? Y : U[t] || U.default, Object(r.__assign)({
                            to: n
                        }, e(n))
                    }(t, n));
                    var o = e[t] || e.default || e;
                    return !1 === o.type ? {
                        delay: o.hasOwnProperty("delay") ? o.delay : i,
                        to: D(n) ? n[n.length - 1] : n,
                        type: "just"
                    } : D(n) ? Object(r.__assign)(Object(r.__assign)({
                        values: n,
                        duration: .8,
                        delay: i,
                        ease: "linear"
                    }, o), {
                        type: "keyframes"
                    }) : Object(r.__assign)({
                        type: "tween",
                        to: n,
                        delay: i
                    }, o)
                },
                Q = function(t, n, e, i) {
                    var o = n.get(),
                        a = Z(t, o),
                        s = Z(t, e);
                    Object(u.b)(a === s, "You are trying to animate " + t + ' from "' + o + '" to ' + e + '. "' + o + '" is not an animatable value - to enable this animation set ' + o + " to a value animatable to " + e + " via the `style` property.");
                    var c, f = $(t, e, i),
                        l = f.type,
                        p = void 0 === l ? "tween" : l,
                        d = Object(r.__rest)(f, ["type"]),
                        h = a && s ? J[p] : z,
                        v = function(t, n) {
                            return K[t] ? K[t](n) : n
                        }(p, Object(r.__assign)({
                            from: o,
                            velocity: n.getVelocity()
                        }, d));
                    return ((c = v).hasOwnProperty("duration") || c.hasOwnProperty("repeatDelay")) && (v.duration && (v.duration = q(v.duration)), v.repeatDelay && (v.repeatDelay = q(v.repeatDelay))), [h, v]
                };

            function tt(t, n, e, i) {
                var o = i.delay,
                    a = void 0 === o ? 0 : o,
                    s = Object(r.__rest)(i, ["delay"]);
                return n.start((function(i) {
                    var o, u = Q(t, n, e, s),
                        c = u[0],
                        l = u[1],
                        p = l.delay,
                        d = Object(r.__rest)(l, ["delay"]);
                    void 0 !== p && (a = p);
                    var h = function() {
                        var t = c(d);
                        o = t.start({
                            update: function(t) {
                                return n.set(t)
                            },
                            complete: i
                        })
                    };
                    return a ? o = Object(f.b)(q(a)).start({
                            complete: h
                        }) : h(),
                        function() {
                            o && o.stop()
                        }
                }))
            }
            var nt = function() {
                function t(t) {
                    var n = this,
                        e = t.values,
                        r = t.readValueFromSource,
                        i = t.makeTargetAnimatable;
                    this.props = {}, this.variants = {}, this.baseTarget = {}, this.overrides = [], this.resolvedOverrides = [], this.activeOverrides = new Set, this.isAnimating = new Set, this.hasValue = function(t) {
                        return !n.values.has(t)
                    }, this.values = e, this.readValueFromSource = r, this.makeTargetAnimatable = i, this.values.forEach((function(t, e) {
                        return n.baseTarget[e] = t.get()
                    }))
                }
                return t.prototype.setProps = function(t) {
                    this.props = t
                }, t.prototype.setVariants = function(t) {
                    t && (this.variants = t)
                }, t.prototype.setDefaultTransition = function(t) {
                    t && (this.defaultTransition = t)
                }, t.prototype.setValues = function(t, n) {
                    var e = this,
                        i = void 0 === n ? {} : n,
                        o = i.isActive,
                        a = void 0 === o ? new Set : o,
                        s = i.priority,
                        u = this.resolveVariant(t),
                        c = u.target,
                        f = u.transitionEnd;
                    return c = this.transformValues(Object(r.__assign)(Object(r.__assign)({}, c), f)), Object.keys(c).forEach((function(t) {
                        if (!a.has(t) && (a.add(t), c)) {
                            var n = M(c[t]);
                            if (e.values.has(t)) {
                                var r = e.values.get(t);
                                r && r.set(n)
                            } else e.values.set(t, h(n));
                            s || (e.baseTarget[t] = n)
                        }
                    }))
                }, t.prototype.transformValues = function(t) {
                    var n = this.props.transformValues;
                    return n ? n(t) : t
                }, t.prototype.checkForNewValues = function(t) {
                    var n = Object.keys(t).filter(this.hasValue),
                        e = n.length;
                    if (e)
                        for (var r = 0; r < e; r++) {
                            var i = n[r],
                                o = t[i],
                                a = null;
                            Array.isArray(o) && (a = o[0]), null === a && (a = this.readValueFromSource(i), Object(u.a)(null !== a, 'No initial value for "' + i + '" can be inferred. Ensure an initial value for "' + i + '" is defined on the component.')), "string" === typeof a && /^\d*\.?\d+$/.test(a) ? a = parseFloat(a) : !H(a) && c.c.test(o) && (a = c.c.getAnimatableNone(o)), this.values.set(i, h(a)), this.baseTarget[i] = a
                        }
                }, t.prototype.resolveVariant = function(t) {
                    if (!t) return {
                        target: void 0,
                        transition: void 0,
                        transitionEnd: void 0
                    };
                    "function" === typeof t && (t = t(this.props.custom, function(t) {
                        var n = {};
                        return t.forEach((function(t, e) {
                            return n[e] = t.get()
                        })), n
                    }(this.values), function(t) {
                        var n = {};
                        return t.forEach((function(t, e) {
                            return n[e] = t.getVelocity()
                        })), n
                    }(this.values)));
                    var n = t.transition;
                    return {
                        transition: void 0 === n ? this.defaultTransition : n,
                        transitionEnd: t.transitionEnd,
                        target: Object(r.__rest)(t, ["transition", "transitionEnd"])
                    }
                }, t.prototype.getHighestPriority = function() {
                    return this.activeOverrides.size ? Math.max.apply(Math, Array.from(this.activeOverrides)) : 0
                }, t.prototype.setOverride = function(t, n) {
                    this.overrides[n] = t, this.children && this.children.forEach((function(e) {
                        return e.setOverride(t, n)
                    }))
                }, t.prototype.startOverride = function(t) {
                    var n = this.overrides[t];
                    if (n) return this.start(n, {
                        priority: t
                    })
                }, t.prototype.clearOverride = function(t) {
                    var n = this;
                    if (this.children && this.children.forEach((function(n) {
                            return n.clearOverride(t)
                        })), this.overrides[t]) {
                        this.activeOverrides.delete(t);
                        var e = this.getHighestPriority();
                        if (this.resetIsAnimating(), e) this.overrides[e] && this.startOverride(e);
                        var r = this.resolvedOverrides[t];
                        if (r) {
                            var i = {};
                            for (var o in this.baseTarget) void 0 !== r[o] && (i[o] = this.baseTarget[o]);
                            this.onStart(), this.animate(i).then((function() {
                                return n.onComplete()
                            }))
                        }
                    }
                }, t.prototype.apply = function(t) {
                    return Array.isArray(t) ? this.applyVariantLabels(t) : "string" === typeof t ? this.applyVariantLabels([t]) : void this.setValues(t)
                }, t.prototype.applyVariantLabels = function(t) {
                    var n = this,
                        e = new Set;
                    Object(r.__spreadArrays)(t).reverse().forEach((function(r) {
                        var i = n.resolveVariant(n.variants[r]),
                            o = i.target,
                            a = i.transitionEnd;
                        a && n.setValues(a, {
                            isActive: e
                        }), o && n.setValues(o, {
                            isActive: e
                        }), n.children && n.children.size && n.children.forEach((function(n) {
                            return n.applyVariantLabels(t)
                        }))
                    }))
                }, t.prototype.start = function(t, n) {
                    var e, r, i = this;
                    return void 0 === n && (n = {}), n.priority && this.activeOverrides.add(n.priority), this.resetIsAnimating(n.priority), r = t, e = Array.isArray(r) ? this.animateVariantLabels(t, n) : "string" === typeof t ? this.animateVariant(t, n) : this.animate(t, n), this.onStart(), e.then((function() {
                        return i.onComplete()
                    }))
                }, t.prototype.animate = function(t, n) {
                    var e = this,
                        i = void 0 === n ? {} : n,
                        o = i.delay,
                        a = void 0 === o ? 0 : o,
                        s = i.priority,
                        u = void 0 === s ? 0 : s,
                        c = i.transitionOverride,
                        f = this.resolveVariant(t),
                        l = f.target,
                        p = f.transition,
                        d = f.transitionEnd;
                    if (c && (p = c), !l) return Promise.resolve();
                    if (l = this.transformValues(l), d && (d = this.transformValues(d)), this.checkForNewValues(l), this.makeTargetAnimatable) {
                        var h = this.makeTargetAnimatable(l, d);
                        l = h.target, d = h.transitionEnd
                    }
                    u && (this.resolvedOverrides[u] = l), this.checkForNewValues(l);
                    var v = [];
                    for (var g in l) {
                        var m = this.values.get(g);
                        if (m && l && void 0 !== l[g]) {
                            var y = l[g];
                            u || (this.baseTarget[g] = M(y)), this.isAnimating.has(g) || (this.isAnimating.add(g), v.push(tt(g, m, y, Object(r.__assign)({
                                delay: a
                            }, p))))
                        }
                    }
                    var b = Promise.all(v);
                    return d ? b.then((function() {
                        e.setValues(d, {
                            priority: u
                        })
                    })) : b
                }, t.prototype.animateVariantLabels = function(t, n) {
                    var e = this,
                        i = Object(r.__spreadArrays)(t).reverse().map((function(t) {
                            return e.animateVariant(t, n)
                        }));
                    return Promise.all(i)
                }, t.prototype.animateVariant = function(t, n) {
                    var e = this,
                        r = !1,
                        i = 0,
                        o = 0,
                        a = 1,
                        s = n && n.priority || 0,
                        u = this.variants[t],
                        c = u ? function() {
                            return e.animate(u, n)
                        } : function() {
                            return Promise.resolve()
                        },
                        f = this.children ? function() {
                            return e.animateChildren(t, i, o, a, s)
                        } : function() {
                            return Promise.resolve()
                        };
                    if (u && this.children) {
                        var l = this.resolveVariant(u).transition;
                        l && (r = l.when || r, i = l.delayChildren || i, o = l.staggerChildren || o, a = l.staggerDirection || a)
                    }
                    if (r) {
                        var p = "beforeChildren" === r ? [c, f] : [f, c],
                            d = p[1];
                        return (0, p[0])().then(d)
                    }
                    return Promise.all([c(), f()])
                }, t.prototype.animateChildren = function(t, n, e, r, i) {
                    if (void 0 === n && (n = 0), void 0 === e && (e = 0), void 0 === r && (r = 1), void 0 === i && (i = 0), !this.children) return Promise.resolve();
                    var o = [],
                        a = (this.children.size - 1) * e,
                        s = 1 === r ? function(t) {
                            return t * e
                        } : function(t) {
                            return a - t * e
                        };
                    return Array.from(this.children).forEach((function(e, r) {
                        var a = e.animateVariant(t, {
                            priority: i,
                            delay: n + s(r)
                        });
                        o.push(a)
                    })), Promise.all(o)
                }, t.prototype.onStart = function() {
                    var t = this.props.onAnimationStart;
                    t && t()
                }, t.prototype.onComplete = function() {
                    var t = this.props.onAnimationComplete;
                    t && t()
                }, t.prototype.checkOverrideIsAnimating = function(t) {
                    for (var n = this.overrides.length, e = t + 1; e < n; e++) {
                        var r = this.resolvedOverrides[e];
                        if (r)
                            for (var i in r) this.isAnimating.add(i)
                    }
                }, t.prototype.resetIsAnimating = function(t) {
                    void 0 === t && (t = 0), this.isAnimating.clear(), t < this.getHighestPriority() && this.checkOverrideIsAnimating(t), this.children && this.children.forEach((function(n) {
                        return n.resetIsAnimating(t)
                    }))
                }, t.prototype.stop = function() {
                    this.values.forEach((function(t) {
                        return t.stop()
                    }))
                }, t.prototype.addChild = function(t) {
                    this.children || (this.children = new Set), this.children.add(t), this.overrides.forEach((function(n, e) {
                        n && t.setOverride(n, e)
                    }))
                }, t.prototype.removeChild = function(t) {
                    this.children && this.children.delete(t)
                }, t.prototype.resetChildren = function() {
                    this.children && this.children.clear()
                }, t
            }();
            var et = function() {
                    function t() {
                        this.hasMounted = !1, this.pendingAnimations = [], this.componentControls = new Set
                    }
                    return t.prototype.setVariants = function(t) {
                        this.variants = t, this.componentControls.forEach((function(n) {
                            return n.setVariants(t)
                        }))
                    }, t.prototype.setDefaultTransition = function(t) {
                        this.defaultTransition = t, this.componentControls.forEach((function(n) {
                            return n.setDefaultTransition(t)
                        }))
                    }, t.prototype.subscribe = function(t) {
                        var n = this;
                        return this.componentControls.add(t), this.variants && t.setVariants(this.variants), this.defaultTransition && t.setDefaultTransition(this.defaultTransition),
                            function() {
                                return n.componentControls.delete(t)
                            }
                    }, t.prototype.start = function(t, n) {
                        var e = this;
                        if (this.hasMounted) {
                            var r = [];
                            return this.componentControls.forEach((function(e) {
                                var i = e.start(t, {
                                    transitionOverride: n
                                });
                                r.push(i)
                            })), Promise.all(r)
                        }
                        return new Promise((function(r) {
                            e.pendingAnimations.push({
                                animation: [t, n],
                                resolve: r
                            })
                        }))
                    }, t.prototype.set = function(t) {
                        return Object(u.a)(this.hasMounted, "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."), this.componentControls.forEach((function(n) {
                            return n.apply(t)
                        }))
                    }, t.prototype.stop = function() {
                        this.componentControls.forEach((function(t) {
                            return t.stop()
                        }))
                    }, t.prototype.mount = function() {
                        var t = this;
                        this.hasMounted = !0, this.pendingAnimations.forEach((function(n) {
                            var e = n.animation,
                                r = n.resolve;
                            return t.start.apply(t, e).then(r)
                        }))
                    }, t.prototype.unmount = function() {
                        this.hasMounted = !1, this.stop()
                    }, t
                }(),
                rt = Object(i.createContext)({
                    static: !1
                }),
                it = function(t) {
                    return "string" === typeof t || Array.isArray(t)
                },
                ot = function(t) {
                    return t instanceof et
                },
                at = function(t, n, e, r, o) {
                    void 0 === r && (r = !1);
                    var a, s = o.initial,
                        u = o.animate,
                        c = o.variants,
                        f = o.whileTap,
                        l = o.whileHover;
                    t.exitProps && void 0 !== t.exitProps.initial && (s = t.exitProps.initial), !1 !== s || ot(u) ? "boolean" !== typeof s && (a = s) : a = u;
                    var p = Object(i.useRef)(!1),
                        d = c || it(u) || it(f) || it(l) || ot(u),
                        h = it(a) ? a : t.initial,
                        v = it(u) ? u : t.animate,
                        g = r ? h : null,
                        m = d && it(v) ? v : null,
                        y = Object(i.useMemo)((function() {
                            return {
                                controls: d ? n : t.controls,
                                initial: h,
                                animate: v,
                                values: e,
                                hasMounted: p,
                                isReducedMotion: t.isReducedMotion
                            }
                        }), [g, m, t.isReducedMotion]);
                    return y.static = r,
                        function(t, n) {
                            void 0 === n && (n = !1);
                            var e = Object(i.useRef)(!0);
                            (!n || n && e.current) && t(), e.current = !1
                        }((function() {
                            var e = a || t.initial;
                            e && n.apply(e)
                        }), !r), Object(i.useEffect)((function() {
                            p.current = !0
                        }), []), y
                };

            function st(t, n, e, o) {
                var a = n.variants,
                    s = n.transition,
                    u = Object(i.useContext)(rt).controls,
                    c = v((function() {
                        return new nt(t)
                    }));
                return o && o.exitProps && o.exitProps.isExiting || (c.resetChildren(), c.setProps(n), c.setVariants(a), c.setDefaultTransition(s)), Object(i.useEffect)((function() {
                    e && u && u.addChild(c)
                })), Object(i.useEffect)((function() {
                    return function() {
                        n.onAnimationComplete;
                        var t = Object(r.__rest)(n, ["onAnimationComplete"]);
                        c.setProps(t), u && u.removeChild(c)
                    }
                }), []), c
            }
            var ut = function(t) {
                var n = t.animate,
                    e = t.variants,
                    r = t.inherit;
                return (void 0 === r || r) && !!e && (!n || n instanceof et)
            };
            var ct = function(t) {
                    var n = t.getValueControlsConfig,
                        e = t.loadFunctionalityComponents,
                        r = t.renderComponent;
                    return Object(i.forwardRef)((function(t, o) {
                        var a = function(t) {
                                var n = t && "function" !== typeof t ? t : Object(i.useRef)(null);
                                return t && "function" === typeof t && Object(i.useEffect)((function() {
                                    return t(n.current),
                                        function() {
                                            return t(null)
                                        }
                                }), []), n
                            }(o),
                            s = Object(i.useContext)(rt),
                            u = s.static || t.static || !1,
                            c = j(t),
                            f = k(c, t.style, u, t.transformValues),
                            l = ut(t),
                            p = st(v((function() {
                                return n(a, c)
                            })), t, l, s),
                            d = at(s, p, c, u, t),
                            h = u ? null : e(a, c, t, s, p, l),
                            g = r(a, f, c, t, u);
                        return Object(i.createElement)(i.Fragment, null, Object(i.createElement)(rt.Provider, {
                            value: d
                        }, g), Object(i.createElement)(i.Fragment, null, Object(i.createElement)(C, {
                            innerRef: a,
                            values: c,
                            isStatic: u
                        }), h))
                    }))
                },
                ft = ["animate", "circle", "clipPath", "defs", "desc", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "switch", "symbol", "text", "textPath", "tspan", "use", "view"],
                lt = Object(i.createContext)({
                    transformPagePoint: function(t) {
                        return t
                    }
                });

            function pt(t) {
                return Object(i.useEffect)((function() {
                    return function() {
                        return t()
                    }
                }), [])
            }

            function dt(t, n, e, r) {
                if (e) return t.addEventListener(n, e, r),
                    function() {
                        return t.removeEventListener(n, e, r)
                    }
            }

            function ht(t) {
                return "undefined" !== typeof PointerEvent && t instanceof PointerEvent ? !("mouse" !== t.pointerType) : t instanceof MouseEvent
            }

            function vt(t) {
                return !!t.touches
            }
            var gt = {
                pageX: 0,
                pageY: 0
            };

            function mt(t) {
                var n = t.touches[0] || t.changedTouches[0] || gt;
                return {
                    x: n.pageX,
                    y: n.pageY
                }
            }

            function yt(t) {
                var n = t.pageX,
                    e = void 0 === n ? 0 : n,
                    r = t.pageY;
                return {
                    x: e,
                    y: void 0 === r ? 0 : r
                }
            }

            function bt(t) {
                return {
                    point: vt(t) ? mt(t) : yt(t)
                }
            }
            var Ot, jt = function(t, n) {
                    if (void 0 === n && (n = !1), t) {
                        var e = function(n) {
                            return t(n, bt(n))
                        };
                        return n ? function(t) {
                            if (t) return function(n) {
                                var e = n instanceof MouseEvent;
                                (!e || e && 0 === n.button) && t(n)
                            }
                        }(e) : e
                    }
                },
                wt = "undefined" !== typeof window,
                _t = function() {
                    return wt && null === window.onpointerdown
                },
                Et = function() {
                    return wt && null === window.ontouchstart
                },
                xt = function() {
                    return wt && null === window.onmousedown
                },
                Pt = {
                    pointerdown: "mousedown",
                    pointermove: "mousemove",
                    pointerup: "mouseup",
                    pointercancel: "mousecancel",
                    pointerover: "mouseover",
                    pointerout: "mouseout",
                    pointerenter: "mouseenter",
                    pointerleave: "mouseleave"
                },
                Ct = {
                    pointerdown: "touchstart",
                    pointermove: "touchmove",
                    pointerup: "touchend",
                    pointercancel: "touchcancel"
                };

            function Tt(t) {
                return _t() ? t : Et() ? Ct[t] : xt() ? Pt[t] : t
            }

            function St(t, n, e, r) {
                return dt(t, Tt(n), jt(e, "pointerdown" === n), r)
            }

            function At(t, n, e, r) {
                return function(t, n, e, r) {
                    Object(i.useEffect)((function() {
                        var i = t.current;
                        if (e && i) return dt(i, n, e, r)
                    }), [t, n, e, r])
                }(t, Tt(n), jt(e, "pointerdown" === n), r)
            }! function(t) {
                t.subtract = function(t, n) {
                    return {
                        x: t.x - n.x,
                        y: t.y - n.y
                    }
                }, t.relativeTo = function(t) {
                    var n;
                    return function(e) {
                        var r = e.x,
                            i = e.y,
                            o = void 0 !== n ? n : n = "string" === typeof t ? document.getElementById(t) : t;
                        if (o) {
                            var a = o.getBoundingClientRect();
                            return {
                                x: r - a.left - window.scrollX,
                                y: i - a.top - window.scrollY
                            }
                        }
                    }
                }
            }(Ot || (Ot = {}));
            var Vt = !1;
            "undefined" !== typeof window && document.addEventListener("touchmove", (function(t) {
                Vt && t.preventDefault()
            }), {
                passive: !1
            });
            var kt = function() {
                    return Vt = !1
                },
                Dt = function() {
                    function t(t, n, e) {
                        var i = this,
                            s = (void 0 === e ? {} : e).transformPagePoint;
                        if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = function() {
                                if (i.lastMoveEvent && i.lastMoveEventInfo) {
                                    var t = Rt(i.lastMoveEventInfo, i.history),
                                        n = null !== i.startEvent,
                                        e = Object(a.d)(t.offset, {
                                            x: 0,
                                            y: 0
                                        }) >= 3;
                                    if (n || e) {
                                        var s = t.point,
                                            u = Object(o.c)().timestamp;
                                        i.history.push(Object(r.__assign)(Object(r.__assign)({}, s), {
                                            timestamp: u
                                        }));
                                        var c = i.handlers,
                                            f = c.onStart,
                                            l = c.onMove;
                                        n || (f && f(i.lastMoveEvent, t), i.startEvent = i.lastMoveEvent), l && l(i.lastMoveEvent, t)
                                    }
                                }
                            }, !(vt(t) && t.touches.length > 1)) {
                            this.handlers = n, this.transformPagePoint = s;
                            var u = Mt(bt(t), this.transformPagePoint),
                                c = u.point,
                                f = Object(o.c)().timestamp;
                            this.history = [Object(r.__assign)(Object(r.__assign)({}, c), {
                                timestamp: f
                            })];
                            var l = n.onSessionStart;
                            l && l(t, Rt(u, this.history));
                            var p = St(window, "pointermove", (function(t, n) {
                                    return i.handlePointerMove(t, n)
                                })),
                                d = St(window, "pointerup", (function(t, n) {
                                    return i.handlePointerUp(t, n)
                                }));
                            this.removeListeners = function() {
                                p && p(), d && d()
                            }
                        }
                    }
                    return t.prototype.handlePointerMove = function(t, n) {
                        this.lastMoveEvent = t, this.lastMoveEventInfo = Mt(n, this.transformPagePoint), ht(t) && 0 === t.buttons ? this.handlePointerUp(t, n) : o.b.update(this.updatePoint, !0)
                    }, t.prototype.handlePointerUp = function(t, n) {
                        this.end();
                        var e = this.handlers.onEnd;
                        if (e) {
                            var r = Rt(Mt(n, this.transformPagePoint), this.history);
                            e && e(t, r)
                        }
                    }, t.prototype.updateHandlers = function(t) {
                        this.handlers = t
                    }, t.prototype.end = function() {
                        this.removeListeners && this.removeListeners(), o.a.update(this.updatePoint), kt()
                    }, t
                }();

            function Mt(t, n) {
                return n ? {
                    point: n(t.point)
                } : t
            }

            function Rt(t, n) {
                var e = t.point;
                return {
                    point: e,
                    delta: Ot.subtract(e, Bt(n)),
                    offset: Ot.subtract(e, Lt(n)),
                    velocity: Ft(n, .1)
                }
            }

            function Lt(t) {
                return t[0]
            }

            function Bt(t) {
                return t[t.length - 1]
            }

            function Ft(t, n) {
                if (t.length < 2) return {
                    x: 0,
                    y: 0
                };
                for (var e = t.length - 1, r = null, i = Bt(t); e >= 0 && (r = t[e], !(i.timestamp - r.timestamp > q(n)));) e--;
                if (!r) return {
                    x: 0,
                    y: 0
                };
                var o = (i.timestamp - r.timestamp) / 1e3;
                if (0 === o) return {
                    x: 0,
                    y: 0
                };
                var a = {
                    x: (i.x - r.x) / o,
                    y: (i.y - r.y) / o
                };
                return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a
            }
            var Ht = function(t, n) {
                    return !!n && (t === n || Ht(t, n.parentElement))
                },
                It = ["whileHover", "whileTap", "whileDrag"],
                Nt = function(t) {
                    return It.indexOf(t) + 1
                };

            function Xt(t) {
                var n = null;
                return function() {
                    return null === n && (n = t, function() {
                        n = null
                    })
                }
            }
            var Yt = Xt("dragHorizontal"),
                Ut = Xt("dragVertical");

            function zt(t) {
                var n = !1;
                if ("y" === t) n = Ut();
                else if ("x" === t) n = Yt();
                else {
                    var e = Yt(),
                        r = Ut();
                    e && r ? n = function() {
                        e(), r()
                    } : (e && e(), r && r())
                }
                return n
            }
            var Gt = Nt("whileTap");
            var Wt = Nt("whileHover"),
                Zt = function(t) {
                    return function(n, e) {
                        ht(n) && t(n, e)
                    }
                };

            function qt(t, n) {
                ! function(t, n) {
                    var e = t.onPan,
                        r = t.onPanStart,
                        o = t.onPanEnd,
                        a = t.onPanSessionStart,
                        s = e || r || o || a,
                        u = Object(i.useRef)(null),
                        c = Object(i.useContext)(lt).transformPagePoint,
                        f = {
                            onSessionStart: a,
                            onStart: r,
                            onMove: e,
                            onEnd: function(t, n) {
                                u.current = null, o && o(t, n)
                            }
                        };
                    null !== u.current && u.current.updateHandlers(f), At(n, "pointerdown", s && function(t) {
                        u.current = new Dt(t, f, {
                            transformPagePoint: c
                        })
                    }), pt((function() {
                        return u.current && u.current.end()
                    }))
                }(t, n),
                function(t, n) {
                    var e = t.onTap,
                        r = t.onTapStart,
                        o = t.onTapCancel,
                        a = t.whileTap,
                        s = t.controls,
                        u = e || r || o || a,
                        c = Object(i.useRef)(!1),
                        f = Object(i.useRef)(null);

                    function l() {
                        f.current && f.current(), f.current = null
                    }
                    a && s && s.setOverride(a, Gt);
                    var p = Object(i.useRef)(null);
                    p.current = function(t, r) {
                        var i = n.current;
                        if (l(), c.current && i) {
                            c.current = !1, s && a && s.clearOverride(Gt);
                            var u = zt(!0);
                            u && (u(), Ht(i, t.target) ? e && e(t, r) : o && o(t, r))
                        }
                    }, At(n, "pointerdown", u ? function(t, e) {
                        l(), f.current = St(window, "pointerup", (function(t, n) {
                            return p.current(t, n)
                        })), n.current && !c.current && (c.current = !0, r && r(t, e), s && a && s.startOverride(Gt))
                    } : void 0), pt(l)
                }(t, n),
                function(t, n) {
                    var e = t.whileHover,
                        r = t.onHoverStart,
                        i = t.onHoverEnd,
                        o = t.controls;
                    e && o && o.setOverride(e, Wt), At(n, "pointerenter", Zt((function(t, n) {
                        r && r(t, n), e && o && o.startOverride(Wt)
                    }))), At(n, "pointerleave", Zt((function(t, n) {
                        i && i(t, n), e && o && o.clearOverride(Wt)
                    })))
                }(t, n)
            }
            var Jt = function(t) {
                    return function(n) {
                        return t(n), null
                    }
                },
                Kt = ["onPan", "onPanStart", "onPanEnd", "onPanSessionStart", "onTap", "onTapStart", "onTapCancel", "whileTap", "whileHover", "onHoverStart", "onHoverEnd"],
                $t = {
                    key: "gestures",
                    shouldRender: function(t) {
                        return Kt.some((function(n) {
                            return t.hasOwnProperty(n)
                        }))
                    },
                    Component: Jt((function(t) {
                        var n = t.innerRef;
                        qt(Object(r.__rest)(t, ["innerRef"]), n)
                    }))
                },
                Qt = function(t) {
                    return "object" === typeof t && t.hasOwnProperty("current")
                },
                tn = function(t) {
                    return t
                },
                nn = new Set(["INPUT", "TEXTAREA", "SELECT"]),
                en = function() {
                    function t(t) {
                        var n = t.ref,
                            e = t.values,
                            r = t.controls;
                        this.isDragging = !1, this.currentDirection = null, this.constraints = !1, this.props = {
                            transformPagePoint: tn
                        }, this.point = {}, this.origin = {
                            x: h(0),
                            y: h(0)
                        }, this.openGlobalLock = null, this.panSession = null, this.prevConstraintsBox = {
                            width: 0,
                            height: 0,
                            x: 0,
                            y: 0
                        }, this.ref = n, this.values = e, this.controls = r
                    }
                    return t.prototype.start = function(t, n) {
                        var e = this,
                            r = (void 0 === n ? {} : n).snapToCursor;
                        void 0 !== r && r && this.snapToCursor(t);
                        var i = this.props.transformPagePoint;
                        this.panSession = new Dt(t, {
                            onSessionStart: function(t) {
                                t.target && !nn.has(t.target.tagName) && (Et() || (t.preventDefault(), document.activeElement instanceof HTMLElement && document.activeElement.blur())), Vt = !0, rn((function(t) {
                                    var n = e.point[t];
                                    n && n.stop()
                                }))
                            },
                            onStart: function(t, n) {
                                if (e.constraintsNeedResolution) {
                                    var r = e.props,
                                        i = r.dragConstraints,
                                        o = r.transformPagePoint;
                                    e.constraints = un(i, e.ref, e.point, o), e.applyConstraintsToPoint()
                                }
                                rn((function(t) {
                                    var n = e.point[t];
                                    n && e.origin[t].set(n.get())
                                }));
                                var a = e.props,
                                    s = a.drag,
                                    u = a.dragPropagation;
                                if (!s || u || (e.openGlobalLock && e.openGlobalLock(), e.openGlobalLock = zt(s), e.openGlobalLock)) {
                                    e.isDragging = !0, e.currentDirection = null;
                                    var c = e.props.onDragStart;
                                    c && c(t, on(n, e.point))
                                }
                            },
                            onMove: function(t, n) {
                                var r = e.props,
                                    i = r.dragPropagation,
                                    o = r.dragDirectionLock;
                                if (i || e.openGlobalLock) {
                                    var a = n.offset;
                                    if (o && null === e.currentDirection) {
                                        if (e.currentDirection = function(t, n) {
                                                void 0 === n && (n = 10);
                                                var e = null;
                                                Math.abs(t.y) > n ? e = "y" : Math.abs(t.x) > n && (e = "x");
                                                return e
                                            }(a), null !== e.currentDirection) {
                                            var s = e.props.onDirectionLock;
                                            s && s(e.currentDirection)
                                        }
                                    } else {
                                        e.updatePoint("x", a), e.updatePoint("y", a);
                                        var u = e.props.onDrag;
                                        u && u(t, on(n, e.point))
                                    }
                                }
                            },
                            onEnd: function(t, n) {
                                e.stop(t, n)
                            }
                        }, {
                            transformPagePoint: i
                        })
                    }, t.prototype.cancelDrag = function() {
                        kt(), this.isDragging = !1, this.panSession && this.panSession.end(), this.panSession = null, !this.props.dragPropagation && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null)
                    }, t.prototype.stop = function(t, n) {
                        var e;
                        null === (e = this.panSession) || void 0 === e || e.end(), this.panSession = null;
                        var r = this.isDragging;
                        if (this.cancelDrag(), r) {
                            var i = this.props,
                                o = i.dragMomentum,
                                a = i.dragElastic,
                                s = i.onDragEnd;
                            if (o || a) {
                                var u = n.velocity;
                                this.animateDragEnd(u)
                            } else this.recordBoxInfo(this.constraints);
                            s && s(t, on(n, this.point))
                        }
                    }, t.prototype.recordBoxInfo = function(t) {
                        if (t) {
                            var n = t.right,
                                e = t.left,
                                r = t.bottom,
                                i = t.top;
                            this.prevConstraintsBox.width = (n || 0) - (e || 0), this.prevConstraintsBox.height = (r || 0) - (i || 0)
                        }
                        this.point.x && (this.prevConstraintsBox.x = this.point.x.get()), this.point.y && (this.prevConstraintsBox.y = this.point.y.get())
                    }, t.prototype.snapToCursor = function(t) {
                        var n = this,
                            e = this.props.transformPagePoint,
                            r = bt(t).point,
                            i = cn(this.ref, e),
                            o = i.width / 2 + i.left + window.scrollX,
                            a = i.height / 2 + i.top + window.scrollY,
                            s = {
                                x: r.x - o,
                                y: r.y - a
                            };
                        rn((function(t) {
                            var e = n.point[t];
                            e && n.origin[t].set(e.get())
                        })), this.updatePoint("x", s), this.updatePoint("y", s)
                    }, t.prototype.setPoint = function(t, n) {
                        this.point[t] = n
                    }, t.prototype.updatePoint = function(t, n) {
                        var e = this.props,
                            r = e.drag,
                            i = e.dragElastic,
                            o = this.point[t];
                        if (sn(t, r, this.currentDirection) && o) {
                            var a = ln(t, this.origin[t].get() + n[t], this.constraints, i);
                            o.set(a)
                        }
                    }, t.prototype.updateProps = function(t) {
                        var n = this,
                            e = t.drag,
                            i = void 0 !== e && e,
                            o = t.dragDirectionLock,
                            a = void 0 !== o && o,
                            s = t.dragPropagation,
                            u = void 0 !== s && s,
                            c = t.dragConstraints,
                            f = void 0 !== c && c,
                            l = t.dragElastic,
                            p = void 0 === l || l,
                            d = t.dragMomentum,
                            h = void 0 === d || d,
                            v = Object(r.__rest)(t, ["drag", "dragDirectionLock", "dragPropagation", "dragConstraints", "dragElastic", "dragMomentum"]);
                        this.props = Object(r.__assign)({
                            drag: i,
                            dragDirectionLock: a,
                            dragPropagation: u,
                            dragConstraints: f,
                            dragElastic: p,
                            dragMomentum: h
                        }, v);
                        var g = v._dragValueX,
                            m = v._dragValueY,
                            y = v.dragOriginX,
                            b = v.dragOriginY;
                        y && (this.origin.x = y), b && (this.origin.y = b), rn((function(t) {
                            if (sn(t, i, n.currentDirection)) {
                                var e = "x" === t ? g : m;
                                n.setPoint(t, e || n.values.get(t, 0))
                            }
                        })), this.constraintsNeedResolution = Qt(f), this.constraints = this.constraintsNeedResolution ? this.constraints || !1 : f
                    }, t.prototype.applyConstraintsToPoint = function(t) {
                        var n = this;
                        return void 0 === t && (t = this.constraints), rn((function(e) {
                            var r = n.point[e];
                            r && !r.isAnimating() && ln(e, r, t, 0)
                        }))
                    }, t.prototype.animateDragEnd = function(t) {
                        var n = this,
                            e = this.props,
                            i = e.drag,
                            o = e.dragMomentum,
                            a = e.dragElastic,
                            s = e.dragTransition,
                            u = e._dragValueX,
                            c = e._dragValueY,
                            f = e._dragTransitionControls,
                            l = rn((function(e) {
                                var l;
                                if (sn(e, i, n.currentDirection)) {
                                    var p = n.constraints ? an(e, n.constraints) : {},
                                        d = a ? 200 : 1e6,
                                        h = a ? 40 : 1e7,
                                        v = f || n.controls,
                                        g = Object(r.__assign)(Object(r.__assign)({
                                            type: "inertia",
                                            velocity: o ? t[e] : 0,
                                            bounceStiffness: d,
                                            bounceDamping: h,
                                            timeConstant: 750,
                                            restDelta: 1
                                        }, s), p),
                                        m = "x" === e ? u : c;
                                    return m ? tt(e, m, 0, g) : v.start(((l = {})[e] = 0, l.transition = g, l))
                                }
                            }));
                        return Promise.all(l).then((function() {
                            n.recordBoxInfo(n.constraints), n.scalePoint();
                            var t = n.props.onDragTransitionEnd;
                            t && t()
                        }))
                    }, t.prototype.scalePoint = function() {
                        var t = this,
                            n = this.props,
                            e = n.dragConstraints,
                            r = n.transformPagePoint;
                        if (Qt(e)) {
                            var i = cn(e, r),
                                o = cn(this.ref, r),
                                a = function(n, e) {
                                    var r = t.point[n];
                                    if (r) {
                                        if (r.isAnimating()) return r.stop(), void t.recordBoxInfo();
                                        var a = t.prevConstraintsBox[e] ? (i[e] - o[e]) / t.prevConstraintsBox[e] : 1;
                                        r.set(t.prevConstraintsBox[n] * a)
                                    }
                                };
                            a("x", "width"), a("y", "height")
                        }
                    }, t.prototype.mount = function(t) {
                        var n = this,
                            e = St(t, "pointerdown", (function(t) {
                                var e = n.props,
                                    r = e.drag,
                                    i = e.dragListener;
                                r && (void 0 === i || i) && n.start(t)
                            })),
                            r = dt(window, "resize", (function() {
                                return n.scalePoint()
                            }));
                        if (this.constraintsNeedResolution) {
                            var i = this.props,
                                o = i.dragConstraints,
                                a = i.transformPagePoint,
                                s = un(o, this.ref, this.point, a);
                            this.applyConstraintsToPoint(s), this.recordBoxInfo(s)
                        } else !this.isDragging && this.constraints && this.applyConstraintsToPoint();
                        return function() {
                            e && e(), r && r(), n.cancelDrag()
                        }
                    }, t
                }();

            function rn(t) {
                return [t("x"), t("y")]
            }

            function on(t, n) {
                return Object(r.__assign)(Object(r.__assign)({}, t), {
                    point: {
                        x: n.x ? n.x.get() : 0,
                        y: n.y ? n.y.get() : 0
                    }
                })
            }

            function an(t, n) {
                var e = n.top,
                    r = n.right,
                    i = n.bottom,
                    o = n.left;
                return "x" === t ? {
                    min: o,
                    max: r
                } : {
                    min: e,
                    max: i
                }
            }

            function sn(t, n, e) {
                return (!0 === n || n === t) && (null === e || e === t)
            }

            function un(t, n, e, r) {
                Object(u.a)(null !== t.current && null !== n.current, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
                var i = cn(t, r),
                    o = cn(n, r),
                    a = i.left - o.left + fn(e.x),
                    s = i.top - o.top + fn(e.y);
                return {
                    top: s,
                    left: a,
                    right: i.width - o.width + a,
                    bottom: i.height - o.height + s
                }
            }

            function cn(t, n) {
                var e = t.current.getBoundingClientRect(),
                    r = n({
                        x: e.left,
                        y: e.top
                    }),
                    i = r.x,
                    o = r.y,
                    a = n({
                        x: e.width,
                        y: e.height
                    });
                return {
                    left: i,
                    top: o,
                    width: a.x,
                    height: a.y
                }
            }

            function fn(t) {
                return t ? t.get() : 0
            }

            function ln(t, n, e, r) {
                var i = n instanceof d ? n.get() : n;
                if (!e) return i;
                var o = an(t, e),
                    a = o.min,
                    s = o.max;
                return void 0 !== a && i < a ? i = r ? pn(a, i, r) : Math.max(a, i) : void 0 !== s && i > s && (i = r ? pn(s, i, r) : Math.min(s, i)), n instanceof d && n.set(i), i
            }

            function pn(t, n, e) {
                var r = "number" === typeof e ? e : .35;
                return Object(a.f)(t, n, r)
            }
            var dn = {
                key: "drag",
                shouldRender: function(t) {
                    return !!t.drag
                },
                Component: Jt((function(t) {
                    var n = t.innerRef,
                        e = t.values,
                        o = t.controls;
                    return function(t, n, e, o) {
                        var a = t.dragControls,
                            s = Object(i.useContext)(lt).transformPagePoint,
                            u = v((function() {
                                return new en({
                                    ref: n,
                                    values: e,
                                    controls: o
                                })
                            }));
                        u.updateProps(Object(r.__assign)(Object(r.__assign)({}, t), {
                            transformPagePoint: s
                        })), Object(i.useEffect)((function() {
                            return a && a.subscribe(u)
                        }), [u]), Object(i.useEffect)((function() {
                            return u.mount(n.current)
                        }), [])
                    }(Object(r.__rest)(t, ["innerRef", "values", "controls"]), n, e, o)
                }))
            };

            function hn(t) {
                return "string" === typeof t && t.startsWith("var(--")
            }
            var vn = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
            var gn = 4;

            function mn(t, n, e) {
                void 0 === e && (e = 1), Object(u.a)(e <= gn, 'Max CSS variable fallback depth detected in property "' + t + '". This may indicate a circular fallback dependency.');
                var r = function(t) {
                        var n = vn.exec(t);
                        return n ? [n[1], n[2]] : [, ]
                    }(t),
                    i = r[0],
                    o = r[1];
                if (i) {
                    var a = window.getComputedStyle(n).getPropertyValue(i);
                    return a || (hn(o) ? mn(o, n, e + 1) : o)
                }
            }
            var yn, bn = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y"]),
                On = function(t) {
                    return bn.has(t)
                },
                jn = function(t) {
                    return Object.keys(t).some(On)
                },
                wn = function(t, n) {
                    t.set(n, !1), t.set(n)
                },
                _n = function(t) {
                    return t === c.g || t === c.j
                };
            ! function(t) {
                t.width = "width", t.height = "height", t.left = "left", t.right = "right", t.top = "top", t.bottom = "bottom"
            }(yn || (yn = {}));
            var En = function(t, n) {
                    return parseFloat(t.split(", ")[n])
                },
                xn = function(t, n) {
                    return function(e, r) {
                        var i = r.transform;
                        if ("none" === i || !i) return 0;
                        var o = i.match(/^matrix3d\((.+)\)$/);
                        if (o) return En(o[1], n);
                        var a = i.match(/^matrix\((.+)\)$/);
                        return En(a[1], t)
                    }
                },
                Pn = new Set(["x", "y", "z"]),
                Cn = s.f.filter((function(t) {
                    return !Pn.has(t)
                }));
            var Tn = {
                    width: function(t) {
                        return t.width
                    },
                    height: function(t) {
                        return t.height
                    },
                    top: function(t, n) {
                        var e = n.top;
                        return parseFloat(e)
                    },
                    left: function(t, n) {
                        var e = n.left;
                        return parseFloat(e)
                    },
                    bottom: function(t, n) {
                        var e = t.height,
                            r = n.top;
                        return parseFloat(r) + e
                    },
                    right: function(t, n) {
                        var e = t.width,
                            r = n.left;
                        return parseFloat(r) + e
                    },
                    x: xn(4, 13),
                    y: xn(5, 14)
                },
                Sn = function(t, n, e, i) {
                    void 0 === i && (i = {}), e = Object(r.__assign)({}, e), i = Object(r.__assign)({}, i);
                    var o = n.current,
                        a = Object(s.d)(o),
                        f = Object.keys(e).filter(On),
                        l = [],
                        p = !1,
                        d = f.reduce((function(n, r) {
                            var o = t.get(r);
                            if (!o) return n;
                            var s, f = o.get(),
                                d = e[r],
                                h = F(f);
                            if (D(d))
                                for (var v = d.length, g = null === d[0] ? 1 : 0; g < v; g++) s ? Object(u.a)(F(d[g]) === s, "All keyframes must be of the same type") : (s = F(d[g]), Object(u.a)(s === h || _n(h) && _n(s), "Keyframes must be of the same dimension as the current value"));
                            else s = F(d);
                            if (h !== s)
                                if (_n(h) && _n(s)) {
                                    var m = o.get();
                                    "string" === typeof m && o.set(parseFloat(m)), "string" === typeof d ? e[r] = parseFloat(d) : Array.isArray(d) && s === c.j && (e[r] = d.map(parseFloat))
                                } else p || (l = function(t, n) {
                                    var e = [];
                                    return Cn.forEach((function(n) {
                                        var r = t.get(n);
                                        void 0 !== r && (e.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0))
                                    })), e.length && n.render(), e
                                }(t, a), p = !0), n.push(r), i[r] = void 0 !== i[r] ? i[r] : e[r], wn(o, d);
                            return n
                        }), []);
                    if (d.length) {
                        var h = function(t, n, e, r, i) {
                            var o = e.getBoundingClientRect(),
                                a = getComputedStyle(e),
                                s = a.display,
                                u = {
                                    top: a.top,
                                    left: a.left,
                                    bottom: a.bottom,
                                    right: a.right,
                                    transform: a.transform
                                };
                            "none" === s && r.set("display", t.display || "block"), r.render();
                            var c = e.getBoundingClientRect();
                            return i.forEach((function(e) {
                                var r = n.get(e);
                                wn(r, Tn[e](o, u)), t[e] = Tn[e](c, a)
                            })), t
                        }(e, t, o, a, d);
                        return l.length && l.forEach((function(n) {
                            var e = n[0],
                                r = n[1];
                            t.get(e).set(r)
                        })), a.render(), {
                            target: h,
                            transitionEnd: i
                        }
                    }
                    return {
                        target: e,
                        transitionEnd: i
                    }
                };
            var An = function(t, n) {
                return function(e, i) {
                    var o = function(t, n, e, i) {
                        var o = Object(r.__rest)(e, []),
                            a = n.current;
                        if (!(a instanceof HTMLElement)) return {
                            target: o,
                            transitionEnd: i
                        };
                        for (var s in i && (i = Object(r.__assign)({}, i)), t.forEach((function(t) {
                                var n = t.get();
                                if (hn(n)) {
                                    var e = mn(n, a);
                                    e && t.set(e)
                                }
                            })), o) {
                            var u = o[s];
                            if (hn(u)) {
                                var c = mn(u, a);
                                c && (o[s] = c, i && void 0 === i[s] && (i[s] = u))
                            }
                        }
                        return {
                            target: o,
                            transitionEnd: i
                        }
                    }(t, n, e, i);
                    return e = o.target, i = o.transitionEnd,
                        function(t, n, e, r) {
                            return jn(e) ? Sn(t, n, e, r) : {
                                target: e,
                                transitionEnd: r
                            }
                        }(t, n, e, i)
                }
            };
            var Vn, kn, Dn = Object(i.createContext)(null);
            ! function(t) {
                t.Prepare = "prepare", t.Read = "read", t.Render = "render"
            }(kn || (kn = {}));
            var Mn = [kn.Prepare, kn.Read, kn.Render].reduce((function(t, n) {
                    return t[n] = [], t
                }), {}),
                Rn = !1;

            function Ln(t) {
                for (var n = t.length, e = 0; e < n; e++) t[e]();
                t.length = 0
            }
            var Bn = function(t) {
                    return function(n) {
                        n && (Rn = !0, Mn[t].push(n))
                    }
                },
                Fn = ((Vn = {})[kn.Prepare] = Bn(kn.Prepare), Vn[kn.Read] = Bn(kn.Read), Vn[kn.Render] = Bn(kn.Render), Vn.flush = function() {
                    Rn && (Ln(Mn.prepare), Ln(Mn.read), Ln(Mn.render), Rn = !1)
                }, Vn);
            var Hn = {
                    duration: .8,
                    ease: [.45, .05, .19, 1]
                },
                In = {
                    type: "spring",
                    stiffness: 500,
                    damping: 25,
                    restDelta: .5,
                    restSpeed: 10
                };
            var Nn = {
                x: {
                    id: "x",
                    size: "width",
                    min: "left",
                    max: "right",
                    origin: "originX"
                },
                y: {
                    id: "y",
                    size: "height",
                    min: "top",
                    max: "bottom",
                    origin: "originY"
                }
            };

            function Xn(t, n) {
                return (t + n) / 2
            }

            function Yn(t, n, e) {
                var r, i = t[e.size] - n[e.size],
                    o = .5;
                return i && (t[e.min] === n[e.min] ? o = 0 : t[e.max] === n[e.max] && (o = 1)), (r = {})[e.size] = i, r[e.origin] = o, r[e.id] = .5 === o ? Xn(t[e.min], t[e.max]) - Xn(n[e.min], n[e.max]) : 0, r
            }
            var Un = {
                    getLayout: function(t) {
                        return t.offset
                    },
                    measure: function(t) {
                        var n = t.offsetLeft,
                            e = t.offsetTop,
                            r = t.offsetWidth,
                            i = t.offsetHeight;
                        return {
                            left: n,
                            top: e,
                            right: n + r,
                            bottom: e + i,
                            width: r,
                            height: i
                        }
                    }
                },
                zn = {
                    getLayout: function(t) {
                        return t.boundingBox
                    },
                    measure: function(t) {
                        var n = t.getBoundingClientRect();
                        return {
                            left: n.left,
                            top: n.top,
                            width: n.width,
                            height: n.height,
                            right: n.right,
                            bottom: n.bottom
                        }
                    }
                };

            function Gn(t) {
                return window.getComputedStyle(t).position
            }

            function Wn(t) {
                return "width" === t || "height" === t
            }
            var Zn, qn = {
                    key: "layout",
                    shouldRender: function(t) {
                        var n = t.positionTransition,
                            e = t.layoutTransition;
                        return Object(u.a)(!(n && e), "Don't set both positionTransition and layoutTransition on the same component"), "undefined" !== typeof window && !(!n && !e)
                    },
                    Component: function(t) {
                        function n() {
                            return null !== t && t.apply(this, arguments) || this
                        }
                        return Object(r.__extends)(n, t), n.prototype.getSnapshotBeforeUpdate = function() {
                            var t = this.props,
                                n = t.innerRef,
                                e = t.positionTransition,
                                i = t.values,
                                o = t.controls,
                                a = n.current;
                            if (function(t) {
                                    return t instanceof HTMLElement
                                }(a)) {
                                var u, c, f, l = function(t) {
                                        var n = t.layoutTransition,
                                            e = t.positionTransition;
                                        return n || e
                                    }(this.props),
                                    p = !!e,
                                    d = Gn(a),
                                    h = {
                                        offset: Un.measure(a),
                                        boundingBox: zn.measure(a)
                                    };
                                return Fn.prepare((function() {
                                    u = a.style.transform, a.style.transform = ""
                                })), Fn.read((function() {
                                    c = {
                                        offset: Un.measure(a),
                                        boundingBox: zn.measure(a)
                                    };
                                    var t = Gn(a);
                                    f = function(t, n, e) {
                                        return e && t === n ? Un : zn
                                    }(d, t, p)
                                })), Fn.render((function() {
                                    var t = function(t, n) {
                                        return Object(r.__assign)(Object(r.__assign)({}, Yn(t, n, Nn.x)), Yn(t, n, Nn.y))
                                    }(f.getLayout(h), f.getLayout(c));
                                    if (t.x || t.y || t.width || t.height) {
                                        Object(s.d)(a).set({
                                            originX: t.originX,
                                            originY: t.originY
                                        }), E();
                                        var n = {},
                                            e = {},
                                            d = function(t) {
                                                return "function" === typeof t
                                            }(l) ? l({
                                                delta: t
                                            }) : l;
                                        v("left", "x", 0, t.x), v("top", "y", 0, t.y), p || (v("width", "scaleX", 1, h.boundingBox.width / c.boundingBox.width), v("height", "scaleY", 1, h.boundingBox.height / c.boundingBox.height)), n.transition = e, d && o.start(n), x()
                                    } else u && (a.style.transform = u);

                                    function v(o, a, s, u) {
                                        var c = Wn(o) ? o : a;
                                        if (t[c]) {
                                            var l = "boolean" === typeof d ? Object(r.__assign)({}, function(t) {
                                                    return t ? In : Hn
                                                }(p)) : d,
                                                h = i.get(a, s),
                                                v = h.getVelocity();
                                            e[a] = l[a] ? Object(r.__assign)({}, l[a]) : Object(r.__assign)({}, l), void 0 === e[a].velocity && (e[a].velocity = v || 0), n[a] = s;
                                            var g = Wn(o) || f !== Un ? 0 : h.get();
                                            h.set(u + g)
                                        }
                                    }
                                })), null
                            }
                        }, n.prototype.componentDidUpdate = function() {
                            Fn.flush()
                        }, n.prototype.render = function() {
                            return null
                        }, n.contextType = Dn, n
                    }(i.Component)
                },
                Jn = new Set(["initial", "animate", "exit", "style", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "static", "positionTransition", "layoutTransition", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onDirectionLock", "onDragTransitionEnd", "drag", "dragControls", "dragListener", "dragConstraints", "dragDirectionLock", "dragElastic", "dragMomentum", "dragPropagation", "dragTransition", "_dragValueX", "_dragValueY", "_dragTransitionControls", "dragOriginX", "dragOriginY", "onPan", "onPanStart", "onPanEnd", "onPanSessionStart", "onTap", "onTapStart", "onTapCancel", "whileHover", "whileTap", "onHoverEnd", "onHoverStart"]);

            function Kn(t) {
                return Jn.has(t)
            }! function(t) {
                t.Target = "Target", t.VariantLabel = "VariantLabel", t.AnimationSubscription = "AnimationSubscription"
            }(Zn || (Zn = {}));
            var $n = function(t, n) {
                return void 0 !== n && (Array.isArray(t) && Array.isArray(n) ? ! function(t, n) {
                    if (null === n) return !1;
                    var e = n.length;
                    if (e !== t.length) return !1;
                    for (var r = 0; r < e; r++)
                        if (n[r] !== t[r]) return !1;
                    return !0
                }(n, t) : t !== n)
            };

            function Qn(t, n) {
                void 0 === n && (n = !1);
                t.transition;
                var e = t.transitionEnd,
                    i = Object(r.__rest)(t, ["transition", "transitionEnd"]);
                return n ? Object(r.__assign)(Object(r.__assign)({}, i), e) : i
            }
            var te, ne, ee = function(t) {
                    var n, e = t instanceof d ? t.get() : t;
                    return Array.from(new Set((n = e) ? Array.isArray(n) ? n : [n] : []))
                },
                re = function(t) {
                    return [t.join(",")]
                },
                ie = function(t, n) {
                    return t.join(",") !== n.join(",")
                };
            var oe = ((te = {})[Zn.Target] = Jt((function(t) {
                    return function(t, n, e, o) {
                        var a = Object(i.useRef)(!0),
                            s = Object(i.useRef)(null);
                        s.current || (s.current = Qn(t, !0)), Object(i.useEffect)((function() {
                            var i = {},
                                u = Qn(t),
                                c = Qn(t, !0);
                            for (var f in u) {
                                var l = a.current && (!e.has(f) || e.get(f).get() !== c[f]),
                                    p = null !== c[f],
                                    d = $n(s.current[f], c[f]);
                                p && (d || l) && (i[f] = u[f])
                            }
                            a.current = !1, s.current = Object(r.__assign)(Object(r.__assign)({}, s.current), c), Object.keys(i).length && n.start(Object(r.__assign)(Object(r.__assign)({}, i), {
                                transition: t.transition || o,
                                transitionEnd: t.transitionEnd
                            }))
                        }), [t])
                    }(t.animate, t.controls, t.values, t.transition)
                })), te[Zn.VariantLabel] = Jt((function(t) {
                    var n = t.animate,
                        e = t.inherit,
                        r = void 0 === e || e,
                        o = t.controls;
                    return function(t, n, e, r) {
                        var o = ee(n),
                            a = Object(i.useContext)(rt),
                            s = a.hasMounted && a.hasMounted.current,
                            u = Object(i.useRef)(!1);
                        Object(i.useEffect)((function() {
                            var n = !1;
                            e ? (n = !!s, o = ee(a.animate)) : n = u.current || ie(ee(t), o), n && r.start(o), u.current = !0
                        }), re(o))
                    }(t.initial, n, r, o)
                })), te[Zn.AnimationSubscription] = Jt((function(t) {
                    return function(t, n) {
                        var e = Object(i.useMemo)((function() {
                            return t.subscribe(n)
                        }), [t]);
                        Object(i.useEffect)((function() {
                            return function() {
                                e && e()
                            }
                        }), [e])
                    }(t.animate, t.controls)
                })), te),
                ae = function(t) {
                    return t.animate instanceof et
                },
                se = ["initial", "animate", "whileTap", "whileHover"],
                ue = ((ne = {})[Zn.Target] = function(t) {
                    return void 0 !== t.animate && (n = t.animate, !(Array.isArray(n) || "string" === typeof n)) && !ae(t);
                    var n
                }, ne[Zn.VariantLabel] = function(t) {
                    return void 0 !== t.variants || se.some((function(n) {
                        return "string" === typeof t[n]
                    }))
                }, ne[Zn.AnimationSubscription] = ae, ne),
                ce = function(t) {
                    var n = void 0;
                    for (var e in Zn) ue[e](t) && (n = e);
                    return n ? oe[n] : void 0
                },
                fe = {
                    key: "exit",
                    shouldRender: function(t, n) {
                        var e = t.exit,
                            r = !!n.exitProps,
                            i = !!e;
                        return Object(u.a)(!r || r && i, "No exit prop defined on a child of AnimatePresence."), r && i
                    },
                    Component: Jt((function(t) {
                        var n = t.animate,
                            e = t.controls,
                            o = t.parentContext,
                            a = t.exit,
                            s = o.exitProps,
                            u = Object(i.useRef)(!1);
                        if (s && a) {
                            var c = s.isExiting,
                                f = s.custom,
                                l = s.onExitComplete;
                            Object(i.useEffect)((function() {
                                c ? (!u.current && a && (e.setProps(Object(r.__assign)(Object(r.__assign)({}, t), {
                                    custom: void 0 !== f ? f : t.custom
                                })), e.start(a).then(l)), u.current = !0) : !u.current || !n || n instanceof et || e.start(n), c || (u.current = !1)
                            }), [c])
                        }
                    }))
                },
                le = function(t) {
                    return !Kn(t)
                };
            try {
                var pe = e("9uj6").default;
                le = function(t) {
                    return t.startsWith("on") ? !Kn(t) : pe(t)
                }
            } catch (Vn) {}
            var de = function(t, n) {
                    var e = T(t),
                        i = Object(s.a)(e, void 0, void 0, void 0, void 0, !1);
                    return i.style = Object(r.__assign)(Object(r.__assign)({}, n), i.style), i
                },
                he = [qn, dn, $t, fe],
                ve = he.length;

            function ge(t) {
                var n = "string" === typeof t,
                    e = n && -1 !== ft.indexOf(t);
                return {
                    renderComponent: function(o, a, s, u, c) {
                        var f = n ? function(t) {
                                var n = {};
                                for (var e in t) le(e) && (n[e] = t[e]);
                                return n
                            }(u) : u,
                            l = e ? de(s, a) : {
                                style: V(s, a, c)
                            };
                        return Object(i.createElement)(t, Object(r.__assign)(Object(r.__assign)(Object(r.__assign)({}, f), {
                            ref: o
                        }), l))
                    },
                    loadFunctionalityComponents: function(t, n, e, o, a, s) {
                        var u = [],
                            c = ce(e);
                        c && u.push(Object(i.createElement)(c, {
                            key: "animation",
                            initial: e.initial,
                            animate: e.animate,
                            variants: e.variants,
                            transition: e.transition,
                            controls: a,
                            inherit: s,
                            values: n
                        }));
                        for (var f = 0; f < ve; f++) {
                            var l = he[f],
                                p = l.shouldRender,
                                d = l.key,
                                h = l.Component;
                            p(e, o) && u.push(Object(i.createElement)(h, Object(r.__assign)({
                                key: d
                            }, e, {
                                parentContext: o,
                                values: n,
                                controls: a,
                                innerRef: t
                            })))
                        }
                        return u
                    },
                    getValueControlsConfig: function(t, n) {
                        return {
                            values: n,
                            readValueFromSource: function(n) {
                                return Object(s.d)(t.current).get(n)
                            },
                            makeTargetAnimatable: An(n, t)
                        }
                    }
                }
            }
            var me = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "webview"].reduce((function(t, n) {
                    var e = ge(n);
                    return t[n] = ct(e), t
                }), {}),
                ye = ft.reduce((function(t, n) {
                    return t[n] = ct(ge(n)), t
                }), {}),
                be = Object(r.__assign)(Object(r.__assign)({
                    custom: function(t) {
                        return ct(ge(t))
                    }
                }, me), ye);

            function Oe(t) {
                return v((function() {
                    return h(t)
                }))
            }

            function je(t, n) {
                void 0 === n && (n = {});
                var e = Object(i.useRef)(null),
                    o = Oe(m(t) ? t.get() : t);
                return Object(i.useMemo)((function() {
                        return o.attach((function(t, i) {
                            return e.current && e.current.stop(), e.current = Object(f.e)(Object(r.__assign)({
                                from: o.get(),
                                to: t,
                                velocity: o.getVelocity()
                            }, n)).start(i), o.get()
                        }))
                    }), Object.values(n)),
                    function(t, n) {
                        Object(i.useEffect)((function() {
                            return m(t) ? t.onChange(n) : void 0
                        }), [t])
                    }(t, (function(t) {
                        return o.set(parseFloat(t))
                    })), o
            }
            var we = h(0),
                _e = h(0),
                Ee = h(0),
                xe = h(0),
                Pe = function(t, n, e) {
                    e.set(n && t ? t / n : 0)
                },
                Ce = !1,
                Te = function() {
                    if (Ce = !0, "undefined" !== typeof window) {
                        var t = function() {
                            var t = window.pageXOffset,
                                n = window.pageYOffset;
                            we.set(t), _e.set(n), Pe(t, document.body.clientWidth - window.innerWidth, Ee), Pe(n, document.body.clientHeight - window.innerHeight, xe)
                        };
                        t(), window.addEventListener("resize", t), window.addEventListener("scroll", t, {
                            passive: !0
                        })
                    }
                },
                Se = {
                    scrollX: we,
                    scrollY: _e,
                    scrollXProgress: Ee,
                    scrollYProgress: xe
                };

            function Ae() {
                return Ce || Te(), Se
            }

            function Ve() {
                var t = v((function() {
                    return new et
                }));
                return Object(i.useEffect)((function() {
                    return t.mount(),
                        function() {
                            return t.unmount()
                        }
                }), []), t
            }! function() {
                function t() {
                    this.componentControls = new Set
                }
                t.prototype.subscribe = function(t) {
                    var n = this;
                    return this.componentControls.add(t),
                        function() {
                            return n.componentControls.delete(t)
                        }
                }, t.prototype.start = function(t, n) {
                    this.componentControls.forEach((function(e) {
                        e.start(t.nativeEvent || t, n)
                    }))
                }
            }();
            var ke = h(null);
            if ("undefined" !== typeof window)
                if (window.matchMedia) {
                    var De = window.matchMedia("(prefers-reduced-motion)"),
                        Me = function() {
                            return ke.set(De.matches)
                        };
                    De.addListener(Me), Me()
                } else ke.set(!1)
        }
    }
]);

(self.webpackJsonp = self.webpackJsonp || []).push([
    [22], {
        "C/Fq": function(e, t, i) {
            "use strict";
            i.d(t, "a", (function() {
                return s
            })), i.d(t, "d", (function() {
                return o
            })), i.d(t, "b", (function() {
                return l
            })), i.d(t, "c", (function() {
                return h
            })), i.d(t, "e", (function() {
                return u
            })), i.d(t, "f", (function() {
                return p
            }));
            var a = i("Wgwc"),
                r = i.n(a),
                n = "DD MMM YYYY";

            function s(e) {
                var t = r()().subtract(1, "week");
                switch (e._type) {
                    case "post":
                        var i = r()(e.publishedAt);
                        return ["Published", i.format(n), i.isAfter(t)];
                    case "global-page":
                    case "page":
                        var a = r()(e.updatedAt);
                        return ["Updated", a.format(n), a.isAfter(t)];
                    default:
                        return ["", "", !1]
                }
            }

            function o(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? "https://jmswrnr.com" : "";
                switch (e._type) {
                    case "post":
                        return "".concat(t, "/blog/").concat(e.slug);
                    case "page":
                        return "".concat(t, "/").concat(e.type, "/").concat(e.slug);
                    case "page-category":
                        return "".concat(t, "/").concat(e.type, "/category/").concat(e.slug);
                    case "post-tag":
                        return "".concat(t, "/blog/tag/").concat(e.slug);
                    case "global-page":
                        return "".concat(t, "/").concat(e._id);
                    default:
                        return "#"
                }
            }

            function c(e) {
                switch (e._type) {
                    case "post":
                        return "/blog/[post_id]";
                    case "post-tag":
                        return "/blog/tag/[tag_id]";
                    case "page":
                        return "/".concat(e.type, "/[page_slug]");
                    case "page-category":
                        return "/".concat(e.type, "/category/[category_slug]");
                    case "global-page":
                        return "/".concat(e._id);
                    default:
                        return "#"
                }
            }

            function l(e) {
                return {
                    href: c(e),
                    as: o(e)
                }
            }

            function h(e) {
                switch (e._type) {
                    case "post":
                        return "Article";
                    case "page":
                        return e.category ? e.category.title : "Unknown";
                    case "global-page":
                        return "Page";
                    default:
                        return "Unknown"
                }
            }

            function u(e, t) {
                return Math.random() * (t - e) + e
            }

            function p(e) {
                return e[(t = 0, i = e.length - 1, Math.floor(Math.random() * (i - t + 1)) + t)];
                var t, i
            }
        },
        ODXe: function(e, t, i) {
            "use strict";

            function a(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) {
                        var i = [],
                            a = !0,
                            r = !1,
                            n = void 0;
                        try {
                            for (var s, o = e[Symbol.iterator](); !(a = (s = o.next()).done) && (i.push(s.value), !t || i.length !== t); a = !0);
                        } catch (c) {
                            r = !0, n = c
                        } finally {
                            try {
                                a || null == o.return || o.return()
                            } finally {
                                if (r) throw n
                            }
                        }
                        return i
                    }
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }()
            }
            i.d(t, "a", (function() {
                return a
            }))
        },
        XdsU: function(e, t, i) {
            "use strict";
            i.r(t);
            var a = i("ODXe"),
                r = i("1OyB"),
                n = i("rePB"),
                s = i("TnI4"),
                o = i("MnML"),
                c = i("8IfN"),
                l = i("w+kJ"),
                h = i("D10d"),
                u = i("E3/K"),
                p = i("psXj"),
                d = i("+8Os"),
                f = i("6deg"),
                m = i("wM9x"),
                v = i("rS3n"),
                g = i("xvF/");

            function y(e, t, i, a, r, n, s, o, c, l) {
                if ((l = void 0 !== l ? l : f.u) !== f.u && l !== f.v) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
                void 0 === i && l === f.u && (i = f.Bc), void 0 === i && l === f.v && (i = f.wc), g.a.call(this, null, a, r, n, s, o, l, i, c), this.image = {
                    width: e,
                    height: t
                }, this.magFilter = void 0 !== s ? s : f.eb, this.minFilter = void 0 !== o ? o : f.eb, this.flipY = !1, this.generateMipmaps = !1
            }
            y.prototype = Object.create(g.a.prototype), y.prototype.constructor = y, y.prototype.isDepthTexture = !0;
            var b = i("qdxW"),
                w = i("XPv6"),
                x = i("dt5g"),
                M = i("Ncdj"),
                S = i("AIox"),
                T = i("cuij"),
                A = i("9eRv");

            function C(e) {
                A.a.call(this), this.type = "MeshPhongMaterial", this.color = new T.a(16777215), this.specular = new T.a(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new T.a(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = f.qc, this.normalScale = new s.a(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = f.db, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(e)
            }
            C.prototype = Object.create(A.a.prototype), C.prototype.constructor = C, C.prototype.isMeshPhongMaterial = !0, C.prototype.copy = function(e) {
                return A.a.prototype.copy.call(this, e), this.color.copy(e.color), this.specular.copy(e.specular), this.shininess = e.shininess, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this
            };
            var _ = i("p1p1");

            function O(e, t) {
                _.a.call(this), this.type = "Light", this.color = new T.a(e), this.intensity = void 0 !== t ? t : 1, this.receiveShadow = void 0
            }
            O.prototype = Object.assign(Object.create(_.a.prototype), {
                constructor: O,
                isLight: !0,
                copy: function(e) {
                    return _.a.prototype.copy.call(this, e), this.color.copy(e.color), this.intensity = e.intensity, this
                },
                toJSON: function(e) {
                    var t = _.a.prototype.toJSON.call(this, e);
                    return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, void 0 !== this.groundColor && (t.object.groundColor = this.groundColor.getHex()), void 0 !== this.distance && (t.object.distance = this.distance), void 0 !== this.angle && (t.object.angle = this.angle), void 0 !== this.decay && (t.object.decay = this.decay), void 0 !== this.penumbra && (t.object.penumbra = this.penumbra), void 0 !== this.shadow && (t.object.shadow = this.shadow.toJSON()), t
                }
            });
            var L = i("3+m9"),
                E = i("CNRw"),
                R = i("LxkE");

            function I(e) {
                this.camera = e, this.bias = 0, this.radius = 1, this.mapSize = new s.a(512, 512), this.map = null, this.mapPass = null, this.matrix = new L.a, this._frustum = new R.a, this._frameExtents = new s.a(1, 1), this._viewportCount = 1, this._viewports = [new E.a(0, 0, 1, 1)]
            }

            function P() {
                I.call(this, new d.a(90, 1, .5, 500)), this._frameExtents = new s.a(4, 2), this._viewportCount = 6, this._viewports = [new E.a(2, 1, 1, 1), new E.a(0, 1, 1, 1), new E.a(3, 1, 1, 1), new E.a(1, 1, 1, 1), new E.a(3, 0, 1, 1), new E.a(1, 0, 1, 1)], this._cubeDirections = [new l.a(1, 0, 0), new l.a(-1, 0, 0), new l.a(0, 0, 1), new l.a(0, 0, -1), new l.a(0, 1, 0), new l.a(0, -1, 0)], this._cubeUps = [new l.a(0, 1, 0), new l.a(0, 1, 0), new l.a(0, 1, 0), new l.a(0, 1, 0), new l.a(0, 0, 1), new l.a(0, 0, -1)]
            }

            function j(e, t, i, a) {
                O.call(this, e, t), this.type = "PointLight", Object.defineProperty(this, "power", {
                    get: function() {
                        return 4 * this.intensity * Math.PI
                    },
                    set: function(e) {
                        this.intensity = e / (4 * Math.PI)
                    }
                }), this.distance = void 0 !== i ? i : 0, this.decay = void 0 !== a ? a : 1, this.shadow = new P
            }
            Object.assign(I.prototype, {
                _projScreenMatrix: new L.a,
                _lightPositionWorld: new l.a,
                _lookTarget: new l.a,
                getViewportCount: function() {
                    return this._viewportCount
                },
                getFrustum: function() {
                    return this._frustum
                },
                updateMatrices: function(e) {
                    var t = this.camera,
                        i = this.matrix,
                        a = this._projScreenMatrix,
                        r = this._lookTarget,
                        n = this._lightPositionWorld;
                    n.setFromMatrixPosition(e.matrixWorld), t.position.copy(n), r.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(r), t.updateMatrixWorld(), a.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromMatrix(a), i.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), i.multiply(t.projectionMatrix), i.multiply(t.matrixWorldInverse)
                },
                getViewport: function(e) {
                    return this._viewports[e]
                },
                getFrameExtents: function() {
                    return this._frameExtents
                },
                copy: function(e) {
                    return this.camera = e.camera.clone(), this.bias = e.bias, this.radius = e.radius, this.mapSize.copy(e.mapSize), this
                },
                clone: function() {
                    return (new this.constructor).copy(this)
                },
                toJSON: function() {
                    var e = {};
                    return 0 !== this.bias && (e.bias = this.bias), 1 !== this.radius && (e.radius = this.radius), 512 === this.mapSize.x && 512 === this.mapSize.y || (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e
                }
            }), P.prototype = Object.assign(Object.create(I.prototype), {
                constructor: P,
                isPointLightShadow: !0,
                updateMatrices: function(e, t) {
                    void 0 === t && (t = 0);
                    var i = this.camera,
                        a = this.matrix,
                        r = this._lightPositionWorld,
                        n = this._lookTarget,
                        s = this._projScreenMatrix;
                    r.setFromMatrixPosition(e.matrixWorld), i.position.copy(r), n.copy(i.position), n.add(this._cubeDirections[t]), i.up.copy(this._cubeUps[t]), i.lookAt(n), i.updateMatrixWorld(), a.makeTranslation(-r.x, -r.y, -r.z), s.multiplyMatrices(i.projectionMatrix, i.matrixWorldInverse), this._frustum.setFromMatrix(s)
                }
            }), j.prototype = Object.assign(Object.create(O.prototype), {
                constructor: j,
                isPointLight: !0,
                copy: function(e) {
                    return O.prototype.copy.call(this, e), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this
                }
            });
            var D = i("UKne"),
                N = i("zfxg"),
                k = i("nKeq");

            function U(e, t, i, a, r, n, s, o) {
                D.a.call(this), this.type = "CylinderGeometry", this.parameters = {
                    radiusTop: e,
                    radiusBottom: t,
                    height: i,
                    radialSegments: a,
                    heightSegments: r,
                    openEnded: n,
                    thetaStart: s,
                    thetaLength: o
                }, this.fromBufferGeometry(new F(e, t, i, a, r, n, s, o)), this.mergeVertices()
            }

            function F(e, t, i, a, r, n, o, c) {
                N.a.call(this), this.type = "CylinderBufferGeometry", this.parameters = {
                    radiusTop: e,
                    radiusBottom: t,
                    height: i,
                    radialSegments: a,
                    heightSegments: r,
                    openEnded: n,
                    thetaStart: o,
                    thetaLength: c
                };
                var h = this;
                e = void 0 !== e ? e : 1, t = void 0 !== t ? t : 1, i = i || 1, a = Math.floor(a) || 8, r = Math.floor(r) || 1, n = void 0 !== n && n, o = void 0 !== o ? o : 0, c = void 0 !== c ? c : 2 * Math.PI;
                var u = [],
                    p = [],
                    d = [],
                    f = [],
                    m = 0,
                    v = [],
                    g = i / 2,
                    y = 0;

                function b(i) {
                    var r, n, v, b = new s.a,
                        w = new l.a,
                        x = 0,
                        M = !0 === i ? e : t,
                        S = !0 === i ? 1 : -1;
                    for (n = m, r = 1; r <= a; r++) p.push(0, g * S, 0), d.push(0, S, 0), f.push(.5, .5), m++;
                    for (v = m, r = 0; r <= a; r++) {
                        var T = r / a * c + o,
                            A = Math.cos(T),
                            C = Math.sin(T);
                        w.x = M * C, w.y = g * S, w.z = M * A, p.push(w.x, w.y, w.z), d.push(0, S, 0), b.x = .5 * A + .5, b.y = .5 * C * S + .5, f.push(b.x, b.y), m++
                    }
                    for (r = 0; r < a; r++) {
                        var _ = n + r,
                            O = v + r;
                        !0 === i ? u.push(O, O + 1, _) : u.push(O + 1, O, _), x += 3
                    }
                    h.addGroup(y, x, !0 === i ? 1 : 2), y += x
                }! function() {
                    var n, s, b = new l.a,
                        w = new l.a,
                        x = 0,
                        M = (t - e) / i;
                    for (s = 0; s <= r; s++) {
                        var S = [],
                            T = s / r,
                            A = T * (t - e) + e;
                        for (n = 0; n <= a; n++) {
                            var C = n / a,
                                _ = C * c + o,
                                O = Math.sin(_),
                                L = Math.cos(_);
                            w.x = A * O, w.y = -T * i + g, w.z = A * L, p.push(w.x, w.y, w.z), b.set(O, M, L).normalize(), d.push(b.x, b.y, b.z), f.push(C, 1 - T), S.push(m++)
                        }
                        v.push(S)
                    }
                    for (n = 0; n < a; n++)
                        for (s = 0; s < r; s++) {
                            var E = v[s][n],
                                R = v[s + 1][n],
                                I = v[s + 1][n + 1],
                                P = v[s][n + 1];
                            u.push(E, R, P), u.push(R, I, P), x += 6
                        }
                    h.addGroup(y, x, 0), y += x
                }(), !1 === n && (e > 0 && b(!0), t > 0 && b(!1)), this.setIndex(u), this.setAttribute("position", new k.b(p, 3)), this.setAttribute("normal", new k.b(d, 3)), this.setAttribute("uv", new k.b(f, 2))
            }

            function H(e) {
                x.a.call(this, e), this.type = "RawShaderMaterial"
            }
            U.prototype = Object.create(D.a.prototype), U.prototype.constructor = U, F.prototype = Object.create(N.a.prototype), F.prototype.constructor = F, H.prototype = Object.create(x.a.prototype), H.prototype.constructor = H, H.prototype.isRawShaderMaterial = !0;
            var z = i("m0my"),
                B = i.n(z),
                V = {
                    uniforms: {
                        tDiffuse: {
                            value: null
                        },
                        opacity: {
                            value: 1
                        }
                    },
                    vertexShader: ["varying vec2 vUv;", "void main() {", "\tvUv = uv;", "\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),
                    fragmentShader: ["uniform float opacity;", "uniform sampler2D tDiffuse;", "varying vec2 vUv;", "void main() {", "\tvec4 texel = texture2D( tDiffuse, vUv );", "\tgl_FragColor = opacity * texel;", "}"].join("\n")
                },
                G = i("4H5f");

            function W() {
                this.enabled = !0, this.needsSwap = !0, this.clear = !1, this.renderToScreen = !1
            }
            Object.assign(W.prototype, {
                setSize: function() {},
                render: function() {
                    console.error("THREE.Pass: .render() must be implemented in derived pass.")
                }
            }), W.FullScreenQuad = function() {
                var e = new p.a(-1, 1, 1, -1, 0, 1),
                    t = new w.a(2, 2),
                    i = function(e) {
                        this._mesh = new M.a(t, e)
                    };
                return Object.defineProperty(i.prototype, "material", {
                    get: function() {
                        return this._mesh.material
                    },
                    set: function(e) {
                        this._mesh.material = e
                    }
                }), Object.assign(i.prototype, {
                    dispose: function() {
                        this._mesh.geometry.dispose()
                    },
                    render: function(t) {
                        t.render(this._mesh, e)
                    }
                }), i
            }();
            var K = function(e, t) {
                W.call(this), this.textureID = void 0 !== t ? t : "tDiffuse", e instanceof x.a ? (this.uniforms = e.uniforms, this.material = e) : e && (this.uniforms = G.a.clone(e.uniforms), this.material = new x.a({
                    defines: Object.assign({}, e.defines),
                    uniforms: this.uniforms,
                    vertexShader: e.vertexShader,
                    fragmentShader: e.fragmentShader
                })), this.fsQuad = new W.FullScreenQuad(this.material)
            };
            K.prototype = Object.assign(Object.create(W.prototype), {
                constructor: K,
                render: function(e, t, i) {
                    this.uniforms[this.textureID] && (this.uniforms[this.textureID].value = i.texture), this.fsQuad.material = this.material, this.renderToScreen ? (e.setRenderTarget(null), this.fsQuad.render(e)) : (e.setRenderTarget(t), this.clear && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), this.fsQuad.render(e))
                }
            });
            var X = function(e, t) {
                W.call(this), this.scene = e, this.camera = t, this.clear = !0, this.needsSwap = !1, this.inverse = !1
            };
            X.prototype = Object.assign(Object.create(W.prototype), {
                constructor: X,
                render: function(e, t, i) {
                    var a, r, n = e.getContext(),
                        s = e.state;
                    s.buffers.color.setMask(!1), s.buffers.depth.setMask(!1), s.buffers.color.setLocked(!0), s.buffers.depth.setLocked(!0), this.inverse ? (a = 0, r = 1) : (a = 1, r = 0), s.buffers.stencil.setTest(!0), s.buffers.stencil.setOp(n.REPLACE, n.REPLACE, n.REPLACE), s.buffers.stencil.setFunc(n.ALWAYS, a, 4294967295), s.buffers.stencil.setClear(r), s.buffers.stencil.setLocked(!0), e.setRenderTarget(i), this.clear && e.clear(), e.render(this.scene, this.camera), e.setRenderTarget(t), this.clear && e.clear(), e.render(this.scene, this.camera), s.buffers.color.setLocked(!1), s.buffers.depth.setLocked(!1), s.buffers.stencil.setLocked(!1), s.buffers.stencil.setFunc(n.EQUAL, 1, 4294967295), s.buffers.stencil.setOp(n.KEEP, n.KEEP, n.KEEP), s.buffers.stencil.setLocked(!0)
                }
            });
            var J = function() {
                W.call(this), this.needsSwap = !1
            };
            J.prototype = Object.create(W.prototype), Object.assign(J.prototype, {
                render: function(e) {
                    e.state.buffers.stencil.setLocked(!1), e.state.buffers.stencil.setTest(!1)
                }
            });
            var Y = function(e, t) {
                if (this.renderer = e, void 0 === t) {
                    var i = {
                            minFilter: f.R,
                            magFilter: f.R,
                            format: f.wb,
                            stencilBuffer: !1
                        },
                        a = e.getSize(new s.a);
                    this._pixelRatio = e.getPixelRatio(), this._width = a.width, this._height = a.height, (t = new v.a(this._width * this._pixelRatio, this._height * this._pixelRatio, i)).texture.name = "EffectComposer.rt1"
                } else this._pixelRatio = 1, this._width = t.width, this._height = t.height;
                this.renderTarget1 = t, this.renderTarget2 = t.clone(), this.renderTarget2.texture.name = "EffectComposer.rt2", this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2, this.renderToScreen = !0, this.passes = [], void 0 === V && console.error("THREE.EffectComposer relies on CopyShader"), void 0 === K && console.error("THREE.EffectComposer relies on ShaderPass"), this.copyPass = new K(V), this.clock = new m.a
            };
            Object.assign(Y.prototype, {
                swapBuffers: function() {
                    var e = this.readBuffer;
                    this.readBuffer = this.writeBuffer, this.writeBuffer = e
                },
                addPass: function(e) {
                    this.passes.push(e), e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio)
                },
                insertPass: function(e, t) {
                    this.passes.splice(t, 0, e)
                },
                isLastEnabledPass: function(e) {
                    for (var t = e + 1; t < this.passes.length; t++)
                        if (this.passes[t].enabled) return !1;
                    return !0
                },
                render: function(e) {
                    void 0 === e && (e = this.clock.getDelta());
                    var t, i, a = this.renderer.getRenderTarget(),
                        r = !1,
                        n = this.passes.length;
                    for (i = 0; i < n; i++)
                        if (!1 !== (t = this.passes[i]).enabled) {
                            if (t.renderToScreen = this.renderToScreen && this.isLastEnabledPass(i), t.render(this.renderer, this.writeBuffer, this.readBuffer, e, r), t.needsSwap) {
                                if (r) {
                                    var s = this.renderer.getContext(),
                                        o = this.renderer.state.buffers.stencil;
                                    o.setFunc(s.NOTEQUAL, 1, 4294967295), this.copyPass.render(this.renderer, this.writeBuffer, this.readBuffer, e), o.setFunc(s.EQUAL, 1, 4294967295)
                                }
                                this.swapBuffers()
                            }
                            void 0 !== X && (t instanceof X ? r = !0 : t instanceof J && (r = !1))
                        }
                    this.renderer.setRenderTarget(a)
                },
                reset: function(e) {
                    if (void 0 === e) {
                        var t = this.renderer.getSize(new s.a);
                        this._pixelRatio = this.renderer.getPixelRatio(), this._width = t.width, this._height = t.height, (e = this.renderTarget1.clone()).setSize(this._width * this._pixelRatio, this._height * this._pixelRatio)
                    }
                    this.renderTarget1.dispose(), this.renderTarget2.dispose(), this.renderTarget1 = e, this.renderTarget2 = e.clone(), this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2
                },
                setSize: function(e, t) {
                    this._width = e, this._height = t;
                    var i = this._width * this._pixelRatio,
                        a = this._height * this._pixelRatio;
                    this.renderTarget1.setSize(i, a), this.renderTarget2.setSize(i, a);
                    for (var r = 0; r < this.passes.length; r++) this.passes[r].setSize(i, a)
                },
                setPixelRatio: function(e) {
                    this._pixelRatio = e, this.setSize(this._width, this._height)
                }
            });
            var q = function() {
                this.enabled = !0, this.needsSwap = !0, this.clear = !1, this.renderToScreen = !1
            };
            Object.assign(q.prototype, {
                setSize: function() {},
                render: function() {
                    console.error("THREE.Pass: .render() must be implemented in derived pass.")
                }
            }), q.FullScreenQuad = function() {
                var e = new p.a(-1, 1, 1, -1, 0, 1),
                    t = new w.a(2, 2),
                    i = function(e) {
                        this._mesh = new M.a(t, e)
                    };
                return Object.defineProperty(i.prototype, "material", {
                    get: function() {
                        return this._mesh.material
                    },
                    set: function(e) {
                        this._mesh.material = e
                    }
                }), Object.assign(i.prototype, {
                    dispose: function() {
                        this._mesh.geometry.dispose()
                    },
                    render: function(t) {
                        t.render(this._mesh, e)
                    }
                }), i
            }();
            var Z = function(e, t, i, a, r) {
                W.call(this), this.scene = e, this.camera = t, this.overrideMaterial = i, this.clearColor = a, this.clearAlpha = void 0 !== r ? r : 0, this.clear = !0, this.clearDepth = !1, this.needsSwap = !1
            };
            Z.prototype = Object.assign(Object.create(W.prototype), {
                constructor: Z,
                render: function(e, t, i) {
                    var a, r, n = e.autoClear;
                    e.autoClear = !1, this.scene.overrideMaterial = this.overrideMaterial, this.clearColor && (a = e.getClearColor().getHex(), r = e.getClearAlpha(), e.setClearColor(this.clearColor, this.clearAlpha)), this.clearDepth && e.clearDepth(), e.setRenderTarget(this.renderToScreen ? null : i), this.clear && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), e.render(this.scene, this.camera), this.clearColor && e.setClearColor(a, r), this.scene.overrideMaterial = null, e.autoClear = n
                }
            });
            var Q = i("ywJo"),
                $ = {
                    decodeText: function(e) {
                        if ("undefined" !== typeof TextDecoder) return (new TextDecoder).decode(e);
                        for (var t = "", i = 0, a = e.length; i < a; i++) t += String.fromCharCode(e[i]);
                        try {
                            return decodeURIComponent(escape(t))
                        } catch (r) {
                            return t
                        }
                    },
                    extractUrlBase: function(e) {
                        var t = e.lastIndexOf("/");
                        return -1 === t ? "./" : e.substr(0, t + 1)
                    }
                },
                ee = i("hwoJ"),
                te = {};

            function ie(e) {
                Q.a.call(this, e)
            }

            function ae() {
                I.call(this, new p.a(-5, 5, 5, -5, .5, 500))
            }

            function re(e, t) {
                O.call(this, e, t), this.type = "DirectionalLight", this.position.copy(_.a.DefaultUp), this.updateMatrix(), this.target = new _.a, this.shadow = new ae
            }

            function ne() {
                I.call(this, new d.a(50, 1, .5, 500))
            }

            function se(e, t, i, a, r, n) {
                O.call(this, e, t), this.type = "SpotLight", this.position.copy(_.a.DefaultUp), this.updateMatrix(), this.target = new _.a, Object.defineProperty(this, "power", {
                    get: function() {
                        return this.intensity * Math.PI
                    },
                    set: function(e) {
                        this.intensity = e / Math.PI
                    }
                }), this.distance = void 0 !== i ? i : 0, this.angle = void 0 !== a ? a : Math.PI / 3, this.penumbra = void 0 !== r ? r : 0, this.decay = void 0 !== n ? n : 1, this.shadow = new ne
            }
            ie.prototype = Object.assign(Object.create(Q.a.prototype), {
                constructor: ie,
                load: function(e, t, i, a) {
                    void 0 === e && (e = ""), void 0 !== this.path && (e = this.path + e), e = this.manager.resolveURL(e);
                    var r = this,
                        n = ee.a.get(e);
                    if (void 0 !== n) return r.manager.itemStart(e), setTimeout((function() {
                        t && t(n), r.manager.itemEnd(e)
                    }), 0), n;
                    if (void 0 === te[e]) {
                        var s = e.match(/^data:(.*?)(;base64)?,(.*)$/);
                        if (s) {
                            var o = s[1],
                                c = !!s[2],
                                l = s[3];
                            l = decodeURIComponent(l), c && (l = atob(l));
                            try {
                                var h, u = (this.responseType || "").toLowerCase();
                                switch (u) {
                                    case "arraybuffer":
                                    case "blob":
                                        for (var p = new Uint8Array(l.length), d = 0; d < l.length; d++) p[d] = l.charCodeAt(d);
                                        h = "blob" === u ? new Blob([p.buffer], {
                                            type: o
                                        }) : p.buffer;
                                        break;
                                    case "document":
                                        var f = new DOMParser;
                                        h = f.parseFromString(l, o);
                                        break;
                                    case "json":
                                        h = JSON.parse(l);
                                        break;
                                    default:
                                        h = l
                                }
                                setTimeout((function() {
                                    t && t(h), r.manager.itemEnd(e)
                                }), 0)
                            } catch (g) {
                                setTimeout((function() {
                                    a && a(g), r.manager.itemError(e), r.manager.itemEnd(e)
                                }), 0)
                            }
                        } else {
                            te[e] = [], te[e].push({
                                onLoad: t,
                                onProgress: i,
                                onError: a
                            });
                            var m = new XMLHttpRequest;
                            for (var v in m.open("GET", e, !0), m.addEventListener("load", (function(t) {
                                    var i = this.response,
                                        a = te[e];
                                    if (delete te[e], 200 === this.status || 0 === this.status) {
                                        0 === this.status && console.warn("THREE.FileLoader: HTTP Status 0 received."), ee.a.add(e, i);
                                        for (var n = 0, s = a.length; n < s; n++) {
                                            (o = a[n]).onLoad && o.onLoad(i)
                                        }
                                        r.manager.itemEnd(e)
                                    } else {
                                        for (n = 0, s = a.length; n < s; n++) {
                                            var o;
                                            (o = a[n]).onError && o.onError(t)
                                        }
                                        r.manager.itemError(e), r.manager.itemEnd(e)
                                    }
                                }), !1), m.addEventListener("progress", (function(t) {
                                    for (var i = te[e], a = 0, r = i.length; a < r; a++) {
                                        var n = i[a];
                                        n.onProgress && n.onProgress(t)
                                    }
                                }), !1), m.addEventListener("error", (function(t) {
                                    var i = te[e];
                                    delete te[e];
                                    for (var a = 0, n = i.length; a < n; a++) {
                                        var s = i[a];
                                        s.onError && s.onError(t)
                                    }
                                    r.manager.itemError(e), r.manager.itemEnd(e)
                                }), !1), m.addEventListener("abort", (function(t) {
                                    var i = te[e];
                                    delete te[e];
                                    for (var a = 0, n = i.length; a < n; a++) {
                                        var s = i[a];
                                        s.onError && s.onError(t)
                                    }
                                    r.manager.itemError(e), r.manager.itemEnd(e)
                                }), !1), void 0 !== this.responseType && (m.responseType = this.responseType), void 0 !== this.withCredentials && (m.withCredentials = this.withCredentials), m.overrideMimeType && m.overrideMimeType(void 0 !== this.mimeType ? this.mimeType : "text/plain"), this.requestHeader) m.setRequestHeader(v, this.requestHeader[v]);
                            m.send(null)
                        }
                        return r.manager.itemStart(e), m
                    }
                    te[e].push({
                        onLoad: t,
                        onProgress: i,
                        onError: a
                    })
                },
                setResponseType: function(e) {
                    return this.responseType = e, this
                },
                setWithCredentials: function(e) {
                    return this.withCredentials = e, this
                },
                setMimeType: function(e) {
                    return this.mimeType = e, this
                },
                setRequestHeader: function(e) {
                    return this.requestHeader = e, this
                }
            }), ae.prototype = Object.assign(Object.create(I.prototype), {
                constructor: ae,
                isDirectionalLightShadow: !0,
                updateMatrices: function(e) {
                    I.prototype.updateMatrices.call(this, e)
                }
            }), re.prototype = Object.assign(Object.create(O.prototype), {
                constructor: re,
                isDirectionalLight: !0,
                copy: function(e) {
                    return O.prototype.copy.call(this, e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this
                }
            }), ne.prototype = Object.assign(Object.create(I.prototype), {
                constructor: ne,
                isSpotLightShadow: !0,
                updateMatrices: function(e) {
                    var t = this.camera,
                        i = 2 * o.a.RAD2DEG * e.angle,
                        a = this.mapSize.width / this.mapSize.height,
                        r = e.distance || t.far;
                    i === t.fov && a === t.aspect && r === t.far || (t.fov = i, t.aspect = a, t.far = r, t.updateProjectionMatrix()), I.prototype.updateMatrices.call(this, e)
                }
            }), se.prototype = Object.assign(Object.create(O.prototype), {
                constructor: se,
                isSpotLight: !0,
                copy: function(e) {
                    return O.prototype.copy.call(this, e), this.distance = e.distance, this.angle = e.angle, this.penumbra = e.penumbra, this.decay = e.decay, this.target = e.target.clone(), this.shadow = e.shadow.clone(), this
                }
            });
            var oe = i("mWiN");

            function ce(e, t, i, a) {
                this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = void 0 !== a ? a : new t.constructor(i), this.sampleValues = t, this.valueSize = i
            }

            function le(e) {
                A.a.call(this), this.defines = {
                    STANDARD: ""
                }, this.type = "MeshStandardMaterial", this.color = new T.a(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new T.a(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = f.qc, this.normalScale = new s.a(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(e)
            }
            Object.assign(ce.prototype, {
                evaluate: function(e) {
                    var t = this.parameterPositions,
                        i = this._cachedIndex,
                        a = t[i],
                        r = t[i - 1];
                    e: {
                        t: {
                            var n;i: {
                                a: if (!(e < a)) {
                                    for (var s = i + 2;;) {
                                        if (void 0 === a) {
                                            if (e < r) break a;
                                            return i = t.length, this._cachedIndex = i, this.afterEnd_(i - 1, e, r)
                                        }
                                        if (i === s) break;
                                        if (r = a, e < (a = t[++i])) break t
                                    }
                                    n = t.length;
                                    break i
                                }if (e >= r) break e;
                                var o = t[1];e < o && (i = 2, r = o);
                                for (s = i - 2;;) {
                                    if (void 0 === r) return this._cachedIndex = 0, this.beforeStart_(0, e, a);
                                    if (i === s) break;
                                    if (a = r, e >= (r = t[--i - 1])) break t
                                }
                                n = i,
                                i = 0
                            }
                            for (; i < n;) {
                                var c = i + n >>> 1;
                                e < t[c] ? n = c : i = c + 1
                            }
                            if (a = t[i], void 0 === (r = t[i - 1])) return this._cachedIndex = 0, this.beforeStart_(0, e, a);
                            if (void 0 === a) return i = t.length, this._cachedIndex = i, this.afterEnd_(i - 1, r, e)
                        }
                        this._cachedIndex = i,
                        this.intervalChanged_(i, r, a)
                    }
                    return this.interpolate_(i, r, e, a)
                },
                settings: null,
                DefaultSettings_: {},
                getSettings_: function() {
                    return this.settings || this.DefaultSettings_
                },
                copySampleValue_: function(e) {
                    for (var t = this.resultBuffer, i = this.sampleValues, a = this.valueSize, r = e * a, n = 0; n !== a; ++n) t[n] = i[r + n];
                    return t
                },
                interpolate_: function() {
                    throw new Error("call to abstract method")
                },
                intervalChanged_: function() {}
            }), Object.assign(ce.prototype, {
                beforeStart_: ce.prototype.copySampleValue_,
                afterEnd_: ce.prototype.copySampleValue_
            }), le.prototype = Object.create(A.a.prototype), le.prototype.constructor = le, le.prototype.isMeshStandardMaterial = !0, le.prototype.copy = function(e) {
                return A.a.prototype.copy.call(this, e), this.defines = {
                    STANDARD: ""
                }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapIntensity = e.envMapIntensity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this
            };
            var he = i("Rn4g");

            function ue(e) {
                Q.a.call(this, e)
            }

            function pe(e, t) {
                this.array = e, this.stride = t, this.count = void 0 !== e ? e.length / t : 0, this.usage = f.nc, this.updateRange = {
                    offset: 0,
                    count: -1
                }, this.version = 0
            }
            ue.prototype = Object.assign(Object.create(Q.a.prototype), {
                constructor: ue,
                load: function(e, t, i, a) {
                    var r = new g.a,
                        n = new he.a(this.manager);
                    return n.setCrossOrigin(this.crossOrigin), n.setPath(this.path), n.load(e, (function(i) {
                        r.image = i;
                        var a = e.search(/\.jpe?g($|\?)/i) > 0 || 0 === e.search(/^data\:image\/jpeg/);
                        r.format = a ? f.Tb : f.wb, r.needsUpdate = !0, void 0 !== t && t(r)
                    }), i, a), r
                }
            }), Object.defineProperty(pe.prototype, "needsUpdate", {
                set: function(e) {
                    !0 === e && this.version++
                }
            }), Object.assign(pe.prototype, {
                isInterleavedBuffer: !0,
                onUploadCallback: function() {},
                setUsage: function(e) {
                    return this.usage = e, this
                },
                copy: function(e) {
                    return this.array = new e.array.constructor(e.array), this.count = e.count, this.stride = e.stride, this.usage = e.usage, this
                },
                copyAt: function(e, t, i) {
                    e *= this.stride, i *= t.stride;
                    for (var a = 0, r = this.stride; a < r; a++) this.array[e + a] = t.array[i + a];
                    return this
                },
                set: function(e, t) {
                    return void 0 === t && (t = 0), this.array.set(e, t), this
                },
                clone: function() {
                    return (new this.constructor).copy(this)
                },
                onUpload: function(e) {
                    return this.onUploadCallback = e, this
                }
            });
            var de = new l.a;

            function fe(e, t, i, a) {
                this.data = e, this.itemSize = t, this.offset = i, this.normalized = !0 === a
            }

            function me(e) {
                A.a.call(this), this.type = "PointsMaterial", this.color = new T.a(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.morphTargets = !1, this.setValues(e)
            }

            function ve(e) {
                A.a.call(this), this.type = "LineBasicMaterial", this.color = new T.a(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.setValues(e)
            }
            Object.defineProperties(fe.prototype, {
                count: {
                    get: function() {
                        return this.data.count
                    }
                },
                array: {
                    get: function() {
                        return this.data.array
                    }
                }
            }), Object.assign(fe.prototype, {
                isInterleavedBufferAttribute: !0,
                applyMatrix4: function(e) {
                    for (var t = 0, i = this.data.count; t < i; t++) de.x = this.getX(t), de.y = this.getY(t), de.z = this.getZ(t), de.applyMatrix4(e), this.setXYZ(t, de.x, de.y, de.z);
                    return this
                },
                setX: function(e, t) {
                    return this.data.array[e * this.data.stride + this.offset] = t, this
                },
                setY: function(e, t) {
                    return this.data.array[e * this.data.stride + this.offset + 1] = t, this
                },
                setZ: function(e, t) {
                    return this.data.array[e * this.data.stride + this.offset + 2] = t, this
                },
                setW: function(e, t) {
                    return this.data.array[e * this.data.stride + this.offset + 3] = t, this
                },
                getX: function(e) {
                    return this.data.array[e * this.data.stride + this.offset]
                },
                getY: function(e) {
                    return this.data.array[e * this.data.stride + this.offset + 1]
                },
                getZ: function(e) {
                    return this.data.array[e * this.data.stride + this.offset + 2]
                },
                getW: function(e) {
                    return this.data.array[e * this.data.stride + this.offset + 3]
                },
                setXY: function(e, t, i) {
                    return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = i, this
                },
                setXYZ: function(e, t, i, a) {
                    return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = i, this.data.array[e + 2] = a, this
                },
                setXYZW: function(e, t, i, a, r) {
                    return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = i, this.data.array[e + 2] = a, this.data.array[e + 3] = r, this
                }
            }), me.prototype = Object.create(A.a.prototype), me.prototype.constructor = me, me.prototype.isPointsMaterial = !0, me.prototype.copy = function(e) {
                return A.a.prototype.copy.call(this, e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.morphTargets = e.morphTargets, this
            }, ve.prototype = Object.create(A.a.prototype), ve.prototype.constructor = ve, ve.prototype.isLineBasicMaterial = !0, ve.prototype.copy = function(e) {
                return A.a.prototype.copy.call(this, e), this.color.copy(e.color), this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this
            };
            var ge = i("/V9W");

            function ye(e, t) {
                e && e.isGeometry && console.error("THREE.SkinnedMesh no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."), M.a.call(this, e, t), this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new L.a, this.bindMatrixInverse = new L.a
            }
            ye.prototype = Object.assign(Object.create(M.a.prototype), {
                constructor: ye,
                isSkinnedMesh: !0,
                bind: function(e, t) {
                    this.skeleton = e, void 0 === t && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), t = this.matrixWorld), this.bindMatrix.copy(t), this.bindMatrixInverse.getInverse(t)
                },
                pose: function() {
                    this.skeleton.pose()
                },
                normalizeSkinWeights: function() {
                    for (var e = new E.a, t = this.geometry.attributes.skinWeight, i = 0, a = t.count; i < a; i++) {
                        e.x = t.getX(i), e.y = t.getY(i), e.z = t.getZ(i), e.w = t.getW(i);
                        var r = 1 / e.manhattanLength();
                        r !== 1 / 0 ? e.multiplyScalar(r) : e.set(1, 0, 0, 0), t.setXYZW(i, e.x, e.y, e.z, e.w)
                    }
                },
                updateMatrixWorld: function(e) {
                    M.a.prototype.updateMatrixWorld.call(this, e), "attached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.matrixWorld) : "detached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.bindMatrix) : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode)
                },
                clone: function() {
                    return new this.constructor(this.geometry, this.material).copy(this)
                }
            });
            var be = i("9y4G"),
                we = new l.a,
                xe = new l.a,
                Me = new L.a,
                Se = new be.a,
                Te = new c.a;

            function Ae(e, t, i) {
                1 === i && console.error("THREE.Line: parameter THREE.LinePieces no longer supported. Use THREE.LineSegments instead."), _.a.call(this), this.type = "Line", this.geometry = void 0 !== e ? e : new N.a, this.material = void 0 !== t ? t : new ve({
                    color: 16777215 * Math.random()
                })
            }
            Ae.prototype = Object.assign(Object.create(_.a.prototype), {
                constructor: Ae,
                isLine: !0,
                computeLineDistances: function() {
                    var e = this.geometry;
                    if (e.isBufferGeometry)
                        if (null === e.index) {
                            for (var t = e.attributes.position, i = [0], a = 1, r = t.count; a < r; a++) we.fromBufferAttribute(t, a - 1), xe.fromBufferAttribute(t, a), i[a] = i[a - 1], i[a] += we.distanceTo(xe);
                            e.setAttribute("lineDistance", new k.b(i, 1))
                        } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
                    else if (e.isGeometry) {
                        var n = e.vertices;
                        (i = e.lineDistances)[0] = 0;
                        for (a = 1, r = n.length; a < r; a++) i[a] = i[a - 1], i[a] += n[a - 1].distanceTo(n[a])
                    }
                    return this
                },
                raycast: function(e, t) {
                    var i = e.linePrecision,
                        a = this.geometry,
                        r = this.matrixWorld;
                    if (null === a.boundingSphere && a.computeBoundingSphere(), Te.copy(a.boundingSphere), Te.applyMatrix4(r), Te.radius += i, !1 !== e.ray.intersectsSphere(Te)) {
                        Me.getInverse(r), Se.copy(e.ray).applyMatrix4(Me);
                        var n = i / ((this.scale.x + this.scale.y + this.scale.z) / 3),
                            s = n * n,
                            o = new l.a,
                            c = new l.a,
                            h = new l.a,
                            u = new l.a,
                            p = this && this.isLineSegments ? 2 : 1;
                        if (a.isBufferGeometry) {
                            var d = a.index,
                                f = a.attributes.position.array;
                            if (null !== d)
                                for (var m = d.array, v = 0, g = m.length - 1; v < g; v += p) {
                                    var y = m[v],
                                        b = m[v + 1];
                                    if (o.fromArray(f, 3 * y), c.fromArray(f, 3 * b), !(Se.distanceSqToSegment(o, c, u, h) > s)) u.applyMatrix4(this.matrixWorld), (M = e.ray.origin.distanceTo(u)) < e.near || M > e.far || t.push({
                                        distance: M,
                                        point: h.clone().applyMatrix4(this.matrixWorld),
                                        index: v,
                                        face: null,
                                        faceIndex: null,
                                        object: this
                                    })
                                } else
                                    for (v = 0, g = f.length / 3 - 1; v < g; v += p) {
                                        if (o.fromArray(f, 3 * v), c.fromArray(f, 3 * v + 3), !(Se.distanceSqToSegment(o, c, u, h) > s)) u.applyMatrix4(this.matrixWorld), (M = e.ray.origin.distanceTo(u)) < e.near || M > e.far || t.push({
                                            distance: M,
                                            point: h.clone().applyMatrix4(this.matrixWorld),
                                            index: v,
                                            face: null,
                                            faceIndex: null,
                                            object: this
                                        })
                                    }
                        } else if (a.isGeometry) {
                            var w = a.vertices,
                                x = w.length;
                            for (v = 0; v < x - 1; v += p) {
                                var M;
                                if (!(Se.distanceSqToSegment(w[v], w[v + 1], u, h) > s)) u.applyMatrix4(this.matrixWorld), (M = e.ray.origin.distanceTo(u)) < e.near || M > e.far || t.push({
                                    distance: M,
                                    point: h.clone().applyMatrix4(this.matrixWorld),
                                    index: v,
                                    face: null,
                                    faceIndex: null,
                                    object: this
                                })
                            }
                        }
                    }
                },
                clone: function() {
                    return new this.constructor(this.geometry, this.material).copy(this)
                }
            });
            var Ce = new l.a,
                _e = new l.a;

            function Oe(e, t) {
                Ae.call(this, e, t), this.type = "LineSegments"
            }

            function Le(e, t) {
                Ae.call(this, e, t), this.type = "LineLoop"
            }
            Oe.prototype = Object.assign(Object.create(Ae.prototype), {
                constructor: Oe,
                isLineSegments: !0,
                computeLineDistances: function() {
                    var e = this.geometry;
                    if (e.isBufferGeometry)
                        if (null === e.index) {
                            for (var t = e.attributes.position, i = [], a = 0, r = t.count; a < r; a += 2) Ce.fromBufferAttribute(t, a), _e.fromBufferAttribute(t, a + 1), i[a] = 0 === a ? 0 : i[a - 1], i[a + 1] = i[a] + Ce.distanceTo(_e);
                            e.setAttribute("lineDistance", new k.b(i, 1))
                        } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
                    else if (e.isGeometry) {
                        var n = e.vertices;
                        for (i = e.lineDistances, a = 0, r = n.length; a < r; a += 2) Ce.copy(n[a]), _e.copy(n[a + 1]), i[a] = 0 === a ? 0 : i[a - 1], i[a + 1] = i[a] + Ce.distanceTo(_e)
                    }
                    return this
                }
            }), Le.prototype = Object.assign(Object.create(Ae.prototype), {
                constructor: Le,
                isLineLoop: !0
            });
            var Ee = new L.a,
                Re = new be.a,
                Ie = new c.a,
                Pe = new l.a;

            function je(e, t) {
                _.a.call(this), this.type = "Points", this.geometry = void 0 !== e ? e : new N.a, this.material = void 0 !== t ? t : new me({
                    color: 16777215 * Math.random()
                }), this.updateMorphTargets()
            }

            function De(e, t, i, a, r, n, s) {
                var o = Re.distanceSqToPoint(e);
                if (o < i) {
                    var c = new l.a;
                    Re.closestPointToPoint(e, c), c.applyMatrix4(a);
                    var h = r.ray.origin.distanceTo(c);
                    if (h < r.near || h > r.far) return;
                    n.push({
                        distance: h,
                        distanceToRay: Math.sqrt(o),
                        point: c,
                        index: t,
                        face: null,
                        object: s
                    })
                }
            }

            function Ne(e, t, i, a) {
                ce.call(this, e, t, i, a), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0
            }

            function ke(e, t, i, a) {
                ce.call(this, e, t, i, a)
            }

            function Ue(e, t, i, a) {
                ce.call(this, e, t, i, a)
            }
            je.prototype = Object.assign(Object.create(_.a.prototype), {
                constructor: je,
                isPoints: !0,
                raycast: function(e, t) {
                    var i = this.geometry,
                        a = this.matrixWorld,
                        r = e.params.Points.threshold;
                    if (null === i.boundingSphere && i.computeBoundingSphere(), Ie.copy(i.boundingSphere), Ie.applyMatrix4(a), Ie.radius += r, !1 !== e.ray.intersectsSphere(Ie)) {
                        Ee.getInverse(a), Re.copy(e.ray).applyMatrix4(Ee);
                        var n = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
                            s = n * n;
                        if (i.isBufferGeometry) {
                            var o = i.index,
                                c = i.attributes.position.array;
                            if (null !== o)
                                for (var l = o.array, h = 0, u = l.length; h < u; h++) {
                                    var p = l[h];
                                    Pe.fromArray(c, 3 * p), De(Pe, p, s, a, e, t, this)
                                } else {
                                    h = 0;
                                    for (var d = c.length / 3; h < d; h++) Pe.fromArray(c, 3 * h), De(Pe, h, s, a, e, t, this)
                                }
                        } else {
                            var f = i.vertices;
                            for (h = 0, d = f.length; h < d; h++) De(f[h], h, s, a, e, t, this)
                        }
                    }
                },
                updateMorphTargets: function() {
                    var e, t, i, a = this.geometry;
                    if (a.isBufferGeometry) {
                        var r = a.morphAttributes,
                            n = Object.keys(r);
                        if (n.length > 0) {
                            var s = r[n[0]];
                            if (void 0 !== s)
                                for (this.morphTargetInfluences = [], this.morphTargetDictionary = {}, e = 0, t = s.length; e < t; e++) i = s[e].name || String(e), this.morphTargetInfluences.push(0), this.morphTargetDictionary[i] = e
                        }
                    } else {
                        var o = a.morphTargets;
                        void 0 !== o && o.length > 0 && console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")
                    }
                },
                clone: function() {
                    return new this.constructor(this.geometry, this.material).copy(this)
                }
            }), Ne.prototype = Object.assign(Object.create(ce.prototype), {
                constructor: Ne,
                DefaultSettings_: {
                    endingStart: f.Fc,
                    endingEnd: f.Fc
                },
                intervalChanged_: function(e, t, i) {
                    var a = this.parameterPositions,
                        r = e - 2,
                        n = e + 1,
                        s = a[r],
                        o = a[n];
                    if (void 0 === s) switch (this.getSettings_().endingStart) {
                        case f.Hc:
                            r = e, s = 2 * t - i;
                            break;
                        case f.Ec:
                            s = t + a[r = a.length - 2] - a[r + 1];
                            break;
                        default:
                            r = e, s = i
                    }
                    if (void 0 === o) switch (this.getSettings_().endingEnd) {
                        case f.Hc:
                            n = e, o = 2 * i - t;
                            break;
                        case f.Ec:
                            n = 1, o = i + a[1] - a[0];
                            break;
                        default:
                            n = e - 1, o = t
                    }
                    var c = .5 * (i - t),
                        l = this.valueSize;
                    this._weightPrev = c / (t - s), this._weightNext = c / (o - i), this._offsetPrev = r * l, this._offsetNext = n * l
                },
                interpolate_: function(e, t, i, a) {
                    for (var r = this.resultBuffer, n = this.sampleValues, s = this.valueSize, o = e * s, c = o - s, l = this._offsetPrev, h = this._offsetNext, u = this._weightPrev, p = this._weightNext, d = (i - t) / (a - t), f = d * d, m = f * d, v = -u * m + 2 * u * f - u * d, g = (1 + u) * m + (-1.5 - 2 * u) * f + (-.5 + u) * d + 1, y = (-1 - p) * m + (1.5 + p) * f + .5 * d, b = p * m - p * f, w = 0; w !== s; ++w) r[w] = v * n[l + w] + g * n[c + w] + y * n[o + w] + b * n[h + w];
                    return r
                }
            }), ke.prototype = Object.assign(Object.create(ce.prototype), {
                constructor: ke,
                interpolate_: function(e, t, i, a) {
                    for (var r = this.resultBuffer, n = this.sampleValues, s = this.valueSize, o = e * s, c = o - s, l = (i - t) / (a - t), h = 1 - l, u = 0; u !== s; ++u) r[u] = n[c + u] * h + n[o + u] * l;
                    return r
                }
            }), Ue.prototype = Object.assign(Object.create(ce.prototype), {
                constructor: Ue,
                interpolate_: function(e) {
                    return this.copySampleValue_(e - 1)
                }
            });
            var Fe = {
                arraySlice: function(e, t, i) {
                    return Fe.isTypedArray(e) ? new e.constructor(e.subarray(t, void 0 !== i ? i : e.length)) : e.slice(t, i)
                },
                convertArray: function(e, t, i) {
                    return !e || !i && e.constructor === t ? e : "number" === typeof t.BYTES_PER_ELEMENT ? new t(e) : Array.prototype.slice.call(e)
                },
                isTypedArray: function(e) {
                    return ArrayBuffer.isView(e) && !(e instanceof DataView)
                },
                getKeyframeOrder: function(e) {
                    for (var t = e.length, i = new Array(t), a = 0; a !== t; ++a) i[a] = a;
                    return i.sort((function(t, i) {
                        return e[t] - e[i]
                    })), i
                },
                sortedArray: function(e, t, i) {
                    for (var a = e.length, r = new e.constructor(a), n = 0, s = 0; s !== a; ++n)
                        for (var o = i[n] * t, c = 0; c !== t; ++c) r[s++] = e[o + c];
                    return r
                },
                flattenJSON: function(e, t, i, a) {
                    for (var r = 1, n = e[0]; void 0 !== n && void 0 === n[a];) n = e[r++];
                    if (void 0 !== n) {
                        var s = n[a];
                        if (void 0 !== s)
                            if (Array.isArray(s))
                                do {
                                    void 0 !== (s = n[a]) && (t.push(n.time), i.push.apply(i, s)), n = e[r++]
                                } while (void 0 !== n);
                            else if (void 0 !== s.toArray)
                            do {
                                void 0 !== (s = n[a]) && (t.push(n.time), s.toArray(i, i.length)), n = e[r++]
                            } while (void 0 !== n);
                        else
                            do {
                                void 0 !== (s = n[a]) && (t.push(n.time), i.push(s)), n = e[r++]
                            } while (void 0 !== n)
                    }
                },
                subclip: function(e, t, i, a, r) {
                    r = r || 30;
                    var n = e.clone();
                    n.name = t;
                    for (var s = [], o = 0; o < n.tracks.length; ++o) {
                        for (var c = n.tracks[o], l = c.getValueSize(), h = [], u = [], p = 0; p < c.times.length; ++p) {
                            var d = c.times[p] * r;
                            if (!(d < i || d >= a)) {
                                h.push(c.times[p]);
                                for (var f = 0; f < l; ++f) u.push(c.values[p * l + f])
                            }
                        }
                        0 !== h.length && (c.times = Fe.convertArray(h, c.times.constructor), c.values = Fe.convertArray(u, c.values.constructor), s.push(c))
                    }
                    n.tracks = s;
                    var m = 1 / 0;
                    for (o = 0; o < n.tracks.length; ++o) m > n.tracks[o].times[0] && (m = n.tracks[o].times[0]);
                    for (o = 0; o < n.tracks.length; ++o) n.tracks[o].shift(-1 * m);
                    return n.resetDuration(), n
                }
            };

            function He(e, t, i, a) {
                if (void 0 === e) throw new Error("THREE.KeyframeTrack: track name is undefined");
                if (void 0 === t || 0 === t.length) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
                this.name = e, this.times = Fe.convertArray(t, this.TimeBufferType), this.values = Fe.convertArray(i, this.ValueBufferType), this.setInterpolation(a || this.DefaultInterpolation)
            }

            function ze(e, t, i, a) {
                He.call(this, e, t, i, a)
            }
            Object.assign(He, {
                toJSON: function(e) {
                    var t, i = e.constructor;
                    if (void 0 !== i.toJSON) t = i.toJSON(e);
                    else {
                        t = {
                            name: e.name,
                            times: Fe.convertArray(e.times, Array),
                            values: Fe.convertArray(e.values, Array)
                        };
                        var a = e.getInterpolation();
                        a !== e.DefaultInterpolation && (t.interpolation = a)
                    }
                    return t.type = e.ValueTypeName, t
                }
            }), Object.assign(He.prototype, {
                constructor: He,
                TimeBufferType: Float32Array,
                ValueBufferType: Float32Array,
                DefaultInterpolation: f.L,
                InterpolantFactoryMethodDiscrete: function(e) {
                    return new Ue(this.times, this.values, this.getValueSize(), e)
                },
                InterpolantFactoryMethodLinear: function(e) {
                    return new ke(this.times, this.values, this.getValueSize(), e)
                },
                InterpolantFactoryMethodSmooth: function(e) {
                    return new Ne(this.times, this.values, this.getValueSize(), e)
                },
                setInterpolation: function(e) {
                    var t;
                    switch (e) {
                        case f.K:
                            t = this.InterpolantFactoryMethodDiscrete;
                            break;
                        case f.L:
                            t = this.InterpolantFactoryMethodLinear;
                            break;
                        case f.M:
                            t = this.InterpolantFactoryMethodSmooth
                    }
                    if (void 0 === t) {
                        var i = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
                        if (void 0 === this.createInterpolant) {
                            if (e === this.DefaultInterpolation) throw new Error(i);
                            this.setInterpolation(this.DefaultInterpolation)
                        }
                        return console.warn("THREE.KeyframeTrack:", i), this
                    }
                    return this.createInterpolant = t, this
                },
                getInterpolation: function() {
                    switch (this.createInterpolant) {
                        case this.InterpolantFactoryMethodDiscrete:
                            return f.K;
                        case this.InterpolantFactoryMethodLinear:
                            return f.L;
                        case this.InterpolantFactoryMethodSmooth:
                            return f.M
                    }
                },
                getValueSize: function() {
                    return this.values.length / this.times.length
                },
                shift: function(e) {
                    if (0 !== e)
                        for (var t = this.times, i = 0, a = t.length; i !== a; ++i) t[i] += e;
                    return this
                },
                scale: function(e) {
                    if (1 !== e)
                        for (var t = this.times, i = 0, a = t.length; i !== a; ++i) t[i] *= e;
                    return this
                },
                trim: function(e, t) {
                    for (var i = this.times, a = i.length, r = 0, n = a - 1; r !== a && i[r] < e;) ++r;
                    for (; - 1 !== n && i[n] > t;) --n;
                    if (++n, 0 !== r || n !== a) {
                        r >= n && (r = (n = Math.max(n, 1)) - 1);
                        var s = this.getValueSize();
                        this.times = Fe.arraySlice(i, r, n), this.values = Fe.arraySlice(this.values, r * s, n * s)
                    }
                    return this
                },
                validate: function() {
                    var e = !0,
                        t = this.getValueSize();
                    t - Math.floor(t) !== 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), e = !1);
                    var i = this.times,
                        a = this.values,
                        r = i.length;
                    0 === r && (console.error("THREE.KeyframeTrack: Track is empty.", this), e = !1);
                    for (var n = null, s = 0; s !== r; s++) {
                        var o = i[s];
                        if ("number" === typeof o && isNaN(o)) {
                            console.error("THREE.KeyframeTrack: Time is not a valid number.", this, s, o), e = !1;
                            break
                        }
                        if (null !== n && n > o) {
                            console.error("THREE.KeyframeTrack: Out of order keys.", this, s, o, n), e = !1;
                            break
                        }
                        n = o
                    }
                    if (void 0 !== a && Fe.isTypedArray(a)) {
                        s = 0;
                        for (var c = a.length; s !== c; ++s) {
                            var l = a[s];
                            if (isNaN(l)) {
                                console.error("THREE.KeyframeTrack: Value is not a valid number.", this, s, l), e = !1;
                                break
                            }
                        }
                    }
                    return e
                },
                optimize: function() {
                    for (var e = this.times, t = this.values, i = this.getValueSize(), a = this.getInterpolation() === f.M, r = 1, n = e.length - 1, s = 1; s < n; ++s) {
                        var o = !1,
                            c = e[s];
                        if (c !== e[s + 1] && (1 !== s || c !== c[0]))
                            if (a) o = !0;
                            else
                                for (var l = s * i, h = l - i, u = l + i, p = 0; p !== i; ++p) {
                                    var d = t[l + p];
                                    if (d !== t[h + p] || d !== t[u + p]) {
                                        o = !0;
                                        break
                                    }
                                }
                        if (o) {
                            if (s !== r) {
                                e[r] = e[s];
                                var m = s * i,
                                    v = r * i;
                                for (p = 0; p !== i; ++p) t[v + p] = t[m + p]
                            }++r
                        }
                    }
                    if (n > 0) {
                        e[r] = e[n];
                        for (m = n * i, v = r * i, p = 0; p !== i; ++p) t[v + p] = t[m + p];
                        ++r
                    }
                    return r !== e.length && (this.times = Fe.arraySlice(e, 0, r), this.values = Fe.arraySlice(t, 0, r * i)), this
                },
                clone: function() {
                    var e = Fe.arraySlice(this.times, 0),
                        t = Fe.arraySlice(this.values, 0),
                        i = new(0, this.constructor)(this.name, e, t);
                    return i.createInterpolant = this.createInterpolant, i
                }
            }), ze.prototype = Object.assign(Object.create(He.prototype), {
                constructor: ze,
                ValueTypeName: "number"
            });
            var Be = i("breI");

            function Ve(e, t, i, a) {
                ce.call(this, e, t, i, a)
            }

            function Ge(e, t, i, a) {
                He.call(this, e, t, i, a)
            }

            function We(e, t, i, a) {
                He.call(this, e, t, i, a)
            }

            function Ke(e, t, i) {
                He.call(this, e, t, i)
            }

            function Xe(e, t, i, a) {
                He.call(this, e, t, i, a)
            }

            function Je(e, t, i, a) {
                He.call(this, e, t, i, a)
            }

            function Ye(e, t, i) {
                this.name = e, this.tracks = i, this.duration = void 0 !== t ? t : -1, this.uuid = o.a.generateUUID(), this.duration < 0 && this.resetDuration()
            }

            function qe(e) {
                if (void 0 === e.type) throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
                var t = function(e) {
                    switch (e.toLowerCase()) {
                        case "scalar":
                        case "double":
                        case "float":
                        case "number":
                        case "integer":
                            return ze;
                        case "vector":
                        case "vector2":
                        case "vector3":
                        case "vector4":
                            return We;
                        case "color":
                            return Xe;
                        case "quaternion":
                            return Ge;
                        case "bool":
                        case "boolean":
                            return Ke;
                        case "string":
                            return Je
                    }
                    throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + e)
                }(e.type);
                if (void 0 === e.times) {
                    var i = [],
                        a = [];
                    Fe.flattenJSON(e.keys, i, a, "value"), e.times = i, e.values = a
                }
                return void 0 !== t.parse ? t.parse(e) : new t(e.name, e.times, e.values, e.interpolation)
            }

            function Ze() {
                _.a.call(this), this.type = "Bone"
            }
            Ve.prototype = Object.assign(Object.create(ce.prototype), {
                constructor: Ve,
                interpolate_: function(e, t, i, a) {
                    for (var r = this.resultBuffer, n = this.sampleValues, s = this.valueSize, o = e * s, c = (i - t) / (a - t), l = o + s; o !== l; o += 4) Be.a.slerpFlat(r, 0, n, o - s, n, o, c);
                    return r
                }
            }), Ge.prototype = Object.assign(Object.create(He.prototype), {
                constructor: Ge,
                ValueTypeName: "quaternion",
                DefaultInterpolation: f.L,
                InterpolantFactoryMethodLinear: function(e) {
                    return new Ve(this.times, this.values, this.getValueSize(), e)
                },
                InterpolantFactoryMethodSmooth: void 0
            }), We.prototype = Object.assign(Object.create(He.prototype), {
                constructor: We,
                ValueTypeName: "vector"
            }), Ke.prototype = Object.assign(Object.create(He.prototype), {
                constructor: Ke,
                ValueTypeName: "bool",
                ValueBufferType: Array,
                DefaultInterpolation: f.K,
                InterpolantFactoryMethodLinear: void 0,
                InterpolantFactoryMethodSmooth: void 0
            }), Xe.prototype = Object.assign(Object.create(He.prototype), {
                constructor: Xe,
                ValueTypeName: "color"
            }), Je.prototype = Object.assign(Object.create(He.prototype), {
                constructor: Je,
                ValueTypeName: "string",
                ValueBufferType: Array,
                DefaultInterpolation: f.K,
                InterpolantFactoryMethodLinear: void 0,
                InterpolantFactoryMethodSmooth: void 0
            }), Object.assign(Ye, {
                parse: function(e) {
                    for (var t = [], i = e.tracks, a = 1 / (e.fps || 1), r = 0, n = i.length; r !== n; ++r) t.push(qe(i[r]).scale(a));
                    return new Ye(e.name, e.duration, t)
                },
                toJSON: function(e) {
                    for (var t = [], i = e.tracks, a = {
                            name: e.name,
                            duration: e.duration,
                            tracks: t,
                            uuid: e.uuid
                        }, r = 0, n = i.length; r !== n; ++r) t.push(He.toJSON(i[r]));
                    return a
                },
                CreateFromMorphTargetSequence: function(e, t, i, a) {
                    for (var r = t.length, n = [], s = 0; s < r; s++) {
                        var o = [],
                            c = [];
                        o.push((s + r - 1) % r, s, (s + 1) % r), c.push(0, 1, 0);
                        var l = Fe.getKeyframeOrder(o);
                        o = Fe.sortedArray(o, 1, l), c = Fe.sortedArray(c, 1, l), a || 0 !== o[0] || (o.push(r), c.push(c[0])), n.push(new ze(".morphTargetInfluences[" + t[s].name + "]", o, c).scale(1 / i))
                    }
                    return new Ye(e, -1, n)
                },
                findByName: function(e, t) {
                    var i = e;
                    if (!Array.isArray(e)) {
                        var a = e;
                        i = a.geometry && a.geometry.animations || a.animations
                    }
                    for (var r = 0; r < i.length; r++)
                        if (i[r].name === t) return i[r];
                    return null
                },
                CreateClipsFromMorphTargetSequences: function(e, t, i) {
                    for (var a = {}, r = /^([\w-]*?)([\d]+)$/, n = 0, s = e.length; n < s; n++) {
                        var o = e[n],
                            c = o.name.match(r);
                        if (c && c.length > 1) {
                            var l = a[u = c[1]];
                            l || (a[u] = l = []), l.push(o)
                        }
                    }
                    var h = [];
                    for (var u in a) h.push(Ye.CreateFromMorphTargetSequence(u, a[u], t, i));
                    return h
                },
                parseAnimation: function(e, t) {
                    if (!e) return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
                    for (var i = function(e, t, i, a, r) {
                            if (0 !== i.length) {
                                var n = [],
                                    s = [];
                                Fe.flattenJSON(i, n, s, a), 0 !== n.length && r.push(new e(t, n, s))
                            }
                        }, a = [], r = e.name || "default", n = e.length || -1, s = e.fps || 30, o = e.hierarchy || [], c = 0; c < o.length; c++) {
                        var l = o[c].keys;
                        if (l && 0 !== l.length)
                            if (l[0].morphTargets) {
                                for (var h = {}, u = 0; u < l.length; u++)
                                    if (l[u].morphTargets)
                                        for (var p = 0; p < l[u].morphTargets.length; p++) h[l[u].morphTargets[p]] = -1;
                                for (var d in h) {
                                    var f = [],
                                        m = [];
                                    for (p = 0; p !== l[u].morphTargets.length; ++p) {
                                        var v = l[u];
                                        f.push(v.time), m.push(v.morphTarget === d ? 1 : 0)
                                    }
                                    a.push(new ze(".morphTargetInfluence[" + d + "]", f, m))
                                }
                                n = h.length * (s || 1)
                            } else {
                                var g = ".bones[" + t[c].name + "]";
                                i(We, g + ".position", l, "pos", a), i(Ge, g + ".quaternion", l, "rot", a), i(We, g + ".scale", l, "scl", a)
                            }
                    }
                    return 0 === a.length ? null : new Ye(r, n, a)
                }
            }), Object.assign(Ye.prototype, {
                resetDuration: function() {
                    for (var e = 0, t = 0, i = this.tracks.length; t !== i; ++t) {
                        var a = this.tracks[t];
                        e = Math.max(e, a.times[a.times.length - 1])
                    }
                    return this.duration = e, this
                },
                trim: function() {
                    for (var e = 0; e < this.tracks.length; e++) this.tracks[e].trim(0, this.duration);
                    return this
                },
                validate: function() {
                    for (var e = !0, t = 0; t < this.tracks.length; t++) e = e && this.tracks[t].validate();
                    return e
                },
                optimize: function() {
                    for (var e = 0; e < this.tracks.length; e++) this.tracks[e].optimize();
                    return this
                },
                clone: function() {
                    for (var e = [], t = 0; t < this.tracks.length; t++) e.push(this.tracks[t].clone());
                    return new Ye(this.name, this.duration, e)
                }
            }), Ze.prototype = Object.assign(Object.create(_.a.prototype), {
                constructor: Ze,
                isBone: !0
            });
            var Qe = new RegExp("[\\[\\]\\.:\\/]", "g"),
                $e = "[^" + "\\[\\]\\.:\\/".replace("\\.", "") + "]",
                et = /((?:WC+[\/:])*)/.source.replace("WC", "[^\\[\\]\\.:\\/]"),
                tt = /(WCOD+)?/.source.replace("WCOD", $e),
                it = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", "[^\\[\\]\\.:\\/]"),
                at = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", "[^\\[\\]\\.:\\/]"),
                rt = new RegExp("^" + et + tt + it + at + "$"),
                nt = ["material", "materials", "bones"];

            function st(e, t, i) {
                var a = i || ot.parseTrackName(t);
                this._targetGroup = e, this._bindings = e.subscribe_(t, a)
            }

            function ot(e, t, i) {
                this.path = t, this.parsedPath = i || ot.parseTrackName(t), this.node = ot.findNode(e, this.parsedPath.nodeName) || e, this.rootNode = e
            }
            Object.assign(st.prototype, {
                getValue: function(e, t) {
                    this.bind();
                    var i = this._targetGroup.nCachedObjects_,
                        a = this._bindings[i];
                    void 0 !== a && a.getValue(e, t)
                },
                setValue: function(e, t) {
                    for (var i = this._bindings, a = this._targetGroup.nCachedObjects_, r = i.length; a !== r; ++a) i[a].setValue(e, t)
                },
                bind: function() {
                    for (var e = this._bindings, t = this._targetGroup.nCachedObjects_, i = e.length; t !== i; ++t) e[t].bind()
                },
                unbind: function() {
                    for (var e = this._bindings, t = this._targetGroup.nCachedObjects_, i = e.length; t !== i; ++t) e[t].unbind()
                }
            }), Object.assign(ot, {
                Composite: st,
                create: function(e, t, i) {
                    return e && e.isAnimationObjectGroup ? new ot.Composite(e, t, i) : new ot(e, t, i)
                },
                sanitizeNodeName: function(e) {
                    return e.replace(/\s/g, "_").replace(Qe, "")
                },
                parseTrackName: function(e) {
                    var t = rt.exec(e);
                    if (!t) throw new Error("PropertyBinding: Cannot parse trackName: " + e);
                    var i = {
                            nodeName: t[2],
                            objectName: t[3],
                            objectIndex: t[4],
                            propertyName: t[5],
                            propertyIndex: t[6]
                        },
                        a = i.nodeName && i.nodeName.lastIndexOf(".");
                    if (void 0 !== a && -1 !== a) {
                        var r = i.nodeName.substring(a + 1); - 1 !== nt.indexOf(r) && (i.nodeName = i.nodeName.substring(0, a), i.objectName = r)
                    }
                    if (null === i.propertyName || 0 === i.propertyName.length) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + e);
                    return i
                },
                findNode: function(e, t) {
                    if (!t || "" === t || "root" === t || "." === t || -1 === t || t === e.name || t === e.uuid) return e;
                    if (e.skeleton) {
                        var i = e.skeleton.getBoneByName(t);
                        if (void 0 !== i) return i
                    }
                    if (e.children) {
                        var a = function(e) {
                                for (var i = 0; i < e.length; i++) {
                                    var r = e[i];
                                    if (r.name === t || r.uuid === t) return r;
                                    var n = a(r.children);
                                    if (n) return n
                                }
                                return null
                            },
                            r = a(e.children);
                        if (r) return r
                    }
                    return null
                }
            }), Object.assign(ot.prototype, {
                _getValue_unavailable: function() {},
                _setValue_unavailable: function() {},
                BindingType: {
                    Direct: 0,
                    EntireArray: 1,
                    ArrayElement: 2,
                    HasFromToArray: 3
                },
                Versioning: {
                    None: 0,
                    NeedsUpdate: 1,
                    MatrixWorldNeedsUpdate: 2
                },
                GetterByBindingType: [function(e, t) {
                    e[t] = this.node[this.propertyName]
                }, function(e, t) {
                    for (var i = this.resolvedProperty, a = 0, r = i.length; a !== r; ++a) e[t++] = i[a]
                }, function(e, t) {
                    e[t] = this.resolvedProperty[this.propertyIndex]
                }, function(e, t) {
                    this.resolvedProperty.toArray(e, t)
                }],
                SetterByBindingTypeAndVersioning: [
                    [function(e, t) {
                        this.targetObject[this.propertyName] = e[t]
                    }, function(e, t) {
                        this.targetObject[this.propertyName] = e[t], this.targetObject.needsUpdate = !0
                    }, function(e, t) {
                        this.targetObject[this.propertyName] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0
                    }],
                    [function(e, t) {
                        for (var i = this.resolvedProperty, a = 0, r = i.length; a !== r; ++a) i[a] = e[t++]
                    }, function(e, t) {
                        for (var i = this.resolvedProperty, a = 0, r = i.length; a !== r; ++a) i[a] = e[t++];
                        this.targetObject.needsUpdate = !0
                    }, function(e, t) {
                        for (var i = this.resolvedProperty, a = 0, r = i.length; a !== r; ++a) i[a] = e[t++];
                        this.targetObject.matrixWorldNeedsUpdate = !0
                    }],
                    [function(e, t) {
                        this.resolvedProperty[this.propertyIndex] = e[t]
                    }, function(e, t) {
                        this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.needsUpdate = !0
                    }, function(e, t) {
                        this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0
                    }],
                    [function(e, t) {
                        this.resolvedProperty.fromArray(e, t)
                    }, function(e, t) {
                        this.resolvedProperty.fromArray(e, t), this.targetObject.needsUpdate = !0
                    }, function(e, t) {
                        this.resolvedProperty.fromArray(e, t), this.targetObject.matrixWorldNeedsUpdate = !0
                    }]
                ],
                getValue: function(e, t) {
                    this.bind(), this.getValue(e, t)
                },
                setValue: function(e, t) {
                    this.bind(), this.setValue(e, t)
                },
                bind: function() {
                    var e = this.node,
                        t = this.parsedPath,
                        i = t.objectName,
                        a = t.propertyName,
                        r = t.propertyIndex;
                    if (e || (e = ot.findNode(this.rootNode, t.nodeName) || this.rootNode, this.node = e), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, e) {
                        if (i) {
                            var n = t.objectIndex;
                            switch (i) {
                                case "materials":
                                    if (!e.material) return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
                                    if (!e.material.materials) return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
                                    e = e.material.materials;
                                    break;
                                case "bones":
                                    if (!e.skeleton) return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
                                    e = e.skeleton.bones;
                                    for (var s = 0; s < e.length; s++)
                                        if (e[s].name === n) {
                                            n = s;
                                            break
                                        }
                                    break;
                                default:
                                    if (void 0 === e[i]) return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
                                    e = e[i]
                            }
                            if (void 0 !== n) {
                                if (void 0 === e[n]) return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, e);
                                e = e[n]
                            }
                        }
                        var o = e[a];
                        if (void 0 !== o) {
                            var c = this.Versioning.None;
                            this.targetObject = e, void 0 !== e.needsUpdate ? c = this.Versioning.NeedsUpdate : void 0 !== e.matrixWorldNeedsUpdate && (c = this.Versioning.MatrixWorldNeedsUpdate);
                            var l = this.BindingType.Direct;
                            if (void 0 !== r) {
                                if ("morphTargetInfluences" === a) {
                                    if (!e.geometry) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
                                    if (e.geometry.isBufferGeometry) {
                                        if (!e.geometry.morphAttributes) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
                                        for (s = 0; s < this.node.geometry.morphAttributes.position.length; s++)
                                            if (e.geometry.morphAttributes.position[s].name === r) {
                                                r = s;
                                                break
                                            }
                                    } else {
                                        if (!e.geometry.morphTargets) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphTargets.", this);
                                        for (s = 0; s < this.node.geometry.morphTargets.length; s++)
                                            if (e.geometry.morphTargets[s].name === r) {
                                                r = s;
                                                break
                                            }
                                    }
                                }
                                l = this.BindingType.ArrayElement, this.resolvedProperty = o, this.propertyIndex = r
                            } else void 0 !== o.fromArray && void 0 !== o.toArray ? (l = this.BindingType.HasFromToArray, this.resolvedProperty = o) : Array.isArray(o) ? (l = this.BindingType.EntireArray, this.resolvedProperty = o) : this.propertyName = a;
                            this.getValue = this.GetterByBindingType[l], this.setValue = this.SetterByBindingTypeAndVersioning[l][c]
                        } else {
                            var h = t.nodeName;
                            console.error("THREE.PropertyBinding: Trying to update property for track: " + h + "." + a + " but it wasn't found.", e)
                        }
                    } else console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found.")
                },
                unbind: function() {
                    this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound
                }
            }), Object.assign(ot.prototype, {
                _getValue_unbound: ot.prototype.getValue,
                _setValue_unbound: ot.prototype.setValue
            });
            var ct = new L.a,
                lt = new L.a;

            function ht(e, t) {
                if (e = e || [], this.bones = e.slice(0), this.boneMatrices = new Float32Array(16 * this.bones.length), this.frame = -1, void 0 === t) this.calculateInverses();
                else if (this.bones.length === t.length) this.boneInverses = t.slice(0);
                else {
                    console.warn("THREE.Skeleton boneInverses is the wrong length."), this.boneInverses = [];
                    for (var i = 0, a = this.bones.length; i < a; i++) this.boneInverses.push(new L.a)
                }
            }
            Object.assign(ht.prototype, {
                calculateInverses: function() {
                    this.boneInverses = [];
                    for (var e = 0, t = this.bones.length; e < t; e++) {
                        var i = new L.a;
                        this.bones[e] && i.getInverse(this.bones[e].matrixWorld), this.boneInverses.push(i)
                    }
                },
                pose: function() {
                    var e, t, i;
                    for (t = 0, i = this.bones.length; t < i; t++)(e = this.bones[t]) && e.matrixWorld.getInverse(this.boneInverses[t]);
                    for (t = 0, i = this.bones.length; t < i; t++)(e = this.bones[t]) && (e.parent && e.parent.isBone ? (e.matrix.getInverse(e.parent.matrixWorld), e.matrix.multiply(e.matrixWorld)) : e.matrix.copy(e.matrixWorld), e.matrix.decompose(e.position, e.quaternion, e.scale))
                },
                update: function() {
                    for (var e = this.bones, t = this.boneInverses, i = this.boneMatrices, a = this.boneTexture, r = 0, n = e.length; r < n; r++) {
                        var s = e[r] ? e[r].matrixWorld : lt;
                        ct.multiplyMatrices(s, t[r]), ct.toArray(i, 16 * r)
                    }
                    void 0 !== a && (a.needsUpdate = !0)
                },
                clone: function() {
                    return new ht(this.bones, this.boneInverses)
                },
                getBoneByName: function(e) {
                    for (var t = 0, i = this.bones.length; t < i; t++) {
                        var a = this.bones[t];
                        if (a.name === e) return a
                    }
                }
            });
            var ut = function() {
                    function e(e) {
                        Q.a.call(this, e), this.dracoLoader = null, this.ddsLoader = null
                    }

                    function t() {
                        var e = {};
                        return {
                            get: function(t) {
                                return e[t]
                            },
                            add: function(t, i) {
                                e[t] = i
                            },
                            remove: function(t) {
                                delete e[t]
                            },
                            removeAll: function() {
                                e = {}
                            }
                        }
                    }
                    e.prototype = Object.assign(Object.create(Q.a.prototype), {
                        constructor: e,
                        load: function(e, t, i, a) {
                            var r, n = this;
                            r = "" !== this.resourcePath ? this.resourcePath : "" !== this.path ? this.path : $.extractUrlBase(e), n.manager.itemStart(e);
                            var s = function(t) {
                                    a ? a(t) : console.error(t), n.manager.itemError(e), n.manager.itemEnd(e)
                                },
                                o = new ie(n.manager);
                            o.setPath(this.path), o.setResponseType("arraybuffer"), "use-credentials" === n.crossOrigin && o.setWithCredentials(!0), o.load(e, (function(i) {
                                try {
                                    n.parse(i, r, (function(i) {
                                        t(i), n.manager.itemEnd(e)
                                    }), s)
                                } catch (a) {
                                    s(a)
                                }
                            }), i, s)
                        },
                        setDRACOLoader: function(e) {
                            return this.dracoLoader = e, this
                        },
                        setDDSLoader: function(e) {
                            return this.ddsLoader = e, this
                        },
                        parse: function(e, t, s, o) {
                            var c, l = {};
                            if ("string" === typeof e) c = e;
                            else if ($.decodeText(new Uint8Array(e, 0, 4)) === h) {
                                try {
                                    l[i.KHR_BINARY_GLTF] = new g(e)
                                } catch (m) {
                                    return void(o && o(m))
                                }
                                c = l[i.KHR_BINARY_GLTF].content
                            } else c = $.decodeText(new Uint8Array(e));
                            var u = JSON.parse(c);
                            if (void 0 === u.asset || u.asset.version[0] < 2) o && o(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
                            else {
                                if (u.extensionsUsed)
                                    for (var p = 0; p < u.extensionsUsed.length; ++p) {
                                        var d = u.extensionsUsed[p],
                                            f = u.extensionsRequired || [];
                                        switch (d) {
                                            case i.KHR_LIGHTS_PUNCTUAL:
                                                l[d] = new r(u);
                                                break;
                                            case i.KHR_MATERIALS_UNLIT:
                                                l[d] = new n;
                                                break;
                                            case i.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:
                                                l[d] = new C;
                                                break;
                                            case i.KHR_DRACO_MESH_COMPRESSION:
                                                l[d] = new y(u, this.dracoLoader);
                                                break;
                                            case i.MSFT_TEXTURE_DDS:
                                                l[d] = new a(this.ddsLoader);
                                                break;
                                            case i.KHR_TEXTURE_TRANSFORM:
                                                l[d] = new w;
                                                break;
                                            case i.KHR_MESH_QUANTIZATION:
                                                l[d] = new O;
                                                break;
                                            default:
                                                f.indexOf(d) >= 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + d + '".')
                                        }
                                    }
                                new we(u, l, {
                                    path: t || this.resourcePath || "",
                                    crossOrigin: this.crossOrigin,
                                    manager: this.manager
                                }).parse(s, o)
                            }
                        }
                    });
                    var i = {
                        KHR_BINARY_GLTF: "KHR_binary_glTF",
                        KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
                        KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
                        KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS: "KHR_materials_pbrSpecularGlossiness",
                        KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
                        KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
                        KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
                        MSFT_TEXTURE_DDS: "MSFT_texture_dds"
                    };

                    function a(e) {
                        if (!e) throw new Error("THREE.GLTFLoader: Attempting to load .dds texture without importing DDSLoader");
                        this.name = i.MSFT_TEXTURE_DDS, this.ddsLoader = e
                    }

                    function r(e) {
                        this.name = i.KHR_LIGHTS_PUNCTUAL;
                        var t = e.extensions && e.extensions[i.KHR_LIGHTS_PUNCTUAL] || {};
                        this.lightDefs = t.lights || []
                    }

                    function n() {
                        this.name = i.KHR_MATERIALS_UNLIT
                    }
                    r.prototype.loadLight = function(e) {
                        var t, i = this.lightDefs[e],
                            a = new T.a(16777215);
                        void 0 !== i.color && a.fromArray(i.color);
                        var r = void 0 !== i.range ? i.range : 0;
                        switch (i.type) {
                            case "directional":
                                (t = new re(a)).target.position.set(0, 0, -1), t.add(t.target);
                                break;
                            case "point":
                                (t = new j(a)).distance = r;
                                break;
                            case "spot":
                                (t = new se(a)).distance = r, i.spot = i.spot || {}, i.spot.innerConeAngle = void 0 !== i.spot.innerConeAngle ? i.spot.innerConeAngle : 0, i.spot.outerConeAngle = void 0 !== i.spot.outerConeAngle ? i.spot.outerConeAngle : Math.PI / 4, t.angle = i.spot.outerConeAngle, t.penumbra = 1 - i.spot.innerConeAngle / i.spot.outerConeAngle, t.target.position.set(0, 0, -1), t.add(t.target);
                                break;
                            default:
                                throw new Error('THREE.GLTFLoader: Unexpected light type, "' + i.type + '".')
                        }
                        return t.position.set(0, 0, 0), t.decay = 2, void 0 !== i.intensity && (t.intensity = i.intensity), t.name = i.name || "light_" + e, Promise.resolve(t)
                    }, n.prototype.getMaterialType = function() {
                        return S.a
                    }, n.prototype.extendParams = function(e, t, i) {
                        var a = [];
                        e.color = new T.a(1, 1, 1), e.opacity = 1;
                        var r = t.pbrMetallicRoughness;
                        if (r) {
                            if (Array.isArray(r.baseColorFactor)) {
                                var n = r.baseColorFactor;
                                e.color.fromArray(n), e.opacity = n[3]
                            }
                            void 0 !== r.baseColorTexture && a.push(i.assignTexture(e, "map", r.baseColorTexture))
                        }
                        return Promise.all(a)
                    };
                    var h = "glTF",
                        m = 12,
                        v = {
                            JSON: 1313821514,
                            BIN: 5130562
                        };

                    function g(e) {
                        this.name = i.KHR_BINARY_GLTF, this.content = null, this.body = null;
                        var t = new DataView(e, 0, m);
                        if (this.header = {
                                magic: $.decodeText(new Uint8Array(e.slice(0, 4))),
                                version: t.getUint32(4, !0),
                                length: t.getUint32(8, !0)
                            }, this.header.magic !== h) throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
                        if (this.header.version < 2) throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
                        for (var a = new DataView(e, m), r = 0; r < a.byteLength;) {
                            var n = a.getUint32(r, !0);
                            r += 4;
                            var s = a.getUint32(r, !0);
                            if (r += 4, s === v.JSON) {
                                var o = new Uint8Array(e, m + r, n);
                                this.content = $.decodeText(o)
                            } else if (s === v.BIN) {
                                var c = m + r;
                                this.body = e.slice(c, c + n)
                            }
                            r += n
                        }
                        if (null === this.content) throw new Error("THREE.GLTFLoader: JSON content not found.")
                    }

                    function y(e, t) {
                        if (!t) throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
                        this.name = i.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload()
                    }

                    function w() {
                        this.name = i.KHR_TEXTURE_TRANSFORM
                    }

                    function C() {
                        return {
                            name: i.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,
                            specularGlossinessParams: ["color", "map", "lightMap", "lightMapIntensity", "aoMap", "aoMapIntensity", "emissive", "emissiveIntensity", "emissiveMap", "bumpMap", "bumpScale", "normalMap", "displacementMap", "displacementScale", "displacementBias", "specularMap", "specular", "glossinessMap", "glossiness", "alphaMap", "envMap", "envMapIntensity", "refractionRatio"],
                            getMaterialType: function() {
                                return x.a
                            },
                            extendParams: function(e, t, i) {
                                var a = t.extensions[this.name],
                                    r = oe.a.standard,
                                    n = G.a.clone(r.uniforms),
                                    s = ["#ifdef USE_SPECULARMAP", "\tuniform sampler2D specularMap;", "#endif"].join("\n"),
                                    o = ["#ifdef USE_GLOSSINESSMAP", "\tuniform sampler2D glossinessMap;", "#endif"].join("\n"),
                                    c = ["vec3 specularFactor = specular;", "#ifdef USE_SPECULARMAP", "\tvec4 texelSpecular = texture2D( specularMap, vUv );", "\ttexelSpecular = sRGBToLinear( texelSpecular );", "\t// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture", "\tspecularFactor *= texelSpecular.rgb;", "#endif"].join("\n"),
                                    l = ["float glossinessFactor = glossiness;", "#ifdef USE_GLOSSINESSMAP", "\tvec4 texelGlossiness = texture2D( glossinessMap, vUv );", "\t// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture", "\tglossinessFactor *= texelGlossiness.a;", "#endif"].join("\n"),
                                    h = ["PhysicalMaterial material;", "material.diffuseColor = diffuseColor.rgb;", "material.specularRoughness = clamp( 1.0 - glossinessFactor, 0.04, 1.0 );", "material.specularColor = specularFactor.rgb;"].join("\n"),
                                    u = r.fragmentShader.replace("uniform float roughness;", "uniform vec3 specular;").replace("uniform float metalness;", "uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>", s).replace("#include <metalnessmap_pars_fragment>", o).replace("#include <roughnessmap_fragment>", c).replace("#include <metalnessmap_fragment>", l).replace("#include <lights_physical_fragment>", h);
                                delete n.roughness, delete n.metalness, delete n.roughnessMap, delete n.metalnessMap, n.specular = {
                                    value: (new T.a).setHex(1118481)
                                }, n.glossiness = {
                                    value: .5
                                }, n.specularMap = {
                                    value: null
                                }, n.glossinessMap = {
                                    value: null
                                }, e.vertexShader = r.vertexShader, e.fragmentShader = u, e.uniforms = n, e.defines = {
                                    STANDARD: ""
                                }, e.color = new T.a(1, 1, 1), e.opacity = 1;
                                var p = [];
                                if (Array.isArray(a.diffuseFactor)) {
                                    var d = a.diffuseFactor;
                                    e.color.fromArray(d), e.opacity = d[3]
                                }
                                if (void 0 !== a.diffuseTexture && p.push(i.assignTexture(e, "map", a.diffuseTexture)), e.emissive = new T.a(0, 0, 0), e.glossiness = void 0 !== a.glossinessFactor ? a.glossinessFactor : 1, e.specular = new T.a(1, 1, 1), Array.isArray(a.specularFactor) && e.specular.fromArray(a.specularFactor), void 0 !== a.specularGlossinessTexture) {
                                    var f = a.specularGlossinessTexture;
                                    p.push(i.assignTexture(e, "glossinessMap", f)), p.push(i.assignTexture(e, "specularMap", f))
                                }
                                return Promise.all(p)
                            },
                            createMaterial: function(e) {
                                var t = new x.a({
                                    defines: e.defines,
                                    vertexShader: e.vertexShader,
                                    fragmentShader: e.fragmentShader,
                                    uniforms: e.uniforms,
                                    fog: !0,
                                    lights: !0,
                                    opacity: e.opacity,
                                    transparent: e.transparent
                                });
                                return t.isGLTFSpecularGlossinessMaterial = !0, t.color = e.color, t.map = void 0 === e.map ? null : e.map, t.lightMap = null, t.lightMapIntensity = 1, t.aoMap = void 0 === e.aoMap ? null : e.aoMap, t.aoMapIntensity = 1, t.emissive = e.emissive, t.emissiveIntensity = 1, t.emissiveMap = void 0 === e.emissiveMap ? null : e.emissiveMap, t.bumpMap = void 0 === e.bumpMap ? null : e.bumpMap, t.bumpScale = 1, t.normalMap = void 0 === e.normalMap ? null : e.normalMap, e.normalScale && (t.normalScale = e.normalScale), t.displacementMap = null, t.displacementScale = 1, t.displacementBias = 0, t.specularMap = void 0 === e.specularMap ? null : e.specularMap, t.specular = e.specular, t.glossinessMap = void 0 === e.glossinessMap ? null : e.glossinessMap, t.glossiness = e.glossiness, t.alphaMap = null, t.envMap = void 0 === e.envMap ? null : e.envMap, t.envMapIntensity = 1, t.refractionRatio = .98, t.extensions.derivatives = !0, t
                            },
                            cloneMaterial: function(e) {
                                var t = e.clone();
                                t.isGLTFSpecularGlossinessMaterial = !0;
                                for (var i = this.specularGlossinessParams, a = 0, r = i.length; a < r; a++) {
                                    var n = e[i[a]];
                                    t[i[a]] = n && n.isColor ? n.clone() : n
                                }
                                return t
                            },
                            refreshUniforms: function(e, t, i, a, r) {
                                if (!0 === r.isGLTFSpecularGlossinessMaterial) {
                                    var n, s = r.uniforms,
                                        o = r.defines;
                                    s.opacity.value = r.opacity, s.diffuse.value.copy(r.color), s.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity), s.map.value = r.map, s.specularMap.value = r.specularMap, s.alphaMap.value = r.alphaMap, s.lightMap.value = r.lightMap, s.lightMapIntensity.value = r.lightMapIntensity, s.aoMap.value = r.aoMap, s.aoMapIntensity.value = r.aoMapIntensity, r.map ? n = r.map : r.specularMap ? n = r.specularMap : r.displacementMap ? n = r.displacementMap : r.normalMap ? n = r.normalMap : r.bumpMap ? n = r.bumpMap : r.glossinessMap ? n = r.glossinessMap : r.alphaMap ? n = r.alphaMap : r.emissiveMap && (n = r.emissiveMap), void 0 !== n && (n.isWebGLRenderTarget && (n = n.texture), !0 === n.matrixAutoUpdate && n.updateMatrix(), s.uvTransform.value.copy(n.matrix)), r.envMap && (s.envMap.value = r.envMap, s.envMapIntensity.value = r.envMapIntensity, s.flipEnvMap.value = r.envMap.isCubeTexture ? -1 : 1, s.reflectivity.value = r.reflectivity, s.refractionRatio.value = r.refractionRatio, s.maxMipLevel.value = e.properties.get(r.envMap).__maxMipLevel), s.specular.value.copy(r.specular), s.glossiness.value = r.glossiness, s.glossinessMap.value = r.glossinessMap, s.emissiveMap.value = r.emissiveMap, s.bumpMap.value = r.bumpMap, s.normalMap.value = r.normalMap, s.displacementMap.value = r.displacementMap, s.displacementScale.value = r.displacementScale, s.displacementBias.value = r.displacementBias, null !== s.glossinessMap.value && void 0 === o.USE_GLOSSINESSMAP && (o.USE_GLOSSINESSMAP = "", o.USE_ROUGHNESSMAP = ""), null === s.glossinessMap.value && void 0 !== o.USE_GLOSSINESSMAP && (delete o.USE_GLOSSINESSMAP, delete o.USE_ROUGHNESSMAP)
                                }
                            }
                        }
                    }

                    function O() {
                        this.name = i.KHR_MESH_QUANTIZATION
                    }

                    function E(e, t, i, a) {
                        ce.call(this, e, t, i, a)
                    }
                    y.prototype.decodePrimitive = function(e, t) {
                        var i = this.json,
                            a = this.dracoLoader,
                            r = e.extensions[this.name].bufferView,
                            n = e.extensions[this.name].attributes,
                            s = {},
                            o = {},
                            c = {};
                        for (var l in n) {
                            var h = K[l] || l.toLowerCase();
                            s[h] = n[l]
                        }
                        for (l in e.attributes) {
                            h = K[l] || l.toLowerCase();
                            if (void 0 !== n[l]) {
                                var u = i.accessors[e.attributes[l]],
                                    p = z[u.componentType];
                                c[h] = p, o[h] = !0 === u.normalized
                            }
                        }
                        return t.getDependency("bufferView", r).then((function(e) {
                            return new Promise((function(t) {
                                a.decodeDracoFile(e, (function(e) {
                                    for (var i in e.attributes) {
                                        var a = e.attributes[i],
                                            r = o[i];
                                        void 0 !== r && (a.normalized = r)
                                    }
                                    t(e)
                                }), s, c)
                            }))
                        }))
                    }, w.prototype.extendTexture = function(e, t) {
                        return e = e.clone(), void 0 !== t.offset && e.offset.fromArray(t.offset), void 0 !== t.rotation && (e.rotation = t.rotation), void 0 !== t.scale && e.repeat.fromArray(t.scale), void 0 !== t.texCoord && console.warn('THREE.GLTFLoader: Custom UV sets in "' + this.name + '" extension not yet supported.'), e.needsUpdate = !0, e
                    }, E.prototype = Object.create(ce.prototype), E.prototype.constructor = E, E.prototype.copySampleValue_ = function(e) {
                        for (var t = this.resultBuffer, i = this.sampleValues, a = this.valueSize, r = e * a * 3 + a, n = 0; n !== a; n++) t[n] = i[r + n];
                        return t
                    }, E.prototype.beforeStart_ = E.prototype.copySampleValue_, E.prototype.afterEnd_ = E.prototype.copySampleValue_, E.prototype.interpolate_ = function(e, t, i, a) {
                        for (var r = this.resultBuffer, n = this.sampleValues, s = this.valueSize, o = 2 * s, c = 3 * s, l = a - t, h = (i - t) / l, u = h * h, p = u * h, d = e * c, f = d - c, m = -2 * p + 3 * u, v = p - u, g = 1 - m, y = v - u + h, b = 0; b !== s; b++) {
                            var w = n[f + b + s],
                                x = n[f + b + o] * l,
                                M = n[d + b + s],
                                S = n[d + b] * l;
                            r[b] = g * w + y * x + m * M + v * S
                        }
                        return r
                    };
                    var R = 0,
                        I = 1,
                        P = 2,
                        D = 3,
                        U = 4,
                        F = 5,
                        H = 6,
                        z = {
                            5120: Int8Array,
                            5121: Uint8Array,
                            5122: Int16Array,
                            5123: Uint16Array,
                            5125: Uint32Array,
                            5126: Float32Array
                        },
                        B = {
                            9728: f.eb,
                            9729: f.R,
                            9984: f.gb,
                            9985: f.T,
                            9986: f.fb,
                            9987: f.S
                        },
                        V = {
                            33071: f.l,
                            33648: f.ab,
                            10497: f.gc
                        },
                        W = {
                            SCALAR: 1,
                            VEC2: 2,
                            VEC3: 3,
                            VEC4: 4,
                            MAT2: 4,
                            MAT3: 9,
                            MAT4: 16
                        },
                        K = {
                            POSITION: "position",
                            NORMAL: "normal",
                            TANGENT: "tangent",
                            TEXCOORD_0: "uv",
                            TEXCOORD_1: "uv2",
                            COLOR_0: "color",
                            WEIGHTS_0: "skinWeight",
                            JOINTS_0: "skinIndex"
                        },
                        X = {
                            scale: "scale",
                            translation: "position",
                            rotation: "quaternion",
                            weights: "morphTargetInfluences"
                        },
                        J = {
                            CUBICSPLINE: void 0,
                            LINEAR: f.L,
                            STEP: f.K
                        },
                        Y = "OPAQUE",
                        q = "MASK",
                        Z = "BLEND",
                        ee = {
                            "image/png": f.wb,
                            "image/jpeg": f.Tb
                        };

                    function te(e, t) {
                        return "string" !== typeof e || "" === e ? "" : (/^https?:\/\//i.test(t) && /^\//.test(e) && (t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(e) ? e : /^data:.*,.*$/i.test(e) ? e : /^blob:.*$/i.test(e) ? e : t + e)
                    }

                    function ae(e, t, i) {
                        for (var a in i.extensions) void 0 === e[a] && (t.userData.gltfExtensions = t.userData.gltfExtensions || {}, t.userData.gltfExtensions[a] = i.extensions[a])
                    }

                    function ne(e, t) {
                        void 0 !== t.extras && ("object" === typeof t.extras ? Object.assign(e.userData, t.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + t.extras))
                    }

                    function he(e, t) {
                        if (e.updateMorphTargets(), void 0 !== t.weights)
                            for (var i = 0, a = t.weights.length; i < a; i++) e.morphTargetInfluences[i] = t.weights[i];
                        if (t.extras && Array.isArray(t.extras.targetNames)) {
                            var r = t.extras.targetNames;
                            if (e.morphTargetInfluences.length === r.length) {
                                e.morphTargetDictionary = {};
                                for (i = 0, a = r.length; i < a; i++) e.morphTargetDictionary[r[i]] = i
                            } else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")
                        }
                    }

                    function de(e) {
                        var t = e.extensions && e.extensions[i.KHR_DRACO_MESH_COMPRESSION];
                        return t ? "draco:" + t.bufferView + ":" + t.indices + ":" + be(t.attributes) : e.indices + ":" + be(e.attributes) + ":" + e.mode
                    }

                    function be(e) {
                        for (var t = "", i = Object.keys(e).sort(), a = 0, r = i.length; a < r; a++) t += i[a] + ":" + e[i[a]] + ";";
                        return t
                    }

                    function we(e, i, a) {
                        this.json = e || {}, this.extensions = i || {}, this.options = a || {}, this.cache = new t, this.primitiveCache = {}, this.textureLoader = new ue(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.fileLoader = new ie(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), "use-credentials" === this.options.crossOrigin && this.fileLoader.setWithCredentials(!0)
                    }

                    function xe(e, t, i) {
                        var a = t.attributes,
                            r = [];

                        function n(t, a) {
                            return i.getDependency("accessor", t).then((function(t) {
                                e.setAttribute(a, t)
                            }))
                        }
                        for (var s in a) {
                            var o = K[s] || s.toLowerCase();
                            o in e.attributes || r.push(n(a[s], o))
                        }
                        if (void 0 !== t.indices && !e.index) {
                            var h = i.getDependency("accessor", t.indices).then((function(t) {
                                e.setIndex(t)
                            }));
                            r.push(h)
                        }
                        return ne(e, t),
                            function(e, t, i) {
                                var a = t.attributes,
                                    r = new ge.a;
                                if (void 0 !== a.POSITION) {
                                    var n = (f = i.json.accessors[a.POSITION]).min,
                                        s = f.max;
                                    if (void 0 !== n && void 0 !== s) {
                                        r.set(new l.a(n[0], n[1], n[2]), new l.a(s[0], s[1], s[2]));
                                        var o = t.targets;
                                        if (void 0 !== o)
                                            for (var h = new l.a, u = 0, p = o.length; u < p; u++) {
                                                var d = o[u];
                                                if (void 0 !== d.POSITION) {
                                                    var f;
                                                    n = (f = i.json.accessors[d.POSITION]).min, s = f.max;
                                                    void 0 !== n && void 0 !== s ? (h.setX(Math.max(Math.abs(n[0]), Math.abs(s[0]))), h.setY(Math.max(Math.abs(n[1]), Math.abs(s[1]))), h.setZ(Math.max(Math.abs(n[2]), Math.abs(s[2]))), r.expandByVector(h)) : console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")
                                                }
                                            }
                                        e.boundingBox = r;
                                        var m = new c.a;
                                        r.getCenter(m.center), m.radius = r.min.distanceTo(r.max) / 2, e.boundingSphere = m
                                    } else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")
                                }
                            }(e, t, i), Promise.all(r).then((function() {
                                return void 0 !== t.targets ? function(e, t, i) {
                                    for (var a = !1, r = !1, n = 0, s = t.length; n < s; n++) {
                                        if (void 0 !== (l = t[n]).POSITION && (a = !0), void 0 !== l.NORMAL && (r = !0), a && r) break
                                    }
                                    if (!a && !r) return Promise.resolve(e);
                                    var o = [],
                                        c = [];
                                    for (n = 0, s = t.length; n < s; n++) {
                                        var l = t[n];
                                        if (a) {
                                            var h = void 0 !== l.POSITION ? i.getDependency("accessor", l.POSITION) : e.attributes.position;
                                            o.push(h)
                                        }
                                        if (r) {
                                            h = void 0 !== l.NORMAL ? i.getDependency("accessor", l.NORMAL) : e.attributes.normal;
                                            c.push(h)
                                        }
                                    }
                                    return Promise.all([Promise.all(o), Promise.all(c)]).then((function(t) {
                                        var i = t[0],
                                            n = t[1];
                                        return a && (e.morphAttributes.position = i), r && (e.morphAttributes.normal = n), e.morphTargetsRelative = !0, e
                                    }))
                                }(e, t.targets, i) : e
                            }))
                    }

                    function Me(e, t) {
                        var i = e.getIndex();
                        if (null === i) {
                            var a = [],
                                r = e.getAttribute("position");
                            if (void 0 === r) return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), e;
                            for (var n = 0; n < r.count; n++) a.push(n);
                            e.setIndex(a), i = e.getIndex()
                        }
                        var s = i.count - 2,
                            o = [];
                        if (t === f.rc)
                            for (n = 1; n <= s; n++) o.push(i.getX(0)), o.push(i.getX(n)), o.push(i.getX(n + 1));
                        else
                            for (n = 0; n < s; n++) n % 2 === 0 ? (o.push(i.getX(n)), o.push(i.getX(n + 1)), o.push(i.getX(n + 2))) : (o.push(i.getX(n + 2)), o.push(i.getX(n + 1)), o.push(i.getX(n)));
                        o.length / 3 !== s && console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
                        var c = e.clone();
                        return c.setIndex(o), c
                    }
                    return we.prototype.parse = function(e, t) {
                        var i = this,
                            a = this.json,
                            r = this.extensions;
                        this.cache.removeAll(), this.markDefs(), Promise.all([this.getDependencies("scene"), this.getDependencies("animation"), this.getDependencies("camera")]).then((function(t) {
                            var n = {
                                scene: t[0][a.scene || 0],
                                scenes: t[0],
                                animations: t[1],
                                cameras: t[2],
                                asset: a.asset,
                                parser: i,
                                userData: {}
                            };
                            ae(r, n, a), ne(n, a), e(n)
                        })).catch(t)
                    }, we.prototype.markDefs = function() {
                        for (var e = this.json.nodes || [], t = this.json.skins || [], i = this.json.meshes || [], a = {}, r = {}, n = 0, s = t.length; n < s; n++)
                            for (var o = t[n].joints, c = 0, l = o.length; c < l; c++) e[o[c]].isBone = !0;
                        for (var h = 0, u = e.length; h < u; h++) {
                            var p = e[h];
                            void 0 !== p.mesh && (void 0 === a[p.mesh] && (a[p.mesh] = r[p.mesh] = 0), a[p.mesh]++, void 0 !== p.skin && (i[p.mesh].isSkinnedMesh = !0))
                        }
                        this.json.meshReferences = a, this.json.meshUses = r
                    }, we.prototype.getDependency = function(e, t) {
                        var a = e + ":" + t,
                            r = this.cache.get(a);
                        if (!r) {
                            switch (e) {
                                case "scene":
                                    r = this.loadScene(t);
                                    break;
                                case "node":
                                    r = this.loadNode(t);
                                    break;
                                case "mesh":
                                    r = this.loadMesh(t);
                                    break;
                                case "accessor":
                                    r = this.loadAccessor(t);
                                    break;
                                case "bufferView":
                                    r = this.loadBufferView(t);
                                    break;
                                case "buffer":
                                    r = this.loadBuffer(t);
                                    break;
                                case "material":
                                    r = this.loadMaterial(t);
                                    break;
                                case "texture":
                                    r = this.loadTexture(t);
                                    break;
                                case "skin":
                                    r = this.loadSkin(t);
                                    break;
                                case "animation":
                                    r = this.loadAnimation(t);
                                    break;
                                case "camera":
                                    r = this.loadCamera(t);
                                    break;
                                case "light":
                                    r = this.extensions[i.KHR_LIGHTS_PUNCTUAL].loadLight(t);
                                    break;
                                default:
                                    throw new Error("Unknown type: " + e)
                            }
                            this.cache.add(a, r)
                        }
                        return r
                    }, we.prototype.getDependencies = function(e) {
                        var t = this.cache.get(e);
                        if (!t) {
                            var i = this,
                                a = this.json[e + ("mesh" === e ? "es" : "s")] || [];
                            t = Promise.all(a.map((function(t, a) {
                                return i.getDependency(e, a)
                            }))), this.cache.add(e, t)
                        }
                        return t
                    }, we.prototype.loadBuffer = function(e) {
                        var t = this.json.buffers[e],
                            a = this.fileLoader;
                        if (t.type && "arraybuffer" !== t.type) throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
                        if (void 0 === t.uri && 0 === e) return Promise.resolve(this.extensions[i.KHR_BINARY_GLTF].body);
                        var r = this.options;
                        return new Promise((function(e, i) {
                            a.load(te(t.uri, r.path), e, void 0, (function() {
                                i(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'))
                            }))
                        }))
                    }, we.prototype.loadBufferView = function(e) {
                        var t = this.json.bufferViews[e];
                        return this.getDependency("buffer", t.buffer).then((function(e) {
                            var i = t.byteLength || 0,
                                a = t.byteOffset || 0;
                            return e.slice(a, a + i)
                        }))
                    }, we.prototype.loadAccessor = function(e) {
                        var t = this,
                            i = this.json,
                            a = this.json.accessors[e];
                        if (void 0 === a.bufferView && void 0 === a.sparse) return Promise.resolve(null);
                        var r = [];
                        return void 0 !== a.bufferView ? r.push(this.getDependency("bufferView", a.bufferView)) : r.push(null), void 0 !== a.sparse && (r.push(this.getDependency("bufferView", a.sparse.indices.bufferView)), r.push(this.getDependency("bufferView", a.sparse.values.bufferView))), Promise.all(r).then((function(e) {
                            var r, n, s = e[0],
                                o = W[a.type],
                                c = z[a.componentType],
                                l = c.BYTES_PER_ELEMENT,
                                h = l * o,
                                u = a.byteOffset || 0,
                                p = void 0 !== a.bufferView ? i.bufferViews[a.bufferView].byteStride : void 0,
                                d = !0 === a.normalized;
                            if (p && p !== h) {
                                var f = Math.floor(u / p),
                                    m = "InterleavedBuffer:" + a.bufferView + ":" + a.componentType + ":" + f + ":" + a.count,
                                    v = t.cache.get(m);
                                v || (v = new pe(r = new c(s, f * p, a.count * p / l), p / l), t.cache.add(m, v)), n = new fe(v, o, u % p / l, d)
                            } else r = null === s ? new c(a.count * o) : new c(s, u, a.count * o), n = new k.a(r, o, d);
                            if (void 0 !== a.sparse) {
                                var g = W.SCALAR,
                                    y = z[a.sparse.indices.componentType],
                                    b = a.sparse.indices.byteOffset || 0,
                                    w = a.sparse.values.byteOffset || 0,
                                    x = new y(e[1], b, a.sparse.count * g),
                                    M = new c(e[2], w, a.sparse.count * o);
                                null !== s && (n = new k.a(n.array.slice(), n.itemSize, n.normalized));
                                for (var S = 0, T = x.length; S < T; S++) {
                                    var A = x[S];
                                    if (n.setX(A, M[S * o]), o >= 2 && n.setY(A, M[S * o + 1]), o >= 3 && n.setZ(A, M[S * o + 2]), o >= 4 && n.setW(A, M[S * o + 3]), o >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")
                                }
                            }
                            return n
                        }))
                    }, we.prototype.loadTexture = function(e) {
                        var t, a = this,
                            r = this.json,
                            n = this.options,
                            s = this.textureLoader,
                            o = window.URL || window.webkitURL,
                            c = r.textures[e],
                            l = c.extensions || {},
                            h = (t = l[i.MSFT_TEXTURE_DDS] ? r.images[l[i.MSFT_TEXTURE_DDS].source] : r.images[c.source]).uri,
                            u = !1;
                        return void 0 !== t.bufferView && (h = a.getDependency("bufferView", t.bufferView).then((function(e) {
                            u = !0;
                            var i = new Blob([e], {
                                type: t.mimeType
                            });
                            return h = o.createObjectURL(i)
                        }))), Promise.resolve(h).then((function(e) {
                            var t = n.manager.getHandler(e);
                            return t || (t = l[i.MSFT_TEXTURE_DDS] ? a.extensions[i.MSFT_TEXTURE_DDS].ddsLoader : s), new Promise((function(i, a) {
                                t.load(te(e, n.path), i, void 0, a)
                            }))
                        })).then((function(e) {
                            !0 === u && o.revokeObjectURL(h), e.flipY = !1, void 0 !== c.name && (e.name = c.name), t.mimeType in ee && (e.format = ee[t.mimeType]);
                            var i = (r.samplers || {})[c.sampler] || {};
                            return e.magFilter = B[i.magFilter] || f.R, e.minFilter = B[i.minFilter] || f.S, e.wrapS = V[i.wrapS] || f.gc, e.wrapT = V[i.wrapT] || f.gc, e
                        }))
                    }, we.prototype.assignTexture = function(e, t, a) {
                        var r = this;
                        return this.getDependency("texture", a.index).then((function(n) {
                            if (!n.isCompressedTexture) switch (t) {
                                case "aoMap":
                                case "emissiveMap":
                                case "metalnessMap":
                                case "normalMap":
                                case "roughnessMap":
                                    n.format = f.Tb
                            }
                            if (void 0 === a.texCoord || 0 == a.texCoord || "aoMap" === t && 1 == a.texCoord || console.warn("THREE.GLTFLoader: Custom UV set " + a.texCoord + " for texture " + t + " not yet supported."), r.extensions[i.KHR_TEXTURE_TRANSFORM]) {
                                var s = void 0 !== a.extensions ? a.extensions[i.KHR_TEXTURE_TRANSFORM] : void 0;
                                s && (n = r.extensions[i.KHR_TEXTURE_TRANSFORM].extendTexture(n, s))
                            }
                            e[t] = n
                        }))
                    }, we.prototype.assignFinalMaterial = function(e) {
                        var t = e.geometry,
                            a = e.material,
                            r = this.extensions,
                            n = void 0 !== t.attributes.tangent,
                            s = void 0 !== t.attributes.color,
                            o = void 0 === t.attributes.normal,
                            c = !0 === e.isSkinnedMesh,
                            l = Object.keys(t.morphAttributes).length > 0,
                            h = l && void 0 !== t.morphAttributes.normal;
                        if (e.isPoints) {
                            var u = "PointsMaterial:" + a.uuid,
                                p = this.cache.get(u);
                            p || (p = new me, A.a.prototype.copy.call(p, a), p.color.copy(a.color), p.map = a.map, p.sizeAttenuation = !1, this.cache.add(u, p)), a = p
                        } else if (e.isLine) {
                            u = "LineBasicMaterial:" + a.uuid;
                            var d = this.cache.get(u);
                            d || (d = new ve, A.a.prototype.copy.call(d, a), d.color.copy(a.color), this.cache.add(u, d)), a = d
                        }
                        if (n || s || o || c || l) {
                            u = "ClonedMaterial:" + a.uuid + ":";
                            a.isGLTFSpecularGlossinessMaterial && (u += "specular-glossiness:"), c && (u += "skinning:"), n && (u += "vertex-tangents:"), s && (u += "vertex-colors:"), o && (u += "flat-shading:"), l && (u += "morph-targets:"), h && (u += "morph-normals:");
                            var m = this.cache.get(u);
                            m || (m = a.isGLTFSpecularGlossinessMaterial ? r[i.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].cloneMaterial(a) : a.clone(), c && (m.skinning = !0), n && (m.vertexTangents = !0), s && (m.vertexColors = f.Dc), o && (m.flatShading = !0), l && (m.morphTargets = !0), h && (m.morphNormals = !0), this.cache.add(u, m)), a = m
                        }
                        a.aoMap && void 0 === t.attributes.uv2 && void 0 !== t.attributes.uv && t.setAttribute("uv2", new k.a(t.attributes.uv.array, 2)), a.isGLTFSpecularGlossinessMaterial && (e.onBeforeRender = r[i.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].refreshUniforms), a.normalScale && !n && (a.normalScale.y = -a.normalScale.y), e.material = a
                    }, we.prototype.loadMaterial = function(e) {
                        var t, a = this.json,
                            r = this.extensions,
                            n = a.materials[e],
                            o = {},
                            c = n.extensions || {},
                            l = [];
                        if (c[i.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]) {
                            var h = r[i.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];
                            t = h.getMaterialType(), l.push(h.extendParams(o, n, this))
                        } else if (c[i.KHR_MATERIALS_UNLIT]) {
                            var u = r[i.KHR_MATERIALS_UNLIT];
                            t = u.getMaterialType(), l.push(u.extendParams(o, n, this))
                        } else {
                            t = le;
                            var p = n.pbrMetallicRoughness || {};
                            if (o.color = new T.a(1, 1, 1), o.opacity = 1, Array.isArray(p.baseColorFactor)) {
                                var d = p.baseColorFactor;
                                o.color.fromArray(d), o.opacity = d[3]
                            }
                            void 0 !== p.baseColorTexture && l.push(this.assignTexture(o, "map", p.baseColorTexture)), o.metalness = void 0 !== p.metallicFactor ? p.metallicFactor : 1, o.roughness = void 0 !== p.roughnessFactor ? p.roughnessFactor : 1, void 0 !== p.metallicRoughnessTexture && (l.push(this.assignTexture(o, "metalnessMap", p.metallicRoughnessTexture)), l.push(this.assignTexture(o, "roughnessMap", p.metallicRoughnessTexture)))
                        }!0 === n.doubleSided && (o.side = f.w);
                        var m = n.alphaMode || Y;
                        return m === Z ? o.transparent = !0 : (o.transparent = !1, m === q && (o.alphaTest = void 0 !== n.alphaCutoff ? n.alphaCutoff : .5)), void 0 !== n.normalTexture && t !== S.a && (l.push(this.assignTexture(o, "normalMap", n.normalTexture)), o.normalScale = new s.a(1, 1), void 0 !== n.normalTexture.scale && o.normalScale.set(n.normalTexture.scale, n.normalTexture.scale)), void 0 !== n.occlusionTexture && t !== S.a && (l.push(this.assignTexture(o, "aoMap", n.occlusionTexture)), void 0 !== n.occlusionTexture.strength && (o.aoMapIntensity = n.occlusionTexture.strength)), void 0 !== n.emissiveFactor && t !== S.a && (o.emissive = (new T.a).fromArray(n.emissiveFactor)), void 0 !== n.emissiveTexture && t !== S.a && l.push(this.assignTexture(o, "emissiveMap", n.emissiveTexture)), Promise.all(l).then((function() {
                            var e;
                            return e = t === x.a ? r[i.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(o) : new t(o), void 0 !== n.name && (e.name = n.name), e.map && (e.map.encoding = f.Ic), e.emissiveMap && (e.emissiveMap.encoding = f.Ic), e.specularMap && (e.specularMap.encoding = f.Ic), ne(e, n), n.extensions && ae(r, e, n), e
                        }))
                    }, we.prototype.loadGeometries = function(e) {
                        var t = this,
                            a = this.extensions,
                            r = this.primitiveCache;

                        function n(e) {
                            return a[i.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(e, t).then((function(i) {
                                return xe(i, e, t)
                            }))
                        }
                        for (var s = [], o = 0, c = e.length; o < c; o++) {
                            var l, h = e[o],
                                u = de(h),
                                p = r[u];
                            if (p) s.push(p.promise);
                            else l = h.extensions && h.extensions[i.KHR_DRACO_MESH_COMPRESSION] ? n(h) : xe(new N.a, h, t), r[u] = {
                                primitive: h,
                                promise: l
                            }, s.push(l)
                        }
                        return Promise.all(s)
                    }, we.prototype.loadMesh = function(e) {
                        for (var t, i = this, a = this.json.meshes[e], r = a.primitives, n = [], s = 0, o = r.length; s < o; s++) {
                            var c = void 0 === r[s].material ? (void 0 === (t = this.cache).DefaultMaterial && (t.DefaultMaterial = new le({
                                color: 16777215,
                                emissive: 0,
                                metalness: 1,
                                roughness: 1,
                                transparent: !1,
                                depthTest: !0,
                                side: f.E
                            })), t.DefaultMaterial) : this.getDependency("material", r[s].material);
                            n.push(c)
                        }
                        return n.push(i.loadGeometries(r)), Promise.all(n).then((function(t) {
                            for (var n = t.slice(0, t.length - 1), s = t[t.length - 1], o = [], c = 0, l = s.length; c < l; c++) {
                                var h, u = s[c],
                                    p = r[c],
                                    d = n[c];
                                if (p.mode === U || p.mode === F || p.mode === H || void 0 === p.mode) !0 !== (h = !0 === a.isSkinnedMesh ? new ye(u, d) : new M.a(u, d)).isSkinnedMesh || h.geometry.attributes.skinWeight.normalized || h.normalizeSkinWeights(), p.mode === F ? h.geometry = Me(h.geometry, f.sc) : p.mode === H && (h.geometry = Me(h.geometry, f.rc));
                                else if (p.mode === I) h = new Oe(u, d);
                                else if (p.mode === D) h = new Ae(u, d);
                                else if (p.mode === P) h = new Le(u, d);
                                else {
                                    if (p.mode !== R) throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + p.mode);
                                    h = new je(u, d)
                                }
                                Object.keys(h.geometry.morphAttributes).length > 0 && he(h, a), h.name = a.name || "mesh_" + e, s.length > 1 && (h.name += "_" + c), ne(h, a), i.assignFinalMaterial(h), o.push(h)
                            }
                            if (1 === o.length) return o[0];
                            var m = new b.a;
                            for (c = 0, l = o.length; c < l; c++) m.add(o[c]);
                            return m
                        }))
                    }, we.prototype.loadCamera = function(e) {
                        var t, i = this.json.cameras[e],
                            a = i[i.type];
                        if (a) return "perspective" === i.type ? t = new d.a(o.a.radToDeg(a.yfov), a.aspectRatio || 1, a.znear || 1, a.zfar || 2e6) : "orthographic" === i.type && (t = new p.a(a.xmag / -2, a.xmag / 2, a.ymag / 2, a.ymag / -2, a.znear, a.zfar)), void 0 !== i.name && (t.name = i.name), ne(t, i), Promise.resolve(t);
                        console.warn("THREE.GLTFLoader: Missing camera parameters.")
                    }, we.prototype.loadSkin = function(e) {
                        var t = this.json.skins[e],
                            i = {
                                joints: t.joints
                            };
                        return void 0 === t.inverseBindMatrices ? Promise.resolve(i) : this.getDependency("accessor", t.inverseBindMatrices).then((function(e) {
                            return i.inverseBindMatrices = e, i
                        }))
                    }, we.prototype.loadAnimation = function(e) {
                        for (var t = this.json.animations[e], i = [], a = [], r = [], n = [], s = [], o = 0, c = t.channels.length; o < c; o++) {
                            var l = t.channels[o],
                                h = t.samplers[l.sampler],
                                u = l.target,
                                p = void 0 !== u.node ? u.node : u.id,
                                d = void 0 !== t.parameters ? t.parameters[h.input] : h.input,
                                m = void 0 !== t.parameters ? t.parameters[h.output] : h.output;
                            i.push(this.getDependency("node", p)), a.push(this.getDependency("accessor", d)), r.push(this.getDependency("accessor", m)), n.push(h), s.push(u)
                        }
                        return Promise.all([Promise.all(i), Promise.all(a), Promise.all(r), Promise.all(n), Promise.all(s)]).then((function(i) {
                            for (var a = i[0], r = i[1], n = i[2], s = i[3], o = i[4], c = [], l = 0, h = a.length; l < h; l++) {
                                var u = a[l],
                                    p = r[l],
                                    d = n[l],
                                    m = s[l],
                                    v = o[l];
                                if (void 0 !== u) {
                                    var g;
                                    switch (u.updateMatrix(), u.matrixAutoUpdate = !0, X[v.path]) {
                                        case X.weights:
                                            g = ze;
                                            break;
                                        case X.rotation:
                                            g = Ge;
                                            break;
                                        case X.position:
                                        case X.scale:
                                        default:
                                            g = We
                                    }
                                    var y = u.name ? u.name : u.uuid,
                                        b = void 0 !== m.interpolation ? J[m.interpolation] : f.L,
                                        w = [];
                                    X[v.path] === X.weights ? u.traverse((function(e) {
                                        !0 === e.isMesh && e.morphTargetInfluences && w.push(e.name ? e.name : e.uuid)
                                    })) : w.push(y);
                                    var x = d.array;
                                    if (d.normalized) {
                                        var M;
                                        if (x.constructor === Int8Array) M = 1 / 127;
                                        else if (x.constructor === Uint8Array) M = 1 / 255;
                                        else if (x.constructor == Int16Array) M = 1 / 32767;
                                        else {
                                            if (x.constructor !== Uint16Array) throw new Error("THREE.GLTFLoader: Unsupported output accessor component type.");
                                            M = 1 / 65535
                                        }
                                        for (var S = new Float32Array(x.length), T = 0, A = x.length; T < A; T++) S[T] = x[T] * M;
                                        x = S
                                    }
                                    for (T = 0, A = w.length; T < A; T++) {
                                        var C = new g(w[T] + "." + X[v.path], p.array, x, b);
                                        "CUBICSPLINE" === m.interpolation && (C.createInterpolant = function(e) {
                                            return new E(this.times, this.values, this.getValueSize() / 3, e)
                                        }, C.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0), c.push(C)
                                    }
                                }
                            }
                            return new Ye(void 0 !== t.name ? t.name : "animation_" + e, void 0, c)
                        }))
                    }, we.prototype.loadNode = function(e) {
                        var t = this.json,
                            a = this.extensions,
                            r = this,
                            n = t.meshReferences,
                            s = t.meshUses,
                            o = t.nodes[e];
                        return function() {
                            var e = [];
                            return void 0 !== o.mesh && e.push(r.getDependency("mesh", o.mesh).then((function(e) {
                                var t;
                                if (n[o.mesh] > 1) {
                                    var i = s[o.mesh]++;
                                    (t = e.clone()).name += "_instance_" + i, t.onBeforeRender = e.onBeforeRender;
                                    for (var a = 0, r = t.children.length; a < r; a++) t.children[a].name += "_instance_" + i, t.children[a].onBeforeRender = e.children[a].onBeforeRender
                                } else t = e;
                                return void 0 !== o.weights && t.traverse((function(e) {
                                    if (e.isMesh)
                                        for (var t = 0, i = o.weights.length; t < i; t++) e.morphTargetInfluences[t] = o.weights[t]
                                })), t
                            }))), void 0 !== o.camera && e.push(r.getDependency("camera", o.camera)), o.extensions && o.extensions[i.KHR_LIGHTS_PUNCTUAL] && void 0 !== o.extensions[i.KHR_LIGHTS_PUNCTUAL].light && e.push(r.getDependency("light", o.extensions[i.KHR_LIGHTS_PUNCTUAL].light)), Promise.all(e)
                        }().then((function(e) {
                            var t;
                            if ((t = !0 === o.isBone ? new Ze : e.length > 1 ? new b.a : 1 === e.length ? e[0] : new _.a) !== e[0])
                                for (var i = 0, r = e.length; i < r; i++) t.add(e[i]);
                            if (void 0 !== o.name && (t.userData.name = o.name, t.name = ot.sanitizeNodeName(o.name)), ne(t, o), o.extensions && ae(a, t, o), void 0 !== o.matrix) {
                                var n = new L.a;
                                n.fromArray(o.matrix), t.applyMatrix(n)
                            } else void 0 !== o.translation && t.position.fromArray(o.translation), void 0 !== o.rotation && t.quaternion.fromArray(o.rotation), void 0 !== o.scale && t.scale.fromArray(o.scale);
                            return t
                        }))
                    }, we.prototype.loadScene = function() {
                        function e(t, i, a, r) {
                            var n = a.nodes[t];
                            return r.getDependency("node", t).then((function(e) {
                                return void 0 === n.skin ? e : r.getDependency("skin", n.skin).then((function(e) {
                                    for (var i = [], a = 0, n = (t = e).joints.length; a < n; a++) i.push(r.getDependency("node", t.joints[a]));
                                    return Promise.all(i)
                                })).then((function(i) {
                                    return e.traverse((function(e) {
                                        if (e.isMesh) {
                                            for (var a = [], r = [], n = 0, s = i.length; n < s; n++) {
                                                var o = i[n];
                                                if (o) {
                                                    a.push(o);
                                                    var c = new L.a;
                                                    void 0 !== t.inverseBindMatrices && c.fromArray(t.inverseBindMatrices.array, 16 * n), r.push(c)
                                                } else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[n])
                                            }
                                            e.bind(new ht(a, r), e.matrixWorld)
                                        }
                                    })), e
                                }));
                                var t
                            })).then((function(t) {
                                i.add(t);
                                var s = [];
                                if (n.children)
                                    for (var o = n.children, c = 0, l = o.length; c < l; c++) {
                                        var h = o[c];
                                        s.push(e(h, t, a, r))
                                    }
                                return Promise.all(s)
                            }))
                        }
                        return function(t) {
                            var i = this.json,
                                a = this.extensions,
                                r = this.json.scenes[t],
                                n = new u.a;
                            void 0 !== r.name && (n.name = r.name), ne(n, r), r.extensions && ae(a, n, r);
                            for (var s = r.nodes || [], o = [], c = 0, l = s.length; c < l; c++) o.push(e(s[c], n, i, this));
                            return Promise.all(o).then((function() {
                                return n
                            }))
                        }
                    }(), e
                }(),
                pt = function(e, t, i, a) {
                    return i * Math.sin(e / a * (Math.PI / 2)) + t
                },
                dt = i("RSL/"),
                ft = i("PbT/"),
                mt = i("DmT/"),
                vt = i("BXV6"),
                gt = i("3bcy"),
                yt = i("vuIU"),
                bt = i("md7G"),
                wt = i("foSv"),
                xt = i("JX7q"),
                Mt = i("Ji7U");

            function St() {
                this.type = "Curve", this.arcLengthDivisions = 200
            }

            function Tt(e, t, i, a, r) {
                var n = .5 * (a - t),
                    s = .5 * (r - i),
                    o = e * e;
                return (2 * i - 2 * a + n + s) * (e * o) + (-3 * i + 3 * a - 2 * n - s) * o + n * e + i
            }

            function At(e) {
                St.call(this), this.type = "SplineCurve", this.points = e || []
            }
            Object.assign(St.prototype, {
                getPoint: function() {
                    return console.warn("THREE.Curve: .getPoint() not implemented."), null
                },
                getPointAt: function(e, t) {
                    var i = this.getUtoTmapping(e);
                    return this.getPoint(i, t)
                },
                getPoints: function(e) {
                    void 0 === e && (e = 5);
                    for (var t = [], i = 0; i <= e; i++) t.push(this.getPoint(i / e));
                    return t
                },
                getSpacedPoints: function(e) {
                    void 0 === e && (e = 5);
                    for (var t = [], i = 0; i <= e; i++) t.push(this.getPointAt(i / e));
                    return t
                },
                getLength: function() {
                    var e = this.getLengths();
                    return e[e.length - 1]
                },
                getLengths: function(e) {
                    if (void 0 === e && (e = this.arcLengthDivisions), this.cacheArcLengths && this.cacheArcLengths.length === e + 1 && !this.needsUpdate) return this.cacheArcLengths;
                    this.needsUpdate = !1;
                    var t, i, a = [],
                        r = this.getPoint(0),
                        n = 0;
                    for (a.push(0), i = 1; i <= e; i++) n += (t = this.getPoint(i / e)).distanceTo(r), a.push(n), r = t;
                    return this.cacheArcLengths = a, a
                },
                updateArcLengths: function() {
                    this.needsUpdate = !0, this.getLengths()
                },
                getUtoTmapping: function(e, t) {
                    var i, a = this.getLengths(),
                        r = 0,
                        n = a.length;
                    i = t || e * a[n - 1];
                    for (var s, o = 0, c = n - 1; o <= c;)
                        if ((s = a[r = Math.floor(o + (c - o) / 2)] - i) < 0) o = r + 1;
                        else {
                            if (!(s > 0)) {
                                c = r;
                                break
                            }
                            c = r - 1
                        }
                    if (a[r = c] === i) return r / (n - 1);
                    var l = a[r];
                    return (r + (i - l) / (a[r + 1] - l)) / (n - 1)
                },
                getTangent: function(e) {
                    var t = e - 1e-4,
                        i = e + 1e-4;
                    t < 0 && (t = 0), i > 1 && (i = 1);
                    var a = this.getPoint(t);
                    return this.getPoint(i).clone().sub(a).normalize()
                },
                getTangentAt: function(e) {
                    var t = this.getUtoTmapping(e);
                    return this.getTangent(t)
                },
                computeFrenetFrames: function(e, t) {
                    var i, a, r, n = new l.a,
                        s = [],
                        c = [],
                        h = [],
                        u = new l.a,
                        p = new L.a;
                    for (i = 0; i <= e; i++) a = i / e, s[i] = this.getTangentAt(a), s[i].normalize();
                    c[0] = new l.a, h[0] = new l.a;
                    var d = Number.MAX_VALUE,
                        f = Math.abs(s[0].x),
                        m = Math.abs(s[0].y),
                        v = Math.abs(s[0].z);
                    for (f <= d && (d = f, n.set(1, 0, 0)), m <= d && (d = m, n.set(0, 1, 0)), v <= d && n.set(0, 0, 1), u.crossVectors(s[0], n).normalize(), c[0].crossVectors(s[0], u), h[0].crossVectors(s[0], c[0]), i = 1; i <= e; i++) c[i] = c[i - 1].clone(), h[i] = h[i - 1].clone(), u.crossVectors(s[i - 1], s[i]), u.length() > Number.EPSILON && (u.normalize(), r = Math.acos(o.a.clamp(s[i - 1].dot(s[i]), -1, 1)), c[i].applyMatrix4(p.makeRotationAxis(u, r))), h[i].crossVectors(s[i], c[i]);
                    if (!0 === t)
                        for (r = Math.acos(o.a.clamp(c[0].dot(c[e]), -1, 1)), r /= e, s[0].dot(u.crossVectors(c[0], c[e])) > 0 && (r = -r), i = 1; i <= e; i++) c[i].applyMatrix4(p.makeRotationAxis(s[i], r * i)), h[i].crossVectors(s[i], c[i]);
                    return {
                        tangents: s,
                        normals: c,
                        binormals: h
                    }
                },
                clone: function() {
                    return (new this.constructor).copy(this)
                },
                copy: function(e) {
                    return this.arcLengthDivisions = e.arcLengthDivisions, this
                },
                toJSON: function() {
                    var e = {
                        metadata: {
                            version: 4.5,
                            type: "Curve",
                            generator: "Curve.toJSON"
                        }
                    };
                    return e.arcLengthDivisions = this.arcLengthDivisions, e.type = this.type, e
                },
                fromJSON: function(e) {
                    return this.arcLengthDivisions = e.arcLengthDivisions, this
                }
            }), At.prototype = Object.create(St.prototype), At.prototype.constructor = At, At.prototype.isSplineCurve = !0, At.prototype.getPoint = function(e, t) {
                var i = t || new s.a,
                    a = this.points,
                    r = (a.length - 1) * e,
                    n = Math.floor(r),
                    o = r - n,
                    c = a[0 === n ? n : n - 1],
                    l = a[n],
                    h = a[n > a.length - 2 ? a.length - 1 : n + 1],
                    u = a[n > a.length - 3 ? a.length - 1 : n + 2];
                return i.set(Tt(o, c.x, l.x, h.x, u.x), Tt(o, c.y, l.y, h.y, u.y)), i
            }, At.prototype.copy = function(e) {
                St.prototype.copy.call(this, e), this.points = [];
                for (var t = 0, i = e.points.length; t < i; t++) {
                    var a = e.points[t];
                    this.points.push(a.clone())
                }
                return this
            }, At.prototype.toJSON = function() {
                var e = St.prototype.toJSON.call(this);
                e.points = [];
                for (var t = 0, i = this.points.length; t < i; t++) {
                    var a = this.points[t];
                    e.points.push(a.toArray())
                }
                return e
            }, At.prototype.fromJSON = function(e) {
                St.prototype.fromJSON.call(this, e), this.points = [];
                for (var t = 0, i = e.points.length; t < i; t++) {
                    var a = e.points[t];
                    this.points.push((new s.a).fromArray(a))
                }
                return this
            };
            var Ct = i("sbdO");

            function _t() {
                this.positions = [], this.previous = [], this.next = [], this.side = [], this.width = [], this.indices_array = [], this.uvs = [], this.counters = [], this.geometry = new N.a, this.widthCallback = null, this.matrixWorld = new L.a
            }

            function Ot(e, t, i, a, r) {
                var n;
                if (e = e.subarray || e.slice ? e : e.buffer, i = i.subarray || i.slice ? i : i.buffer, e = t ? e.subarray ? e.subarray(t, r && t + r) : e.slice(t, r && t + r) : e, i.set) i.set(e, a);
                else
                    for (n = 0; n < e.length; n++) i[n + a] = e[n];
                return i
            }

            function Lt(e) {
                x.a.call(this, {
                    uniforms: Object.assign({}, dt.a.fog, {
                        lineWidth: {
                            value: 1
                        },
                        map: {
                            value: null
                        },
                        useMap: {
                            value: 0
                        },
                        alphaMap: {
                            value: null
                        },
                        useAlphaMap: {
                            value: 0
                        },
                        color: {
                            value: new T.a(16777215)
                        },
                        opacity: {
                            value: 1
                        },
                        resolution: {
                            value: new s.a(1, 1)
                        },
                        sizeAttenuation: {
                            value: 1
                        },
                        near: {
                            value: 1
                        },
                        far: {
                            value: 1
                        },
                        dashArray: {
                            value: 0
                        },
                        dashOffset: {
                            value: 0
                        },
                        dashRatio: {
                            value: .5
                        },
                        useDash: {
                            value: 0
                        },
                        visibility: {
                            value: 1
                        },
                        alphaTest: {
                            value: 0
                        },
                        repeat: {
                            value: new s.a(1, 1)
                        }
                    }),
                    vertexShader: Ct.a.meshline_vert,
                    fragmentShader: Ct.a.meshline_frag
                }), this.type = "MeshLineMaterial", Object.defineProperties(this, {
                    lineWidth: {
                        enumerable: !0,
                        get: function() {
                            return this.uniforms.lineWidth.value
                        },
                        set: function(e) {
                            this.uniforms.lineWidth.value = e
                        }
                    },
                    map: {
                        enumerable: !0,
                        get: function() {
                            return this.uniforms.map.value
                        },
                        set: function(e) {
                            this.uniforms.map.value = e
                        }
                    },
                    useMap: {
                        enumerable: !0,
                        get: function() {
                            return this.uniforms.useMap.value
                        },
                        set: function(e) {
                            this.uniforms.useMap.value = e
                        }
                    },
                    alphaMap: {
                        enumerable: !0,
                        get: function() {
                            return this.uniforms.alphaMap.value
                        },
                        set: function(e) {
                            this.uniforms.alphaMap.value = e
                        }
                    },
                    useAlphaMap: {
                        enumerable: !0,
                        get: function() {
                            return this.uniforms.useAlphaMap.value
                        },
                        set: function(e) {
                            this.uniforms.useAlphaMap.value = e
                        }
                    },
                    color: {
                        enumerable: !0,
                        get: function() {
                            return this.uniforms.color.value
                        },
                        set: function(e) {
                            this.uniforms.color.value = e
                        }
                    },
                    opacity: {
                        enumerable: !0,
                        get: function() {
                            return this.uniforms.opacity.value
                        },
                        set: function(e) {
                            this.uniforms.opacity.value = e
                        }
                    },
                    resolution: {
                        enumerable: !0,
                        get: function() {
                            return this.uniforms.resolution.value
                        },
                        set: function(e) {
                            this.uniforms.resolution.value.copy(e)
                        }
                    },
                    sizeAttenuation: {
                        enumerable: !0,
                        get: function() {
                            return this.uniforms.sizeAttenuation.value
                        },
                        set: function(e) {
                            this.uniforms.sizeAttenuation.value = e
                        }
                    },
                    near: {
                        enumerable: !0,
                        get: function() {
                            return this.uniforms.near.value
                        },
                        set: function(e) {
                            this.uniforms.near.value = e
                        }
                    },
                    far: {
                        enumerable: !0,
                        get: function() {
                            return this.uniforms.far.value
                        },
                        set: function(e) {
                            this.uniforms.far.value = e
                        }
                    },
                    dashArray: {
                        enumerable: !0,
                        get: function() {
                            return this.uniforms.dashArray.value
                        },
                        set: function(e) {
                            this.uniforms.dashArray.value = e, this.useDash = 0 !== e ? 1 : 0
                        }
                    },
                    dashOffset: {
                        enumerable: !0,
                        get: function() {
                            return this.uniforms.dashOffset.value
                        },
                        set: function(e) {
                            this.uniforms.dashOffset.value = e
                        }
                    },
                    dashRatio: {
                        enumerable: !0,
                        get: function() {
                            return this.uniforms.dashRatio.value
                        },
                        set: function(e) {
                            this.uniforms.dashRatio.value = e
                        }
                    },
                    useDash: {
                        enumerable: !0,
                        get: function() {
                            return this.uniforms.useDash.value
                        },
                        set: function(e) {
                            this.uniforms.useDash.value = e
                        }
                    },
                    visibility: {
                        enumerable: !0,
                        get: function() {
                            return this.uniforms.visibility.value
                        },
                        set: function(e) {
                            this.uniforms.visibility.value = e
                        }
                    },
                    alphaTest: {
                        enumerable: !0,
                        get: function() {
                            return this.uniforms.alphaTest.value
                        },
                        set: function(e) {
                            this.uniforms.alphaTest.value = e
                        }
                    },
                    repeat: {
                        enumerable: !0,
                        get: function() {
                            return this.uniforms.repeat.value
                        },
                        set: function(e) {
                            this.uniforms.repeat.value.copy(e)
                        }
                    }
                }), this.setValues(e)
            }
            _t.prototype.setMatrixWorld = function(e) {
                this.matrixWorld = e
            }, _t.prototype.setGeometry = function(e, t) {
                if (this.widthCallback = t, this.positions = [], this.counters = [], e instanceof D.a)
                    for (var i = 0; i < e.vertices.length; i++) {
                        var a = e.vertices[i];
                        t = i / e.vertices.length;
                        this.positions.push(a.x, a.y, a.z), this.positions.push(a.x, a.y, a.z), this.counters.push(t), this.counters.push(t)
                    }
                if (N.a, e instanceof Float32Array || e instanceof Array)
                    for (i = 0; i < e.length; i += 3) {
                        t = i / e.length;
                        this.positions.push(e[i], e[i + 1], e[i + 2]), this.positions.push(e[i], e[i + 1], e[i + 2]), this.counters.push(t), this.counters.push(t)
                    }
                this.process()
            }, _t.prototype.raycast = function() {
                var e = new L.a,
                    t = new be.a,
                    i = new c.a;
                return function(a, r) {
                    var n = a.linePrecision,
                        s = n * n,
                        o = this.geometry;
                    if (null === o.boundingSphere && o.computeBoundingSphere(), i.copy(o.boundingSphere), i.applyMatrix4(this.matrixWorld), !1 !== a.ray.intersectSphere(i)) {
                        e.getInverse(this.matrixWorld), t.copy(a.ray).applyMatrix4(e);
                        var c = new l.a,
                            h = new l.a,
                            u = new l.a,
                            p = new l.a,
                            d = this instanceof Oe ? 2 : 1;
                        if (o instanceof N.a) {
                            var f = o.index,
                                m = o.attributes;
                            if (null !== f)
                                for (var v = f.array, g = m.position.array, y = 0, b = v.length - 1; y < b; y += d) {
                                    var w = v[y],
                                        x = v[y + 1];
                                    if (c.fromArray(g, 3 * w), h.fromArray(g, 3 * x), !(t.distanceSqToSegment(c, h, p, u) > s)) p.applyMatrix4(this.matrixWorld), (T = a.ray.origin.distanceTo(p)) < a.near || T > a.far || r.push({
                                        distance: T,
                                        point: u.clone().applyMatrix4(this.matrixWorld),
                                        index: y,
                                        face: null,
                                        faceIndex: null,
                                        object: this
                                    })
                                } else
                                    for (y = 0, b = (g = m.position.array).length / 3 - 1; y < b; y += d) {
                                        if (c.fromArray(g, 3 * y), h.fromArray(g, 3 * y + 3), !(t.distanceSqToSegment(c, h, p, u) > s)) p.applyMatrix4(this.matrixWorld), (T = a.ray.origin.distanceTo(p)) < a.near || T > a.far || r.push({
                                            distance: T,
                                            point: u.clone().applyMatrix4(this.matrixWorld),
                                            index: y,
                                            face: null,
                                            faceIndex: null,
                                            object: this
                                        })
                                    }
                        } else if (o instanceof D.a) {
                            var M = o.vertices,
                                S = M.length;
                            for (y = 0; y < S - 1; y += d) {
                                var T;
                                if (!(t.distanceSqToSegment(M[y], M[y + 1], p, u) > s)) p.applyMatrix4(this.matrixWorld), (T = a.ray.origin.distanceTo(p)) < a.near || T > a.far || r.push({
                                    distance: T,
                                    point: u.clone().applyMatrix4(this.matrixWorld),
                                    index: y,
                                    face: null,
                                    faceIndex: null,
                                    object: this
                                })
                            }
                        }
                    }
                }
            }(), _t.prototype.compareV3 = function(e, t) {
                var i = 6 * e,
                    a = 6 * t;
                return this.positions[i] === this.positions[a] && this.positions[i + 1] === this.positions[a + 1] && this.positions[i + 2] === this.positions[a + 2]
            }, _t.prototype.copyV3 = function(e) {
                var t = 6 * e;
                return [this.positions[t], this.positions[t + 1], this.positions[t + 2]]
            }, _t.prototype.process = function() {
                var e, t, i = this.positions.length / 6;
                this.previous = [], this.next = [], this.side = [], this.width = [], this.indices_array = [], this.uvs = [];
                for (var a = 0; a < i; a++) this.side.push(1), this.side.push(-1);
                for (a = 0; a < i; a++) e = this.widthCallback ? this.widthCallback(a / (i - 1)) : 1, this.width.push(e), this.width.push(e);
                for (a = 0; a < i; a++) this.uvs.push(a / (i - 1), 0), this.uvs.push(a / (i - 1), 1);
                t = this.compareV3(0, i - 1) ? this.copyV3(i - 2) : this.copyV3(0), this.previous.push(t[0], t[1], t[2]), this.previous.push(t[0], t[1], t[2]);
                for (a = 0; a < i - 1; a++) t = this.copyV3(a), this.previous.push(t[0], t[1], t[2]), this.previous.push(t[0], t[1], t[2]);
                for (a = 1; a < i; a++) t = this.copyV3(a), this.next.push(t[0], t[1], t[2]), this.next.push(t[0], t[1], t[2]);
                t = this.compareV3(i - 1, 0) ? this.copyV3(1) : this.copyV3(i - 1), this.next.push(t[0], t[1], t[2]), this.next.push(t[0], t[1], t[2]);
                for (a = 0; a < i - 1; a++) {
                    var r = 2 * a;
                    this.indices_array.push(r, r + 1, r + 2), this.indices_array.push(r + 2, r + 1, r + 3)
                }
                this.attributes ? (this.attributes.position.copyArray(new Float32Array(this.positions)), this.attributes.position.needsUpdate = !0, this.attributes.previous.copyArray(new Float32Array(this.previous)), this.attributes.previous.needsUpdate = !0, this.attributes.next.copyArray(new Float32Array(this.next)), this.attributes.next.needsUpdate = !0, this.attributes.side.copyArray(new Float32Array(this.side)), this.attributes.side.needsUpdate = !0, this.attributes.width.copyArray(new Float32Array(this.width)), this.attributes.width.needsUpdate = !0, this.attributes.uv.copyArray(new Float32Array(this.uvs)), this.attributes.uv.needsUpdate = !0, this.attributes.index.copyArray(new Uint16Array(this.indices_array)), this.attributes.index.needsUpdate = !0) : this.attributes = {
                    position: new k.a(new Float32Array(this.positions), 3),
                    previous: new k.a(new Float32Array(this.previous), 3),
                    next: new k.a(new Float32Array(this.next), 3),
                    side: new k.a(new Float32Array(this.side), 1),
                    width: new k.a(new Float32Array(this.width), 1),
                    uv: new k.a(new Float32Array(this.uvs), 2),
                    index: new k.a(new Uint16Array(this.indices_array), 1),
                    counters: new k.a(new Float32Array(this.counters), 1)
                }, this.geometry.setAttribute("position", this.attributes.position), this.geometry.setAttribute("previous", this.attributes.previous), this.geometry.setAttribute("next", this.attributes.next), this.geometry.setAttribute("side", this.attributes.side), this.geometry.setAttribute("width", this.attributes.width), this.geometry.setAttribute("uv", this.attributes.uv), this.geometry.setAttribute("counters", this.attributes.counters), this.geometry.setIndex(this.attributes.index)
            }, _t.prototype.advance = function(e) {
                var t = this.attributes.position.array,
                    i = this.attributes.previous.array,
                    a = this.attributes.next.array,
                    r = t.length;
                Ot(t, 0, i, 0, r), Ot(t, 6, t, 0, r - 6), t[r - 6] = e.x, t[r - 5] = e.y, t[r - 4] = e.z, t[r - 3] = e.x, t[r - 2] = e.y, t[r - 1] = e.z, Ot(t, 6, a, 0, r - 6), a[r - 6] = e.x, a[r - 5] = e.y, a[r - 4] = e.z, a[r - 3] = e.x, a[r - 2] = e.y, a[r - 1] = e.z, this.attributes.position.needsUpdate = !0, this.attributes.previous.needsUpdate = !0, this.attributes.next.needsUpdate = !0
            }, Ct.a.meshline_vert = ["", Ct.a.logdepthbuf_pars_vertex, Ct.a.fog_pars_vertex, "", "attribute vec3 previous;", "attribute vec3 next;", "attribute float side;", "attribute float width;", "attribute float counters;", "", "uniform vec2 resolution;", "uniform float lineWidth;", "uniform vec3 color;", "uniform float opacity;", "uniform float near;", "uniform float far;", "uniform float sizeAttenuation;", "", "varying vec2 vUV;", "varying vec4 vColor;", "varying float vCounters;", "", "vec2 fix( vec4 i, float aspect ) {", "", "    vec2 res = i.xy / i.w;", "    res.x *= aspect;", "\t vCounters = counters;", "    return res;", "", "}", "", "void main() {", "", "    float aspect = resolution.x / resolution.y;", "    float pixelWidthRatio = 1. / (resolution.x * projectionMatrix[0][0]);", "", "    vColor = vec4( color, opacity );", "    vUV = uv;", "", "    mat4 m = projectionMatrix * modelViewMatrix;", "    vec4 finalPosition = m * vec4( position, 1.0 );", "    vec4 prevPos = m * vec4( previous, 1.0 );", "    vec4 nextPos = m * vec4( next, 1.0 );", "", "    vec2 currentP = fix( finalPosition, aspect );", "    vec2 prevP = fix( prevPos, aspect );", "    vec2 nextP = fix( nextPos, aspect );", "", "    float pixelWidth = finalPosition.w * pixelWidthRatio;", "    float w = 1.8 * pixelWidth * lineWidth * width;", "", "    if( sizeAttenuation == 1. ) {", "        w = 1.8 * lineWidth * width;", "    }", "", "    vec2 dir;", "    if( nextP == currentP ) dir = normalize( currentP - prevP );", "    else if( prevP == currentP ) dir = normalize( nextP - currentP );", "    else {", "        vec2 dir1 = normalize( currentP - prevP );", "        vec2 dir2 = normalize( nextP - currentP );", "        dir = normalize( dir1 + dir2 );", "", "        vec2 perp = vec2( -dir1.y, dir1.x );", "        vec2 miter = vec2( -dir.y, dir.x );", "        //w = clamp( w / dot( miter, perp ), 0., 4. * lineWidth * width );", "", "    }", "", "    //vec2 normal = ( cross( vec3( dir, 0. ), vec3( 0., 0., 1. ) ) ).xy;", "    vec2 normal = vec2( -dir.y, dir.x );", "    normal.x /= aspect;", "    normal *= .5 * w;", "", "    vec4 offset = vec4( normal * side, 0.0, 1.0 );", "    finalPosition.xy += offset.xy;", "", "    gl_Position = finalPosition;", "", Ct.a.logdepthbuf_vertex, Ct.a.fog_vertex && "    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );", Ct.a.fog_vertex, "}"].join("\r\n"), Ct.a.meshline_frag = ["", Ct.a.fog_pars_fragment, Ct.a.logdepthbuf_pars_fragment, "", "uniform sampler2D map;", "uniform sampler2D alphaMap;", "uniform float useMap;", "uniform float useAlphaMap;", "uniform float useDash;", "uniform float dashArray;", "uniform float dashOffset;", "uniform float dashRatio;", "uniform float visibility;", "uniform float alphaTest;", "uniform vec2 repeat;", "", "varying vec2 vUV;", "varying vec4 vColor;", "varying float vCounters;", "", "void main() {", "", Ct.a.logdepthbuf_fragment, "", "    vec4 c = vColor;", "    if( useMap == 1. ) c *= texture2D( map, vUV * repeat );", "    if( useAlphaMap == 1. ) c.a *= texture2D( alphaMap, vUV * repeat ).a;", "    if( c.a < alphaTest ) discard;", "    if( useDash == 1. ){", "        c.a *= ceil(mod(vCounters + dashOffset, dashArray) - (dashArray * dashRatio));", "    }", "    gl_FragColor = c;", "    gl_FragColor.a *= step(vCounters, visibility);", "", Ct.a.fog_fragment, "}"].join("\r\n"), Lt.prototype = Object.create(x.a.prototype), Lt.prototype.constructor = Lt, Lt.prototype.isMeshLineMaterial = !0, Lt.prototype.copy = function(e) {
                return x.a.prototype.copy.call(this, e), this.lineWidth = e.lineWidth, this.map = e.map, this.useMap = e.useMap, this.alphaMap = e.alphaMap, this.useAlphaMap = e.useAlphaMap, this.color.copy(e.color), this.opacity = e.opacity, this.resolution.copy(e.resolution), this.sizeAttenuation = e.sizeAttenuation, this.near = e.near, this.far = e.far, this.dashArray.copy(e.dashArray), this.dashOffset.copy(e.dashOffset), this.dashRatio.copy(e.dashRatio), this.useDash = e.useDash, this.visibility = e.visibility, this.alphaTest = e.alphaTest, this.repeat.copy(e.repeat), this
            };
            var Et = i("C/Fq"),
                Rt = function(e) {
                    function t() {
                        var e, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            a = i.width,
                            n = void 0 === a ? .1 : a,
                            s = i.speed,
                            o = void 0 === s ? .01 : s,
                            c = i.visibleLength,
                            h = void 0 === c ? .1 : c,
                            u = i.color,
                            p = void 0 === u ? new T.a("#000000") : u,
                            d = i.opacity,
                            f = void 0 === d ? .5 : d,
                            m = i.position,
                            v = void 0 === m ? new l.a(0, 0, 0) : m,
                            g = i.defaultOffset,
                            y = void 0 === g ? 0 : g,
                            b = i.points,
                            w = void 0 !== b && b,
                            x = i.length,
                            M = void 0 === x ? 2 : x,
                            S = i.nbrOfPoints,
                            A = void 0 === S ? 3 : S,
                            C = i.orientation,
                            _ = void 0 === C ? new l.a(1, 0, 0) : C,
                            O = i.turbulence,
                            L = void 0 === O ? new l.a(0, 0, 0) : O,
                            E = i.transformLineMethod,
                            R = void 0 !== E && E;
                        Object(r.a)(this, t);
                        var I = [];
                        if (w) I = w;
                        else {
                            var P = new l.a,
                                j = _.normalize().multiplyScalar(M / A);
                            I.push(P.clone());
                            for (var N = 0; N < A - 1; N++) P.add(j), I.push(P.clone().set(P.x + Object(Et.e)(-L.x, L.x), P.y + Object(Et.e)(-L.y, L.y), P.z + Object(Et.e)(-L.z, L.z)));
                            I.push(P.add(j).clone());
                            var k = new At(I);
                            I = (new D.a).setFromPoints(k.getPoints(50))
                        }
                        var U = new _t;
                        U.setGeometry(I, R);
                        var F = U.geometry,
                            H = 1 - .5 * h,
                            z = new Lt({
                                lineWidth: n,
                                dashArray: 2,
                                dashOffset: y,
                                dashRatio: H,
                                opacity: f,
                                transparent: !0,
                                color: p
                            });
                        return (e = Object(bt.a)(this, Object(wt.a)(t).call(this, F, z))).position.copy(v), e.speed = o, e.voidLength = 2 * H, e.dashLength = 2 - e.voidLength, e.dyingAt = 1, e.diedAt = e.dyingAt + e.dashLength, e.update = e.update.bind(Object(xt.a)(e)), e
                    }
                    return Object(Mt.a)(t, e), Object(yt.a)(t, [{
                        key: "update",
                        value: function(e) {
                            this.material.uniforms.dashOffset.value -= this.speed * e, this.isDying() && (this.material.uniforms.opacity.value = .9 + (this.material.uniforms.dashOffset.value + 1) / this.dashLength)
                        }
                    }, {
                        key: "isDied",
                        value: function() {
                            return this.material.uniforms.dashOffset.value < -this.diedAt
                        }
                    }, {
                        key: "isDying",
                        value: function() {
                            return this.material.uniforms.dashOffset.value < -this.dyingAt
                        }
                    }]), t
                }(M.a),
                It = 400,
                Pt = ["#0088ff", "#ff00ff"].map((function(e) {
                    return new T.a(e)
                })),
                jt = function(e) {
                    function t() {
                        var e, i = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).frequency,
                            a = void 0 === i ? .1 : i,
                            s = arguments.length > 1 ? arguments[1] : void 0;
                        Object(r.a)(this, t), e = Object(bt.a)(this, Object(wt.a)(t).call(this)), Object(n.a)(Object(xt.a)(e), "AnimatedMeshLine", void 0), e.frequency = a, e.lineStaticProps = s, e.isStarted = !1, e.i = 0, e.lines = [], e.nbrOfLines = -1, e.update = e.update.bind(Object(xt.a)(e)), e.start = e.start.bind(Object(xt.a)(e)), e.stop = e.stop.bind(Object(xt.a)(e));
                        for (var o = It * a, c = 0; c < o; c++) e.addLine(!0);
                        return e
                    }
                    return Object(Mt.a)(t, e), Object(yt.a)(t, [{
                        key: "start",
                        value: function() {
                            this.isStarted = !0
                        }
                    }, {
                        key: "stop",
                        value: function(e) {
                            this.isStarted = !1
                        }
                    }, {
                        key: "addLine",
                        value: function(e) {
                            if (!(this.lines.length > 400)) {
                                for (var t = -1, i = Math.random() > .8 ? .1 : .3, a = Object(Et.e)(0, 2 * Math.PI), r = [], n = {
                                        x: 0,
                                        y: 0,
                                        z: 0
                                    }; t < 15;) n.x = Math.cos(a) * i, n.y = Math.sin(a) * i, n.z = t, t += .08, a += .025, i += .02, r.push(n.x, n.y, n.z);
                                var s = new Rt(Object.assign({}, this.lineStaticProps, {
                                    visibleLength: Object(Et.e)(.01, .1),
                                    points: r,
                                    defaultOffset: e ? -Math.random() : 0,
                                    speed: 50 * Object(Et.e)(.001, .003),
                                    color: Object(Et.f)(Pt),
                                    width: 1.5 * Object(Et.e)(.04, .1),
                                    opacity: .6 * Math.random()
                                }));
                                return this.lines.push(s), this.add(s), this.nbrOfLines++, s
                            }
                        }
                    }, {
                        key: "removeLine",
                        value: function(e) {
                            this.remove(e), this.nbrOfLines--
                        }
                    }, {
                        key: "update",
                        value: function(e) {
                            for (this.isStarted && Math.random() < this.frequency && this.addLine(), this.i = this.nbrOfLines; this.i >= 0; this.i--) this.lines[this.i].update(e);
                            var t = [];
                            for (this.i = this.nbrOfLines; this.i >= 0; this.i--) this.lines[this.i].isDied() ? this.removeLine(this.lines[this.i]) : t.push(this.lines[this.i]);
                            this.lines = t
                        }
                    }]), t
                }(_.a);
            t.default = Object(vt.a)((function e() {
                var t = this;
                Object(r.a)(this, e), Object(n.a)(this, "disposables", []), Object(n.a)(this, "animateGlasses", !1), Object(n.a)(this, "konamiActivated", !1), Object(n.a)(this, "latestProps", {}), Object(n.a)(this, "latestWindowSize", {
                    width: 1280,
                    height: 720
                }), Object(n.a)(this, "viewportPositionNormalized", new s.a(0, 0)), Object(n.a)(this, "viewportPositionNormalizedCenter", new s.a(-1, 0)), Object(n.a)(this, "viewportPositionSmoothed", new s.a(0, 0)), Object(n.a)(this, "viewportPositionSmoothDamp", new mt.a(.25)), Object(n.a)(this, "scroll", new s.a(0, 0)), Object(n.a)(this, "scrollSmoothed", new s.a(0, 0)), Object(n.a)(this, "scrollSmoothDamp", new mt.a(.25)), Object(n.a)(this, "enteringAmount", 1), Object(n.a)(this, "isEntering", !0), Object(n.a)(this, "updateCameraView", (function() {
                    var e = .5 * t.canvasWidth * 2;
                    t.finalCamera.left = t.canvasWidth / -2, t.finalCamera.right = t.canvasWidth / 2, t.finalCamera.top = t.canvasHeight / 2, t.finalCamera.bottom = t.canvasHeight / -2, t.finalCamera.updateProjectionMatrix(), t.faceOcclusionCamera.setViewOffset(e, t.canvasHeight, 0, 0, t.canvasWidth, t.canvasHeight), t.faceCamera.setViewOffset(e, t.canvasHeight, 0, 0, t.canvasWidth, t.canvasHeight), t.faceFrustumHeight = 2 * t.faceCamera.position.z * Math.tan(.5 * t.faceCamera.fov * o.a.DEG2RAD), t.faceFrustumWidth = t.faceFrustumHeight * t.faceCamera.aspect, t.faceFrustumHeightHalf = .5 * t.faceFrustumHeight, t.faceFrustumWidthHalf = .5 * t.faceFrustumWidth, t.faceViewOffsetX = e / t.canvasWidth, t.particleResetWidth = 1.2 * t.faceFrustumWidth, t.lightCone.position.x = -1 * t.faceFrustumWidthHalf, t.lightCone.lookAt(t.lightConeTarget), t.volumetricLightCylinderUniforms.spotPosition.value = t.lightCone.position, t.backLight.position.set(t.lightCone.position.x, t.lightCone.position.y, t.lightCone.position.z);
                    var i = t.lightCone.position.clone().project(t.faceOcclusionCamera),
                        a = (i.x + 1) / 2,
                        r = (i.y + 1) / 2;
                    t.volumetricLightPassUniforms.lightPosition.value.set(a, r)
                })), Object(n.a)(this, "onMenuChange", (function(e) {
                    var i = e.menuOpen;
                    t.menuOpen = i, t.ASCIIMaterialUniforms.alpha.value = i ? 1 : 0, t.menuOpen && t.ASCIIMaterialUniforms.scan.value > 1 && (t.ASCIIMaterialUniforms.scan.value = 0)
                })), Object(n.a)(this, "startEnterAnimation", (function() {
                    setTimeout((function() {
                        Object(ft.a)({
                            targets: t,
                            enteringAmount: 0,
                            easing: "easeOutCubic",
                            duration: 2500,
                            complete: function() {
                                t.isEntering = !1, t.ASCIIMaterialUniforms.alpha.value = 1
                            }
                        })
                    }), 250)
                })), Object(n.a)(this, "updateMeshPosition", (function() {
                    t.ASCIIMesh.scale.set(t.renderWidth, t.renderHeight, 1), t.ASCIIMaterialUniforms.pixelSize.value.set(1 / t.charCountX, 1 / t.charCountY), t.ASCIIMaterialUniforms.charCount.value.set(t.charCountX, t.charCountY), t.ASCIIMesh.position.set(-t.canvasWidth / 2 + t.renderWidth / 2, t.canvasHeight / 2 - t.renderHeight / 2, -1), t.ASCIIMesh.geometry.boundingSphere = new c.a(new l.a(0, 0, 0), .5 * t.renderHeight), t.plane.scale.set(t.renderWidth || .001, t.renderHeight || .001, 1), t.plane.position.set(t.ASCIIMesh.position.x, t.ASCIIMesh.position.y, -1)
                })), Object(n.a)(this, "updateTextureSizes", (function() {
                    t.faceRenderTarget.setSize(t.faceTextureWidth, t.faceTextureHeight), t.faceOcclusionRenderTarget.setSize(t.faceTextureWidth, t.faceTextureHeight), t.faceOcclusionComposer.setSize(t.faceTextureWidth, t.faceTextureHeight), t.faceDisplacementCanvas.width = t.faceRenderTarget.width, t.faceDisplacementCanvas.height = Math.ceil(1 * t.faceRenderTarget.height)
                })), Object(n.a)(this, "updateSizes", (function(e, i) {
                    var a = t.charCountX,
                        r = t.charCountY;
                    return t.canvasWidth = e, t.canvasHeight = i, t.charCountX = Math.ceil(e / 8), t.charCountY = Math.ceil(i / 8), t.faceTextureWidth = 2 * t.charCountX, t.faceTextureHeight = 2 * t.charCountY, t.renderWidth = 8 * t.charCountX, t.renderHeight = 8 * t.charCountY, t.charCount = t.charCountX * t.charCountY, t.charCountX !== a || t.charCountY !== r
                })), Object(n.a)(this, "init", (function(e, i, r, n, o, c, A) {
                    t.raycaster = new h.a, t.latestWindowSize = r, t.latestProps = A, t.latestWindowInfo = n, t.latestSizeInfo = c, t.scroll.set(o.x, o.y), t.finalScene = new u.a, t.disposables.push(t.finalScene), t.finalCamera = new p.a(i.width / -2, i.width / 2, i.height / 2, i.height / -2, -1e4, 1e4), t.faceCamera = new d.a(25, t.renderWidth / t.renderHeight, 3, 15), t.faceCamera.position.z = 9, t.faceCamera.position.y = -.18, t.faceCamera.position.y = -1.5, t.faceCamera.lookAt(0, 0, -1.5), t.faceOcclusionCamera = t.faceCamera.clone(), t.faceOcclusionCamera.layers.set(1), t.faceOcclusionCamera.near = .01, t.faceOcclusionCamera.far = 100, t.faceOcclusionCamera.updateProjectionMatrix(), t.menuOpen = A.home;
                    var _ = A.initColors,
                        O = void 0 === _ ? [] : _,
                        E = Object(a.a)(O, 2),
                        R = E[0],
                        I = void 0 === R ? "#0088ff" : R,
                        P = E[1],
                        D = void 0 === P ? "#ff00ff" : P;
                    e.shadowMap.enabled = !0, e.shadowMap.type = f.tb, t.updateSizes(i.width, i.height), t.clock = new m.a, t.faceScene = new u.a, t.disposables.push(t.faceScene), t.faceScene.add(t.faceCamera), t.faceRenderTarget = new v.a(t.faceTextureWidth, t.faceTextureHeight), t.disposables.push(t.faceRenderTarget), t.faceRenderTarget.texture.minFilter = f.eb, t.faceRenderTarget.texture.magFilter = f.eb, t.faceRenderTarget.depthBuffer = !0, t.faceRenderTarget.depthTexture = new y, t.faceRenderTarget.depthTexture.type = f.Bc, t.disposables.push(t.faceRenderTarget.depthBuffer), t.mainFaceContainer = new b.a, t.mainFaceContainer.rotation.y = -.25, t.mainFaceContainer.layers.enable(0), t.mainFaceContainer.layers.enable(1), t.faceScene.add(t.mainFaceContainer), t.faceMeshContainer = new b.a, t.faceMeshContainer.rotation.x = -.25, t.faceMeshContainer.layers.enable(0), t.faceMeshContainer.layers.enable(1), t.mainFaceContainer.add(t.faceMeshContainer);
                    var N = new w.a(2, 2, 8),
                        k = new x.a({
                            lights: !0,
                            transparent: !0,
                            uniforms: G.a.merge([dt.a.lights, {
                                tDiffuse: {
                                    value: null
                                }
                            }]),
                            vertexShader: "\n    #include <common>\n\n    struct PointLight {\n      vec3 position;\n      vec3 color;\n      float distance;\n      float decay;\n      int shadow;\n      float shadowBias;\n      float shadowRadius;\n      vec2 shadowMapSize;\n      float shadowCameraNear;\n      float shadowCameraFar;\n    };\n\n    uniform PointLight pointLights[NUM_POINT_LIGHTS];\n    uniform float pointSize;\n\n    varying vec4 vColor;\n    varying vec2 vUv;\n\n    float _punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n    \tif( decayExponent > 0.0 ) {\n    \t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n    \t}\n    \treturn 1.0;\n    }\n\n    void main()\n    {\n      vec4 worldPosition = modelMatrix * vec4(position, 1.0);\n      vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);\n      gl_Position = projectionMatrix * modelViewPosition;\n\n      vec3 viewdir = -normalize(modelViewPosition.xyz);\n\n      vec4 addedLights = vec4(0.1, 0.1, 0.1, 1.0);\n      for(int l = 0; l < NUM_POINT_LIGHTS; l++) {\n        float dist = distance(pointLights[l].position, worldPosition.xyz);\n        addedLights.rgb += pointLights[l].color *\n        _punctualLightIntensityToIrradianceFactor(\n            dist,\n            pointLights[l].distance * 1.1,\n            pointLights[l].decay * 0.5\n          );\n      }\n      vUv = uv;\n      vColor = addedLights;\n    }\n  ",
                            fragmentShader: "\n    varying vec4 vColor;\n    varying vec2 vUv;\n\n    uniform sampler2D tDiffuse;\n\n    void main() {\n      gl_FragColor = texture2D(tDiffuse, vUv) * vColor;\n    }\n  "
                        });
                    k.depthTest = !1, k.depthWrite = !1, t.glassesContainer = new b.a, t.glassesContainer.layers.enable(0), t.glassesContainer.layers.enable(1), t.glassesContainer.visible = !1, t.glassesContainer.position.y = 2, t.glassesContainer.position.x = .02, t.glasses = new M.a(N, k), t.glasses.name = "Glasses", t.glasses.layers.set(0), t.glasses.scale.y = 1.2, t.glasses.position.z = .8, t.glassesContainer.add(t.glasses), t.disposables.push(t.glasses), t.disposables.push(t.glasses.material);
                    Object(gt.c)("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAAXNSR0IArs4c6QAAABJQTFRFR3BMAAAA////Pj4+GhoaKSkpkzxa8QAAAAZ0Uk5TAP//////enng/gAAACtJREFUOI1jYBgFwwsw4gRwBUxACBNC4jAyYKpA42CowOCgOQMLZxQMIQAA79wAdShec7oAAAAASUVORK5CYII=", (function(e) {
                        e.minFilter = f.eb, e.magFilter = f.eb, k.uniforms.tDiffuse.value = e, t.disposables.push(e);
                        var i = t.glasses.clone();
                        t.glassesOcclusion = i, i.material = new S.a({
                            map: e,
                            color: new T.a(0),
                            transparent: !0
                        }), i.layers.set(1), t.glassesContainer.add(i), t.disposables.push(i), t.disposables.push(i.material)
                    }), !0), t.mainFaceContainer.add(t.glassesContainer), (new ut).load("/static/face-".concat(r.width < 768 ? "mobile" : "desktop", ".json"), (function(e) {
                        if (e.scene) {
                            t.disposables.push(e.scene);
                            var i = e.scene.children.find((function(e) {
                                return e instanceof M.a
                            }));
                            if (i) {
                                i.castShadow = i.receiveShadow = !0, i.material = new C({
                                    vertexColors: f.Dc,
                                    specular: new T.a(5592405),
                                    shininess: 12,
                                    transparent: !0
                                }), t.disposables.push(i), t.disposables.push(i.material), t.faceMesh = i, i.layers.set(0), t.faceMeshContainer.add(i);
                                var a = i.clone();
                                a.material = new S.a({
                                    color: new T.a(0)
                                }), a.layers.set(1), t.faceMeshContainer.add(a), t.disposables.push(a), t.disposables.push(a.material), t.startEnterAnimation()
                            }
                        }
                    }), void 0, console.error), t.backLight = new j(I, 4.5, 16, 1), t.backLight.name = "Back Light", t.backLight.layers.enable(1), t.backLight.position.set(0, 0, 0), t.backLight.castShadow = !0, t.backLight.shadow.mapSize.set(512, 512), t.faceScene.add(t.backLight), t.backLight._targetColor = t.targetBackLightColor, t.keyLight = new j(D, 2.2, 10, 1), t.keyLight.name = "Key Light", t.keyLight.layers.enable(1), t.keyLight.position.set(5, 0, 1), t.keyLight.castShadow = !0, t.keyLight.shadow.mapSize.set(512, 512), t.keyLight._targetColor = t.targetKeyLightColor, t.faceScene.add(t.keyLight), t.frontLight = new j(I, .2, 6, 1), t.frontLight.name = "Front Light", t.frontLight.layers.enable(1), t.frontLight.position.set(-2, 1, 2), t.faceScene.add(t.frontLight), t.faceOcclusionRenderTarget = new v.a(t.faceTextureWidth, t.faceTextureHeight), t.disposables.push(t.faceOcclusionRenderTarget), t.faceOcclusionRenderTarget.texture.minFilter = f.eb, t.faceOcclusionRenderTarget.texture.magFilter = f.eb, t.faceOcclusionComposer = new Y(e, t.faceOcclusionRenderTarget), t.faceOcclusionComposer.renderToScreen = !1, t.faceOcclusionComposer.addPass(new Z(t.faceScene, t.faceOcclusionCamera)), t.disposables.push(t.faceOcclusionComposer.renderTarget2);
                    var F = new K({
                        uniforms: {
                            tDiffuse: {
                                value: null
                            },
                            lightPosition: {
                                value: new s.a(.5, .5)
                            },
                            exposure: {
                                value: .1
                            },
                            decay: {
                                value: .96
                            },
                            density: {
                                value: .9
                            },
                            weight: {
                                value: .1
                            },
                            samples: {
                                value: 40
                            }
                        },
                        vertexShader: "\n    varying vec2 vUv;\n    void main() {\n      vUv = uv;\n      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n    }\n  ",
                        fragmentShader: "\n    varying vec2 vUv;\n    uniform sampler2D tDiffuse;\n    uniform vec2 lightPosition;\n    uniform float exposure;\n    uniform float decay;\n    uniform float density;\n    uniform float weight;\n    uniform int samples;\n    const int MAX_SAMPLES = 100;\n\n    void main() {\n      vec2 texCoord = vUv;\n      vec2 deltaTextCoord = texCoord - lightPosition;\n      deltaTextCoord *= 1.0 / float(samples) * density;\n      vec4 color = texture2D(tDiffuse, texCoord);\n      float a = color.a;\n      float illuminationDecay = 1.0;\n      for(int i=0; i < MAX_SAMPLES; i++) {\n        if(i == samples) {\n          break;\n        }\n        texCoord -= deltaTextCoord;\n        vec4 sample = texture2D(tDiffuse, texCoord);\n        sample *= illuminationDecay * weight;\n        color += sample;\n        illuminationDecay *= decay;\n      }\n      gl_FragColor = color * exposure;\n    }\n  "
                    });
                    F.needsSwap = !1, t.faceOcclusionComposer.addPass(F), t.volumetricLightPassUniforms = F.uniforms;
                    var z = new U(5, 6, 15, 32, 6, !0);
                    z.applyMatrix((new L.a).makeTranslation(0, -z.parameters.height / 2, 0)), z.applyMatrix((new L.a).makeRotationX(-Math.PI / 2)), t.disposables.push(z);
                    var B = new x.a({
                        lights: !0,
                        transparent: !0,
                        depthWrite: !1,
                        uniforms: G.a.merge([dt.a.lights, {
                            attenuation: {
                                value: 25
                            },
                            anglePower: {
                                value: 10
                            },
                            spotPosition: {
                                value: new l.a(0, 0, 0)
                            }
                        }]),
                        vertexShader: "\n    #include <common>\n\n    struct PointLight {\n      vec3 position;\n      vec3 color;\n      float distance;\n      float decay;\n      int shadow;\n      float shadowBias;\n      float shadowRadius;\n      vec2 shadowMapSize;\n      float shadowCameraNear;\n      float shadowCameraFar;\n    };\n\n    uniform PointLight pointLights[NUM_POINT_LIGHTS];\n    uniform float viewMix;\n\n    varying vec4 vColor;\n    varying vec3 vNormal;\n    varying vec3 vWorldPosition;\n\n    float _punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n    \tif( decayExponent > 0.0 ) {\n    \t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n    \t}\n    \treturn 1.0;\n    }\n\n    void main() {\n      vNormal = normalize(normalMatrix * normal);\n\n      vec4 worldPosition = modelMatrix * vec4(position, 1.0);\n      vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);\n      gl_Position = projectionMatrix * modelViewPosition;\n\n      vec4 addedLights = vec4(0.1, 0.1, 0.1, 1.0);\n      for(int l = 0; l < NUM_POINT_LIGHTS; l++) {\n        float dist = distance(pointLights[l].position, worldPosition.xyz);\n        addedLights.rgb += pointLights[l].color *\n          _punctualLightIntensityToIrradianceFactor(\n            dist,\n            pointLights[l].distance,\n            pointLights[l].decay\n          );\n      }\n\n      vWorldPosition = worldPosition.xyz;\n      vColor = addedLights;\n    }\n  ",
                        fragmentShader: "\n    varying vec3 vNormal;\n    varying vec3 vWorldPosition;\n    uniform vec3 spotPosition;\n    uniform float attenuation;\n    uniform float anglePower;\n    varying vec4 vColor;\n\n    void main() {\n      float intensity;\n      intensity\t= distance(vWorldPosition, spotPosition)/attenuation;\n      intensity\t= 1.0 - clamp(intensity, 0.0, 1.0);\n      vec3 normal\t= vec3(vNormal.x, vNormal.y, abs(vNormal.z));\n      float angleIntensity\t= pow(dot(normal, vec3(0.0, 0.0, 1.0)), anglePower);\n      intensity\t= intensity * angleIntensity;\n      gl_FragColor = vec4(vColor.rgb, intensity);\n    }\n  "
                    });
                    t.lightCone = new M.a(z, B), t.lightCone.position.set(-1 * t.faceFrustumWidthHalf, 5, -3), t.lightConeTarget = new l.a(0, 0, -5), t.lightCone.lookAt(t.lightConeTarget), t.lightCone.layers.set(1), t.volumetricLightCylinderUniforms = B.uniforms, t.volumetricLightCylinderUniforms.spotPosition.value = t.lightCone.position, t.faceScene.add(t.lightCone), t.disposables.push(B), t.rippleData = [], t.faceDisplacementTextureCleared = !1, t.faceDisplacementCanvas = Object(gt.b)(t.faceRenderTarget.width, Math.ceil(1 * t.faceRenderTarget.height)), t.faceDisplacementContext = t.faceDisplacementCanvas.getContext("2d"), t.faceDisplacementTexture = new g.a(t.faceDisplacementCanvas), t.faceDisplacementTexture.minFilter = f.eb, t.faceDisplacementTexture.magFilter = f.eb, t.disposables.push(t.faceDisplacementTexture);
                    var V = new H({
                        uniforms: {
                            font: {
                                value: null
                            },
                            face: {
                                value: null
                            },
                            occ: {
                                value: null
                            },
                            displace: {
                                value: null
                            },
                            face_depth: {
                                value: null
                            },
                            scan: {
                                value: null
                            },
                            distort: {
                                value: new s.a(1e-6, 0)
                            },
                            alpha: {
                                value: 1
                            },
                            edgeFadeAmount: {
                                value: 1
                            },
                            charCount: {
                                value: new s.a(1, 1)
                            },
                            pixelSize: {
                                value: new s.a(1, 1)
                            },
                            cameraNear: {
                                value: 0
                            },
                            cameraFar: {
                                value: 1
                            },
                            time: {
                                value: 0
                            },
                            noiseIntensity: {
                                value: .4
                            },
                            scanlineIntensity: {
                                value: .3
                            }
                        },
                        vertexShader: "\n    precision highp float;\n\n    uniform mat4 modelViewMatrix;\n    uniform mat4 projectionMatrix;\n\n    // Attributes\n    attribute vec3 position;\n    attribute vec2 uv;\n\n    varying vec2 v_uv;\n\n    void main()\n    {\n      v_uv = uv;\n      vec4 modelViewPosition = modelViewMatrix * vec4(position.xy, 0.0, 1.0);\n      gl_Position = projectionMatrix * modelViewPosition;\n    }\n  ",
                        fragmentShader: "\n    precision highp float;\n    #include <packing>\n\n    uniform sampler2D face;\n    uniform sampler2D face_depth;\n    uniform sampler2D occ;\n    uniform sampler2D font;\n    uniform sampler2D displace;\n\n    uniform float time;\n    uniform float noiseIntensity;\n    uniform float scanlineIntensity;\n\n    uniform float edgeFadeAmount;\n    uniform float scan;\n    uniform float alpha;\n    uniform vec2 distort;\n    uniform vec2 charCount;\n    uniform vec2 pixelSize;\n\n    varying vec2 v_uv;\n\n    // float luma(vec4 color) {\n    //   return dot(color.rgb, vec3(0.299, 0.587, 0.114));\n    // }\n\n    uniform float cameraNear;\n    uniform float cameraFar;\n\n    float readDepth( sampler2D depthSampler, vec2 coord ) {\n      float fragCoordZ = texture2D( depthSampler, coord ).x;\n      float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );\n      return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );\n    }\n\n    void main()\n    {\n      // gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);\n      // return;\n\n      vec2 faceuv = vec2(\n        floor(v_uv.x * charCount.x) * pixelSize.x,\n        floor(v_uv.y * charCount.y) * pixelSize.y\n      );\n\n      vec3 displace = texture2D(displace, faceuv).rgb;\n      float depth = readDepth(face_depth, faceuv);\n\n      float scanClamp = clamp(scan, 0.0, 1.0);\n\n      float scanIntensity = pow(1.0 - mod(abs(scanClamp - depth), 1.0), 140.0) * (1.0 - pow(depth, 10.0));\n\n      vec2 displacedUvOffset = normalize(faceuv.xy - displace.xy) * displace.b + distort;\n\n      vec3 faceColor = vec3(\n        scanIntensity + texture2D(face, faceuv + displacedUvOffset).r ,\n        texture2D(face, faceuv).g,\n        texture2D(face, faceuv - displacedUvOffset).b\n      );\n\n      // make some noise\n\t\t\tfloat x = v_uv.x * v_uv.y * time *  1000.0;\n\t\t\tx = mod( x, 13.0 ) * mod( x, 123.0 );\n      float dx = mod( x, 0.01 );\n      vec3 cResult = faceColor + faceColor * clamp( 0.1 + dx * 100.0, 0.0, 1.0 );\n\n      // get us a sine and cosine\n\t\t\tvec2 sc = vec2( sin( v_uv.y * charCount.y * 8.0 ), cos( v_uv.y * charCount.y * 8.0 ) );\n\n\t\t\t// add scanlines\n\t\t\tcResult += faceColor * vec3( sc.x, sc.y, sc.x ) * scanlineIntensity;\n\n\t\t\t// interpolate between source and result by intensity\n\t\t\tcResult = faceColor + clamp( noiseIntensity, 0.0,1.0 ) * ( cResult - faceColor );\n\n      vec3 occColor = vec3(\n        texture2D(occ, faceuv + displacedUvOffset).r,\n        texture2D(occ, faceuv).g,\n        texture2D(occ, faceuv - displacedUvOffset).b\n      );\n\n      float l = ceil(dot(cResult, vec3(1.0)) - 0.0001) + 0.6;\n\n      cResult -= displace.b * l;\n\n      float charIndex = (1.0 - displace.b) * ((pow(depth, 1.5)) * 60.0);\n\n      vec2 fontuv = vec2(\n        mod(v_uv.x, pixelSize.x),\n        mod(v_uv.y, pixelSize.y)\n      ) * charCount * ".concat(1 / 8, " + vec2(\n        floor(mod(charIndex, ").concat(Math.floor(8), ".0)) * ").concat(1 / 8, ",\n        floor(charIndex * ").concat(1 / Math.floor(8), ") * ").concat(1 / 8, "\n      );\n\n      float fade = (\n        1.0 -\n        pow(1.0 - faceuv.y, 4.0) -\n        (pow(faceuv.x, 15.0) * edgeFadeAmount) -\n        (pow(1.0 - faceuv.x, 15.0) * edgeFadeAmount)\n      );\n\n      gl_FragColor = vec4((occColor + texture2D(font, fontuv).rgb * cResult) * alpha * fade, 1.0);\n    }\n  ")
                    });
                    V.uniforms.face.value = t.faceRenderTarget.texture, V.uniforms.face_depth.value = t.faceRenderTarget.depthTexture, V.uniforms.occ.value = t.faceOcclusionRenderTarget.texture, V.uniforms.displace.value = t.faceDisplacementTexture, V.uniforms.scan.value = 0, V.uniforms.cameraNear.value = t.faceCamera.near, V.uniforms.cameraFar.value = t.faceCamera.far, t.ASCIIMaterialUniforms = V.uniforms;
                    Object(gt.c)("/static/font.png", (function(e) {
                        e.minFilter = f.eb, e.magFilter = f.eb, V.uniforms.font.value = e, t.disposables.push(e)
                    }), !0), t.disposables.push(V), t.faceBufferGeometry = new w.a(1, 1), t.disposables.push(t.faceBufferGeometry), t.ASCIIMesh = new M.a(t.faceBufferGeometry, V), t.ASCIIMesh.name = "Header ASCII Mesh", t.updateCameraView(), t.lineGenerator = new jt({
                        frequency: 1
                    }, {
                        transformLineMethod: function(e) {
                            return 1.5 * e
                        }
                    }), t.lineGenerator.position.z = -6, t.faceScene.add(t.lineGenerator), t.lineGenerator.start();
                    var W = new w.a(1, 1, 1),
                        X = new S.a({
                            transparent: !0,
                            opacity: 0
                        });
                    t.plane = new M.a(W, X), t.plane.name = "Header Raycast Plane", t.finalScene.add(t.plane), t.disposables.push(W), t.finalScene.add(t.ASCIIMesh), t.updateMeshPosition()
                })), Object(n.a)(this, "animate", (function(e) {
                    t.scrollSmoothDamp.calcVector2Obj(t.scrollSmoothed, t.scroll, e), t.ASCIIMaterialUniforms.time.value += e;
                    var i = 1 - .3 * Math.min(1, t.scrollSmoothed.y / t.latestWindowSize.height);
                    t.isEntering && (i = B()(i, .7, t.enteringAmount), t.ASCIIMaterialUniforms.alpha.value = 1 - t.enteringAmount), t.mainFaceContainer.scale.setScalar(i), t.lineGenerator.scale.setScalar(i), t.latestWindowInfo.touchEnabled || (t.faceMeshContainer.rotation.x = -t.viewportPositionNormalizedCenter.y / 24 - .2, t.mainFaceContainer.rotation.y = t.viewportPositionNormalizedCenter.x / 4, t.lineGenerator.rotation.x = .1 * t.faceMeshContainer.rotation.x, t.lineGenerator.rotation.y = .1 * t.mainFaceContainer.rotation.y), t.lineGenerator.update(e), t.animateGlasses && (t.glassesContainer.position.y = t.glassesSmooth.calcNumber(t.glassesContainer.position.y, .54, e), Math.abs(t.glassesContainer.position.y - .54) < .001 && (t.animateGlasses = !1)), t.konamiActivated && (t.backLight.color.offsetHSL(.05 * e, 0, 0), t.keyLight.color.offsetHSL(.05 * e, 0, 0), t.keyLight.color.offsetHSL(.05 * e, 0, 0), t.glasses.lookAt(t.faceCamera.position), t.glassesOcclusion.rotation.copy(t.glasses.rotation)), t.rippleData.length ? (t.faceDisplacementTextureCleared = !1, t.faceDisplacementContext.fillStyle = "rgb(128, 128, 0)", t.faceDisplacementContext.fillRect(0, 0, t.faceDisplacementCanvas.width, t.faceDisplacementCanvas.height), t.rippleData.forEach((function(i, a) {
                        if (i.age += e, i.age > 2) t.rippleData.splice(a, 1);
                        else {
                            var r = 2 * t.charCountY * pt(i.age / 2, 0, 1, 1),
                                n = 16 * (i.age < .6 ? pt(i.age / .6, 0, 1, 1) : pt(1 - (i.age - .6) / 1.4, 0, 1, 1)),
                                s = t.faceDisplacementContext.createRadialGradient(i.x, i.y, .25 * r, i.x, i.y, r);
                            s.addColorStop(1, "rgba(128, 128, 0, 0)"), s.addColorStop(.8, "rgba(".concat(i.color_x, ", ").concat(i.color_y, ", ").concat(n, ", ").concat(n, ")")), s.addColorStop(0, "rgba(128, 128, 0, 0)"), t.faceDisplacementContext.beginPath(), t.faceDisplacementContext.fillStyle = s, t.faceDisplacementContext.arc(i.x, i.y, r, 0, 2 * Math.PI), t.faceDisplacementContext.fill()
                        }
                    })), t.faceDisplacementTexture.needsUpdate = !0) : t.faceDisplacementTextureCleared || (t.faceDisplacementContext.fillStyle = "rgb(128, 128, 0)", t.faceDisplacementContext.fillRect(0, 0, t.faceDisplacementCanvas.width, t.faceDisplacementCanvas.height), t.faceDisplacementTextureCleared = !0, t.faceDisplacementTexture.needsUpdate = !0), t.isEntering || (t.ASCIIMaterialUniforms.scan.value = (t.ASCIIMaterialUniforms.scan.value + .5 * e) % 3)
                })), Object(n.a)(this, "onRender", (function(e) {
                    var i = t.clock.getDelta();
                    t.animate(i), e.setRenderTarget(t.faceOcclusionRenderTarget), t.faceOcclusionComposer.render(), e.setRenderTarget(t.faceRenderTarget), e.render(t.faceScene, t.faceCamera), e.setRenderTarget(null), e.render(t.finalScene, t.finalCamera)
                })), Object(n.a)(this, "onResize", (function(e, i) {
                    t.updateSizes(e, i) && (t.updateCameraView(), t.updateTextureSizes()), t.updateMeshPosition()
                })), Object(n.a)(this, "onWindowResize", (function(e, i) {
                    t.latestWindowSize.width = e, t.latestWindowSize.height = i
                })), Object(n.a)(this, "onSizeInfo", (function(e) {
                    t.latestSizeInfo = e
                })), Object(n.a)(this, "onMouseMove", (function(e, i) {
                    t.viewportPositionNormalized.x = e / t.latestWindowSize.width, t.viewportPositionNormalized.y = i / t.latestWindowSize.height, t.viewportPositionNormalizedCenter.x = 2 * t.viewportPositionNormalized.x - 1, t.viewportPositionNormalizedCenter.y = 2 * (1 - t.viewportPositionNormalized.y) - 1
                })), Object(n.a)(this, "onClick", (function(e, i) {
                    if (t.menuOpen) {
                        t.raycaster.setFromCamera({
                            x: e / t.canvasWidth * 2 - 1,
                            y: i / t.canvasHeight * 2 - 1
                        }, t.finalCamera);
                        var a = t.raycaster.intersectObjects(t.finalScene.children, !0);
                        if (a.length) {
                            var r = a[0];
                            t.rippleData.push({
                                age: 0,
                                x: r.uv.x * t.faceDisplacementCanvas.width,
                                y: (1 - r.uv.y) * t.faceDisplacementCanvas.height,
                                color_x: 255 * r.uv.x,
                                color_y: 255 * r.uv.y
                            })
                        }
                    }
                })), Object(n.a)(this, "onPropsUpdate", (function(e) {
                    var i = t.latestProps;
                    t.latestProps = e, e.home !== i.home && (t.updateCameraView(), t.updateMeshPosition())
                })), Object(n.a)(this, "onScroll", (function(e, i) {
                    t.scroll.set(e, i)
                })), Object(n.a)(this, "onMessage", (function(e, i) {
                    switch (e) {
                        case "onMenuChange":
                            return t.onMenuChange(i);
                        case "konami":
                            return t.glassesContainer.visible = !0, t.glassesSmooth = new mt.a(1.2), t.animateGlasses = !0, void(t.konamiActivated = !0)
                    }
                })), Object(n.a)(this, "suspend", (function() {})), Object(n.a)(this, "resume", (function() {})), Object(n.a)(this, "dispose", (function() {
                    t.disposables.forEach((function(e) {
                        e && e.dispose && e.dispose()
                    }))
                }))
            }), {})
        }
    }
]);
