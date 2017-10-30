globals = {
    subdomain: "",
    subdomainMobile: "",
    subdomain_secure: "https://",
    subdomain_cdn_img: "",
    subdomain_cdn_css: "",
    prevGrupoUrl: "",
    Request_Cookie_domain: "",
    SUBDOMAIN_MAIL: "",
    REQUEST_COUNTRY: "",
    REQUEST_CURRENCY: "",
    REQUEST_CURRENCY_PRECISION: "2",
    USER_TOOLS_CURRENCY_PRECISION: "0",
    Request_FB_AppID: "",
    Request_Map_Zoom_Max: "",
    Request_Language: "en",
    Request_Country: "EN",
    Request_AnalyticsReduced_code: "",
    Request_Analytics_code: "",
    Request_UniversalAnalytics_code: "",
    Request_URL_keygen: "",
    Request_prevurl_model: "",
    Request_id_project: "",
    Request_mis_empresas: "",
    Request_AnalyticsEcommerceEnabled: "",
    Request_Wedding_Awards_Edition: "",
    Request_TageoEmpresas: "",
    Request_Url_IB: "",
    Request_Show_Opiniones_Negativas: "",
    timezone: '1',
    currency_before: '',
    currency_after: '',
    reduced: '',
    link_sections: ["", "", "", "", "", "", ""],
    Request_Pusher_Key: "",
    Request_Pusher_Cluster: "",
    Request_Url_Condiciones_Legales: "",
    Request_Remove_Image_Sizes_Comunidad: false
};
globals.listas = {
    filter_max: 1000,
    filter_step: 50,
    lemonWayNoDocLimitByTransaction: 250,
    lemonWayNoDocWalletMax: 2500
};
! function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    var c = [],
        d = c.slice,
        e = c.concat,
        f = c.push,
        g = c.indexOf,
        h = {},
        i = h.toString,
        j = h.hasOwnProperty,
        k = "".trim,
        l = {},
        m = "1.11.0",
        n = function(a, b) {
            return new n.fn.init(a, b)
        },
        o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        p = /^-ms-/,
        q = /-([\da-z])/gi,
        r = function(a, b) {
            return b.toUpperCase()
        };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function() {
            return d.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
        },
        pushStack: function(a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function(a, b) {
            return n.each(this, a, b)
        },
        map: function(a) {
            return this.pushStack(n.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(d.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: f,
        sort: c.sort,
        splice: c.splice
    }, n.extend = n.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (e = arguments[h]))
                for (d in e) a = g[d], c = e[d], g !== c && (j && c && (n.isPlainObject(c) || (b = n.isArray(c))) ? (b ? (b = !1, f = a && n.isArray(a) ? a : []) : f = a && n.isPlainObject(a) ? a : {}, g[d] = n.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g
    }, n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === n.type(a)
        },
        isArray: Array.isArray || function(a) {
            return "array" === n.type(a)
        },
        isWindow: function(a) {
            return null != a && a == a.window
        },
        isNumeric: function(a) {
            return a - parseFloat(a) >= 0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        isPlainObject: function(a) {
            var b;
            if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1;
            try {
                if (a.constructor && !j.call(a, "constructor") && !j.call(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            if (l.ownLast)
                for (b in a) return j.call(a, b);
            for (b in a);
            return void 0 === b || j.call(a, b)
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
        },
        globalEval: function(b) {
            b && n.trim(b) && (a.execScript || function(b) {
                a.eval.call(a, b)
            })(b)
        },
        camelCase: function(a) {
            return a.replace(p, "ms-").replace(q, r)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b, c) {
            var d, e = 0,
                f = a.length,
                g = s(a);
            if (c) {
                if (g) {
                    for (; f > e; e++)
                        if (d = b.apply(a[e], c), d === !1) break
                } else
                    for (e in a)
                        if (d = b.apply(a[e], c), d === !1) break
            } else if (g) {
                for (; f > e; e++)
                    if (d = b.call(a[e], e, a[e]), d === !1) break
            } else
                for (e in a)
                    if (d = b.call(a[e], e, a[e]), d === !1) break;
            return a
        },
        trim: k && !k.call("\ufeff\xa0") ? function(a) {
            return null == a ? "" : k.call(a)
        } : function(a) {
            return null == a ? "" : (a + "").replace(o, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
        },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if (g) return g.call(b, a, c);
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                    if (c in b && b[c] === a) return c
            }
            return -1
        },
        merge: function(a, b) {
            var c = +b.length,
                d = 0,
                e = a.length;
            while (c > d) a[e++] = b[d++];
            if (c !== c)
                while (void 0 !== b[d]) a[e++] = b[d++];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, c) {
            var d, f = 0,
                g = a.length,
                h = s(a),
                i = [];
            if (h)
                for (; g > f; f++) d = b(a[f], f, c), null != d && i.push(d);
            else
                for (f in a) d = b(a[f], f, c), null != d && i.push(d);
            return e.apply([], i)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, e, f;
            return "string" == typeof b && (f = a[b], b = a, a = f), n.isFunction(a) ? (c = d.call(arguments, 2), e = function() {
                return a.apply(b || this, c.concat(d.call(arguments)))
            }, e.guid = a.guid = a.guid || n.guid++, e) : void 0
        },
        now: function() {
            return +new Date
        },
        support: l
    }), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        h["[object " + b + "]"] = b.toLowerCase()
    });

    function s(a) {
        var b = a.length,
            c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var t = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s = "sizzle" + -new Date,
            t = a.document,
            u = 0,
            v = 0,
            w = eb(),
            x = eb(),
            y = eb(),
            z = function(a, b) {
                return a === b && (j = !0), 0
            },
            A = "undefined",
            B = 1 << 31,
            C = {}.hasOwnProperty,
            D = [],
            E = D.pop,
            F = D.push,
            G = D.push,
            H = D.slice,
            I = D.indexOf || function(a) {
                for (var b = 0, c = this.length; c > b; b++)
                    if (this[b] === a) return b;
                return -1
            },
            J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            K = "[\\x20\\t\\r\\n\\f]",
            L = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            M = L.replace("w", "w#"),
            N = "\\[" + K + "*(" + L + ")" + K + "*(?:([*^$|!~]?=)" + K + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + M + ")|)|)" + K + "*\\]",
            O = ":(" + L + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + N.replace(3, 8) + ")*)|.*)\\)|)",
            P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
            Q = new RegExp("^" + K + "*," + K + "*"),
            R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
            S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
            T = new RegExp(O),
            U = new RegExp("^" + M + "$"),
            V = {
                ID: new RegExp("^#(" + L + ")"),
                CLASS: new RegExp("^\\.(" + L + ")"),
                TAG: new RegExp("^(" + L.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + N),
                PSEUDO: new RegExp("^" + O),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + J + ")$", "i"),
                needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i")
            },
            W = /^(?:input|select|textarea|button)$/i,
            X = /^h\d$/i,
            Y = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            $ = /[+~]/,
            _ = /'|\\/g,
            ab = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
            bb = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            };
        try {
            G.apply(D = H.call(t.childNodes), t.childNodes), D[t.childNodes.length].nodeType
        } catch (cb) {
            G = {
                apply: D.length ? function(a, b) {
                    F.apply(a, H.call(b))
                } : function(a, b) {
                    var c = a.length,
                        d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }

        function db(a, b, d, e) {
            var f, g, h, i, j, m, p, q, u, v;
            if ((b ? b.ownerDocument || b : t) !== l && k(b), b = b || l, d = d || [], !a || "string" != typeof a) return d;
            if (1 !== (i = b.nodeType) && 9 !== i) return [];
            if (n && !e) {
                if (f = Z.exec(a))
                    if (h = f[1]) {
                        if (9 === i) {
                            if (g = b.getElementById(h), !g || !g.parentNode) return d;
                            if (g.id === h) return d.push(g), d
                        } else if (b.ownerDocument && (g = b.ownerDocument.getElementById(h)) && r(b, g) && g.id === h) return d.push(g), d
                    } else {
                        if (f[2]) return G.apply(d, b.getElementsByTagName(a)), d;
                        if ((h = f[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(h)), d
                    }
                if (c.qsa && (!o || !o.test(a))) {
                    if (q = p = s, u = b, v = 9 === i && a, 1 === i && "object" !== b.nodeName.toLowerCase()) {
                        m = ob(a), (p = b.getAttribute("id")) ? q = p.replace(_, "\\$&") : b.setAttribute("id", q), q = "[id='" + q + "'] ", j = m.length;
                        while (j--) m[j] = q + pb(m[j]);
                        u = $.test(a) && mb(b.parentNode) || b, v = m.join(",")
                    }
                    if (v) try {
                        return G.apply(d, u.querySelectorAll(v)), d
                    } catch (w) {} finally {
                        p || b.removeAttribute("id")
                    }
                }
            }
            return xb(a.replace(P, "$1"), b, d, e)
        }

        function eb() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
            return b
        }

        function fb(a) {
            return a[s] = !0, a
        }

        function gb(a) {
            var b = l.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function hb(a, b) {
            var c = a.split("|"),
                e = a.length;
            while (e--) d.attrHandle[c[e]] = b
        }

        function ib(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || B) - (~a.sourceIndex || B);
            if (d) return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function jb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function kb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function lb(a) {
            return fb(function(b) {
                return b = +b, fb(function(c, d) {
                    var e, f = a([], c.length, b),
                        g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function mb(a) {
            return a && typeof a.getElementsByTagName !== A && a
        }
        c = db.support = {}, f = db.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, k = db.setDocument = function(a) {
            var b, e = a ? a.ownerDocument || a : t,
                g = e.defaultView;
            return e !== l && 9 === e.nodeType && e.documentElement ? (l = e, m = e.documentElement, n = !f(e), g && g !== g.top && (g.addEventListener ? g.addEventListener("unload", function() {
                k()
            }, !1) : g.attachEvent && g.attachEvent("onunload", function() {
                k()
            })), c.attributes = gb(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = gb(function(a) {
                return a.appendChild(e.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = Y.test(e.getElementsByClassName) && gb(function(a) {
                return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length
            }), c.getById = gb(function(a) {
                return m.appendChild(a).id = s, !e.getElementsByName || !e.getElementsByName(s).length
            }), c.getById ? (d.find.ID = function(a, b) {
                if (typeof b.getElementById !== A && n) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, d.filter.ID = function(a) {
                var b = a.replace(ab, bb);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function(a) {
                var b = a.replace(ab, bb);
                return function(a) {
                    var c = typeof a.getAttributeNode !== A && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return typeof b.getElementsByTagName !== A ? b.getElementsByTagName(a) : void 0
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return typeof b.getElementsByClassName !== A && n ? b.getElementsByClassName(a) : void 0
            }, p = [], o = [], (c.qsa = Y.test(e.querySelectorAll)) && (gb(function(a) {
                a.innerHTML = "<select t=''><option selected=''></option></select>", a.querySelectorAll("[t^='']").length && o.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || o.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll(":checked").length || o.push(":checked")
            }), gb(function(a) {
                var b = e.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && o.push("name" + K + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || o.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), o.push(",.*:")
            })), (c.matchesSelector = Y.test(q = m.webkitMatchesSelector || m.mozMatchesSelector || m.oMatchesSelector || m.msMatchesSelector)) && gb(function(a) {
                c.disconnectedMatch = q.call(a, "div"), q.call(a, "[s!='']:x"), p.push("!=", O)
            }), o = o.length && new RegExp(o.join("|")), p = p.length && new RegExp(p.join("|")), b = Y.test(m.compareDocumentPosition), r = b || Y.test(m.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a) return !0;
                return !1
            }, z = b ? function(a, b) {
                if (a === b) return j = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === e || a.ownerDocument === t && r(t, a) ? -1 : b === e || b.ownerDocument === t && r(t, b) ? 1 : i ? I.call(i, a) - I.call(i, b) : 0 : 4 & d ? -1 : 1)
            } : function(a, b) {
                if (a === b) return j = !0, 0;
                var c, d = 0,
                    f = a.parentNode,
                    g = b.parentNode,
                    h = [a],
                    k = [b];
                if (!f || !g) return a === e ? -1 : b === e ? 1 : f ? -1 : g ? 1 : i ? I.call(i, a) - I.call(i, b) : 0;
                if (f === g) return ib(a, b);
                c = a;
                while (c = c.parentNode) h.unshift(c);
                c = b;
                while (c = c.parentNode) k.unshift(c);
                while (h[d] === k[d]) d++;
                return d ? ib(h[d], k[d]) : h[d] === t ? -1 : k[d] === t ? 1 : 0
            }, e) : l
        }, db.matches = function(a, b) {
            return db(a, null, null, b)
        }, db.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== l && k(a), b = b.replace(S, "='$1']"), !(!c.matchesSelector || !n || p && p.test(b) || o && o.test(b))) try {
                var d = q.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {}
            return db(b, l, null, [a]).length > 0
        }, db.contains = function(a, b) {
            return (a.ownerDocument || a) !== l && k(a), r(a, b)
        }, db.attr = function(a, b) {
            (a.ownerDocument || a) !== l && k(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !n) : void 0;
            return void 0 !== f ? f : c.attributes || !n ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, db.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, db.uniqueSort = function(a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (j = !c.detectDuplicates, i = !c.sortStable && a.slice(0), a.sort(z), j) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1)
            }
            return i = null, a
        }, e = db.getText = function(a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                } else if (3 === f || 4 === f) return a.nodeValue
            } else
                while (b = a[d++]) c += e(b);
            return c
        }, d = db.selectors = {
            cacheLength: 50,
            createPseudo: fb,
            match: V,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(ab, bb), a[3] = (a[4] || a[5] || "").replace(ab, bb), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || db.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && db.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[5] && a[2];
                    return V.CHILD.test(a[0]) ? null : (a[3] && void 0 !== a[4] ? a[2] = a[4] : c && T.test(c) && (b = ob(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ab, bb).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = w[a + " "];
                    return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && w(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== A && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = db.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            t = !i && !h;
                        if (q) {
                            if (f) {
                                while (p) {
                                    l = b;
                                    while (l = l[p])
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && t) {
                                k = q[s] || (q[s] = {}), j = k[a] || [], n = j[0] === u && j[1], m = j[0] === u && j[2], l = n && q.childNodes[n];
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [u, n, m];
                                        break
                                    }
                            } else if (t && (j = (b[s] || (b[s] = {}))[a]) && j[0] === u) m = j[1];
                            else
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (t && ((l[s] || (l[s] = {}))[a] = [u, m]), l === b)) break;
                            return m -= e, m === d || m % d === 0 && m / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || db.error("unsupported pseudo: " + a);
                    return e[s] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? fb(function(a, c) {
                        var d, f = e(a, b),
                            g = f.length;
                        while (g--) d = I.call(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: fb(function(a) {
                    var b = [],
                        c = [],
                        d = g(a.replace(P, "$1"));
                    return d[s] ? fb(function(a, b, c, e) {
                        var f, g = d(a, null, e, []),
                            h = a.length;
                        while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), !c.pop()
                    }
                }),
                has: fb(function(a) {
                    return function(b) {
                        return db(a, b).length > 0
                    }
                }),
                contains: fb(function(a) {
                    return function(b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                    }
                }),
                lang: fb(function(a) {
                    return U.test(a || "") || db.error("unsupported lang: " + a), a = a.replace(ab, bb).toLowerCase(),
                        function(b) {
                            var c;
                            do
                                if (c = n ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === m
                },
                focus: function(a) {
                    return a === l.activeElement && (!l.hasFocus || l.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return X.test(a.nodeName)
                },
                input: function(a) {
                    return W.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: lb(function() {
                    return [0]
                }),
                last: lb(function(a, b) {
                    return [b - 1]
                }),
                eq: lb(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: lb(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: lb(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: lb(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: lb(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) d.pseudos[b] = jb(b);
        for (b in {
                submit: !0,
                reset: !0
            }) d.pseudos[b] = kb(b);

        function nb() {}
        nb.prototype = d.filters = d.pseudos, d.setFilters = new nb;

        function ob(a, b) {
            var c, e, f, g, h, i, j, k = x[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                (!c || (e = Q.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(P, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length : h ? db.error(a) : x(a, i).slice(0)
        }

        function pb(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function qb(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = v++;
            return b.first ? function(b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function(b, c, g) {
                var h, i, j = [u, f];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) {
                            if (i = b[s] || (b[s] = {}), (h = i[d]) && h[0] === u && h[1] === f) return j[2] = h[2];
                            if (i[d] = j, j[2] = a(b, c, g)) return !0
                        }
            }
        }

        function rb(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function sb(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }

        function tb(a, b, c, d, e, f) {
            return d && !d[s] && (d = tb(d)), e && !e[s] && (e = tb(e, f)), fb(function(f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || wb(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : sb(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = sb(r, n), d(j, [], h, i), k = j.length;
                    while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? I.call(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = sb(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r)
            })
        }

        function ub(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], i = g || d.relative[" "], j = g ? 1 : 0, k = qb(function(a) {
                    return a === b
                }, i, !0), l = qb(function(a) {
                    return I.call(b, a) > -1
                }, i, !0), m = [function(a, c, d) {
                    return !g && (d || c !== h) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d))
                }]; f > j; j++)
                if (c = d.relative[a[j].type]) m = [qb(rb(m), c)];
                else {
                    if (c = d.filter[a[j].type].apply(null, a[j].matches), c[s]) {
                        for (e = ++j; f > e; e++)
                            if (d.relative[a[e].type]) break;
                        return tb(j > 1 && rb(m), j > 1 && pb(a.slice(0, j - 1).concat({
                            value: " " === a[j - 2].type ? "*" : ""
                        })).replace(P, "$1"), c, e > j && ub(a.slice(j, e)), f > e && ub(a = a.slice(e)), f > e && pb(a))
                    }
                    m.push(c)
                }
            return rb(m)
        }

        function vb(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function(f, g, i, j, k) {
                    var m, n, o, p = 0,
                        q = "0",
                        r = f && [],
                        s = [],
                        t = h,
                        v = f || e && d.find.TAG("*", k),
                        w = u += null == t ? 1 : Math.random() || .1,
                        x = v.length;
                    for (k && (h = g !== l && g); q !== x && null != (m = v[q]); q++) {
                        if (e && m) {
                            n = 0;
                            while (o = a[n++])
                                if (o(m, g, i)) {
                                    j.push(m);
                                    break
                                }
                            k && (u = w)
                        }
                        c && ((m = !o && m) && p--, f && r.push(m))
                    }
                    if (p += q, c && q !== p) {
                        n = 0;
                        while (o = b[n++]) o(r, s, g, i);
                        if (f) {
                            if (p > 0)
                                while (q--) r[q] || s[q] || (s[q] = E.call(j));
                            s = sb(s)
                        }
                        G.apply(j, s), k && !f && s.length > 0 && p + b.length > 1 && db.uniqueSort(j)
                    }
                    return k && (u = w, h = t), r
                };
            return c ? fb(f) : f
        }
        g = db.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = y[a + " "];
            if (!f) {
                b || (b = ob(a)), c = b.length;
                while (c--) f = ub(b[c]), f[s] ? d.push(f) : e.push(f);
                f = y(a, vb(e, d))
            }
            return f
        };

        function wb(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) db(a, b[d], c);
            return c
        }

        function xb(a, b, e, f) {
            var h, i, j, k, l, m = ob(a);
            if (!f && 1 === m.length) {
                if (i = m[0] = m[0].slice(0), i.length > 2 && "ID" === (j = i[0]).type && c.getById && 9 === b.nodeType && n && d.relative[i[1].type]) {
                    if (b = (d.find.ID(j.matches[0].replace(ab, bb), b) || [])[0], !b) return e;
                    a = a.slice(i.shift().value.length)
                }
                h = V.needsContext.test(a) ? 0 : i.length;
                while (h--) {
                    if (j = i[h], d.relative[k = j.type]) break;
                    if ((l = d.find[k]) && (f = l(j.matches[0].replace(ab, bb), $.test(i[0].type) && mb(b.parentNode) || b))) {
                        if (i.splice(h, 1), a = f.length && pb(i), !a) return G.apply(e, f), e;
                        break
                    }
                }
            }
            return g(a, m)(f, b, !n, e, $.test(a) && mb(b.parentNode) || b), e
        }
        return c.sortStable = s.split("").sort(z).join("") === s, c.detectDuplicates = !!j, k(), c.sortDetached = gb(function(a) {
            return 1 & a.compareDocumentPosition(l.createElement("div"))
        }), gb(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || hb("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && gb(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || hb("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), gb(function(a) {
            return null == a.getAttribute("disabled")
        }) || hb(J, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), db
    }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = n.expr.match.needsContext,
        v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        w = /^.[^:#\[\.,]*$/;

    function x(a, b, c) {
        if (n.isFunction(b)) return n.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return n.grep(a, function(a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (w.test(b)) return n.filter(b, a, c);
            b = n.filter(b, a)
        }
        return n.grep(a, function(a) {
            return n.inArray(a, b) >= 0 !== c
        })
    }
    n.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, n.fn.extend({
        find: function(a) {
            var b, c = [],
                d = this,
                e = d.length;
            if ("string" != typeof a) return this.pushStack(n(a).filter(function() {
                for (b = 0; e > b; b++)
                    if (n.contains(d[b], this)) return !0
            }));
            for (b = 0; e > b; b++) n.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? n.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
        },
        filter: function(a) {
            return this.pushStack(x(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(x(this, a || [], !0))
        },
        is: function(a) {
            return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length
        }
    });
    var y, z = a.document,
        A = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        B = n.fn.init = function(a, b) {
            var c, d;
            if (!a) return this;
            if ("string" == typeof a) {
                if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : A.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
                if (c[1]) {
                    if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : z, !0)), v.test(c[1]) && n.isPlainObject(b))
                        for (c in b) n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                    return this
                }
                if (d = z.getElementById(c[2]), d && d.parentNode) {
                    if (d.id !== c[2]) return y.find(a);
                    this.length = 1, this[0] = d
                }
                return this.context = z, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
        };
    B.prototype = n.fn, y = n(z);
    var C = /^(?:parents|prev(?:Until|All))/,
        D = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    n.extend({
        dir: function(a, b, c) {
            var d = [],
                e = a[b];
            while (e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !n(e).is(c))) 1 === e.nodeType && d.push(e), e = e[b];
            return d
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }), n.fn.extend({
        has: function(a) {
            var b, c = n(a, this),
                d = c.length;
            return this.filter(function() {
                for (b = 0; d > b; b++)
                    if (n.contains(this, c[b])) return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? n.unique(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? n.inArray(this[0], n(a)) : n.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(n.unique(n.merge(this.get(), n(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });

    function E(a, b) {
        do a = a[b]; while (a && 1 !== a.nodeType);
        return a
    }
    n.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return n.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return n.dir(a, "parentNode", c)
        },
        next: function(a) {
            return E(a, "nextSibling")
        },
        prev: function(a) {
            return E(a, "previousSibling")
        },
        nextAll: function(a) {
            return n.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return n.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return n.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return n.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return n.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return n.sibling(a.firstChild)
        },
        contents: function(a) {
            return n.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : n.merge([], a.childNodes)
        }
    }, function(a, b) {
        n.fn[a] = function(c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (D[a] || (e = n.unique(e)), C.test(a) && (e = e.reverse())), this.pushStack(e)
        }
    });
    var F = /\S+/g,
        G = {};

    function H(a) {
        var b = G[a] = {};
        return n.each(a.match(F) || [], function(a, c) {
            b[c] = !0
        }), b
    }
    n.Callbacks = function(a) {
        a = "string" == typeof a ? G[a] || H(a) : n.extend({}, a);
        var b, c, d, e, f, g, h = [],
            i = !a.once && [],
            j = function(l) {
                for (c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0; h && e > f; f++)
                    if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                        c = !1;
                        break
                    }
                b = !1, h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable())
            },
            k = {
                add: function() {
                    if (h) {
                        var d = h.length;
                        ! function f(b) {
                            n.each(b, function(b, c) {
                                var d = n.type(c);
                                "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && f(c)
                            })
                        }(arguments), b ? e = h.length : c && (g = d, j(c))
                    }
                    return this
                },
                remove: function() {
                    return h && n.each(arguments, function(a, c) {
                        var d;
                        while ((d = n.inArray(c, h, d)) > -1) h.splice(d, 1), b && (e >= d && e--, f >= d && f--)
                    }), this
                },
                has: function(a) {
                    return a ? n.inArray(a, h) > -1 : !(!h || !h.length)
                },
                empty: function() {
                    return h = [], e = 0, this
                },
                disable: function() {
                    return h = i = c = void 0, this
                },
                disabled: function() {
                    return !h
                },
                lock: function() {
                    return i = void 0, c || k.disable(), this
                },
                locked: function() {
                    return !i
                },
                fireWith: function(a, c) {
                    return !h || d && !i || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? i.push(c) : j(c)), this
                },
                fire: function() {
                    return k.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!d
                }
            };
        return k
    }, n.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", n.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", n.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", n.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return n.Deferred(function(c) {
                            n.each(b, function(b, f) {
                                var g = n.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = g && g.apply(this, arguments);
                                    a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? n.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, n.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b = 0,
                c = d.call(arguments),
                e = c.length,
                f = 1 !== e || a && n.isFunction(a.promise) ? e : 0,
                g = 1 === f ? a : n.Deferred(),
                h = function(a, b, c) {
                    return function(e) {
                        b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                    }
                },
                i, j, k;
            if (e > 1)
                for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var I;
    n.fn.ready = function(a) {
        return n.ready.promise().done(a), this
    }, n.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? n.readyWait++ : n.ready(!0)
        },
        ready: function(a) {
            if (a === !0 ? !--n.readyWait : !n.isReady) {
                if (!z.body) return setTimeout(n.ready);
                n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(z, [n]), n.fn.trigger && n(z).trigger("ready").off("ready"))
            }
        }
    });

    function J() {
        z.addEventListener ? (z.removeEventListener("DOMContentLoaded", K, !1), a.removeEventListener("load", K, !1)) : (z.detachEvent("onreadystatechange", K), a.detachEvent("onload", K))
    }

    function K() {
        (z.addEventListener || "load" === event.type || "complete" === z.readyState) && (J(), n.ready())
    }
    n.ready.promise = function(b) {
        if (!I)
            if (I = n.Deferred(), "complete" === z.readyState) setTimeout(n.ready);
            else if (z.addEventListener) z.addEventListener("DOMContentLoaded", K, !1), a.addEventListener("load", K, !1);
        else {
            z.attachEvent("onreadystatechange", K), a.attachEvent("onload", K);
            var c = !1;
            try {
                c = null == a.frameElement && z.documentElement
            } catch (d) {}
            c && c.doScroll && ! function e() {
                if (!n.isReady) {
                    try {
                        c.doScroll("left")
                    } catch (a) {
                        return setTimeout(e, 50)
                    }
                    J(), n.ready()
                }
            }()
        }
        return I.promise(b)
    };
    var L = "undefined",
        M;
    for (M in n(l)) break;
    l.ownLast = "0" !== M, l.inlineBlockNeedsLayout = !1, n(function() {
            var a, b, c = z.getElementsByTagName("body")[0];
            c && (a = z.createElement("div"), a.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", b = z.createElement("div"), c.appendChild(a).appendChild(b), typeof b.style.zoom !== L && (b.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1", (l.inlineBlockNeedsLayout = 3 === b.offsetWidth) && (c.style.zoom = 1)), c.removeChild(a), a = b = null)
        }),
        function() {
            var a = z.createElement("div");
            if (null == l.deleteExpando) {
                l.deleteExpando = !0;
                try {
                    delete a.test
                } catch (b) {
                    l.deleteExpando = !1
                }
            }
            a = null
        }(), n.acceptData = function(a) {
            var b = n.noData[(a.nodeName + " ").toLowerCase()],
                c = +a.nodeType || 1;
            return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
        };
    var N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        O = /([A-Z])/g;

    function P(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(O, "-$1").toLowerCase();
            if (c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c
                } catch (e) {}
                n.data(a, b, c)
            } else c = void 0
        }
        return c
    }

    function Q(a) {
        var b;
        for (b in a)
            if (("data" !== b || !n.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0
    }

    function R(a, b, d, e) {
        if (n.acceptData(a)) {
            var f, g, h = n.expando,
                i = a.nodeType,
                j = i ? n.cache : a,
                k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || n.guid++ : h), j[k] || (j[k] = i ? {} : {
                toJSON: n.noop
            }), ("object" == typeof b || "function" == typeof b) && (e ? j[k] = n.extend(j[k], b) : j[k].data = n.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[n.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[n.camelCase(b)])) : f = g, f
        }
    }

    function S(a, b, c) {
        if (n.acceptData(a)) {
            var d, e, f = a.nodeType,
                g = f ? n.cache : a,
                h = f ? a[n.expando] : n.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    n.isArray(b) ? b = b.concat(n.map(b, n.camelCase)) : b in d ? b = [b] : (b = n.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                    while (e--) delete d[b[e]];
                    if (c ? !Q(d) : !n.isEmptyObject(d)) return
                }(c || (delete g[h].data, Q(g[h]))) && (f ? n.cleanData([a], !0) : l.deleteExpando || g != g.window ? delete g[h] : g[h] = null)
            }
        }
    }
    n.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(a) {
            return a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando], !!a && !Q(a)
        },
        data: function(a, b, c) {
            return R(a, b, c)
        },
        removeData: function(a, b) {
            return S(a, b)
        },
        _data: function(a, b, c) {
            return R(a, b, c, !0)
        },
        _removeData: function(a, b) {
            return S(a, b, !0)
        }
    }), n.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = n.data(f), 1 === f.nodeType && !n._data(f, "parsedAttrs"))) {
                    c = g.length;
                    while (c--) d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d]));
                    n._data(f, "parsedAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                n.data(this, a)
            }) : arguments.length > 1 ? this.each(function() {
                n.data(this, a, b)
            }) : f ? P(f, a, n.data(f, a)) : void 0
        },
        removeData: function(a) {
            return this.each(function() {
                n.removeData(this, a)
            })
        }
    }), n.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = n._data(a, b), c && (!d || n.isArray(c) ? d = n._data(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = n.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = n._queueHooks(a, b),
                g = function() {
                    n.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return n._data(a, c) || n._data(a, c, {
                empty: n.Callbacks("once memory").add(function() {
                    n._removeData(a, b + "queue"), n._removeData(a, c)
                })
            })
        }
    }), n.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                n.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1,
                e = n.Deferred(),
                f = this,
                g = this.length,
                h = function() {
                    --d || e.resolveWith(f, [f])
                };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) c = n._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var T = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        U = ["Top", "Right", "Bottom", "Left"],
        V = function(a, b) {
            return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
        },
        W = n.access = function(a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === n.type(c)) {
                e = !0;
                for (h in c) n.access(a, b, h, c[h], !0, f, g)
            } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                    return j.call(n(a), c)
                })), b))
                for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        X = /^(?:checkbox|radio)$/i;
    ! function() {
        var a = z.createDocumentFragment(),
            b = z.createElement("div"),
            c = z.createElement("input");
        if (b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a>", l.leadingWhitespace = 3 === b.firstChild.nodeType, l.tbody = !b.getElementsByTagName("tbody").length, l.htmlSerialize = !!b.getElementsByTagName("link").length, l.html5Clone = "<:nav></:nav>" !== z.createElement("nav").cloneNode(!0).outerHTML, c.type = "checkbox", c.checked = !0, a.appendChild(c), l.appendChecked = c.checked, b.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, a.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", l.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, l.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function() {
                l.noCloneEvent = !1
            }), b.cloneNode(!0).click()), null == l.deleteExpando) {
            l.deleteExpando = !0;
            try {
                delete b.test
            } catch (d) {
                l.deleteExpando = !1
            }
        }
        a = b = c = null
    }(),
    function() {
        var b, c, d = z.createElement("div");
        for (b in {
                submit: !0,
                change: !0,
                focusin: !0
            }) c = "on" + b, (l[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), l[b + "Bubbles"] = d.attributes[c].expando === !1);
        d = null
    }();
    var Y = /^(?:input|select|textarea)$/i,
        Z = /^key/,
        $ = /^(?:mouse|contextmenu)|click/,
        _ = /^(?:focusinfocus|focusoutblur)$/,
        ab = /^([^.]*)(?:\.(.+)|)$/;

    function bb() {
        return !0
    }

    function cb() {
        return !1
    }

    function db() {
        try {
            return z.activeElement
        } catch (a) {}
    }
    n.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = n._data(a);
            if (r) {
                c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = n.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function(a) {
                    return typeof n === L || a && n.event.triggered === a.type ? void 0 : n.event.dispatch.apply(k.elem, arguments)
                }, k.elem = a), b = (b || "").match(F) || [""], h = b.length;
                while (h--) f = ab.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = n.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = n.event.special[o] || {}, l = n.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && n.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, i), (m = g[o]) || (m = g[o] = [], m.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), n.event.global[o] = !0);
                a = null
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = n.hasData(a) && n._data(a);
            if (r && (k = r.events)) {
                b = (b || "").match(F) || [""], j = b.length;
                while (j--)
                    if (h = ab.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                        l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length;
                        while (f--) g = m[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
                        i && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete k[o])
                    } else
                        for (o in k) n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(k) && (delete r.handle, n._removeData(a, "events"))
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, k, l, m, o = [d || z],
                p = j.call(b, "type") ? b.type : b,
                q = j.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = l = d = d || z, 3 !== d.nodeType && 8 !== d.nodeType && !_.test(p + n.event.triggered) && (p.indexOf(".") >= 0 && (q = p.split("."), p = q.shift(), q.sort()), g = p.indexOf(":") < 0 && "on" + p, b = b[n.expando] ? b : new n.Event(p, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = q.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : n.makeArray(c, [b]), k = n.event.special[p] || {}, e || !k.trigger || k.trigger.apply(d, c) !== !1)) {
                if (!e && !k.noBubble && !n.isWindow(d)) {
                    for (i = k.delegateType || p, _.test(i + p) || (h = h.parentNode); h; h = h.parentNode) o.push(h), l = h;
                    l === (d.ownerDocument || z) && o.push(l.defaultView || l.parentWindow || a)
                }
                m = 0;
                while ((h = o[m++]) && !b.isPropagationStopped()) b.type = m > 1 ? i : k.bindType || p, f = (n._data(h, "events") || {})[b.type] && n._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && n.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());
                if (b.type = p, !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && n.acceptData(d) && g && d[p] && !n.isWindow(d)) {
                    l = d[g], l && (d[g] = null), n.event.triggered = p;
                    try {
                        d[p]()
                    } catch (r) {}
                    n.event.triggered = void 0, l && (d[g] = l)
                }
                return b.result
            }
        },
        dispatch: function(a) {
            a = n.event.fix(a);
            var b, c, e, f, g, h = [],
                i = d.call(arguments),
                j = (n._data(this, "events") || {})[a.type] || [],
                k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = n.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, g = 0;
                    while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped())(!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, c = ((n.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))
                for (; i != this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (e = [], f = 0; h > f; f++) d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? n(c, this).index(i) >= 0 : n.find(c, this, null, [i]).length), e[c] && e.push(d);
                        e.length && g.push({
                            elem: i,
                            handlers: e
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        fix: function(a) {
            if (a[n.expando]) return a;
            var b, c, d, e = a.type,
                f = a,
                g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = $.test(e) ? this.mouseHooks : Z.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length;
            while (b--) c = d[b], a[c] = f[c];
            return a.target || (a.target = f.srcElement || z), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button,
                    g = b.fromElement;
                return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || z, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== db() && this.focus) try {
                        return this.focus(), !1
                    } catch (a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === db() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return n.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return n.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = n.extend(new n.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, n.removeEvent = z.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function(a, b, c) {
        var d = "on" + b;
        a.detachEvent && (typeof a[d] === L && (a[d] = null), a.detachEvent(d, c))
    }, n.Event = function(a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && (a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault()) ? bb : cb) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
    }, n.Event.prototype = {
        isDefaultPrevented: cb,
        isPropagationStopped: cb,
        isImmediatePropagationStopped: cb,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = bb, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = bb, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = bb, this.stopPropagation()
        }
    }, n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(a, b) {
        n.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), l.submitBubbles || (n.event.special.submit = {
        setup: function() {
            return n.nodeName(this, "form") ? !1 : void n.event.add(this, "click._submit keypress._submit", function(a) {
                var b = a.target,
                    c = n.nodeName(b, "input") || n.nodeName(b, "button") ? b.form : void 0;
                c && !n._data(c, "submitBubbles") && (n.event.add(c, "submit._submit", function(a) {
                    a._submit_bubble = !0
                }), n._data(c, "submitBubbles", !0))
            })
        },
        postDispatch: function(a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && n.event.simulate("submit", this.parentNode, a, !0))
        },
        teardown: function() {
            return n.nodeName(this, "form") ? !1 : void n.event.remove(this, "._submit")
        }
    }), l.changeBubbles || (n.event.special.change = {
        setup: function() {
            return Y.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (n.event.add(this, "propertychange._change", function(a) {
                "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
            }), n.event.add(this, "click._change", function(a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1), n.event.simulate("change", this, a, !0)
            })), !1) : void n.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                Y.test(b.nodeName) && !n._data(b, "changeBubbles") && (n.event.add(b, "change._change", function(a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || n.event.simulate("change", this.parentNode, a, !0)
                }), n._data(b, "changeBubbles", !0))
            })
        },
        handle: function(a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return n.event.remove(this, "._change"), !Y.test(this.nodeName)
        }
    }), l.focusinBubbles || n.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            n.event.simulate(b, a.target, n.event.fix(a), !0)
        };
        n.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = n._data(d, b);
                e || d.addEventListener(a, c, !0), n._data(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = n._data(d, b) - 1;
                e ? n._data(d, b, e) : (d.removeEventListener(a, c, !0), n._removeData(d, b))
            }
        }
    }), n.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (f in a) this.on(f, b, c, a[f], e);
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = cb;
            else if (!d) return this;
            return 1 === e && (g = d, d = function(a) {
                return n().off(a), g.apply(this, arguments)
            }, d.guid = g.guid || (g.guid = n.guid++)), this.each(function() {
                n.event.add(this, a, d, c, b)
            })
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = cb), this.each(function() {
                n.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                n.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0
        }
    });

    function eb(a) {
        var b = fb.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement)
            while (b.length) c.createElement(b.pop());
        return c
    }
    var fb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        gb = / jQuery\d+="(?:null|\d+)"/g,
        hb = new RegExp("<(?:" + fb + ")[\\s/>]", "i"),
        ib = /^\s+/,
        jb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        kb = /<([\w:]+)/,
        lb = /<tbody/i,
        mb = /<|&#?\w+;/,
        nb = /<(?:script|style|link)/i,
        ob = /checked\s*(?:[^=]|=\s*.checked.)/i,
        pb = /^$|\/(?:java|ecma)script/i,
        qb = /^true\/(.*)/,
        rb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        sb = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        tb = eb(z),
        ub = tb.appendChild(z.createElement("div"));
    sb.optgroup = sb.option, sb.tbody = sb.tfoot = sb.colgroup = sb.caption = sb.thead, sb.th = sb.td;

    function vb(a, b) {
        var c, d, e = 0,
            f = typeof a.getElementsByTagName !== L ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== L ? a.querySelectorAll(b || "*") : void 0;
        if (!f)
            for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || n.nodeName(d, b) ? f.push(d) : n.merge(f, vb(d, b));
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], f) : f
    }

    function wb(a) {
        X.test(a.type) && (a.defaultChecked = a.checked)
    }

    function xb(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function yb(a) {
        return a.type = (null !== n.find.attr(a, "type")) + "/" + a.type, a
    }

    function zb(a) {
        var b = qb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function Ab(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++) n._data(c, "globalEval", !b || n._data(b[d], "globalEval"))
    }

    function Bb(a, b) {
        if (1 === b.nodeType && n.hasData(a)) {
            var c, d, e, f = n._data(a),
                g = n._data(b, f),
                h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h)
                    for (d = 0, e = h[c].length; e > d; d++) n.event.add(b, c, h[c][d])
            }
            g.data && (g.data = n.extend({}, g.data))
        }
    }

    function Cb(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !l.noCloneEvent && b[n.expando]) {
                e = n._data(b);
                for (d in e.events) n.removeEvent(b, d, e.handle);
                b.removeAttribute(n.expando)
            }
            "script" === c && b.text !== a.text ? (yb(b).text = a.text, zb(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), l.html5Clone && a.innerHTML && !n.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && X.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
        }
    }
    n.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h, i = n.contains(a.ownerDocument, a);
            if (l.html5Clone || n.isXMLDoc(a) || !hb.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (ub.innerHTML = a.outerHTML, ub.removeChild(f = ub.firstChild)), !(l.noCloneEvent && l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
                for (d = vb(f), h = vb(a), g = 0; null != (e = h[g]); ++g) d[g] && Cb(e, d[g]);
            if (b)
                if (c)
                    for (h = h || vb(a), d = d || vb(f), g = 0; null != (e = h[g]); g++) Bb(e, d[g]);
                else Bb(a, f);
            return d = vb(f, "script"), d.length > 0 && Ab(d, !i && vb(a, "script")), d = h = e = null, f
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, k, m = a.length, o = eb(b), p = [], q = 0; m > q; q++)
                if (f = a[q], f || 0 === f)
                    if ("object" === n.type(f)) n.merge(p, f.nodeType ? [f] : f);
                    else if (mb.test(f)) {
                h = h || o.appendChild(b.createElement("div")), i = (kb.exec(f) || ["", ""])[1].toLowerCase(), k = sb[i] || sb._default, h.innerHTML = k[1] + f.replace(jb, "<$1></$2>") + k[2], e = k[0];
                while (e--) h = h.lastChild;
                if (!l.leadingWhitespace && ib.test(f) && p.push(b.createTextNode(ib.exec(f)[0])), !l.tbody) {
                    f = "table" !== i || lb.test(f) ? "<table>" !== k[1] || lb.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length;
                    while (e--) n.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j)
                }
                n.merge(p, h.childNodes), h.textContent = "";
                while (h.firstChild) h.removeChild(h.firstChild);
                h = o.lastChild
            } else p.push(b.createTextNode(f));
            h && o.removeChild(h), l.appendChecked || n.grep(vb(p, "input"), wb), q = 0;
            while (f = p[q++])
                if ((!d || -1 === n.inArray(f, d)) && (g = n.contains(f.ownerDocument, f), h = vb(o.appendChild(f), "script"), g && Ab(h), c)) {
                    e = 0;
                    while (f = h[e++]) pb.test(f.type || "") && c.push(f)
                }
            return h = null, o
        },
        cleanData: function(a, b) {
            for (var d, e, f, g, h = 0, i = n.expando, j = n.cache, k = l.deleteExpando, m = n.event.special; null != (d = a[h]); h++)
                if ((b || n.acceptData(d)) && (f = d[i], g = f && j[f])) {
                    if (g.events)
                        for (e in g.events) m[e] ? n.event.remove(d, e) : n.removeEvent(d, e, g.handle);
                    j[f] && (delete j[f], k ? delete d[i] : typeof d.removeAttribute !== L ? d.removeAttribute(i) : d[i] = null, c.push(f))
                }
        }
    }), n.fn.extend({
        text: function(a) {
            return W(this, function(a) {
                return void 0 === a ? n.text(this) : this.empty().append((this[0] && this[0].ownerDocument || z).createTextNode(a))
            }, null, a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = xb(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = xb(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function(a, b) {
            for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || n.cleanData(vb(c)), c.parentNode && (b && n.contains(c.ownerDocument, c) && Ab(vb(c, "script")), c.parentNode.removeChild(c));
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && n.cleanData(vb(a, !1));
                while (a.firstChild) a.removeChild(a.firstChild);
                a.options && n.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return n.clone(this, a, b)
            })
        },
        html: function(a) {
            return W(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(gb, "") : void 0;
                if (!("string" != typeof a || nb.test(a) || !l.htmlSerialize && hb.test(a) || !l.leadingWhitespace && ib.test(a) || sb[(kb.exec(a) || ["", ""])[1].toLowerCase()])) {
                    a = a.replace(jb, "<$1></$2>");
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(vb(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode, n.cleanData(vb(this)), a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0,
                k = this.length,
                m = this,
                o = k - 1,
                p = a[0],
                q = n.isFunction(p);
            if (q || k > 1 && "string" == typeof p && !l.checkClone && ob.test(p)) return this.each(function(c) {
                var d = m.eq(c);
                q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
            });
            if (k && (i = n.buildFragment(a, this[0].ownerDocument, !1, this), c = i.firstChild, 1 === i.childNodes.length && (i = c), c)) {
                for (g = n.map(vb(i, "script"), yb), f = g.length; k > j; j++) d = i, j !== o && (d = n.clone(d, !0, !0), f && n.merge(g, vb(d, "script"))), b.call(this[j], d, j);
                if (f)
                    for (h = g[g.length - 1].ownerDocument, n.map(g, zb), j = 0; f > j; j++) d = g[j], pb.test(d.type || "") && !n._data(d, "globalEval") && n.contains(h, d) && (d.src ? n._evalUrl && n._evalUrl(d.src) : n.globalEval((d.text || d.textContent || d.innerHTML || "").replace(rb, "")));
                i = c = null
            }
            return this
        }
    }), n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        n.fn[a] = function(a) {
            for (var c, d = 0, e = [], g = n(a), h = g.length - 1; h >= d; d++) c = d === h ? this : this.clone(!0), n(g[d])[b](c), f.apply(e, c.get());
            return this.pushStack(e)
        }
    });
    var Db, Eb = {};

    function Fb(b, c) {
        var d = n(c.createElement(b)).appendTo(c.body),
            e = a.getDefaultComputedStyle ? a.getDefaultComputedStyle(d[0]).display : n.css(d[0], "display");
        return d.detach(), e
    }

    function Gb(a) {
        var b = z,
            c = Eb[a];
        return c || (c = Fb(a, b), "none" !== c && c || (Db = (Db || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Db[0].contentWindow || Db[0].contentDocument).document, b.write(), b.close(), c = Fb(a, b), Db.detach()), Eb[a] = c), c
    }! function() {
        var a, b, c = z.createElement("div"),
            d = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
        c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = c.getElementsByTagName("a")[0], a.style.cssText = "float:left;opacity:.5", l.opacity = /^0.5/.test(a.style.opacity), l.cssFloat = !!a.style.cssFloat, c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === c.style.backgroundClip, a = c = null, l.shrinkWrapBlocks = function() {
            var a, c, e, f;
            if (null == b) {
                if (a = z.getElementsByTagName("body")[0], !a) return;
                f = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px", c = z.createElement("div"), e = z.createElement("div"), a.appendChild(c).appendChild(e), b = !1, typeof e.style.zoom !== L && (e.style.cssText = d + ";width:1px;padding:1px;zoom:1", e.innerHTML = "<div></div>", e.firstChild.style.width = "5px", b = 3 !== e.offsetWidth), a.removeChild(c), a = c = e = null
            }
            return b
        }
    }();
    var Hb = /^margin/,
        Ib = new RegExp("^(" + T + ")(?!px)[a-z%]+$", "i"),
        Jb, Kb, Lb = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Jb = function(a) {
        return a.ownerDocument.defaultView.getComputedStyle(a, null)
    }, Kb = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Jb(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), Ib.test(g) && Hb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + ""
    }) : z.documentElement.currentStyle && (Jb = function(a) {
        return a.currentStyle
    }, Kb = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Jb(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Ib.test(g) && !Lb.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
    });

    function Mb(a, b) {
        return {
            get: function() {
                var c = a();
                if (null != c) return c ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }! function() {
        var b, c, d, e, f, g, h = z.createElement("div"),
            i = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px",
            j = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
        h.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", b = h.getElementsByTagName("a")[0], b.style.cssText = "float:left;opacity:.5", l.opacity = /^0.5/.test(b.style.opacity), l.cssFloat = !!b.style.cssFloat, h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === h.style.backgroundClip, b = h = null, n.extend(l, {
            reliableHiddenOffsets: function() {
                if (null != c) return c;
                var a, b, d, e = z.createElement("div"),
                    f = z.getElementsByTagName("body")[0];
                if (f) return e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = z.createElement("div"), a.style.cssText = i, f.appendChild(a).appendChild(e), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", b = e.getElementsByTagName("td"), b[0].style.cssText = "padding:0;margin:0;border:0;display:none", d = 0 === b[0].offsetHeight, b[0].style.display = "", b[1].style.display = "none", c = d && 0 === b[0].offsetHeight, f.removeChild(a), e = f = null, c
            },
            boxSizing: function() {
                return null == d && k(), d
            },
            boxSizingReliable: function() {
                return null == e && k(), e
            },
            pixelPosition: function() {
                return null == f && k(), f
            },
            reliableMarginRight: function() {
                var b, c, d, e;
                if (null == g && a.getComputedStyle) {
                    if (b = z.getElementsByTagName("body")[0], !b) return;
                    c = z.createElement("div"), d = z.createElement("div"), c.style.cssText = i, b.appendChild(c).appendChild(d), e = d.appendChild(z.createElement("div")), e.style.cssText = d.style.cssText = j, e.style.marginRight = e.style.width = "0", d.style.width = "1px", g = !parseFloat((a.getComputedStyle(e, null) || {}).marginRight), b.removeChild(c)
                }
                return g
            }
        });

        function k() {
            var b, c, h = z.getElementsByTagName("body")[0];
            h && (b = z.createElement("div"), c = z.createElement("div"), b.style.cssText = i, h.appendChild(b).appendChild(c), c.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%", n.swap(h, null != h.style.zoom ? {
                zoom: 1
            } : {}, function() {
                d = 4 === c.offsetWidth
            }), e = !0, f = !1, g = !0, a.getComputedStyle && (f = "1%" !== (a.getComputedStyle(c, null) || {}).top, e = "4px" === (a.getComputedStyle(c, null) || {
                width: "4px"
            }).width), h.removeChild(b), c = h = null)
        }
    }(), n.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e
    };
    var Nb = /alpha\([^)]*\)/i,
        Ob = /opacity\s*=\s*([^)]*)/,
        Pb = /^(none|table(?!-c[ea]).+)/,
        Qb = new RegExp("^(" + T + ")(.*)$", "i"),
        Rb = new RegExp("^([+-])=(" + T + ")", "i"),
        Sb = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Tb = {
            letterSpacing: 0,
            fontWeight: 400
        },
        Ub = ["Webkit", "O", "Moz", "ms"];

    function Vb(a, b) {
        if (b in a) return b;
        var c = b.charAt(0).toUpperCase() + b.slice(1),
            d = b,
            e = Ub.length;
        while (e--)
            if (b = Ub[e] + c, b in a) return b;
        return d
    }

    function Wb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = n._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && V(d) && (f[g] = n._data(d, "olddisplay", Gb(d.nodeName)))) : f[g] || (e = V(d), (c && "none" !== c || !e) && n._data(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    function Xb(a, b, c) {
        var d = Qb.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function Yb(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + U[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + U[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + U[f] + "Width", !0, e))) : (g += n.css(a, "padding" + U[f], !0, e), "padding" !== c && (g += n.css(a, "border" + U[f] + "Width", !0, e)));
        return g
    }

    function Zb(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = Jb(a),
            g = l.boxSizing() && "border-box" === n.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Kb(a, b, f), (0 > e || null == e) && (e = a.style[b]), Ib.test(e)) return e;
            d = g && (l.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + Yb(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    n.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Kb(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": l.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b),
                    i = a.style;
                if (b = n.cssProps[h] || (n.cssProps[h] = Vb(i, h)), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (f = typeof c, "string" === f && (e = Rb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
                    i[b] = "", i[b] = c
                } catch (j) {}
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = Vb(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Kb(a, b, d)), "normal" === f && b in Tb && (f = Tb[b]), "" === c || c ? (e = parseFloat(f), c === !0 || n.isNumeric(e) ? e || 0 : f) : f
        }
    }), n.each(["height", "width"], function(a, b) {
        n.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? 0 === a.offsetWidth && Pb.test(n.css(a, "display")) ? n.swap(a, Sb, function() {
                    return Zb(a, b, d)
                }) : Zb(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && Jb(a);
                return Xb(a, c, d ? Yb(a, b, d, l.boxSizing() && "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), l.opacity || (n.cssHooks.opacity = {
        get: function(a, b) {
            return Ob.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === n.trim(f.replace(Nb, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Nb.test(f) ? f.replace(Nb, e) : f + " " + e)
        }
    }), n.cssHooks.marginRight = Mb(l.reliableMarginRight, function(a, b) {
        return b ? n.swap(a, {
            display: "inline-block"
        }, Kb, [a, "marginRight"]) : void 0
    }), n.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        n.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + U[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Hb.test(a) || (n.cssHooks[a + b].set = Xb)
    }), n.fn.extend({
        css: function(a, b) {
            return W(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (n.isArray(b)) {
                    for (d = Jb(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return Wb(this, !0)
        },
        hide: function() {
            return Wb(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                V(this) ? n(this).show() : n(this).hide()
            })
        }
    });

    function $b(a, b, c, d, e) {
        return new $b.prototype.init(a, b, c, d, e)
    }
    n.Tween = $b, $b.prototype = {
        constructor: $b,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = $b.propHooks[this.prop];
            return a && a.get ? a.get(this) : $b.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = $b.propHooks[this.prop];
            return this.pos = b = this.options.duration ? n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : $b.propHooks._default.set(this), this
        }
    }, $b.prototype.init.prototype = $b.prototype, $b.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function(a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, $b.propHooks.scrollTop = $b.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, n.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, n.fx = $b.prototype.init, n.fx.step = {};
    var _b, ac, bc = /^(?:toggle|show|hide)$/,
        cc = new RegExp("^(?:([+-])=|)(" + T + ")([a-z%]*)$", "i"),
        dc = /queueHooks$/,
        ec = [jc],
        fc = {
            "*": [function(a, b) {
                var c = this.createTween(a, b),
                    d = c.cur(),
                    e = cc.exec(b),
                    f = e && e[3] || (n.cssNumber[a] ? "" : "px"),
                    g = (n.cssNumber[a] || "px" !== f && +d) && cc.exec(n.css(c.elem, a)),
                    h = 1,
                    i = 20;
                if (g && g[3] !== f) {
                    f = f || g[3], e = e || [], g = +d || 1;
                    do h = h || ".5", g /= h, n.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
                }
                return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
            }]
        };

    function gc() {
        return setTimeout(function() {
            _b = void 0
        }), _b = n.now()
    }

    function hc(a, b) {
        var c, d = {
                height: a
            },
            e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = U[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }

    function ic(a, b, c) {
        for (var d, e = (fc[b] || []).concat(fc["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function jc(a, b, c) {
        var d, e, f, g, h, i, j, k, m = this,
            o = {},
            p = a.style,
            q = a.nodeType && V(a),
            r = n._data(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, m.always(function() {
            m.always(function() {
                h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = n.css(a, "display"), k = Gb(a.nodeName), "none" === j && (j = k), "inline" === j && "none" === n.css(a, "float") && (l.inlineBlockNeedsLayout && "inline" !== k ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", l.shrinkWrapBlocks() || m.always(function() {
            p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], bc.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
                    if ("show" !== e || !r || void 0 === r[d]) continue;
                    q = !0
                }
                o[d] = r && r[d] || n.style(a, d)
            }
        if (!n.isEmptyObject(o)) {
            r ? "hidden" in r && (q = r.hidden) : r = n._data(a, "fxshow", {}), f && (r.hidden = !q), q ? n(a).show() : m.done(function() {
                n(a).hide()
            }), m.done(function() {
                var b;
                n._removeData(a, "fxshow");
                for (b in o) n.style(a, b, o[b])
            });
            for (d in o) g = ic(q ? r[d] : 0, d, m), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function kc(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function lc(a, b, c) {
        var d, e, f = 0,
            g = ec.length,
            h = n.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) return !1;
                for (var b = _b || gc(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: n.extend({}, b),
                opts: n.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: _b || gc(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (kc(k, j.opts.specialEasing); g > f; f++)
            if (d = ec[f].call(j, a, k, j.opts)) return d;
        return n.map(k, ic, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    n.Animation = n.extend(lc, {
            tweener: function(a, b) {
                n.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
                for (var c, d = 0, e = a.length; e > d; d++) c = a[d], fc[c] = fc[c] || [], fc[c].unshift(b)
            },
            prefilter: function(a, b) {
                b ? ec.unshift(a) : ec.push(a)
            }
        }), n.speed = function(a, b, c) {
            var d = a && "object" == typeof a ? n.extend({}, a) : {
                complete: c || !c && b || n.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !n.isFunction(b) && b
            };
            return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
            }, d
        }, n.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(V).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = n.isEmptyObject(a),
                    f = n.speed(b, c, d),
                    g = function() {
                        var b = lc(this, n.extend({}, a), f);
                        (e || n._data(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = n.timers,
                        g = n._data(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && dc.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    (b || !c) && n.dequeue(this, a)
                })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"), this.each(function() {
                    var b, c = n._data(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = n.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), n.each(["toggle", "show", "hide"], function(a, b) {
            var c = n.fn[b];
            n.fn[b] = function(a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(hc(b, !0), a, d, e)
            }
        }), n.each({
            slideDown: hc("show"),
            slideUp: hc("hide"),
            slideToggle: hc("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            n.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), n.timers = [], n.fx.tick = function() {
            var a, b = n.timers,
                c = 0;
            for (_b = n.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
            b.length || n.fx.stop(), _b = void 0
        }, n.fx.timer = function(a) {
            n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
        }, n.fx.interval = 13, n.fx.start = function() {
            ac || (ac = setInterval(n.fx.tick, n.fx.interval))
        }, n.fx.stop = function() {
            clearInterval(ac), ac = null
        }, n.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, n.fn.delay = function(a, b) {
            return a = n.fx ? n.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d)
                }
            })
        },
        function() {
            var a, b, c, d, e = z.createElement("div");
            e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = e.getElementsByTagName("a")[0], c = z.createElement("select"), d = c.appendChild(z.createElement("option")), b = e.getElementsByTagName("input")[0], a.style.cssText = "top:1px", l.getSetAttribute = "t" !== e.className, l.style = /top/.test(a.getAttribute("style")), l.hrefNormalized = "/a" === a.getAttribute("href"), l.checkOn = !!b.value, l.optSelected = d.selected, l.enctype = !!z.createElement("form").enctype, c.disabled = !0, l.optDisabled = !d.disabled, b = z.createElement("input"), b.setAttribute("value", ""), l.input = "" === b.getAttribute("value"), b.value = "t", b.setAttribute("type", "radio"), l.radioValue = "t" === b.value, a = b = c = d = e = null
        }();
    var mc = /\r/g;
    n.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = n.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
                        return null == a ? "" : a + ""
                    })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(mc, "") : null == c ? "" : c)
            }
        }
    }), n.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.text(a)
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], !(!c.selected && i !== e || (l.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) {
                            if (b = n(c).val(), f) return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    var c, d, e = a.options,
                        f = n.makeArray(b),
                        g = e.length;
                    while (g--)
                        if (d = e[g], n.inArray(n.valHooks.option.get(d), f) >= 0) try {
                            d.selected = c = !0
                        } catch (h) {
                            d.scrollHeight
                        } else d.selected = !1;
                    return c || (a.selectedIndex = -1), e
                }
            }
        }
    }), n.each(["radio", "checkbox"], function() {
        n.valHooks[this] = {
            set: function(a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0
            }
        }, l.checkOn || (n.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var nc, oc, pc = n.expr.attrHandle,
        qc = /^(?:checked|selected)$/i,
        rc = l.getSetAttribute,
        sc = l.input;
    n.fn.extend({
        attr: function(a, b) {
            return W(this, n.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                n.removeAttr(this, a)
            })
        }
    }), n.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === L ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? oc : nc)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void n.removeAttr(a, b))
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(F);
            if (f && 1 === a.nodeType)
                while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) ? sc && rc || !qc.test(c) ? a[d] = !1 : a[n.camelCase("default-" + c)] = a[d] = !1 : n.attr(a, c, ""), a.removeAttribute(rc ? c : d)
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }
    }), oc = {
        set: function(a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : sc && rc || !qc.test(c) ? a.setAttribute(!rc && n.propFix[c] || c, c) : a[n.camelCase("default-" + c)] = a[c] = !0, c
        }
    }, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = pc[b] || n.find.attr;
        pc[b] = sc && rc || !qc.test(b) ? function(a, b, d) {
            var e, f;
            return d || (f = pc[b], pc[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, pc[b] = f), e
        } : function(a, b, c) {
            return c ? void 0 : a[n.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    }), sc && rc || (n.attrHooks.value = {
        set: function(a, b, c) {
            return n.nodeName(a, "input") ? void(a.defaultValue = b) : nc && nc.set(a, b, c)
        }
    }), rc || (nc = {
        set: function(a, b, c) {
            var d = a.getAttributeNode(c);
            return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
        }
    }, pc.id = pc.name = pc.coords = function(a, b, c) {
        var d;
        return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
    }, n.valHooks.button = {
        get: function(a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : void 0
        },
        set: nc.set
    }, n.attrHooks.contenteditable = {
        set: function(a, b, c) {
            nc.set(a, "" === b ? !1 : b, c)
        }
    }, n.each(["width", "height"], function(a, b) {
        n.attrHooks[b] = {
            set: function(a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
            }
        }
    })), l.style || (n.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || void 0
        },
        set: function(a, b) {
            return a.style.cssText = b + ""
        }
    });
    var tc = /^(?:input|select|textarea|button|object)$/i,
        uc = /^(?:a|area)$/i;
    n.fn.extend({
        prop: function(a, b) {
            return W(this, n.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return a = n.propFix[a] || a, this.each(function() {
                try {
                    this[a] = void 0, delete this[a]
                } catch (b) {}
            })
        }
    }), n.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !n.isXMLDoc(a), f && (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = n.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : tc.test(a.nodeName) || uc.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        }
    }), l.hrefNormalized || n.each(["href", "src"], function(a, b) {
        n.propHooks[b] = {
            get: function(a) {
                return a.getAttribute(b, 4)
            }
        }
    }), l.optSelected || (n.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }
    }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        n.propFix[this.toLowerCase()] = this
    }), l.enctype || (n.propFix.enctype = "encoding");
    var vc = /[\t\r\n\f]/g;
    n.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = 0,
                i = this.length,
                j = "string" == typeof a && a;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).addClass(a.call(this, b, this.className))
            });
            if (j)
                for (b = (a || "").match(F) || []; i > h; h++)
                    if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(vc, " ") : " ")) {
                        f = 0;
                        while (e = b[f++]) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        g = n.trim(d), c.className !== g && (c.className = g)
                    }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0,
                i = this.length,
                j = 0 === arguments.length || "string" == typeof a && a;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).removeClass(a.call(this, b, this.className))
            });
            if (j)
                for (b = (a || "").match(F) || []; i > h; h++)
                    if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(vc, " ") : "")) {
                        f = 0;
                        while (e = b[f++])
                            while (d.indexOf(" " + e + " ") >= 0) d = d.replace(" " + e + " ", " ");
                        g = a ? n.trim(d) : "", c.className !== g && (c.className = g)
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function(c) {
                n(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function() {
                if ("string" === c) {
                    var b, d = 0,
                        e = n(this),
                        f = a.match(F) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else(c === L || "boolean" === c) && (this.className && n._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : n._data(this, "__className__") || "")
            })
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(vc, " ").indexOf(b) >= 0) return !0;
            return !1
        }
    }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        n.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), n.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var wc = n.now(),
        xc = /\?/,
        yc = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    n.parseJSON = function(b) {
        if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
        var c, d = null,
            e = n.trim(b + "");
        return e && !n.trim(e.replace(yc, function(a, b, e, f) {
            return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
        })) ? Function("return " + e)() : n.error("Invalid JSON: " + b)
    }, n.parseXML = function(b) {
        var c, d;
        if (!b || "string" != typeof b) return null;
        try {
            a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
        } catch (e) {
            c = void 0
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c
    };
    var zc, Ac, Bc = /#.*$/,
        Cc = /([?&])_=[^&]*/,
        Dc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Ec = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Fc = /^(?:GET|HEAD)$/,
        Gc = /^\/\//,
        Hc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Ic = {},
        Jc = {},
        Kc = "*/".concat("*");
    try {
        Ac = location.href
    } catch (Lc) {
        Ac = z.createElement("a"), Ac.href = "", Ac = Ac.href
    }
    zc = Hc.exec(Ac.toLowerCase()) || [];

    function Mc(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(F) || [];
            if (n.isFunction(c))
                while (d = f[e++]) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function Nc(a, b, c, d) {
        var e = {},
            f = a === Jc;

        function g(h) {
            var i;
            return e[h] = !0, n.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function Oc(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
        return c && n.extend(!0, a, c), a
    }

    function Pc(a, b, c) {
        var d, e, f, g, h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e)
            for (g in h)
                if (h[g] && h[g].test(e)) {
                    i.unshift(g);
                    break
                }
        if (i[0] in c) f = i[0];
        else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break
                }
                d || (d = g)
            }
            f = f || d
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function Qc(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                        break
                    }
            if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try {
                    b = g(b)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: g ? l : "No conversion from " + i + " to " + f
                    }
                }
        }
        return {
            state: "success",
            data: b
        }
    }
    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ac,
            type: "GET",
            isLocal: Ec.test(zc[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Kc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": n.parseJSON,
                "text xml": n.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? Oc(Oc(a, n.ajaxSettings), b) : Oc(n.ajaxSettings, a)
        },
        ajaxPrefilter: Mc(Ic),
        ajaxTransport: Mc(Jc),
        ajax: function(a, b) {
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var c, d, e, f, g, h, i, j, k = n.ajaxSetup({}, b),
                l = k.context || k,
                m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event,
                o = n.Deferred(),
                p = n.Callbacks("once memory"),
                q = k.statusCode || {},
                r = {},
                s = {},
                t = 0,
                u = "canceled",
                v = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === t) {
                            if (!j) {
                                j = {};
                                while (b = Dc.exec(f)) j[b[1].toLowerCase()] = b[2]
                            }
                            b = j[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === t ? f : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return t || (a = s[c] = s[c] || a, r[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return t || (k.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > t)
                                for (b in a) q[b] = [q[b], a[b]];
                            else v.always(a[v.status]);
                        return this
                    },
                    abort: function(a) {
                        var b = a || u;
                        return i && i.abort(b), x(0, b), this
                    }
                };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || Ac) + "").replace(Bc, "").replace(Gc, zc[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(F) || [""], null == k.crossDomain && (c = Hc.exec(k.url.toLowerCase()), k.crossDomain = !(!c || c[1] === zc[1] && c[2] === zc[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (zc[3] || ("http:" === zc[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)), Nc(Ic, k, b, v), 2 === t) return v;
            h = k.global, h && 0 === n.active++ && n.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !Fc.test(k.type), e = k.url, k.hasContent || (k.data && (e = k.url += (xc.test(e) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = Cc.test(e) ? e.replace(Cc, "$1_=" + wc++) : e + (xc.test(e) ? "&" : "?") + "_=" + wc++)), k.ifModified && (n.lastModified[e] && v.setRequestHeader("If-Modified-Since", n.lastModified[e]), n.etag[e] && v.setRequestHeader("If-None-Match", n.etag[e])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Kc + "; q=0.01" : "") : k.accepts["*"]);
            for (d in k.headers) v.setRequestHeader(d, k.headers[d]);
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();
            u = "abort";
            for (d in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) v[d](k[d]);
            if (i = Nc(Jc, k, b, v)) {
                v.readyState = 1, h && m.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function() {
                    v.abort("timeout")
                }, k.timeout));
                try {
                    t = 1, i.send(r, x)
                } catch (w) {
                    if (!(2 > t)) throw w;
                    x(-1, w)
                }
            } else x(-1, "No Transport");

            function x(a, b, c, d) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2, g && clearTimeout(g), i = void 0, f = d || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, c && (u = Pc(k, v, c)), u = Qc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (n.lastModified[e] = w), w = v.getResponseHeader("etag"), w && (n.etag[e] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, h && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), h && (m.trigger("ajaxComplete", [v, k]), --n.active || n.event.trigger("ajaxStop")))
            }
            return v
        },
        getJSON: function(a, b, c) {
            return n.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return n.get(a, void 0, b, "script")
        }
    }), n.each(["get", "post"], function(a, b) {
        n[b] = function(a, c, d, e) {
            return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }), n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        n.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), n._evalUrl = function(a) {
        return n.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, n.fn.extend({
        wrapAll: function(a) {
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = n(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                    var a = this;
                    while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return this.each(n.isFunction(a) ? function(b) {
                n(this).wrapInner(a.call(this, b))
            } : function() {
                var b = n(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = n.isFunction(a);
            return this.each(function(c) {
                n(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
            }).end()
        }
    }), n.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !l.reliableHiddenOffsets() && "none" === (a.style && a.style.display || n.css(a, "display"))
    }, n.expr.filters.visible = function(a) {
        return !n.expr.filters.hidden(a)
    };
    var Rc = /%20/g,
        Sc = /\[\]$/,
        Tc = /\r?\n/g,
        Uc = /^(?:submit|button|image|reset|file)$/i,
        Vc = /^(?:input|select|textarea|keygen)/i;

    function Wc(a, b, c, d) {
        var e;
        if (n.isArray(b)) n.each(b, function(b, e) {
            c || Sc.test(a) ? d(a, e) : Wc(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== n.type(b)) d(a, b);
        else
            for (e in b) Wc(a + "[" + e + "]", b[e], c, d)
    }
    n.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function() {
            e(this.name, this.value)
        });
        else
            for (c in a) Wc(c, a[c], b, e);
        return d.join("&").replace(Rc, "+")
    }, n.fn.extend({
        serialize: function() {
            return n.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && Vc.test(this.nodeName) && !Uc.test(a) && (this.checked || !X.test(a))
            }).map(function(a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Tc, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Tc, "\r\n")
                }
            }).get()
        }
    }), n.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && $c() || _c()
    } : $c;
    var Xc = 0,
        Yc = {},
        Zc = n.ajaxSettings.xhr();
    a.ActiveXObject && n(a).on("unload", function() {
        for (var a in Yc) Yc[a](void 0, !0)
    }), l.cors = !!Zc && "withCredentials" in Zc, Zc = l.ajax = !!Zc, Zc && n.ajaxTransport(function(a) {
        if (!a.crossDomain || l.cors) {
            var b;
            return {
                send: function(c, d) {
                    var e, f = a.xhr(),
                        g = ++Xc;
                    if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                        for (e in a.xhrFields) f[e] = a.xhrFields[e];
                    a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                    for (e in c) void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
                    f.send(a.hasContent && a.data || null), b = function(c, e) {
                        var h, i, j;
                        if (b && (e || 4 === f.readyState))
                            if (delete Yc[g], b = void 0, f.onreadystatechange = n.noop, e) 4 !== f.readyState && f.abort();
                            else {
                                j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText);
                                try {
                                    i = f.statusText
                                } catch (k) {
                                    i = ""
                                }
                                h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404
                            }
                        j && d(h, i, j, f.getAllResponseHeaders())
                    }, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = Yc[g] = b : b()
                },
                abort: function() {
                    b && b(void 0, !0)
                }
            }
        }
    });

    function $c() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }

    function _c() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }
    n.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return n.globalEval(a), a
            }
        }
    }), n.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), n.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c = z.head || n("head")[0] || z.documentElement;
            return {
                send: function(d, e) {
                    b = z.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function(a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"))
                    }, c.insertBefore(b, c.firstChild)
                },
                abort: function() {
                    b && b.onload(void 0, !0)
                }
            }
        }
    });
    var ad = [],
        bd = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = ad.pop() || n.expando + "_" + wc++;
            return this[a] = !0, a
        }
    }), n.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (bd.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && bd.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(bd, "$1" + e) : b.jsonp !== !1 && (b.url += (xc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || n.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, ad.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), n.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || z;
        var d = v.exec(a),
            e = !c && [];
        return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e), e && e.length && n(e).remove(), n.merge([], d.childNodes))
    };
    var cd = n.fn.load;
    n.fn.load = function(a, b, c) {
        if ("string" != typeof a && cd) return cd.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h >= 0 && (d = a.slice(h, a.length), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && n.ajax({
            url: a,
            type: f,
            dataType: "html",
            data: b
        }).done(function(a) {
            e = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
        }).complete(c && function(a, b) {
            g.each(c, e || [a.responseText, b, a])
        }), this
    }, n.expr.filters.animated = function(a) {
        return n.grep(n.timers, function(b) {
            return a === b.elem
        }).length
    };
    var dd = a.document.documentElement;

    function ed(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    n.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"),
                l = n(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && n.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, n.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                n.offset.setOffset(this, a, b)
            });
            var b, c, d = {
                    top: 0,
                    left: 0
                },
                e = this[0],
                f = e && e.ownerDocument;
            if (f) return b = f.documentElement, n.contains(b, e) ? (typeof e.getBoundingClientRect !== L && (d = e.getBoundingClientRect()), c = ed(f), {
                top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
            }) : d
        },
        position: function() {
            if (this[0]) {
                var a, b, c = {
                        top: 0,
                        left: 0
                    },
                    d = this[0];
                return "fixed" === n.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (c = a.offset()), c.top += n.css(a[0], "borderTopWidth", !0), c.left += n.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - c.top - n.css(d, "marginTop", !0),
                    left: b.left - c.left - n.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent || dd;
                while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) a = a.offsetParent;
                return a || dd
            })
        }
    }), n.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = /Y/.test(b);
        n.fn[a] = function(d) {
            return W(this, function(a, d, e) {
                var f = ed(a);
                return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? n(f).scrollLeft() : e, c ? e : n(f).scrollTop()) : a[d] = e)
            }, a, d, arguments.length, null)
        }
    }), n.each(["top", "left"], function(a, b) {
        n.cssHooks[b] = Mb(l.pixelPosition, function(a, c) {
            return c ? (c = Kb(a, b), Ib.test(c) ? n(a).position()[b] + "px" : c) : void 0
        })
    }), n.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        n.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            n.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return W(this, function(b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), n.fn.size = function() {
        return this.length
    }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return n
    });
    var fd = a.jQuery,
        gd = a.$;
    return n.noConflict = function(b) {
        return a.$ === n && (a.$ = gd), b && a.jQuery === n && (a.jQuery = fd), n
    }, typeof b === L && (a.jQuery = a.$ = n), n
});;
(function(e, t) {
    function i(t, i) {
        var a, n, r, o = t.nodeName.toLowerCase();
        return "area" === o ? (a = t.parentNode, n = a.name, t.href && n && "map" === a.nodeName.toLowerCase() ? (r = e("img[usemap=#" + n + "]")[0], !!r && s(r)) : !1) : (/input|select|textarea|button|object/.test(o) ? !t.disabled : "a" === o ? t.href || i : i) && s(t)
    }

    function s(t) {
        return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() {
            return "hidden" === e.css(this, "visibility")
        }).length
    }
    var a = 0,
        n = /^ui-id-\d+$/;
    e.ui = e.ui || {}, e.extend(e.ui, {
        version: "1.10.4",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), e.fn.extend({
        focus: function(t) {
            return function(i, s) {
                return "number" == typeof i ? this.each(function() {
                    var t = this;
                    setTimeout(function() {
                        e(t).focus(), s && s.call(t)
                    }, i)
                }) : t.apply(this, arguments)
            }
        }(e.fn.focus),
        scrollParent: function() {
            var t;
            return t = e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
            }).eq(0) : this.parents().filter(function() {
                return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
            }).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t
        },
        zIndex: function(i) {
            if (i !== t) return this.css("zIndex", i);
            if (this.length)
                for (var s, a, n = e(this[0]); n.length && n[0] !== document;) {
                    if (s = n.css("position"), ("absolute" === s || "relative" === s || "fixed" === s) && (a = parseInt(n.css("zIndex"), 10), !isNaN(a) && 0 !== a)) return a;
                    n = n.parent()
                }
            return 0
        },
        uniqueId: function() {
            return this.each(function() {
                this.id || (this.id = "ui-id-" + ++a)
            })
        },
        removeUniqueId: function() {
            return this.each(function() {
                n.test(this.id) && e(this).removeAttr("id")
            })
        }
    }), e.extend(e.expr[":"], {
        data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
            return function(i) {
                return !!e.data(i, t)
            }
        }) : function(t, i, s) {
            return !!e.data(t, s[3])
        },
        focusable: function(t) {
            return i(t, !isNaN(e.attr(t, "tabindex")))
        },
        tabbable: function(t) {
            var s = e.attr(t, "tabindex"),
                a = isNaN(s);
            return (a || s >= 0) && i(t, !a)
        }
    }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function(i, s) {
        function a(t, i, s, a) {
            return e.each(n, function() {
                i -= parseFloat(e.css(t, "padding" + this)) || 0, s && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), a && (i -= parseFloat(e.css(t, "margin" + this)) || 0)
            }), i
        }
        var n = "Width" === s ? ["Left", "Right"] : ["Top", "Bottom"],
            r = s.toLowerCase(),
            o = {
                innerWidth: e.fn.innerWidth,
                innerHeight: e.fn.innerHeight,
                outerWidth: e.fn.outerWidth,
                outerHeight: e.fn.outerHeight
            };
        e.fn["inner" + s] = function(i) {
            return i === t ? o["inner" + s].call(this) : this.each(function() {
                e(this).css(r, a(this, i) + "px")
            })
        }, e.fn["outer" + s] = function(t, i) {
            return "number" != typeof t ? o["outer" + s].call(this, t) : this.each(function() {
                e(this).css(r, a(this, t, !0, i) + "px")
            })
        }
    }), e.fn.addBack || (e.fn.addBack = function(e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function(t) {
        return function(i) {
            return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this)
        }
    }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.support.selectstart = "onselectstart" in document.createElement("div"), e.fn.extend({
        disableSelection: function() {
            return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(e) {
                e.preventDefault()
            })
        },
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        }
    }), e.extend(e.ui, {
        plugin: {
            add: function(t, i, s) {
                var a, n = e.ui[t].prototype;
                for (a in s) n.plugins[a] = n.plugins[a] || [], n.plugins[a].push([i, s[a]])
            },
            call: function(e, t, i) {
                var s, a = e.plugins[t];
                if (a && e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType)
                    for (s = 0; a.length > s; s++) e.options[a[s][0]] && a[s][1].apply(e.element, i)
            }
        },
        hasScroll: function(t, i) {
            if ("hidden" === e(t).css("overflow")) return !1;
            var s = i && "left" === i ? "scrollLeft" : "scrollTop",
                a = !1;
            return t[s] > 0 ? !0 : (t[s] = 1, a = t[s] > 0, t[s] = 0, a)
        }
    })
})(jQuery);
(function(e, t) {
    var i = 0,
        s = Array.prototype.slice,
        a = e.cleanData;
    e.cleanData = function(t) {
        for (var i, s = 0; null != (i = t[s]); s++) try {
            e(i).triggerHandler("remove")
        } catch (n) {}
        a(t)
    }, e.widget = function(i, s, a) {
        var n, r, o, h, l = {},
            u = i.split(".")[0];
        i = i.split(".")[1], n = u + "-" + i, a || (a = s, s = e.Widget), e.expr[":"][n.toLowerCase()] = function(t) {
            return !!e.data(t, n)
        }, e[u] = e[u] || {}, r = e[u][i], o = e[u][i] = function(e, i) {
            return this._createWidget ? (arguments.length && this._createWidget(e, i), t) : new o(e, i)
        }, e.extend(o, r, {
            version: a.version,
            _proto: e.extend({}, a),
            _childConstructors: []
        }), h = new s, h.options = e.widget.extend({}, h.options), e.each(a, function(i, a) {
            return e.isFunction(a) ? (l[i] = function() {
                var e = function() {
                        return s.prototype[i].apply(this, arguments)
                    },
                    t = function(e) {
                        return s.prototype[i].apply(this, e)
                    };
                return function() {
                    var i, s = this._super,
                        n = this._superApply;
                    return this._super = e, this._superApply = t, i = a.apply(this, arguments), this._super = s, this._superApply = n, i
                }
            }(), t) : (l[i] = a, t)
        }), o.prototype = e.widget.extend(h, {
            widgetEventPrefix: r ? h.widgetEventPrefix || i : i
        }, l, {
            constructor: o,
            namespace: u,
            widgetName: i,
            widgetFullName: n
        }), r ? (e.each(r._childConstructors, function(t, i) {
            var s = i.prototype;
            e.widget(s.namespace + "." + s.widgetName, o, i._proto)
        }), delete r._childConstructors) : s._childConstructors.push(o), e.widget.bridge(i, o)
    }, e.widget.extend = function(i) {
        for (var a, n, r = s.call(arguments, 1), o = 0, h = r.length; h > o; o++)
            for (a in r[o]) n = r[o][a], r[o].hasOwnProperty(a) && n !== t && (i[a] = e.isPlainObject(n) ? e.isPlainObject(i[a]) ? e.widget.extend({}, i[a], n) : e.widget.extend({}, n) : n);
        return i
    }, e.widget.bridge = function(i, a) {
        var n = a.prototype.widgetFullName || i;
        e.fn[i] = function(r) {
            var o = "string" == typeof r,
                h = s.call(arguments, 1),
                l = this;
            return r = !o && h.length ? e.widget.extend.apply(null, [r].concat(h)) : r, o ? this.each(function() {
                var s, a = e.data(this, n);
                return a ? e.isFunction(a[r]) && "_" !== r.charAt(0) ? (s = a[r].apply(a, h), s !== a && s !== t ? (l = s && s.jquery ? l.pushStack(s.get()) : s, !1) : t) : e.error("no such method '" + r + "' for " + i + " widget instance") : e.error("cannot call methods on " + i + " prior to initialization; " + "attempted to call method '" + r + "'")
            }) : this.each(function() {
                var t = e.data(this, n);
                t ? t.option(r || {})._init() : e.data(this, n, new a(r, this))
            }), l
        }
    }, e.Widget = function() {}, e.Widget._childConstructors = [], e.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(t, s) {
            s = e(s || this.defaultElement || this)[0], this.element = e(s), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this.bindings = e(), this.hoverable = e(), this.focusable = e(), s !== this && (e.data(s, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(e) {
                    e.target === s && this.destroy()
                }
            }), this.document = e(s.style ? s.ownerDocument : s.document || s), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: e.noop,
        _getCreateEventData: e.noop,
        _create: e.noop,
        _init: e.noop,
        destroy: function() {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: e.noop,
        widget: function() {
            return this.element
        },
        option: function(i, s) {
            var a, n, r, o = i;
            if (0 === arguments.length) return e.widget.extend({}, this.options);
            if ("string" == typeof i)
                if (o = {}, a = i.split("."), i = a.shift(), a.length) {
                    for (n = o[i] = e.widget.extend({}, this.options[i]), r = 0; a.length - 1 > r; r++) n[a[r]] = n[a[r]] || {}, n = n[a[r]];
                    if (i = a.pop(), 1 === arguments.length) return n[i] === t ? null : n[i];
                    n[i] = s
                } else {
                    if (1 === arguments.length) return this.options[i] === t ? null : this.options[i];
                    o[i] = s
                }
            return this._setOptions(o), this
        },
        _setOptions: function(e) {
            var t;
            for (t in e) this._setOption(t, e[t]);
            return this
        },
        _setOption: function(e, t) {
            return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!t).attr("aria-disabled", t), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
        },
        enable: function() {
            return this._setOption("disabled", !1)
        },
        disable: function() {
            return this._setOption("disabled", !0)
        },
        _on: function(i, s, a) {
            var n, r = this;
            "boolean" != typeof i && (a = s, s = i, i = !1), a ? (s = n = e(s), this.bindings = this.bindings.add(s)) : (a = s, s = this.element, n = this.widget()), e.each(a, function(a, o) {
                function h() {
                    return i || r.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof o ? r[o] : o).apply(r, arguments) : t
                }
                "string" != typeof o && (h.guid = o.guid = o.guid || h.guid || e.guid++);
                var l = a.match(/^(\w+)\s*(.*)$/),
                    u = l[1] + r.eventNamespace,
                    d = l[2];
                d ? n.delegate(d, u, h) : s.bind(u, h)
            })
        },
        _off: function(e, t) {
            t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(t).undelegate(t)
        },
        _delay: function(e, t) {
            function i() {
                return ("string" == typeof e ? s[e] : e).apply(s, arguments)
            }
            var s = this;
            return setTimeout(i, t || 0)
        },
        _hoverable: function(t) {
            this.hoverable = this.hoverable.add(t), this._on(t, {
                mouseenter: function(t) {
                    e(t.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(t) {
                    e(t.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(t) {
            this.focusable = this.focusable.add(t), this._on(t, {
                focusin: function(t) {
                    e(t.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(t) {
                    e(t.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(t, i, s) {
            var a, n, r = this.options[t];
            if (s = s || {}, i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], n = i.originalEvent)
                for (a in n) a in i || (i[a] = n[a]);
            return this.element.trigger(i, s), !(e.isFunction(r) && r.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
        }
    }, e.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(t, i) {
        e.Widget.prototype["_" + t] = function(s, a, n) {
            "string" == typeof a && (a = {
                effect: a
            });
            var r, o = a ? a === !0 || "number" == typeof a ? i : a.effect || i : t;
            a = a || {}, "number" == typeof a && (a = {
                duration: a
            }), r = !e.isEmptyObject(a), a.complete = n, a.delay && s.delay(a.delay), r && e.effects && e.effects.effect[o] ? s[t](a) : o !== t && s[o] ? s[o](a.duration, a.easing, n) : s.queue(function(i) {
                e(this)[t](), n && n.call(s[0]), i()
            })
        }
    })
})(jQuery);
(function(e) {
    var t = !1;
    e(document).mouseup(function() {
        t = !1
    }), e.widget("ui.mouse", {
        version: "1.10.4",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var t = this;
            this.element.bind("mousedown." + this.widgetName, function(e) {
                return t._mouseDown(e)
            }).bind("click." + this.widgetName, function(i) {
                return !0 === e.data(i.target, t.widgetName + ".preventClickEvent") ? (e.removeData(i.target, t.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : undefined
            }), this.started = !1
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(i) {
            if (!t) {
                this._mouseStarted && this._mouseUp(i), this._mouseDownEvent = i;
                var s = this,
                    a = 1 === i.which,
                    n = "string" == typeof this.options.cancel && i.target.nodeName ? e(i.target).closest(this.options.cancel).length : !1;
                return a && !n && this._mouseCapture(i) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    s.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(i) && this._mouseDelayMet(i) && (this._mouseStarted = this._mouseStart(i) !== !1, !this._mouseStarted) ? (i.preventDefault(), !0) : (!0 === e.data(i.target, this.widgetName + ".preventClickEvent") && e.removeData(i.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(e) {
                    return s._mouseMove(e)
                }, this._mouseUpDelegate = function(e) {
                    return s._mouseUp(e)
                }, e(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), i.preventDefault(), t = !0, !0)) : !0
            }
        },
        _mouseMove: function(t) {
            return e.ui.ie && (!document.documentMode || 9 > document.documentMode) && !t.button ? this._mouseUp(t) : this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
        },
        _mouseUp: function(t) {
            return e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), !1
        },
        _mouseDistanceMet: function(e) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0
        }
    })
})(jQuery);
(function(e, t) {
    function i(e, t, i) {
        return [parseFloat(e[0]) * (p.test(e[0]) ? t / 100 : 1), parseFloat(e[1]) * (p.test(e[1]) ? i / 100 : 1)]
    }

    function s(t, i) {
        return parseInt(e.css(t, i), 10) || 0
    }

    function a(t) {
        var i = t[0];
        return 9 === i.nodeType ? {
            width: t.width(),
            height: t.height(),
            offset: {
                top: 0,
                left: 0
            }
        } : e.isWindow(i) ? {
            width: t.width(),
            height: t.height(),
            offset: {
                top: t.scrollTop(),
                left: t.scrollLeft()
            }
        } : i.preventDefault ? {
            width: 0,
            height: 0,
            offset: {
                top: i.pageY,
                left: i.pageX
            }
        } : {
            width: t.outerWidth(),
            height: t.outerHeight(),
            offset: t.offset()
        }
    }
    e.ui = e.ui || {};
    var n, r = Math.max,
        o = Math.abs,
        h = Math.round,
        l = /left|center|right/,
        u = /top|center|bottom/,
        d = /[\+\-]\d+(\.[\d]+)?%?/,
        c = /^\w+/,
        p = /%$/,
        f = e.fn.position;
    e.position = {
            scrollbarWidth: function() {
                if (n !== t) return n;
                var i, s, a = e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                    r = a.children()[0];
                return e("body").append(a), i = r.offsetWidth, a.css("overflow", "scroll"), s = r.offsetWidth, i === s && (s = a[0].clientWidth), a.remove(), n = i - s
            },
            getScrollInfo: function(t) {
                var i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"),
                    s = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"),
                    a = "scroll" === i || "auto" === i && t.width < t.element[0].scrollWidth,
                    n = "scroll" === s || "auto" === s && t.height < t.element[0].scrollHeight;
                return {
                    width: n ? e.position.scrollbarWidth() : 0,
                    height: a ? e.position.scrollbarWidth() : 0
                }
            },
            getWithinInfo: function(t) {
                var i = e(t || window),
                    s = e.isWindow(i[0]),
                    a = !!i[0] && 9 === i[0].nodeType;
                return {
                    element: i,
                    isWindow: s,
                    isDocument: a,
                    offset: i.offset() || {
                        left: 0,
                        top: 0
                    },
                    scrollLeft: i.scrollLeft(),
                    scrollTop: i.scrollTop(),
                    width: s ? i.width() : i.outerWidth(),
                    height: s ? i.height() : i.outerHeight()
                }
            }
        }, e.fn.position = function(t) {
            if (!t || !t.of) return f.apply(this, arguments);
            t = e.extend({}, t);
            var n, p, m, g, v, y, b = e(t.of),
                _ = e.position.getWithinInfo(t.within),
                x = e.position.getScrollInfo(_),
                k = (t.collision || "flip").split(" "),
                w = {};
            return y = a(b), b[0].preventDefault && (t.at = "left top"), p = y.width, m = y.height, g = y.offset, v = e.extend({}, g), e.each(["my", "at"], function() {
                var e, i, s = (t[this] || "").split(" ");
                1 === s.length && (s = l.test(s[0]) ? s.concat(["center"]) : u.test(s[0]) ? ["center"].concat(s) : ["center", "center"]), s[0] = l.test(s[0]) ? s[0] : "center", s[1] = u.test(s[1]) ? s[1] : "center", e = d.exec(s[0]), i = d.exec(s[1]), w[this] = [e ? e[0] : 0, i ? i[0] : 0], t[this] = [c.exec(s[0])[0], c.exec(s[1])[0]]
            }), 1 === k.length && (k[1] = k[0]), "right" === t.at[0] ? v.left += p : "center" === t.at[0] && (v.left += p / 2), "bottom" === t.at[1] ? v.top += m : "center" === t.at[1] && (v.top += m / 2), n = i(w.at, p, m), v.left += n[0], v.top += n[1], this.each(function() {
                var a, l, u = e(this),
                    d = u.outerWidth(),
                    c = u.outerHeight(),
                    f = s(this, "marginLeft"),
                    y = s(this, "marginTop"),
                    D = d + f + s(this, "marginRight") + x.width,
                    T = c + y + s(this, "marginBottom") + x.height,
                    S = e.extend({}, v),
                    M = i(w.my, u.outerWidth(), u.outerHeight());
                "right" === t.my[0] ? S.left -= d : "center" === t.my[0] && (S.left -= d / 2), "bottom" === t.my[1] ? S.top -= c : "center" === t.my[1] && (S.top -= c / 2), S.left += M[0], S.top += M[1], e.support.offsetFractions || (S.left = h(S.left), S.top = h(S.top)), a = {
                    marginLeft: f,
                    marginTop: y
                }, e.each(["left", "top"], function(i, s) {
                    e.ui.position[k[i]] && e.ui.position[k[i]][s](S, {
                        targetWidth: p,
                        targetHeight: m,
                        elemWidth: d,
                        elemHeight: c,
                        collisionPosition: a,
                        collisionWidth: D,
                        collisionHeight: T,
                        offset: [n[0] + M[0], n[1] + M[1]],
                        my: t.my,
                        at: t.at,
                        within: _,
                        elem: u
                    })
                }), t.using && (l = function(e) {
                    var i = g.left - S.left,
                        s = i + p - d,
                        a = g.top - S.top,
                        n = a + m - c,
                        h = {
                            target: {
                                element: b,
                                left: g.left,
                                top: g.top,
                                width: p,
                                height: m
                            },
                            element: {
                                element: u,
                                left: S.left,
                                top: S.top,
                                width: d,
                                height: c
                            },
                            horizontal: 0 > s ? "left" : i > 0 ? "right" : "center",
                            vertical: 0 > n ? "top" : a > 0 ? "bottom" : "middle"
                        };
                    d > p && p > o(i + s) && (h.horizontal = "center"), c > m && m > o(a + n) && (h.vertical = "middle"), h.important = r(o(i), o(s)) > r(o(a), o(n)) ? "horizontal" : "vertical", t.using.call(this, e, h)
                }), u.offset(e.extend(S, {
                    using: l
                }))
            })
        }, e.ui.position = {
            fit: {
                left: function(e, t) {
                    var i, s = t.within,
                        a = s.isWindow ? s.scrollLeft : s.offset.left,
                        n = s.width,
                        o = e.left - t.collisionPosition.marginLeft,
                        h = a - o,
                        l = o + t.collisionWidth - n - a;
                    t.collisionWidth > n ? h > 0 && 0 >= l ? (i = e.left + h + t.collisionWidth - n - a, e.left += h - i) : e.left = l > 0 && 0 >= h ? a : h > l ? a + n - t.collisionWidth : a : h > 0 ? e.left += h : l > 0 ? e.left -= l : e.left = r(e.left - o, e.left)
                },
                top: function(e, t) {
                    var i, s = t.within,
                        a = s.isWindow ? s.scrollTop : s.offset.top,
                        n = t.within.height,
                        o = e.top - t.collisionPosition.marginTop,
                        h = a - o,
                        l = o + t.collisionHeight - n - a;
                    t.collisionHeight > n ? h > 0 && 0 >= l ? (i = e.top + h + t.collisionHeight - n - a, e.top += h - i) : e.top = l > 0 && 0 >= h ? a : h > l ? a + n - t.collisionHeight : a : h > 0 ? e.top += h : l > 0 ? e.top -= l : e.top = r(e.top - o, e.top)
                }
            },
            flip: {
                left: function(e, t) {
                    var i, s, a = t.within,
                        n = a.offset.left + a.scrollLeft,
                        r = a.width,
                        h = a.isWindow ? a.scrollLeft : a.offset.left,
                        l = e.left - t.collisionPosition.marginLeft,
                        u = l - h,
                        d = l + t.collisionWidth - r - h,
                        c = "left" === t.my[0] ? -t.elemWidth : "right" === t.my[0] ? t.elemWidth : 0,
                        p = "left" === t.at[0] ? t.targetWidth : "right" === t.at[0] ? -t.targetWidth : 0,
                        f = -2 * t.offset[0];
                    0 > u ? (i = e.left + c + p + f + t.collisionWidth - r - n, (0 > i || o(u) > i) && (e.left += c + p + f)) : d > 0 && (s = e.left - t.collisionPosition.marginLeft + c + p + f - h, (s > 0 || d > o(s)) && (e.left += c + p + f))
                },
                top: function(e, t) {
                    var i, s, a = t.within,
                        n = a.offset.top + a.scrollTop,
                        r = a.height,
                        h = a.isWindow ? a.scrollTop : a.offset.top,
                        l = e.top - t.collisionPosition.marginTop,
                        u = l - h,
                        d = l + t.collisionHeight - r - h,
                        c = "top" === t.my[1],
                        p = c ? -t.elemHeight : "bottom" === t.my[1] ? t.elemHeight : 0,
                        f = "top" === t.at[1] ? t.targetHeight : "bottom" === t.at[1] ? -t.targetHeight : 0,
                        m = -2 * t.offset[1];
                    0 > u ? (s = e.top + p + f + m + t.collisionHeight - r - n, e.top + p + f + m > u && (0 > s || o(u) > s) && (e.top += p + f + m)) : d > 0 && (i = e.top - t.collisionPosition.marginTop + p + f + m - h, e.top + p + f + m > d && (i > 0 || d > o(i)) && (e.top += p + f + m))
                }
            },
            flipfit: {
                left: function() {
                    e.ui.position.flip.left.apply(this, arguments), e.ui.position.fit.left.apply(this, arguments)
                },
                top: function() {
                    e.ui.position.flip.top.apply(this, arguments), e.ui.position.fit.top.apply(this, arguments)
                }
            }
        },
        function() {
            var t, i, s, a, n, r = document.getElementsByTagName("body")[0],
                o = document.createElement("div");
            t = document.createElement(r ? "div" : "body"), s = {
                visibility: "hidden",
                width: 0,
                height: 0,
                border: 0,
                margin: 0,
                background: "none"
            }, r && e.extend(s, {
                position: "absolute",
                left: "-1000px",
                top: "-1000px"
            });
            for (n in s) t.style[n] = s[n];
            t.appendChild(o), i = r || document.documentElement, i.insertBefore(t, i.firstChild), o.style.cssText = "position: absolute; left: 10.7432222px;", a = e(o).offset().left, e.support.offsetFractions = a > 10 && 11 > a, t.innerHTML = "", i.removeChild(t)
        }()
})(jQuery);
(function(e) {
    e.widget("ui.draggable", e.ui.mouse, {
        version: "1.10.4",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null,
            start: null,
            stop: null
        },
        _create: function() {
            "original" !== this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit()
        },
        _destroy: function() {
            this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy()
        },
        _mouseCapture: function(t) {
            var i = this.options;
            return this.helper || i.disabled || e(t.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(t), this.handle ? (e(i.iframeFix === !0 ? "iframe" : i.iframeFix).each(function() {
                e("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({
                    width: this.offsetWidth + "px",
                    height: this.offsetHeight + "px",
                    position: "absolute",
                    opacity: "0.001",
                    zIndex: 1e3
                }).css(e(this).offset()).appendTo("body")
            }), !0) : !1)
        },
        _mouseStart: function(t) {
            var i = this.options;
            return this.helper = this._createHelper(t), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), e.ui.ddmanager && (e.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offsetParent = this.helper.offsetParent(), this.offsetParentCssPosition = this.offsetParent.css("position"), this.offset = this.positionAbs = this.element.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, this.offset.scroll = !1, e.extend(this.offset, {
                click: {
                    left: t.pageX - this.offset.left,
                    top: t.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.originalPosition = this.position = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), this._trigger("start", t) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this._mouseDrag(t, !0), e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t), !0)
        },
        _mouseDrag: function(t, i) {
            if ("fixed" === this.offsetParentCssPosition && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                var s = this._uiHash();
                if (this._trigger("drag", t, s) === !1) return this._mouseUp({}), !1;
                this.position = s.position
            }
            return this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), e.ui.ddmanager && e.ui.ddmanager.drag(this, t), !1
        },
        _mouseStop: function(t) {
            var i = this,
                s = !1;
            return e.ui.ddmanager && !this.options.dropBehaviour && (s = e.ui.ddmanager.drop(this, t)), this.dropped && (s = this.dropped, this.dropped = !1), "original" !== this.options.helper || e.contains(this.element[0].ownerDocument, this.element[0]) ? ("invalid" === this.options.revert && !s || "valid" === this.options.revert && s || this.options.revert === !0 || e.isFunction(this.options.revert) && this.options.revert.call(this.element, s) ? e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                i._trigger("stop", t) !== !1 && i._clear()
            }) : this._trigger("stop", t) !== !1 && this._clear(), !1) : !1
        },
        _mouseUp: function(t) {
            return e("div.ui-draggable-iframeFix").each(function() {
                this.parentNode.removeChild(this)
            }), e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t), e.ui.mouse.prototype._mouseUp.call(this, t)
        },
        cancel: function() {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
        },
        _getHandle: function(t) {
            return this.options.handle ? !!e(t.target).closest(this.element.find(this.options.handle)).length : !0
        },
        _createHelper: function(t) {
            var i = this.options,
                s = e.isFunction(i.helper) ? e(i.helper.apply(this.element[0], [t])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
            return s.parents("body").length || s.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), s[0] === this.element[0] || /(fixed|absolute)/.test(s.css("position")) || s.css("position", "absolute"), s
        },
        _adjustOffsetFromHelper: function(t) {
            "string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            var t = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && e.ui.ie) && (t = {
                top: 0,
                left: 0
            }), {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" === this.cssPosition) {
                var e = this.element.position();
                return {
                    top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var t, i, s, a = this.options;
            return a.containment ? "window" === a.containment ? (this.containment = [e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, e(window).scrollLeft() + e(window).width() - this.helperProportions.width - this.margins.left, e(window).scrollTop() + (e(window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], undefined) : "document" === a.containment ? (this.containment = [0, 0, e(document).width() - this.helperProportions.width - this.margins.left, (e(document).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], undefined) : a.containment.constructor === Array ? (this.containment = a.containment, undefined) : ("parent" === a.containment && (a.containment = this.helper[0].parentNode), i = e(a.containment), s = i[0], s && (t = "hidden" !== i.css("overflow"), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (t ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (t ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = i), undefined) : (this.containment = null, undefined)
        },
        _convertPositionTo: function(t, i) {
            i || (i = this.position);
            var s = "absolute" === t ? 1 : -1,
                a = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent;
            return this.offset.scroll || (this.offset.scroll = {
                top: a.scrollTop(),
                left: a.scrollLeft()
            }), {
                top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top) * s,
                left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left) * s
            }
        },
        _generatePosition: function(t) {
            var i, s, a, n, r = this.options,
                o = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                h = t.pageX,
                l = t.pageY;
            return this.offset.scroll || (this.offset.scroll = {
                top: o.scrollTop(),
                left: o.scrollLeft()
            }), this.originalPosition && (this.containment && (this.relative_container ? (s = this.relative_container.offset(), i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment, t.pageX - this.offset.click.left < i[0] && (h = i[0] + this.offset.click.left), t.pageY - this.offset.click.top < i[1] && (l = i[1] + this.offset.click.top), t.pageX - this.offset.click.left > i[2] && (h = i[2] + this.offset.click.left), t.pageY - this.offset.click.top > i[3] && (l = i[3] + this.offset.click.top)), r.grid && (a = r.grid[1] ? this.originalPageY + Math.round((l - this.originalPageY) / r.grid[1]) * r.grid[1] : this.originalPageY, l = i ? a - this.offset.click.top >= i[1] || a - this.offset.click.top > i[3] ? a : a - this.offset.click.top >= i[1] ? a - r.grid[1] : a + r.grid[1] : a, n = r.grid[0] ? this.originalPageX + Math.round((h - this.originalPageX) / r.grid[0]) * r.grid[0] : this.originalPageX, h = i ? n - this.offset.click.left >= i[0] || n - this.offset.click.left > i[2] ? n : n - this.offset.click.left >= i[0] ? n - r.grid[0] : n + r.grid[0] : n)), {
                top: l - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top),
                left: h - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left)
            }
        },
        _clear: function() {
            this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1
        },
        _trigger: function(t, i, s) {
            return s = s || this._uiHash(), e.ui.plugin.call(this, t, [i, s]), "drag" === t && (this.positionAbs = this._convertPositionTo("absolute")), e.Widget.prototype._trigger.call(this, t, i, s)
        },
        plugins: {},
        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }), e.ui.plugin.add("draggable", "connectToSortable", {
        start: function(t, i) {
            var s = e(this).data("ui-draggable"),
                a = s.options,
                n = e.extend({}, i, {
                    item: s.element
                });
            s.sortables = [], e(a.connectToSortable).each(function() {
                var i = e.data(this, "ui-sortable");
                i && !i.options.disabled && (s.sortables.push({
                    instance: i,
                    shouldRevert: i.options.revert
                }), i.refreshPositions(), i._trigger("activate", t, n))
            })
        },
        stop: function(t, i) {
            var s = e(this).data("ui-draggable"),
                a = e.extend({}, i, {
                    item: s.element
                });
            e.each(s.sortables, function() {
                this.instance.isOver ? (this.instance.isOver = 0, s.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = this.shouldRevert), this.instance._mouseStop(t), this.instance.options.helper = this.instance.options._helper, "original" === s.options.helper && this.instance.currentItem.css({
                    top: "auto",
                    left: "auto"
                })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", t, a))
            })
        },
        drag: function(t, i) {
            var s = e(this).data("ui-draggable"),
                a = this;
            e.each(s.sortables, function() {
                var n = !1,
                    r = this;
                this.instance.positionAbs = s.positionAbs, this.instance.helperProportions = s.helperProportions, this.instance.offset.click = s.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (n = !0, e.each(s.sortables, function() {
                    return this.instance.positionAbs = s.positionAbs, this.instance.helperProportions = s.helperProportions, this.instance.offset.click = s.offset.click, this !== r && this.instance._intersectsWith(this.instance.containerCache) && e.contains(r.instance.element[0], this.instance.element[0]) && (n = !1), n
                })), n ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = e(a).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
                    return i.helper[0]
                }, t.target = this.instance.currentItem[0], this.instance._mouseCapture(t, !0), this.instance._mouseStart(t, !0, !0), this.instance.offset.click.top = s.offset.click.top, this.instance.offset.click.left = s.offset.click.left, this.instance.offset.parent.left -= s.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= s.offset.parent.top - this.instance.offset.parent.top, s._trigger("toSortable", t), s.dropped = this.instance.element, s.currentItem = s.element, this.instance.fromOutside = s), this.instance.currentItem && this.instance._mouseDrag(t)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", t, this.instance._uiHash(this.instance)), this.instance._mouseStop(t, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), s._trigger("fromSortable", t), s.dropped = !1)
            })
        }
    }), e.ui.plugin.add("draggable", "cursor", {
        start: function() {
            var t = e("body"),
                i = e(this).data("ui-draggable").options;
            t.css("cursor") && (i._cursor = t.css("cursor")), t.css("cursor", i.cursor)
        },
        stop: function() {
            var t = e(this).data("ui-draggable").options;
            t._cursor && e("body").css("cursor", t._cursor)
        }
    }), e.ui.plugin.add("draggable", "opacity", {
        start: function(t, i) {
            var s = e(i.helper),
                a = e(this).data("ui-draggable").options;
            s.css("opacity") && (a._opacity = s.css("opacity")), s.css("opacity", a.opacity)
        },
        stop: function(t, i) {
            var s = e(this).data("ui-draggable").options;
            s._opacity && e(i.helper).css("opacity", s._opacity)
        }
    }), e.ui.plugin.add("draggable", "scroll", {
        start: function() {
            var t = e(this).data("ui-draggable");
            t.scrollParent[0] !== document && "HTML" !== t.scrollParent[0].tagName && (t.overflowOffset = t.scrollParent.offset())
        },
        drag: function(t) {
            var i = e(this).data("ui-draggable"),
                s = i.options,
                a = !1;
            i.scrollParent[0] !== document && "HTML" !== i.scrollParent[0].tagName ? (s.axis && "x" === s.axis || (i.overflowOffset.top + i.scrollParent[0].offsetHeight - t.pageY < s.scrollSensitivity ? i.scrollParent[0].scrollTop = a = i.scrollParent[0].scrollTop + s.scrollSpeed : t.pageY - i.overflowOffset.top < s.scrollSensitivity && (i.scrollParent[0].scrollTop = a = i.scrollParent[0].scrollTop - s.scrollSpeed)), s.axis && "y" === s.axis || (i.overflowOffset.left + i.scrollParent[0].offsetWidth - t.pageX < s.scrollSensitivity ? i.scrollParent[0].scrollLeft = a = i.scrollParent[0].scrollLeft + s.scrollSpeed : t.pageX - i.overflowOffset.left < s.scrollSensitivity && (i.scrollParent[0].scrollLeft = a = i.scrollParent[0].scrollLeft - s.scrollSpeed))) : (s.axis && "x" === s.axis || (t.pageY - e(document).scrollTop() < s.scrollSensitivity ? a = e(document).scrollTop(e(document).scrollTop() - s.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < s.scrollSensitivity && (a = e(document).scrollTop(e(document).scrollTop() + s.scrollSpeed))), s.axis && "y" === s.axis || (t.pageX - e(document).scrollLeft() < s.scrollSensitivity ? a = e(document).scrollLeft(e(document).scrollLeft() - s.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < s.scrollSensitivity && (a = e(document).scrollLeft(e(document).scrollLeft() + s.scrollSpeed)))), a !== !1 && e.ui.ddmanager && !s.dropBehaviour && e.ui.ddmanager.prepareOffsets(i, t)
        }
    }), e.ui.plugin.add("draggable", "snap", {
        start: function() {
            var t = e(this).data("ui-draggable"),
                i = t.options;
            t.snapElements = [], e(i.snap.constructor !== String ? i.snap.items || ":data(ui-draggable)" : i.snap).each(function() {
                var i = e(this),
                    s = i.offset();
                this !== t.element[0] && t.snapElements.push({
                    item: this,
                    width: i.outerWidth(),
                    height: i.outerHeight(),
                    top: s.top,
                    left: s.left
                })
            })
        },
        drag: function(t, i) {
            var s, a, n, r, o, h, l, u, d, c, p = e(this).data("ui-draggable"),
                m = p.options,
                f = m.snapTolerance,
                g = i.offset.left,
                v = g + p.helperProportions.width,
                y = i.offset.top,
                b = y + p.helperProportions.height;
            for (d = p.snapElements.length - 1; d >= 0; d--) o = p.snapElements[d].left, h = o + p.snapElements[d].width, l = p.snapElements[d].top, u = l + p.snapElements[d].height, o - f > v || g > h + f || l - f > b || y > u + f || !e.contains(p.snapElements[d].item.ownerDocument, p.snapElements[d].item) ? (p.snapElements[d].snapping && p.options.snap.release && p.options.snap.release.call(p.element, t, e.extend(p._uiHash(), {
                snapItem: p.snapElements[d].item
            })), p.snapElements[d].snapping = !1) : ("inner" !== m.snapMode && (s = f >= Math.abs(l - b), a = f >= Math.abs(u - y), n = f >= Math.abs(o - v), r = f >= Math.abs(h - g), s && (i.position.top = p._convertPositionTo("relative", {
                top: l - p.helperProportions.height,
                left: 0
            }).top - p.margins.top), a && (i.position.top = p._convertPositionTo("relative", {
                top: u,
                left: 0
            }).top - p.margins.top), n && (i.position.left = p._convertPositionTo("relative", {
                top: 0,
                left: o - p.helperProportions.width
            }).left - p.margins.left), r && (i.position.left = p._convertPositionTo("relative", {
                top: 0,
                left: h
            }).left - p.margins.left)), c = s || a || n || r, "outer" !== m.snapMode && (s = f >= Math.abs(l - y), a = f >= Math.abs(u - b), n = f >= Math.abs(o - g), r = f >= Math.abs(h - v), s && (i.position.top = p._convertPositionTo("relative", {
                top: l,
                left: 0
            }).top - p.margins.top), a && (i.position.top = p._convertPositionTo("relative", {
                top: u - p.helperProportions.height,
                left: 0
            }).top - p.margins.top), n && (i.position.left = p._convertPositionTo("relative", {
                top: 0,
                left: o
            }).left - p.margins.left), r && (i.position.left = p._convertPositionTo("relative", {
                top: 0,
                left: h - p.helperProportions.width
            }).left - p.margins.left)), !p.snapElements[d].snapping && (s || a || n || r || c) && p.options.snap.snap && p.options.snap.snap.call(p.element, t, e.extend(p._uiHash(), {
                snapItem: p.snapElements[d].item
            })), p.snapElements[d].snapping = s || a || n || r || c)
        }
    }), e.ui.plugin.add("draggable", "stack", {
        start: function() {
            var t, i = this.data("ui-draggable").options,
                s = e.makeArray(e(i.stack)).sort(function(t, i) {
                    return (parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(i).css("zIndex"), 10) || 0)
                });
            s.length && (t = parseInt(e(s[0]).css("zIndex"), 10) || 0, e(s).each(function(i) {
                e(this).css("zIndex", t + i)
            }), this.css("zIndex", t + s.length))
        }
    }), e.ui.plugin.add("draggable", "zIndex", {
        start: function(t, i) {
            var s = e(i.helper),
                a = e(this).data("ui-draggable").options;
            s.css("zIndex") && (a._zIndex = s.css("zIndex")), s.css("zIndex", a.zIndex)
        },
        stop: function(t, i) {
            var s = e(this).data("ui-draggable").options;
            s._zIndex && e(i.helper).css("zIndex", s._zIndex)
        }
    })
})(jQuery);
(function(e) {
    function t(e, t, i) {
        return e > t && t + i > e
    }
    e.widget("ui.droppable", {
        version: "1.10.4",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            activeClass: !1,
            addClasses: !0,
            greedy: !1,
            hoverClass: !1,
            scope: "default",
            tolerance: "intersect",
            activate: null,
            deactivate: null,
            drop: null,
            out: null,
            over: null
        },
        _create: function() {
            var t, i = this.options,
                s = i.accept;
            this.isover = !1, this.isout = !0, this.accept = e.isFunction(s) ? s : function(e) {
                return e.is(s)
            }, this.proportions = function() {
                return arguments.length ? (t = arguments[0], undefined) : t ? t : t = {
                    width: this.element[0].offsetWidth,
                    height: this.element[0].offsetHeight
                }
            }, e.ui.ddmanager.droppables[i.scope] = e.ui.ddmanager.droppables[i.scope] || [], e.ui.ddmanager.droppables[i.scope].push(this), i.addClasses && this.element.addClass("ui-droppable")
        },
        _destroy: function() {
            for (var t = 0, i = e.ui.ddmanager.droppables[this.options.scope]; i.length > t; t++) i[t] === this && i.splice(t, 1);
            this.element.removeClass("ui-droppable ui-droppable-disabled")
        },
        _setOption: function(t, i) {
            "accept" === t && (this.accept = e.isFunction(i) ? i : function(e) {
                return e.is(i)
            }), e.Widget.prototype._setOption.apply(this, arguments)
        },
        _activate: function(t) {
            var i = e.ui.ddmanager.current;
            this.options.activeClass && this.element.addClass(this.options.activeClass), i && this._trigger("activate", t, this.ui(i))
        },
        _deactivate: function(t) {
            var i = e.ui.ddmanager.current;
            this.options.activeClass && this.element.removeClass(this.options.activeClass), i && this._trigger("deactivate", t, this.ui(i))
        },
        _over: function(t) {
            var i = e.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", t, this.ui(i)))
        },
        _out: function(t) {
            var i = e.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", t, this.ui(i)))
        },
        _drop: function(t, i) {
            var s = i || e.ui.ddmanager.current,
                a = !1;
            return s && (s.currentItem || s.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                var t = e.data(this, "ui-droppable");
                return t.options.greedy && !t.options.disabled && t.options.scope === s.options.scope && t.accept.call(t.element[0], s.currentItem || s.element) && e.ui.intersect(s, e.extend(t, {
                    offset: t.element.offset()
                }), t.options.tolerance) ? (a = !0, !1) : undefined
            }), a ? !1 : this.accept.call(this.element[0], s.currentItem || s.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", t, this.ui(s)), this.element) : !1) : !1
        },
        ui: function(e) {
            return {
                draggable: e.currentItem || e.element,
                helper: e.helper,
                position: e.position,
                offset: e.positionAbs
            }
        }
    }), e.ui.intersect = function(e, i, s) {
        if (!i.offset) return !1;
        var a, n, r = (e.positionAbs || e.position.absolute).left,
            o = (e.positionAbs || e.position.absolute).top,
            l = r + e.helperProportions.width,
            h = o + e.helperProportions.height,
            u = i.offset.left,
            d = i.offset.top,
            c = u + i.proportions().width,
            p = d + i.proportions().height;
        switch (s) {
            case "fit":
                return r >= u && c >= l && o >= d && p >= h;
            case "intersect":
                return r + e.helperProportions.width / 2 > u && c > l - e.helperProportions.width / 2 && o + e.helperProportions.height / 2 > d && p > h - e.helperProportions.height / 2;
            case "pointer":
                return a = (e.positionAbs || e.position.absolute).left + (e.clickOffset || e.offset.click).left, n = (e.positionAbs || e.position.absolute).top + (e.clickOffset || e.offset.click).top, t(n, d, i.proportions().height) && t(a, u, i.proportions().width);
            case "touch":
                return (o >= d && p >= o || h >= d && p >= h || d > o && h > p) && (r >= u && c >= r || l >= u && c >= l || u > r && l > c);
            default:
                return !1
        }
    }, e.ui.ddmanager = {
        current: null,
        droppables: {
            "default": []
        },
        prepareOffsets: function(t, i) {
            var s, a, n = e.ui.ddmanager.droppables[t.options.scope] || [],
                r = i ? i.type : null,
                o = (t.currentItem || t.element).find(":data(ui-droppable)").addBack();
            e: for (s = 0; n.length > s; s++)
                if (!(n[s].options.disabled || t && !n[s].accept.call(n[s].element[0], t.currentItem || t.element))) {
                    for (a = 0; o.length > a; a++)
                        if (o[a] === n[s].element[0]) {
                            n[s].proportions().height = 0;
                            continue e
                        }
                    n[s].visible = "none" !== n[s].element.css("display"), n[s].visible && ("mousedown" === r && n[s]._activate.call(n[s], i), n[s].offset = n[s].element.offset(), n[s].proportions({
                        width: n[s].element[0].offsetWidth,
                        height: n[s].element[0].offsetHeight
                    }))
                }
        },
        drop: function(t, i) {
            var s = !1;
            return e.each((e.ui.ddmanager.droppables[t.options.scope] || []).slice(), function() {
                this.options && (!this.options.disabled && this.visible && e.ui.intersect(t, this, this.options.tolerance) && (s = this._drop.call(this, i) || s), !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i)))
            }), s
        },
        dragStart: function(t, i) {
            t.element.parentsUntil("body").bind("scroll.droppable", function() {
                t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, i)
            })
        },
        drag: function(t, i) {
            t.options.refreshPositions && e.ui.ddmanager.prepareOffsets(t, i), e.each(e.ui.ddmanager.droppables[t.options.scope] || [], function() {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var s, a, n, r = e.ui.intersect(t, this, this.options.tolerance),
                        o = !r && this.isover ? "isout" : r && !this.isover ? "isover" : null;
                    o && (this.options.greedy && (a = this.options.scope, n = this.element.parents(":data(ui-droppable)").filter(function() {
                        return e.data(this, "ui-droppable").options.scope === a
                    }), n.length && (s = e.data(n[0], "ui-droppable"), s.greedyChild = "isover" === o)), s && "isover" === o && (s.isover = !1, s.isout = !0, s._out.call(s, i)), this[o] = !0, this["isout" === o ? "isover" : "isout"] = !1, this["isover" === o ? "_over" : "_out"].call(this, i), s && "isout" === o && (s.isout = !1, s.isover = !0, s._over.call(s, i)))
                }
            })
        },
        dragStop: function(t, i) {
            t.element.parentsUntil("body").unbind("scroll.droppable"), t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, i)
        }
    }
})(jQuery);
(function(e) {
    function t(e, t, i) {
        return e > t && t + i > e
    }

    function i(e) {
        return /left|right/.test(e.css("float")) || /inline|table-cell/.test(e.css("display"))
    }
    e.widget("ui.sortable", e.ui.mouse, {
        version: "1.10.4",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _create: function() {
            var e = this.options;
            this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? "x" === e.axis || i(this.items[0].item) : !1, this.offset = this.element.offset(), this._mouseInit(), this.ready = !0
        },
        _destroy: function() {
            this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();
            for (var e = this.items.length - 1; e >= 0; e--) this.items[e].item.removeData(this.widgetName + "-item");
            return this
        },
        _setOption: function(t, i) {
            "disabled" === t ? (this.options[t] = i, this.widget().toggleClass("ui-sortable-disabled", !!i)) : e.Widget.prototype._setOption.apply(this, arguments)
        },
        _mouseCapture: function(t, i) {
            var s = null,
                a = !1,
                n = this;
            return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(t), e(t.target).parents().each(function() {
                return e.data(this, n.widgetName + "-item") === n ? (s = e(this), !1) : undefined
            }), e.data(t.target, n.widgetName + "-item") === n && (s = e(t.target)), s ? !this.options.handle || i || (e(this.options.handle, s).find("*").addBack().each(function() {
                this === t.target && (a = !0)
            }), a) ? (this.currentItem = s, this._removeCurrentsFromItems(), !0) : !1 : !1)
        },
        _mouseStart: function(t, i, s) {
            var a, n, r = this.options;
            if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(t), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                    top: this.offset.top - this.margins.top,
                    left: this.offset.left - this.margins.left
                }, e.extend(this.offset, {
                    click: {
                        left: t.pageX - this.offset.left,
                        top: t.pageY - this.offset.top
                    },
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset()
                }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, r.cursorAt && this._adjustOffsetFromHelper(r.cursorAt), this.domPosition = {
                    prev: this.currentItem.prev()[0],
                    parent: this.currentItem.parent()[0]
                }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), r.containment && this._setContainment(), r.cursor && "auto" !== r.cursor && (n = this.document.find("body"), this.storedCursor = n.css("cursor"), n.css("cursor", r.cursor), this.storedStylesheet = e("<style>*{ cursor: " + r.cursor + " !important; }</style>").appendTo(n)), r.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", r.opacity)), r.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", r.zIndex)), this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !s)
                for (a = this.containers.length - 1; a >= 0; a--) this.containers[a]._trigger("activate", t, this._uiHash(this));
            return e.ui.ddmanager && (e.ui.ddmanager.current = this), e.ui.ddmanager && !r.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(t), !0
        },
        _mouseDrag: function(t) {
            var i, s, a, n, r = this.options,
                o = !1;
            for (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < r.scrollSensitivity ? this.scrollParent[0].scrollTop = o = this.scrollParent[0].scrollTop + r.scrollSpeed : t.pageY - this.overflowOffset.top < r.scrollSensitivity && (this.scrollParent[0].scrollTop = o = this.scrollParent[0].scrollTop - r.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < r.scrollSensitivity ? this.scrollParent[0].scrollLeft = o = this.scrollParent[0].scrollLeft + r.scrollSpeed : t.pageX - this.overflowOffset.left < r.scrollSensitivity && (this.scrollParent[0].scrollLeft = o = this.scrollParent[0].scrollLeft - r.scrollSpeed)) : (t.pageY - e(document).scrollTop() < r.scrollSensitivity ? o = e(document).scrollTop(e(document).scrollTop() - r.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < r.scrollSensitivity && (o = e(document).scrollTop(e(document).scrollTop() + r.scrollSpeed)), t.pageX - e(document).scrollLeft() < r.scrollSensitivity ? o = e(document).scrollLeft(e(document).scrollLeft() - r.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < r.scrollSensitivity && (o = e(document).scrollLeft(e(document).scrollLeft() + r.scrollSpeed))), o !== !1 && e.ui.ddmanager && !r.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--)
                if (s = this.items[i], a = s.item[0], n = this._intersectsWithPointer(s), n && s.instance === this.currentContainer && a !== this.currentItem[0] && this.placeholder[1 === n ? "next" : "prev"]()[0] !== a && !e.contains(this.placeholder[0], a) && ("semi-dynamic" === this.options.type ? !e.contains(this.element[0], a) : !0)) {
                    if (this.direction = 1 === n ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(s)) break;
                    this._rearrange(t, s), this._trigger("change", t, this._uiHash());
                    break
                }
            return this._contactContainers(t), e.ui.ddmanager && e.ui.ddmanager.drag(this, t), this._trigger("sort", t, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
        },
        _mouseStop: function(t, i) {
            if (t) {
                if (e.ui.ddmanager && !this.options.dropBehaviour && e.ui.ddmanager.drop(this, t), this.options.revert) {
                    var s = this,
                        a = this.placeholder.offset(),
                        n = this.options.axis,
                        r = {};
                    n && "x" !== n || (r.left = a.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)), n && "y" !== n || (r.top = a.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, e(this.helper).animate(r, parseInt(this.options.revert, 10) || 500, function() {
                        s._clear(t)
                    })
                } else this._clear(t, i);
                return !1
            }
        },
        cancel: function() {
            if (this.dragging) {
                this._mouseUp({
                    target: null
                }), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var t = this.containers.length - 1; t >= 0; t--) this.containers[t]._trigger("deactivate", null, this._uiHash(this)), this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, this._uiHash(this)), this.containers[t].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), e.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? e(this.domPosition.prev).after(this.currentItem) : e(this.domPosition.parent).prepend(this.currentItem)), this
        },
        serialize: function(t) {
            var i = this._getItemsAsjQuery(t && t.connected),
                s = [];
            return t = t || {}, e(i).each(function() {
                var i = (e(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[\-=_](.+)/);
                i && s.push((t.key || i[1] + "[]") + "=" + (t.key && t.expression ? i[1] : i[2]))
            }), !s.length && t.key && s.push(t.key + "="), s.join("&")
        },
        toArray: function(t) {
            var i = this._getItemsAsjQuery(t && t.connected),
                s = [];
            return t = t || {}, i.each(function() {
                s.push(e(t.item || this).attr(t.attribute || "id") || "")
            }), s
        },
        _intersectsWith: function(e) {
            var t = this.positionAbs.left,
                i = t + this.helperProportions.width,
                s = this.positionAbs.top,
                a = s + this.helperProportions.height,
                n = e.left,
                r = n + e.width,
                o = e.top,
                h = o + e.height,
                l = this.offset.click.top,
                u = this.offset.click.left,
                d = "x" === this.options.axis || s + l > o && h > s + l,
                c = "y" === this.options.axis || t + u > n && r > t + u,
                p = d && c;
            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > e[this.floating ? "width" : "height"] ? p : t + this.helperProportions.width / 2 > n && r > i - this.helperProportions.width / 2 && s + this.helperProportions.height / 2 > o && h > a - this.helperProportions.height / 2
        },
        _intersectsWithPointer: function(e) {
            var i = "x" === this.options.axis || t(this.positionAbs.top + this.offset.click.top, e.top, e.height),
                s = "y" === this.options.axis || t(this.positionAbs.left + this.offset.click.left, e.left, e.width),
                a = i && s,
                n = this._getDragVerticalDirection(),
                r = this._getDragHorizontalDirection();
            return a ? this.floating ? r && "right" === r || "down" === n ? 2 : 1 : n && ("down" === n ? 2 : 1) : !1
        },
        _intersectsWithSides: function(e) {
            var i = t(this.positionAbs.top + this.offset.click.top, e.top + e.height / 2, e.height),
                s = t(this.positionAbs.left + this.offset.click.left, e.left + e.width / 2, e.width),
                a = this._getDragVerticalDirection(),
                n = this._getDragHorizontalDirection();
            return this.floating && n ? "right" === n && s || "left" === n && !s : a && ("down" === a && i || "up" === a && !i)
        },
        _getDragVerticalDirection: function() {
            var e = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 !== e && (e > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function() {
            var e = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 !== e && (e > 0 ? "right" : "left")
        },
        refresh: function(e) {
            return this._refreshItems(e), this.refreshPositions(), this
        },
        _connectWith: function() {
            var e = this.options;
            return e.connectWith.constructor === String ? [e.connectWith] : e.connectWith
        },
        _getItemsAsjQuery: function(t) {
            function i() {
                o.push(this)
            }
            var s, a, n, r, o = [],
                h = [],
                l = this._connectWith();
            if (l && t)
                for (s = l.length - 1; s >= 0; s--)
                    for (n = e(l[s]), a = n.length - 1; a >= 0; a--) r = e.data(n[a], this.widgetFullName), r && r !== this && !r.options.disabled && h.push([e.isFunction(r.options.items) ? r.options.items.call(r.element) : e(r.options.items, r.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), r]);
            for (h.push([e.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                    options: this.options,
                    item: this.currentItem
                }) : e(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), s = h.length - 1; s >= 0; s--) h[s][0].each(i);
            return e(o)
        },
        _removeCurrentsFromItems: function() {
            var t = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = e.grep(this.items, function(e) {
                for (var i = 0; t.length > i; i++)
                    if (t[i] === e.item[0]) return !1;
                return !0
            })
        },
        _refreshItems: function(t) {
            this.items = [], this.containers = [this];
            var i, s, a, n, r, o, h, l, u = this.items,
                d = [
                    [e.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, {
                        item: this.currentItem
                    }) : e(this.options.items, this.element), this]
                ],
                c = this._connectWith();
            if (c && this.ready)
                for (i = c.length - 1; i >= 0; i--)
                    for (a = e(c[i]), s = a.length - 1; s >= 0; s--) n = e.data(a[s], this.widgetFullName), n && n !== this && !n.options.disabled && (d.push([e.isFunction(n.options.items) ? n.options.items.call(n.element[0], t, {
                        item: this.currentItem
                    }) : e(n.options.items, n.element), n]), this.containers.push(n));
            for (i = d.length - 1; i >= 0; i--)
                for (r = d[i][1], o = d[i][0], s = 0, l = o.length; l > s; s++) h = e(o[s]), h.data(this.widgetName + "-item", r), u.push({
                    item: h,
                    instance: r,
                    width: 0,
                    height: 0,
                    left: 0,
                    top: 0
                })
        },
        refreshPositions: function(t) {
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            var i, s, a, n;
            for (i = this.items.length - 1; i >= 0; i--) s = this.items[i], s.instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0] || (a = this.options.toleranceElement ? e(this.options.toleranceElement, s.item) : s.item, t || (s.width = a.outerWidth(), s.height = a.outerHeight()), n = a.offset(), s.left = n.left, s.top = n.top);
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
            else
                for (i = this.containers.length - 1; i >= 0; i--) n = this.containers[i].element.offset(), this.containers[i].containerCache.left = n.left, this.containers[i].containerCache.top = n.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
            return this
        },
        _createPlaceholder: function(t) {
            t = t || this;
            var i, s = t.options;
            s.placeholder && s.placeholder.constructor !== String || (i = s.placeholder, s.placeholder = {
                element: function() {
                    var s = t.currentItem[0].nodeName.toLowerCase(),
                        a = e("<" + s + ">", t.document[0]).addClass(i || t.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                    return "tr" === s ? t.currentItem.children().each(function() {
                        e("<td>&#160;</td>", t.document[0]).attr("colspan", e(this).attr("colspan") || 1).appendTo(a)
                    }) : "img" === s && a.attr("src", t.currentItem.attr("src")), i || a.css("visibility", "hidden"), a
                },
                update: function(e, a) {
                    (!i || s.forcePlaceholderSize) && (a.height() || a.height(t.currentItem.innerHeight() - parseInt(t.currentItem.css("paddingTop") || 0, 10) - parseInt(t.currentItem.css("paddingBottom") || 0, 10)), a.width() || a.width(t.currentItem.innerWidth() - parseInt(t.currentItem.css("paddingLeft") || 0, 10) - parseInt(t.currentItem.css("paddingRight") || 0, 10)))
                }
            }), t.placeholder = e(s.placeholder.element.call(t.element, t.currentItem)), t.currentItem.after(t.placeholder), s.placeholder.update(t, t.placeholder)
        },
        _contactContainers: function(s) {
            var a, n, r, o, h, l, u, d, c, p, f = null,
                m = null;
            for (a = this.containers.length - 1; a >= 0; a--)
                if (!e.contains(this.currentItem[0], this.containers[a].element[0]))
                    if (this._intersectsWith(this.containers[a].containerCache)) {
                        if (f && e.contains(this.containers[a].element[0], f.element[0])) continue;
                        f = this.containers[a], m = a
                    } else this.containers[a].containerCache.over && (this.containers[a]._trigger("out", s, this._uiHash(this)), this.containers[a].containerCache.over = 0);
            if (f)
                if (1 === this.containers.length) this.containers[m].containerCache.over || (this.containers[m]._trigger("over", s, this._uiHash(this)), this.containers[m].containerCache.over = 1);
                else {
                    for (r = 1e4, o = null, p = f.floating || i(this.currentItem), h = p ? "left" : "top", l = p ? "width" : "height", u = this.positionAbs[h] + this.offset.click[h], n = this.items.length - 1; n >= 0; n--) e.contains(this.containers[m].element[0], this.items[n].item[0]) && this.items[n].item[0] !== this.currentItem[0] && (!p || t(this.positionAbs.top + this.offset.click.top, this.items[n].top, this.items[n].height)) && (d = this.items[n].item.offset()[h], c = !1, Math.abs(d - u) > Math.abs(d + this.items[n][l] - u) && (c = !0, d += this.items[n][l]), r > Math.abs(d - u) && (r = Math.abs(d - u), o = this.items[n], this.direction = c ? "up" : "down"));
                    if (!o && !this.options.dropOnEmpty) return;
                    if (this.currentContainer === this.containers[m]) return;
                    o ? this._rearrange(s, o, null, !0) : this._rearrange(s, null, this.containers[m].element, !0), this._trigger("change", s, this._uiHash()), this.containers[m]._trigger("change", s, this._uiHash(this)), this.currentContainer = this.containers[m], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[m]._trigger("over", s, this._uiHash(this)), this.containers[m].containerCache.over = 1
                }
        },
        _createHelper: function(t) {
            var i = this.options,
                s = e.isFunction(i.helper) ? e(i.helper.apply(this.element[0], [t, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
            return s.parents("body").length || e("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]), s[0] === this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }), (!s[0].style.width || i.forceHelperSize) && s.width(this.currentItem.width()), (!s[0].style.height || i.forceHelperSize) && s.height(this.currentItem.height()), s
        },
        _adjustOffsetFromHelper: function(t) {
            "string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var t = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && e.ui.ie) && (t = {
                top: 0,
                left: 0
            }), {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" === this.cssPosition) {
                var e = this.currentItem.position();
                return {
                    top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var t, i, s, a = this.options;
            "parent" === a.containment && (a.containment = this.helper[0].parentNode), ("document" === a.containment || "window" === a.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, e("document" === a.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (e("document" === a.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(a.containment) || (t = e(a.containment)[0], i = e(a.containment).offset(), s = "hidden" !== e(t).css("overflow"), this.containment = [i.left + (parseInt(e(t).css("borderLeftWidth"), 10) || 0) + (parseInt(e(t).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(e(t).css("borderTopWidth"), 10) || 0) + (parseInt(e(t).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (s ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) - (parseInt(e(t).css("borderLeftWidth"), 10) || 0) - (parseInt(e(t).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (s ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) - (parseInt(e(t).css("borderTopWidth"), 10) || 0) - (parseInt(e(t).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
        },
        _convertPositionTo: function(t, i) {
            i || (i = this.position);
            var s = "absolute" === t ? 1 : -1,
                a = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                n = /(html|body)/i.test(a[0].tagName);
            return {
                top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : n ? 0 : a.scrollTop()) * s,
                left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : n ? 0 : a.scrollLeft()) * s
            }
        },
        _generatePosition: function(t) {
            var i, s, a = this.options,
                n = t.pageX,
                r = t.pageY,
                o = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                h = /(html|body)/i.test(o[0].tagName);
            return "relative" !== this.cssPosition || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (n = this.containment[0] + this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (r = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (n = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (r = this.containment[3] + this.offset.click.top)), a.grid && (i = this.originalPageY + Math.round((r - this.originalPageY) / a.grid[1]) * a.grid[1], r = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - a.grid[1] : i + a.grid[1] : i, s = this.originalPageX + Math.round((n - this.originalPageX) / a.grid[0]) * a.grid[0], n = this.containment ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2] ? s : s - this.offset.click.left >= this.containment[0] ? s - a.grid[0] : s + a.grid[0] : s)), {
                top: r - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : h ? 0 : o.scrollTop()),
                left: n - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : h ? 0 : o.scrollLeft())
            }
        },
        _rearrange: function(e, t, i, s) {
            i ? i[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? t.item[0] : t.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
            var a = this.counter;
            this._delay(function() {
                a === this.counter && this.refreshPositions(!s)
            })
        },
        _clear: function(e, t) {
            function i(e, t, i) {
                return function(s) {
                    i._trigger(e, s, t._uiHash(t))
                }
            }
            this.reverting = !1;
            var s, a = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                for (s in this._storedCSS)("auto" === this._storedCSS[s] || "static" === this._storedCSS[s]) && (this._storedCSS[s] = "");
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else this.currentItem.show();
            for (this.fromOutside && !t && a.push(function(e) {
                    this._trigger("receive", e, this._uiHash(this.fromOutside))
                }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || t || a.push(function(e) {
                    this._trigger("update", e, this._uiHash())
                }), this !== this.currentContainer && (t || (a.push(function(e) {
                    this._trigger("remove", e, this._uiHash())
                }), a.push(function(e) {
                    return function(t) {
                        e._trigger("receive", t, this._uiHash(this))
                    }
                }.call(this, this.currentContainer)), a.push(function(e) {
                    return function(t) {
                        e._trigger("update", t, this._uiHash(this))
                    }
                }.call(this, this.currentContainer)))), s = this.containers.length - 1; s >= 0; s--) t || a.push(i("deactivate", this, this.containers[s])), this.containers[s].containerCache.over && (a.push(i("out", this, this.containers[s])), this.containers[s].containerCache.over = 0);
            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
                if (!t) {
                    for (this._trigger("beforeStop", e, this._uiHash()), s = 0; a.length > s; s++) a[s].call(this, e);
                    this._trigger("stop", e, this._uiHash())
                }
                return this.fromOutside = !1, !1
            }
            if (t || this._trigger("beforeStop", e, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null, !t) {
                for (s = 0; a.length > s; s++) a[s].call(this, e);
                this._trigger("stop", e, this._uiHash())
            }
            return this.fromOutside = !1, !0
        },
        _trigger: function() {
            e.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
        },
        _uiHash: function(t) {
            var i = t || this;
            return {
                helper: i.helper,
                placeholder: i.placeholder || e([]),
                position: i.position,
                originalPosition: i.originalPosition,
                offset: i.positionAbs,
                item: i.currentItem,
                sender: t ? t.element : null
            }
        }
    })
})(jQuery);
(function(e, t) {
    var i = "ui-effects-";
    e.effects = {
            effect: {}
        },
        function(e, t) {
            function i(e, t, i) {
                var s = d[t.type] || {};
                return null == e ? i || !t.def ? null : t.def : (e = s.floor ? ~~e : parseFloat(e), isNaN(e) ? t.def : s.mod ? (e + s.mod) % s.mod : 0 > e ? 0 : e > s.max ? s.max : e)
            }

            function s(i) {
                var s = l(),
                    a = s._rgba = [];
                return i = i.toLowerCase(), f(h, function(e, n) {
                    var r, o = n.re.exec(i),
                        h = o && n.parse(o),
                        l = n.space || "rgba";
                    return h ? (r = s[l](h), s[u[l].cache] = r[u[l].cache], a = s._rgba = r._rgba, !1) : t
                }), a.length ? ("0,0,0,0" === a.join() && e.extend(a, n.transparent), s) : n[i]
            }

            function a(e, t, i) {
                return i = (i + 1) % 1, 1 > 6 * i ? e + 6 * (t - e) * i : 1 > 2 * i ? t : 2 > 3 * i ? e + 6 * (t - e) * (2 / 3 - i) : e
            }
            var n, r = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
                o = /^([\-+])=\s*(\d+\.?\d*)/,
                h = [{
                    re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    parse: function(e) {
                        return [e[1], e[2], e[3], e[4]]
                    }
                }, {
                    re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    parse: function(e) {
                        return [2.55 * e[1], 2.55 * e[2], 2.55 * e[3], e[4]]
                    }
                }, {
                    re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                    parse: function(e) {
                        return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)]
                    }
                }, {
                    re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                    parse: function(e) {
                        return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)]
                    }
                }, {
                    re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    space: "hsla",
                    parse: function(e) {
                        return [e[1], e[2] / 100, e[3] / 100, e[4]]
                    }
                }],
                l = e.Color = function(t, i, s, a) {
                    return new e.Color.fn.parse(t, i, s, a)
                },
                u = {
                    rgba: {
                        props: {
                            red: {
                                idx: 0,
                                type: "byte"
                            },
                            green: {
                                idx: 1,
                                type: "byte"
                            },
                            blue: {
                                idx: 2,
                                type: "byte"
                            }
                        }
                    },
                    hsla: {
                        props: {
                            hue: {
                                idx: 0,
                                type: "degrees"
                            },
                            saturation: {
                                idx: 1,
                                type: "percent"
                            },
                            lightness: {
                                idx: 2,
                                type: "percent"
                            }
                        }
                    }
                },
                d = {
                    "byte": {
                        floor: !0,
                        max: 255
                    },
                    percent: {
                        max: 1
                    },
                    degrees: {
                        mod: 360,
                        floor: !0
                    }
                },
                c = l.support = {},
                p = e("<p>")[0],
                f = e.each;
            p.style.cssText = "background-color:rgba(1,1,1,.5)", c.rgba = p.style.backgroundColor.indexOf("rgba") > -1, f(u, function(e, t) {
                t.cache = "_" + e, t.props.alpha = {
                    idx: 3,
                    type: "percent",
                    def: 1
                }
            }), l.fn = e.extend(l.prototype, {
                parse: function(a, r, o, h) {
                    if (a === t) return this._rgba = [null, null, null, null], this;
                    (a.jquery || a.nodeType) && (a = e(a).css(r), r = t);
                    var d = this,
                        c = e.type(a),
                        p = this._rgba = [];
                    return r !== t && (a = [a, r, o, h], c = "array"), "string" === c ? this.parse(s(a) || n._default) : "array" === c ? (f(u.rgba.props, function(e, t) {
                        p[t.idx] = i(a[t.idx], t)
                    }), this) : "object" === c ? (a instanceof l ? f(u, function(e, t) {
                        a[t.cache] && (d[t.cache] = a[t.cache].slice())
                    }) : f(u, function(t, s) {
                        var n = s.cache;
                        f(s.props, function(e, t) {
                            if (!d[n] && s.to) {
                                if ("alpha" === e || null == a[e]) return;
                                d[n] = s.to(d._rgba)
                            }
                            d[n][t.idx] = i(a[e], t, !0)
                        }), d[n] && 0 > e.inArray(null, d[n].slice(0, 3)) && (d[n][3] = 1, s.from && (d._rgba = s.from(d[n])))
                    }), this) : t
                },
                is: function(e) {
                    var i = l(e),
                        s = !0,
                        a = this;
                    return f(u, function(e, n) {
                        var r, o = i[n.cache];
                        return o && (r = a[n.cache] || n.to && n.to(a._rgba) || [], f(n.props, function(e, i) {
                            return null != o[i.idx] ? s = o[i.idx] === r[i.idx] : t
                        })), s
                    }), s
                },
                _space: function() {
                    var e = [],
                        t = this;
                    return f(u, function(i, s) {
                        t[s.cache] && e.push(i)
                    }), e.pop()
                },
                transition: function(e, t) {
                    var s = l(e),
                        a = s._space(),
                        n = u[a],
                        r = 0 === this.alpha() ? l("transparent") : this,
                        o = r[n.cache] || n.to(r._rgba),
                        h = o.slice();
                    return s = s[n.cache], f(n.props, function(e, a) {
                        var n = a.idx,
                            r = o[n],
                            l = s[n],
                            u = d[a.type] || {};
                        null !== l && (null === r ? h[n] = l : (u.mod && (l - r > u.mod / 2 ? r += u.mod : r - l > u.mod / 2 && (r -= u.mod)), h[n] = i((l - r) * t + r, a)))
                    }), this[a](h)
                },
                blend: function(t) {
                    if (1 === this._rgba[3]) return this;
                    var i = this._rgba.slice(),
                        s = i.pop(),
                        a = l(t)._rgba;
                    return l(e.map(i, function(e, t) {
                        return (1 - s) * a[t] + s * e
                    }))
                },
                toRgbaString: function() {
                    var t = "rgba(",
                        i = e.map(this._rgba, function(e, t) {
                            return null == e ? t > 2 ? 1 : 0 : e
                        });
                    return 1 === i[3] && (i.pop(), t = "rgb("), t + i.join() + ")"
                },
                toHslaString: function() {
                    var t = "hsla(",
                        i = e.map(this.hsla(), function(e, t) {
                            return null == e && (e = t > 2 ? 1 : 0), t && 3 > t && (e = Math.round(100 * e) + "%"), e
                        });
                    return 1 === i[3] && (i.pop(), t = "hsl("), t + i.join() + ")"
                },
                toHexString: function(t) {
                    var i = this._rgba.slice(),
                        s = i.pop();
                    return t && i.push(~~(255 * s)), "#" + e.map(i, function(e) {
                        return e = (e || 0).toString(16), 1 === e.length ? "0" + e : e
                    }).join("")
                },
                toString: function() {
                    return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
                }
            }), l.fn.parse.prototype = l.fn, u.hsla.to = function(e) {
                if (null == e[0] || null == e[1] || null == e[2]) return [null, null, null, e[3]];
                var t, i, s = e[0] / 255,
                    a = e[1] / 255,
                    n = e[2] / 255,
                    r = e[3],
                    o = Math.max(s, a, n),
                    h = Math.min(s, a, n),
                    l = o - h,
                    u = o + h,
                    d = .5 * u;
                return t = h === o ? 0 : s === o ? 60 * (a - n) / l + 360 : a === o ? 60 * (n - s) / l + 120 : 60 * (s - a) / l + 240, i = 0 === l ? 0 : .5 >= d ? l / u : l / (2 - u), [Math.round(t) % 360, i, d, null == r ? 1 : r]
            }, u.hsla.from = function(e) {
                if (null == e[0] || null == e[1] || null == e[2]) return [null, null, null, e[3]];
                var t = e[0] / 360,
                    i = e[1],
                    s = e[2],
                    n = e[3],
                    r = .5 >= s ? s * (1 + i) : s + i - s * i,
                    o = 2 * s - r;
                return [Math.round(255 * a(o, r, t + 1 / 3)), Math.round(255 * a(o, r, t)), Math.round(255 * a(o, r, t - 1 / 3)), n]
            }, f(u, function(s, a) {
                var n = a.props,
                    r = a.cache,
                    h = a.to,
                    u = a.from;
                l.fn[s] = function(s) {
                    if (h && !this[r] && (this[r] = h(this._rgba)), s === t) return this[r].slice();
                    var a, o = e.type(s),
                        d = "array" === o || "object" === o ? s : arguments,
                        c = this[r].slice();
                    return f(n, function(e, t) {
                        var s = d["object" === o ? e : t.idx];
                        null == s && (s = c[t.idx]), c[t.idx] = i(s, t)
                    }), u ? (a = l(u(c)), a[r] = c, a) : l(c)
                }, f(n, function(t, i) {
                    l.fn[t] || (l.fn[t] = function(a) {
                        var n, r = e.type(a),
                            h = "alpha" === t ? this._hsla ? "hsla" : "rgba" : s,
                            l = this[h](),
                            u = l[i.idx];
                        return "undefined" === r ? u : ("function" === r && (a = a.call(this, u), r = e.type(a)), null == a && i.empty ? this : ("string" === r && (n = o.exec(a), n && (a = u + parseFloat(n[2]) * ("+" === n[1] ? 1 : -1))), l[i.idx] = a, this[h](l)))
                    })
                })
            }), l.hook = function(t) {
                var i = t.split(" ");
                f(i, function(t, i) {
                    e.cssHooks[i] = {
                        set: function(t, a) {
                            var n, r, o = "";
                            if ("transparent" !== a && ("string" !== e.type(a) || (n = s(a)))) {
                                if (a = l(n || a), !c.rgba && 1 !== a._rgba[3]) {
                                    for (r = "backgroundColor" === i ? t.parentNode : t;
                                        ("" === o || "transparent" === o) && r && r.style;) try {
                                        o = e.css(r, "backgroundColor"), r = r.parentNode
                                    } catch (h) {}
                                    a = a.blend(o && "transparent" !== o ? o : "_default")
                                }
                                a = a.toRgbaString()
                            }
                            try {
                                t.style[i] = a
                            } catch (h) {}
                        }
                    }, e.fx.step[i] = function(t) {
                        t.colorInit || (t.start = l(t.elem, i), t.end = l(t.end), t.colorInit = !0), e.cssHooks[i].set(t.elem, t.start.transition(t.end, t.pos))
                    }
                })
            }, l.hook(r), e.cssHooks.borderColor = {
                expand: function(e) {
                    var t = {};
                    return f(["Top", "Right", "Bottom", "Left"], function(i, s) {
                        t["border" + s + "Color"] = e
                    }), t
                }
            }, n = e.Color.names = {
                aqua: "#00ffff",
                black: "#000000",
                blue: "#0000ff",
                fuchsia: "#ff00ff",
                gray: "#808080",
                green: "#008000",
                lime: "#00ff00",
                maroon: "#800000",
                navy: "#000080",
                olive: "#808000",
                purple: "#800080",
                red: "#ff0000",
                silver: "#c0c0c0",
                teal: "#008080",
                white: "#ffffff",
                yellow: "#ffff00",
                transparent: [null, null, null, 0],
                _default: "#ffffff"
            }
        }(jQuery),
        function() {
            function i(t) {
                var i, s, a = t.ownerDocument.defaultView ? t.ownerDocument.defaultView.getComputedStyle(t, null) : t.currentStyle,
                    n = {};
                if (a && a.length && a[0] && a[a[0]])
                    for (s = a.length; s--;) i = a[s], "string" == typeof a[i] && (n[e.camelCase(i)] = a[i]);
                else
                    for (i in a) "string" == typeof a[i] && (n[i] = a[i]);
                return n
            }

            function s(t, i) {
                var s, a, r = {};
                for (s in i) a = i[s], t[s] !== a && (n[s] || (e.fx.step[s] || !isNaN(parseFloat(a))) && (r[s] = a));
                return r
            }
            var a = ["add", "remove", "toggle"],
                n = {
                    border: 1,
                    borderBottom: 1,
                    borderColor: 1,
                    borderLeft: 1,
                    borderRight: 1,
                    borderTop: 1,
                    borderWidth: 1,
                    margin: 1,
                    padding: 1
                };
            e.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(t, i) {
                e.fx.step[i] = function(e) {
                    ("none" !== e.end && !e.setAttr || 1 === e.pos && !e.setAttr) && (jQuery.style(e.elem, i, e.end), e.setAttr = !0)
                }
            }), e.fn.addBack || (e.fn.addBack = function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }), e.effects.animateClass = function(t, n, r, o) {
                var h = e.speed(n, r, o);
                return this.queue(function() {
                    var n, r = e(this),
                        o = r.attr("class") || "",
                        l = h.children ? r.find("*").addBack() : r;
                    l = l.map(function() {
                        var t = e(this);
                        return {
                            el: t,
                            start: i(this)
                        }
                    }), n = function() {
                        e.each(a, function(e, i) {
                            t[i] && r[i + "Class"](t[i])
                        })
                    }, n(), l = l.map(function() {
                        return this.end = i(this.el[0]), this.diff = s(this.start, this.end), this
                    }), r.attr("class", o), l = l.map(function() {
                        var t = this,
                            i = e.Deferred(),
                            s = e.extend({}, h, {
                                queue: !1,
                                complete: function() {
                                    i.resolve(t)
                                }
                            });
                        return this.el.animate(this.diff, s), i.promise()
                    }), e.when.apply(e, l.get()).done(function() {
                        n(), e.each(arguments, function() {
                            var t = this.el;
                            e.each(this.diff, function(e) {
                                t.css(e, "")
                            })
                        }), h.complete.call(r[0])
                    })
                })
            }, e.fn.extend({
                addClass: function(t) {
                    return function(i, s, a, n) {
                        return s ? e.effects.animateClass.call(this, {
                            add: i
                        }, s, a, n) : t.apply(this, arguments)
                    }
                }(e.fn.addClass),
                removeClass: function(t) {
                    return function(i, s, a, n) {
                        return arguments.length > 1 ? e.effects.animateClass.call(this, {
                            remove: i
                        }, s, a, n) : t.apply(this, arguments)
                    }
                }(e.fn.removeClass),
                toggleClass: function(i) {
                    return function(s, a, n, r, o) {
                        return "boolean" == typeof a || a === t ? n ? e.effects.animateClass.call(this, a ? {
                            add: s
                        } : {
                            remove: s
                        }, n, r, o) : i.apply(this, arguments) : e.effects.animateClass.call(this, {
                            toggle: s
                        }, a, n, r)
                    }
                }(e.fn.toggleClass),
                switchClass: function(t, i, s, a, n) {
                    return e.effects.animateClass.call(this, {
                        add: i,
                        remove: t
                    }, s, a, n)
                }
            })
        }(),
        function() {
            function s(t, i, s, a) {
                return e.isPlainObject(t) && (i = t, t = t.effect), t = {
                    effect: t
                }, null == i && (i = {}), e.isFunction(i) && (a = i, s = null, i = {}), ("number" == typeof i || e.fx.speeds[i]) && (a = s, s = i, i = {}), e.isFunction(s) && (a = s, s = null), i && e.extend(t, i), s = s || i.duration, t.duration = e.fx.off ? 0 : "number" == typeof s ? s : s in e.fx.speeds ? e.fx.speeds[s] : e.fx.speeds._default, t.complete = a || i.complete, t
            }

            function a(t) {
                return !t || "number" == typeof t || e.fx.speeds[t] ? !0 : "string" != typeof t || e.effects.effect[t] ? e.isFunction(t) ? !0 : "object" != typeof t || t.effect ? !1 : !0 : !0
            }
            e.extend(e.effects, {
                version: "1.10.4",
                save: function(e, t) {
                    for (var s = 0; t.length > s; s++) null !== t[s] && e.data(i + t[s], e[0].style[t[s]])
                },
                restore: function(e, s) {
                    var a, n;
                    for (n = 0; s.length > n; n++) null !== s[n] && (a = e.data(i + s[n]), a === t && (a = ""), e.css(s[n], a))
                },
                setMode: function(e, t) {
                    return "toggle" === t && (t = e.is(":hidden") ? "show" : "hide"), t
                },
                getBaseline: function(e, t) {
                    var i, s;
                    switch (e[0]) {
                        case "top":
                            i = 0;
                            break;
                        case "middle":
                            i = .5;
                            break;
                        case "bottom":
                            i = 1;
                            break;
                        default:
                            i = e[0] / t.height
                    }
                    switch (e[1]) {
                        case "left":
                            s = 0;
                            break;
                        case "center":
                            s = .5;
                            break;
                        case "right":
                            s = 1;
                            break;
                        default:
                            s = e[1] / t.width
                    }
                    return {
                        x: s,
                        y: i
                    }
                },
                createWrapper: function(t) {
                    if (t.parent().is(".ui-effects-wrapper")) return t.parent();
                    var i = {
                            width: t.outerWidth(!0),
                            height: t.outerHeight(!0),
                            "float": t.css("float")
                        },
                        s = e("<div></div>").addClass("ui-effects-wrapper").css({
                            fontSize: "100%",
                            background: "transparent",
                            border: "none",
                            margin: 0,
                            padding: 0
                        }),
                        a = {
                            width: t.width(),
                            height: t.height()
                        },
                        n = document.activeElement;
                    try {
                        n.id
                    } catch (r) {
                        n = document.body
                    }
                    return t.wrap(s), (t[0] === n || e.contains(t[0], n)) && e(n).focus(), s = t.parent(), "static" === t.css("position") ? (s.css({
                        position: "relative"
                    }), t.css({
                        position: "relative"
                    })) : (e.extend(i, {
                        position: t.css("position"),
                        zIndex: t.css("z-index")
                    }), e.each(["top", "left", "bottom", "right"], function(e, s) {
                        i[s] = t.css(s), isNaN(parseInt(i[s], 10)) && (i[s] = "auto")
                    }), t.css({
                        position: "relative",
                        top: 0,
                        left: 0,
                        right: "auto",
                        bottom: "auto"
                    })), t.css(a), s.css(i).show()
                },
                removeWrapper: function(t) {
                    var i = document.activeElement;
                    return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t), (t[0] === i || e.contains(t[0], i)) && e(i).focus()), t
                },
                setTransition: function(t, i, s, a) {
                    return a = a || {}, e.each(i, function(e, i) {
                        var n = t.cssUnit(i);
                        n[0] > 0 && (a[i] = n[0] * s + n[1])
                    }), a
                }
            }), e.fn.extend({
                effect: function() {
                    function t(t) {
                        function s() {
                            e.isFunction(n) && n.call(a[0]), e.isFunction(t) && t()
                        }
                        var a = e(this),
                            n = i.complete,
                            o = i.mode;
                        (a.is(":hidden") ? "hide" === o : "show" === o) ? (a[o](), s()) : r.call(a[0], i, s)
                    }
                    var i = s.apply(this, arguments),
                        a = i.mode,
                        n = i.queue,
                        r = e.effects.effect[i.effect];
                    return e.fx.off || !r ? a ? this[a](i.duration, i.complete) : this.each(function() {
                        i.complete && i.complete.call(this)
                    }) : n === !1 ? this.each(t) : this.queue(n || "fx", t)
                },
                show: function(e) {
                    return function(t) {
                        if (a(t)) return e.apply(this, arguments);
                        var i = s.apply(this, arguments);
                        return i.mode = "show", this.effect.call(this, i)
                    }
                }(e.fn.show),
                hide: function(e) {
                    return function(t) {
                        if (a(t)) return e.apply(this, arguments);
                        var i = s.apply(this, arguments);
                        return i.mode = "hide", this.effect.call(this, i)
                    }
                }(e.fn.hide),
                toggle: function(e) {
                    return function(t) {
                        if (a(t) || "boolean" == typeof t) return e.apply(this, arguments);
                        var i = s.apply(this, arguments);
                        return i.mode = "toggle", this.effect.call(this, i)
                    }
                }(e.fn.toggle),
                cssUnit: function(t) {
                    var i = this.css(t),
                        s = [];
                    return e.each(["em", "px", "%", "pt"], function(e, t) {
                        i.indexOf(t) > 0 && (s = [parseFloat(i), t])
                    }), s
                }
            })
        }(),
        function() {
            var t = {};
            e.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(e, i) {
                t[i] = function(t) {
                    return Math.pow(t, e + 2)
                }
            }), e.extend(t, {
                Sine: function(e) {
                    return 1 - Math.cos(e * Math.PI / 2)
                },
                Circ: function(e) {
                    return 1 - Math.sqrt(1 - e * e)
                },
                Elastic: function(e) {
                    return 0 === e || 1 === e ? e : -Math.pow(2, 8 * (e - 1)) * Math.sin((80 * (e - 1) - 7.5) * Math.PI / 15)
                },
                Back: function(e) {
                    return e * e * (3 * e - 2)
                },
                Bounce: function(e) {
                    for (var t, i = 4;
                        ((t = Math.pow(2, --i)) - 1) / 11 > e;);
                    return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * t - 2) / 22 - e, 2)
                }
            }), e.each(t, function(t, i) {
                e.easing["easeIn" + t] = i, e.easing["easeOut" + t] = function(e) {
                    return 1 - i(1 - e)
                }, e.easing["easeInOut" + t] = function(e) {
                    return .5 > e ? i(2 * e) / 2 : 1 - i(-2 * e + 2) / 2
                }
            })
        }()
})(jQuery);
(function(e) {
    e.effects.effect.bounce = function(t, i) {
        var s, a, n, r = e(this),
            o = ["position", "top", "bottom", "left", "right", "height", "width"],
            l = e.effects.setMode(r, t.mode || "effect"),
            h = "hide" === l,
            u = "show" === l,
            d = t.direction || "up",
            c = t.distance,
            p = t.times || 5,
            m = 2 * p + (u || h ? 1 : 0),
            f = t.duration / m,
            g = t.easing,
            v = "up" === d || "down" === d ? "top" : "left",
            y = "up" === d || "left" === d,
            b = r.queue(),
            _ = b.length;
        for ((u || h) && o.push("opacity"), e.effects.save(r, o), r.show(), e.effects.createWrapper(r), c || (c = r["top" === v ? "outerHeight" : "outerWidth"]() / 3), u && (n = {
                opacity: 1
            }, n[v] = 0, r.css("opacity", 0).css(v, y ? 2 * -c : 2 * c).animate(n, f, g)), h && (c /= Math.pow(2, p - 1)), n = {}, n[v] = 0, s = 0; p > s; s++) a = {}, a[v] = (y ? "-=" : "+=") + c, r.animate(a, f, g).animate(n, f, g), c = h ? 2 * c : c / 2;
        h && (a = {
            opacity: 0
        }, a[v] = (y ? "-=" : "+=") + c, r.animate(a, f, g)), r.queue(function() {
            h && r.hide(), e.effects.restore(r, o), e.effects.removeWrapper(r), i()
        }), _ > 1 && b.splice.apply(b, [1, 0].concat(b.splice(_, m + 1))), r.dequeue()
    }
})(jQuery);
(function(e) {
    e.effects.effect.drop = function(t, i) {
        var s, a = e(this),
            n = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"],
            r = e.effects.setMode(a, t.mode || "hide"),
            o = "show" === r,
            h = t.direction || "left",
            l = "up" === h || "down" === h ? "top" : "left",
            u = "up" === h || "left" === h ? "pos" : "neg",
            d = {
                opacity: o ? 1 : 0
            };
        e.effects.save(a, n), a.show(), e.effects.createWrapper(a), s = t.distance || a["top" === l ? "outerHeight" : "outerWidth"](!0) / 2, o && a.css("opacity", 0).css(l, "pos" === u ? -s : s), d[l] = (o ? "pos" === u ? "+=" : "-=" : "pos" === u ? "-=" : "+=") + s, a.animate(d, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: function() {
                "hide" === r && a.hide(), e.effects.restore(a, n), e.effects.removeWrapper(a), i()
            }
        })
    }
})(jQuery);
(function(e) {
    e.effects.effect.shake = function(t, i) {
        var s, a = e(this),
            n = ["position", "top", "bottom", "left", "right", "height", "width"],
            r = e.effects.setMode(a, t.mode || "effect"),
            o = t.direction || "left",
            h = t.distance || 20,
            l = t.times || 3,
            u = 2 * l + 1,
            d = Math.round(t.duration / u),
            c = "up" === o || "down" === o ? "top" : "left",
            p = "up" === o || "left" === o,
            f = {},
            m = {},
            g = {},
            v = a.queue(),
            y = v.length;
        for (e.effects.save(a, n), a.show(), e.effects.createWrapper(a), f[c] = (p ? "-=" : "+=") + h, m[c] = (p ? "+=" : "-=") + 2 * h, g[c] = (p ? "-=" : "+=") + 2 * h, a.animate(f, d, t.easing), s = 1; l > s; s++) a.animate(m, d, t.easing).animate(g, d, t.easing);
        a.animate(m, d, t.easing).animate(f, d / 2, t.easing).queue(function() {
            "hide" === r && a.hide(), e.effects.restore(a, n), e.effects.removeWrapper(a), i()
        }), y > 1 && v.splice.apply(v, [1, 0].concat(v.splice(y, u + 1))), a.dequeue()
    }
})(jQuery);;
(function(f) {
    function C(a, c, d) {
        var b = a[0],
            e = /er/.test(d) ? k : /bl/.test(d) ? u : j;
        active = d == E ? {
            checked: b[j],
            disabled: b[u],
            indeterminate: "true" == a.attr(k) || "false" == a.attr(v)
        } : b[e];
        if (/^(ch|di|in)/.test(d) && !active) p(a, e);
        else if (/^(un|en|de)/.test(d) && active) w(a, e);
        else if (d == E)
            for (var e in active) active[e] ? p(a, e, !0) : w(a, e, !0);
        else if (!c || "toggle" == d) {
            if (!c) a[r]("ifClicked");
            active ? b[l] !== x && w(a, e) : p(a, e)
        }
    }

    function p(a, c, d) {
        var b = a[0],
            e = a.parent(),
            g = c == j,
            H = c == k,
            m = H ? v : g ? I : "enabled",
            r = h(b, m + y(b[l])),
            L = h(b,
                c + y(b[l]));
        if (!0 !== b[c]) {
            if (!d && c == j && b[l] == x && b.name) {
                var p = a.closest("form"),
                    s = 'input[name="' + b.name + '"]',
                    s = p.length ? p.find(s) : f(s);
                s.each(function() {
                    this !== b && f.data(this, n) && w(f(this), c)
                })
            }
            H ? (b[c] = !0, b[j] && w(a, j, "force")) : (d || (b[c] = !0), g && b[k] && w(a, k, !1));
            J(a, g, c, d)
        }
        b[u] && h(b, z, !0) && e.find("." + F).css(z, "default");
        e[t](L || h(b, c));
        e[A](r || h(b, m) || "")
    }

    function w(a, c, d) {
        var b = a[0],
            e = a.parent(),
            g = c == j,
            f = c == k,
            m = f ? v : g ? I : "enabled",
            n = h(b, m + y(b[l])),
            p = h(b, c + y(b[l]));
        if (!1 !== b[c]) {
            if (f || !d || "force" == d) b[c] = !1;
            J(a, g, m, d)
        }!b[u] && h(b, z, !0) && e.find("." + F).css(z, "pointer");
        e[A](p || h(b, c) || "");
        e[t](n || h(b, m))
    }

    function K(a, c) {
        if (f.data(a, n)) {
            var d = f(a);
            d.parent().html(d.attr("style", f.data(a, n).s || "")[r](c || ""));
            d.off(".i").unwrap();
            f(D + '[for="' + a.id + '"]').add(d.closest(D)).off(".i")
        }
    }

    function h(a, c, d) {
        if (f.data(a, n)) return f.data(a, n).o[c + (d ? "" : "Class")]
    }

    function y(a) {
        return a.charAt(0).toUpperCase() + a.slice(1)
    }

    function J(a, c, d, b) {
        if (!b) {
            if (c) a[r]("ifToggled");
            a[r]("ifChanged")[r]("if" + y(d))
        }
    }
    var n = "iCheck",
        F = n + "-helper",
        x = "radio",
        j = "checked",
        I = "un" + j,
        u = "disabled",
        v = "determinate",
        k = "in" + v,
        E = "update",
        l = "type",
        t = "addClass",
        A = "removeClass",
        r = "trigger",
        D = "label",
        z = "cursor",
        G = /ipad|iphone|ipod|android|blackberry|windows phone|opera mini/i.test(navigator.userAgent);
    f.fn[n] = function(a, c) {
        var d = ":checkbox, :" + x,
            b = f(),
            e = function(a) {
                a.each(function() {
                    var a = f(this);
                    b = a.is(d) ? b.add(a) : b.add(a.find(d))
                })
            };
        if (/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(a)) return a = a.toLowerCase(),
            e(this), b.each(function() {
                "destroy" == a ? K(this, "ifDestroyed") : C(f(this), !0, a);
                f.isFunction(c) && c()
            });
        if ("object" == typeof a || !a) {
            var g = f.extend({
                    checkedClass: j,
                    disabledClass: u,
                    indeterminateClass: k,
                    labelHover: !0
                }, a),
                h = g.handle,
                m = g.hoverClass || "hover",
                y = g.focusClass || "focus",
                v = g.activeClass || "active",
                z = !!g.labelHover,
                s = g.labelHoverClass || "hover",
                B = ("" + g.increaseArea).replace("%", "") | 0;
            if ("checkbox" == h || h == x) d = ":" + h; - 50 > B && (B = -50);
            e(this);
            return b.each(function() {
                K(this);
                var a = f(this),
                    b = this,
                    c = b.id,
                    d = -B + "%",
                    e = 100 + 2 * B + "%",
                    e = {
                        position: "absolute",
                        top: d,
                        left: d,
                        display: "block",
                        width: e,
                        height: e,
                        margin: 0,
                        padding: 0,
                        background: "#fff",
                        border: 0,
                        opacity: 0
                    },
                    d = G ? {
                        position: "absolute",
                        visibility: "hidden"
                    } : B ? e : {
                        position: "absolute",
                        opacity: 0
                    },
                    h = "checkbox" == b[l] ? g.checkboxClass || "icheckbox" : g.radioClass || "i" + x,
                    k = f(D + '[for="' + c + '"]').add(a.closest(D)),
                    q = a.wrap('<div class="' + h + '"/>')[r]("ifCreated").parent().append(g.insert),
                    e = f('<ins class="' + F + '"/>').css(e).appendTo(q);
                a.data(n, {
                    o: g,
                    s: a.attr("style")
                }).css(d);
                g.inheritClass && q[t](b.className);
                g.inheritID && c && q.attr("id", n + "-" + c);
                "static" == q.css("position") && q.css("position", "relative");
                C(a, !0, E);
                if (k.length) k.on("click.i mouseenter.i mouseleave.i touchbegin.i touchend.i", function(c) {
                    var d = c[l],
                        e = f(this);
                    if (!b[u])
                        if ("click" == d ? C(a, !1, !0) : z && (/ve|nd/.test(d) ? (q[A](m), e[A](s)) : (q[t](m), e[t](s))), G) c.stopPropagation();
                        else return !1
                });
                a.on("click.i focus.i blur.i keyup.i keydown.i keypress.i", function(c) {
                    var d = c[l];
                    c = c.keyCode;
                    if ("click" == d) return !1;
                    if ("keydown" ==
                        d && 32 == c) return b[l] == x && b[j] || (b[j] ? w(a, j) : p(a, j)), !1;
                    if ("keyup" == d && b[l] == x) !b[j] && p(a, j);
                    else if (/us|ur/.test(d)) q["blur" == d ? A : t](y)
                });
                e.on("click mousedown mouseup mouseover mouseout touchbegin.i touchend.i", function(d) {
                    var c = d[l],
                        e = /wn|up/.test(c) ? v : m;
                    if (!b[u]) {
                        if ("click" == c) C(a, !1, !0);
                        else {
                            if (/wn|er|in/.test(c)) q[t](e);
                            else q[A](e + " " + v);
                            if (k.length && z && e == m) k[/ut|nd/.test(c) ? A : t](s)
                        }
                        if (G) d.stopPropagation();
                        else return !1
                    }
                })
            })
        }
        return this
    }
})(jQuery);; + function(a) {
    "use strict";
    var b = function(b, c) {
        this.options = c, this.$element = a(b), this.$backdrop = this.isShown = null, this.options.remote && this.$element.load(this.options.remote)
    };
    b.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, b.prototype.toggle = function(a) {
        return this[this.isShown ? "hide" : "show"](a)
    }, b.prototype.show = function(b) {
        var c = this,
            d = a.Event("show.bs.modal", {
                relatedTarget: b
            });
        this.$element.trigger(d);
        if (this.isShown || d.isDefaultPrevented()) return;
        this.isShown = !0, this.escape(), this.$element.on("click.dismiss.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.backdrop(function() {
            var d = a.support.transition && c.$element.hasClass("fade");
            c.$element.parent().length || c.$element.appendTo(document.body), c.$element.show(), d && c.$element[0].offsetWidth, c.$element.addClass("in").attr("aria-hidden", !1), c.enforceFocus();
            var e = a.Event("shown.bs.modal", {
                relatedTarget: b
            });
            d ? c.$element.find(".modal-dialog").one(a.support.transition.end, function() {
                c.$element.focus().trigger(e)
            }).emulateTransitionEnd(300) : c.$element.focus().trigger(e)
        })
    }, b.prototype.hide = function(b) {
        b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b);
        if (!this.isShown || b.isDefaultPrevented()) return;
        this.isShown = !1, this.escape(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one(a.support.transition.end, a.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal()
    }, b.prototype.enforceFocus = function() {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
            this.$element[0] !== a.target && !this.$element.has(a.target).length && this.$element.focus()
        }, this))
    }, b.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", a.proxy(function(a) {
            a.which == 27 && this.hide()
        }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
    }, b.prototype.hideModal = function() {
        var a = this;
        this.$element.hide(), this.backdrop(function() {
            a.removeBackdrop(), a.$element.trigger("hidden.bs.modal")
        })
    }, b.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, b.prototype.backdrop = function(b) {
        var c = this,
            d = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var e = a.support.transition && d;
            this.$backdrop = a('<div class="modal-backdrop ' + d + '" />').appendTo(document.body), this.$element.on("click.dismiss.modal", a.proxy(function(a) {
                if (a.target !== a.currentTarget) return;
                this.options.backdrop == "static" ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this)
            }, this)), e && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in");
            if (!b) return;
            e ? this.$backdrop.one(a.support.transition.end, b).emulateTransitionEnd(150) : b()
        } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(a.support.transition.end, b).emulateTransitionEnd(150) : b()) : b && b()
    };
    var c = a.fn.modal;
    a.fn.modal = function(c, d) {
        return this.each(function() {
            var e = a(this),
                f = e.data("bs.modal"),
                g = a.extend({}, b.DEFAULTS, e.data(), typeof c == "object" && c);
            f || e.data("bs.modal", f = new b(this, g)), typeof c == "string" ? f[c](d) : g.show && f.show(d)
        })
    }, a.fn.modal.Constructor = b, a.fn.modal.noConflict = function() {
        return a.fn.modal = c, this
    }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(b) {
        var c = a(this),
            d = c.attr("href"),
            e = a(c.attr("data-target") || d && d.replace(/.*(?=#[^\s]+$)/, "")),
            f = e.data("modal") ? "toggle" : a.extend({
                remote: !/#/.test(d) && d
            }, e.data(), c.data());
        b.preventDefault(), e.modal(f, this).one("hide", function() {
            c.is(":visible") && c.focus()
        })
    }), a(document).on("show.bs.modal", ".modal", function() {
        a(document.body).addClass("modal-open")
    }).on("hidden.bs.modal", ".modal", function() {
        a(document.body).removeClass("modal-open")
    })
}(jQuery);
(function(t) {
    "use strict";

    function e(t, e, r) {
        return t.addEventListener ? t.addEventListener(e, r, !1) : t.attachEvent ? t.attachEvent("on" + e, r) : void 0
    }

    function r(t, e) {
        var r, n;
        for (r = 0, n = t.length; n > r; r++)
            if (t[r] === e) return !0;
        return !1
    }

    function n(t, e) {
        var r;
        t.createTextRange ? (r = t.createTextRange(), r.move("character", e), r.select()) : t.selectionStart && (t.focus(), t.setSelectionRange(e, e))
    }

    function a(t, e) {
        try {
            return t.type = e, !0
        } catch (r) {
            return !1
        }
    }
    t.Placeholders = {
        Utils: {
            addEventListener: e,
            inArray: r,
            moveCaret: n,
            changeType: a
        }
    }
})(this),
function(t) {
    "use strict";

    function e() {}

    function r() {
        try {
            return document.activeElement
        } catch (t) {}
    }

    function n(t, e) {
        var r, n, a = !!e && t.value !== e,
            u = t.value === t.getAttribute(V);
        return (a || u) && "true" === t.getAttribute(P) ? (t.removeAttribute(P), t.value = t.value.replace(t.getAttribute(V), ""), t.className = t.className.replace(R, ""), n = t.getAttribute(z), parseInt(n, 10) >= 0 && (t.setAttribute("maxLength", n), t.removeAttribute(z)), r = t.getAttribute(D), r && (t.type = r), !0) : !1
    }

    function a(t) {
        var e, r, n = t.getAttribute(V);
        return "" === t.value && n ? (t.setAttribute(P, "true"), t.value = n, t.className += " " + I, r = t.getAttribute(z), r || (t.setAttribute(z, t.maxLength), t.removeAttribute("maxLength")), e = t.getAttribute(D), e ? t.type = "text" : "password" === t.type && K.changeType(t, "text") && t.setAttribute(D, "password"), !0) : !1
    }

    function u(t, e) {
        var r, n, a, u, i, l, o;
        if (t && t.getAttribute(V)) e(t);
        else
            for (a = t ? t.getElementsByTagName("input") : f, u = t ? t.getElementsByTagName("textarea") : h, r = a ? a.length : 0, n = u ? u.length : 0, o = 0, l = r + n; l > o; o++) i = r > o ? a[o] : u[o - r], e(i)
    }

    function i(t) {
        u(t, n)
    }

    function l(t) {
        u(t, a)
    }

    function o(t) {
        return function() {
            b && t.value === t.getAttribute(V) && "true" === t.getAttribute(P) ? K.moveCaret(t, 0) : n(t)
        }
    }

    function c(t) {
        return function() {
            a(t)
        }
    }

    function s(t) {
        return function(e) {
            return A = t.value, "true" === t.getAttribute(P) && A === t.getAttribute(V) && K.inArray(C, e.keyCode) ? (e.preventDefault && e.preventDefault(), !1) : void 0
        }
    }

    function d(t) {
        return function() {
            n(t, A), "" === t.value && (t.blur(), K.moveCaret(t, 0))
        }
    }

    function v(t) {
        return function() {
            t === r() && t.value === t.getAttribute(V) && "true" === t.getAttribute(P) && K.moveCaret(t, 0)
        }
    }

    function g(t) {
        return function() {
            i(t)
        }
    }

    function p(t) {
        t.form && (T = t.form, "string" == typeof T && (T = document.getElementById(T)), T.getAttribute(U) || (K.addEventListener(T, "submit", g(T)), T.setAttribute(U, "true"))), K.addEventListener(t, "focus", o(t)), K.addEventListener(t, "blur", c(t)), b && (K.addEventListener(t, "keydown", s(t)), K.addEventListener(t, "keyup", d(t)), K.addEventListener(t, "click", v(t))), t.setAttribute(j, "true"), t.setAttribute(V, x), (b || t !== r()) && a(t)
    }
    var f, h, b, m, A, y, E, x, L, T, S, N, w, B = ["text", "search", "url", "tel", "email", "password", "number", "textarea"],
        C = [27, 33, 34, 35, 36, 37, 38, 39, 40, 8, 46],
        k = "#ccc",
        I = "placeholdersjs",
        R = RegExp("(?:^|\\s)" + I + "(?!\\S)"),
        V = "data-placeholder-value",
        P = "data-placeholder-active",
        D = "data-placeholder-type",
        U = "data-placeholder-submit",
        j = "data-placeholder-bound",
        q = "data-placeholder-focus",
        Q = "data-placeholder-live",
        z = "data-placeholder-maxlength",
        F = document.createElement("input"),
        G = document.getElementsByTagName("head")[0],
        H = document.documentElement,
        J = t.Placeholders,
        K = J.Utils;
    if (J.nativeSupport = void 0 !== F.placeholder, !J.nativeSupport) {
        for (f = document.getElementsByTagName("input"), h = document.getElementsByTagName("textarea"), b = "false" === H.getAttribute(q), m = "false" !== H.getAttribute(Q), y = document.createElement("style"), y.type = "text/css", E = document.createTextNode("." + I + " { color:" + k + "; }"), y.styleSheet ? y.styleSheet.cssText = E.nodeValue : y.appendChild(E), G.insertBefore(y, G.firstChild), w = 0, N = f.length + h.length; N > w; w++) S = f.length > w ? f[w] : h[w - f.length], x = S.attributes.placeholder, x && (x = x.nodeValue, x && K.inArray(B, S.type) && p(S));
        L = setInterval(function() {
            for (w = 0, N = f.length + h.length; N > w; w++) S = f.length > w ? f[w] : h[w - f.length], x = S.attributes.placeholder, x ? (x = x.nodeValue, x && K.inArray(B, S.type) && (S.getAttribute(j) || p(S), (x !== S.getAttribute(V) || "password" === S.type && !S.getAttribute(D)) && ("password" === S.type && !S.getAttribute(D) && K.changeType(S, "text") && S.setAttribute(D, "password"), S.value === S.getAttribute(V) && (S.value = x), S.setAttribute(V, x)))) : S.getAttribute(P) && (n(S), S.removeAttribute(V));
            m || clearInterval(L)
        }, 100)
    }
    K.addEventListener(t, "beforeunload", function() {
        J.disable()
    }), J.disable = J.nativeSupport ? e : i, J.enable = J.nativeSupport ? e : l
}(this),
function(t) {
    "use strict";
    var e = t.fn.val,
        r = t.fn.prop;
    Placeholders.nativeSupport || (t.fn.val = function(t) {
        var r = e.apply(this, arguments),
            n = this.eq(0).data("placeholder-value");
        return void 0 === t && this.eq(0).data("placeholder-active") && r === n ? "" : r
    }, t.fn.prop = function(t, e) {
        return void 0 === e && this.eq(0).data("placeholder-active") && "value" === t ? "" : r.apply(this, arguments)
    })
}(jQuery);;
! function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e : e(jQuery)
}(function(e) {
    function t(t) {
        var s = t || window.event,
            a = h.call(arguments, 1),
            u = 0,
            r = 0,
            d = 0,
            f = 0;
        if (t = e.event.fix(s), t.type = "mousewheel", "detail" in s && (d = -1 * s.detail), "wheelDelta" in s && (d = s.wheelDelta), "wheelDeltaY" in s && (d = s.wheelDeltaY), "wheelDeltaX" in s && (r = -1 * s.wheelDeltaX), "axis" in s && s.axis === s.HORIZONTAL_AXIS && (r = -1 * d, d = 0), u = 0 === d ? r : d, "deltaY" in s && (d = -1 * s.deltaY, u = d), "deltaX" in s && (r = s.deltaX, 0 === d && (u = -1 * r)), 0 !== d || 0 !== r) {
            if (1 === s.deltaMode) {
                var c = e.data(this, "mousewheel-line-height");
                u *= c, d *= c, r *= c
            } else if (2 === s.deltaMode) {
                var m = e.data(this, "mousewheel-page-height");
                u *= m, d *= m, r *= m
            }
            return f = Math.max(Math.abs(d), Math.abs(r)), (!l || l > f) && (l = f, i(s, f) && (l /= 40)), i(s, f) && (u /= 40, r /= 40, d /= 40), u = Math[u >= 1 ? "floor" : "ceil"](u / l), r = Math[r >= 1 ? "floor" : "ceil"](r / l), d = Math[d >= 1 ? "floor" : "ceil"](d / l), t.deltaX = r, t.deltaY = d, t.deltaFactor = l, t.deltaMode = 0, a.unshift(t, u, r, d), o && clearTimeout(o), o = setTimeout(n, 200), (e.event.dispatch || e.event.handle).apply(this, a)
        }
    }

    function n() {
        l = null
    }

    function i(e, t) {
        return r.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 === 0
    }
    var o, l, s = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        a = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        h = Array.prototype.slice;
    if (e.event.fixHooks)
        for (var u = s.length; u;) e.event.fixHooks[s[--u]] = e.event.mouseHooks;
    var r = e.event.special.mousewheel = {
        version: "3.1.9",
        setup: function() {
            if (this.addEventListener)
                for (var n = a.length; n;) this.addEventListener(a[--n], t, !1);
            else this.onmousewheel = t;
            e.data(this, "mousewheel-line-height", r.getLineHeight(this)), e.data(this, "mousewheel-page-height", r.getPageHeight(this))
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var e = a.length; e;) this.removeEventListener(a[--e], t, !1);
            else this.onmousewheel = null
        },
        getLineHeight: function(t) {
            return parseInt(e(t)["offsetParent" in e.fn ? "offsetParent" : "parent"]().css("fontSize"), 10)
        },
        getPageHeight: function(t) {
            return e(t).height()
        },
        settings: {
            adjustOldDeltas: !0
        }
    };
    e.fn.extend({
        mousewheel: function(e) {
            return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
        },
        unmousewheel: function(e) {
            return this.unbind("mousewheel", e)
        }
    })
});;
(function() {
    ! function(a) {
        return a.easyPieChart = function(b, c) {
            var d, e, f, g, h, i, j, k = this;
            return this.el = b, this.$el = a(b), this.$el.data("easyPieChart", this), this.init = function() {
                var b;
                return k.options = a.extend({}, a.easyPieChart.defaultOptions, c), b = parseInt(k.$el.data("percent"), 10), k.percentage = 0, k.canvas = a("<canvas width='" + k.options.size + "' height='" + k.options.size + "'></canvas>").get(0), k.$el.append(k.canvas), "undefined" != typeof G_vmlCanvasManager && null !== G_vmlCanvasManager && G_vmlCanvasManager.initElement(k.canvas), k.ctx = k.canvas.getContext("2d"), window.devicePixelRatio > 1.5 && (a(k.canvas).css({
                    width: k.options.size,
                    height: k.options.size
                }), k.canvas.width *= 2, k.canvas.height *= 2, k.ctx.scale(2, 2)), k.ctx.translate(k.options.size / 2, k.options.size / 2), k.$el.addClass("easyPieChart"), k.$el.css({
                    width: k.options.size,
                    height: k.options.size,
                    lineHeight: "" + k.options.size + "px"
                }), k.update(b), k
            }, this.update = function(a) {
                return k.options.animate === !1 ? f(a) : e(k.percentage, a)
            }, i = function() {
                var a, b, c;
                for (k.ctx.fillStyle = k.options.scaleColor, k.ctx.lineWidth = 1, c = [], a = b = 0; 24 >= b; a = ++b) c.push(d(a));
                return c
            }, d = function(a) {
                var b;
                return b = a % 6 === 0 ? 0 : .017 * k.options.size, k.ctx.save(), k.ctx.rotate(a * Math.PI / 12), k.ctx.fillRect(k.options.size / 2 - b, 0, .05 * -k.options.size + b, 1), k.ctx.restore()
            }, j = function() {
                var a;
                return a = k.options.size / 2 - k.options.lineWidth / 2, k.options.scaleColor !== !1 && (a -= .08 * k.options.size), k.ctx.beginPath(), k.ctx.arc(0, 0, a, 0, 2 * Math.PI, !0), k.ctx.closePath(), k.ctx.strokeStyle = k.options.trackColor, k.ctx.lineWidth = k.options.lineWidth, k.ctx.stroke()
            }, h = function() {
                return k.options.scaleColor !== !1 && i(), k.options.trackColor !== !1 ? j() : void 0
            }, f = function(b) {
                var c;
                return h(), k.ctx.strokeStyle = a.isFunction(k.options.barColor) ? k.options.barColor(b) : k.options.barColor, k.ctx.lineCap = k.options.lineCap, k.ctx.lineWidth = k.options.lineWidth, c = k.options.size / 2 - k.options.lineWidth / 2, k.options.scaleColor !== !1 && (c -= .08 * k.options.size), k.ctx.save(), k.ctx.rotate(-Math.PI / 2), k.ctx.beginPath(), k.ctx.arc(0, 0, c, 0, 2 * Math.PI * b / 100, !1), k.ctx.stroke(), k.ctx.restore()
            }, e = function(a, b) {
                var c, d, e;
                return d = 30, e = d * k.options.animate / 1e3, c = 0, k.options.onStart.call(k), k.percentage = b, k.animation && (clearInterval(k.animation), k.animation = !1), k.animation = setInterval(function() {
                    return k.ctx.clearRect(-k.options.size / 2, -k.options.size / 2, k.options.size, k.options.size), h.call(k), f.call(k, [g(c, a, b - a, e)]), c++, c / e > 1 ? (clearInterval(k.animation), k.animation = !1, k.options.onStop.call(k)) : void 0
                }, 1e3 / d)
            }, g = function(a, b, c, d) {
                var e, f;
                return e = function(a) {
                    return Math.pow(a, 2)
                }, f = function(a) {
                    return 1 > a ? e(a) : 2 - e(a / 2 * -2 + 2)
                }, a /= d / 2, c / 2 * f(a) + b
            }, this.init()
        }, a.easyPieChart.defaultOptions = {
            onStart: a.noop,
            onStop: a.noop
        }, void(a.fn.easyPieChart = function(b) {
            return a.each(this, function(c, d) {
                var e;
                return e = a(d), e.data("easyPieChart") ? void 0 : e.data("easyPieChart", new a.easyPieChart(d, b))
            })
        })
    }(jQuery)
}).call(this);;
! function(a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define(b) : "undefined" != typeof exports ? module.exports = b() : a.simpleStorage = b()
}(this, function() {
    "use strict";

    function a() {
        p = j(), d(), g(), b(), "addEventListener" in window && window.addEventListener("pageshow", function(a) {
            a.persisted && c()
        }, !1), p = !0
    }

    function b() {
        "addEventListener" in window ? window.addEventListener("storage", c, !1) : document.attachEvent("onstorage", c)
    }

    function c() {
        try {
            d()
        } catch (a) {
            return void(p = !1)
        }
        g()
    }

    function d() {
        var a = localStorage.getItem("simpleStorage");
        try {
            n = JSON.parse(a) || {}
        } catch (b) {
            n = {}
        }
        o = f()
    }

    function e() {
        try {
            localStorage.setItem("simpleStorage", JSON.stringify(n)), o = f()
        } catch (a) {
            return k(a)
        }
        return !0
    }

    function f() {
        var a = localStorage.getItem("simpleStorage");
        return a ? String(a).length : 0
    }

    function g() {
        var a, b, c, d, f, h = 1 / 0,
            j = 0;
        if (clearTimeout(q), n && n.__simpleStorage_meta && n.__simpleStorage_meta.TTL) {
            for (a = +new Date, f = n.__simpleStorage_meta.TTL.keys || [], d = n.__simpleStorage_meta.TTL.expire || {}, b = 0, c = f.length; c > b; b++) {
                if (!(d[f[b]] <= a)) {
                    d[f[b]] < h && (h = d[f[b]]);
                    break
                }
                j++, delete n[f[b]], delete d[f[b]]
            }
            h !== 1 / 0 && (q = setTimeout(g, Math.min(h - a, 2147483647))), j && (f.splice(0, j), i(), e())
        }
    }

    function h(a, b) {
        var c, d, e = +new Date,
            f = !1;
        if (b = Number(b) || 0, 0 !== b) {
            if (!n.hasOwnProperty(a)) return !1;
            if (n.__simpleStorage_meta || (n.__simpleStorage_meta = {}), n.__simpleStorage_meta.TTL || (n.__simpleStorage_meta.TTL = {
                    expire: {},
                    keys: []
                }), n.__simpleStorage_meta.TTL.expire[a] = e + b, n.__simpleStorage_meta.TTL.expire.hasOwnProperty(a))
                for (c = 0, d = n.__simpleStorage_meta.TTL.keys.length; d > c; c++) n.__simpleStorage_meta.TTL.keys[c] === a && n.__simpleStorage_meta.TTL.keys.splice(c);
            for (c = 0, d = n.__simpleStorage_meta.TTL.keys.length; d > c; c++)
                if (n.__simpleStorage_meta.TTL.expire[n.__simpleStorage_meta.TTL.keys[c]] > e + b) {
                    n.__simpleStorage_meta.TTL.keys.splice(c, 0, a), f = !0;
                    break
                }
            f || n.__simpleStorage_meta.TTL.keys.push(a)
        } else if (n && n.__simpleStorage_meta && n.__simpleStorage_meta.TTL) {
            if (n.__simpleStorage_meta.TTL.expire.hasOwnProperty(a))
                for (delete n.__simpleStorage_meta.TTL.expire[a], c = 0, d = n.__simpleStorage_meta.TTL.keys.length; d > c; c++)
                    if (n.__simpleStorage_meta.TTL.keys[c] === a) {
                        n.__simpleStorage_meta.TTL.keys.splice(c, 1);
                        break
                    }
            i()
        }
        return clearTimeout(q), n && n.__simpleStorage_meta && n.__simpleStorage_meta.TTL && n.__simpleStorage_meta.TTL.keys.length && (q = setTimeout(g, Math.min(Math.max(n.__simpleStorage_meta.TTL.expire[n.__simpleStorage_meta.TTL.keys[0]] - e, 0), 2147483647))), !0
    }

    function i() {
        var a, b = !1,
            c = !1;
        if (!n || !n.__simpleStorage_meta) return b;
        n.__simpleStorage_meta.TTL && !n.__simpleStorage_meta.TTL.keys.length && (delete n.__simpleStorage_meta.TTL, b = !0);
        for (a in n.__simpleStorage_meta)
            if (n.__simpleStorage_meta.hasOwnProperty(a)) {
                c = !0;
                break
            }
        return c || (delete n.__simpleStorage_meta, b = !0), b
    }

    function j() {
        var a, b = 0;
        if (null === window.localStorage || "unknown" == typeof window.localStorage) throw a = new Error("localStorage is disabled"), a.code = t, a;
        if (!window.localStorage) throw a = new Error("localStorage not supported"), a.code = s, a;
        try {
            b = window.localStorage.length
        } catch (c) {
            throw k(c)
        }
        try {
            window.localStorage.setItem("__simpleStorageInitTest", Date.now().toString(16)), window.localStorage.removeItem("__simpleStorageInitTest")
        } catch (c) {
            throw b ? k(c) : (a = new Error("localStorage is disabled"), a.code = t, a)
        }
        return !0
    }

    function k(a) {
        var b;
        return 22 === a.code || 1014 === a.code || [-2147024882, -2146828281, -21474675259].indexOf(a.number) > 0 ? (b = new Error("localStorage quota exceeded"), b.code = u, b) : 18 === a.code || 1e3 === a.code ? (b = new Error("localStorage is disabled"), b.code = t, b) : "TypeError" === a.name ? (b = new Error("localStorage is disabled"), b.code = t, b) : a
    }

    function l(a) {
        if (!a) return r = "OK", a;
        switch (a.code) {
            case s:
            case t:
            case u:
                r = a.code;
                break;
            default:
                r = a.code || a.number || a.message || a.name
        }
        return a
    }
    var m = "0.2.1",
        n = !1,
        o = 0,
        p = !1,
        q = null,
        r = "OK",
        s = "LS_NOT_AVAILABLE",
        t = "LS_DISABLED",
        u = "LS_QUOTA_EXCEEDED";
    try {
        a()
    } catch (v) {
        l(v)
    }
    return {
        version: m,
        status: r,
        canUse: function() {
            return "OK" === r && !!p
        },
        set: function(a, b, c) {
            if ("__simpleStorage_meta" === a) return !1;
            if (!n) return !1;
            if ("undefined" == typeof b) return this.deleteKey(a);
            c = c || {};
            try {
                b = JSON.parse(JSON.stringify(b))
            } catch (d) {
                return k(d)
            }
            return n[a] = b, h(a, c.TTL || 0), e()
        },
        hasKey: function(a) {
            return n && n.hasOwnProperty(a) && "__simpleStorage_meta" !== a ? !0 : !1
        },
        get: function(a) {
            return n ? n.hasOwnProperty(a) && "__simpleStorage_meta" !== a && this.getTTL(a) ? n[a] : void 0 : !1
        },
        deleteKey: function(a) {
            return n && a in n ? (delete n[a], h(a, 0), e()) : !1
        },
        setTTL: function(a, b) {
            return n ? (h(a, b), e()) : !1
        },
        getTTL: function(a) {
            var b;
            return n && n.hasOwnProperty(a) ? n.__simpleStorage_meta && n.__simpleStorage_meta.TTL && n.__simpleStorage_meta.TTL.expire && n.__simpleStorage_meta.TTL.expire.hasOwnProperty(a) ? (b = Math.max(n.__simpleStorage_meta.TTL.expire[a] - +new Date || 0, 0), b || !1) : 1 / 0 : !1
        },
        flush: function() {
            if (!n) return !1;
            n = {};
            try {
                return localStorage.removeItem("simpleStorage"), !0
            } catch (a) {
                return k(a)
            }
        },
        index: function() {
            if (!n) return !1;
            var a, b = [];
            for (a in n) n.hasOwnProperty(a) && "__simpleStorage_meta" !== a && b.push(a);
            return b
        },
        storageSize: function() {
            return o
        }
    }
});;
! function() {
    var e = function(n) {
        return e.utils.extend({}, e.plugins, (new e.Storage).init(n))
    };
    e.version = "0.4.4", e.utils = {
        extend: function() {
            for (var e = "object" == typeof arguments[0] ? arguments[0] : {}, n = 1; n < arguments.length; n++)
                if (arguments[n] && "object" == typeof arguments[n])
                    for (var t in arguments[n]) e[t] = arguments[n][t];
            return e
        },
        each: function(e, n, t) {
            if (this.isArray(e)) {
                for (var i = 0; i < e.length; i++)
                    if (n.call(t, e[i], i) === !1) return
            } else if (e)
                for (var o in e)
                    if (n.call(t, e[o], o) === !1) return
        },
        tryEach: function(e, n, t, i) {
            this.each(e, function(e, o) {
                try {
                    return n.call(i, e, o)
                } catch (r) {
                    if (this.isFunction(t)) try {
                        t.call(i, e, o, r)
                    } catch (r) {}
                }
            }, this)
        },
        registerPlugin: function(n) {
            e.plugins = this.extend(n, e.plugins)
        },
        getTypeOf: function(e) {
            return "undefined" == typeof e || null === e ? "" + e : Object.prototype.toString.call(e).replace(/^\[object\s(.*)\]$/, function(e, n) {
                return n.toLowerCase()
            })
        }
    };
    for (var n = ["Arguments", "Boolean", "Function", "String", "Array", "Number", "Date", "RegExp", "Undefined", "Null"], t = 0; t < n.length; t++) e.utils["is" + n[t]] = function(n) {
        return function(t) {
            return e.utils.getTypeOf(t) === n.toLowerCase()
        }
    }(n[t]);
    e.plugins = {}, e.options = e.utils.extend({
        namespace: "b45i1",
        storages: ["local", "cookie", "session", "memory"],
        expireDays: 365
    }, window.Basil ? window.Basil.options : {}), e.Storage = function() {
        var n = "b45i1" + (Math.random() + 1).toString(36).substring(7),
            t = {},
            i = function(n) {
                var t = e.utils.getTypeOf(n);
                return "string" === t && n || "number" === t || "boolean" === t
            },
            o = function(n) {
                return e.utils.isArray(n) ? n : e.utils.isString(n) ? [n] : []
            },
            r = function(n, t) {
                var o = "";
                return i(t) ? o += t : e.utils.isArray(t) && (t = e.utils.isFunction(t.filter) ? t.filter(i) : t, o = t.join(".")), o && i(n) ? n + "." + o : o
            },
            s = function(e, n) {
                return i(e) ? n.replace(new RegExp("^" + e + "."), "") : n
            },
            u = function(e) {
                return JSON.stringify(e)
            },
            a = function(e) {
                return e ? JSON.parse(e) : null
            },
            c = {
                engine: null,
                check: function() {
                    try {
                        window[this.engine].setItem(n, !0), window[this.engine].removeItem(n)
                    } catch (e) {
                        return !1
                    }
                    return !0
                },
                set: function(e, n, t) {
                    if (!e) throw Error("invalid key");
                    window[this.engine].setItem(e, n)
                },
                get: function(e) {
                    return window[this.engine].getItem(e)
                },
                remove: function(e) {
                    window[this.engine].removeItem(e)
                },
                reset: function(e) {
                    for (var n, t = 0; t < window[this.engine].length; t++) n = window[this.engine].key(t), e && 0 !== n.indexOf(e) || (this.remove(n), t--)
                },
                keys: function(e) {
                    for (var n, t = [], i = 0; i < window[this.engine].length; i++) n = window[this.engine].key(i), e && 0 !== n.indexOf(e) || t.push(s(e, n));
                    return t
                }
            };
        return t.local = e.utils.extend({}, c, {
            engine: "localStorage"
        }), t.session = e.utils.extend({}, c, {
            engine: "sessionStorage"
        }), t.memory = {
            _hash: {},
            check: function() {
                return !0
            },
            set: function(e, n, t) {
                if (!e) throw Error("invalid key");
                this._hash[e] = n
            },
            get: function(e) {
                return this._hash[e] || null
            },
            remove: function(e) {
                delete this._hash[e]
            },
            reset: function(e) {
                for (var n in this._hash) e && 0 !== n.indexOf(e) || this.remove(n)
            },
            keys: function(e) {
                var n = [];
                for (var t in this._hash) e && 0 !== t.indexOf(e) || n.push(s(e, t));
                return n
            }
        }, t.cookie = {
            check: function() {
                if (!navigator.cookieEnabled) return !1;
                if (window.self !== window.top) {
                    var e = "thirdparty.check=" + Math.round(1e3 * Math.random());
                    return document.cookie = e + "; path=/", -1 !== document.cookie.indexOf(e)
                }
                return !0
            },
            set: function(e, n, t) {
                if (!this.check()) throw Error("cookies are disabled");
                if (t = t || {}, !e) throw Error("invalid key");
                var i = encodeURIComponent(e) + "=" + encodeURIComponent(n);
                if (t.expireDays) {
                    var o = new Date;
                    o.setTime(o.getTime() + 24 * t.expireDays * 60 * 60 * 1e3), i += "; expires=" + o.toGMTString()
                }
                if (t.domain && t.domain !== document.domain) {
                    var r = t.domain.replace(/^\./, "");
                    if (-1 === document.domain.indexOf(r) || r.split(".").length <= 1) throw Error("invalid domain");
                    i += "; domain=" + t.domain
                }
                t.secure === !0 && (i += "; secure"), document.cookie = i + "; path=/"
            },
            get: function(e) {
                if (!this.check()) throw Error("cookies are disabled");
                for (var n, t = encodeURIComponent(e), i = document.cookie ? document.cookie.split(";") : [], o = i.length - 1; o >= 0; o--)
                    if (n = i[o].replace(/^\s*/, ""), 0 === n.indexOf(t + "=")) return decodeURIComponent(n.substring(t.length + 1, n.length));
                return null
            },
            remove: function(e) {
                this.set(e, "", {
                    expireDays: -1
                });
                for (var n = document.domain.split("."), t = n.length; t >= 0; t--) this.set(e, "", {
                    expireDays: -1,
                    domain: "." + n.slice(-t).join(".")
                })
            },
            reset: function(e) {
                for (var n, t, i = document.cookie ? document.cookie.split(";") : [], o = 0; o < i.length; o++) n = i[o].replace(/^\s*/, ""), t = n.substr(0, n.indexOf("=")), e && 0 !== t.indexOf(e) || this.remove(t)
            },
            keys: function(e) {
                if (!this.check()) throw Error("cookies are disabled");
                for (var n, t, i = [], o = document.cookie ? document.cookie.split(";") : [], r = 0; r < o.length; r++) n = o[r].replace(/^\s*/, ""), t = decodeURIComponent(n.substr(0, n.indexOf("="))), e && 0 !== t.indexOf(e) || i.push(s(e, t));
                return i
            }
        }, {
            init: function(e) {
                return this.setOptions(e), this
            },
            setOptions: function(n) {
                this.options = e.utils.extend({}, this.options || e.options, n)
            },
            support: function(e) {
                return t.hasOwnProperty(e)
            },
            check: function(e) {
                return this.support(e) ? t[e].check() : !1
            },
            set: function(n, i, s) {
                if (s = e.utils.extend({}, this.options, s), !(n = r(s.namespace, n))) return !1;
                i = s.raw === !0 ? i : u(i);
                var a = null;
                return e.utils.tryEach(o(s.storages), function(e, o) {
                    return t[e].set(n, i, s), a = e, !1
                }, null, this), a ? (e.utils.tryEach(o(s.storages), function(e, i) {
                    e !== a && t[e].remove(n)
                }, null, this), !0) : !1
            },
            get: function(n, i) {
                if (i = e.utils.extend({}, this.options, i), !(n = r(i.namespace, n))) return null;
                var s = null;
                return e.utils.tryEach(o(i.storages), function(e, o) {
                    return null !== s ? !1 : (s = t[e].get(n, i) || null, void(s = i.raw === !0 ? s : a(s)))
                }, function(e, n, t) {
                    s = null
                }, this), s
            },
            remove: function(n, i) {
                i = e.utils.extend({}, this.options, i), (n = r(i.namespace, n)) && e.utils.tryEach(o(i.storages), function(e) {
                    t[e].remove(n)
                }, null, this)
            },
            reset: function(n) {
                n = e.utils.extend({}, this.options, n), e.utils.tryEach(o(n.storages), function(e) {
                    t[e].reset(n.namespace)
                }, null, this)
            },
            keys: function(e) {
                e = e || {};
                var n = [];
                for (var t in this.keysMap(e)) n.push(t);
                return n
            },
            keysMap: function(n) {
                n = e.utils.extend({}, this.options, n);
                var i = {};
                return e.utils.tryEach(o(n.storages), function(o) {
                    e.utils.each(t[o].keys(n.namespace), function(n) {
                        i[n] = e.utils.isArray(i[n]) ? i[n] : [], i[n].push(o)
                    }, this)
                }, null, this), i
            }
        }
    }, e.memory = (new e.Storage).init({
        storages: "memory",
        namespace: null,
        raw: !0
    }), e.cookie = (new e.Storage).init({
        storages: "cookie",
        namespace: null,
        raw: !0
    }), e.localStorage = (new e.Storage).init({
        storages: "local",
        namespace: null,
        raw: !0
    }), e.sessionStorage = (new e.Storage).init({
        storages: "session",
        namespace: null,
        raw: !0
    }), window.Basil = e, "function" == typeof define && define.amd ? define(function() {
        return e
    }) : "undefined" != typeof module && module.exports && (module.exports = e)
}();;
! function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.Pusher = e() : t.Pusher = e()
}(this, function() {
    return function(t) {
        function e(i) {
            if (n[i]) return n[i].exports;
            var o = n[i] = {
                exports: {},
                id: i,
                loaded: !1
            };
            return t[i].call(o.exports, o, o.exports, e), o.loaded = !0, o.exports
        }
        var n = {};
        return e.m = t, e.c = n, e.p = "", e(0)
    }([function(t, e, n) {
        "use strict";
        var i = n(1);
        t.exports = i["default"]
    }, function(t, e, n) {
        "use strict";

        function i(t) {
            if (null === t || void 0 === t) throw "You must pass your app key when you instantiate Pusher."
        }
        var o = n(2),
            r = n(9),
            s = n(23),
            a = n(38),
            c = n(39),
            u = n(40),
            l = n(12),
            h = n(5),
            f = n(62),
            p = n(8),
            d = n(42),
            y = function() {
                function t(e, n) {
                    var l = this;
                    i(e), n = n || {}, this.key = e, this.config = r.extend(f.getGlobalConfig(), n.cluster ? f.getClusterConfig(n.cluster) : {}, n), this.channels = d["default"].createChannels(), this.global_emitter = new s["default"], this.sessionID = Math.floor(1e9 * Math.random()), this.timeline = new a["default"](this.key, this.sessionID, {
                        cluster: this.config.cluster,
                        features: t.getClientFeatures(),
                        params: this.config.timelineParams || {},
                        limit: 50,
                        level: c["default"].INFO,
                        version: h["default"].VERSION
                    }), this.config.disableStats || (this.timelineSender = d["default"].createTimelineSender(this.timeline, {
                        host: this.config.statsHost,
                        path: "/timeline/v2/" + o["default"].TimelineTransport.name
                    }));
                    var y = function(t) {
                        var e = r.extend({}, l.config, t);
                        return u.build(o["default"].getDefaultStrategy(e), e)
                    };
                    this.connection = d["default"].createConnectionManager(this.key, r.extend({
                        getStrategy: y,
                        timeline: this.timeline,
                        activityTimeout: this.config.activity_timeout,
                        pongTimeout: this.config.pong_timeout,
                        unavailableTimeout: this.config.unavailable_timeout
                    }, this.config, {
                        encrypted: this.isEncrypted()
                    })), this.connection.bind("connected", function() {
                        l.subscribeAll(), l.timelineSender && l.timelineSender.send(l.connection.isEncrypted())
                    }), this.connection.bind("message", function(t) {
                        var e = 0 === t.event.indexOf("pusher_internal:");
                        if (t.channel) {
                            var n = l.channel(t.channel);
                            n && n.handleEvent(t.event, t.data)
                        }
                        e || l.global_emitter.emit(t.event, t.data)
                    }), this.connection.bind("disconnected", function() {
                        l.channels.disconnect()
                    }), this.connection.bind("error", function(t) {
                        p["default"].warn("Error", t)
                    }), t.instances.push(this), this.timeline.info({
                        instances: t.instances.length
                    }), t.isReady && this.connect()
                }
                return t.ready = function() {
                    t.isReady = !0;
                    for (var e = 0, n = t.instances.length; n > e; e++) t.instances[e].connect()
                }, t.log = function(e) {
                    var n = Function("return this")();
                    t.logToConsole && n.console && n.console.log && n.console.log(e)
                }, t.getClientFeatures = function() {
                    return r.keys(r.filterObject({
                        ws: o["default"].Transports.ws
                    }, function(t) {
                        return t.isSupported({})
                    }))
                }, t.prototype.channel = function(t) {
                    return this.channels.find(t)
                }, t.prototype.allChannels = function() {
                    return this.channels.all()
                }, t.prototype.connect = function() {
                    if (this.connection.connect(), this.timelineSender && !this.timelineSenderTimer) {
                        var t = this.connection.isEncrypted(),
                            e = this.timelineSender;
                        this.timelineSenderTimer = new l.PeriodicTimer(6e4, function() {
                            e.send(t)
                        })
                    }
                }, t.prototype.disconnect = function() {
                    this.connection.disconnect(), this.timelineSenderTimer && (this.timelineSenderTimer.ensureAborted(), this.timelineSenderTimer = null)
                }, t.prototype.bind = function(t, e) {
                    return this.global_emitter.bind(t, e), this
                }, t.prototype.bind_all = function(t) {
                    return this.global_emitter.bind_all(t), this
                }, t.prototype.subscribeAll = function() {
                    var t;
                    for (t in this.channels.channels) this.channels.channels.hasOwnProperty(t) && this.subscribe(t)
                }, t.prototype.subscribe = function(t) {
                    var e = this.channels.add(t, this);
                    return "connected" === this.connection.state && e.subscribe(), e
                }, t.prototype.unsubscribe = function(t) {
                    var e = this.channels.remove(t);
                    e && "connected" === this.connection.state && e.unsubscribe()
                }, t.prototype.send_event = function(t, e, n) {
                    return this.connection.send_event(t, e, n)
                }, t.prototype.isEncrypted = function() {
                    return "https:" === o["default"].getProtocol() ? !0 : Boolean(this.config.encrypted)
                }, t.instances = [], t.isReady = !1, t.logToConsole = !1, t.Runtime = o["default"], t.ScriptReceivers = o["default"].ScriptReceivers, t.DependenciesReceivers = o["default"].DependenciesReceivers, t.auth_callbacks = o["default"].auth_callbacks, t
            }();
        e.__esModule = !0, e["default"] = y, o["default"].setup(y)
    }, function(t, e, n) {
        "use strict";
        var i = n(3),
            o = n(7),
            r = n(14),
            s = n(15),
            a = n(16),
            c = n(4),
            u = n(17),
            l = n(18),
            h = n(25),
            f = n(26),
            p = n(27),
            d = n(28),
            y = {
                nextAuthCallbackID: 1,
                auth_callbacks: {},
                ScriptReceivers: c.ScriptReceivers,
                DependenciesReceivers: i.DependenciesReceivers,
                getDefaultStrategy: f["default"],
                Transports: l["default"],
                transportConnectionInitializer: p["default"],
                HTTPFactory: d["default"],
                TimelineTransport: u["default"],
                getXHRAPI: function() {
                    return window.XMLHttpRequest
                },
                getWebSocketAPI: function() {
                    return window.WebSocket || window.MozWebSocket
                },
                setup: function(t) {
                    var e = this;
                    window.Pusher = t;
                    var n = function() {
                        e.onDocumentBody(t.ready)
                    };
                    window.JSON ? n() : i.Dependencies.load("json2", {}, n)
                },
                getDocument: function() {
                    return document
                },
                getProtocol: function() {
                    return this.getDocument().location.protocol
                },
                getGlobal: function() {
                    return window
                },
                getAuthorizers: function() {
                    return {
                        ajax: o["default"],
                        jsonp: r["default"]
                    }
                },
                onDocumentBody: function(t) {
                    var e = this;
                    document.body ? t() : setTimeout(function() {
                        e.onDocumentBody(t)
                    }, 0)
                },
                createJSONPRequest: function(t, e) {
                    return new a["default"](t, e)
                },
                createScriptRequest: function(t) {
                    return new s["default"](t)
                },
                getLocalStorage: function() {
                    try {
                        return window.localStorage
                    } catch (t) {
                        return
                    }
                },
                createXHR: function() {
                    return this.getXHRAPI() ? this.createXMLHttpRequest() : this.createMicrosoftXHR()
                },
                createXMLHttpRequest: function() {
                    var t = this.getXHRAPI();
                    return new t
                },
                createMicrosoftXHR: function() {
                    return new ActiveXObject("Microsoft.XMLHTTP")
                },
                getNetwork: function() {
                    return h.Network
                },
                createWebSocket: function(t) {
                    var e = this.getWebSocketAPI();
                    return new e(t)
                },
                createSocketRequest: function(t, e) {
                    if (this.isXHRSupported()) return this.HTTPFactory.createXHR(t, e);
                    if (this.isXDRSupported(0 === e.indexOf("https:"))) return this.HTTPFactory.createXDR(t, e);
                    throw "Cross-origin HTTP requests are not supported"
                },
                isXHRSupported: function() {
                    var t = this.getXHRAPI();
                    return Boolean(t) && void 0 !== (new t).withCredentials
                },
                isXDRSupported: function(t) {
                    var e = t ? "https:" : "http:",
                        n = this.getProtocol();
                    return Boolean(window.XDomainRequest) && n === e
                },
                addUnloadListener: function(t) {
                    void 0 !== window.addEventListener ? window.addEventListener("unload", t, !1) : void 0 !== window.attachEvent && window.attachEvent("onunload", t)
                },
                removeUnloadListener: function(t) {
                    void 0 !== window.addEventListener ? window.removeEventListener("unload", t, !1) : void 0 !== window.detachEvent && window.detachEvent("onunload", t)
                }
            };
        e.__esModule = !0, e["default"] = y
    }, function(t, e, n) {
        "use strict";
        var i = n(4),
            o = n(5),
            r = n(6);
        e.DependenciesReceivers = new i.ScriptReceiverFactory("_pusher_dependencies", "Pusher.DependenciesReceivers"), e.Dependencies = new r["default"]({
            cdn_http: o["default"].cdn_http,
            cdn_https: o["default"].cdn_https,
            version: o["default"].VERSION,
            suffix: o["default"].dependency_suffix,
            receivers: e.DependenciesReceivers
        })
    }, function(t, e) {
        "use strict";
        var n = function() {
            function t(t, e) {
                this.lastId = 0, this.prefix = t, this.name = e
            }
            return t.prototype.create = function(t) {
                this.lastId++;
                var e = this.lastId,
                    n = this.prefix + e,
                    i = this.name + "[" + e + "]",
                    o = !1,
                    r = function() {
                        o || (t.apply(null, arguments), o = !0)
                    };
                return this[e] = r, {
                    number: e,
                    id: n,
                    name: i,
                    callback: r
                }
            }, t.prototype.remove = function(t) {
                delete this[t.number]
            }, t
        }();
        e.ScriptReceiverFactory = n, e.ScriptReceivers = new n("_pusher_script_", "Pusher.ScriptReceivers")
    }, function(t, e) {
        "use strict";
        var n = {
            VERSION: "3.1.0",
            PROTOCOL: 7,
            host: "ws.pusherapp.com",
            ws_port: 80,
            wss_port: 443,
            sockjs_host: "sockjs.pusher.com",
            sockjs_http_port: 80,
            sockjs_https_port: 443,
            sockjs_path: "/pusher",
            stats_host: "stats.pusher.com",
            channel_auth_endpoint: "/pusher/auth",
            channel_auth_transport: "ajax",
            activity_timeout: 12e4,
            pong_timeout: 3e4,
            unavailable_timeout: 1e4,
            cdn_http: "http://js.pusher.com",
            cdn_https: "https://js.pusher.com",
            dependency_suffix: ".min"
        };
        e.__esModule = !0, e["default"] = n
    }, function(t, e, n) {
        "use strict";
        var i = n(4),
            o = n(2),
            r = function() {
                function t(t) {
                    this.options = t, this.receivers = t.receivers || i.ScriptReceivers, this.loading = {}
                }
                return t.prototype.load = function(t, e, n) {
                    var i = this;
                    if (i.loading[t] && i.loading[t].length > 0) i.loading[t].push(n);
                    else {
                        i.loading[t] = [n];
                        var r = o["default"].createScriptRequest(i.getPath(t, e)),
                            s = i.receivers.create(function(e) {
                                if (i.receivers.remove(s), i.loading[t]) {
                                    var n = i.loading[t];
                                    delete i.loading[t];
                                    for (var o = function(t) {
                                            t || r.cleanup()
                                        }, a = 0; a < n.length; a++) n[a](e, o)
                                }
                            });
                        r.send(s)
                    }
                }, t.prototype.getRoot = function(t) {
                    var e, n = o["default"].getDocument().location.protocol;
                    return e = t && t.encrypted || "https:" === n ? this.options.cdn_https : this.options.cdn_http, e.replace(/\/*$/, "") + "/" + this.options.version
                }, t.prototype.getPath = function(t, e) {
                    return this.getRoot(e) + "/" + t + this.options.suffix + ".js"
                }, t
            }();
        e.__esModule = !0, e["default"] = r
    }, function(t, e, n) {
        "use strict";
        var i = n(8),
            o = n(2),
            r = function(t, e, n) {
                var r, s = this;
                r = o["default"].createXHR(), r.open("POST", s.options.authEndpoint, !0), r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                for (var a in this.authOptions.headers) r.setRequestHeader(a, this.authOptions.headers[a]);
                return r.onreadystatechange = function() {
                    if (4 === r.readyState)
                        if (200 === r.status) {
                            var t, e = !1;
                            try {
                                t = JSON.parse(r.responseText), e = !0
                            } catch (o) {
                                n(!0, "JSON returned from webapp was invalid, yet status code was 200. Data was: " + r.responseText)
                            }
                            e && n(!1, t)
                        } else i["default"].warn("Couldn't get auth info from your webapp", r.status), n(!0, r.status)
                }, r.send(this.composeQuery(e)), r
            };
        e.__esModule = !0, e["default"] = r
    }, function(t, e, n) {
        "use strict";
        var i = n(9),
            o = n(1),
            r = {
                debug: function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e - 0] = arguments[e];
                    o["default"].log && o["default"].log(i.stringify.apply(this, arguments))
                },
                warn: function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e - 0] = arguments[e];
                    var n = i.stringify.apply(this, arguments),
                        r = Function("return this")();
                    r.console && (r.console.warn ? r.console.warn(n) : r.console.log && r.console.log(n)), o["default"].log && o["default"].log(n)
                }
            };
        e.__esModule = !0, e["default"] = r
    }, function(t, e, n) {
        "use strict";

        function i(t) {
            for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            for (var o = 0; o < e.length; o++) {
                var r = e[o];
                for (var s in r) r[s] && r[s].constructor && r[s].constructor === Object ? t[s] = i(t[s] || {}, r[s]) : t[s] = r[s]
            }
            return t
        }

        function o() {
            for (var t = ["Pusher"], e = 0; e < arguments.length; e++) "string" == typeof arguments[e] ? t.push(arguments[e]) : t.push(JSON.stringify(arguments[e]));
            return t.join(" : ")
        }

        function r(t, e) {
            var n = Array.prototype.indexOf;
            if (null === t) return -1;
            if (n && t.indexOf === n) return t.indexOf(e);
            for (var i = 0, o = t.length; o > i; i++)
                if (t[i] === e) return i;
            return -1
        }

        function s(t, e) {
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e(t[n], n, t)
        }

        function a(t) {
            var e = [];
            return s(t, function(t, n) {
                e.push(n)
            }), e
        }

        function c(t) {
            var e = [];
            return s(t, function(t) {
                e.push(t)
            }), e
        }

        function u(t, e, n) {
            for (var i = 0; i < t.length; i++) e.call(n || w, t[i], i, t)
        }

        function l(t, e) {
            for (var n = [], i = 0; i < t.length; i++) n.push(e(t[i], i, t, n));
            return n
        }

        function h(t, e) {
            var n = {};
            return s(t, function(t, i) {
                n[i] = e(t)
            }), n
        }

        function f(t, e) {
            e = e || function(t) {
                return !!t
            };
            for (var n = [], i = 0; i < t.length; i++) e(t[i], i, t, n) && n.push(t[i]);
            return n
        }

        function p(t, e) {
            var n = {};
            return s(t, function(i, o) {
                (e && e(i, o, t, n) || Boolean(i)) && (n[o] = i)
            }), n
        }

        function d(t) {
            var e = [];
            return s(t, function(t, n) {
                e.push([n, t])
            }), e
        }

        function y(t, e) {
            for (var n = 0; n < t.length; n++)
                if (e(t[n], n, t)) return !0;
            return !1
        }

        function m(t, e) {
            for (var n = 0; n < t.length; n++)
                if (!e(t[n], n, t)) return !1;
            return !0
        }

        function v(t) {
            return h(t, function(t) {
                return "object" == typeof t && (t = JSON.stringify(t)), encodeURIComponent(b["default"](t.toString()))
            })
        }

        function g(t) {
            var e = p(t, function(t) {
                    return void 0 !== t
                }),
                n = l(d(v(e)), k["default"].method("join", "=")).join("&");
            return n
        }

        function _(t) {
            var e = [],
                n = JSON.stringify(t, function(t, n) {
                    if ("object" == typeof n && null !== n) {
                        if (-1 !== e.indexOf(n)) return;
                        e.push(n)
                    }
                    return n
                });
            return e = null, n
        }
        var b = n(10),
            k = n(11),
            w = Function("return this")();
        e.extend = i, e.stringify = o, e.arrayIndexOf = r, e.objectApply = s, e.keys = a, e.values = c, e.apply = u, e.map = l, e.mapObject = h, e.filter = f, e.filterObject = p, e.flatten = d, e.any = y, e.all = m, e.encodeParamsObject = v, e.buildQueryString = g, e.safeJSONStringify = _
    }, function(t, e) {
        "use strict";

        function n(t) {
            return f(l(t))
        }
        var i = Function("return this")();
        e.__esModule = !0, e["default"] = n;
        for (var o = String.fromCharCode, r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = {}, a = 0, c = r.length; c > a; a++) s[r.charAt(a)] = a;
        var u = function(t) {
                var e = t.charCodeAt(0);
                return 128 > e ? t : 2048 > e ? o(192 | e >>> 6) + o(128 | 63 & e) : o(224 | e >>> 12 & 15) + o(128 | e >>> 6 & 63) + o(128 | 63 & e)
            },
            l = function(t) {
                return t.replace(/[^\x00-\x7F]/g, u)
            },
            h = function(t) {
                var e = [0, 2, 1][t.length % 3],
                    n = t.charCodeAt(0) << 16 | (t.length > 1 ? t.charCodeAt(1) : 0) << 8 | (t.length > 2 ? t.charCodeAt(2) : 0),
                    i = [r.charAt(n >>> 18), r.charAt(n >>> 12 & 63), e >= 2 ? "=" : r.charAt(n >>> 6 & 63), e >= 1 ? "=" : r.charAt(63 & n)];
                return i.join("")
            },
            f = i.btoa || function(t) {
                return t.replace(/[\s\S]{1,3}/g, h)
            }
    }, function(t, e, n) {
        "use strict";
        var i = n(12),
            o = {
                getGlobal: function() {
                    return Function("return this")()
                },
                now: function() {
                    return Date.now ? Date.now() : (new Date).valueOf()
                },
                defer: function(t) {
                    return new i.OneOffTimer(0, t)
                },
                method: function(t) {
                    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                    var i = Array.prototype.slice.call(arguments, 1);
                    return function(e) {
                        return e[t].apply(e, i.concat(arguments))
                    }
                }
            };
        e.__esModule = !0, e["default"] = o
    }, function(t, e, n) {
        "use strict";

        function i(t) {
            a.clearTimeout(t)
        }

        function o(t) {
            a.clearInterval(t)
        }
        var r = this && this.__extends || function(t, e) {
                function n() {
                    this.constructor = t
                }
                for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            },
            s = n(13),
            a = Function("return this")(),
            c = function(t) {
                function e(e, n) {
                    t.call(this, setTimeout, i, e, function(t) {
                        return n(), null
                    })
                }
                return r(e, t), e
            }(s["default"]);
        e.OneOffTimer = c;
        var u = function(t) {
            function e(e, n) {
                t.call(this, setInterval, o, e, function(t) {
                    return n(), t
                })
            }
            return r(e, t), e
        }(s["default"]);
        e.PeriodicTimer = u
    }, function(t, e) {
        "use strict";
        var n = function() {
            function t(t, e, n, i) {
                var o = this;
                this.clear = e, this.timer = t(function() {
                    o.timer && (o.timer = i(o.timer))
                }, n)
            }
            return t.prototype.isRunning = function() {
                return null !== this.timer
            }, t.prototype.ensureAborted = function() {
                this.timer && (this.clear(this.timer), this.timer = null)
            }, t
        }();
        e.__esModule = !0, e["default"] = n
    }, function(t, e, n) {
        "use strict";
        var i = n(8),
            o = function(t, e, n) {
                void 0 !== this.authOptions.headers && i["default"].warn("Warn", "To send headers with the auth request, you must use AJAX, rather than JSONP.");
                var o = t.nextAuthCallbackID.toString();
                t.nextAuthCallbackID++;
                var r = t.getDocument(),
                    s = r.createElement("script");
                t.auth_callbacks[o] = function(t) {
                    n(!1, t)
                };
                var a = "Pusher.auth_callbacks['" + o + "']";
                s.src = this.options.authEndpoint + "?callback=" + encodeURIComponent(a) + "&" + this.composeQuery(e);
                var c = r.getElementsByTagName("head")[0] || r.documentElement;
                c.insertBefore(s, c.firstChild)
            };
        e.__esModule = !0, e["default"] = o
    }, function(t, e) {
        "use strict";
        var n = function() {
            function t(t) {
                this.src = t
            }
            return t.prototype.send = function(t) {
                var e = this,
                    n = "Error loading " + e.src;
                e.script = document.createElement("script"), e.script.id = t.id, e.script.src = e.src, e.script.type = "text/javascript", e.script.charset = "UTF-8", e.script.addEventListener ? (e.script.onerror = function() {
                    t.callback(n)
                }, e.script.onload = function() {
                    t.callback(null)
                }) : e.script.onreadystatechange = function() {
                    ("loaded" === e.script.readyState || "complete" === e.script.readyState) && t.callback(null)
                }, void 0 === e.script.async && document.attachEvent && /opera/i.test(navigator.userAgent) ? (e.errorScript = document.createElement("script"), e.errorScript.id = t.id + "_error", e.errorScript.text = t.name + "('" + n + "');", e.script.async = e.errorScript.async = !1) : e.script.async = !0;
                var i = document.getElementsByTagName("head")[0];
                i.insertBefore(e.script, i.firstChild), e.errorScript && i.insertBefore(e.errorScript, e.script.nextSibling)
            }, t.prototype.cleanup = function() {
                this.script && (this.script.onload = this.script.onerror = null, this.script.onreadystatechange = null), this.script && this.script.parentNode && this.script.parentNode.removeChild(this.script), this.errorScript && this.errorScript.parentNode && this.errorScript.parentNode.removeChild(this.errorScript), this.script = null, this.errorScript = null
            }, t
        }();
        e.__esModule = !0, e["default"] = n
    }, function(t, e, n) {
        "use strict";
        var i = n(9),
            o = n(2),
            r = function() {
                function t(t, e) {
                    this.url = t, this.data = e
                }
                return t.prototype.send = function(t) {
                    if (!this.request) {
                        var e = i.buildQueryString(this.data),
                            n = this.url + "/" + t.number + "?" + e;
                        this.request = o["default"].createScriptRequest(n), this.request.send(t)
                    }
                }, t.prototype.cleanup = function() {
                    this.request && this.request.cleanup()
                }, t
            }();
        e.__esModule = !0, e["default"] = r
    }, function(t, e, n) {
        "use strict";
        var i = n(2),
            o = n(4),
            r = function(t, e) {
                return function(n, r) {
                    var s = "http" + (e ? "s" : "") + "://",
                        a = s + (t.host || t.options.host) + t.options.path,
                        c = i["default"].createJSONPRequest(a, n),
                        u = i["default"].ScriptReceivers.create(function(e, n) {
                            o.ScriptReceivers.remove(u), c.cleanup(), n && n.host && (t.host = n.host), r && r(e, n)
                        });
                    c.send(u)
                }
            },
            s = {
                name: "jsonp",
                getAgent: r
            };
        e.__esModule = !0, e["default"] = s
    }, function(t, e, n) {
        "use strict";
        var i = n(19),
            o = n(21),
            r = n(20),
            s = n(2),
            a = n(3),
            c = n(9),
            u = new o["default"]({
                file: "sockjs",
                urls: r.sockjs,
                handlesActivityChecks: !0,
                supportsPing: !1,
                isSupported: function() {
                    return !0
                },
                isInitialized: function() {
                    return void 0 !== window.SockJS
                },
                getSocket: function(t, e) {
                    return new window.SockJS(t, null, {
                        js_path: a.Dependencies.getPath("sockjs", {
                            encrypted: e.encrypted
                        }),
                        ignore_null_origin: e.ignoreNullOrigin
                    })
                },
                beforeOpen: function(t, e) {
                    t.send(JSON.stringify({
                        path: e
                    }))
                }
            }),
            l = {
                isSupported: function(t) {
                    var e = s["default"].isXDRSupported(t.encrypted);
                    return e
                }
            },
            h = new o["default"](c.extend({}, i.streamingConfiguration, l)),
            f = new o["default"](c.extend({}, i.pollingConfiguration, l));
        i["default"].xdr_streaming = h, i["default"].xdr_polling = f, i["default"].sockjs = u, e.__esModule = !0, e["default"] = i["default"]
    }, function(t, e, n) {
        "use strict";
        var i = n(20),
            o = n(21),
            r = n(9),
            s = n(2),
            a = new o["default"]({
                urls: i.ws,
                handlesActivityChecks: !1,
                supportsPing: !1,
                isInitialized: function() {
                    return Boolean(s["default"].getWebSocketAPI())
                },
                isSupported: function() {
                    return Boolean(s["default"].getWebSocketAPI())
                },
                getSocket: function(t) {
                    return s["default"].createWebSocket(t)
                }
            }),
            c = {
                urls: i.http,
                handlesActivityChecks: !1,
                supportsPing: !0,
                isInitialized: function() {
                    return !0
                }
            };
        e.streamingConfiguration = r.extend({
            getSocket: function(t) {
                return s["default"].HTTPFactory.createStreamingSocket(t)
            }
        }, c), e.pollingConfiguration = r.extend({
            getSocket: function(t) {
                return s["default"].HTTPFactory.createPollingSocket(t)
            }
        }, c);
        var u = {
                isSupported: function() {
                    return s["default"].isXHRSupported()
                }
            },
            l = new o["default"](r.extend({}, e.streamingConfiguration, u)),
            h = new o["default"](r.extend({}, e.pollingConfiguration, u)),
            f = {
                ws: a,
                xhr_streaming: l,
                xhr_polling: h
            };
        e.__esModule = !0, e["default"] = f
    }, function(t, e, n) {
        "use strict";

        function i(t, e, n) {
            var i = t + (e.encrypted ? "s" : ""),
                o = e.encrypted ? e.hostEncrypted : e.hostUnencrypted;
            return i + "://" + o + n
        }

        function o(t, e) {
            var n = "/app/" + t,
                i = "?protocol=" + r["default"].PROTOCOL + "&client=js&version=" + r["default"].VERSION + (e ? "&" + e : "");
            return n + i
        }
        var r = n(5);
        e.ws = {
            getInitial: function(t, e) {
                return i("ws", e, o(t, "flash=false"))
            }
        }, e.http = {
            getInitial: function(t, e) {
                var n = (e.httpPath || "/pusher") + o(t);
                return i("http", e, n)
            }
        }, e.sockjs = {
            getInitial: function(t, e) {
                return i("http", e, e.httpPath || "/pusher")
            },
            getPath: function(t, e) {
                return o(t)
            }
        }
    }, function(t, e, n) {
        "use strict";
        var i = n(22),
            o = function() {
                function t(t) {
                    this.hooks = t
                }
                return t.prototype.isSupported = function(t) {
                    return this.hooks.isSupported(t)
                }, t.prototype.createConnection = function(t, e, n, o) {
                    return new i["default"](this.hooks, t, e, n, o)
                }, t
            }();
        e.__esModule = !0, e["default"] = o
    }, function(t, e, n) {
        "use strict";
        var i = this && this.__extends || function(t, e) {
                function n() {
                    this.constructor = t
                }
                for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            },
            o = n(11),
            r = n(9),
            s = n(23),
            a = n(8),
            c = n(2),
            u = function(t) {
                function e(e, n, i, o, r) {
                    t.call(this), this.initialize = c["default"].transportConnectionInitializer, this.hooks = e, this.name = n, this.priority = i, this.key = o, this.options = r, this.state = "new", this.timeline = r.timeline, this.activityTimeout = r.activityTimeout, this.id = this.timeline.generateUniqueID()
                }
                return i(e, t), e.prototype.handlesActivityChecks = function() {
                    return Boolean(this.hooks.handlesActivityChecks)
                }, e.prototype.supportsPing = function() {
                    return Boolean(this.hooks.supportsPing)
                }, e.prototype.connect = function() {
                    var t = this;
                    if (this.socket || "initialized" !== this.state) return !1;
                    var e = this.hooks.urls.getInitial(this.key, this.options);
                    try {
                        this.socket = this.hooks.getSocket(e, this.options)
                    } catch (n) {
                        return o["default"].defer(function() {
                            t.onError(n), t.changeState("closed")
                        }), !1
                    }
                    return this.bindListeners(), a["default"].debug("Connecting", {
                        transport: this.name,
                        url: e
                    }), this.changeState("connecting"), !0
                }, e.prototype.close = function() {
                    return this.socket ? (this.socket.close(), !0) : !1
                }, e.prototype.send = function(t) {
                    var e = this;
                    return "open" === this.state ? (o["default"].defer(function() {
                        e.socket && e.socket.send(t)
                    }), !0) : !1
                }, e.prototype.ping = function() {
                    "open" === this.state && this.supportsPing() && this.socket.ping()
                }, e.prototype.onOpen = function() {
                    this.hooks.beforeOpen && this.hooks.beforeOpen(this.socket, this.hooks.urls.getPath(this.key, this.options)), this.changeState("open"), this.socket.onopen = void 0
                }, e.prototype.onError = function(t) {
                    this.emit("error", {
                        type: "WebSocketError",
                        error: t
                    }), this.timeline.error(this.buildTimelineMessage({
                        error: t.toString()
                    }))
                }, e.prototype.onClose = function(t) {
                    t ? this.changeState("closed", {
                        code: t.code,
                        reason: t.reason,
                        wasClean: t.wasClean
                    }) : this.changeState("closed"), this.unbindListeners(), this.socket = void 0
                }, e.prototype.onMessage = function(t) {
                    this.emit("message", t)
                }, e.prototype.onActivity = function() {
                    this.emit("activity")
                }, e.prototype.bindListeners = function() {
                    var t = this;
                    this.socket.onopen = function() {
                        t.onOpen()
                    }, this.socket.onerror = function(e) {
                        t.onError(e)
                    }, this.socket.onclose = function(e) {
                        t.onClose(e)
                    }, this.socket.onmessage = function(e) {
                        t.onMessage(e)
                    }, this.supportsPing() && (this.socket.onactivity = function() {
                        t.onActivity()
                    })
                }, e.prototype.unbindListeners = function() {
                    this.socket && (this.socket.onopen = void 0, this.socket.onerror = void 0, this.socket.onclose = void 0, this.socket.onmessage = void 0, this.supportsPing() && (this.socket.onactivity = void 0))
                }, e.prototype.changeState = function(t, e) {
                    this.state = t, this.timeline.info(this.buildTimelineMessage({
                        state: t,
                        params: e
                    })), this.emit(t, e)
                }, e.prototype.buildTimelineMessage = function(t) {
                    return r.extend({
                        cid: this.id
                    }, t)
                }, e
            }(s["default"]);
        e.__esModule = !0, e["default"] = u
    }, function(t, e, n) {
        "use strict";
        var i = n(24),
            o = Function("return this")(),
            r = function() {
                function t(t) {
                    this.callbacks = new i["default"], this.global_callbacks = [], this.failThrough = t
                }
                return t.prototype.bind = function(t, e, n) {
                    return this.callbacks.add(t, e, n), this
                }, t.prototype.bind_all = function(t) {
                    return this.global_callbacks.push(t), this
                }, t.prototype.unbind = function(t, e, n) {
                    return this.callbacks.remove(t, e, n), this
                }, t.prototype.unbind_all = function(t, e) {
                    return this.callbacks.remove(t, e), this
                }, t.prototype.emit = function(t, e) {
                    var n;
                    for (n = 0; n < this.global_callbacks.length; n++) this.global_callbacks[n](t, e);
                    var i = this.callbacks.get(t);
                    if (i && i.length > 0)
                        for (n = 0; n < i.length; n++) i[n].fn.call(i[n].context || o, e);
                    else this.failThrough && this.failThrough(t, e);
                    return this
                }, t
            }();
        e.__esModule = !0, e["default"] = r
    }, function(t, e, n) {
        "use strict";

        function i(t) {
            return "_" + t
        }
        var o = n(9),
            r = function() {
                function t() {
                    this._callbacks = {}
                }
                return t.prototype.get = function(t) {
                    return this._callbacks[i(t)]
                }, t.prototype.add = function(t, e, n) {
                    var o = i(t);
                    this._callbacks[o] = this._callbacks[o] || [], this._callbacks[o].push({
                        fn: e,
                        context: n
                    })
                }, t.prototype.remove = function(t, e, n) {
                    if (!t && !e && !n) return void(this._callbacks = {});
                    var r = t ? [i(t)] : o.keys(this._callbacks);
                    e || n ? this.removeCallback(r, e, n) : this.removeAllCallbacks(r)
                }, t.prototype.removeCallback = function(t, e, n) {
                    o.apply(t, function(t) {
                        this._callbacks[t] = o.filter(this._callbacks[t] || [], function(t) {
                            return e && e !== t.fn || n && n !== t.context
                        }), 0 === this._callbacks[t].length && delete this._callbacks[t]
                    }, this)
                }, t.prototype.removeAllCallbacks = function(t) {
                    o.apply(t, function(t) {
                        delete this._callbacks[t]
                    }, this)
                }, t
            }();
        e.__esModule = !0, e["default"] = r
    }, function(t, e, n) {
        "use strict";
        var i = this && this.__extends || function(t, e) {
                function n() {
                    this.constructor = t
                }
                for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            },
            o = n(23),
            r = function(t) {
                function e() {
                    t.call(this);
                    var e = this;
                    void 0 !== window.addEventListener && (window.addEventListener("online", function() {
                        e.emit("online")
                    }, !1), window.addEventListener("offline", function() {
                        e.emit("offline")
                    }, !1))
                }
                return i(e, t), e.prototype.isOnline = function() {
                    return void 0 === window.navigator.onLine ? !0 : window.navigator.onLine
                }, e
            }(o["default"]);
        e.NetInfo = r, e.Network = new r
    }, function(t, e) {
        "use strict";
        var n = function(t) {
            var e;
            return e = t.encrypted ? [":best_connected_ever", ":ws_loop", [":delayed", 2e3, [":http_fallback_loop"]]] : [":best_connected_ever", ":ws_loop", [":delayed", 2e3, [":wss_loop"]],
                [":delayed", 5e3, [":http_fallback_loop"]]
            ], [
                [":def", "ws_options", {
                    hostUnencrypted: t.wsHost + ":" + t.wsPort,
                    hostEncrypted: t.wsHost + ":" + t.wssPort
                }],
                [":def", "wss_options", [":extend", ":ws_options", {
                    encrypted: !0
                }]],
                [":def", "sockjs_options", {
                    hostUnencrypted: t.httpHost + ":" + t.httpPort,
                    hostEncrypted: t.httpHost + ":" + t.httpsPort,
                    httpPath: t.httpPath
                }],
                [":def", "timeouts", {
                    loop: !0,
                    timeout: 15e3,
                    timeoutLimit: 6e4
                }],
                [":def", "ws_manager", [":transport_manager", {
                    lives: 2,
                    minPingDelay: 1e4,
                    maxPingDelay: t.activity_timeout
                }]],
                [":def", "streaming_manager", [":transport_manager", {
                    lives: 2,
                    minPingDelay: 1e4,
                    maxPingDelay: t.activity_timeout
                }]],
                [":def_transport", "ws", "ws", 3, ":ws_options", ":ws_manager"],
                [":def_transport", "wss", "ws", 3, ":wss_options", ":ws_manager"],
                [":def_transport", "sockjs", "sockjs", 1, ":sockjs_options"],
                [":def_transport", "xhr_streaming", "xhr_streaming", 1, ":sockjs_options", ":streaming_manager"],
                [":def_transport", "xdr_streaming", "xdr_streaming", 1, ":sockjs_options", ":streaming_manager"],
                [":def_transport", "xhr_polling", "xhr_polling", 1, ":sockjs_options"],
                [":def_transport", "xdr_polling", "xdr_polling", 1, ":sockjs_options"],
                [":def", "ws_loop", [":sequential", ":timeouts", ":ws"]],
                [":def", "wss_loop", [":sequential", ":timeouts", ":wss"]],
                [":def", "sockjs_loop", [":sequential", ":timeouts", ":sockjs"]],
                [":def", "streaming_loop", [":sequential", ":timeouts", [":if", [":is_supported", ":xhr_streaming"], ":xhr_streaming", ":xdr_streaming"]]],
                [":def", "polling_loop", [":sequential", ":timeouts", [":if", [":is_supported", ":xhr_polling"], ":xhr_polling", ":xdr_polling"]]],
                [":def", "http_loop", [":if", [":is_supported", ":streaming_loop"],
                    [":best_connected_ever", ":streaming_loop", [":delayed", 4e3, [":polling_loop"]]],
                    [":polling_loop"]
                ]],
                [":def", "http_fallback_loop", [":if", [":is_supported", ":http_loop"],
                    [":http_loop"],
                    [":sockjs_loop"]
                ]],
                [":def", "strategy", [":cached", 18e5, [":first_connected", [":if", [":is_supported", ":ws"], e, ":http_fallback_loop"]]]]
            ]
        };
        e.__esModule = !0, e["default"] = n
    }, function(t, e, n) {
        "use strict";

        function i() {
            var t = this;
            t.timeline.info(t.buildTimelineMessage({
                transport: t.name + (t.options.encrypted ? "s" : "")
            })), t.hooks.isInitialized() ? t.changeState("initialized") : t.hooks.file ? (t.changeState("initializing"), o.Dependencies.load(t.hooks.file, {
                encrypted: t.options.encrypted
            }, function(e, n) {
                t.hooks.isInitialized() ? (t.changeState("initialized"), n(!0)) : (e && t.onError(e), t.onClose(), n(!1))
            })) : t.onClose()
        }
        var o = n(3);
        e.__esModule = !0, e["default"] = i
    }, function(t, e, n) {
        "use strict";
        var i = n(29),
            o = n(31);
        o["default"].createXDR = function(t, e) {
            return this.createRequest(i["default"], t, e)
        }, e.__esModule = !0, e["default"] = o["default"]
    }, function(t, e, n) {
        "use strict";
        var i = n(30),
            o = {
                getRequest: function(t) {
                    var e = new window.XDomainRequest;
                    return e.ontimeout = function() {
                        t.emit("error", new i.RequestTimedOut), t.close()
                    }, e.onerror = function(e) {
                        t.emit("error", e), t.close()
                    }, e.onprogress = function() {
                        e.responseText && e.responseText.length > 0 && t.onChunk(200, e.responseText)
                    }, e.onload = function() {
                        e.responseText && e.responseText.length > 0 && t.onChunk(200, e.responseText), t.emit("finished", 200), t.close()
                    }, e
                },
                abortRequest: function(t) {
                    t.ontimeout = t.onerror = t.onprogress = t.onload = null, t.abort()
                }
            };
        e.__esModule = !0, e["default"] = o
    }, function(t, e) {
        "use strict";
        var n = this && this.__extends || function(t, e) {
                function n() {
                    this.constructor = t
                }
                for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            },
            i = function(t) {
                function e() {
                    t.apply(this, arguments)
                }
                return n(e, t), e
            }(Error);
        e.BadEventName = i;
        var o = function(t) {
            function e() {
                t.apply(this, arguments)
            }
            return n(e, t), e
        }(Error);
        e.RequestTimedOut = o;
        var r = function(t) {
            function e() {
                t.apply(this, arguments)
            }
            return n(e, t), e
        }(Error);
        e.TransportPriorityTooLow = r;
        var s = function(t) {
            function e() {
                t.apply(this, arguments)
            }
            return n(e, t), e
        }(Error);
        e.TransportClosed = s;
        var a = function(t) {
            function e() {
                t.apply(this, arguments)
            }
            return n(e, t), e
        }(Error);
        e.UnsupportedTransport = a;
        var c = function(t) {
            function e() {
                t.apply(this, arguments)
            }
            return n(e, t), e
        }(Error);
        e.UnsupportedStrategy = c
    }, function(t, e, n) {
        "use strict";
        var i = n(32),
            o = n(33),
            r = n(35),
            s = n(36),
            a = n(37),
            c = {
                createStreamingSocket: function(t) {
                    return this.createSocket(r["default"], t)
                },
                createPollingSocket: function(t) {
                    return this.createSocket(s["default"], t)
                },
                createSocket: function(t, e) {
                    return new o["default"](t, e)
                },
                createXHR: function(t, e) {
                    return this.createRequest(a["default"], t, e)
                },
                createRequest: function(t, e, n) {
                    return new i["default"](t, e, n)
                }
            };
        e.__esModule = !0, e["default"] = c
    }, function(t, e, n) {
        "use strict";
        var i = this && this.__extends || function(t, e) {
                function n() {
                    this.constructor = t
                }
                for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            },
            o = n(2),
            r = n(23),
            s = 262144,
            a = function(t) {
                function e(e, n, i) {
                    t.call(this), this.hooks = e, this.method = n, this.url = i
                }
                return i(e, t), e.prototype.start = function(t) {
                    var e = this;
                    this.position = 0, this.xhr = this.hooks.getRequest(this), this.unloader = function() {
                        e.close()
                    }, o["default"].addUnloadListener(this.unloader), this.xhr.open(this.method, this.url, !0), this.xhr.setRequestHeader && this.xhr.setRequestHeader("Content-Type", "application/json"), this.xhr.send(t)
                }, e.prototype.close = function() {
                    this.unloader && (o["default"].removeUnloadListener(this.unloader), this.unloader = null), this.xhr && (this.hooks.abortRequest(this.xhr), this.xhr = null)
                }, e.prototype.onChunk = function(t, e) {
                    for (;;) {
                        var n = this.advanceBuffer(e);
                        if (!n) break;
                        this.emit("chunk", {
                            status: t,
                            data: n
                        })
                    }
                    this.isBufferTooLong(e) && this.emit("buffer_too_long")
                }, e.prototype.advanceBuffer = function(t) {
                    var e = t.slice(this.position),
                        n = e.indexOf("\n");
                    return -1 !== n ? (this.position += n + 1, e.slice(0, n)) : null
                }, e.prototype.isBufferTooLong = function(t) {
                    return this.position === t.length && t.length > s
                }, e
            }(r["default"]);
        e.__esModule = !0, e["default"] = a
    }, function(t, e, n) {
        "use strict";

        function i(t) {
            var e = /([^\?]*)\/*(\??.*)/.exec(t);
            return {
                base: e[1],
                queryString: e[2]
            }
        }

        function o(t, e) {
            return t.base + "/" + e + "/xhr_send"
        }

        function r(t) {
            var e = -1 === t.indexOf("?") ? "?" : "&";
            return t + e + "t=" + +new Date + "&n=" + f++
        }

        function s(t, e) {
            var n = /(https?:\/\/)([^\/:]+)((\/|:)?.*)/.exec(t);
            return n[1] + e + n[3]
        }

        function a(t) {
            return Math.floor(Math.random() * t)
        }

        function c(t) {
            for (var e = [], n = 0; t > n; n++) e.push(a(32).toString(32));
            return e.join("")
        }
        var u = n(34),
            l = n(11),
            h = n(2),
            f = 1,
            p = function() {
                function t(t, e) {
                    this.hooks = t, this.session = a(1e3) + "/" + c(8), this.location = i(e), this.readyState = u["default"].CONNECTING, this.openStream()
                }
                return t.prototype.send = function(t) {
                    return this.sendRaw(JSON.stringify([t]))
                }, t.prototype.ping = function() {
                    this.hooks.sendHeartbeat(this)
                }, t.prototype.close = function(t, e) {
                    this.onClose(t, e, !0)
                }, t.prototype.sendRaw = function(t) {
                    if (this.readyState !== u["default"].OPEN) return !1;
                    try {
                        return h["default"].createSocketRequest("POST", r(o(this.location, this.session))).start(t), !0
                    } catch (e) {
                        return !1
                    }
                }, t.prototype.reconnect = function() {
                    this.closeStream(), this.openStream()
                }, t.prototype.onClose = function(t, e, n) {
                    this.closeStream(), this.readyState = u["default"].CLOSED, this.onclose && this.onclose({
                        code: t,
                        reason: e,
                        wasClean: n
                    })
                }, t.prototype.onChunk = function(t) {
                    if (200 === t.status) {
                        this.readyState === u["default"].OPEN && this.onActivity();
                        var e, n = t.data.slice(0, 1);
                        switch (n) {
                            case "o":
                                e = JSON.parse(t.data.slice(1) || "{}"),
                                    this.onOpen(e);
                                break;
                            case "a":
                                e = JSON.parse(t.data.slice(1) || "[]");
                                for (var i = 0; i < e.length; i++) this.onEvent(e[i]);
                                break;
                            case "m":
                                e = JSON.parse(t.data.slice(1) || "null"), this.onEvent(e);
                                break;
                            case "h":
                                this.hooks.onHeartbeat(this);
                                break;
                            case "c":
                                e = JSON.parse(t.data.slice(1) || "[]"), this.onClose(e[0], e[1], !0)
                        }
                    }
                }, t.prototype.onOpen = function(t) {
                    this.readyState === u["default"].CONNECTING ? (t && t.hostname && (this.location.base = s(this.location.base, t.hostname)), this.readyState = u["default"].OPEN, this.onopen && this.onopen()) : this.onClose(1006, "Server lost session", !0)
                }, t.prototype.onEvent = function(t) {
                    this.readyState === u["default"].OPEN && this.onmessage && this.onmessage({
                        data: t
                    })
                }, t.prototype.onActivity = function() {
                    this.onactivity && this.onactivity()
                }, t.prototype.onError = function(t) {
                    this.onerror && this.onerror(t)
                }, t.prototype.openStream = function() {
                    var t = this;
                    this.stream = h["default"].createSocketRequest("POST", r(this.hooks.getReceiveURL(this.location, this.session))), this.stream.bind("chunk", function(e) {
                        t.onChunk(e)
                    }), this.stream.bind("finished", function(e) {
                        t.hooks.onFinished(t, e)
                    }), this.stream.bind("buffer_too_long", function() {
                        t.reconnect()
                    });
                    try {
                        this.stream.start()
                    } catch (e) {
                        l["default"].defer(function() {
                            t.onError(e), t.onClose(1006, "Could not start streaming", !1)
                        })
                    }
                }, t.prototype.closeStream = function() {
                    this.stream && (this.stream.unbind_all(), this.stream.close(), this.stream = null)
                }, t
            }();
        e.__esModule = !0, e["default"] = p
    }, function(t, e) {
        "use strict";
        var n;
        ! function(t) {
            t[t.CONNECTING = 0] = "CONNECTING", t[t.OPEN = 1] = "OPEN", t[t.CLOSED = 3] = "CLOSED"
        }(n || (n = {})), e.__esModule = !0, e["default"] = n
    }, function(t, e) {
        "use strict";
        var n = {
            getReceiveURL: function(t, e) {
                return t.base + "/" + e + "/xhr_streaming" + t.queryString
            },
            onHeartbeat: function(t) {
                t.sendRaw("[]")
            },
            sendHeartbeat: function(t) {
                t.sendRaw("[]")
            },
            onFinished: function(t, e) {
                t.onClose(1006, "Connection interrupted (" + e + ")", !1)
            }
        };
        e.__esModule = !0, e["default"] = n
    }, function(t, e) {
        "use strict";
        var n = {
            getReceiveURL: function(t, e) {
                return t.base + "/" + e + "/xhr" + t.queryString
            },
            onHeartbeat: function() {},
            sendHeartbeat: function(t) {
                t.sendRaw("[]")
            },
            onFinished: function(t, e) {
                200 === e ? t.reconnect() : t.onClose(1006, "Connection interrupted (" + e + ")", !1)
            }
        };
        e.__esModule = !0, e["default"] = n
    }, function(t, e, n) {
        "use strict";
        var i = n(2),
            o = {
                getRequest: function(t) {
                    var e = i["default"].getXHRAPI(),
                        n = new e;
                    return n.onreadystatechange = n.onprogress = function() {
                        switch (n.readyState) {
                            case 3:
                                n.responseText && n.responseText.length > 0 && t.onChunk(n.status, n.responseText);
                                break;
                            case 4:
                                n.responseText && n.responseText.length > 0 && t.onChunk(n.status, n.responseText), t.emit("finished", n.status), t.close()
                        }
                    }, n
                },
                abortRequest: function(t) {
                    t.onreadystatechange = null, t.abort()
                }
            };
        e.__esModule = !0, e["default"] = o
    }, function(t, e, n) {
        "use strict";
        var i = n(9),
            o = n(11),
            r = n(39),
            s = function() {
                function t(t, e, n) {
                    this.key = t, this.session = e, this.events = [], this.options = n || {}, this.sent = 0, this.uniqueID = 0
                }
                return t.prototype.log = function(t, e) {
                    t <= this.options.level && (this.events.push(i.extend({}, e, {
                        timestamp: o["default"].now()
                    })), this.options.limit && this.events.length > this.options.limit && this.events.shift())
                }, t.prototype.error = function(t) {
                    this.log(r["default"].ERROR, t)
                }, t.prototype.info = function(t) {
                    this.log(r["default"].INFO, t)
                }, t.prototype.debug = function(t) {
                    this.log(r["default"].DEBUG, t)
                }, t.prototype.isEmpty = function() {
                    return 0 === this.events.length
                }, t.prototype.send = function(t, e) {
                    var n = this,
                        o = i.extend({
                            session: this.session,
                            bundle: this.sent + 1,
                            key: this.key,
                            lib: "js",
                            version: this.options.version,
                            cluster: this.options.cluster,
                            features: this.options.features,
                            timeline: this.events
                        }, this.options.params);
                    return this.events = [], t(o, function(t, i) {
                        t || n.sent++, e && e(t, i)
                    }), !0
                }, t.prototype.generateUniqueID = function() {
                    return this.uniqueID++, this.uniqueID
                }, t
            }();
        e.__esModule = !0, e["default"] = s
    }, function(t, e) {
        "use strict";
        var n;
        ! function(t) {
            t[t.ERROR = 3] = "ERROR", t[t.INFO = 6] = "INFO", t[t.DEBUG = 7] = "DEBUG"
        }(n || (n = {})), e.__esModule = !0, e["default"] = n
    }, function(t, e, n) {
        "use strict";

        function i(t) {
            return function(e) {
                return [t.apply(this, arguments), e]
            }
        }

        function o(t) {
            return "string" == typeof t && ":" === t.charAt(0)
        }

        function r(t, e) {
            return e[t.slice(1)]
        }

        function s(t, e) {
            if (0 === t.length) return [
                [], e
            ];
            var n = u(t[0], e),
                i = s(t.slice(1), n[1]);
            return [
                [n[0]].concat(i[0]), i[1]
            ]
        }

        function a(t, e) {
            if (!o(t)) return [t, e];
            var n = r(t, e);
            if (void 0 === n) throw "Undefined symbol " + t;
            return [n, e]
        }

        function c(t, e) {
            if (o(t[0])) {
                var n = r(t[0], e);
                if (t.length > 1) {
                    if ("function" != typeof n) throw "Calling non-function " + t[0];
                    var i = [l.extend({}, e)].concat(l.map(t.slice(1), function(t) {
                        return u(t, l.extend({}, e))[0]
                    }));
                    return n.apply(this, i)
                }
                return [n, e]
            }
            return s(t, e)
        }

        function u(t, e) {
            return "string" == typeof t ? a(t, e) : "object" == typeof t && t instanceof Array && t.length > 0 ? c(t, e) : [t, e]
        }
        var l = n(9),
            h = n(11),
            f = n(41),
            p = n(30),
            d = n(55),
            y = n(56),
            m = n(57),
            v = n(58),
            g = n(59),
            _ = n(60),
            b = n(61),
            k = n(2),
            w = k["default"].Transports;
        e.build = function(t, e) {
            var n = l.extend({}, C, e);
            return u(t, n)[1].strategy
        };
        var S = {
                isSupported: function() {
                    return !1
                },
                connect: function(t, e) {
                    var n = h["default"].defer(function() {
                        e(new p.UnsupportedStrategy)
                    });
                    return {
                        abort: function() {
                            n.ensureAborted()
                        },
                        forceMinPriority: function() {}
                    }
                }
            },
            C = {
                extend: function(t, e, n) {
                    return [l.extend({}, e, n), t]
                },
                def: function(t, e, n) {
                    if (void 0 !== t[e]) throw "Redefining symbol " + e;
                    return t[e] = n, [void 0, t]
                },
                def_transport: function(t, e, n, i, o, r) {
                    var s = w[n];
                    if (!s) throw new p.UnsupportedTransport(n);
                    var a, c = !(t.enabledTransports && -1 === l.arrayIndexOf(t.enabledTransports, e) || t.disabledTransports && -1 !== l.arrayIndexOf(t.disabledTransports, e));
                    a = c ? new d["default"](e, i, r ? r.getAssistant(s) : s, l.extend({
                        key: t.key,
                        encrypted: t.encrypted,
                        timeline: t.timeline,
                        ignoreNullOrigin: t.ignoreNullOrigin
                    }, o)) : S;
                    var u = t.def(t, e, a)[1];
                    return u.Transports = t.Transports || {}, u.Transports[e] = a, [void 0, u]
                },
                transport_manager: i(function(t, e) {
                    return new f["default"](e)
                }),
                sequential: i(function(t, e) {
                    var n = Array.prototype.slice.call(arguments, 2);
                    return new y["default"](n, e)
                }),
                cached: i(function(t, e, n) {
                    return new v["default"](n, t.Transports, {
                        ttl: e,
                        timeline: t.timeline,
                        encrypted: t.encrypted
                    })
                }),
                first_connected: i(function(t, e) {
                    return new b["default"](e)
                }),
                best_connected_ever: i(function() {
                    var t = Array.prototype.slice.call(arguments, 1);
                    return new m["default"](t)
                }),
                delayed: i(function(t, e, n) {
                    return new g["default"](n, {
                        delay: e
                    })
                }),
                "if": i(function(t, e, n, i) {
                    return new _["default"](e, n, i)
                }),
                is_supported: i(function(t, e) {
                    return function() {
                        return e.isSupported()
                    }
                })
            }
    }, function(t, e, n) {
        "use strict";
        var i = n(42),
            o = function() {
                function t(t) {
                    this.options = t || {}, this.livesLeft = this.options.lives || 1 / 0
                }
                return t.prototype.getAssistant = function(t) {
                    return i["default"].createAssistantToTheTransportManager(this, t, {
                        minPingDelay: this.options.minPingDelay,
                        maxPingDelay: this.options.maxPingDelay
                    })
                }, t.prototype.isAlive = function() {
                    return this.livesLeft > 0
                }, t.prototype.reportDeath = function() {
                    this.livesLeft -= 1
                }, t
            }();
        e.__esModule = !0, e["default"] = o
    }, function(t, e, n) {
        "use strict";
        var i = n(43),
            o = n(44),
            r = n(47),
            s = n(48),
            a = n(49),
            c = n(50),
            u = n(51),
            l = n(53),
            h = n(54),
            f = {
                createChannels: function() {
                    return new h["default"]
                },
                createConnectionManager: function(t, e) {
                    return new l["default"](t, e)
                },
                createChannel: function(t, e) {
                    return new u["default"](t, e)
                },
                createPrivateChannel: function(t, e) {
                    return new c["default"](t, e)
                },
                createPresenceChannel: function(t, e) {
                    return new a["default"](t, e)
                },
                createTimelineSender: function(t, e) {
                    return new s["default"](t, e)
                },
                createAuthorizer: function(t, e) {
                    return new r["default"](t, e)
                },
                createHandshake: function(t, e) {
                    return new o["default"](t, e)
                },
                createAssistantToTheTransportManager: function(t, e, n) {
                    return new i["default"](t, e, n)
                }
            };
        e.__esModule = !0, e["default"] = f
    }, function(t, e, n) {
        "use strict";
        var i = n(11),
            o = n(9),
            r = function() {
                function t(t, e, n) {
                    this.manager = t, this.transport = e, this.minPingDelay = n.minPingDelay, this.maxPingDelay = n.maxPingDelay, this.pingDelay = void 0
                }
                return t.prototype.createConnection = function(t, e, n, r) {
                    var s = this;
                    r = o.extend({}, r, {
                        activityTimeout: this.pingDelay
                    });
                    var a = this.transport.createConnection(t, e, n, r),
                        c = null,
                        u = function() {
                            a.unbind("open", u), a.bind("closed", l), c = i["default"].now()
                        },
                        l = function(t) {
                            if (a.unbind("closed", l), 1002 === t.code || 1003 === t.code) s.manager.reportDeath();
                            else if (!t.wasClean && c) {
                                var e = i["default"].now() - c;
                                e < 2 * s.maxPingDelay && (s.manager.reportDeath(), s.pingDelay = Math.max(e / 2, s.minPingDelay))
                            }
                        };
                    return a.bind("open", u), a
                }, t.prototype.isSupported = function(t) {
                    return this.manager.isAlive() && this.transport.isSupported(t)
                }, t
            }();
        e.__esModule = !0, e["default"] = r
    }, function(t, e, n) {
        "use strict";
        var i = n(9),
            o = n(45),
            r = n(46),
            s = function() {
                function t(t, e) {
                    this.transport = t, this.callback = e, this.bindListeners()
                }
                return t.prototype.close = function() {
                    this.unbindListeners(), this.transport.close()
                }, t.prototype.bindListeners = function() {
                    var t = this;
                    this.onMessage = function(e) {
                        t.unbindListeners();
                        var n;
                        try {
                            n = o.processHandshake(e)
                        } catch (i) {
                            return t.finish("error", {
                                error: i
                            }), void t.transport.close()
                        }
                        "connected" === n.action ? t.finish("connected", {
                            connection: new r["default"](n.id, t.transport),
                            activityTimeout: n.activityTimeout
                        }) : (t.finish(n.action, {
                            error: n.error
                        }), t.transport.close())
                    }, this.onClosed = function(e) {
                        t.unbindListeners();
                        var n = o.getCloseAction(e) || "backoff",
                            i = o.getCloseError(e);
                        t.finish(n, {
                            error: i
                        })
                    }, this.transport.bind("message", this.onMessage), this.transport.bind("closed", this.onClosed)
                }, t.prototype.unbindListeners = function() {
                    this.transport.unbind("message", this.onMessage), this.transport.unbind("closed", this.onClosed)
                }, t.prototype.finish = function(t, e) {
                    this.callback(i.extend({
                        transport: this.transport,
                        action: t
                    }, e))
                }, t
            }();
        e.__esModule = !0, e["default"] = s
    }, function(t, e) {
        "use strict";
        e.decodeMessage = function(t) {
            try {
                var e = JSON.parse(t.data);
                if ("string" == typeof e.data) try {
                    e.data = JSON.parse(e.data)
                } catch (n) {
                    if (!(n instanceof SyntaxError)) throw n
                }
                return e
            } catch (n) {
                throw {
                    type: "MessageParseError",
                    error: n,
                    data: t.data
                }
            }
        }, e.encodeMessage = function(t) {
            return JSON.stringify(t)
        }, e.processHandshake = function(t) {
            if (t = e.decodeMessage(t), "pusher:connection_established" === t.event) {
                if (!t.data.activity_timeout) throw "No activity timeout specified in handshake";
                return {
                    action: "connected",
                    id: t.data.socket_id,
                    activityTimeout: 1e3 * t.data.activity_timeout
                }
            }
            if ("pusher:error" === t.event) return {
                action: this.getCloseAction(t.data),
                error: this.getCloseError(t.data)
            };
            throw "Invalid handshake"
        }, e.getCloseAction = function(t) {
            return t.code < 4e3 ? t.code >= 1002 && t.code <= 1004 ? "backoff" : null : 4e3 === t.code ? "ssl_only" : t.code < 4100 ? "refused" : t.code < 4200 ? "backoff" : t.code < 4300 ? "retry" : "refused"
        }, e.getCloseError = function(t) {
            return 1e3 !== t.code && 1001 !== t.code ? {
                type: "PusherError",
                data: {
                    code: t.code,
                    message: t.reason || t.message
                }
            } : null
        }
    }, function(t, e, n) {
        "use strict";
        var i = this && this.__extends || function(t, e) {
                function n() {
                    this.constructor = t
                }
                for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            },
            o = n(9),
            r = n(23),
            s = n(45),
            a = n(8),
            c = function(t) {
                function e(e, n) {
                    t.call(this), this.id = e, this.transport = n, this.activityTimeout = n.activityTimeout, this.bindListeners()
                }
                return i(e, t), e.prototype.handlesActivityChecks = function() {
                    return this.transport.handlesActivityChecks()
                }, e.prototype.send = function(t) {
                    return this.transport.send(t)
                }, e.prototype.send_event = function(t, e, n) {
                    var i = {
                        event: t,
                        data: e
                    };
                    return n && (i.channel = n), a["default"].debug("Event sent", i), this.send(s.encodeMessage(i))
                }, e.prototype.ping = function() {
                    this.transport.supportsPing() ? this.transport.ping() : this.send_event("pusher:ping", {})
                }, e.prototype.close = function() {
                    this.transport.close()
                }, e.prototype.bindListeners = function() {
                    var t = this,
                        e = {
                            message: function(e) {
                                var n;
                                try {
                                    n = s.decodeMessage(e)
                                } catch (i) {
                                    t.emit("error", {
                                        type: "MessageParseError",
                                        error: i,
                                        data: e.data
                                    })
                                }
                                if (void 0 !== n) {
                                    switch (a["default"].debug("Event recd", n), n.event) {
                                        case "pusher:error":
                                            t.emit("error", {
                                                type: "PusherError",
                                                data: n.data
                                            });
                                            break;
                                        case "pusher:ping":
                                            t.emit("ping");
                                            break;
                                        case "pusher:pong":
                                            t.emit("pong")
                                    }
                                    t.emit("message", n)
                                }
                            },
                            activity: function() {
                                t.emit("activity")
                            },
                            error: function(e) {
                                t.emit("error", {
                                    type: "WebSocketError",
                                    error: e
                                })
                            },
                            closed: function(e) {
                                n(), e && e.code && t.handleCloseEvent(e), t.transport = null, t.emit("closed")
                            }
                        },
                        n = function() {
                            o.objectApply(e, function(e, n) {
                                t.transport.unbind(n, e)
                            })
                        };
                    o.objectApply(e, function(e, n) {
                        t.transport.bind(n, e)
                    })
                }, e.prototype.handleCloseEvent = function(t) {
                    var e = s.getCloseAction(t),
                        n = s.getCloseError(t);
                    n && this.emit("error", n), e && this.emit(e)
                }, e
            }(r["default"]);
        e.__esModule = !0, e["default"] = c
    }, function(t, e, n) {
        "use strict";
        var i = n(2),
            o = function() {
                function t(t, e) {
                    this.channel = t;
                    var n = e.authTransport;
                    if ("undefined" == typeof i["default"].getAuthorizers()[n]) throw "'" + n + "' is not a recognized auth transport";
                    this.type = n, this.options = e, this.authOptions = (e || {}).auth || {}
                }
                return t.prototype.composeQuery = function(t) {
                    var e = "socket_id=" + encodeURIComponent(t) + "&channel_name=" + encodeURIComponent(this.channel.name);
                    for (var n in this.authOptions.params) e += "&" + encodeURIComponent(n) + "=" + encodeURIComponent(this.authOptions.params[n]);
                    return e
                }, t.prototype.authorize = function(e, n) {
                    return t.authorizers = t.authorizers || i["default"].getAuthorizers(), t.authorizers[this.type].call(this, i["default"], e, n)
                }, t
            }();
        e.__esModule = !0, e["default"] = o
    }, function(t, e, n) {
        "use strict";
        var i = n(2),
            o = function() {
                function t(t, e) {
                    this.timeline = t, this.options = e || {}
                }
                return t.prototype.send = function(t, e) {
                    this.timeline.isEmpty() || this.timeline.send(i["default"].TimelineTransport.getAgent(this, t), e)
                }, t
            }();
        e.__esModule = !0, e["default"] = o
    }, function(t, e, n) {
        "use strict";
        var i = this && this.__extends || function(t, e) {
                function n() {
                    this.constructor = t
                }
                for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            },
            o = n(50),
            r = n(8),
            s = n(52),
            a = function(t) {
                function e(e, n) {
                    t.call(this, e, n), this.members = new s["default"]
                }
                return i(e, t), e.prototype.authorize = function(e, n) {
                    var i = this;
                    t.prototype.authorize.call(this, e, function(t, e) {
                        if (!t) {
                            if (void 0 === e.channel_data) return r["default"].warn("Invalid auth response for channel '" + i.name + "', expected 'channel_data' field"), void n("Invalid auth response");
                            var o = JSON.parse(e.channel_data);
                            i.members.setMyID(o.user_id)
                        }
                        n(t, e)
                    })
                }, e.prototype.handleEvent = function(t, e) {
                    switch (t) {
                        case "pusher_internal:subscription_succeeded":
                            this.members.onSubscription(e), this.subscribed = !0, this.emit("pusher:subscription_succeeded", this.members);
                            break;
                        case "pusher_internal:member_added":
                            var n = this.members.addMember(e);
                            this.emit("pusher:member_added", n);
                            break;
                        case "pusher_internal:member_removed":
                            var i = this.members.removeMember(e);
                            i && this.emit("pusher:member_removed", i);
                            break;
                        default:
                            o["default"].prototype.handleEvent.call(this, t, e)
                    }
                }, e.prototype.disconnect = function() {
                    this.members.reset(), t.prototype.disconnect.call(this)
                }, e
            }(o["default"]);
        e.__esModule = !0, e["default"] = a
    }, function(t, e, n) {
        "use strict";
        var i = this && this.__extends || function(t, e) {
                function n() {
                    this.constructor = t
                }
                for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            },
            o = n(42),
            r = n(51),
            s = function(t) {
                function e() {
                    t.apply(this, arguments)
                }
                return i(e, t), e.prototype.authorize = function(t, e) {
                    var n = o["default"].createAuthorizer(this, this.pusher.config);
                    return n.authorize(t, e)
                }, e
            }(r["default"]);
        e.__esModule = !0, e["default"] = s
    }, function(t, e, n) {
        "use strict";
        var i = this && this.__extends || function(t, e) {
                function n() {
                    this.constructor = t
                }
                for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            },
            o = n(23),
            r = n(30),
            s = n(8),
            a = function(t) {
                function e(e, n) {
                    t.call(this, function(t, n) {
                        s["default"].debug("No callbacks on " + e + " for " + t)
                    }), this.name = e, this.pusher = n, this.subscribed = !1
                }
                return i(e, t), e.prototype.authorize = function(t, e) {
                    return e(!1, {})
                }, e.prototype.trigger = function(t, e) {
                    if (0 !== t.indexOf("client-")) throw new r.BadEventName("Event '" + t + "' does not start with 'client-'");
                    return this.pusher.send_event(t, e, this.name)
                }, e.prototype.disconnect = function() {
                    this.subscribed = !1
                }, e.prototype.handleEvent = function(t, e) {
                    0 === t.indexOf("pusher_internal:") ? "pusher_internal:subscription_succeeded" === t && (this.subscribed = !0, this.emit("pusher:subscription_succeeded", e)) : this.emit(t, e)
                }, e.prototype.subscribe = function() {
                    var t = this;
                    this.authorize(this.pusher.connection.socket_id, function(e, n) {
                        e ? t.handleEvent("pusher:subscription_error", n) : t.pusher.send_event("pusher:subscribe", {
                            auth: n.auth,
                            channel_data: n.channel_data,
                            channel: t.name
                        })
                    })
                }, e.prototype.unsubscribe = function() {
                    this.pusher.send_event("pusher:unsubscribe", {
                        channel: this.name
                    })
                }, e
            }(o["default"]);
        e.__esModule = !0, e["default"] = a
    }, function(t, e, n) {
        "use strict";
        var i = n(9),
            o = function() {
                function t() {
                    this.reset()
                }
                return t.prototype.get = function(t) {
                    return Object.prototype.hasOwnProperty.call(this.members, t) ? {
                        id: t,
                        info: this.members[t]
                    } : null
                }, t.prototype.each = function(t) {
                    var e = this;
                    i.objectApply(this.members, function(n, i) {
                        t(e.get(i))
                    })
                }, t.prototype.setMyID = function(t) {
                    this.myID = t
                }, t.prototype.onSubscription = function(t) {
                    this.members = t.presence.hash, this.count = t.presence.count, this.me = this.get(this.myID)
                }, t.prototype.addMember = function(t) {
                    return null === this.get(t.user_id) && this.count++, this.members[t.user_id] = t.user_info, this.get(t.user_id)
                }, t.prototype.removeMember = function(t) {
                    var e = this.get(t.user_id);
                    return e && (delete this.members[t.user_id], this.count--), e
                }, t.prototype.reset = function() {
                    this.members = {}, this.count = 0, this.myID = null, this.me = null
                }, t
            }();
        e.__esModule = !0, e["default"] = o
    }, function(t, e, n) {
        "use strict";
        var i = this && this.__extends || function(t, e) {
                function n() {
                    this.constructor = t
                }
                for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            },
            o = n(23),
            r = n(12),
            s = n(8),
            a = n(9),
            c = n(2),
            u = function(t) {
                function e(e, n) {
                    var i = this;
                    t.call(this), this.key = e, this.options = n || {}, this.state = "initialized", this.connection = null, this.encrypted = !!n.encrypted, this.timeline = this.options.timeline, this.connectionCallbacks = this.buildConnectionCallbacks(), this.errorCallbacks = this.buildErrorCallbacks(), this.handshakeCallbacks = this.buildHandshakeCallbacks(this.errorCallbacks);
                    var o = c["default"].getNetwork();
                    o.bind("online", function() {
                        i.timeline.info({
                            netinfo: "online"
                        }), ("connecting" === i.state || "unavailable" === i.state) && i.retryIn(0)
                    }), o.bind("offline", function() {
                        i.timeline.info({
                            netinfo: "offline"
                        }), i.connection && i.sendActivityCheck()
                    }), this.updateStrategy()
                }
                return i(e, t), e.prototype.connect = function() {
                    if (!this.connection && !this.runner) {
                        if (!this.strategy.isSupported()) return void this.updateState("failed");
                        this.updateState("connecting"), this.startConnecting(), this.setUnavailableTimer()
                    }
                }, e.prototype.send = function(t) {
                    return this.connection ? this.connection.send(t) : !1
                }, e.prototype.send_event = function(t, e, n) {
                    return this.connection ? this.connection.send_event(t, e, n) : !1
                }, e.prototype.disconnect = function() {
                    this.disconnectInternally(), this.updateState("disconnected")
                }, e.prototype.isEncrypted = function() {
                    return this.encrypted
                }, e.prototype.startConnecting = function() {
                    var t = this,
                        e = function(n, i) {
                            n ? t.runner = t.strategy.connect(0, e) : "error" === i.action ? (t.emit("error", {
                                type: "HandshakeError",
                                error: i.error
                            }), t.timeline.error({
                                handshakeError: i.error
                            })) : (t.abortConnecting(), t.handshakeCallbacks[i.action](i))
                        };
                    this.runner = this.strategy.connect(0, e)
                }, e.prototype.abortConnecting = function() {
                    this.runner && (this.runner.abort(), this.runner = null)
                }, e.prototype.disconnectInternally = function() {
                    if (this.abortConnecting(), this.clearRetryTimer(), this.clearUnavailableTimer(), this.connection) {
                        var t = this.abandonConnection();
                        t.close()
                    }
                }, e.prototype.updateStrategy = function() {
                    this.strategy = this.options.getStrategy({
                        key: this.key,
                        timeline: this.timeline,
                        encrypted: this.encrypted
                    })
                }, e.prototype.retryIn = function(t) {
                    var e = this;
                    this.timeline.info({
                        action: "retry",
                        delay: t
                    }), t > 0 && this.emit("connecting_in", Math.round(t / 1e3)), this.retryTimer = new r.OneOffTimer(t || 0, function() {
                        e.disconnectInternally(), e.connect()
                    })
                }, e.prototype.clearRetryTimer = function() {
                    this.retryTimer && (this.retryTimer.ensureAborted(), this.retryTimer = null)
                }, e.prototype.setUnavailableTimer = function() {
                    var t = this;
                    this.unavailableTimer = new r.OneOffTimer(this.options.unavailableTimeout, function() {
                        t.updateState("unavailable")
                    })
                }, e.prototype.clearUnavailableTimer = function() {
                    this.unavailableTimer && this.unavailableTimer.ensureAborted()
                }, e.prototype.sendActivityCheck = function() {
                    var t = this;
                    this.stopActivityCheck(), this.connection.ping(), this.activityTimer = new r.OneOffTimer(this.options.pongTimeout, function() {
                        t.timeline.error({
                            pong_timed_out: t.options.pongTimeout
                        }), t.retryIn(0)
                    })
                }, e.prototype.resetActivityCheck = function() {
                    var t = this;
                    this.stopActivityCheck(), this.connection.handlesActivityChecks() || (this.activityTimer = new r.OneOffTimer(this.activityTimeout, function() {
                        t.sendActivityCheck()
                    }))
                }, e.prototype.stopActivityCheck = function() {
                    this.activityTimer && this.activityTimer.ensureAborted()
                }, e.prototype.buildConnectionCallbacks = function() {
                    var t = this;
                    return {
                        message: function(e) {
                            t.resetActivityCheck(), t.emit("message", e)
                        },
                        ping: function() {
                            t.send_event("pusher:pong", {})
                        },
                        activity: function() {
                            t.resetActivityCheck()
                        },
                        error: function(e) {
                            t.emit("error", {
                                type: "WebSocketError",
                                error: e
                            })
                        },
                        closed: function() {
                            t.abandonConnection(), t.shouldRetry() && t.retryIn(1e3)
                        }
                    }
                }, e.prototype.buildHandshakeCallbacks = function(t) {
                    var e = this;
                    return a.extend({}, t, {
                        connected: function(t) {
                            e.activityTimeout = Math.min(e.options.activityTimeout, t.activityTimeout, t.connection.activityTimeout || 1 / 0), e.clearUnavailableTimer(), e.setConnection(t.connection), e.socket_id = e.connection.id, e.updateState("connected", {
                                socket_id: e.socket_id
                            })
                        }
                    })
                }, e.prototype.buildErrorCallbacks = function() {
                    var t = this,
                        e = function(e) {
                            return function(n) {
                                n.error && t.emit("error", {
                                    type: "WebSocketError",
                                    error: n.error
                                }), e(n)
                            }
                        };
                    return {
                        ssl_only: e(function() {
                            t.encrypted = !0, t.updateStrategy(), t.retryIn(0)
                        }),
                        refused: e(function() {
                            t.disconnect()
                        }),
                        backoff: e(function() {
                            t.retryIn(1e3)
                        }),
                        retry: e(function() {
                            t.retryIn(0)
                        })
                    }
                }, e.prototype.setConnection = function(t) {
                    this.connection = t;
                    for (var e in this.connectionCallbacks) this.connection.bind(e, this.connectionCallbacks[e]);
                    this.resetActivityCheck()
                }, e.prototype.abandonConnection = function() {
                    if (this.connection) {
                        this.stopActivityCheck();
                        for (var t in this.connectionCallbacks) this.connection.unbind(t, this.connectionCallbacks[t]);
                        var e = this.connection;
                        return this.connection = null, e
                    }
                }, e.prototype.updateState = function(t, e) {
                    var n = this.state;
                    if (this.state = t, n !== t) {
                        var i = t;
                        "connected" === i && (i += " with new socket ID " + e.socket_id), s["default"].debug("State changed", n + " -> " + i), this.timeline.info({
                            state: t,
                            params: e
                        }), this.emit("state_change", {
                            previous: n,
                            current: t
                        }), this.emit(t, e)
                    }
                }, e.prototype.shouldRetry = function() {
                    return "connecting" === this.state || "connected" === this.state
                }, e
            }(o["default"]);
        e.__esModule = !0, e["default"] = u
    }, function(t, e, n) {
        "use strict";

        function i(t, e) {
            return 0 === t.indexOf("private-") ? r["default"].createPrivateChannel(t, e) : 0 === t.indexOf("presence-") ? r["default"].createPresenceChannel(t, e) : r["default"].createChannel(t, e)
        }
        var o = n(9),
            r = n(42),
            s = function() {
                function t() {
                    this.channels = {}
                }
                return t.prototype.add = function(t, e) {
                    return this.channels[t] || (this.channels[t] = i(t, e)), this.channels[t]
                }, t.prototype.all = function() {
                    return o.values(this.channels)
                }, t.prototype.find = function(t) {
                    return this.channels[t]
                }, t.prototype.remove = function(t) {
                    var e = this.channels[t];
                    return delete this.channels[t], e
                }, t.prototype.disconnect = function() {
                    o.objectApply(this.channels, function(t) {
                        t.disconnect()
                    })
                }, t
            }();
        e.__esModule = !0, e["default"] = s
    }, function(t, e, n) {
        "use strict";

        function i(t, e) {
            return r["default"].defer(function() {
                e(t)
            }), {
                abort: function() {},
                forceMinPriority: function() {}
            }
        }
        var o = n(42),
            r = n(11),
            s = n(30),
            a = n(9),
            c = function() {
                function t(t, e, n, i) {
                    this.name = t, this.priority = e, this.transport = n, this.options = i || {}
                }
                return t.prototype.isSupported = function() {
                    return this.transport.isSupported({
                        encrypted: this.options.encrypted
                    })
                }, t.prototype.connect = function(t, e) {
                    var n = this;
                    if (!this.isSupported()) return i(new s.UnsupportedStrategy, e);
                    if (this.priority < t) return i(new s.TransportPriorityTooLow, e);
                    var r = !1,
                        c = this.transport.createConnection(this.name, this.priority, this.options.key, this.options),
                        u = null,
                        l = function() {
                            c.unbind("initialized", l), c.connect()
                        },
                        h = function() {
                            u = o["default"].createHandshake(c, function(t) {
                                r = !0, d(), e(null, t)
                            })
                        },
                        f = function(t) {
                            d(), e(t)
                        },
                        p = function() {
                            d();
                            var t;
                            try {
                                t = JSON.stringify(c)
                            } catch (n) {
                                t = a.safeJSONStringify(c)
                            }
                            e(new s.TransportClosed(t))
                        },
                        d = function() {
                            c.unbind("initialized", l), c.unbind("open", h), c.unbind("error", f), c.unbind("closed", p)
                        };
                    return c.bind("initialized", l), c.bind("open", h), c.bind("error", f), c.bind("closed", p), c.initialize(), {
                        abort: function() {
                            r || (d(), u ? u.close() : c.close())
                        },
                        forceMinPriority: function(t) {
                            r || n.priority < t && (u ? u.close() : c.close())
                        }
                    }
                }, t
            }();
        e.__esModule = !0, e["default"] = c
    }, function(t, e, n) {
        "use strict";
        var i = n(9),
            o = n(11),
            r = n(12),
            s = function() {
                function t(t, e) {
                    this.strategies = t, this.loop = Boolean(e.loop), this.failFast = Boolean(e.failFast), this.timeout = e.timeout, this.timeoutLimit = e.timeoutLimit
                }
                return t.prototype.isSupported = function() {
                    return i.any(this.strategies, o["default"].method("isSupported"))
                }, t.prototype.connect = function(t, e) {
                    var n = this,
                        i = this.strategies,
                        o = 0,
                        r = this.timeout,
                        s = null,
                        a = function(c, u) {
                            u ? e(null, u) : (o += 1, n.loop && (o %= i.length), o < i.length ? (r && (r = 2 * r, n.timeoutLimit && (r = Math.min(r, n.timeoutLimit))), s = n.tryStrategy(i[o], t, {
                                timeout: r,
                                failFast: n.failFast
                            }, a)) : e(!0))
                        };
                    return s = this.tryStrategy(i[o], t, {
                        timeout: r,
                        failFast: this.failFast
                    }, a), {
                        abort: function() {
                            s.abort()
                        },
                        forceMinPriority: function(e) {
                            t = e, s && s.forceMinPriority(e)
                        }
                    }
                }, t.prototype.tryStrategy = function(t, e, n, i) {
                    var o = null,
                        s = null;
                    return n.timeout > 0 && (o = new r.OneOffTimer(n.timeout, function() {
                        s.abort(), i(!0)
                    })), s = t.connect(e, function(t, e) {
                        t && o && o.isRunning() && !n.failFast || (o && o.ensureAborted(), i(t, e))
                    }), {
                        abort: function() {
                            o && o.ensureAborted(), s.abort()
                        },
                        forceMinPriority: function(t) {
                            s.forceMinPriority(t)
                        }
                    }
                }, t
            }();
        e.__esModule = !0, e["default"] = s
    }, function(t, e, n) {
        "use strict";

        function i(t, e, n) {
            var i = s.map(t, function(t, i, o, r) {
                return t.connect(e, n(i, r))
            });
            return {
                abort: function() {
                    s.apply(i, r)
                },
                forceMinPriority: function(t) {
                    s.apply(i, function(e) {
                        e.forceMinPriority(t)
                    })
                }
            }
        }

        function o(t) {
            return s.all(t, function(t) {
                return Boolean(t.error)
            })
        }

        function r(t) {
            t.error || t.aborted || (t.abort(), t.aborted = !0)
        }
        var s = n(9),
            a = n(11),
            c = function() {
                function t(t) {
                    this.strategies = t
                }
                return t.prototype.isSupported = function() {
                    return s.any(this.strategies, a["default"].method("isSupported"))
                }, t.prototype.connect = function(t, e) {
                    return i(this.strategies, t, function(t, n) {
                        return function(i, r) {
                            return n[t].error = i, i ? void(o(n) && e(!0)) : (s.apply(n, function(t) {
                                t.forceMinPriority(r.transport.priority)
                            }), void e(null, r))
                        }
                    })
                }, t
            }();
        e.__esModule = !0, e["default"] = c
    }, function(t, e, n) {
        "use strict";

        function i(t) {
            return "pusherTransport" + (t ? "Encrypted" : "Unencrypted")
        }

        function o(t) {
            var e = c["default"].getLocalStorage();
            if (e) try {
                var n = e[i(t)];
                if (n) return JSON.parse(n)
            } catch (o) {
                s(t)
            }
            return null
        }

        function r(t, e, n) {
            var o = c["default"].getLocalStorage();
            if (o) try {
                o[i(t)] = JSON.stringify({
                    timestamp: a["default"].now(),
                    transport: e,
                    latency: n
                })
            } catch (r) {}
        }

        function s(t) {
            var e = c["default"].getLocalStorage();
            if (e) try {
                delete e[i(t)]
            } catch (n) {}
        }
        var a = n(11),
            c = n(2),
            u = n(56),
            l = function() {
                function t(t, e, n) {
                    this.strategy = t, this.transports = e, this.ttl = n.ttl || 18e5, this.encrypted = n.encrypted, this.timeline = n.timeline
                }
                return t.prototype.isSupported = function() {
                    return this.strategy.isSupported()
                }, t.prototype.connect = function(t, e) {
                    var n = this.encrypted,
                        i = o(n),
                        c = [this.strategy];
                    if (i && i.timestamp + this.ttl >= a["default"].now()) {
                        var l = this.transports[i.transport];
                        l && (this.timeline.info({
                            cached: !0,
                            transport: i.transport,
                            latency: i.latency
                        }), c.push(new u["default"]([l], {
                            timeout: 2 * i.latency + 1e3,
                            failFast: !0
                        })))
                    }
                    var h = a["default"].now(),
                        f = c.pop().connect(t, function p(i, o) {
                            i ? (s(n), c.length > 0 ? (h = a["default"].now(), f = c.pop().connect(t, p)) : e(i)) : (r(n, o.transport.name, a["default"].now() - h), e(null, o))
                        });
                    return {
                        abort: function() {
                            f.abort()
                        },
                        forceMinPriority: function(e) {
                            t = e, f && f.forceMinPriority(e)
                        }
                    }
                }, t
            }();
        e.__esModule = !0, e["default"] = l
    }, function(t, e, n) {
        "use strict";
        var i = n(12),
            o = function() {
                function t(t, e) {
                    var n = e.delay;
                    this.strategy = t, this.options = {
                        delay: n
                    }
                }
                return t.prototype.isSupported = function() {
                    return this.strategy.isSupported()
                }, t.prototype.connect = function(t, e) {
                    var n, o = this.strategy,
                        r = new i.OneOffTimer(this.options.delay, function() {
                            n = o.connect(t, e)
                        });
                    return {
                        abort: function() {
                            r.ensureAborted(), n && n.abort()
                        },
                        forceMinPriority: function(e) {
                            t = e, n && n.forceMinPriority(e)
                        }
                    }
                }, t
            }();
        e.__esModule = !0, e["default"] = o
    }, function(t, e) {
        "use strict";
        var n = function() {
            function t(t, e, n) {
                this.test = t, this.trueBranch = e, this.falseBranch = n
            }
            return t.prototype.isSupported = function() {
                var t = this.test() ? this.trueBranch : this.falseBranch;
                return t.isSupported()
            }, t.prototype.connect = function(t, e) {
                var n = this.test() ? this.trueBranch : this.falseBranch;
                return n.connect(t, e)
            }, t
        }();
        e.__esModule = !0, e["default"] = n
    }, function(t, e) {
        "use strict";
        var n = function() {
            function t(t) {
                this.strategy = t
            }
            return t.prototype.isSupported = function() {
                return this.strategy.isSupported()
            }, t.prototype.connect = function(t, e) {
                var n = this.strategy.connect(t, function(t, i) {
                    i && n.abort(), e(t, i)
                });
                return n
            }, t
        }();
        e.__esModule = !0, e["default"] = n
    }, function(t, e, n) {
        "use strict";
        var i = n(5);
        e.getGlobalConfig = function() {
            return {
                wsHost: i["default"].host,
                wsPort: i["default"].ws_port,
                wssPort: i["default"].wss_port,
                httpHost: i["default"].sockjs_host,
                httpPort: i["default"].sockjs_http_port,
                httpsPort: i["default"].sockjs_https_port,
                httpPath: i["default"].sockjs_path,
                statsHost: i["default"].stats_host,
                authEndpoint: i["default"].channel_auth_endpoint,
                authTransport: i["default"].channel_auth_transport,
                activity_timeout: i["default"].activity_timeout,
                pong_timeout: i["default"].pong_timeout,
                unavailable_timeout: i["default"].unavailable_timeout
            }
        }, e.getClusterConfig = function(t) {
            return {
                wsHost: "ws-" + t + ".pusher.com",
                httpHost: "sockjs-" + t + ".pusher.com"
            }
        }
    }])
});;
! function(e, t) {
    "function" == typeof define && define.amd ? define(["exports"], t) : t("object" == typeof exports && "string" != typeof exports.nodeName ? exports : e.commonJsStrict = {})
}(this, function(exports) {
    function e(e) {
        if (e in W) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = P.length; n--;)
            if (e = P[n] + t, e in W) return e
    }

    function t(e, n) {
        e = e || {};
        for (var i in n) n[i] && n[i].constructor && n[i].constructor === Object ? (e[i] = e[i] || {}, t(e[i], n[i])) : e[i] = n[i];
        return e
    }

    function n(e, t, n) {
        var i;
        return function() {
            var o = this,
                r = arguments,
                a = function() {
                    i = null, n || e.apply(o, r)
                },
                s = n && !i;
            clearTimeout(i), i = setTimeout(a, t), s && e.apply(o, r)
        }
    }

    function i(e) {
        if ("createEvent" in document) {
            var t = document.createEvent("HTMLEvents");
            t.initEvent("change", !1, !0), e.dispatchEvent(t)
        } else e.fireEvent("onchange")
    }

    function o(e, t, n) {
        if ("string" == typeof t) {
            var i = t;
            t = {}, t[i] = n
        }
        for (var o in t) e.style[o] = t[o]
    }

    function r(e, t) {
        e.classList ? e.classList.add(t) : e.className += " " + t
    }

    function a(e, t) {
        e.classList ? e.classList.remove(t) : e.className = e.className.replace(t, "")
    }

    function s(e, t) {
        var n, i = t || new Image;
        return i.src === e ? n = new Promise(function(e) {
            e(i)
        }) : (n = new Promise(function(t) {
            "http" === e.substring(0, 4).toLowerCase() && i.setAttribute("crossOrigin", "anonymous"), i.onload = function() {
                setTimeout(function() {
                    t(i)
                }, 1)
            }
        }), i.src = e), i.style.opacity = 0, n
    }

    function l(e, t) {
        window.EXIF || t(0), EXIF.getData(e, function() {
            var e = EXIF.getTag(this, "Orientation");
            t(e)
        })
    }

    function u(e, t, n) {
        var i = t.width,
            o = t.height,
            r = e.getContext("2d");
        switch (e.width = t.width, e.height = t.height, r.save(), n) {
            case 2:
                r.translate(i, 0), r.scale(-1, 1);
                break;
            case 3:
                r.translate(i, o), r.rotate(180 * Math.PI / 180);
                break;
            case 4:
                r.translate(0, o), r.scale(1, -1);
                break;
            case 5:
                e.width = o, e.height = i, r.rotate(90 * Math.PI / 180), r.scale(1, -1);
                break;
            case 6:
                e.width = o, e.height = i, r.rotate(90 * Math.PI / 180), r.translate(0, -o);
                break;
            case 7:
                e.width = o, e.height = i, r.rotate(-90 * Math.PI / 180), r.translate(-i, o), r.scale(1, -1);
                break;
            case 8:
                e.width = o, e.height = i, r.translate(0, i), r.rotate(-90 * Math.PI / 180)
        }
        r.drawImage(t, 0, 0, i, o), r.restore()
    }

    function c() {
        var e, t, n, i, a = this,
            s = "croppie-container",
            l = a.options.viewport.type ? "cr-vp-" + a.options.viewport.type : null;
        a.options.useCanvas = a.options.enableOrientation || p.call(a), a.data = {}, a.elements = {}, e = a.elements.boundary = document.createElement("div"), n = a.elements.viewport = document.createElement("div"), t = a.elements.img = document.createElement("img"), i = a.elements.overlay = document.createElement("div"), a.options.useCanvas ? (a.elements.canvas = document.createElement("canvas"), a.elements.preview = a.elements.canvas) : a.elements.preview = a.elements.img, r(e, "cr-boundary"), o(e, {
            width: a.options.boundary.width + "px",
            height: a.options.boundary.height + "px"
        }), r(n, "cr-viewport"), l && r(n, l), o(n, {
            width: a.options.viewport.width + "px",
            height: a.options.viewport.height + "px"
        }), n.setAttribute("tabindex", 0), r(a.elements.preview, "cr-image"), r(i, "cr-overlay"), a.element.appendChild(e), e.appendChild(a.elements.preview), e.appendChild(n), e.appendChild(i), r(a.element, s), a.options.customClass && r(a.element, a.options.customClass), g.call(this), a.options.enableZoom && d.call(a)
    }

    function p() {
        return this.options.enableExif && window.EXIF
    }

    function h(e) {
        if (this.options.enableZoom) {
            var t = this.elements.zoomer,
                n = B(e, 4);
            t.value = Math.max(t.min, Math.min(t.max, n))
        }
    }

    function d() {
        function e() {
            m.call(n, {
                value: parseFloat(o.value),
                origin: new T(n.elements.preview),
                viewportRect: n.elements.viewport.getBoundingClientRect(),
                transform: H.parse(n.elements.preview)
            })
        }

        function t(t) {
            var i, o;
            i = t.wheelDelta ? t.wheelDelta / 1200 : t.deltaY ? t.deltaY / 1060 : t.detail ? t.detail / -60 : 0, o = n._currentZoom + i, t.preventDefault(), h.call(n, o), e.call(n)
        }
        var n = this,
            i = n.elements.zoomerWrap = document.createElement("div"),
            o = n.elements.zoomer = document.createElement("input");
        r(i, "cr-slider-wrap"), r(o, "cr-slider"), o.type = "range", o.step = "0.0001", o.value = 1, o.style.display = n.options.showZoomer ? "" : "none", n.element.appendChild(i), i.appendChild(o), n._currentZoom = 1, n.elements.zoomer.addEventListener("input", e), n.elements.zoomer.addEventListener("change", e), n.options.mouseWheelZoom && (n.elements.boundary.addEventListener("mousewheel", t), n.elements.boundary.addEventListener("DOMMouseScroll", t))
    }

    function m(e) {
        function t() {
            var e = {};
            e[k] = i.toString(), e[j] = a.toString(), o(n.elements.preview, e)
        }
        var n = this,
            i = e ? e.transform : H.parse(n.elements.preview),
            r = e ? e.viewportRect : n.elements.viewport.getBoundingClientRect(),
            a = e ? e.origin : new T(n.elements.preview);
        if (n._currentZoom = e ? e.value : n._currentZoom, i.scale = n._currentZoom, t(), n.options.enforceBoundary) {
            var s = f.call(n, r),
                l = s.translate,
                u = s.origin;
            i.x >= l.maxX && (a.x = u.minX, i.x = l.maxX), i.x <= l.minX && (a.x = u.maxX, i.x = l.minX), i.y >= l.maxY && (a.y = u.minY, i.y = l.maxY), i.y <= l.minY && (a.y = u.maxY, i.y = l.minY)
        }
        t(), D.call(n), y.call(n)
    }

    function f(e) {
        var t = this,
            n = t._currentZoom,
            i = e.width,
            o = e.height,
            r = t.options.boundary.width / 2,
            a = t.options.boundary.height / 2,
            s = t.elements.preview.getBoundingClientRect(),
            l = s.width,
            u = s.height,
            c = i / 2,
            p = o / 2,
            h = -1 * (c / n - r),
            d = h - (l * (1 / n) - i * (1 / n)),
            m = -1 * (p / n - a),
            f = m - (u * (1 / n) - o * (1 / n)),
            v = 1 / n * c,
            g = l * (1 / n) - v,
            w = 1 / n * p,
            y = u * (1 / n) - w;
        return {
            translate: {
                maxX: h,
                minX: d,
                maxY: m,
                minY: f
            },
            origin: {
                maxX: g,
                minX: v,
                maxY: y,
                minY: w
            }
        }
    }

    function v() {
        var e = this,
            t = e._currentZoom,
            n = e.elements.preview.getBoundingClientRect(),
            i = e.elements.viewport.getBoundingClientRect(),
            r = H.parse(e.elements.preview.style[k]),
            a = new T(e.elements.preview),
            s = i.top - n.top + i.height / 2,
            l = i.left - n.left + i.width / 2,
            u = {},
            c = {};
        u.y = s / t, u.x = l / t, c.y = (u.y - a.y) * (1 - t), c.x = (u.x - a.x) * (1 - t), r.x -= c.x, r.y -= c.y;
        var p = {};
        p[j] = u.x + "px " + u.y + "px", p[k] = r.toString(), o(e.elements.preview, p)
    }

    function g() {
        function e(e, t) {
            var n = m.elements.preview.getBoundingClientRect(),
                i = d.y + t,
                o = d.x + e;
            m.options.enforceBoundary ? (p.top > n.top + t && p.bottom < n.bottom + t && (d.y = i), p.left > n.left + e && p.right < n.right + e && (d.x = o)) : (d.y = i, d.x = o)
        }

        function t(e) {
            function t(e) {
                switch (e) {
                    case i:
                        return [1, 0];
                    case o:
                        return [0, 1];
                    case r:
                        return [-1, 0];
                    case a:
                        return [0, -1]
                }
            }
            var i = 37,
                o = 38,
                r = 39,
                a = 40;
            if (!e.shiftKey || e.keyCode != o && e.keyCode != a) {
                if (e.keyCode >= 37 && e.keyCode <= 40) {
                    e.preventDefault();
                    var s = t(e.keyCode);
                    d = H.parse(m.elements.preview), document.body.style[z] = "none", p = m.elements.viewport.getBoundingClientRect(), n(s)
                }
            } else {
                var l = 0;
                l = e.keyCode == o ? parseFloat(m.elements.zoomer.value, 10) + parseFloat(m.elements.zoomer.step, 10) : parseFloat(m.elements.zoomer.value, 10) - parseFloat(m.elements.zoomer.step, 10), m.setZoom(l)
            }
        }

        function n(t) {
            var n = t[0],
                i = t[1],
                r = {};
            e(n, i), r[k] = d.toString(), o(m.elements.preview, r), w.call(m), document.body.style[z] = "", v.call(m), y.call(m), c = 0
        }

        function r(e) {
            if (e.preventDefault(), !f) {
                if (f = !0, l = e.pageX, u = e.pageY, e.touches) {
                    var t = e.touches[0];
                    l = t.pageX, u = t.pageY
                }
                d = H.parse(m.elements.preview), window.addEventListener("mousemove", a), window.addEventListener("touchmove", a), window.addEventListener("mouseup", s), window.addEventListener("touchend", s), document.body.style[z] = "none", p = m.elements.viewport.getBoundingClientRect()
            }
        }

        function a(t) {
            t.preventDefault();
            var n = t.pageX,
                r = t.pageY;
            if (t.touches) {
                var a = t.touches[0];
                n = a.pageX, r = a.pageY
            }
            var s = n - l,
                p = r - u,
                f = {};
            if ("touchmove" == t.type && t.touches.length > 1) {
                var v = t.touches[0],
                    g = t.touches[1],
                    y = Math.sqrt((v.pageX - g.pageX) * (v.pageX - g.pageX) + (v.pageY - g.pageY) * (v.pageY - g.pageY));
                c || (c = y / m._currentZoom);
                var b = y / c;
                return h.call(m, b), void i(m.elements.zoomer)
            }
            e(s, p), f[k] = d.toString(), o(m.elements.preview, f), w.call(m), u = r, l = n
        }

        function s() {
            f = !1, window.removeEventListener("mousemove", a), window.removeEventListener("touchmove", a), window.removeEventListener("mouseup", s), window.removeEventListener("touchend", s), document.body.style[z] = "", v.call(m), y.call(m), c = 0
        }
        var l, u, c, p, d, m = this,
            f = !1;
        m.elements.overlay.addEventListener("mousedown", r), m.elements.viewport.addEventListener("keydown", t), m.elements.overlay.addEventListener("touchstart", r)
    }

    function w() {
        var e = this,
            t = e.elements.boundary.getBoundingClientRect(),
            n = e.elements.preview.getBoundingClientRect();
        o(e.elements.overlay, {
            width: n.width + "px",
            height: n.height + "px",
            top: n.top - t.top + "px",
            left: n.left - t.left + "px"
        })
    }

    function y() {
        var e, t = this,
            n = t.get();
        if (b.call(t))
            if (t.options.update.call(t, n), t.$) t.$(t.element).trigger("update", n);
            else {
                var e;
                window.CustomEvent ? e = new CustomEvent("update", {
                    detail: n
                }) : (e = document.createEvent("CustomEvent"), e.initCustomEvent("update", !0, !0, n)), t.element.dispatchEvent(e)
            }
    }

    function b() {
        return this.elements.preview.offsetHeight > 0 && this.elements.preview.offsetWidth > 0
    }

    function x() {
        var e, t, n, r, a, s = this,
            l = 0,
            u = 1.5,
            c = 1,
            p = {},
            d = s.elements.preview,
            m = s.elements.zoomer,
            f = new H(0, 0, c),
            g = new T,
            y = b.call(s);
        if (y && !s.data.bound) {
            if (s.data.bound = !0, p[k] = f.toString(), p[j] = g.toString(), p.opacity = 1, o(d, p), e = d.getBoundingClientRect(), t = s.elements.viewport.getBoundingClientRect(), n = s.elements.boundary.getBoundingClientRect(), s._originalImageWidth = e.width, s._originalImageHeight = e.height, s.options.enableZoom) {
                s.options.enforceBoundary && (r = t.width / e.width, a = t.height / e.height, l = Math.max(r, a)), l >= u && (u = l + 1), m.min = B(l, 4), m.max = B(u, 4);
                var x = Math.max(n.width / e.width, n.height / e.height);
                c = null !== s.data.boundZoom ? s.data.boundZoom : x, h.call(s, c), i(m)
            } else s._currentZoom = c;
            f.scale = s._currentZoom, p[k] = f.toString(), o(d, p), s.data.points.length ? C.call(s, s.data.points) : E.call(s), v.call(s), w.call(s)
        }
    }

    function C(e) {
        if (4 != e.length) throw "Croppie - Invalid number of points supplied: " + e;
        var t = this,
            n = e[2] - e[0],
            i = t.elements.viewport.getBoundingClientRect(),
            r = t.elements.boundary.getBoundingClientRect(),
            a = {
                left: i.left - r.left,
                top: i.top - r.top
            },
            s = i.width / n,
            l = e[1],
            u = e[0],
            c = -1 * e[1] + a.top,
            p = -1 * e[0] + a.left,
            d = {};
        d[j] = u + "px " + l + "px", d[k] = new H(p, c, s).toString(), o(t.elements.preview, d), h.call(t, s), t._currentZoom = s
    }

    function E() {
        var e = this,
            t = e.elements.preview.getBoundingClientRect(),
            n = e.elements.viewport.getBoundingClientRect(),
            i = e.elements.boundary.getBoundingClientRect(),
            r = n.left - i.left,
            a = n.top - i.top,
            s = r - (t.width - n.width) / 2,
            l = a - (t.height - n.height) / 2,
            u = new H(s, l, e._currentZoom);
        o(e.elements.preview, k, u.toString())
    }

    function _(e) {
        var t = this,
            n = t.elements.canvas,
            i = t.elements.img,
            o = n.getContext("2d"),
            r = p.call(t),
            e = t.options.enableOrientation && e;
        o.clearRect(0, 0, n.width, n.height), n.width = i.width, n.height = i.height, r ? l(i, function(t) {
            u(n, i, parseInt(t)), e && u(n, i, e)
        }) : e && u(n, i, e)
    }

    function R(e) {
        var t = e.points,
            n = document.createElement("div"),
            i = document.createElement("img"),
            a = t[2] - t[0],
            s = t[3] - t[1];
        return r(n, "croppie-result"), n.appendChild(i), o(i, {
            left: -1 * t[0] + "px",
            top: -1 * t[1] + "px"
        }), i.src = e.url, o(n, {
            width: a + "px",
            height: s + "px"
        }), n
    }

    function I(e, t) {
        var n = t.points,
            i = n[0],
            o = n[1],
            r = n[2] - n[0],
            a = n[3] - n[1],
            s = t.circle,
            l = document.createElement("canvas"),
            u = l.getContext("2d"),
            c = r,
            p = a;
        return t.outputWidth && t.outputHeight && (c = t.outputWidth, p = t.outputHeight), l.width = c, l.height = p, t.backgroundColor && (u.fillStyle = t.backgroundColor, u.fillRect(0, 0, c, p)), u.drawImage(e, i, o, r, a, 0, 0, c, p), s && (u.fillStyle = "#fff", u.globalCompositeOperation = "destination-in", u.beginPath(), u.arc(c / 2, p / 2, c / 2, 0, 2 * Math.PI, !0), u.closePath(), u.fill()), l.toDataURL(t.format, t.quality)
    }

    function Z(e, t) {
        var n, i = this,
            o = [],
            r = null;
        if ("string" == typeof e) n = e, e = {};
        else if (Array.isArray(e)) o = e.slice();
        else {
            if ("undefined" == typeof e && i.data.url) return x.call(i), y.call(i), null;
            n = e.url, o = e.points || [], r = "undefined" == typeof e.zoom ? null : e.zoom
        }
        i.data.bound = !1, i.data.url = n || i.data.url, i.data.points = (o || i.data.points).map(function(e) {
            return parseFloat(e)
        }), i.data.boundZoom = r;
        var a = s(n, i.elements.img);
        return a.then(function() {
            i.options.useCanvas && (i.elements.img.exifdata = null, _.call(i, e.orientation || 1)), x.call(i), y.call(i), t && t()
        }), a
    }

    function B(e, t) {
        return parseFloat(e).toFixed(t || 0)
    }

    function F() {
        var e = this,
            t = e.elements.preview.getBoundingClientRect(),
            n = e.elements.viewport.getBoundingClientRect(),
            i = n.left - t.left,
            o = n.top - t.top,
            r = (n.width - e.elements.viewport.offsetWidth) / 2,
            a = (n.height - e.elements.viewport.offsetHeight) / 2,
            s = i + e.elements.viewport.offsetWidth + r,
            l = o + e.elements.viewport.offsetHeight + a,
            u = e._currentZoom;
        (u === 1 / 0 || isNaN(u)) && (u = 1);
        var c = e.options.enforceBoundary ? 0 : Number.NEGATIVE_INFINITY;
        return i = Math.max(c, i / u), o = Math.max(c, o / u), s = Math.max(c, s / u), l = Math.max(c, l / u), {
            points: [B(i), B(o), B(s), B(l)],
            zoom: u
        }
    }

    function L(e) {
        var n, i = this,
            o = F.call(i),
            r = t(N, t({}, e)),
            a = "string" == typeof e ? e : r.type || "viewport",
            s = r.size,
            l = r.format,
            u = r.quality,
            c = r.backgroundColor,
            p = "boolean" == typeof r.circle ? r.circle : "circle" === i.options.viewport.type,
            h = i.elements.viewport.getBoundingClientRect(),
            d = h.width / h.height;
        return "viewport" === s ? (o.outputWidth = h.width, o.outputHeight = h.height) : "object" == typeof s && (s.width && s.height ? (o.outputWidth = s.width, o.outputHeight = s.height) : s.width ? (o.outputWidth = s.width, o.outputHeight = s.width / d) : s.height && (o.outputWidth = s.height * d, o.outputHeight = s.height)), q.indexOf(l) > -1 && (o.format = "image/" + l, o.quality = u), o.circle = p, o.url = i.data.url, o.backgroundColor = c, n = new Promise(function(e) {
            e("canvas" === a ? I.call(i, i.elements.preview, o) : R.call(i, o))
        })
    }

    function X() {
        x.call(this)
    }

    function M(e) {
        if (!this.options.useCanvas) throw "Croppie: Cannot rotate without enableOrientation";
        var t = this,
            n = t.elements.canvas,
            i = (t.elements.img, document.createElement("canvas")),
            o = 1;
        i.width = n.width, i.height = n.height;
        var r = i.getContext("2d");
        r.drawImage(n, 0, 0), (90 === e || -270 === e) && (o = 6), (-90 === e || 270 === e) && (o = 8), (180 === e || -180 === e) && (o = 3), u(n, i, o), m.call(t)
    }

    function Y() {
        var e = this;
        e.element.removeChild(e.elements.boundary), a(e.element, "croppie-container"), e.options.enableZoom && e.element.removeChild(e.elements.zoomerWrap), delete e.elements
    }

    function S(e, n) {
        if (this.element = e, this.options = t(t({}, S.defaults), n), c.call(this), this.options.url) {
            var i = {
                url: this.options.url,
                points: this.options.points
            };
            delete this.options.url, delete this.options.points, Z.call(this, i)
        }
    }
    "function" != typeof Promise && ! function(e) {
        function t(e, t) {
            return function() {
                e.apply(t, arguments)
            }
        }

        function n(e) {
            if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
            if ("function" != typeof e) throw new TypeError("not a function");
            this._state = null, this._value = null, this._deferreds = [], l(e, t(o, this), t(r, this))
        }

        function i(e) {
            var t = this;
            return null === this._state ? void this._deferreds.push(e) : void c(function() {
                var n = t._state ? e.onFulfilled : e.onRejected;
                if (null === n) return void(t._state ? e.resolve : e.reject)(t._value);
                var i;
                try {
                    i = n(t._value)
                } catch (o) {
                    return void e.reject(o)
                }
                e.resolve(i)
            })
        }

        function o(e) {
            try {
                if (e === this) throw new TypeError("A promise cannot be resolved with itself.");
                if (e && ("object" == typeof e || "function" == typeof e)) {
                    var n = e.then;
                    if ("function" == typeof n) return void l(t(n, e), t(o, this), t(r, this))
                }
                this._state = !0, this._value = e, a.call(this)
            } catch (i) {
                r.call(this, i)
            }
        }

        function r(e) {
            this._state = !1, this._value = e, a.call(this)
        }

        function a() {
            for (var e = 0, t = this._deferreds.length; t > e; e++) i.call(this, this._deferreds[e]);
            this._deferreds = null
        }

        function s(e, t, n, i) {
            this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.resolve = n, this.reject = i
        }

        function l(e, t, n) {
            var i = !1;
            try {
                e(function(e) {
                    i || (i = !0, t(e))
                }, function(e) {
                    i || (i = !0, n(e))
                })
            } catch (o) {
                if (i) return;
                i = !0, n(o)
            }
        }
        var u = setTimeout,
            c = "function" == typeof setImmediate && setImmediate || function(e) {
                u(e, 1)
            },
            p = Array.isArray || function(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            };
        n.prototype["catch"] = function(e) {
            return this.then(null, e)
        }, n.prototype.then = function(e, t) {
            var o = this;
            return new n(function(n, r) {
                i.call(o, new s(e, t, n, r))
            })
        }, n.all = function() {
            var e = Array.prototype.slice.call(1 === arguments.length && p(arguments[0]) ? arguments[0] : arguments);
            return new n(function(t, n) {
                function i(r, a) {
                    try {
                        if (a && ("object" == typeof a || "function" == typeof a)) {
                            var s = a.then;
                            if ("function" == typeof s) return void s.call(a, function(e) {
                                i(r, e)
                            }, n)
                        }
                        e[r] = a, 0 === --o && t(e)
                    } catch (l) {
                        n(l)
                    }
                }
                if (0 === e.length) return t([]);
                for (var o = e.length, r = 0; r < e.length; r++) i(r, e[r])
            })
        }, n.resolve = function(e) {
            return e && "object" == typeof e && e.constructor === n ? e : new n(function(t) {
                t(e)
            })
        }, n.reject = function(e) {
            return new n(function(t, n) {
                n(e)
            })
        }, n.race = function(e) {
            return new n(function(t, n) {
                for (var i = 0, o = e.length; o > i; i++) e[i].then(t, n)
            })
        }, n._setImmediateFn = function(e) {
            c = e
        }, "undefined" != typeof module && module.exports ? module.exports = n : e.Promise || (e.Promise = n)
    }(this), "function" != typeof window.CustomEvent && ! function() {
        function e(e, t) {
            t = t || {
                bubbles: !1,
                cancelable: !1,
                detail: void 0
            };
            var n = document.createEvent("CustomEvent");
            return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
        }
        e.prototype = window.Event.prototype, window.CustomEvent = e
    }();
    var j, k, z, P = ["Webkit", "Moz", "ms"],
        W = document.createElement("div").style;
    k = e("transform"), j = e("transformOrigin"), z = e("userSelect");
    var O = "translate3d",
        A = ", 0px",
        H = function(e, t, n) {
            this.x = parseFloat(e), this.y = parseFloat(t), this.scale = parseFloat(n)
        };
    H.parse = function(e) {
        return e.style ? H.parse(e.style[k]) : e.indexOf("matrix") > -1 || e.indexOf("none") > -1 ? H.fromMatrix(e) : H.fromString(e)
    }, H.fromMatrix = function(e) {
        var t = e.substring(7).split(",");
        return t.length && "none" !== e || (t = [1, 0, 0, 1, 0, 0]), new H(parseInt(t[4], 10), parseInt(t[5], 10), parseFloat(t[0]))
    }, H.fromString = function(e) {
        var t = e.split(") "),
            n = t[0].substring(O.length + 1).split(","),
            i = t.length > 1 ? t[1].substring(6) : 1,
            o = n.length > 1 ? n[0] : 0,
            r = n.length > 1 ? n[1] : 0;
        return new H(o, r, i)
    }, H.prototype.toString = function() {
        return O + "(" + this.x + "px, " + this.y + "px" + A + ") scale(" + this.scale + ")"
    };
    var T = function(e) {
        if (!e || !e.style[j]) return this.x = 0, void(this.y = 0);
        var t = e.style[j].split(" ");
        this.x = parseFloat(t[0]), this.y = parseFloat(t[1])
    };
    T.prototype.toString = function() {
        return this.x + "px " + this.y + "px"
    };
    var D = n(w, 500),
        N = {
            type: "canvas",
            format: "png",
            quality: 1
        },
        q = ["jpeg", "webp", "png"];
    if (window.jQuery) {
        var $ = window.jQuery;
        $.fn.croppie = function(e) {
            var t = typeof e;
            if ("string" === t) {
                var n = Array.prototype.slice.call(arguments, 1),
                    i = $(this).data("croppie");
                return "get" === e ? i.get() : "result" === e ? i.result.apply(i, n) : "bind" === e ? i.bind.apply(i, n) : this.each(function() {
                    var t = $(this).data("croppie");
                    if (t) {
                        var i = t[e];
                        if (!$.isFunction(i)) throw "Croppie " + e + " method not found";
                        i.apply(t, n), "destroy" === e && $(this).removeData("croppie")
                    }
                })
            }
            return this.each(function() {
                var t = new S(this, e);
                t.$ = $, $(this).data("croppie", t)
            })
        }
    }
    S.defaults = {
        viewport: {
            width: 100,
            height: 100,
            type: "square"
        },
        boundary: {
            width: 300,
            height: 300
        },
        orientationControls: {
            enabled: !0,
            leftClass: "",
            rightClass: ""
        },
        customClass: "",
        showZoomer: !0,
        enableZoom: !0,
        mouseWheelZoom: !0,
        enableExif: !1,
        enforceBoundary: !0,
        enableOrientation: !1,
        update: function() {}
    }, t(S.prototype, {
        bind: function(e, t) {
            return Z.call(this, e, t)
        },
        get: function() {
            return F.call(this)
        },
        result: function(e) {
            return L.call(this, e)
        },
        refresh: function() {
            return X.call(this)
        },
        setZoom: function(e) {
            h.call(this, e), i(this.elements.zoomer)
        },
        rotate: function(e) {
            M.call(this, e)
        },
        destroy: function() {
            return Y.call(this)
        }
    }), exports.Croppie = window.Croppie = S, "object" == typeof module && module.exports && (module.exports = S)
});;

function BodasLib() {
    this.isSafari = function() {
        return -1 != navigator.userAgent.indexOf("Safari") && -1 == navigator.userAgent.indexOf("Chrome")
    }, this.cutText = function(a, b, c) {
        return c = c || "...", a.length > b ? a.substring(0, b) + c : this
    }, this.getCookie = function(a) {
        var b = document.cookie.match("(^|;)\\s*" + a + "\\s*=\\s*([^;]+)"),
            c = b ? unescape(b.pop()) : null;
        return c
    }, this.deleteCookie = function(a, b) {
        var c = this.deleteCookie.arguments,
            d = this.deleteCookie.arguments.length,
            e = new Date,
            f = d > 3 ? c[3] : "/",
            g = d > 4 ? c[4] : null,
            h = d > 5 ? c[5] : !1;
        document.cookie = a + "=" + escape(b) + "; expires=" + e.toGMTString() + (null == f ? "/" : "; path=" + f) + (null == g ? "; domain=" + globals.Request_Cookie_domain : "; domain=" + g) + (1 == h ? "; secure" : "")
    }, this.setCookieSession = function(a, b) {
        var c = this.setCookieSession.arguments,
            d = this.setCookieSession.arguments.length,
            e = d > 3 ? c[3] : "/",
            f = d > 4 ? c[4] : null,
            g = d > 5 ? c[5] : !1;
        document.cookie = a + "=" + escape(b) + (null !== e && e ? "; path=" + e : "/") + (null === f ? "; domain=" + globals.Request_Cookie_domain : "; domain=" + f) + (g === !0 ? "; secure" : "")
    }, this.setCookieTime = function(a, b, c) {
        var d = this.setCookieTime.arguments,
            e = this.setCookieTime.arguments.length,
            f = e > 3 ? d[3] : "/",
            g = e > 4 ? d[4] : null,
            h = e > 5 ? d[5] : !1,
            i = new Date;
        if (c) {
            var j = i.getTime();
            j += 24 * c * 3600 * 1e3, i.setTime(j)
        } else i.setYear(9999);
        document.cookie = a + "=" + escape(b) + "; expires=" + i.toGMTString() + (null == f ? "/" : "; path=" + f) + (null == g ? "; domain=" + globals.Request_Cookie_domain : "; domain=" + g) + (1 == h ? "; secure" : "")
    }
}

function InternalTrackingConfig(a, b, c) {
    c = c || {}, this.idCategory = a, this.idAction = b, this.name = c.name, this.extraData = c.extraData || {}
}

function common_stripTrailingSlash(a) {
    return "/" == a.substr(-1) ? a.substr(0, a.length - 1) : a
}

function strtr(a, b, c) {
    var d, e, f, g = "";
    for (d = 0, e = a.length; e > d; d++) f = b.indexOf(a.charAt(d)), g += f >= 0 ? c.charAt(f) : a.charAt(d);
    return g
}

function _s() {
    var a = arguments[0],
        b = String.prototype.sprintf.apply(a, Array.prototype.slice.call(arguments, 1));
    return b
}

function _ns() {
    var a, b = arguments[0],
        c = arguments[1],
        d = arguments[2];
    a = 1 == d ? b : c;
    var e = String.prototype.sprintf.apply(a, Array.prototype.slice.call(arguments, 3));
    return e
}

function nl2br(a, b) {
    var c = b || "undefined" == typeof b ? "<br />" : "<br>";
    return (a + "").replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, "$1" + c + "$2")
}

function common_tiny_complete_init() {
    var a = {
        valid_elements: "strong/b,em/i,strike,u,#p[align],-ol[type|compact],-ul[type|compact],-li,br,-span[style],-a[href|title|target]",
        plugins: "paste,bodas,link,spellchecker",
        toolbar: "mymenubutton bold italic | justifyleft ustifyfull bullist numlist | undo redo"
    };
    common_tiny_init(a)
}

function common_tiny_init(a, b, c) {
    "undefined" == typeof b && (b = !1), "undefined" == typeof c && (c = !1);
    var d = a || {},
        e = "es";
    switch (globals.Request_Language) {
        case "en":
            e = "en";
            break;
        case "it":
            e = "it";
            break;
        case "fr":
            e = "fr_FR";
            break;
        case "pt":
            e = "pt_" + globals.Request_Country
    }
    var f = {
        mode: "specific_textareas",
        editor_deselector: "app-no-tiny",
        menubar: !1,
        relative_urls: !1,
        remove_script_host: !1,
        schema: "html5",
        language: e,
        statusbar: !1,
        valid_elements: "strong/b,em/i,strike,u,#p[align],-ol[type|compact],-ul[type|compact],-li,br,-span[style]",
        plugins: "paste,bodas,link,spellchecker",
        toolbar: "mymenubutton bold italic | justifyleft ustifyfull bullist numlist | undo redo",
        content_css: globals.subdomain_cdn_css + "/assets/css/tiny/default.css",
        skin: "phoenix"
    };
    $(".app-tiny-focus").off("click").on("click", function() {
        $(this).attr("data-id-focus") && tinyMCE.get($(this).data("id-focus")).focus()
    }), d = $.extend({}, f, d), common_isMobileDevice() && (common_isAndroidDevice() || common_isSafariIpad()) ? (b ? c ? d.toolbar = "bold italic bodasAddPhoto bodasSmileys" : d.toolbar = "bold italic bodasSmileys" : d.toolbar = "bold italic", d.body_class = "tinyFix") : (common_isMobileDevice() || common_isInternetExplorer8()) && (d.toolbar = "bold italic"), d.setup = function(b) {
        var c = function(a, b) {
            $(".app-common-captcha").is(":hidden") && ($(".app-common-captcha").show(), $(".app-common-captcha-img", ".app-common-captcha").attr("src") || $(".app-common-captcha-img", ".app-common-captcha").attr("src", "/captcha/captcha.php?" + Math.random()))
        };
        b.on("keypress", c), b.on("paste", c), "undefined" != typeof a.setup && a.setup(b)
    }, tinymce.init(d)
}

function common_teDIR(a) {
    common_trackEvent("Directorio", a)
}

function common_teME(a) {
    common_trackEvent("Menu Proveedor", a)
}

function common_teAR(a) {
    common_trackEvent("Articulos", a)
}

function common_teCOM(a) {
    common_trackEvent("Comunidad", a)
}

function common_teTOOL(a) {
    common_trackEvent("Tools", a)
}

function common_teCAT(a) {
    common_trackEvent("Catalogo", a)
}

function common_teSorteo(a) {
    ga_trackEventAll("PrizeDraw", a, a, 0, !1), common_trackEvent("Concurso", a)
}

function common_trackEvent(a, b) {
    common_getPageTrackerReduced()._trackEvent(a, b)
}

function common_getPageTrackerReduced() {
    return getPageTrackerReduced()
}

function common_getBrowser() {
    var a = {
        init: function() {
            this.browser = this.searchString(this.dataBrowser) || "An unknown browser", this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "an unknown version", this.OS = this.searchString(this.dataOS) || "an unknown OS"
        },
        searchString: function(a) {
            for (var b = 0; b < a.length; b++) {
                var c = a[b].string,
                    d = a[b].prop;
                if (this.versionSearchString = a[b].versionSearch || a[b].identity, c) {
                    if (-1 != c.indexOf(a[b].subString)) return a[b].identity
                } else if (d) return a[b].identity
            }
        },
        searchVersion: function(a) {
            var b = a.indexOf(this.versionSearchString);
            if (-1 != b) return parseFloat(a.substring(b + this.versionSearchString.length + 1))
        },
        dataBrowser: [{
            string: navigator.userAgent,
            subString: "Chrome",
            identity: "Chrome"
        }, {
            string: navigator.userAgent,
            subString: "OmniWeb",
            versionSearch: "OmniWeb/",
            identity: "OmniWeb"
        }, {
            string: navigator.vendor,
            subString: "Apple",
            identity: "Safari",
            versionSearch: "Version"
        }, {
            prop: window.opera,
            identity: "Opera",
            versionSearch: "Version"
        }, {
            string: navigator.vendor,
            subString: "iCab",
            identity: "iCab"
        }, {
            string: navigator.vendor,
            subString: "KDE",
            identity: "Konqueror"
        }, {
            string: navigator.userAgent,
            subString: "Firefox",
            identity: "Firefox"
        }, {
            string: navigator.vendor,
            subString: "Camino",
            identity: "Camino"
        }, {
            string: navigator.userAgent,
            subString: "Netscape",
            identity: "Netscape"
        }, {
            string: navigator.userAgent,
            subString: "MSIE",
            identity: "Explorer",
            versionSearch: "MSIE"
        }, {
            string: navigator.userAgent,
            subString: "Gecko",
            identity: "Mozilla",
            versionSearch: "rv"
        }, {
            string: navigator.userAgent,
            subString: "Mozilla",
            identity: "Netscape",
            versionSearch: "Mozilla"
        }],
        dataOS: [{
            string: navigator.platform,
            subString: "Win",
            identity: "Windows"
        }, {
            string: navigator.platform,
            subString: "Mac",
            identity: "Mac"
        }, {
            string: navigator.userAgent,
            subString: "iPhone",
            identity: "iPhone/iPod"
        }, {
            string: navigator.platform,
            subString: "Linux",
            identity: "Linux"
        }]
    };
    return a.init(), a
}

function common_isInternetExplorer8() {
    return -1 !== navigator.userAgent.indexOf("MSIE 8.0")
}

function common_isMobileDevice() {
    return -1 !== navigator.userAgent.indexOf("iPhone") || -1 !== navigator.userAgent.indexOf("iPod") || -1 !== navigator.userAgent.indexOf("iPad") || -1 !== navigator.userAgent.indexOf("symbian") || -1 !== navigator.userAgent.indexOf("android") || -1 !== navigator.userAgent.indexOf("Android") || -1 !== navigator.userAgent.indexOf("windows ce") || -1 !== navigator.userAgent.indexOf("blackberry") || -1 !== navigator.userAgent.indexOf("palm") ? !0 : !1
}

function common_isTouchDevice() {
    return "ontouchstart" in window || navigator.maxTouchPoints
}

function common_isUploadAbleDevice() {
    return -1 != navigator.userAgent.indexOf("iPhone") || -1 != navigator.userAgent.indexOf("iPod") || -1 != navigator.userAgent.indexOf("iPad") || -1 != navigator.userAgent.indexOf("symbian") || -1 != navigator.userAgent.indexOf("windows ce") || -1 != navigator.userAgent.indexOf("blackberry") || -1 != navigator.userAgent.indexOf("palm") ? !1 : !0
}

function common_isIpad() {
    return navigator.userAgent.match("/iPad/i")
}

function common_isIpadNew() {
    return -1 != navigator.userAgent.indexOf("iPad")
}

function common_isAndroidDevice() {
    return -1 != navigator.userAgent.indexOf("Android")
}

function common_isSafariIpad() {
    return -1 != navigator.userAgent.indexOf("Safari") && -1 != navigator.userAgent.indexOf("iPad")
}

function common_isChromeIOS() {
    return navigator.userAgent.match("CriOS")
}

function common_isChromeIpad() {
    return -1 != navigator.userAgent.indexOf("CriOS") && -1 == navigator.userAgent.indexOf("Mobile")
}

function common_isIOS() {
    return navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? !0 : !1
}

function common_isSafari() {
    return -1 != navigator.userAgent.indexOf("Safari") && -1 == navigator.userAgent.indexOf("Chrome")
}

function common_debateCitar(a, b, c, d) {
    var e = null;
    (null === d || "undefined" == typeof d) && (d = ""), "function" == typeof tinyMCE.getInstanceById ? "undefined" == typeof tinyMCE.getInstanceById("Texto" + d) ? ($("#Texto" + d).val("<!--[citar]--><p>" + 'Written by' + " " + a + ":</p><p> " + $.trim($("#msg_" + b).html()) + "</p><hr><!--[/citar]--><br/>\n\n"), $("#idCitado").val(c)) : (e = tinyMCE.getInstanceById("Texto" + d), e.setContent("<!--[citar]--><p>" + 'Written by' + " " + a + ":</p><p> " + $.trim($("#msg_" + b).html()) + "</p><hr><!--[/citar]--><br/>"), $("#idCitado").val(c)) : "undefined" == typeof tinyMCE.get("Texto" + d) ? ($("#Texto" + d).val("<!--[citar]--><p>" + 'Written by' + " " + a + ":</p><p> " + $.trim($("#msg_" + b).html()) + "</p><hr><!--[/citar]--><br/>\n\n"), $("#idCitado").val(c)) : (e = tinyMCE.get("Texto" + d), e.setContent("<!--[citar]--><p>" + 'Written by' + " " + a + ":</p><p> " + $.trim($("#msg_" + b).html()) + "</p><hr><!--[/citar]--><br/>&nbsp;"), $("#idCitado").val(c)), null != e && (e.selection.select(e.getBody(), !0), e.selection.collapse(!1), e.execCommand("mceInsertContent", !1, "<br> ")), window.location.hash = "responder" + d, elemResponder = $("a[name='responder']"), 0 == elemResponder.length && (elemResponder = $("#comentarios")), window.scrollTo(0, elemResponder.offset().top - 200)
}

function common_header_showTab(a, b) {
    var c = $(b),
        d = c.find(".app-header-tab");
    if ($(a.target).hasClass("app-header-tab") && !c.attr("data-loaded")) {
        var e = c.find(".app-common-header-dropdown:first");
        c.attr("data-loaded", "true"), $(e).load("/utils-Tabs.php?tab=" + c.data("tab")), $(a.target).mouseenter(function() {
            d.addClass("show-caret"), $(this).parent().find(".app-common-header-dropdown:first").show()
        }), $(b).mouseleave(function() {
            d.removeClass("show-caret"), $(this).find(".app-common-header-dropdown:first").hide()
        }), $(e).show(), d.addClass("show-caret")
    }
}

function common_htmlInfoWithSmilies(a) {
    var b;
    return $.ajax({
        type: "POST",
        async: !1,
        url: "/com-HtmlInfoWithSmilies.php",
        data: {
            html: a
        },
        success: function(a) {
            b = a
        }
    }), b
}

function common_htmlInfoWithVideos(a) {
    var b = a.match(/app-video-preview/g);
    return b ? b.length : 0
}

function common_validateNumber(a) {
    var b = null;
    return $.ajax({
        url: "/json/validatorNumber.php?number=" + encodeURIComponent(a),
        async: !1,
        dataType: "json",
        success: function(a) {
            b = a.result
        }
    }), b
}

function common_VerificaComentario(a, b) {
    tinyMCE.triggerSave();
    var c = $("#Texto").val(),
        d = common_htmlInfoWithSmilies(c);
    return d.size < 5 ? (alert('The comment must contain at least 5 characters.'), !1) : d.numSmilies > 3 ? (alert('Refrain from adding more than 3 emoticons, otherwise you\'ll get dizzy reading the message.'), !1) : (common_callEnsureLogged(function() {
        b.submit()
    }, "inspiration"), document.frmComentario.btnSubmit.disabled = !0, !1)
}

function common_showLoading(a) {
    $(a).html('<div style="width: 65px;height: 65px;position: relative;display: block;width: 100%;"><span class="loader" id="loader"></span></div>')
}

function common_validateProviderMailField(a) {
    return common_validateMailField(a, !1)
}

function common_searchEmpresa(a, b, c, d, e) {
    if ("undefined" != typeof d) var f = "which" in d ? d.which : d.keyCode;
    c = "undefined" != typeof c ? c : !1;
    var g = {
        onChange: function() {}
    };
    e = $.extend({}, g, e);
    var h = $(a).closest("form"),
        i = $(".app-suggest-vendor-div-" + $(a).data("suffix") + ":first", h),
        j = $(".app-suggest-vendor-id-" + $(a).data("suffix") + ":first", h);
    if ("undefined" == typeof d || "undefined" != typeof d && 38 != f && 40 != f && 13 != f) {
        i.addClass("loading").html($("<span />").addClass("loading").html('Loading'));
        var k = "/utils-SearchEmpresas.php?search=" + encodeURIComponent($(a).val()) + "&soloValidas=" + b + "&idCateg=" + ($(a).data("categs") || "") + "&idThumb=" + ($(a).data("id-thumb") || "") + "&idSector=" + $(a).data("sectors") + "&concurso=" + $(a).data("concurso");
        $.get(k, function(b) {
            var d, f, g, h, k, l = 0;
            if (j.val(""), ("0" === b.trim() || "" === b.trim()) && e.hideNoResults) return void i.hide();
            if (i.removeClass("loading").html("").show(), b = b.split("\n"), navigationPos = 0, maxNavigationPos = b.length, b.length > 1) {
                d = $();
                for (var m = 0; m < b.length - 1; m++) f = b[m].split("||"), c ? (g = 1 != f[5] ? '<span style="background-color: #ffcccc">' : "", g += f[9] + " | " + f[2] + " (" + f[0] + ") | <strong>" + f[3] + "</strong>", g += 1 == f[5] ? "</span>" : "") : g = "<span class='mr5'>" + f[9] + "</span> <span class='suggest-navigation-content'>" + f[2] + ", " + f[3] + "</span>", h = $("<li />").attr("data-id", f[0]).attr("data-nombre", f[1]).html(g).addClass("suggest-navigation").addClass("suggest-item-navigation-" + (m + 1)).on("click", function() {
                    i.html("").hide(), $(a).val(unescape($(this).data("nombre"))), j.val($(this).data("id")), e.onChange({
                        id: $(this).data("id")
                    }), $(a).attr("tabindex") && $("*[tabindex=" + (parseInt($(a).attr("tabindex")) + 1) + "]").focus()
                }), d = d.add(h);
                l = b[m], i.append($("<div/>").addClass("suggest-search-vendor").append($("<ul />").addClass("box-scroll").append(d))), boxscroll = i.find(".box-scroll").jScrollPane(), api = boxscroll.data("jsp")
            }
            0 === l ? (i.append($("<div />").addClass("suggest-message-no-results").html('No matches have been found')), $(a).data("rate-vendor-option") && $(a).val().length > 0 && (h = $("<div />").addClass("suggest-message-add-vendor").html($("<p />").html('Review about' + " " + $(a).val())).on("click", function() {
                i.html("").hide()
            }), i.append(h))) : l > 10 && (k = $(a).data("add-vendor-option") ? "suggest-message-num-results-soft" : "suggest-message-num-results", h = $("<div />").addClass(k).html('Showing' + " 10 " + 'providers out of' + " " + l + " " + ' '), i.append(h)), $(a).data("add-vendor-option") && (h = $("<div />").addClass("suggest-message-add-vendor").html($("<p />").html('Can\'t find the provider? Click here')).on("click", function() {
                window[$(a).data("function-on-click-not-found")](a)
            }), i.append(h))
        })
    }
    if ("undefined" != typeof d) {
        if (38 == f && navigationPos > 0 && navigationPos--, 40 == f && maxNavigationPos > navigationPos && navigationPos++, 13 == f) {
            d.preventDefault();
            var l = i.find(".suggest-item-navigation-" + navigationPos);
            return l.length > 0 ? (l.trigger("click"), !1) : !0
        }
        i.find(".suggest-navigation").removeClass("bg"), i.find(".suggest-item-navigation-" + navigationPos).addClass("bg");
        var m = i.find(".suggest-item-navigation-" + navigationPos);
        navigationPos > 0 && maxNavigationPos > navigationPos && (navigationPos == maxNavigationPos - 1 ? api.scrollToElement(m, !0) : api.scrollToElement(m))
    }
}

function common_searchEmpresaReset(a, b) {
    var c = $(a).closest("form");
    if (b = "undefined" != typeof b ? b : !0, !common_isSafariIpad()) {
        var d = $(".app-suggest-vendor-div-" + $(a).data("suffix") + ":first", c),
            e = $(".app-suggest-vendor-id-" + $(a).data("suffix") + ":first", c);
        setTimeout(function() {
            e.val() || (d.hide().html(""), b && $(a).val(""))
        }, 500)
    }
}

function common_searchPoblacion(a, b, c, d, e) {
    if ("undefined" != typeof c && null != c) var f = "which" in c ? c.which : c.keyCode;
    var g, h, i;
    e = e || {}, e.suggestContainer ? (g = $(e.suggestContainer).find(".app-suggest-poblacion-div-" + $(a).data("suffix") + ":first"), h = $(e.suggestContainer).find(".app-suggest-poblacion-id-" + $(a).data("suffix") + ":first"), i = $(e.suggestContainer).find(".app-suggest-provincia-id-" + $(a).data("suffix") + ":first")) : (g = $(".app-suggest-poblacion-div-" + $(a).data("suffix") + ":first"), h = $(".app-suggest-poblacion-id-" + $(a).data("suffix") + ":first"), i = $(".app-suggest-provincia-id-" + $(a).data("suffix") + ":first"));
    var j = "";
    if (d = "undefined" != typeof d ? d : !1, d && (j = window.location.protocol + "//" + globals.subdomain), ("undefined" == typeof c || null == c || "undefined" != typeof c && null != c && 38 != f && 40 != f && 13 != f) && (g.html($("<span />").addClass("loading").html('Loading')), $.get(j + "/utils-SearchPoblacion.php?id_pais=" + b + "&search=" + encodeURIComponent($(a).val()), function(b) {
            var c, d, e;
            if (h.val(""), i && i.val(""), g.removeClass("loading").html("").show(), b = b.split("\n"), navigationPos = 0, maxNavigationPos = b.length, b.length > 1) {
                c = $();
                for (var f = 0; f < b.length - 1; f++) d = b[f].split("||"), e = $("<li />").attr("data-id-provincia", d[0]).attr("data-id-poblacion", d[1]).attr("data-nombre-poblacion", d[2]).addClass("suggest-navigation").addClass("suggest-item-navigation-" + (f + 1)).html("<strong>" + d[3] + "</strong><br/><small>" + d[4] + "</small>").on("click", function() {
                    g.html("").hide(), $(a).val(unescape($(this).data("nombre-poblacion"))), i && i.val($(this).data("id-provincia")), h.val($(this).data("id-poblacion")).change(), $(a).attr("tabindex") && $("*[tabindex=" + (parseInt($(a).attr("tabindex")) + 1) + "]").focus(), $("#txtStrPoblacion").trigger("resize")
                }), c = c.add(e);
                g.append($("<div/>").addClass("column-container").append($("<ul />").addClass("box-scroll").append(c))), boxscroll = g.find(".box-scroll").jScrollPane(), api = boxscroll.data("jsp")
            } else $(a).val() ? g.append($("<div />").addClass("suggest-message-no-results").html('No matches have been found')) : g.append($("<div />").addClass("suggest-message-start-writing").html('Type the name of the location and select it from the list.'))
        })), "undefined" != typeof c) {
        if (38 == f && navigationPos > 0 && navigationPos--, 40 == f && maxNavigationPos > navigationPos && navigationPos++, 13 == f) {
            c.preventDefault();
            var k = g.find(".suggest-item-navigation-" + navigationPos);
            return k.length > 0 ? (k.trigger("click"), !1) : !1
        }
        g.find(".suggest-navigation").removeClass("bg"), g.find(".suggest-item-navigation-" + navigationPos).addClass("bg");
        var l = g.find(".suggest-item-navigation-" + navigationPos);
        navigationPos > 0 && maxNavigationPos > navigationPos && (navigationPos == maxNavigationPos - 1 ? api.scrollToElement(l, !0) : api.scrollToElement(l))
    }
}

function common_searchPoblacionWebsite(a, b, c, d) {
    if ("undefined" != typeof c && null != c) var e = "which" in c ? c.which : c.keyCode;
    var f = $(".app-suggest-poblacion-div-" + $(a).data("suffix") + ":first"),
        g = $(".app-suggest-poblacion-id-" + $(a).data("suffix") + ":first"),
        h = $(".app-suggest-provincia-id-" + $(a).data("suffix") + ":first"),
        i = "";
    if (d = "undefined" != typeof d ? d : !1, d && (i = window.location.protocol + "//" + globals.subdomain), ("undefined" == typeof c || null == c || "undefined" != typeof c && null != c && 38 != e && 40 != e && 13 != e) && (f.html($("<span />").addClass("loading").html('Loading')), $.get(i + "/utils-SearchPoblacionWebsite.php?id_pais=" + b + "&search=" + $(a).val(), function(b) {
            var c, d, e;
            if (g.val(""), h && h.val(""), f.removeClass("loading").html("").show(), b = b.split("\n"), navigationPos = 0, maxNavigationPos = b.length, b.length > 1) {
                c = $();
                for (var i = 0; i < b.length - 1; i++) d = b[i].split("||"), e = $("<li />").attr("data-id-provincia", d[0]).attr("data-id-poblacion", d[1]).attr("data-nombre-poblacion", d[2]).addClass("suggest-navigation").addClass("suggest-item-navigation-" + (i + 1)).html("<strong>" + d[2] + "</strong><br/>").on("click", function() {
                    f.html("").hide(), $(a).val(decodeURIComponent($(this).data("nombre-poblacion"))), h && h.val($(this).data("id-provincia")), g.val($(this).data("id-poblacion")).change(), $(a).attr("tabindex") && $("*[tabindex=" + (parseInt($(a).attr("tabindex")) + 1) + "]").focus()
                }), c = c.add(e);
                f.append($("<div/>").addClass("column-container").append($("<ul />").addClass("box-scroll").append(c))), boxscroll = f.find(".box-scroll").jScrollPane(), api = boxscroll.data("jsp")
            } else $(a).val() ? f.append($("<div />").addClass("suggest-message-no-results").html('No matches have been found')) : f.append($("<div />").addClass("suggest-message-start-writing").html('Type the name of the location and select it from the list.'))
        })), "undefined" != typeof c) {
        if (38 == e && navigationPos > 0 && navigationPos--, 40 == e && maxNavigationPos > navigationPos && navigationPos++, 13 == e) {
            c.preventDefault();
            var j = f.find(".suggest-item-navigation-" + navigationPos);
            return j.length > 0 ? (j.trigger("click"), !1) : !1
        }
        f.find(".suggest-navigation").removeClass("bg"), f.find(".suggest-item-navigation-" + navigationPos).addClass("bg");
        var k = f.find(".suggest-item-navigation-" + navigationPos);
        navigationPos > 0 && maxNavigationPos > navigationPos && (navigationPos == maxNavigationPos - 1 ? api.scrollToElement(k, !0) : api.scrollToElement(k))
    }
}

function common_searchPoblacionAlertIfEmpty(a) {
    var b = $(".app-suggest-poblacion-div-" + $(a).data("suffix") + ":first");
    $(a).val() || (b.removeClass("loading").html("").show(), b.append($("<div />").addClass("suggest-message-start-writing").html('Type the name of the location and select it from the list.')))
}

function common_searchPoblacionReset(a, b) {
    if (!document.ignoreBlur) {
        var c = $(".app-suggest-poblacion-div-" + $(a).data("suffix") + ":first"),
            d = $(".app-suggest-poblacion-id-" + $(a).data("suffix") + ":first");
        $(".app-suggest-provincia-id-" + $(a).data("suffix") + ":first");
        b ? d.val() || (c.hide().html(""), $(a).val(""), $("#txtStrPoblacion").attr("size", $("#txtStrPoblacion").attr("placeholder").length), $(this).trigger("keyup")) : setTimeout(function() {
            d.val() || (c.hide().html(""), $(a).val(""))
        }, 300)
    }
}

function common_searchShowChangePaisSelect() {
    $("#comboPaises").removeClass("dnone"), $("#infoPais").remove()
}

function searchSubRubro() {
    var a = $("#Rubro option:selected").val();
    $.ajax({
        type: "POST",
        url: "/emp-AdminPropuestasSubRubros.php",
        data: {
            idRubro: a
        },
        success: function(a) {
            $("#Subrubro").empty(), $("#Actividad").empty(), $("#Subrubro").append('<option value="-1" disabled selected>-- Seleccionar --</option>'), $.each(a, function() {
                $("#Subrubro").append('<option value="' + this.ID_SUBRUBRO + '">' + this.SUBRUBRO_DESC + "</option>")
            })
        }
    })
}

function searchActividadesRubro() {
    var a = $("#Subrubro option:selected").val();
    $.ajax({
        type: "POST",
        url: "/emp-AdminPropuestasActividadesRubros.php",
        data: {
            idSubRubro: a
        },
        success: function(a) {
            $("#Actividad").empty(), $("#Actividad").append('<option value="-1" disabled selected>-- Seleccionar --</option>'), $.each(a, function() {
                $("#Actividad").append('<option value="' + this.ID_ACTIVIDAD_RUBRO + '">' + this.ACTIVIDAD + "</option>")
            })
        }
    })
}

function common_searchChangePais(a) {
    $(a).val(""), $(".app-suggest-poblacion-div-" + $(a).data("suffix") + ":first").hide().html(""), $(".app-suggest-poblacion-id-" + $(a).data("suffix") + ":first").val(""), $(".app-suggest-provincia-id-" + $(a).data("suffix") + ":first").val("")
}

function common_changePaisAltaEmpresa() {
    var a = $("#PaisDestino option:selected").val(),
        b = $("#frmEmpresa").serialize();
    window.location.href = a + "/emp-Alta.php?" + b + "&changeCountry=true"
}

function common_LoadBuscPage(a) {
    document.frmSearch.NumPage.value = a, document.frmSearch.submit()
}

function common_openLayer(a, b, c, d) {
    var e = $("#app-common-layer");
    return "undefined" == typeof a ? (console.error("empty url on common_openLayer()"), !1) : (e.load(a, function() {
        "undefined" != typeof b && null !== b && b(), "undefined" != typeof c && c === !0 ? e.modal({
            keyboard: !1,
            backdrop: "static"
        }) : e.modal()
    }), void("undefined" != typeof d && null !== d && e.on("shown.bs.modal", function() {
        d()
    })))
}

function common_closeLayer() {
    $("#app-common-layer").modal("hide")
}

function common_putInLayer(a, b) {
    $.get(a, function(a) {
        $("#app-common-layer").html(a), "function" == typeof b && b()
    })
}

function common_applyIcheck() {
    $("input:not(.app-not-icheck)").iCheck({
        checkboxClass: "icheckbox_minimal",
        radioClass: "iradio_minimal",
        increaseArea: "20%"
    })
}




function common_recoverPassword(a, b, c) {
    if (b === !0 ? urlRedirect = window.location : urlRedirect = "", c = c ? 1 : 0, 0 === a.trim().length) return alert('Write your email so that we can send you the password'), !1;
    var d = a.trim();
    $.post("/com-RecuperaPasswordRun.php", {
        email: d,
        redirect: encodeURIComponent(urlRedirect),
        esRecuperaDatos: c
    }, function(a) {
        switch (parseInt(a.errCode)) {
            case 0:
                var b = d,
                    c = /@gmail.com$/,
                    e = /@hotmail./,
                    f = /@live./,
                    g = /@yahoo./;
                $("#divBotonRecuperar").remove(), e.test(b) || f.test(b) ? $("#hotmail").show() : c.test(b) ? $("#gmail").show() : g.test(b) && $("#yahoo").show(), $(".alert.alert-error").hide(), $("#email_enviado").slideDown();
                break;
            default:
                alert('We don\'t have record of this email address, make sure it is written correctly or try another.')
        }
    })
}

function common_upload_img(a, b) {
    var c = new Array(".jpg", ".gif", ".png"),
        d = document.getElementById("Imagen" + a).value,
        e = d.substring(d.lastIndexOf(".")).toLowerCase();
    if (d.length < 1) return alert('Select and image before uploading it'), !1;
    for (var f = !1, g = 0; g < c.length; g++)
        if (c[g] == e) {
            f = !0;
            break
        }
    return f ? (document.getElementById("nfile").value = a, document.getElementById("tfile").value = "image", document.getElementById("frmImagen").target = "lFileUpload", 1 == b ? document.getElementById("frmImagen").action = "admin-ContenidoUpload.php" : 2 == b ? document.getElementById("frmImagen").action = "/com-DebateContenidoUpload.php" : 3 == b && (document.getElementById("frmImagen").action = "admin-HoneyUpload.php"), document.getElementById("frmImagen").submit(), document.getElementById("frmImagen").target = "", document.getElementById("frmImagen").value = "Guardar", void(document.getElementById("dImagen1").innerHTML = "<img src='" + globals.subdomain_cdn_img + "/assets/img/loading.gif'>")) : (alert('The image must be in .jpg or .gif format'), !1)
}

function common_ponImagenGaleria(a) {
    var b = new Image;
    return b.name = a, b.onload = getWidthAndHeight, b.onerror = loadFailure, b.src = a, closeToolsLayer(), !1
}

function common_upload_img_run(a, b, c, d, e) {
    1 == d ? $("#dImagen1").load("admin-ContenidoFotoShow.php?nombreimagen=" + a + "&xsize=" + b + "&ysize=" + c) : 2 == d ? $("#dImagen1").load("/com-DebateContenidoFotoShow.php?xsize=" + b + "&ysize=" + c + "&id_foto=" + e) : 3 == d && $("#dImagen1").load("admin-HoneyFotoShow.php?nombreimagen=" + a + "&xsize=" + b + "&ysize=" + c)
}

function common_comPointsLayerShow(a, b, c, d, e, f) {
    var g = _ns('You\'ve earned <span class=\'strong red\'>%s</span> point!', 'You\'ve earned <span class=\'strong red\'>%s</span> points!', b, b),
        h = "";
    "" !== d && (h = '<i class="icon-com icon-com-level' + e + ' icon-left"></i>' + _ns('<strong>%s</strong> point to become <strong>%s</strong>', '<strong>%s</strong> point to become <strong>%s</strong>', c, c, d, d)), html = '<div class="com-layer-points">    <button class="close" aria-label="Close" onclick="common_comPointsLayerHide();">&times;</button>    <div class="com-layer-points-awarded">        <span class="com-layer-points-points">' + b + "</span>        <strong>" + 'points' + '</strong>        <i class="icon-com icon-com-points-plus"></i>    </div>    <div class="com-layer-points-content">        <p class="com-layer-points-title">' + g + "</p>" + ("" !== d ? "<p>" + h + "</p>" : "") + '        <a class="btn-outline outline-rose" rel="nofollow" href="/com-PerfilBadges.php">' + 'View my ranking' + "</a>    </div></div>";
    var i = $("<div>").html(html);
    return i.attr("id", "app-footer-com-point").addClass("com-layer-points-container"), i.appendTo("body"), i.animate({
        opacity: 0,
        bottom: "-20px"
    }, 0).animate({
        opacity: 1,
        bottom: "35px"
    }, 350, "easeOutElastic"), $(window).bind("load", function() {
        i.delay(4e3).animate({
            opacity: 1,
            bottom: "35px"
        }, 0).animate({
            opacity: 0,
            bottom: "-20px"
        }, 200)
    }), !0
}

function common_comPointsLayerHide() {
    $("#app-footer-com-point").hide()
}

function common_comNewBadgeLayer(a) {
    $("#app-common-layer").load("/com-CapaNewBadge.php", function() {
        moreBadges = $(".capa-badge").hasClass("moreBadges"), noBadge = $(".capa-badge").hasClass("noBadge"), noBadge || $("#app-common-layer").modal()
    }), $(".modal").on("hidden.bs.modal", function() {
        moreBadges ? common_comNewBadgeLayer() : a && a()
    })
}

function common_showConcursoFooter() {
    return 1 == GetCookie("hideSCF") ? !1 : void(common_isMobileDevice() || $(document).ready(function() {
        $("#app-common-footer-layer").load("/com-ConcursoFooter.php")
    }))
}

function common_closeConcursoFooter() {
    $("#app-common-footer-layer").hide(), SetCookieSession("hideSCF", "1")
}

function common_closeAltaFoot() {
    $("#alta-layer").hide(), SetCookieSession("NotShowAltaFoot", "1")
}

function common_reenviarMaildeVerificacionNuevoUsuario() {
    return $.post("/com-ReenviarMailVerificacionAlta.php", function(a) {
        $(".app-common-resend-button").html('Email resent!')
    }), !1
}

function common_reenviarMaildeVerificacionNuevoUsuarioBadmail() {
    return $.post("/com-ReenviarMailVerificacionAlta.php", function(a) {
        $(".app-common-resend-button").html('Email resent!')
    }), !1
}

function common_updateNumChars(a, b, c) {
    var d = c - $(a).val().trim().length;
    0 > d ? $(b).css("color", "green").html(_s('%s characters', $(a).val().trim().length)) : $(b).css("color", "gray").html(_s('You need %s more characters', d))
}

function common_social_fbShare(a, b) {
    var c = 640,
        d = 320,
        e = screen.height / 2 - d / 2,
        f = screen.width / 2 - c / 2;
    if (common_isMobileDevice()) {
        var g = $.param({
            u: a,
            t: b
        });
        window.open("https://www.facebook.com/sharer/sharer.php?" + g)
    } else window.open("https://www.facebook.com/sharer.php?s=100&p[title]=" + encodeURIComponent(b) + "&p[url]=" + encodeURIComponent(a), "facebook_share", "top=" + e + ",left=" + f + ",toolbar=0,status=0,width=" + c + ",height=" + d)
}

function common_social_twitterShare(a, b, c) {
    var d = 640,
        e = 260,
        f = screen.height / 2 - e / 2,
        g = screen.width / 2 - d / 2;
    window.open("http://twitter.com/share?url=" + encodeURIComponent(a) + "&text=" + encodeURIComponent(b) + "&via=" + encodeURIComponent(c), "twitter_share", "top=" + f + ",left=" + g + ",toolbar=0,status=0,width=" + d + ",height=" + e)
}

function common_social_googlePlusShare(a) {
    var b = 640,
        c = 320,
        d = screen.height / 2 - c / 2,
        e = screen.width / 2 - b / 2;
    window.open("https://plus.google.com/share?url=" + encodeURIComponent(a), "googleplus_share", "top=" + d + ",left=" + e + ",toolbar=0,status=0,width=" + b + ",height=" + c)
}

function common_social_pinterestShare() {
    $.getScript("//assets.pinterest.com/js/pinmarklet.js?r=" + 99999999 * Math.random())
}

function common_social_share(a, b, c, d) {
    switch (a) {
        case "facebook":
            common_social_fbShare(b, c);
            break;
        case "twitter":
            common_social_twitterShare(b, c, d);
            break;
        case "pinterest":
            common_social_pinterestShare();
            break;
        case "googleplus":
            common_social_googlePlusShare(b)
    }
}

function common_social_share_opinion_fb(a, b, c) {
    var d = 640,
        e = 320,
        f = screen.height / 2 - e / 2,
        g = screen.width / 2 - d / 2;
    $.ajax({
        url: "/utils-TraceShare.php",
        data: {
            url: a,
            idEmpresa: b,
            idOpinion: c,
            tipoShare: 1
        }
    }), window.open("https://www.facebook.com/dialog/feed?app_id=" + globals.Request_FB_AppID + "&display=popup&link=" + encodeURIComponent(a) + "&redirect_uri=" + encodeURIComponent(a), "facebook_share", "top=" + f + ",left=" + g + ",toolbar=0,status=0,width=" + d + ",height=" + e)
}

function common_social_share_opinion_twitter(a, b, c, d) {
    var e = 640,
        f = 260,
        g = screen.height / 2 - f / 2,
        h = screen.width / 2 - e / 2;
    $.ajax({
        url: "/utils-TraceShare.php",
        data: {
            idEmpresa: c,
            idOpinion: d,
            tipoShare: 2
        }
    }), window.open("http://twitter.com/share?url=" + encodeURIComponent(a) + "&text=" + encodeURIComponent(b), "twitter_share", "top=" + g + ",left=" + h + ",toolbar=0,status=0,width=" + e + ",height=" + f)
}

function common_social_share_cronica_fb(a, b, c, d) {
    var e = 640,
        f = 320,
        g = screen.height / 2 - f / 2,
        h = screen.width / 2 - e / 2;
    $.ajax({
        url: "/utils-TraceShare.php",
        data: {
            idEmpresa: c,
            idReal: d,
            tipoShare: 1
        }
    }), window.open("https://www.facebook.com/sharer.php?s=100&p[title]=" + encodeURIComponent(b) + "&p[url]=" + encodeURIComponent(a), "facebook_share", "top=" + g + ",left=" + h + ",toolbar=0,status=0,width=" + e + ",height=" + f)
}

function common_social_share_cronica_twitter(a, b, c, d) {
    var e = 640,
        f = 260,
        g = screen.height / 2 - f / 2,
        h = screen.width / 2 - e / 2;
    $.ajax({
        url: "/utils-TraceShare.php",
        data: {
            idEmpresa: c,
            idReal: d,
            tipoShare: 2
        }
    }), window.open("http://twitter.com/share?url=" + encodeURIComponent(a) + "&text=" + encodeURIComponent(b), "twitter_share", "top=" + g + ",left=" + h + ",toolbar=0,status=0,width=" + e + ",height=" + f)
}

function common_social_share_sello_fb(a, b, c) {
    var d = 640,
        e = 320,
        f = screen.height / 2 - e / 2,
        g = screen.width / 2 - d / 2;
    $.ajax({
        url: "/utils-TraceShare.php",
        data: {
            idEmpresa: b,
            idBadge: c,
            tipoShare: 1
        }
    }), window.open("https://www.facebook.com/dialog/feed?app_id=" + globals.Request_FB_AppID + "&display=popup&link=" + encodeURIComponent(a) + "&redirect_uri=" + encodeURIComponent(a), "facebook_share", "top=" + f + ",left=" + g + ",toolbar=0,status=0,width=" + d + ",height=" + e)
}

function common_social_share_sello_twitter(a, b, c, d) {
    var e = 640,
        f = 260,
        g = screen.height / 2 - f / 2,
        h = screen.width / 2 - e / 2;
    $.ajax({
        url: "/utils-TraceShare.php",
        data: {
            idEmpresa: c,
            idBadge: d,
            tipoShare: 2
        },
        success: function(a) {}
    }), window.open("http://twitter.com/share?url=" + encodeURIComponent(a) + "&text=" + encodeURIComponent(b), "twitter_share", "top=" + g + ",left=" + h + ",toolbar=0,status=0,width=" + e + ",height=" + f)
}

function common_social_share_WeddingAwards_fb(a, b) {
    var c = 640,
        d = 320,
        e = screen.height / 2 - d / 2,
        f = screen.width / 2 - c / 2;
    $.ajax({
        url: "/utils-TraceShare.php",
        data: {
            idEmpresa: b,
            tipoShare: 1,
            isWinnerEdition: globals.Request_Wedding_Awards_Edition
        }
    }), window.open("https://www.facebook.com/dialog/feed?app_id=" + globals.Request_FB_AppID + "&display=popup&link=" + encodeURIComponent(a) + "&redirect_uri=" + encodeURIComponent(a), "facebook_share", "top=" + e + ",left=" + f + ",toolbar=0,status=0,width=" + c + ",height=" + d);
}

function common_social_share_WeddingAwards_twitter(a, b, c) {
    var d = 640,
        e = 260,
        f = screen.height / 2 - e / 2,
        g = screen.width / 2 - d / 2;
    $.ajax({
        url: "/utils-TraceShare.php",
        data: {
            idEmpresa: c,
            tipoShare: 2,
            isWinnerEdition: globals.Request_Wedding_Awards_Edition
        },
        success: function(a) {}
    }), window.open("http://twitter.com/share?url=" + encodeURIComponent(a) + "&text=" + encodeURIComponent(b), "twitter_share", "top=" + f + ",left=" + g + ",toolbar=0,status=0,width=" + d + ",height=" + e)
}

function common_social_share_ilustracion_fb(a) {
    var b = 640,
        c = 320;
    screen.height / 2 - c / 2, screen.width / 2 - b / 2;
    $.ajax({
        url: "/utils-TraceShare.php",
        data: {
            idIlustracion: a,
            tipoShare: 1
        },
        success: function(a) {
            window.open(a.shareUrl)
        }
    })
}

function common_social_share_ilustracion_twitter(a, b, c) {
    var d = 640,
        e = 260,
        f = screen.height / 2 - e / 2,
        g = screen.width / 2 - d / 2;
    $.ajax({
        url: "/utils-TraceShare.php",
        data: {
            idIlustracion: c,
            tipoShare: 2
        },
        success: function(a) {}
    }), window.open("http://twitter.com/share?url=" + encodeURIComponent(a) + "&text=" + encodeURIComponent(b), "twitter_share", "top=" + f + ",left=" + g + ",toolbar=0,status=0,width=" + d + ",height=" + e)
}

function common_social_share_ilustracion_pinterest(a) {
    var b = 640,
        c = 260;
    screen.height / 2 - c / 2, screen.width / 2 - b / 2;
    $.ajax({
        url: "/utils-TraceShare.php",
        data: {
            idIlustracion: a,
            tipoShare: 4
        },
        success: function(a) {
            window.open(a.shareUrl)
        }
    })
}

function common_getPageSize() {
    var a, b;
    window.innerHeight && window.scrollMaxY ? (a = document.body.scrollWidth, b = window.innerHeight + window.scrollMaxY) : document.body.scrollHeight > document.body.offsetHeight ? (a = document.body.scrollWidth, b = document.body.scrollHeight) : (a = document.body.offsetWidth, b = document.body.offsetHeight);
    var c, d;
    return self.innerHeight ? (c = self.innerWidth, d = self.innerHeight) : document.documentElement && document.documentElement.clientHeight ? (c = document.documentElement.clientWidth, d = document.documentElement.clientHeight) : document.body && (c = document.body.clientWidth, d = document.body.clientHeight), d > b ? pageHeight = d : pageHeight = b, c > a ? pageWidth = c : pageWidth = a, arrayPageSize = new Array(pageWidth, pageHeight, c, d), arrayPageSize
}

function common_getPageScroll() {
    var a;
    return self.pageYOffset ? a = self.pageYOffset : document.documentElement && document.documentElement.scrollTop ? a = document.documentElement.scrollTop : document.body && (a = document.body.scrollTop), arrayPageScroll = new Array("", a), arrayPageScroll
}

function common_getPosition(a) {
    a = a || window.event;
    var b = {
        x: 0,
        y: 0
    };
    if (a.pageX || a.pageY) b.x = a.pageX, b.y = a.pageY;
    else {
        var c = document.documentElement,
            d = document.body;
        b.x = a.clientX + (c.scrollLeft || d.scrollLeft) - (c.clientLeft || 0), b.y = a.clientY + (c.scrollTop || d.scrollTop) - (c.clientTop || 0)
    }
    return b
}

function common_crearIframe(a) {
    var b, c = navigator.userAgent,
        d = /opera/i.test(c),
        e = /gecko/i.test(c);
    d || e ? (b = document.createElement("iframe"), b.id = a, b.name = a, b.style.display = "none", document.body.appendChild(b)) : (b = document.createElement("iframe"), b.setAttribute("name", a), b.setAttribute("id", a), b.setAttribute("style", "display:none;"), document.body.appendChild(b))
}

function common_traceNavigation(a, b) {
    function c() {
        null !== d && $.ajax({
            url: "/trace/trace-Update.php",
            async: !0,
            dataType: "json",
            data: {
                id: d
            }
        }).done(function(a) {
            setTimeout(c, e), e = 2 * e
        })
    }
    var d = null,
        e = 5e3;
    $(window).load(function() {
        $.ajax({
            url: "/trace/trace-Add.php",
            async: !0,
            dataType: "json",
            data: {
                reduced: reduced,
                idItem: a,
                idType: b,
                idAction: 1
            }
        }).done(function(a) {
            a.status && (d = a.id, setTimeout(c, e), e = 2 * e)
        })
    })
}

function common_footerSelectPais() {
    $("#app-footer-flags").load("/utils-FooterFlags.php", function() {
        $("#app-footer-flags").show(), $("#app-footer-flags").find("ul").toggle()
    })
}

function common_hideId(a, b) {
    a = b ? b + "_" + a : a, $("#" + a).hide()
}

function common_linkAccount() {
    GetCookie("cla") || (SetCookieTime("cla", 1, 7), common_openLayer("/tools/LinkAccount", function() {
        new AjaxFormManager($("#formVicularCuenta"), null, null, function() {
            SetCookie("cla", 1), $("#app-common-layer").modal("hide")
        });
        $("#linkedOmitir").on("click", function() {
            SetCookieTime("cla", 1, 7), $("#app-common-layer").modal("hide")
        }), $("#linkedDescartar").on("click", function() {
            SetCookie("cla", 1), $("#app-common-layer").modal("hide")
        })
    }))
}

function common_linkedAccount() {
    common_openLayer("/tools/LinkedAccount", function() {
        new AjaxFormManager($("#formVicularCuenta"), null, null, function() {
            $("#app-common-layer").modal("hide")
        })
    })
}

function common_strip_html_tags(a) {
    var b = document.createElement("div");
    return b.innerHTML = a, b.textContent || b.innerText || ""
}

function isIE() {
    var a = navigator.userAgent.toLowerCase();
    return -1 != a.indexOf("msie") ? parseInt(a.split("msie")[1]) : !1
}

function homeSliderInit(a) {
    return isIE() !== !1 && isIE() < 9 ? void setTimeout(function() {
        homeSlider(a)
    }, 1500) : homeSlider(a)
}

function homeSlider(a) {
    for (var b = {}, c = 1; 4 >= c; c++) {
        var d;
        d = 1 == c ? a.firstPictureIndex : Math.floor(Math.random() * a[c].imgs.length), b[c] = {}, b[c].img = a[c].imgs[d].src, b[c].text = a[c].text, a[c].imgs[d].rw && (b[c].rw = a[c].imgs[d].rw)
    }
    a = b;
    var e = null,
        f = {},
        g = $("#hero-rs").clone();
    g.attr("id", "hero-rs-js").addClass("dnone"), $("#hero-rs").after(g);
    var h = function(b) {
            var c = null,
                d = null;
            null == b ? (c = $("#hero-rs .rsGCaption").first(), d = 1) : (c = b.currSlide.holder, d = b.currSlideId + 1);
            var e = a[d].rw;
            if (null != j && "object" == typeof j && "object" == typeof j[e]) {
                var f = j[e],
                    g = "";
                null != f.novia && null != f.novio && (g += "<div>" + f.novia + " &amp; " + f.novio, null != f.poblacion && (g += " (" + f.poblacion + ")"), g += "</div>"), null != f.fotografo && "" != f.fotografo && (g += '<i class="fa fa-camera"></i><span> ' + f.fotografo + "</span>"), c.find(".tag-related-listing").html(g)
            }
            $("h1").html(a[d].text)
        },
        i = Array();
    $.each(a, function(a, b) {
        "undefined" != typeof b.rw && i.push(b.rw)
    });
    var j = null;
    i.length > 0 && $.getJSON("/json/getRWInfo.php?ids=" + i.join(","), function(a) {
        j = a, h(e)
    });
    var k = $(".royalSlider img").attr("src");
    $(".rsImg").removeClass("dnone"), e = g.royalSlider({
        controlNavigation: "bullets",
        loop: !0,
        firstMargin: !1,
        imageScaleMode: "none",
        imageScalePadding: 0,
        navigateByClick: !1,
        sliderDrag: !1,
        numImagesToPreload: 2,
        arrowsNav: !1,
        keyboardNavEnabled: !1,
        fadeinLoadedSlide: !1,
        globalCaption: !1,
        imageAlignCenter: !1,
        slidesSpacing: 0,
        autoScaleSlider: !1,
        autoPlay: {
            enabled: !0,
            pauseOnHover: !0,
            delay: 5e3
        }
    }).data("royalSlider"), e.ev.on("rsAfterContentSet", function(a, b) {
        $("#hero-rs").remove(), $("#hero-rs-js").removeClass("dnone");
        var c = b.id + 1;
        $("#rsSlot" + c).after(f[c]), h(e)
    }).promise().done(function() {
        homeSliderResize()
    }), $.each(a, function(a, b) {
        var c = b.img,
            d = b.rw;
        "undefined" != typeof d && (f[a] = '<div class="rsGCaption"><div class="wrapper"><div class="tags tag-related-listing"></div></div></div>'), k.indexOf(c) > -1 || e.appendSlide('<div class="home-header-slider"><img id="rsSlot' + a + '" class="rsImg" src="' + c + '"/></div>')
    }), e.ev.on("rsBeforeAnimStart", function(a) {
        h(e)
    }), e.ev.on("rsAfterInit", function(a) {
        $("#hero-rs.royalSlider").css("overflow", "visible"), h(e)
    })
}

function homeSliderResize() {
    var a = $(".app-resize-slider"),
        b = $(document.body).width(),
        c = b * (25 / 72);
    if (c > 500) var c = 500;
    a.attr("style", "height:" + c + "px;")
}

function common_IframeConversion(a) {
    var b = document.getElementsByTagName("body")[0],
        c = document.createElement("iframe");
    a = a + "-" + Math.floor(1e4 * Math.random()), c.setAttribute("src", "/landing-AdwordsSolic.php?id=" + a), c.setAttribute("id", a), c.style.display = "none", b.appendChild(c)
}

function common_showMore(a, b) {
    $("#" + b).show(), $(a).next().show(), $(a).hide(), null != map && google.maps.event.trigger(map, "idle")
}

function common_addJavascriptLinks() {
    $(".app-general-item").each(function() {
        var a = $(this).find(".app-general-item-link").attr("href"),
            b = $(this).find(".app-general-item-linked");
        b.css("cursor", "pointer"), b.on("click", function() {
            window.location.href = a
        })
    })
}

function common_addBlackOver() {
    var a = $(".blackOver");
    0 == a.length && ($("body").append('<div class="blackOver" style="display:none;"></div>'), a = $(".blackOver")), a.css("height", $(document).height()).css({
        opacity: .5
    }).fadeIn("slow")
}

function common_removeBlackOver() {
    $("#layer-suggest-1,#layer-suggest-2").hide(), $(".blackOver").fadeOut("fast")
}

function common_jspDestroy() {
    $(".box-scroll").each(function() {
        $(this).jScrollPane();
        var a = $(this).data("jsp");
        a.destroy()
    })
}

function common_stickyForm(a, b) {
    var c = $("." + a),
        d = $("." + b);
    if (d.length > 0 && c.length > 0) {
        c.data("height", c.height()), d.data("top", d.offset().top);
        var e = d.height() < $("." + a + " > div > div").height() ? !0 : !1;
        d.data("top") && $(window).on("scroll", function() {
            $(this).scrollTop() > d.data("top") - 10 && e ? (d.addClass("fixed"), $(this).scrollTop() >= c.data("height") - (d.data("height") ? d.data("height") : d.height()) - 20 + d.data("top") ? d.css({
                position: "absolute",
                top: c.data("height") - (d.data("height") ? d.data("height") : d.height() + 15)
            }) : d.removeAttr("style")) : $(this).scrollTop() <= d.data("top") && d.hasClass("fixed") && d.removeClass("fixed")
        })
    }
}

function common_getBase64FromImageUrl(a) {
    var b = document.createElement("canvas"),
        c = !(!b.getContext || !b.getContext("2d"));
    if (!c) return null;
    b.width = a.width, b.height = a.height;
    var d = b.getContext("2d");
    d.drawImage(a, 0, 0);
    var e = b.toDataURL("image/png");
    return e = e.replace(/^data:image\/(png|jpg);base64,/, "")
}

function common_searchItem(a, b, c) {
    var d = $(a).val().trim(),
        e = $("#" + a.name + "_div");
    return fncSetAux = function(a, b, c) {
        var c = unescape(c);
        $("#" + a.name).val(c), $("#" + a.name + "_id").val(b), $("#" + a.name + "_listed").val("1")
    }, d.length < 2 ? (e.show(), void e.html(e.html() + "<span class='searchComm'>" + 'Write the name to search' + ".</span>")) : (e.show(), e[0].style.visibility = "visible", e.html("<span class='searchComm'>" + 'Loading' + "</span>"), a = a, void $.ajax({
        url: "/json/searchItem.php?tipoItem=" + b + "&search=" + encodeURIComponent(d),
        success: function(d) {
            if (0 == d.nItem) return void e.hide();
            var f = "";
            d.items = d.items || [];
            for (var g = 0; g < d.items.length; g++) {
                var h = d.items[g];
                f += "<div style='background-color:#ffffff; padding:6px 10px;border-bottom:1px dotted #cccccc;'><a id='itemSuggest_" + b + "_" + h.id + "' href='javascript:void(0);' class='gris'>" + h.nombre + "</a>&nbsp;&nbsp;&nbsp;<span class='small'>" + h.descripcion + "</span></div>"
            }
            d.nItem > 10 && (f += "<div style='background-color:#efefef; padding:6px 10px; padding-bottom:0px;' class='small'> " + 'Showing' + " 10 " + 'items of' + " " + d.nItem + " " + ' ' + "</div>"), e.html(f);
            for (var g = 0; g < d.items.length; g++) {
                var h = d.items[g];
                $("#itemSuggest_" + b + "_" + h.id).click(function(b) {
                    return function() {
                        null != c ? c(a, b.id, b.nombre) : fncSetAux(a, b.id, b.nombre), $("#" + a.name + "_div").html(""), $("#" + a.name + "_div").hide().delay(500)
                    }
                }(h))
            }
        }
    }))
}

function common_relatedItemAdd(a, b, c, d, e) {
    $.ajax({
        url: "/com-RelatedContenIntoRelatedItem.php?mode=add&tipoItem=" + a + "&idItem=" + b + "&relatedTipoItem=" + c + "&relatedIdItem=" + d,
        success: function(f) {
            $('[data-id="' + c + '"]').append("<li data-id='" + c + "-" + d + "'>" + e + " <a>[x]</a></li>"), $('[data-id="' + c + "-" + d + '"] a').click(function() {
                common_relatedItemDelete(a, b, c, d)
            })
        }
    })
}

function common_relatedItemDelete(a, b, c, d) {
    $.ajax({
        url: "/com-RelatedContenIntoRelatedItem.php?mode=dlt&tipoItem=" + a + "&idItem=" + b + "&relatedTipoItem=" + c + "&relatedIdItem=" + d,
        success: function(a) {
            $('[data-id="' + c + "-" + d + '"]').remove()
        }
    })
}

function common_badmailLayer() {
    GetCookie("lbm") || (SetCookieTime("lbm", 1, 7), common_openLayer("/tools/BadmailLayer", null, !0))
}

function common_ShowLayerAddReviewOrReal(a, b) {
    b = +(+b || +GetCookie("rwmu2")), a = +(+a || +GetCookie("rwmu1")), GetCookie("rwmu") || 1 == b && 1 == a || (SetCookieTime("rwmu", 1, 1), 0 == a ? (SetCookieTime("rwmu1", 1, 7), common_openLayer("/com-LayerAddReview.php", null, !1)) : 0 == b && (SetCookieTime("rwmu2", 1, 7), common_openLayer("/com-LayerAddReal.php", null, !1)))
}

function common_ShowLayerAddReviewAndReal(a, b) {
    a = +(+a || +GetCookie("rerwmu")), b = +(+b || +GetCookie("rerwmu")), GetCookie("rerwmu") || 1 == b && 1 == a || (0 == a || 0 == b) && (SetCookieTime("rerwmu", 1, 7), common_openLayer("/com-LayerAddReviewOrReal.php", null, !1))
}

function common_validarBadmail(a) {
    $("[id^=error]").hide();
    var b = a.badmail,
        c = a.fromBadmailLayer;
    return common_validateMailField(b) ? ($.ajax({
        type: "POST",
        async: !1,
        url: "/com-ChangeEmailRun.php",
        data: {
            newEmail: $(b).val(),
            fromBadmailLayer: $(c).val()
        },
        success: function(a) {
            switch (a) {
                case "0":
                    return location.reload(), !0;
                case "1":
                    return $("#error").common_hideShow(function() {
                        $("#msgError").html('A user signed up with this email address already exists')
                    }), !1;
                default:
                    if ("-1" != a) return $("#error").common_hideShow(function() {
                        $("#msgError").html(a)
                    }), !1
            }
        }
    }), !1) : !1
}

function common_linkCorrectMail(a) {
    $("input[name*='mail'],input[name*='Mail']").val(a), $(".alert-error,.input-error").hide()
}

function common_VerficaEmailSolic(a) {
    if (email = a.value, "" != a.value)
        for (var b = email.split(","), c = 0; c < b.length; c++) {
            var d = common_validateMail(b[c].replace(/^\s+/g, "").replace(/\s+$/g, ""), !0, a.name);
            if (0 == d.estado) {
                var e = 'Wrong email address';
                return d.suggestion && (e += d.suggestion), alert(e), !1
            }
        }
    return !0
}

function common_disableEnterKey(a, b) {
    if ("undefined" != typeof b)
        if ("object" == typeof b) {
            var c = b;
            if ("" == c.val() && 13 == a.keyCode) return !1;
            if ("" !== c.val() && 13 == a.keyCode) return !0
        } else if ("string" == typeof b) {
        var c = $(b);
        if ("" == c.val() && 13 == a.keyCode) return !1;
        if ("" !== c.val() && 13 == a.keyCode) return !0
    }
    return 13 != a.keyCode ? !0 : !1
}

function common_ec_track_vendor_click(a) {
    ga("ec:addProduct", {
        id: a.data("id-empresa"),
        variant: a.data("id-escaparate"),
        name: a.find("a.app-ec-track-vendor-click").text().trim(),
        category: a.data("ec-category"),
        brand: a.data("ec-brand"),
        position: a.data("ec-position"),
        dimension1: a.data("ec-d1"),
        dimension2: a.data("ec-d2"),
        dimension3: a.data("ec-d3")
    }), ga("ec:setAction", "click", {
        list: a.data("ec-list")
    }), ga("send", "event", "UX", "click", "Results")
}

function common_flushLocalStorage() {
    1 == GetCookie("PUSHER") && (PusherManager.flush(), SetCookieSession("PUSHER", 0))
}

function common_checkVisibleOnScreen(a, b) {
    var c, d, e = a.getBoundingClientRect();
    "object" == typeof b ? (c = b.top || 0, d = b.bottom || 0) : (c = b || 0, d = b || 0);
    var f = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(e.bottom + c < 0 || e.top - f - d >= 0)
}

function common_setImageFacebookProfile(a, b, c, d, e) {
    var f = {
        url: a,
        x1: b,
        y1: c,
        x2: d,
        y2: e
    };
    $.ajax({
        beforeSend: function() {
            $("#fbPictureContent").html("<p class='bigest mt20 mb20' style='text-align:center'><?= 'Importing profile picture'; ?><br /><img style='margin:auto'src='https://" + document.domain + "/img/ajax-loader-bar-blue.gif'></p>")
        },
        data: f,
        url: "/com-SetFotoFacebook.php",
        type: "POST",
        success: function(a) {
            1 == a ? $("#fbPictureContent").html("<p class='bigest mt20 mb20' style='text-align:center'>" + escape("<?= 'We were unable to import your Facebook photo'; ?>") + "<br /><div class='mb10 mt5 ml10 tacenter'><a href='javascript:void(0);' id='lImportFbPicture' class='fb-friends-big nolink strong noloader'><span><?= 'Retry'; ?></span></a></div></p>") : $("#app-form-solicitar-boletos-buscador").length > 0 || $("#frmRecomendaciones").length > 0 || $("#app-rw-msg-alert").length > 0 ? $("#app-common-layer").modal("hide") : ($("#tool-modal").modal("hide"), document.location.href = "/com-Modif.php")
        }
    })
}

function common_button_loader(a) {
    var b = {
            disable: !1,
            button: "",
            ajaxPromise: function() {
                return $.when()
            }
        },
        c = $.extend({}, b, a);
    if (c.ajaxPromise) {
        var d = $(c.button);
        return a.disable && d.prop("disabled", "disabled"), d.addClass("loader-button").append('<span class="loader"></span>'), c.ajaxPromise().then(function() {
            d.removeClass("loader-button"), d.find(".loader").remove(), c.disable && d.removeProp("disabled")
        })
    }
}

function common_charge_spin(a) {
    var b = $(".app-pencil-profile");
    b.length && b.fadeTo("slow", .33), $(a).append('<div class="spinner-container"><span class="loader" id="loader"></span></div>'), $(a).find("img").fadeTo("slow", .33), $(a).find(".app-spinner-container-fadeto").fadeTo("slow", .33)
}

function common_stop_spin(a) {
    var b = $(".app-pencil-profile");
    b.length && b.fadeTo("slow", 1), $(a).find("img").fadeTo("slow", 1), $(a).find(".app-spinner-container-fadeto").fadeTo("slow", 1), $(".spinner-container").remove()
}

function common_ajaxManager_load() {
    var a = {
        "/ajaxManager/load.php": $(".app-ajax-manager"),
        "/ajaxManager/loadNoIndex.php": $(".app-ajax-manager-no-index")
    };
    for (var b in a) {
        var c = a[b];
        if (c.length > 0) {
            var d = [];
            c.each(function() {
                    d.push($(this).data("id"))
                }),
                function(a, b) {
                    $.post(a, {
                        ids: d
                    }, function(a) {
                        for (var c in a) {
                            var d = b.filter("[data-id='" + c + "']"),
                                e = d.parent();
                            b.filter("[data-id='" + c + "']").replaceWith(a[c]), e.trigger("ajax-manager-load")
                        }
                    })
                }(b, c)
        }
    }
}

function common_strip_html_tags(a) {
    var b = document.createElement("div");
    return b.innerHTML = a, b.textContent || b.innerText || ""
}

function common_articles_menu_showCategories(a, b) {
    $(".app-articles-menu-categories[data-id-categ=" + b + "]").load("/contenido-MenuSubcategorias.php?idCateg=" + b, function() {
        var b = $(this),
            c = 90;
        b.is(":visible") && (c = 0), a.find(".app-widget-sections-division-icon").css({
            "-webkit-transform": "rotate(" + c + "deg)",
            transform: "rotate(" + c + "deg)"
        }), b.stop(), b.slideToggle()
    })
}

function cleanUpSpecialChars(a) {
    return a = a.replace(/[àáâãäå]/gi, "a"), a = a.replace(/[ÈÉÊË]/gi, "e"), a = a.replace(/[ÒÓÕ]/gi, "o"), a = a.replace(/[ÙÚ]/gi, "u"), a = a.replace(/[ÌÍ]/gi, "i"), a.replace(/[^a-z0-9 ]/gi, "")
}

function common_icon_hover(a) {
    a.each(function() {
        var a = $(this).data("icon-old"),
            b = $(this).data("icon-new");
        $(this).on("mouseenter", function() {
            $icon = $(this).find("." + a), $icon.removeClass(a).addClass(b)
        }), $(this).on("mouseleave", function() {
            $icon = $(this).find("." + b), $icon.removeClass(b).addClass(a)
        })
    })
}

function common_dropdown_toggle(a, b) {
    return b ? (a.hide(), $(document.body).off("click", common_dropdown_hide), !1) : (a.show(), $(document.body).on("click", common_dropdown_hide), !0)
}

function common_dropdown_hide(a) {
    var b = $(".app-dropdown-toggle-layer");
    0 === $(a.target).closest(b).length && b.data("isVisible", common_dropdown_toggle(b, !0))
}

function searchPlaceholderWidth(a) {
    var b = a[0].value || a[0].placeholder,
        c = document.createElement("span");
    c.appendChild(document.createTextNode(b)), c.style = "font-size:13px;box-sizing: border-box;padding: 7px 0 7px 7px;font-weight:400;font-family:Montserrat;text-transform:uppercase;position:absolute;opacity:0;display:inline-block;", document.body.appendChild(c);
    var d = $(c).outerWidth() + 13;
    return document.body.removeChild(c), d
}

function searchPlaceholderAnimation(a, b) {
    var c = searchPlaceholderWidth(a);
    b ? a.css({
        width: c + "px",
        transition: "width 300ms ease",
        "-webkit-transition": "300ms ease",
        "-moz-transition": "300ms ease",
        "-ms-transition": "300ms ease",
        "-o-transition": "300ms ease"
    }) : a.css({
        width: c + "px"
    })
}

function searchPlaceholderText(a, b, c) {
    if ("enter" == c) {
        var d = 'Search for';
        a[0].placeholder = d.toUpperCase(), b.show()
    } else a[0].placeholder = 'SEARCH', b.hide();
    searchPlaceholderAnimation(a, !0)
}

function hideSuggest(a) {
    a.hide()
}

function searchRemoveContent(a) {
    a.val("")
}

function aboutToggleSuggest(a, b) {
    if (a.is(":visible")) a.addClass("dnone"), $(document.body).unbind(".bodas.layer");
    else {
        a.removeClass("dnone"), a.removeAttr("style");
        var c = a.find("input[type=text]");
        c.length && c.focus(), $(document.body).bind("mouseup.bodas.layer", function(c) {
            a.is(c.target) || 0 !== b.has(c.target).length || (a.addClass("dnone"), $(document.body).unbind("mouseup.bodas.layer"))
        })
    }
}

function common_modalIsOpen(a) {
    return !("undefined" == typeof $(a).data("bs.modal") || null === $(a).data("bs.modal") || !$(a).data("bs.modal").isShown)
}

function common_loadCapaLogin(a, b) {
    common_teCOM("capa_login"), ga_trackEventAll("Community", "capa_login", getPageTrackerReduced().M, 0, 0), $.ajax({
        url: "/com-CapaLogin.php",
        data: {
            load: 0,
            close: a,
            accion: b
        },
        success: function(a) {
            $("#app-alta-model-content").html(a)
        }
    })
}

function common_loadCapaAlta(a, b) {
    ga_trackEventAll("SignUpTracking", "a-step1", "d-desktop+s-js_switch_to_layer_signup", 0, 0), $.ajax({
        url: "/com-CapaAlta.php",
        data: {
            load: 0,
            close: a,
            accion: b
        },
        success: function(a) {
            $("#app-alta-model-content").html(a)
        }
    })
}

function common_verificaCapaLogin(a) {
    return common_validateMailField(a.Mail, !0, !0) ? a.Password.value.length < 4 ? (alert('The password must contain a minimum of four characters'), a.Password.focus(), !1) : !0 : !1
}

function common_verificaCapaAlta(a) {
    var b = internalTrackingService || {};
    return a.Nombre.value.trim().length < 4 ? (alert(b.nextError = 'Your name must have a minimum of four characters'), a.Nombre.focus(), !1) : (a.Nombre.value = a.Nombre.value.trim(), common_validateMailField(a.Mail, !0, !0) && common_verificaUserDup(a.Mail, b.nextError = 'A user signed up with this email address already exists.') ? a.Password.value.length < 6 ? (alert(b.nextError = 'The password must have at least six characters.'), a.Password.focus(), !1) : 0 === Number(a.Poblacion.value) || -1 == a.Poblacion.value || "" === a.Poblacion.value ? (alert(b.nextError = 'Please select the city in which you live'), a.txtStrPoblacion.focus(), !1) : a.Rol.value ? a.Fecha.value.length < 1 ? (alert(b.nextError = 'Approximate date of the event.'), a.Fecha.focus(), !1) : (ga_trackEventAll("SignUpTracking", "a-run", "d-desktop+s-layer_form", 0, 0), !0) : (alert('You must select your role in this event' + "."), $("input[name=Rol]", a).focus(), !1) : !1)
}

function common_verificaUserDupValid(a) {
    var b = "nada";
    return $.ajax({
        url: "/com-VerificaUserDupValid.php?mail=" + encodeURIComponent(a),
        async: !1,
        success: function(a) {
            b = a
        }
    }), b
}

function common_verificaUserDup(a, b) {
    if ("" === a.value) return "undefined" != typeof b && "" !== b && (alert(b), a.focus()), !1;
    var c = !1,
        d = "/com-VerificaUserDup.php?mail=" + encodeURIComponent(a.value);
    return $.ajax({
        url: d,
        async: !1,
        cache: !1,
        success: function(d) {
            "OK" == d.trim() ? c = !0 : ("undefined" != typeof b && "" !== b && (alert(b), a.focus()), c = !1)
        }
    }), c
}

function common_validateMail(a, b, c) {
    var d = [],
        e = b || 0;
    return $.ajax({
        url: "/json/validatorEmail.php?mail=" + encodeURIComponent(a) + "&alert=" + e + "&field=" + c,
        async: !1,
        dataType: "json",
        success: function(a) {
            d.estado = a.result, d.suggestion = a.suggestion || ""
        }
    }), d
}

function common_secureValidateMail(a) {
    var b = null;
    return $.ajax({
        url: globals.subdomain_secure + "/json/validatorEmail.php?mail=" + encodeURIComponent(a),
        async: !1,
        dataType: "json",
        success: function(a) {
            b = a.result
        }
    }), b
}

function common_showMailError(a) {
    $("#msgError").length ? $("#error").common_hideShow(function() {
        $("#msgError").html('Check that the email is correct' + a.suggestion)
    }) : a.suggestion && a.suggestion.length > 0 ? alert(a.suggestion) : alert('Check that the email is correct')
}

function common_validateMailField(a, b, c) {
    var d = internalTrackingService || {};
    null == b && (b = !0);
    var e = !1,
        f = 0,
        g = 0,
        h = 0,
        i = "";
    if ((antesArroba = a.value.match(/(.*?)@/g)) && (g = antesArroba[0].length - 1), (despuesPunto = a.value.match(/\.(.*)/g)) && (h = despuesPunto.slice(-1)[0].length - 1), (arrobas = a.value.match(/@/g)) && (f = arrobas.length), a.value.match(/\./g) && (e = !0), f > 1) return alert(d.nextError = 'Only one email can be entered.'), a.focus(), !1;
    if (0 == g || 0 == f || !e) return i = d.nextError = 'The format of your email is incorrect, check that it contains the characters @ and .', $("#msgError").length ? $("#error").common_hideShow(function() {
        $("#msgError").html(i)
    }) : alert(i), a.focus(), !1;
    if (2 > h) return i = d.nextError = 'The format of your email is incorrect. It must contain an. followed by at least two characters', $("#msgError").length ? $("#error").common_hideShow(function() {
        $("#msgError").html(i)
    }) : alert(i), a.focus(), !1;
    var j = common_validateMail(a.value, c, a.name);
    return b && !j.estado ? (common_showMailError(j), a.focus(), !1) : !0
}

function common_doLoginOkAction() {
    return $("#app-common-layer").modal("hide"), "undefined" != typeof document.onLoginOk && null !== document.onLoginOk ? (document.onLoginOk(), !0) : !1
}

function common_goEnsureLogged(a, b, c, d) {
    return -1 == a.indexOf(window.location.protocol + "//") && (a = rootdomain + a), common_callEnsureLogged(function() {
        window.location.href = a
    }, b, c, d), !1
}

function common_callEnsureLoggedAsync(a, b, c, d, e, f, g) {
    f = f || function() {}, g = g || function() {}, "undefined" == typeof e && (e = !1), f = f || function() {}, g = g || function() {}, common_verificaComSessionPromise().done(function(g) {
        if ("OK" == g.trim()) a();
        else {
            f();
            var h = function() {
                a()
            };
            fb_init(), common_showLoginLayer(h, b, null, null, c, d, e)
        }
    })
}

function common_callEnsureLogged(a, b, c, d, e, f, g) {
    "undefined" == typeof e && (e = !1), "undefined" == typeof f && (f = null);
    var h = common_verificaComSession();
    if (h) a();
    else {
        var i = function() {
            a()
        };
        fb_init(), common_showLoginLayer(i, b, f, null, c, d, e, g)
    }
    return !1
}

function common_showLoginLayer(a, b, c, d, e, f, g, h) {
    common_teCOM("capa_alta"), ga_trackEventAll("Community", "capa_alta", getPageTrackerReduced().M, 0, 0), "undefined" == typeof g && (g = !1), document.onLoginOk = function() {
        g || $("#app-common-layer").modal("hide"), a()
    };
    var i = "/com-CompruebaLogin.php?a";
    null !== c && (i += "&defaultLogin=" + c), c || ga_trackEventAll("SignUpTracking", "a-step1", "d-desktop+s-js_show_login_layer", 0, 0), null !== d && (i += "&redirect=" + d), null !== b && (i += "&accion=" + b), "undefined" != typeof e && null !== e && (i += "&" + e), $("#app-common-layer").modal({
        remote: i,
        keyboard: !1,
        backdrop: "static"
    }), "undefined" != typeof h && $("#app-common-layer").on("hide.bs.modal", function() {
        var a = common_verificaComSession();
        a || h()
    })
}

function common_verificaComSession() {
    var a = !1;
    return url = "/com-VerificaLayerSession.php", $.ajax({
        url: url,
        async: !1,
        cache: !1,
        success: function(b) {
            a = "OK" == b.trim()
        }
    }), a
}

function common_verificaComSessionPromise() {
    var a = "/com-VerificaLayerSession.php";
    return $.ajax({
        url: a,
        cache: !1
    })
}

function common_showLayerRedirect(a) {
    "" !== document.referrer && -1 != document.referrer.indexOf(".google.") && "undefined" != typeof GetCookie && navigator.cookieEnabled && (cookie_LayerRedirect = GetCookie("layerRedirect"), cookie_LayerRedirect && "2" == cookie_LayerRedirect || $.ajax({
        url: "/utils-LayerRedirect.php?options=" + a,
        success: function(a) {
            $(document.body).append(a), setTimeout(function() {
                $("#layerRedirect").fadeIn(700)
            }, 1500), $(document.body).on("click", ".app-close-layer-redirect", function() {
                $("#layerRedirect").fadeOut(700)
            })
        }
    }))
}

function common_loadPaisCombo(a, b) {
    $.ajax({
        url: "/utils-LoadComboProvincias.php?limite=" + b + "&id_pais=" + $('select[name="Pais"]').val(),
        cache: !0
    }).done(function(a) {
        $("#fldProvincia").html(a)
    }), $.ajax({
        url: "/utils-LoadComboPoblaciones.php?limite=" + b,
        cache: !0
    }).done(function(a) {
        $("#fldPoblacion").html(a)
    })
}

function common_loadPoblacionesCombo(a, b, c) {
    var d = void 0 === c ? "utils-LoadComboPoblaciones.php" : c;
    $.ajax({
        url: "/" + d + "?limite=" + b + "&id_pais=" + $('select[name="Pais"]').val() + "&id_provincia=" + $(a).val(),
        cache: !0
    }).done(function(a) {
        $("#fldPoblacion").html(a), $("#txtStrPoblacion").val($("#Provincia>option:selected").text())
    })
}

function common_setTextoLocalizacion(a) {
    $("#txtStrPoblacion").val(a)
}

function common_VerificaAltaFb(a) {
    var b = internalTrackingService || {};
    return a.Password.value.length < 6 ? (alert(b.nextError = 'The password must have at least six characters.'), a.Password.focus(), !1) : a.Poblacion.value <= 0 ? (alert(b.nextError = 'Please select the city in which you live'), !1) : "" == $("input[name=Fecha]").val() ? (alert('Approximate date of the event.'), a.Fecha.focus(), !1) : "0" == $("input[name=Rol]").val() ? (alert('You must select your role in this event.'), !1) : (ga_trackEventAll("SignUpTracking", "a-run", "d-desktop+s-form_fb", 0, 0), !0)
}

function common_showLayerCookies() {
    return null !== GetCookie("__utma") ? !1 : void $(document.body).prepend('<div class="p10 border-bottom" id="cookiesLayer"><div id="contentCookies"><p class="fs12 m0 text-center">' + 'Cookies allow us to provide you with better services.  By using our services you agree to our use of cookies.' + ' <a class="info" href="/legal/cookies.php">' + 'More information' + "</a></p></div></div>")
}

function SetCookie(a, b) {
    var c = SetCookie.arguments,
        d = SetCookie.arguments.length,
        e = d > 3 ? c[3] : "/",
        f = d > 4 ? c[4] : null,
        g = d > 5 ? c[5] : !1,
        h = d > 6 ? c[6] : !1,
        i = new Date;
    if (h) {
        var j = i.getTime();
        j += 24 * h * 3600 * 1e3, i.setTime(j)
    } else i.setYear(9999);
    document.cookie = a + "=" + escape(b) + "; expires=" + i.toGMTString() + (null === e ? "/" : "; path=" + e) + (null === f ? "; domain=" + globals.Request_Cookie_domain : "; domain=" + f) + (g === !0 ? "; secure" : "")
}

function SetCookieTime(a, b, c) {
    var d = SetCookieTime.arguments,
        e = SetCookieTime.arguments.length,
        f = e > 3 ? d[3] : "/",
        g = e > 4 ? d[4] : null,
        h = e > 5 ? d[5] : !1,
        i = new Date;
    if (c) {
        var j = i.getTime();
        j += 24 * c * 3600 * 1e3, i.setTime(j)
    } else i.setYear(9999);
    document.cookie = a + "=" + escape(b) + "; expires=" + i.toGMTString() + (null === f ? "/" : "; path=" + f) + (null === g ? "; domain=" + globals.Request_Cookie_domain : "; domain=" + g) + (h === !0 ? "; secure" : "")
}

function SetCookieSession(a, b) {
    var c = SetCookieSession.arguments,
        d = SetCookieSession.arguments.length,
        e = d > 3 ? c[3] : "/",
        f = d > 4 ? c[4] : null,
        g = d > 5 ? c[5] : !1;
    document.cookie = a + "=" + escape(b) + (null !== e && e ? "; path=" + e : "/") + (null === f ? "; domain=" + globals.Request_Cookie_domain : "; domain=" + f) + (g === !0 ? "; secure" : "")
}

function GetCookie(a) {
    var b = document.cookie.match("(^|;)\\s*" + a + "\\s*=\\s*([^;]+)");
    return b ? unescape(b.pop()) : null
}

function cookies_showContactarEmpCookies() {
    var a = document.frmContacto || document.frmContactoInline;
    if ("" === a.Nombre.value && null !== GetCookie("pb_name") && (a.Nombre.value = GetCookie("pb_name")), "" === a.Mail.value && null !== GetCookie("pb_mail") && (a.Mail.value = GetCookie("pb_mail")), "" === a.Telefono.value && null !== GetCookie("pb_telefono") && (a.Telefono.value = GetCookie("pb_telefono")), "undefined" != typeof a.Fecha) {
        var b = a.Fecha;
        "" === b.value && null !== GetCookie("pb_fecha") && (b.value = GetCookie("pb_fecha"))
    }
    if ("undefined" != typeof a.Comensales) {
        var c = $("#SolicComensales", a);
        "" === $(c).val() && null !== GetCookie("pb_comensales") && $(c).val(GetCookie("pb_comensales"))
    }
    var d = $("#divVenueSaved", a);
    d && (a.Mail.value.trim().length < 3 || cookies_verificaVenueSaved(a.Mail, "") ? $(d).hide() : $(d).show());
    try {
        a.Nombre.focus()
    } catch (e) {}
}

function cookies_verificaVenueSaved(a, b) {
    if ("" === a.value) return "" !== b && (alert(b), a.focus()), !1;
    var c = !1;
    return $.ajax({
        type: "POST",
        url: "/com-VerificaVenueSaved.php",
        data: {
            mail: escape(a.value)
        },
        async: !1,
        success: function(d) {
            "SAVED" == d.replace(/^\s*|\s*$/g, "") ? c = !0 : ("" !== b && (alert(b), a.focus()), c = !1)
        }
    }), c
}

function trackEvent(a, b) {
    getPageTrackerReduced()._trackEvent(a, b)
}

function getPageTrackerReduced() {
    return "undefined" == typeof window._gaq && "undefined" == typeof window._gat ? getMockGATraker() : window.pageTrackerReduced ? window.pageTrackerReduced : window.asyncAnalytics ? (window.pageTrackerReduced = getAsyncTracker("reduced"), window.pageTrackerReduced._setAccount(globals.Request_AnalyticsReduced_code), window.pageTrackerReduced) : "undefined" != typeof window._gat ? (window.pageTrackerReduced = window._gat._createTracker(globals.Request_AnalyticsReduced_code), window.pageTrackerReduced || (window.pageTrackerReduced = getMockGATraker()), window.pageTrackerReduced) : getMockGATraker()
}

function getPageTracker() {
    return "undefined" == typeof window._gaq && "undefined" == typeof window._gat ? getMockGATraker() : window.pageTracker ? window.pageTracker : window.asyncAnalytics ? (window.pageTracker = getAsyncTracker(), window.pageTracker._setAccount(globals.Request_Analytics_code), window.pageTracker) : "undefined" != typeof window._gat ? (window.pageTracker = window._gat._createTracker(globals.Request_Analytics_code), window.pageTracker || (window.pageTracker = getMockGATraker()), window.pageTracker) : getMockGATraker()
}

function getAsyncTracker(a) {
    return a ? a += "." : a = "", {
        _setAccount: function(b) {
            window._gaq.push([a + "_setAccount", b])
        },
        _trackEvent: function(b, c, d, e, f) {
            window._gaq.push([a + "_trackEvent", b, c, d, e, f])
        },
        _setCustomVar: function(b, c, d, e) {
            window._gaq.push([a + "_setCustomVar", b, c, d, e])
        },
        _initData: function() {},
        _trackPageview: function(b) {
            b ? window._gaq.push([a + "_trackPageview", b]) : window._gaq.push([a + "_trackPageview"])
        },
        _setSiteSpeedSampleRate: function(b) {
            window._gaq.push([a + "_setSiteSpeedSampleRate", b])
        }
    }
}

function getMockGATraker() {
    return {
        _trackEvent: function() {},
        _setCustomVar: function() {},
        _initData: function() {},
        _trackPageview: function() {},
        _setAccount: function() {},
        _setSiteSpeedSampleRate: function() {}
    }
}

function trackAnalyticsGoal(a) {
    getPageTrackerReduced()._trackPageview(a)
}

function setZOrigen(valor) {
    var ptInfo = {};
    return null !== GetCookie("pt") && "undefined" !== GetCookie("pt") && eval("ptInfo=" + GetCookie("pt")), ptInfo.o = valor, SetCookieSession("pt", json_stringify(ptInfo)), !0
}

function setOrigenReduced(valor) {
    var ptInfo = {};
    return null !== GetCookie("pt") && "undefined" !== GetCookie("pt") && eval("ptInfo=" + GetCookie("pt")), ptInfo.or = valor, SetCookieSession("pt", json_stringify(ptInfo)), !0
}

function trackInfoLst(tipo, lugar) {
    var ptInfo = {};
    return null !== GetCookie("pt") && "undefined" !== GetCookie("pt") && eval("ptInfo=" + GetCookie("pt")), ptInfo.lt = tipo, ptInfo.ll = lugar, SetCookieSession("pt", json_stringify(ptInfo)), !0
}

function json_stringify(a) {
    var b = typeof a;
    if ("object" != b || null === a) return "string" == b && (a = '"' + a + '"'), String(a);
    var c, d, e = [],
        f = a && a.constructor == Array;
    for (c in a) d = a[c], b = typeof d, "string" == b ? d = '"' + d + '"' : "object" == b && null !== d && (d = json_stringify(d)), e.push((f ? "" : '"' + c + '":') + String(d));
    return (f ? "[" : "{") + String(e) + (f ? "]" : "}")
}

function trackPTrafico(a) {
    var b;
    if (setOrigenReduced(a), null === GetCookie("pt") || "undefined" === GetCookie("pt") || (b = JSON.parse(GetCookie("pt")) || {}, "undefined" == typeof b.id || null === b.id)) {
        var c = '<img src="/utils-SetProveTrafico.php';
        c += location.search ? location.search : "?", c += "" !== location.search ? "&" : "", -1 != location.href.indexOf("#") && (queryaddword = location.href.split("#")[1], c += queryaddword + "&"), null !== a && (c += "ru=" + escape(a) + "&"), c += "r=" + document.referrer.replace(new RegExp("&", "gi"), "|"), c += "&e=" + location.href.replace(new RegExp("&", "gi"), "|"), c += '" width="0" height="0" style="position:absolute;top:-100px">';
        var d = document.createElement("div");
        d.innerHTML = c, document.body.appendChild(d.firstChild)
    }
}

function ga_trackEventAll(a, b, c, d, e) {
    "SignUpTracking" == a && GetCookie("fblay") && (b = b + "-" + GetCookie("fblay")), UA_trackEvent(a, b, c, d, e);
    ga_trackEvent(getPageTracker(), a, b, c, d, e), ga_trackEvent(getPageTrackerReduced(), a, b, c, d, e)
}

function ga_trackPageviewAll(a, b) {
    getPageTracker()._trackPageview(a), getPageTrackerReduced()._trackPageview(b), "function" == typeof window.ga && (ga("set", "dimension5", b), ga("set", "contentGroup1", b), ga("send", "pageview", a))
}

function ga_trackEvent(a, b, c, d, e, f) {
    return "undefined" != typeof a ? a._trackEvent(b, c, d, e, f) : !1
}

function ga_crearIframeConversion(a) {
    var b = document.getElementsByTagName("body")[0],
        c = document.createElement("iframe");
    a = a + "-" + Math.floor(1e4 * Math.random()), c.setAttribute("src", "/landing-AdwordsSolic.php?id=" + a), c.setAttribute("id", a), c.style.display = "none", b.appendChild(c)
}

function UA_trackEvent(a, b, c, d, e) {
    if ("undefined" != typeof ga) {
        var f = GetCookie("USER_ID"),
            g = GetCookie("EMP_ID"),
            h = g ? "e" + g : f ? "u" + f : "auto";
        "auto" !== h && (h = "{ 'userId': '" + h + "' }", ga("create", globals.Request_UniversalAnalytics_code, h)), ga("send", "event", a, b, c, d, {
            nonInteraction: +e
        })
    }
}

function ga_trackEventAllByData(a) {
    if (!a[0].eventAlreadyTracked) {
        a[0].eventAlreadyTracked = !0;
        var b = a.data("track-c"),
            c = a.data("track-a"),
            d = a.data("track-l"),
            e = +a.data("track-v"),
            f = +a.data("track-ni");
        c && b && d && ga_trackEventAll(b, c, d, e, f)
    }
}

function AjaxFormManager(a, b, c, d, e, f) {
    this.form = $(a), this.onOk = d, this.onError = e, this.errDisplayMode = b, this.errDisplayFnc = c, this.progressFunction = f;
    var g = this;
    if (null == this.errDisplayMode && (this.errDisplayMode = this.ERR_DISPLAY_STANDAR), this.form.length > 0) {
        var h = this.form[0].onsubmit;
        this.form[0].onsubmit = null
    }
    this.form.submit(function() {
        return "undefined" != typeof tinyMCE && tinyMCE.triggerSave(), null != h ? h.call(this) && g.doSubmit() : g.doSubmit(), !1
    })
}

function fb_init(a) {
    fbConnectLoaded ? null != a && a() : $.getScript("//connect.facebook.net/en_US/sdk.js", function() {
        FB.init({
            appId: globals.Request_FB_AppID,
            version: "v2.6",
            status: !0,
            cookie: !0,
            xfbml: !0,
            oauth: !0,
            channelUrl: window.location.protocol + "//" + globals.SUBDOMAIN_MAIL + "/utils-FbChannel.php"
        }), null != a && a()
    })
}

function wpFbConnectLogin(a, b) {
    return "undefined" == typeof b && (b = function() {
        wpFbProcessLogin(a)
    }), fb_init(function() {
        FB.login(function(a) {
            a.authResponse && b()
        }, {
            scope: "user_location, email"
        })
    }), !1
}

function wpFbProcessLogin(a) {
    FB.api("/me", {
        fields: "name, email"
    }, function(b) {
        var c = b.id,
            d = b.email,
            e = fbcUserExist(c);
        if (e) "undefined" == typeof a ? loadCapaFbcLogin(c, a) : FbcLogin();
        else {
            var f = common_verificaUserDupValid(d);
            "DUP" == f ? loadCapaFbcLink(c, a) : "BAJA" == f ? (alert('A user signed up with this email address already exists'), $("#fb-loading").parent().html(""), $("p.or").html("")) : loadCapaFbcAlta(a)
        }
    })
}

function loadCapaFbcLogin(a) {
    common_teCOM("login_facebook_run"), ga_trackEventAll("Community", "login_facebook_run", getPageTrackerReduced().M, 0, 0), document.getElementById("frameCapaLogin").src = "/com-CapaLoginRun.php?login_type=facebook&fcb_id=" + a
}

function fbcUserExist(a) {
    var b = !1,
        c = "/fcb-UserExists.php?id=" + a;
    return $.ajax({
        url: c,
        async: !1,
        cache: !1,
        success: function(a) {
            b = "OK" == a.trim()
        }
    }), b
}

function FbcLogin(a) {
    a || (a = "/tools/Main"), $.ajax({
        url: "/com-FbLoginRun.php",
        dataType: "json",
        success: function(b) {
            "login fb ko" == b ? window.location = "/com-SimpleLogin.php" : (common_teCOM("login_facebook_run"), window.location = a)
        }
    })
}

function loadCapaFbcLink(a, b) {
    var c = "";
    c = "undefined" !== b && b ? 1 : 0, $.ajax({
        url: "/com-CapaFbcLink.php?fcb_id=" + a + "&preferencias=" + c,
        success: function(a) {
            "undefined" != typeof b && b ? b && (window.location = "/tools/Main") : (common_teCOM("capa_link_facebook"), ga_trackEventAll("Community", "capa_link_facebook", getPageTrackerReduced().M, 0, 0), $("#capaAlta-content").html(a))
        }
    })
}

function loadCapaFbcAlta(a) {
    $.ajax({
        url: "/com-CapaFbcAlta.php",
        success: function(b) {
            a ? (common_teCOM("alta_facebook"), ga_trackEventAll("Community", "alta_facebook", getPageTrackerReduced().M, 0, 0), $("#app-alta-model-content-fb").html(b).find("#frmCapaAlta").attr("target", "").attr("action", "/com-AltaRun.php"), $(".app-go-login-btn").attr("href", "/com-SimpleLogin.php"), $(".close").remove()) : (common_teCOM("capa_alta_facebook"), ga_trackEventAll("Community", "capa_alta_facebook", getPageTrackerReduced().M, 0, 0), $("#app-alta-model-content-fb").html(b)), common_specificApplyIcheck()
        }
    })
}

function com_ShowFbPicture() {
    FB.getLoginStatus(function(a) {
        "connected" === a.status ? com_LayerFbPicture() : FB.login(function(a) {
            a.authResponse && com_LayerFbPicture()
        })
    })
}

function com_LayerFbPicture() {
    common_openLayer("/com-ShowFbPicture.php", function() {
        common_teCOM("fbPicture_Show"), ga_trackEventAll("Community", "fbPicture_Show", getPageTrackerReduced().M, 0, 0)
    })
}

function unlinkFbAccount(a) {
    common_teCOM("prefs_facebook_unlink"), $.ajax({
        url: "/com-UnlinkFbAccount.php?unlinkAccount=1&idUser=" + a,
        success: function(a) {
            $("#linkFbContent").html(a)
        }
    })
}

function showPopupRecorte(a, b, c) {
    return modal = $.modal({
        template: "croppie",
        urlForm: "/com-ModifFotoCrop.php",
        origen: c
    }), com_addImage(b), modal
}

function com_addImage(a, b, c) {
    var d = 300,
        e = 300,
        f = .9 * $(".modal-dialog").width(),
        g = .7 * $(".modal-dialog").width();
    b && (d = b), c && (e = c), uploadCrop = $(".com-perfil-croppie").croppie({
        viewport: {
            width: d,
            height: e,
            quality: 1,
            type: "square"
        },
        boundary: {
            width: f,
            height: g
        }
    });
    var h = new FileReader;
    h.onload = com_fileOnload(a, uploadCrop)
}

function com_fileOnload(a, b) {
    b.croppie("bind", {
        url: a + "?" + Math.random(),
        zoom: 0
    }), b.addClass("ready")
}

function showPopupPerfilRecorteLayer(a, b, c, d, e, f, g) {
    if (c > d) var h = Math.round(.9 * f),
        i = Math.round(.9 * f);
    else var i = Math.round(.9 * e),
        h = Math.round(.9 * e);
    var j = Math.round((e - i) / 2),
        k = Math.round((f - h) / 2);
    document.getElementById("ImageCrop"), Math.max(c + 35, 600);
    $("#ImageCrop").html(' <div id="cropFotoPerfil" class="mt20">  <div class="cabecera"> 	<p class="bigest droid dotted pb6 mb10" > ' + 'Crop your photo' + ' </div>  	<div style="clear:both;">' + 'Move the selected area. Adjust it to your face and click on "Crop photo".' + '		<br><br><div> <div class="crop_content">		<div id="imageContainer">			<img src="' + b + "?r=" + Math.random() + '"><br /><br />		</div>	</div></div><div class="clear overflow"><input type="hidden" id="input_image_ref" value="' + b + '"><input type="hidden" class="textInput" name="is_layer" id="input_is_layer" value="1"><input type="hidden" class="textInput" name="crop_x" id="input_crop_x" value="' + j + '"><input type="hidden" class="textInput" name="crop_y" id="input_crop_y" value="' + k + '"><input type="hidden" class="textInput" name="crop_width" id="input_crop_width" value="' + i + '"><input type="hidden" class="textInput" name="crop_height" id="input_crop_height" value="' + h + '"><input type="hidden" class="textInput" name="crop_percent_size" id="crop_percent_size" value="100">	<div class="overflow" id="botonGuardarFoto"><a class="bt-small-red fleft mr20" href="javascript:void(0);" onclick="$(this).remove(); sendFotoPerfilCrop(' + g + '); return false;"><span>' + 'Save Photo' + '</span></a><a class="bt-small-grey fleft mr20" href="javascript:void(0);" onclick="DeleteImagePerfilModif(' + g + ');" id="botonDescartarFoto"><span>' + 'Discard' + "</span></a></div></div></div>"), crop_imageWidth = c, crop_imageHeight = d, crop_originalImageWidth = e, crop_originalImageHeight = f, conversionPercent_width = crop_imageWidth / crop_originalImageWidth, conversionPercent_height = crop_imageHeight / crop_originalImageHeight, crop_minimumWidthHeight = 75, crop_minimumWidth = 75 * conversionPercent_width, crop_minimumHeight = 75 * conversionPercent_height, crop = 1, init_imageCrop(), $("#botonesPerfil").hide()
}

function sendFotoPerfilCrop(a) {
    $("#botonGuardarFoto").html('<img src="/images/ajax-loader-results.gif" />'), 2 == a ? ($.ajax({
        type: "POST",
        async: !1,
        url: "/emp-PerfilFotoCrop.php",
        data: $("#frmPerfilEmpresa").serialize(),
        success: function() {
            $.ajax({
                type: "POST",
                async: !1,
                url: "/emp-AdminReviewsPerfilesFotoShow.php?tipo=" + a,
                success: function(a) {
                    $("#cropFotoPerfilPreview").html(a), $("#fotoperfil").val("new"), $("#botonesPerfil").show()
                }
            })
        }
    }), $("#cropFotoPerfil").remove()) : $.ajax({
        type: "POST",
        async: !1,
        url: "/emp-PerfilFotoCrop.php",
        data: $("#frmPerfilEmpresa").serialize(),
        success: function() {
            $.ajax({
                type: "POST",
                async: !1,
                url: "/emp-AdminReviewsPerfilesFotoShow.php?tipo=" + a,
                success: function(a) {
                    $("#cropFotoPerfil").html(a), $("#fotoperfil").val("new"), $("#botonesPerfil").show()
                }
            })
        }
    })
}

function sendFotoCrop() {
    $("#botonGuardarFoto").html('<img src="/images/ajax-loader-results.gif" />'), $.ajax({
        type: "POST",
        async: !1,
        url: "/com-ModifFotoCrop.php",
        data: $("#formCrop").serialize(),
        success: function() {
            $("img.app-perfil-thumb").lenght > 0 || $(".app_thumb img").length > 0 ? ($("img.app-perfil-thumb").each(function() {
                $(this).attr("src", $(this).attr("src").split("?")[0] + "?a=" + Math.random())
            }), $(".app_thumb img").each(function() {
                $(this).attr("src", $(this).attr("src").split("?")[0] + "?a=" + Math.random())
            }), $("#app-common-layer").modal("hide")) : $("#app-form-solicitar-boletos-buscador").length > 0 || $("#frmRecomendaciones").length > 0 ? $("#app-common-layer").modal("hide") : window.location.search.indexOf("mode=changeFoto") > -1 ? window.location.href = "/com-Modif.php" : window.location.reload()
        }
    })
}

function cancelFotoCrop() {
    $("#app-common-layer").modal("hide")
}

function _get(a) {
    return document.getElementById(a)
}

function ShowAvatar(a) {
    document.getElementById("ImageCrop").innerHTML = "<img src='" + a + "' />"
}

function reloadImages() {
    $(".app_thumb").each(function() {
        src = $(this).attr("src"), $(this).attr({
            src: src + "?rnd=<? echo mt_rand(1000,9999); ?>"
        })
    })
}

function crop_createDivElements() {
    if (crop_imageDiv = _get("imageContainer"), cropDiv_left = document.createElement("DIV"), cropDiv_left.className = "crop_transparentDiv", cropDiv_left.style.visibility = "visible", cropDiv_left.style.left = "0px", cropDiv_left.style.top = "0px", cropDiv_left.style.height = crop_imageHeight + "px", cropDiv_left.style.width = "0px", cropDiv_left.innerHTML = "<span></span>", crop_imageDiv.appendChild(cropDiv_left), cropDiv_top = document.createElement("DIV"), cropDiv_top.className = "crop_transparentDiv", cropDiv_top.style.visibility = "visible", cropDiv_top.style.left = "0px", cropDiv_top.style.top = "0px", cropDiv_top.style.height = "0px", cropDiv_top.style.width = crop_imageWidth + "px", cropDiv_top.innerHTML = "<span></span>", crop_imageDiv.appendChild(cropDiv_top), cropDiv_right = document.createElement("DIV"), cropDiv_right.className = "crop_transparentDiv", cropDiv_right.style.visibility = "visible", cropDiv_right.style.left = crop_imageWidth + "px", cropDiv_right.style.top = "0px", cropDiv_right.style.height = crop_imageHeight + "px", cropDiv_right.style.width = "0px", cropDiv_right.innerHTML = "<span></span>", crop_imageDiv.appendChild(cropDiv_right), cropDiv_bottom = document.createElement("DIV"), cropDiv_bottom.className = "crop_transparentDiv", cropDiv_bottom.style.visibility = "visible", cropDiv_bottom.style.left = "0px", cropDiv_bottom.style.top = crop_imageHeight + "px", cropDiv_bottom.style.height = "0px", cropDiv_bottom.style.width = crop_imageWidth + "px", cropDiv_bottom.innerHTML = "<span></span>", crop_imageDiv.appendChild(cropDiv_bottom), cropDiv_dotted = document.createElement("DIV"), cropDiv_dotted.className = "crop_dottedDiv", cropDiv_dotted.style.left = "0px", cropDiv_dotted.style.top = "0px", cropDiv_dotted.style.width = crop_imageWidth - 2 * cropToolBorderWidth + "px", cropDiv_dotted.style.height = crop_imageHeight - 2 * cropToolBorderWidth + "px", cropDiv_dotted.innerHTML = "<div></div>", cropDiv_dotted.style.cursor = "move", crop_script_browserIsOpera) {
        var a = cropDiv_dotted.getElementsByTagName("DIV")[0];
        a.style.backgroundColor = "transparent", cropDiv_bottom.style.backgroundColor = "transparent", cropDiv_right.style.backgroundColor = "transparent", cropDiv_top.style.backgroundColor = "transparent", cropDiv_left.style.backgroundColor = "transparent"
    }
    cropDiv_dotted.onmousedown = cropScript_initMove, smallSquare_tl = document.createElement("IMG"), smallSquare_tl.src = "/img/crop/small_square.gif", smallSquare_tl.style.position = "absolute", smallSquare_tl.style.left = -offsetSmallSquares - 2 * cropToolBorderWidth + "px", smallSquare_tl.style.top = -offsetSmallSquares - 2 * cropToolBorderWidth + "px", smallSquare_tl.style.cursor = "nw-resize", smallSquare_tl.id = "nw-resize", smallSquare_tl.onmousedown = cropScript_initResize, cropDiv_dotted.appendChild(smallSquare_tl), smallSquare_tr = document.createElement("IMG"), smallSquare_tr.src = "/img/crop/small_square.gif", smallSquare_tr.style.position = "absolute", smallSquare_tr.style.left = crop_imageWidth - offsetSmallSquares - 2 * cropToolBorderWidth + "px", smallSquare_tr.style.top = -offsetSmallSquares - 2 * cropToolBorderWidth + "px", smallSquare_tr.style.cursor = "ne-resize", smallSquare_tr.id = "ne-resize", smallSquare_tr.onmousedown = cropScript_initResize, cropDiv_dotted.appendChild(smallSquare_tr), smallSquare_bl = document.createElement("IMG"), smallSquare_bl.src = "/img/crop/small_square.gif", smallSquare_bl.style.position = "absolute", smallSquare_bl.style.left = -offsetSmallSquares - 2 * cropToolBorderWidth + "px", smallSquare_bl.style.top = crop_imageHeight - offsetSmallSquares - 2 * cropToolBorderWidth + "px", smallSquare_bl.style.cursor = "sw-resize", smallSquare_bl.id = "sw-resize", smallSquare_bl.onmousedown = cropScript_initResize, cropDiv_dotted.appendChild(smallSquare_bl), smallSquare_br = document.createElement("IMG"), smallSquare_br.src = "/img/crop/small_square.gif", smallSquare_br.style.position = "absolute", smallSquare_br.style.left = crop_imageWidth - offsetSmallSquares - 2 * cropToolBorderWidth + "px", smallSquare_br.style.top = crop_imageHeight - offsetSmallSquares - 2 * cropToolBorderWidth + "px", smallSquare_br.style.cursor = "se-resize", smallSquare_br.id = "se-resize", smallSquare_br.onmousedown = cropScript_initResize, cropDiv_dotted.appendChild(smallSquare_br), crop_imageDiv.appendChild(cropDiv_dotted)
}

function cropScript_initMove(a) {
    return document.all && (a = event), a.target ? source = a.target : a.srcElement && (source = a.srcElement), 3 == source.nodeType && (source = source.parentNode), source.id && source.id.indexOf("resize") >= 0 ? void 0 : (imageDiv_currentLeft = cropDiv_dotted.style.left.replace("px", "") / 1, imageDiv_currentTop = cropDiv_dotted.style.top.replace("px", "") / 1, imageDiv_currentWidth = cropDiv_dotted.style.width.replace("px", "") / 1, imageDiv_currentHeight = cropDiv_dotted.style.height.replace("px", "") / 1, cropEvent_eventX = a.clientX, cropEvent_eventY = a.clientY, crop_moveCounter = 0, cropScript_timerMove(), !1)
}

function cropScript_timerMove() {
    return crop_moveCounter >= 0 && 10 > crop_moveCounter ? (crop_moveCounter++, void setTimeout("cropScript_timerMove()", 1)) : void 0
}

function cropScript_initResize(a) {
    if (document.all && (a = event), cropDiv_dotted.style.cursor = "default", crop_currentResizeType = this.id, cropEvent_eventX = a.clientX, cropEvent_eventY = a.clientY, crop_resizeCounter = 0, imageDiv_currentWidth = cropDiv_dotted.style.width.replace("px", "") / 1, imageDiv_currentHeight = cropDiv_dotted.style.height.replace("px", "") / 1, imageDiv_currentLeft = cropDiv_dotted.style.left.replace("px", "") / 1, imageDiv_currentTop = cropDiv_dotted.style.top.replace("px", "") / 1, cropWidthRatio = cropDiv_dotted.offsetWidth / cropDiv_dotted.offsetHeight, crop_script_fixedRatio && (cropWidthRatio = crop_script_fixedRatio), document.all) {
        var b = cropDiv_dotted.getElementsByTagName("DIV")[0];
        b.style.display = "none"
    }
    return cropScript_timerResize(), !1
}

function cropScript_timerResize() {
    return crop_resizeCounter >= 0 && 10 > crop_resizeCounter ? (crop_resizeCounter += 1, void setTimeout("cropScript_timerResize()", 1)) : void 0
}

function cropScript_executeCrop(a) {
    crop_startProgressBar(), a.style.visibility = "hidden";
    var b = cropScriptAjaxObjects.length;
    cropScriptAjaxObjects[b] = new sack;
    var c = crop_script_server_file + "?image_ref=" + _get("input_image_ref").value + "&x=" + _get("input_crop_x").value + "&y=" + _get("input_crop_y").value + "&width=" + _get("input_crop_width").value + "&height=" + _get("input_crop_height").value + "&percentSize=" + _get("crop_percent_size").value + "&convertTo=" + _get("input_convert_to").options[_get("input_convert_to").selectedIndex].value;
    cropScriptAjaxObjects[b].requestFile = c, cropScriptAjaxObjects[b].onCompletion = function() {
        cropScript_cropCompleted(b, a)
    }, cropScriptAjaxObjects[b].runAJAX()
}

function cropScript_cropCompleted(ajaxIndex, buttonObj) {
    buttonObj.style.visibility = "", eval(cropScriptAjaxObjects[ajaxIndex].response), cropScriptAjaxObjects[ajaxIndex] = !1, crop_hideProgressBar()
}

function crop_cancelEvent(a) {
    return document.all && (a = event), a.target ? source = a.target : a.srcElement && (source = a.srcElement), 3 == source.nodeType && (source = source.parentNode), source.tagName && "input" == source.tagName.toLowerCase() ? !0 : !1
}

function cropScript_mouseMove(a) {
    if (!(mouseMoveEventInProgress || 10 > crop_moveCounter && 10 > crop_resizeCounter)) {
        if (document.all && (mouseMoveEventInProgress = !0), document.all && (a = event), 10 == crop_resizeCounter) {
            if (("e-resize" == crop_currentResizeType || "ne-resize" == crop_currentResizeType || "se-resize" == crop_currentResizeType) && (cropDiv_dotted.style.width = Math.max(crop_minimumWidthHeight, imageDiv_currentWidth + a.clientX - cropEvent_eventX) + "px"), ("s-resize" == crop_currentResizeType || "sw-resize" == crop_currentResizeType || "se-resize" == crop_currentResizeType) && (cropDiv_dotted.style.height = Math.max(crop_minimumWidthHeight, imageDiv_currentHeight + a.clientY - cropEvent_eventY) + "px"), "w-resize" == crop_currentResizeType || "sw-resize" == crop_currentResizeType || "nw-resize" == crop_currentResizeType) {
                var b = cropDiv_dotted.style.left.replace("px", "") / 1,
                    c = Math.max(0, imageDiv_currentLeft + a.clientX - cropEvent_eventX);
                c + crop_minimumWidthHeight > cropDiv_dotted.style.left.replace("px", "") / 1 + cropDiv_dotted.style.width.replace("px", "") / 1 && (c = cropDiv_dotted.style.left.replace("px", "") / 1 + cropDiv_dotted.style.width.replace("px", "") / 1 - crop_minimumWidthHeight), cropDiv_dotted.style.left = c + "px", cropDiv_dotted.style.width = cropDiv_dotted.style.width.replace("px", "") / 1 + b - cropDiv_dotted.style.left.replace("px", "") / 1 + "px"
            }
            if ("n-resize" == crop_currentResizeType || "nw-resize" == crop_currentResizeType || "ne-resize" == crop_currentResizeType) {
                var b = cropDiv_dotted.style.top.replace("px", "") / 1,
                    c = Math.max(0, imageDiv_currentTop + a.clientY - cropEvent_eventY);
                c + crop_minimumWidthHeight > cropDiv_dotted.style.top.replace("px", "") / 1 + cropDiv_dotted.style.height.replace("px", "") / 1 && (c = cropDiv_dotted.style.top.replace("px", "") / 1 + cropDiv_dotted.style.height.replace("px", "") / 1 - crop_minimumWidthHeight), cropDiv_dotted.style.top = c + "px", cropDiv_dotted.style.height = cropDiv_dotted.style.height.replace("px", "") / 1 + b - cropDiv_dotted.style.top.replace("px", "") / 1 + "px"
            }
            if (cropDiv_dotted.offsetHeight + 2 * cropToolBorderWidth + cropDiv_dotted.style.top.replace("px", "") / 1 > crop_imageHeight && (cropDiv_dotted.style.height = crop_imageHeight - cropDiv_dotted.style.top.replace("px", "") / 1 - 2 * cropToolBorderWidth + "px"), cropDiv_dotted.offsetWidth + 2 * cropToolBorderWidth + cropDiv_dotted.style.left.replace("px", "") / 1 > crop_imageWidth && (cropDiv_dotted.style.width = crop_imageWidth - cropDiv_dotted.style.left.replace("px", "") / 1 - 2 * cropToolBorderWidth + "px"), preserveAspectRatio = a.ctrlKey || crop_script_alwaysPreserveAspectRatio ? !0 : !1) {
                var d = cropDiv_dotted.offsetWidth / cropDiv_dotted.offsetHeight;
                if (cropWidthRatio > d ? cropDiv_dotted.style.width = cropDiv_dotted.style.height.replace("px", "") / 1 * cropWidthRatio + "px" : cropDiv_dotted.style.height = cropDiv_dotted.style.width.replace("px", "") / 1 / cropWidthRatio + "px", cropDiv_dotted.offsetHeight + 2 * cropToolBorderWidth + cropDiv_dotted.style.top.replace("px", "") / 1 > crop_imageHeight) {
                    var e = (crop_imageHeight - cropDiv_dotted.style.top.replace("px", "") / 1) / (cropDiv_dotted.offsetHeight + 2 * cropToolBorderWidth);
                    Math.round(cropDiv_dotted.style.width.replace("px", "") * e + cropToolBorderWidth) >= crop_minimumWidthHeight ? (cropDiv_dotted.style.height = Math.round(cropDiv_dotted.style.height.replace("px", "") * e + cropToolBorderWidth) + "px", cropDiv_dotted.style.width = Math.round(cropDiv_dotted.style.width.replace("px", "") * e + cropToolBorderWidth) + "px") : cropDiv_dotted.style.top = crop_imageHeight - cropDiv_dotted.style.height.replace("px", "") + "px"
                }
                if (cropDiv_dotted.offsetWidth + 2 * cropToolBorderWidth + cropDiv_dotted.style.left.replace("px", "") / 1 > crop_imageWidth) {
                    var e = (crop_imageWidth - cropDiv_dotted.style.left.replace("px", "") / 1) / (cropDiv_dotted.offsetWidth + 2 * cropToolBorderWidth);
                    Math.round(cropDiv_dotted.style.height.replace("px", "") * e + cropToolBorderWidth) >= crop_minimumWidthHeight ? (cropDiv_dotted.style.height = Math.round(cropDiv_dotted.style.height.replace("px", "") * e + cropToolBorderWidth) + "px", cropDiv_dotted.style.width = Math.round(cropDiv_dotted.style.width.replace("px", "") * e + cropToolBorderWidth) + "px") : cropDiv_dotted.style.left = crop_imageWidth - cropDiv_dotted.style.width.replace("px", "") + "px"
                }
            }
            crop_script_fixedRatio || a.ctrlKey || (cropWidthRatio = cropDiv_dotted.offsetWidth / cropDiv_dotted.offsetHeight)
        }
        if (10 == crop_moveCounter) {
            var f = imageDiv_currentLeft + a.clientX - cropEvent_eventX;
            0 > f && (f = 0), f + imageDiv_currentWidth + 2 * cropToolBorderWidth > crop_imageWidth && (f = crop_imageWidth - imageDiv_currentWidth - 2 * cropToolBorderWidth), cropDiv_dotted.style.left = f + "px";
            var b = imageDiv_currentTop + a.clientY - cropEvent_eventY;
            0 > b && (b = 0), b + imageDiv_currentHeight + 2 * cropToolBorderWidth > crop_imageHeight && (b = crop_imageHeight - imageDiv_currentHeight - 2 * cropToolBorderWidth), cropDiv_dotted.style.top = b + "px"
        }
        repositionSmallSquares(), resizeTransparentSquares(), mouseMoveEventInProgress = !1
    }
}

function repositionSmallSquares() {
    smallSquare_tr.style.left = cropDiv_dotted.style.width.replace("px", "") / 1 + 2 * cropToolBorderWidth - offsetSmallSquares - 2 * cropToolBorderWidth + "px", smallSquare_br.style.left = cropDiv_dotted.style.width.replace("px", "") / 1 + 2 * cropToolBorderWidth - offsetSmallSquares - 2 * cropToolBorderWidth + "px", smallSquare_br.style.top = cropDiv_dotted.style.height.replace("px", "") / 1 + 2 * cropToolBorderWidth - offsetSmallSquares - 2 * cropToolBorderWidth + "px", smallSquare_bl.style.top = cropDiv_dotted.style.height.replace("px", "") / 1 + 2 * cropToolBorderWidth - offsetSmallSquares - 2 * cropToolBorderWidth + "px"
}

function resizeTransparentSquares() {
    cropDiv_left.style.width = cropDiv_dotted.style.left, cropDiv_right.style.width = Math.max(0, crop_imageWidth - 2 * cropToolBorderWidth - (cropDiv_dotted.style.width.replace("px", "") / 1 + cropDiv_dotted.style.left.replace("px", "") / 1)) + "px", cropDiv_right.style.left = cropDiv_dotted.style.width.replace("px", "") / 1 + 2 * cropToolBorderWidth + cropDiv_dotted.style.left.replace("px", "") / 1 + "px", cropDiv_bottom.style.height = Math.max(0, crop_imageHeight - 2 * cropToolBorderWidth - (cropDiv_dotted.style.height.replace("px", "") / 1 + cropDiv_dotted.style.top.replace("px", "") / 1)) + "px", cropDiv_bottom.style.top = cropDiv_dotted.style.height.replace("px", "") / 1 + 2 * cropToolBorderWidth + cropDiv_dotted.style.top.replace("px", "") / 1 + "px", cropDiv_top.style.height = cropDiv_dotted.style.top, cropDiv_bottom.style.left = cropDiv_dotted.style.left, cropDiv_bottom.style.width = cropDiv_dotted.style.width.replace("px", "") / 1 + 2 * cropToolBorderWidth + "px", cropDiv_top.style.left = cropDiv_dotted.style.left, cropDiv_top.style.width = cropDiv_dotted.style.width.replace("px", "") / 1 + 2 * cropToolBorderWidth + "px", "0px" == cropDiv_left.style.width ? cropDiv_left.style.visibility = "hidden" : cropDiv_left.style.visibility = "visible", "0px" == cropDiv_right.style.width ? cropDiv_right.style.visibility = "hidden" : cropDiv_right.style.visibility = "visible", "0px" == cropDiv_bottom.style.width ? cropDiv_bottom.style.visibility = "hidden" : cropDiv_bottom.style.visibility = "visible"
}

function cropScript_updateFormValues() {
    _get("input_crop_x") && (_get("input_crop_x").value = Math.round(cropDiv_dotted.style.left.replace("px", "") / 1 * (crop_originalImageWidth / crop_imageWidth)), _get("input_crop_y").value = Math.round(cropDiv_dotted.style.top.replace("px", "") / 1 * (crop_originalImageHeight / crop_imageHeight)), _get("input_crop_width").value = Math.round((cropDiv_dotted.style.width.replace("px", "") / 1 + 2 * cropToolBorderWidth) * (crop_originalImageWidth / crop_imageWidth)), _get("input_crop_height").value = Math.round((cropDiv_dotted.style.height.replace("px", "") / 1 + 2 * cropToolBorderWidth) * (crop_originalImageHeight / crop_imageHeight)))
}

function cropScript_stopResizeMove() {
    if (crop_resizeCounter = -1, crop_moveCounter = -1, cropDiv_dotted.style.cursor = "move", cropScript_updateFormValues(), document.all) {
        var a = cropDiv_dotted.getElementsByTagName("DIV")[0];
        a.style.display = "block"
    }
}

function cropScript_setCropSizeByInput() {
    var a = _get("input_crop_x"),
        b = _get("input_crop_y"),
        c = _get("input_crop_width"),
        d = _get("input_crop_height");
    a.value = a.value.replace(/[^0-9]/gi, ""), b.value = b.value.replace(/[^0-9]/gi, ""), c.value = c.value.replace(/[^0-9]/gi, ""), d.value = d.value.replace(/[^0-9]/gi, ""), 0 == a.value.length && (a.value = 0), 0 == b.value.length && (b.value = 0), 0 == c.value.length && (c.value = crop_originalImageWidth), 0 == d.value.length && (d.value = crop_originalImageHeight), a.value > crop_originalImageWidth - crop_minimumWidthHeight && (a.value = crop_originalImageWidth - crop_minimumWidthHeight), b.value > crop_originalImageHeight - crop_minimumWidthHeight && (b.value = crop_originalImageHeight - crop_minimumWidthHeight), c.value / 1 > crop_originalImageWidth && (c.value = crop_originalImageWidth - a.value / 1), d.value / 1 > crop_originalImageHeight && (d.value = crop_originalImageHeight - b.value / 1), a.value / 1 + c.value / 1 > crop_originalImageWidth && (c.value = crop_originalImageWidth - a.value), b.value / 1 + d.value / 1 > crop_originalImageHeight && (d.value = crop_originalImageHeight - b.value), cropDiv_dotted.style.left = Math.round(a.value / 1 * (crop_imageWidth / crop_originalImageWidth)) + "px", cropDiv_dotted.style.top = Math.round(b.value / 1 * (crop_imageHeight / crop_originalImageHeight)) + "px", cropDiv_dotted.style.width = Math.round((c.value / 1 - 2 * cropToolBorderWidth) * (crop_imageWidth / crop_originalImageWidth)) + "px", cropDiv_dotted.style.height = Math.round((d.value / 1 - 2 * cropToolBorderWidth) * (crop_imageHeight / crop_originalImageHeight)) + "px", repositionSmallSquares(), resizeTransparentSquares()
}

function cropScript_setBasicEvents() {
    document.documentElement.ondragstart = crop_cancelEvent, document.documentElement.onselectstart = crop_cancelEvent, document.documentElement.onmousemove = cropScript_mouseMove, document.documentElement.onmouseup = cropScript_stopResizeMove, _get("input_crop_x").onblur = cropScript_setCropSizeByInput, _get("input_crop_y").onblur = cropScript_setCropSizeByInput, _get("input_crop_width").onblur = cropScript_setCropSizeByInput, _get("input_crop_height").onblur = cropScript_setCropSizeByInput, _get("crop_percent_size").onblur = cropScript_validatePercent
}

function cropScript_validatePercent() {
    this.value = this.value.replace(/[^0-9]/gi, ""), 0 == this.value.length && (this.value = "1"), this.value / 1 > crop_maximumPercent && (this.value = "100"), this.value / 1 < crop_minimumPercent && (this.value = crop_minimumPercent)
}

function crop_progressBar() {
    var a = _get("crop_progressBar"),
        b = document.createElement("DIV");
    a.appendChild(b), b.style.position = "absolute", b.className = "crop_progressBar_parentBox", b.style.left = "0px";
    var c = document.createElement("DIV");
    c.className = "progressBar_square", b.appendChild(c);
    var c = document.createElement("DIV");
    c.className = "progressBar_square", b.appendChild(c);
    var c = document.createElement("DIV");
    c.className = "progressBar_square", b.appendChild(c), crop_progressBarMove(), crop_hideProgressBar()
}

function crop_hideProgressBar() {
    _get("crop_progressBar").style.visibility = "hidden"
}

function crop_startProgressBar() {
    var a = _get("crop_progressBar").getElementsByTagName("DIV")[0];
    a.style.left = "0px", _get("crop_progressBar").style.visibility = "visible"
}

function crop_progressBarMove() {
    var a = _get("crop_progressBar").getElementsByTagName("DIV")[0],
        b = a.style.left.replace("px", "") / 1;
    b += 1, b > a.parentNode.clientWidth && (b = 0 - a.clientWidth), a.style.left = b + "px", setTimeout("crop_progressBarMove()", 20)
}

function crop_initFixedRatio() {
    cropScript_setCropSizeByInput()
}

function init_imageCrop() {
    _get("label_dimension") && (_get("label_dimension").innerHTML = crop_originalImageWidth + "x" + crop_originalImageHeight), cropScript_setBasicEvents(), crop_createDivElements(), crop_script_fixedRatio && crop_script_alwaysPreserveAspectRatio && crop_initFixedRatio(), common_stop_spin(".app-spinner-container"), cropScript_updateFormValues()
}
var bodas = new BodasLib,
    funcReady = $(document.body).ready;
"function" == typeof fastReady && (funcReady = fastReady), funcReady(function() {
    try {
        if (parent && parent.internalTrackingService.loaded || internalTrackingService.loaded) return void(internalTrackingService = parent.internalTrackingService)
    } catch (a) {}
    "function" == typeof SetCookie ? (internalTrackingService.getCookieFunction = GetCookie, internalTrackingService.setCookieFunction = SetCookie) : "function" == typeof mobile_common_GetCookie && (internalTrackingService.getCookieFunction = mobile_common_GetCookie, internalTrackingService.setCookieFunction = mobile_common_SetCookieTime);
    var b = internalTrackingService.getCookieFunction("it-nfd");
    if (null !== b && b.length) try {
        b = JSON.parse(internalTrackingService.getCookieFunction("it-nfd")), "object" == typeof b && (internalTrackingService.nextFormData = b)
    } catch (a) {
        console.log("Error parsing cookie NITS")
    }
    internalTrackingService.setCookieFunction("it-nfd", ""), internalTrackingService.loaded = !0;
    var c = $(".app-internal-tracking-form");
    c.length > 0 && c.each(function() {
        internalTrackingService.trackForm(this, !0)
    }), internalTrackingService.bindForms(document.body), $(document.body).on("click", ".app-internal-tracking-set-lead-info", function() {
        internalTrackingService.setLeadNextFormData(this, !1)
    });
    var d = "beforeunload";
    "onpagehide" in window && bodas.isSafari() && (d = "pagehide"), $(window).bind(d, function() {
        internalTrackingService.onBeforeUnloadTrigger()
    })
});
var internalTrackingService = function() {
        function a(a, b) {
            var c = a.data("it-id-category"),
                d = {};
            d.extraData = {}, $.isEmptyObject(this.nextFormData) || a[0].nextFormData || (a[0].nextFormData = this.nextFormData, this.nextFormData = {});
            for (var e in a[0].nextFormData) d.extraData[e] = a[0].nextFormData[e];
            return [].slice.apply(a[0].attributes).forEach(function(a) {
                /^data-it-extra-/.test(a.name) && (d.extraData[a.name.substring(14)] = a.value)
            }), d.extraData.pageGUID = a.attr("data-internal-tracking-page-GUID"), d.name = d.extraData.pageGUID, d.extraData.url = window.location.href, d.extraData.referrer = document.referrer, "undefined" != typeof reduced ? d.extraData.reduced = reduced : "undefined" != typeof parent.reduced && (d.extraData.reduced = parent.reduced), 2 == b && (d.extraData.errorMessage = this.nextError || a.find($(a.data("it-error-box"))).text().trim(), this.nextError = ""), new InternalTrackingConfig(c, b, d)
        }

        function b(a, b) {
            b || c(a);
            var d = $(a);
            d.attr("data-internal-tracking-page-GUID", GuidManager.guidGenerator());
            var e = d.find("input[name=frmInsert]");
            e.val() && d.attr("data-it-extra-frm-insert", e.val());
            var f = 1,
                g = this.createConfigFromData(d, f);
            d.attr("data-it-guid-input") && !d[0].insertedHiddenPageGuid && (d.prepend($("<input type='hidden' name='it-page-guid-" + g.idCategory + "' value='" + d.attr("data-internal-tracking-page-GUID") + "'/>")), d[0].insertedHiddenPageGuid = !0), internalTrackingService.track(g), g.idAction = 4, internalTrackingService.trackOnBeforeUnload(g)
        }

        function c(a) {
            $(a).on("change", ".app-internal-tracking-form input, .app-internal-tracking-form select, .app-internal-tracking-form textarea", function() {
                var a = $(this).closest(".app-internal-tracking-form"),
                    b = $(this).attr("name"),
                    c = $(this).val(),
                    d = internalTrackingService.createConfigFromData(a, 0);
                internalTrackingService.setUserHistory(d, b, c)
            }), $(a).on("submit-success", ".app-internal-tracking-form", function() {
                var a = $(this),
                    b = 4,
                    c = internalTrackingService.createConfigFromData(a, b);
                internalTrackingService.untrackOnBeforeUnload(c), a[0].insertedHiddenPageGuid || (a.prepend($("<input type='hidden' name='it-page-guid-" + c.idCategory + "' value='" + a.attr("data-internal-tracking-page-GUID") + "'/>")), a[0].insertedHiddenPageGuid = !0), c.idAction = 3, internalTrackingService.track(c)
            }), $(a).on("submit-abandon", ".app-internal-tracking-form", function() {
                var a = 4,
                    b = internalTrackingService.createConfigFromData($(this), a);
                internalTrackingService.untrackOnBeforeUnload(b), internalTrackingService.track(b)
            }), $(a).on("click", ".app-internal-tracking-form", function() {
                if (!this.internalTrackingClicked && !$(this).data("it-ignore-click")) {
                    this.internalTrackingClicked = !0;
                    var a = 5,
                        b = internalTrackingService.createConfigFromData($(this), a);
                    internalTrackingService.track(b)
                }
            }), $(a).on("submit-error", ".app-internal-tracking-form", function() {
                var a = 2,
                    b = internalTrackingService.createConfigFromData($(this), a);
                internalTrackingService.track(b)
            })
        }

        function d(a) {
            r[a.idCategory + " " + a.name] || s++, r[a.idCategory + " " + a.name] = a
        }

        function e(a) {
            r[a.idCategory + " " + a.name] && s--, delete r[a.idCategory + " " + a.name]
        }

        function f(a) {
            if (!(a instanceof InternalTrackingConfig)) return console.log("Object given is not a configuration"), !1;
            var b = {
                trackings: g({
                    singleTrack: a
                })
            };
            return $.post("/trace/internalTracking.php", b), !0
        }

        function g(a) {
            for (var b in a) {
                var c = a[b];
                c.history = i(c), c.fields = j(c), a[b] = c
            }
            return a
        }

        function h() {
            s > 0 && _trackStoredOnBeforeUnloadTrackings()
        }

        function i(a) {
            var b = a.idCategory + " " + a.name;
            return t[b] || []
        }

        function j(a) {
            var b = $(".app-internal-tracking-form[data-it-id-category=" + a.idCategory + "]"),
                c = {};
            return b.find("input, select, textarea").each(function() {
                var a = $(this).attr("name");
                a && (c[a] = $(this).val())
            }), c
        }

        function k(a, b, c) {
            var d = a.idCategory + " " + a.name;
            t[d] = t[d] || [], t[d].push([b, c])
        }

        function l(a, b) {
            var c = $(a);
            b ? c.trigger("submit-success") : c.trigger("submit-error")
        }

        function m(a) {
            var b = $(a);
            b.trigger("submit-abandon")
        }

        function n(a, b) {
            var c = $(a),
                d = c.closest(".app-internal-tracking-page").data("it-page"),
                e = c.closest(".app-internal-tracking-item").data("it-position"),
                f = c.closest(".app-internal-tracking-item").data("it-frm-insert"),
                g = {};
            d && (g.page = d), e && (g.position = e), f && (g["frm-insert"] = f), b ? internalTrackingService.nextFormData = g : $.isEmptyObject(g) || this.setCookieFunction("it-nfd", JSON.stringify(g))
        }
        var o = {},
            p = function() {
                return ""
            },
            q = function() {},
            r = {},
            s = 0,
            t = {};
        return this._trackStoredOnBeforeUnloadTrackings = function() {
            var a = {
                    trackings: g(r)
                },
                b = !0;
            "onpagehide" in window && bodas.isSafari() && (b = !1), $.ajax({
                type: "POST",
                url: "/trace/internalTracking.php",
                data: a,
                async: b
            }), r = [], s = 0
        }, {
            track: f,
            trackOnBeforeUnload: d,
            untrackOnBeforeUnload: e,
            onBeforeUnloadTrigger: h,
            getUserHistory: i,
            setUserHistory: k,
            triggerSubmit: l,
            triggerAbandon: m,
            createConfigFromData: a,
            trackForm: b,
            bindForms: c,
            getCookieFunction: p,
            setCookieFunction: q,
            setLeadNextFormData: n,
            nextFormData: o
        }
    }(),
    navigationPos = 0,
    maxNavigationPos = 0,
    boxscroll, api;
("undefined" == typeof console || "undefined" == typeof console.log) && (console = {}, console.log = function() {}),
function(a) {
    a.fn.common_showBreadcrumbSubitems = function(b) {
        return a(this).hover(function() {
            a(this).addClass("open"), a(this).find(".bread-menu").length ? a(this).find(".bread-menu").attr("style", "display:block;") : (b(), a(this).find(".bread-menu").attr("style", "display:block;"))
        }, function() {
            a(this).removeClass("open"), a(this).find(".bread-menu").attr("style", "display:none;")
        }), !1
    }
}(jQuery),
function(a) {
    a.fn.common_hideShowFade = function(b) {
        return "none" == a(this).css("display") ? ("function" == typeof b && b(), a(this).fadeIn()) : a(this).fadeOut(500, function() {
            "function" == typeof b && b(), a(this).fadeIn()
        }), !1
    }
}(jQuery),
function(a) {
    a.fn.common_hideShow = function(b) {
        return "none" == a(this).css("display") ? ("function" == typeof b && b(), a(this).slideToggle()) : a(this).slideToggle(500, function() {
            "function" == typeof b && b(), a(this).slideToggle()
        }), !1
    }
}(jQuery),
function(a) {
    a.fn.cleanWhitespace = function() {
        return textNodes = this.contents().filter(function() {
            return 3 == this.nodeType && !/\S/.test(this.nodeValue)
        }).remove(), this
    }
}(jQuery), Array.prototype.indexOf || (Array.prototype.indexOf = function(a, b) {
    for (var c = b || 0, d = this.length; d > c; c++)
        if (this[c] === a) return c;
    return -1
}), String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, "")
}, String.prototype.sprintf = function() {
    var a = arguments,
        b = 0;
    return this.replace(/\%s/g, function(c, d) {
        return b++, "undefined" != typeof a[b - 1] ? a[b - 1] : c
    })
}, Number.prototype.currency_format = function() {
    var a = globals.REQUEST_CURRENCY_PRECISION,
        b = 3,
        c = globals.thousandsSeparator,
        d = globals.decimalSeparator,
        e = "\\d(?=(\\d{" + (b || 3) + "})+" + (a > 0 ? "\\D" : "$") + ")",
        f = this.toFixed(Math.max(0, ~~a));
    return (d ? f.replace(".", d) : f).replace(new RegExp(e, "g"), "$&" + (c || ","))
};
var GuidManager = function() {
        function a() {
            return null == c && (c = GetCookie("GUID"), null == c && (c = b(), SetCookie("GUID", c))), c
        }

        function b() {
            var a = function() {
                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
            };
            return a() + a() + "-" + a() + "-" + a() + "-" + a() + "-" + a() + a() + a() + "-" + (new Date).getTime()
        }
        var c = null;
        return {
            init: a,
            guidGenerator: b
        }
    }(),
    LandingVendorSlider = function() {
        function a(a) {
            var e = [];
            return i = $(".app-slider-container"), i.each(function() {
                if (!this.swiperLoaded) {
                    var h = $(this).data("total-imgs"),
                        i = $(this).data("track-views"),
                        j = $(".app-slider-title"),
                        k = $(".app-slider-description"),
                        l = {
                            slidesPerView: "auto",
                            centeredSlides: !0,
                            prevButton: ".app-slider-btn-prev",
                            nextButton: ".app-slider-btn-next",
                            initialSlide: 1,
                            observer: !0,
                            spaceBetween: 5,
                            watchSlidesVisibility: !0,
                            watchSlidesProgress: !0,
                            uniqueNavElements: !0,
                            onInit: function(a) {
                                1 == a.activeIndex && a.lockSwipeToPrev()
                            },
                            onSlideChangeStart: function(a) {
                                b(a, h)
                            },
                            onTransitionStart: function(a) {
                                if (g(a), a.container.find("video").each(function() {
                                        this.pause()
                                    }), "undefined" != typeof a.params.wpPreloadNextAmount)
                                    for (var c = a.activeIndex; c <= a.activeIndex + a.params.wpPreloadNextAmount; c++) d(a, c);
                                if ("undefined" != typeof a.params.wpPreloadPrevAmount)
                                    for (var c = a.activeIndex - 1; c >= a.activeIndex - a.params.wpPreloadPrevAmount && c > 0; c--) d(a, c);
                                a.activeIndex >= a.previousIndex && d(a);
                                var e = $(a.slides[a.activeIndex]),
                                    f = e.data("title"),
                                    i = e.data("description");
                                "undefined" != typeof f && j.html(f), "undefined" != typeof i && k.html(i), b(a, h)
                            },
                            onTransitionEnd: function(a) {
                                b(a, h), a.update(!0), f(a), "undefined" != typeof i && i && c(a)
                            },
                            onImagesReady: function(a) {
                                a.update(!0)
                            }
                        },
                        m = $.extend({}, l, a);
                    this.swiperLoaded = !0;
                    var n = new Swiper(this, m);
                    this.swiper = n, e.push(n)
                }
            }), e
        }

        function b(a, b) {
            if (a.activeIndex - 1 >= b) {
                a.activeIndex - 2 == b && a.slideTo(b + 1, 100), a.lockSwipeToNext(), $(a.container).find(".app-slider-btn-next").addClass("dnone");
                var c = $(a.container).find(".swiper-slide").eq(b + 1);
                c.loadedSlideLead || (d(a, b + 2), c.find(".app-lead-img").after($("<div>").append($(".app-lead-slide").detach().removeClass("dnone")).html()), c.loadedSlideLead = !0)
            } else a.unlockSwipeToNext(), a.activeIndex + 1 <= b && d(a, a.activeIndex + 1), $(a.container).find(".app-slider-btn-next").removeClass("dnone");
            1 == a.activeIndex ? (a.lockSwipeToPrev(), $(a.container).find(".app-slider-btn-prev").addClass("dnone")) : (0 == a.activeIndex && a.slideTo(1, 400), a.activeIndex - 1 > 0 && d(a, a.activeIndex - 1), a.unlockSwipeToPrev(), $(a.container).find(".app-slider-btn-prev").removeClass("dnone")), e(a)
        }

        function c(a) {
            if (1 == a.activeIndex && !j) return void(j = !0);
            var b = $("#app-vendor-slider-box").data("id-empresa");
            void 0 != b && 0 !== b.length && ($.ajax({
                url: "/emp-SliderAddPageView.php?idEmpresa=" + b
            }), setTimeout(function() {
                var b = a.activeIndex,
                    c = $(a.slides[b]).find("img").data("url");
                ga_trackPageviewAll(c, reduced)
            }, 500))
        }

        function d(a, b) {
            var c = $(a.container).closest(i),
                d = c.data("img-urls"),
                e = "undefined" != typeof b ? b : a.activeIndex;
            if (a.params.lazyLoading) {
                var f = $(a.slides[e]).find("img[data-src]");
                return void("undefined" != typeof f && (f.attr("src", f.attr("data-src")), f.removeAttr("data-src")))
            }
            if (d.length) {
                var g = d.shift();
                c.data("img-urls", d);
                var h = '<div class="swiper-slide"><img src="' + g + '">';
                1 == d.length && (h += $("<div>").append($(".app-lead-slide").detach().removeClass("dnone")).html()), h += "</div>", a.appendSlide(h)
            }
        }

        function e(a) {
            $(a.slides[a.activeIndex]).hasClass("app-vendor-slide-load-video") ? $(a.container).addClass("icon icon-play-white pointer") : $(a.container).removeClass("icon icon-play-white pointer")
        }

        function f(a) {
            $(a.container).parent().find(".loader").hide()
        }

        function g(a) {
            $(a.container).parent().find(".loader").show()
        }

        function h(a, b, c) {
            function d() {
                h++, h == a && ("function" == typeof b ? b(f) : f.removeClass("dnone"))
            }

            function e(a, b, c, d, e) {
                function f() {
                    e && e()
                }
                var g;
                a.complete && d ? f() : b ? (g = new window.Image, g.onload = f, g.onerror = f, c && (g.srcset = c), b && (g.src = b)) : f()
            }
            for (var f = c ? $(c) : $(".app-slider-container"), g = f.find("img"), h = 0, i = 0; i < g.length && a > i; i++) e(g[i], g[i].currentSrc || g[i].getAttribute("src"), g[i].srcset || g[i].getAttribute("srcset"), !0, d)
        }
        var i, j = !1;
        return {
            createDefault: a,
            showOnImagesLoaded: h
        }
    }(),
    BannerPenalizer = function() {
        function a(a) {
            var b = [];
            for (var c in a) {
                var d = a[c];
                d.length && (d = d[0]), d.banner_ids && d.banner_ids.length && (b = b.concat(d.banner_ids))
            }
            return b
        }

        function b(a, b) {
            a = a || {};
            for (var c = 0; c < b.length; c++) {
                var g = b[c];
                if (a[g]) a[g].ts < f && a[g].ts++;
                else {
                    var h = Object.keys(a);
                    if (h.length >= e) {
                        var i = h[0];
                        for (var j in a) a[j].ts < a[i].ts && (i = j);
                        delete a[i]
                    }
                    a[g] = {
                        ts: 1
                    }
                }
            }
            return SetCookieSession(d, JSON.stringify(a)), a
        }

        function c() {
            return JSON.parse(GetCookie(d) || "{}")
        }
        var d = "BFP_PEN",
            e = 10,
            f = 5;
        return {
            update: b,
            extractIdsFromPromise: a,
            get: c
        }
    }(),
    BestSuggest = function(a) {
        var b = {
            container: ".app-best-suggest-box",
            containerInput: ".app-best-suggest-input",
            inputClear: ".app-best-suggest-clear-input",
            containerList: ".app-best-suggest-list",
            containerListHidden: ".app-best-suggest-list-hidden",
            listElement: ".app-best-suggest-list-element",
            zeroResultElement: ".app-best-suggest-zero-result"
        };
        a = $.extend({}, b, a);
        var c = $(a.container),
            d = c.find(a.inputClear),
            e = c.find(a.containerList),
            f = c.find(a.containerInput),
            g = "10px 0",
            h = e.css("height");
        f.on("focus", function() {
            $(this).val("").trigger("change"), e.is(":hidden") && (e.css("height", "0px"), e.css("padding", "0px"), e.show()), e.stop().animate({
                height: h,
                padding: g
            }, 400, function() {
                e.css("height", "")
            })
        }), $(document.body).on("click", a.listElement, function() {
            f.val($(this).text().trim())
        }), f.on("blur", function(a) {
            if (document.ignoreBlur) return document.ignoreBlur = !1, void a.preventDefault();
            var b = $(this);
            b.val(b.data("name")), e.stop().animate({
                height: "0px",
                padding: "0px"
            }, 400, function() {
                e.hide().css("height", "").css("padding", "")
            })
        }), c.on("keydown", a.containerInput + ":focus", function(b) {
            if ($(this).data("enable-keyboard-navigation")) {
                var d, g = c.find(a.containerList + " > " + a.listElement),
                    h = g.filter(".suggest-designer-current"),
                    i = !1;
                if (38 == b.keyCode) {
                    b.preventDefault();
                    var j = h.prevAll(a.listElement + ":visible").eq(0);
                    j.length > 0 && ($(this).data("enable-keyboard-navigation") && (h.removeClass("suggest-designer-current"), j.addClass("suggest-designer-current")), d = e, i = j[0].offsetTop - d[0].scrollTop - j.height() - 100 < 0, i && (d[0].scrollTop = j[0].offsetTop - ~~(d.height() / 2) + j.height()))
                } else if (40 == b.keyCode) {
                    b.preventDefault();
                    var k;
                    h.length ? k = h.nextAll(a.listElement + ":visible").eq(0) : (k = g.filter(":visible").eq(0), h = k), k.length > 0 && ($(this).data("enable-keyboard-navigation") && (h.removeClass("suggest-designer-current"), k.addClass("suggest-designer-current")), d = h.closest(a.containerList + ":visible"), i = k[0].offsetTop - d[0].scrollTop > ~~(d.height() / 2), i && (d[0].scrollTop = k[0].offsetTop - ~~(d.height() / 2) - k.height()))
                } else 13 == b.keyCode && (b.preventDefault(), f.val(h.text().trim()), h.click())
            }
        }), f.on("keyup change", function(b) {
            var d = [38, 40, 13];
            if (-1 == d.indexOf(b.keyCode)) {
                var f = c,
                    g = $(this).val().trim().toUpperCase();
                g = strtr(g, "ÀÁÂÃÄÅàáâãäåÒÓÔÕÖØòóôõöøÈÉÊËèéêëÇçÌÍÎÏìíîïÙÚÛÜùúûüÿÑñ", "AAAAAAaaaaaaOOOOOOooooooEEEEeeeeCcIIIIiiiiUUUUuuuuyNn");
                var h = $(a.containerListHidden),
                    i = $(a.containerList),
                    j = i.find(a.zeroResultElement).data("list");
                if ("ordered" == j && g.length > 0 || "business" == j && 0 == g.length) {
                    var k = i.html();
                    i.html(h.html()), h.html(k)
                }
                var l = 0,
                    m = f.find(a.containerList + " > " + a.listElement);
                if (m.each(function() {
                        var a = $(this).data("name-suggest"),
                            b = a.split(" ");
                        if (0 == a.indexOf(g)) return void $(this).show();
                        if (b.length > 1)
                            for (var c in b)
                                if (0 == b[c].indexOf(g)) return void $(this).show();
                        l++, $(this).hide()
                    }), l == m.length) return f.find(a.containerList + " > " + a.zeroResultElement).show(), void m.show();
                f.find(a.containerList + " > " + a.zeroResultElement).hide(), e[0].scrollTop = 0, $(this).data("enable-keyboard-navigation") && (m.removeClass("suggest-designer-current"), m.filter(":visible").first().addClass("suggest-designer-current"))
            }
        }), d.on("mousedown", function() {
            f.focus(), document.ignoreBlur = !0
        }), e.on("mousedown", function() {
            document.ignoreBlur = !0
        }), d.on("click", function() {
            f.val("").trigger("change").focus()
        })
    },
    LoadingVendorTourSlider = function() {
        function a(a) {
            c = $(".app-slider-container"), c.each(function() {
                if (!this.swiperLoaded) {
                    var c = $(this).data("total-items"),
                        d = ($(this).data("track-views"), {
                            slidesPerView: "auto",
                            centeredSlides: !0,
                            prevButton: ".app-slider-btn-prev",
                            nextButton: ".app-slider-btn-next",
                            initialSlide: 0,
                            observer: !0,
                            spaceBetween: 5,
                            watchSlidesVisibility: !0,
                            watchSlidesProgress: !0,
                            uniqueNavElements: !0,
                            onInit: function(a) {
                                b(a, c)
                            },
                            onSlideChangeStart: function(a) {
                                b(a, c)
                            },
                            onTransitionStart: function(a) {
                                var d = $(a.slides[a.activeIndex]).data("title");
                                "undefined" != typeof d && $(".app-title-slider").html(d);
                                var e = $(a.slides[a.activeIndex]).data("description");
                                "undefined" != typeof e && ("" != e ? $(".app-description-slider").html(e).show() : $(".app-description-slider").html(e).hide()), b(a, c)
                            }
                        }),
                        e = $.extend({}, d, a);
                    return this.swiperLoaded = !0, new Swiper(this, e)
                }
            })
        }

        function b(a, b) {
            a.activeIndex + 1 >= b ? (a.lockSwipeToNext(), $(".app-slider-btn-next").addClass("dnone")) : (a.unlockSwipeToNext(), $(".app-slider-btn-next").removeClass("dnone")), 0 == a.activeIndex ? (a.lockSwipeToPrev(), $(".app-slider-btn-prev").addClass("dnone")) : (a.unlockSwipeToPrev(), $(".app-slider-btn-prev").removeClass("dnone"))
        }
        var c;
        return {
            createDefault: a
        }
    }();
$(document).ready(function() {
    if (common_applyIcheck(), $(document.body).hasClass("app-has-ajax-manager") && common_ajaxManager_load(), $(document.body).hasClass("app-has-tiny-common") && common_tiny_init({}), function(a) {
            a.fn.goTo = function(b) {
                return b = 0 | b, a("html, body").animate({
                    scrollTop: a(this).offset().top + b + "px"
                }, 500, "swing"), this
            }
        }(jQuery), $("#app-common-layer, #tool-modal").bind("hidden.bs.modal", function() {
            $(document.body).css("margin-right", "0px")
        }), $("#app-common-layer, #tool-modal").bind("show.bs.modal", function() {
            $(document.body).css("margin-right", "15px")
        }), $(document.body).on("hidden.bs.modal", ".modal", function() {
            $(this).removeData("bs.modal"), $(this).html("")
        }), $(document.body).on("click", ".app-common-datepicker", function() {
            var a = $(this);
            $(this).find("input:first").datepicker("show").on("changeDate", function(b) {
                "days" == b.viewMode && (a.find("input:first").attr("tabindex") && $("*[tabindex=" + (parseInt(a.find("input:first").attr("tabindex")) + 1) + "]").focus(), $(this).datepicker("hide"), $(this).trigger("change"))
            })
        }), $(".app-perfil-show-old", "#misTags").on("click", function() {
            var a = $(this).parent().find(".com-about-wedding-layer");
            a.is(":visible") ? a.hide() : ($(".com-about-wedding-layer").hide(), a.show())
        }), $(".app-perfil-show", "#misTags").on("click", function(a) {
            var b = $(this).closest(".app-aboutwedding-show").find(".app-about-wedding-layer"),
                c = $(this).closest(".app-container");
            aboutToggleSuggest(b, c)
        }), $(".app-perfil-show", "#app-members-search").on("click", function(a) {
            var b = $(this).find(".app-about-wedding-layer"),
                c = $(this);
            aboutToggleSuggest(b, c)
        }), $("#app-show-footer-flags").on("click", function() {
            $("#app-footer-flags").is(":hidden") ? common_footerSelectPais() : $("#app-footer-flags").find("ul").toggle()
        }), $(".app-slideshow-home").length > 0) {
        var idEmpresas = $(".app-slideshow-home").data("id-empresas"),
            carouselOptions = {
                visible: 4,
                speed: 300,
                pause: !0,
                start: 0,
                btnPrev: function() {
                    return $(this).find(".app-slideshow-prev")
                },
                btnNext: function() {
                    return $(this).find(".app-slideshow-next")
                }
            };
        $(".app-slideshow-home ul").load("index-DestacadasAjax.php?idEmpresas=" + idEmpresas, function() {
            $(".app-slideshow-home").jCarouselLite(carouselOptions)
        }), $(".index-busc-input").click(function() {
            common_addBlackOver(), $.scrollTo($(".index-busc-cab"), 500)
        }), $(document).mouseup(function(a) {
            for (var b = $(".index-busc-input"), c = ["#txtStrSearch", "#txtLocSearch", "#layer-suggest-1", "#layer-suggest-2"], d = !0, e = 0; e < c.length; e++) {
                var b = $(c[e]);
                if (b.is(a.target) || b.has(a.target).length > 0) {
                    d = !1;
                    break
                }
            }
            d && (blurEnable = !0, $("#txtLocSearch").trigger("blur", !0)), b.is(a.target) || 0 !== b.has(a.target).length || blurEnable && (common_removeBlackOver(), $("#txtLocSearch").trigger("blur", !0))
        })
    }
    $(document.body).on("mouseenter", ".app-dress-tipo-nav", function() {
        var a = $(this).data("id-tipo");
        $(".app-dress-destacados[data-id-tipo=" + a + "]:hidden") && ($(".app-dress-destacados").hide(), $(".app-dress-destacados[data-id-tipo=" + a + "]").show())
    }), common_addJavascriptLinks(), navigator.userAgent.indexOf(" MSIE ") > -1 && $(".modal").removeClass("fade"), $(document.body).on("click", ".app-footer-links", function(a) {
        a.preventDefault(), window.location.href = globals.link_sections[$(this).data("sec")]
    }), $(document.body).on("click", "*[class*=app_lnkEsc_]", function() {
        var a = $(this).attr("class").split("app_lnkEsc_")[1].split(" ")[0];
        a && SetCookie("ie", a)
    }), $(".app-ec-track-vendor-click").on("click", function() {
        if (globals.Request_AnalyticsEcommerceEnabled) {
            var a = $(this).closest(".app-vendors-item");
            common_ec_track_vendor_click(a)
        }
    }), $(document.body).on("click", ".app-user-logged-menu-chat", function(a) {
        a.preventDefault(), $("#app-user-logged-menu-layer").toggle(), PusherManager.openCurrentChat($(this).data("totype"), $(this).data("toid"), $(this).data("idconversation"), $(this).data("toname"), $(this).data("toavatar"))
    });
    var bannerPromises = [];
    if ($(".app-DFP").length > 0) {
        var bannerPromise = function() {
            var banner = $(".app-DFP"),
                numSlots = banner.length,
                idRegion = banner.first().data("idregion"),
                idRegionAdm1 = banner.first().data("idregionadm1"),
                idGrupo = banner.first().data("idgrupo"),
                idSubSeccion = banner.first().data("idsubseccion"),
                autopromo = banner.first().data("autopromo");
            return $.ajax({
                url: "/banners/banner-Show.php?numSlots=" + numSlots + "&reduced=" + reduced + "&idRegion=" + idRegion + "&idGrupo=" + idGrupo + "&idSubSeccion=" + idSubSeccion + "&idRegionAdm1=" + idRegionAdm1 + "&autopromo=" + autopromo
            }).done(function(data) {
                var i = 0;
                return $(".app-DFP").each(function() {
                    $(this).html(eval("data.banner" + i)), i += 1
                }), data
            })
        }();
        bannerPromises.push(bannerPromise)
    }
    if ($(".app-DFP-875").length > 0) {
        var bannerPromise = function() {
            var a = $(".app-DFP-875"),
                b = a.data("idregion"),
                c = a.data("idgrupo"),
                d = a.data("idsubseccion");
            return $.ajax({
                url: "/banners/banner-Show875x90.php?reduced=" + reduced + "&idRegion=" + b + "&idGrupo=" + c + "&idSubSeccion=" + d
            }).done(function(a) {
                return a.banner ? $(".app-DFP-875").html(a.banner) : $(".app-DFP-875").hide(), a
            })
        }();
        bannerPromises.push(bannerPromise)
    }
    if ($(".app-DFP-70").length > 0) {
        var bannerPromise = function() {
            var a = $(".app-DFP-70"),
                b = a.data("idregion"),
                c = a.data("idgrupo"),
                d = a.data("idsubseccion");
            return $.ajax({
                url: "/banners/banner-Show300x70.php?reduced=" + reduced + "&idRegion=" + b + "&idGrupo=" + c + "&idSubSeccion=" + d
            }).done(function(a) {
                return $(".app-DFP-70").html(a.banner), a
            })
        }();
        bannerPromises.push(bannerPromise)
    }
    bannerPromises.length && $.when.apply($, bannerPromises).then(function() {
        var a = BannerPenalizer.extractIdsFromPromise(arguments),
            b = BannerPenalizer.get();
        BannerPenalizer.update(b, a)
    }), $(".app-reals-index").length > 0 && $.ajax({
        url: "/index-Real.php"
    }).done(function(a) {
        $(".app-reals-index").html(a)
    }), $(".app-multilogin-toggle").on("click", function(a) {
        $("#app-logged-box").hide(), $("#app-multiLogin").toggle()
    }), $(".app-logged-toggle").on("click", function(a) {
        $("#app-multiLogin").hide(), $("#app-logged-box").toggle()
    }), $(document.body).on("click", ".app-mirror-link", function(a) {
        a.preventDefault(), a.stopPropagation();
        var b = $(this).find("a").first().attr("href");
        document.location = b
    }), $(document.body).on("click", ".app-link", function(a) {
        a.preventDefault(), a.stopPropagation();
        var b = $(this).data("href");
        document.location = b
    }), $(document.body).on("click", ".app-link-b64", function(a) {
        a.preventDefault(), a.stopPropagation();
        var b = atob($(this).data("id-link"));
        document.location = b
    }), $(document.body).on("click", ".app-share-social", function() {
        var a = $(this).data("social"),
            b = $(this).data("url"),
            c = $(this).data("title"),
            d = $(this).data("via"),
            f = $(this).data("image");
        $(this).data("stop-prop") && e.stopPropagation(), common_social_share(a, b, c, d, f)
    }), $("#app-related-content").length > 0 && ! function() {
        var a = $("#app-related-content"),
            b = {
                idSectores: a.data("id-sectores"),
                idGrupo: a.data("id-grupo"),
                idArticulo: a.data("id-articulo"),
                keyword: a.data("keyword"),
                idDebate: a.data("id-debate"),
                templates: a.data("templates"),
                idPage: a.data("id-page")
            };
        $.post("/relatedContent/loadContent.php", b, function(a) {
            $("#app-related-content").replaceWith(a.html)
        })
    }(), $(document.body).on("click", "#lImportFbPicture", function(a) {
        a.preventDefault();
        var b = $("#facebook_img").prop("src");
        common_setImageFacebookProfile(b)
    }), $(document.body).on("click", ".app-init-conversation", function(a) {
        a.preventDefault(), PusherManager.initConversation($(this).data("totype"), $(this).data("toid"), $(this).data("idconversation"), $(this).data("toname"), $(this).data("toavatar"))
    }), $(document.body).on("click", ".app-pusher-pedir-presupuesto", function(a) {
        a.preventDefault(), PusherManager.showContactar($(this).data("href"), $(this).data("id"), !1), PusherManager.minimizeChat()
    }), $(document.body).on("click", ".app-ua-track-event", function() {
        ga_trackEventAllByData($(this))
    }), $(document.body).on("click", ".app-validacion-redes-sociales", function(a) {
        a.preventDefault();
        var b = $("#input_facebook").val(),
            c = $("#input_twitter").val(),
            d = $("#input_pinterest").val(),
            e = $("#input_instagram").val();
        return b.toLowerCase().indexOf("www.facebook.com") < 0 && b.length > 0 ? ($(".app-msg-error").addClass("alert alert-error mb20 mr10 ml10").html('The Facebook profile is not correct. You must copy the address of your profile (e.g.: www.facebook.com/yourbusiness)'), !1) : c.toLowerCase().indexOf("twitter.com") < 0 && c.length > 0 ? ($(".app-msg-error").addClass("alert alert-error").html('The Twitter profile is not correct. You must copy the address of your profile (e.g.: twitter.com/yourbusiness)'), !1) : d.toLowerCase().indexOf("pinterest.com") < 0 && d.length > 0 ? ($(".app-msg-error").addClass("alert alert-error").html('The Pinterest profile is not correct. You must copy the address of your profile (e.g.: uk.pinterest.com/yourbusiness)'), !1) : e.toLowerCase().indexOf("www.instagram.com") < 0 && e.length > 0 ? ($(".app-msg-error").addClass("alert alert-error").html('The Instagram profile is not correct. You must copy the address of your profile (e.g.: www.instagram.com/yourbusiness)'), !1) : void $(".app-admin-social-form").submit()
    }), $(document.body).on("click", ".app-close-modal-upload-mywedding", function(a) {
        modal.close(), $('input[type="file"]').removeAttr("id");
        var b = '<input id="photo_2" type="file" name="foto">';
        $(".app-pencil-partner").append(b);
        var c = '<input id="photo_1" type="file" name="foto">';
        $(".app-pencil-owner").append(c)
    }), $(document.body).on("click", ".com-submit-img-profile", function(a) {
        a.preventDefault();
        var b = uploadCrop.croppie("get"),
            c = b.points[0],
            d = b.points[1],
            e = b.points[2],
            f = b.points[3],
            g = $("#imageCroppie").attr("action"),
            h = $("#origen").val(),
            i = $("#rol").val();
        1 > c && (c = 1), 1 > d && (d = 1);
        var j = {
            x1: c,
            x2: e,
            y1: d,
            y2: f,
            origen: h,
            rol: i
        };
        $.ajax({
            url: g,
            data: j,
            type: "POST",
            success: function(a) {
                switch (h) {
                    case "perfil":
                        $("img.app_thumb").each(function() {
                            $(this).attr("src", $(this).attr("src").split("?")[0] + "?a=" + Math.random())
                        }), $(".app_thumb img").each(function() {
                            $(this).attr("src", $(this).attr("src").split("?")[0] + "?a=" + Math.random())
                        }), window.location = "com-Modif.php";
                        break;
                    case "front":
                        window.location.reload();
                        break;
                    case "mywedding":
                        modal.close(), $(".app-tools-wedding-foto-" + a.rol).attr("src", a.filename + "?r=" + Math.random()), $('input[type="file"]').removeAttr("id");
                        var b = '<input id="photo_2" type="file" name="foto">';
                        $(".app-pencil-partner").append(b);
                        var c = '<input id="photo_1" type="file" name="foto">';
                        $(".app-pencil-owner").append(c);
                        break;
                    case "layer":
                        location.reload();
                        break;
                    case "recomendacion":
                        modal.close(), $("#app-common-layer").modal("hide");
                        break;
                    case "boletos":
                        modal.close(), $("#app-common-layer").modal("hide");
                        break;
                    default:
                        modal.close()
                }
            }
        })
    }), $(document.body).on("click", ".app-scroll-to", function(a) {
        a.preventDefault();
        var b = $(this).data("id"),
            c = $("#" + b);
        $("html, body").stop().animate({
            scrollTop: c.offset().top
        })
    }), $(".app-suggest-designer-input").keyup(function(a) {
        if ("undefined" != typeof a) var b = "which" in a ? a.which : a.keyCode;
        ("undefined" == typeof a || "undefined" != typeof a && (35 > b || b > 40) && 13 != b && 32 != b) && delay(function() {
            var a = $(".app-suggest-designer-div");
            $.ajax({
                url: "/utils-SearchDesigners.php",
                data: {
                    nameDisenador: $(".app-suggest-designer-input").val()
                },
                type: "GET",
                dataType: "json",
                success: function(b) {
                    if (a.html(""), $.isEmptyObject(b)) a.append($("<div />").addClass("suggest-message-no-results").html('No matches have been found'));
                    else {
                        var c = $();
                        $.each(b, function(b, d) {
                            var e = $("<li />").addClass("suggest-navigation").attr("data-iddisenador", d.idDesigner).attr("data-namedisenador", d.name).html(d.snippet).on("click", function() {
                                var b = $(this).data("iddisenador"),
                                    c = $(this).data("namedisenador");
                                $.ajax({
                                    url: "/com-AsignarDisenadorAUsuario.php",
                                    data: {
                                        idDisenador: b
                                    },
                                    method: "POST",
                                    success: function(a) {
                                        $(".app-name-designer").html(c)
                                    }
                                }), a.html("").hide(), $(".app-about-wedding-layer").addClass("dnone"), $(".app-perfil-show").show(), $(".app-com-icon-about[data-group=designer]").replaceWith('<i data-grupo="designer" class="app-perfil-show icon-com icon-com-about-dress"></i>')
                            });
                            c = c.add(e)
                        }), a.append($("<div/>").addClass("column-container").append($("<ul />").addClass("box-scroll").append(c)))
                    }
                    var d = $("<div />").addClass("suggest-message-add-vendor").html($("<p />").html('No encuentras al Diseñador? Añádelo aquí')).on("click", function() {
                        $.post("com-AddNewDesignerIns.php", {
                            nameDisenador: $(".app-suggest-designer-input").val()
                        }).done(function(b) {
                            $(".app-name-designer").html($(".app-suggest-designer-input").val()), a.html("").hide(), $(".app-about-wedding-layer").addClass("dnone"), $(".app-perfil-show").show()
                        })
                    });
                    a.append(d), a.show()
                }
            })
        }, 600)
    }), $(".app-suggest-honeymoon-input").keyup(function(a) {
        if ("undefined" != typeof a) var b = "which" in a ? a.which : a.keyCode;
        ("undefined" == typeof a || "undefined" != typeof a && (35 > b || b > 40) && 13 != b && 32 != b) && delay(function() {
            var a = $(".app-suggest-honeymoon-div");
            $.ajax({
                url: "/utils-SearchHoneyMoons.php",
                data: {
                    nameHoneyMoon: $(".app-suggest-honeymoon-input").val()
                },
                type: "GET",
                dataType: "json",
                success: function(b) {
                    if (a.html(""), $.isEmptyObject(b)) a.append($("<div />").addClass("suggest-message-no-results").html('No matches have been found'));
                    else {
                        var c = $();
                        $.each(b, function(b, d) {
                            li = $("<li />").addClass("suggest-navigation").attr("data-idhoneymoon", b).attr("data-namehoneymoon", d.snippet).html(d.snippet).on("click", function() {
                                var b = $(this).data("idhoneymoon");
                                $(this).data("namehoneymoon");
                                $.ajax({
                                    url: "/com-AsignarHoneyMoonAUsuario.php",
                                    data: {
                                        idHoneyMoon: b
                                    },
                                    method: "POST",
                                    success: function(a) {
                                        $(".app-name-honeymoon").html(d.name)
                                    }
                                }), a.html("").hide(), $(".app-about-wedding-layer").addClass("dnone"), $(".app-perfil-show").show(), $(".app-com-icon-about[data-group=honeymoon]").replaceWith('<i data-grupo="honeymoon" class="app-perfil-show icon-com icon-com-about-travel"></i>')
                            }), c = c.add(li)
                        }), a.append($("<div/>").addClass("column-container").append($("<ul />").addClass("box-scroll").append(c)))
                    }
                    li = $("<div />").addClass("suggest-message-add-vendor").html($("<p />").html('No encuentras el Destino? Añádelo aquí')).on("click", function() {
                        $.post("com-AddNewHoneyMoonIns.php", {
                            nameHoneyMoon: $(".app-suggest-honeymoon-input").val()
                        }).done(function(b) {
                            $(".app-name-honeymoon").html($(".app-suggest-honeymoon-input").val()), a.html("").hide(), $(".app-about-wedding-layer").addClass("dnone"), $(".app-perfil-show").show()
                        })
                    }), a.append(li), a.show()
                }
            })
        }, 600)
    });
    var delay = function() {
        var a = 0;
        return function(b, c) {
            clearTimeout(a), a = setTimeout(b, c)
        }
    }();
    $(document.body).on("click", ".app-articles-widget-show-subcateg", function() {
            var a = $(this);
            common_articles_menu_showCategories(a, a.data("idcateg"))
        }),
        function() {
            if ($(".app-icon-hover").length) {
                var a = $(".app-icon-hover");
                common_icon_hover(a)
            }
        }(), $(document.body).on("click", ".app-dropdown-toggle", function() {
            var a = $(this).next(".app-dropdown-toggle-layer"),
                b = a.data("isVisible"),
                c = a.data("ajax"),
                d = a.html().trim().length > 0;
            c && !d ? a.load(c, function() {
                a.data("isVisible", common_dropdown_toggle(a, b))
            }) : a.data("isVisible", common_dropdown_toggle(a, b))
        }), $(document.body).on("click", ".app-modal", function() {
            var a = $(this),
                b = a.data("modal-href"),
                c = a.data("modal-container") || "app-common-layer",
                d = $("#" + c);
            0 === d.length && ($(document.body).append('<div id="' + c + '" class="modal"></div>'), d = $("#" + c));
            var e = a.data("modal-backdropclass");
            return $.get(b).then(function(a) {
                d.html(a), (d.data("bs.modal") || {}).isShown || d.modal(), e && $(".modal-backdrop").addClass(e)
            }), !1
        }), $(document.body).on("click", ".app-com-show-tema-all", function() {
            $(this).hide(), $(".discuss-post-comment-globe.discuss-post-comment-globe-resume").removeClass("discuss-post-comment-globe-resume"), $(".app-com-tema-resume").hide(), $(".app-com-tema-all").removeClass("dnone")
        }), $("input[type=radio],input[class=radioPagBrasilMetodoPago]").on("ifChecked", function(a) {
            $("#pagBrasilPaymentSelect").submit()
        }), $(document.body).hasClass("app-infinite-scroll") && ($(window).scroll(function() {
            var a = $(".app-infinite-scroll-pagination"),
                b = $(".app-infinite-scroll-content"),
                c = a.data("end"),
                d = a.data("loading"),
                e = a.data("url"),
                f = a.data("masonry"),
                g = a.data("type");
            if (year = a.data("year"), a.length && $(this).scrollTop() > a.position().top - 2500 && 1 != c && 0 == d) {
                var h = a.data("page"),
                    i = "",
                    j = a.data("iduser");
                j && (i += "&id_user=" + j);
                var k = a.data("tipo");
                k && (i += "&tipo=" + k);
                var l = a.data("orden");
                l && (i += "&orden=" + l);
                var m = a.data("idgroup");
                m && (i += "&id_group=" + m), g && (i += "&type=" + g), year && (i += "&year=" + year), h++, a.data("page", h), a.data("loading", 1), $.ajax({
                    url: "/" + e + "?frmNPage=" + h + i,
                    success: function(c) {
                        if ($(".pagination").addClass("dnone"), c) {
                            var d = window.location.href;
                            if (h > 1) {
                                var e = /--(\d+)$/;
                                e.test(d) ? d = d.replace(e, h) : d += "--" + h
                            }
                            if (ga_trackPageviewAll(d, window.reduced), f) {
                                var g = $("<div />").append(c),
                                    i = g.find(".app-fav-list-item"),
                                    j = i.length,
                                    k = 0;
                                i.css({
                                    opacity: 0
                                }), b.append(i), i.each(function() {
                                    var c = $(this),
                                        d = c.find("img").attr("src"),
                                        e = new Image;
                                    e.src = d, e.onload = function() {
                                        k++, k == j && (a.data("loading", 0), b.masonry("appended", i), $(".app-fav-list-item").css({
                                            opacity: 1
                                        }))
                                    }
                                })
                            } else a.data("loading", 0), b.append(c)
                        } else a.data("loading", 0), a.data("end", 1), a.addClass("dnone")
                    }
                })
            }
        }), $(window).on("scroll ready", function() {
            var a = $(".app-infinite-scroll-top");
            $(this).scrollTop() >= 1800 ? a.fadeIn() : a.fadeOut()
        }), $(document.body).on("click", ".app-infinite-scroll-top", function() {
            $("html,body").animate({
                scrollTop: 0
            }, 200)
        }))
});
var rootdomain = window.location.protocol + "//" + window.location.hostname;
$(document).ready(function() {
    $("#app-common-layer").on("hidden.bs.modal", function() {
        $(this).removeData("bs.modal"), $(this).html("")
    }), $(document.body).on("click", ".app-role-radio-fake", function() {
        var a = $(this);
        $(".app-role-radio-fake").data("selected", !1), a.data("selected", !0), $(".app-role-radio-fake-other").find("input[type=radio]").prop("checked", !1), "male" == a.data("type") ? $(".app-role-radio-fake[data-type=female]").find(".app-role-icon").removeClass("icon-female-auth-hover").addClass("icon-female-auth") : "female" == a.data("type") && $(".app-role-radio-fake[data-type=male]").find(".app-role-icon").removeClass("icon-male-auth-hover").addClass("icon-male-auth"), $(".app-role-input").val($(this).data("value")), $(".app-capa-rol-select").hide(), $(".app-role-radio-fake-other").show()
    }), $(document.body).on("click", ".app-role-radio-fake-other", function() {
        $(".app-role-radio-fake").data("selected", !1), $(".app-role-icon").each(function(a, b) {
            var c = $(b);
            c.hasClass("icon-male-auth-hover") ? c.removeClass("icon-male-auth-hover").addClass("icon-male-auth") : c.removeClass("icon-female-auth-hover").addClass("icon-female-auth")
        }), $(this).find("input[type=radio]").prop("checked", !0), $(".app-capa-rol-select").show(), $(this).hide(), $(".app-role-input").val($("#select-otros").val())
    }), $(document.body).on("change", "#select-otros", function() {
        $(".app-role-input").val($(this).val())
    }), $(document.body).on("mouseenter", ".app-role-radio-fake", function() {
        var a = $(this);
        "male" == a.data("type") ? a.find(".app-role-icon").removeClass("icon-male-auth").addClass("icon-male-auth-hover") : "female" == a.data("type") && a.find(".app-role-icon").removeClass("icon-female-auth").addClass("icon-female-auth-hover")
    }), $(document.body).on("mouseleave", ".app-role-radio-fake", function() {
        var a = $(this);
        console.log(a.data("selected")), 1 != a.data("selected") && ("male" == a.data("type") ? a.find(".app-role-icon").removeClass("icon-male-auth-hover").addClass("icon-male-auth") : "female" == a.data("type") && a.find(".app-role-icon").removeClass("icon-female-auth-hover").addClass("icon-female-auth"));
    }), $(document.body).on("ifChanged", "input[name=Sexo]", function() {
        var a = $(this).val(),
            b = $("input[name='Edad']:checked").val(),
            c = $("#Grupo").val();
        $(".app-capa-sexo").removeClass("active"), 1 == a ? ($(".form-input-hombre").addClass("active"), 1 == c ? $(".add-guest-form .ico-guest").removeClass("bride men woman girl boy baby").addClass("groom") : 1 == b ? $(".add-guest-form .ico-guest").removeClass("groom bride woman girl boy baby").addClass("men") : 2 == b ? $(".add-guest-form .ico-guest").removeClass("groom bride men woman girl baby").addClass("boy") : 3 == b && $(".add-guest-form .ico-guest").removeClass("groom bride men woman girl boy").addClass("baby")) : 2 == a && ($(".form-input-mujer").addClass("active"), 1 == c ? $(".add-guest-form .ico-guest").removeClass("groom men woman girl boy baby").addClass("bride") : 1 == b ? $(".add-guest-form .ico-guest").removeClass("groom bride men girl boy baby").addClass("woman") : 2 == b ? $(".add-guest-form .ico-guest").removeClass("groom bride men woman boy baby").addClass("girl") : 3 == b && $(".add-guest-form .ico-guest").removeClass("groom bride men woman girl boy").addClass("baby"))
    }), $(document.body).on("ifChanged", "input[name=Edad]", function() {
        var a = $(this).val(),
            b = $("input[name='Sexo']:checked").val(),
            c = $("#Grupo").val();
        $(".app-capa-edad").removeClass("active"), 1 == a ? ($(".form-input-adulto").addClass("active"), 1 == b ? 1 == c ? $(".add-guest-form .ico-guest").removeClass("bride men woman girl boy baby").addClass("groom") : $(".add-guest-form .ico-guest").removeClass("groom bride woman girl boy baby").addClass("men") : 2 == b && (1 == c ? $(".add-guest-form .ico-guest").removeClass("groom men woman girl boy baby").addClass("bride") : $(".add-guest-form .ico-guest").removeClass("groom bride men girl boy baby").addClass("woman"))) : 2 == a ? ($(".form-input-nino").addClass("active"), 1 == b ? $(".add-guest-form .ico-guest").removeClass("groom bride men woman girl baby").addClass("boy") : 2 == b && $(".add-guest-form .ico-guest").removeClass("groom bride men woman boy baby").addClass("girl")) : 3 == a && ($(".form-input-bebe").addClass("active"), $(".add-guest-form .ico-guest").removeClass("groom bride men woman girl boy").addClass("baby"))
    })
});
var analyticsManager = function() {
    function a(a) {
        c.push(a)
    }

    function b() {
        for (var a in c) c[a]()
    }
    var c = [];
    return {
        queueEvent: a,
        trackQueuedEvents: b
    }
}();
AjaxFormManager.prototype = {
        ERR_DISPLAY_STANDAR: 1,
        ERR_DISPLAY_ALERT: 2,
        ERR_DISPLAY_CUSTOM: 3,
        ERR_DISPLAY_BOX: 4,
        ERR_DISPLAY_BOX_NOSCROLL: 5,
        doSubmit: function() {
            var a = this.form.attr("action");
            data = null;
            var b = this;
            document.body.style.cursor = "wait", null != this.progressFunction && this.progressFunction(!0);
            var c = function(a) {
                null != b.progressFunction && b.progressFunction(!1), document.body.style.cursor = "default", b.form.find(".mensajeError").remove(), b.form.find(".conError").removeClass("conError"), 0 == a.errCode ? b.doOk(a) : b.doError(a)
            };
            window.FormData && this.form.find("input[type=FILE]").length > 0 ? (data = new FormData, $.each(this.form.serializeArray(), function() {
                data.append(this.name, this.value)
            }), this.form.find("input[type=FILE]").each(function() {
                data.append(this.name, this.files[0])
            }), $.ajax({
                url: a,
                type: "POST",
                contentType: !1,
                data: data,
                processData: !1,
                cache: !1,
                success: c,
                dataType: "json"
            })) : (data = this.form.serialize(), $.post(a, data, c, "json"))
        },
        doOk: function(a) {
            var b = this;
            this.form.find(".errors").remove(), null != a.messages && $.each(a.messages, function(a, b) {
                return "global" == a ? (b.trim().length > 0 && alert(b), !1) : void 0
            }), this.onOk ? this.onOk(a) : null != a.redirect ? (null != b.progressFunction && b.progressFunction(!0), window.location = a.redirect) : window.location.href = window.location.href
        },
        doError: function(a) {
            this.form.find(".errors").remove(), $(".alert-error").remove();
            var b = this;
            switch (this.errDisplayMode) {
                case this.ERR_DISPLAY_CUSTOM:
                    $.each(a.messages, this.errDisplayFnc);
                    break;
                case this.ERR_DISPLAY_ALERT:
                    $.each(a.messages, function(a, b) {
                        return alert(b), !1
                    });
                    break;
                case this.ERR_DISPLAY_BOX:
                case this.ERR_DISPLAY_BOX_NOSCROLL:
                    var c = this;
                    $.each(a.messages, function(a, d) {
                        if (0 == d.trim().length) return !0;
                        var e = $("[name=" + a + "]", b.form);
                        e.focus();
                        var f = e.parents(".app-common-ajaxform-section:first");
                        return f.prepend('<div class="mt10 alert alert-error"><p>' + d + "</p></div>"), c.errDisplayMode == c.ERR_DISPLAY_BOX && e.length ? ($(document.body).animate({
                            scrollTop: f.offset().top - 10
                        }, 300), !1) : void 0
                    });
                    break;
                default:
                    $.each(a.messages, function(a, c) {
                        var d = $("#" + a + "_parent", b.form);
                        d.length > 0 ? (d.parent().append("<div class=\"mensajeError\" style='clear:left'>" + c + "</div>"), d.addClass("conError")) : ($("[name=" + a + "]", b.form).parent().append('<p class="mensajeError">' + c + "</p>"), $("[name=" + a + "]", b.form).addClass("conError"))
                    }), $.each(a.messages, function(a, c) {
                        var d = $("[name=" + a + "]", b.form);
                        return d.focus(), d && d.length > 0 ? ($.scrollTo(d, {
                            offset: {
                                top: -200
                            }
                        }), !1) : void 0
                    })
            }
            var d = !1;
            $.each(a.messages, function(a, b) {
                return "global" == a ? (b.trim().length > 0 && alert(b), d = !0, !1) : void 0
            }), d || this.errDisplayMode != this.ERR_DISPLAY_STANDAR || alert('Please complete the form with valid information.'), null != this.onError && this.onError(a)
        }
    }, ! function(a) {
        var b = function(b, d) {
            if (this.element = a(b), this.format = c.parseFormat(d.format || this.element.data("date-format") || "mm/dd/yyyy"), this.picker = a(c.template).appendTo("body").on({
                    click: a.proxy(this.click, this)
                }), this.isInput = this.element.is("input"), this.component = this.element.is(".date") ? this.element.find(".add-on") : !1, this.isInput ? this.element.on({
                    focus: a.proxy(this.show, this),
                    keyup: a.proxy(this.update, this)
                }) : this.component ? this.component.on("click", a.proxy(this.show, this)) : this.element.on("click", a.proxy(this.show, this)), this.minViewMode = d.minViewMode || this.element.data("date-minviewmode") || 0, "string" == typeof this.minViewMode) switch (this.minViewMode) {
                case "months":
                    this.minViewMode = 1;
                    break;
                case "years":
                    this.minViewMode = 2;
                    break;
                default:
                    this.minViewMode = 0
            }
            if (this.viewMode = d.viewMode || this.element.data("date-viewmode") || 0, "string" == typeof this.viewMode) switch (this.viewMode) {
                case "months":
                    this.viewMode = 1;
                    break;
                case "years":
                    this.viewMode = 2;
                    break;
                default:
                    this.viewMode = 0
            }
            this.appendElement = d.appendElement || this.element.data("append-element") || 0, this.picker.append(a(this.appendElement).html()), this.startViewMode = this.viewMode, this.weekStart = d.weekStart || this.element.data("date-weekstart") || 0, this.weekEnd = 0 === this.weekStart ? 6 : this.weekStart - 1, this.onRender = d.onRender, this.fillDow(), this.fillMonths(), this.update(), this.showMode()
        };
        b.prototype = {
            constructor: b,
            show: function(b) {
                this.picker.show(), this.height = this.component ? this.component.outerHeight() : this.element.outerHeight(), this.place(), a(window).on("resize", a.proxy(this.place, this)), b && (b.stopPropagation(), b.preventDefault()), !this.isInput;
                var c = this;
                a(document).on("mousedown", function(b) {
                    0 == a(b.target).closest(".datepicker").length && c.hide()
                }), this.element.trigger({
                    type: "show",
                    date: this.date
                })
            },
            hide: function() {
                this.picker.hide(), a(window).off("resize", this.place), this.viewMode = this.startViewMode, this.showMode(), this.isInput || a(document).off("mousedown", this.hide), this.element.trigger({
                    type: "hide",
                    date: this.date
                })
            },
            set: function() {
                var a = c.formatDate(this.date, this.format);
                this.isInput ? this.element.prop("value", a) : (this.component && this.element.find("input").prop("value", a), this.element.data("date", a))
            },
            setValue: function(a) {
                "string" == typeof a ? this.date = c.parseDate(a, this.format) : this.date = new Date(a), this.set(), this.viewDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1, 0, 0, 0, 0), this.fill()
            },
            place: function() {
                var a = this.component ? this.component.offset() : this.element.offset();
                this.picker.css({
                    top: a.top + this.height,
                    left: a.left
                })
            },
            update: function(a) {
                this.date = c.parseDate("string" == typeof a ? a : this.isInput ? this.element.prop("value") : this.element.data("date"), this.format), this.viewDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1, 0, 0, 0, 0), this.fill()
            },
            fillDow: function() {
                for (var a = this.weekStart, b = "<tr>"; a < this.weekStart + 7;) b += '<th class="dow">' + c.dates.daysMin[a++ % 7] + "</th>";
                b += "</tr>", this.picker.find(".datepicker-days thead").append(b)
            },
            fillMonths: function() {
                for (var a = "", b = 0; 12 > b;) a += '<span class="month">' + c.dates.monthsShort[b++] + "</span>";
                this.picker.find(".datepicker-months td").append(a)
            },
            fill: function() {
                var a = new Date(this.viewDate),
                    b = a.getFullYear(),
                    d = a.getMonth(),
                    e = this.date.valueOf();
                this.picker.find(".datepicker-days th:eq(1)").text(c.dates.months[d] + " " + b);
                var f = new Date(b, d - 1, 28, 0, 0, 0, 0),
                    g = c.getDaysInMonth(f.getFullYear(), f.getMonth());
                f.setDate(g), f.setDate(g - (f.getDay() - this.weekStart + 7) % 7);
                var h = new Date(f);
                h.setDate(h.getDate() + 42), h = h.valueOf();
                for (var i, j, k, l = []; f.valueOf() < h;) f.getDay() === this.weekStart && l.push("<tr>"), i = this.onRender(f), j = f.getFullYear(), k = f.getMonth(), d > k && j === b || b > j ? i += " old" : (k > d && j === b || j > b) && (i += " new"), f.valueOf() === e && (i += " active"), l.push('<td class="day ' + i + '">' + f.getDate() + "</td>"), f.getDay() === this.weekEnd && l.push("</tr>"), f.setDate(f.getDate() + 1);
                this.picker.find(".datepicker-days tbody").empty().append(l.join(""));
                var m = this.date.getFullYear(),
                    n = this.picker.find(".datepicker-months").find("th:eq(1)").text(b).end().find("span").removeClass("active");
                m === b && n.eq(this.date.getMonth()).addClass("active"), l = "", b = parseInt(b - 5, 10);
                var o = this.picker.find(".datepicker-years").find("th:eq(1)").text(b + "-" + (b + 9)).end().find("td");
                b -= 1;
                for (var p = -1; 11 > p; p++) l += '<span class="year' + (-1 === p || 10 === p ? " old" : "") + (m === b ? " active" : "") + '">' + b + "</span>", b += 1;
                o.html(l)
            },
            click: function(b) {
                b.stopPropagation(), b.preventDefault();
                var d = a(b.target).closest("span, td, th");
                if (1 === d.length) switch (d[0].nodeName.toLowerCase()) {
                    case "th":
                        switch (d[0].className) {
                            case "switch":
                                this.showMode(1);
                                break;
                            case "prev":
                            case "next":
                                this.viewDate["set" + c.modes[this.viewMode].navFnc].call(this.viewDate, this.viewDate["get" + c.modes[this.viewMode].navFnc].call(this.viewDate) + c.modes[this.viewMode].navStep * ("prev" === d[0].className ? -1 : 1)), this.fill(), this.set()
                        }
                        break;
                    case "span":
                        if (d.is(".month")) {
                            var e = d.parent().find("span").index(d);
                            this.viewDate.setMonth(e)
                        } else {
                            var f = parseInt(d.text(), 10) || 0;
                            this.viewDate.setFullYear(f)
                        }
                        1 == this.viewMode && (this.date = new Date(this.viewDate), this.element.trigger({
                            type: "changeDate",
                            date: this.date,
                            viewMode: c.modes[this.viewMode].clsName
                        })), this.showMode(-1), this.fill(), this.set();
                        break;
                    case "td":
                        if (d.is(".day") && !d.is(".disabled")) {
                            var g = parseInt(d.text(), 10) || 1,
                                e = this.viewDate.getMonth();
                            d.is(".old") ? e -= 1 : d.is(".new") && (e += 1);
                            var f = this.viewDate.getFullYear();
                            this.date = new Date(f, e, g, 0, 0, 0, 0), this.viewDate = new Date(f, e, Math.min(28, g), 0, 0, 0, 0), this.fill(), this.set(), this.element.trigger({
                                type: "changeDate",
                                date: this.date,
                                viewMode: c.modes[this.viewMode].clsName
                            })
                        }
                }
            },
            mousedown: function(a) {
                a.stopPropagation(), a.preventDefault()
            },
            showMode: function(a) {
                a && (this.viewMode = Math.max(this.minViewMode, Math.min(2, this.viewMode + a))), this.picker.find(">div").hide().filter(".datepicker-" + c.modes[this.viewMode].clsName).show()
            }
        }, a.fn.datepicker = function(c, d) {
            return this.each(function() {
                var e = a(this),
                    f = e.data("datepicker"),
                    g = "object" == typeof c && c;
                f || e.data("datepicker", f = new b(this, a.extend({}, a.fn.datepicker.defaults, g))), "string" == typeof c && f[c](d)
            })
        }, a.fn.datepicker.defaults = {
            onRender: function(a) {
                return ""
            }
        }, a.fn.datepicker.Constructor = b;
        var c = {
            modes: [{
                clsName: "days",
                navFnc: "Month",
                navStep: 1
            }, {
                clsName: "months",
                navFnc: "FullYear",
                navStep: 1
            }, {
                clsName: "years",
                navFnc: "FullYear",
                navStep: 10
            }],
            dates: {
                days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                daysShort: ['Sun', 'Mon', 'Mar', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                daysMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sa', 'Sun'],
                months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            isLeapYear: function(a) {
                return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0
            },
            getDaysInMonth: function(a, b) {
                return [31, c.isLeapYear(a) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][b]
            },
            parseFormat: function(a) {
                var b = a.match(/[.\/\-\s].*?/),
                    c = a.split(/\W+/);
                if (!b || !c || 0 === c.length) throw new Error("Invalid date format.");
                return {
                    separator: b,
                    parts: c
                }
            },
            parseDate: function(a, b) {
                var c, d = a.split(b.separator),
                    a = new Date;
                if (a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0), d.length === b.parts.length) {
                    for (var e = a.getFullYear(), f = a.getDate(), g = a.getMonth(), h = 0, i = b.parts.length; i > h; h++) switch (c = parseInt(d[h], 10) || 1, b.parts[h]) {
                        case "dd":
                        case "d":
                            f = c, a.setDate(c);
                            break;
                        case "mm":
                        case "m":
                            g = c - 1, a.setMonth(c - 1);
                            break;
                        case "yy":
                            e = 2e3 + c, a.setFullYear(2e3 + c);
                            break;
                        case "yyyy":
                            e = c, a.setFullYear(c)
                    }
                    a = new Date(e, g, f, 0, 0, 0)
                }
                return a
            },
            formatDate: function(a, b) {
                var c = {
                    d: a.getDate(),
                    m: a.getMonth() + 1,
                    yy: a.getFullYear().toString().substring(2),
                    yyyy: a.getFullYear()
                };
                c.dd = (c.d < 10 ? "0" : "") + c.d, c.mm = (c.m < 10 ? "0" : "") + c.m;
                for (var a = [], d = 0, e = b.parts.length; e > d; d++) a.push(c[b.parts[d]]);
                return a.join(b.separator)
            },
            headTemplate: '<thead><tr><th class="prev">&lsaquo;</th><th colspan="5" class="switch"></th><th class="next">&rsaquo;</th></tr></thead>',
            contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>'
        };
        c.template = '<div class="datepicker dropdown-menu"><div class="datepicker-days"><table class=" table-condensed">' + c.headTemplate + '<tbody></tbody></table></div><div class="datepicker-months"><table class="table-condensed">' + c.headTemplate + c.contTemplate + '</table></div><div class="datepicker-years"><table class="table-condensed">' + c.headTemplate + c.contTemplate + "</table></div></div>"
    }(window.jQuery),
    function(a, b, c, d) {
        function e(b, c) {
            var d = this;
            return d.o = a.extend({}, g, c), d.e = a(b), "function" == typeof common_isInternetExplorer8 && common_isInternetExplorer8() ? (d.e.show(), !1) : (d.init(), void(d.e.is(":visible") || d.e.show()))
        }
        var f = "collapser",
            g = {
                target: "next",
                mode: "words",
                speed: "slow",
                truncate: 10,
                ellipsis: "...",
                effect: "fade",
                controlBtn: "",
                showText: "Show more",
                hideText: "Hide text",
                showClass: "show-class",
                hideClass: "hide-class",
                atStart: "hide",
                lockHide: !1,
                dynamic: !1,
                changeText: !1,
                beforeShow: null,
                afterShow: null,
                beforeHide: null,
                afterHide: null
            };
        e.prototype = {
            init: function() {
                var c = this;
                c.mode = c.o.mode, c.remaining = {}, c.ctrlHtml = ' <a href="#" data-ctrl class="' + (a.isFunction(c.o.controlBtn) ? "" : c.o.controlBtn) + '"></a>', a(c.e).each(function() {
                    a(this).data("oCnt", c.e.html());
                    var b = a.isFunction(c.o.atStart) ? c.o.atStart.call(c.e) : c.o.atStart;
                    b = "undefined" != typeof c.e.attr("data-start") ? c.e.attr("data-start") : b, "hide" == b ? c.hide(c.e, 0) : c.show(c.e, 0)
                });
                var d;
                a(b).on("resize", function() {
                    c.o.dynamic && "lines" == c.mode && (clearTimeout(d), d = setTimeout(function() {
                        c.reInit(c.e)
                    }, 100))
                })
            },
            show: function(b, c) {
                var d = this,
                    e = a(b);
                "undefined" == typeof c && (c = d.o.speed);
                var f = function() {
                    a.isFunction(d.o.afterShow) && d.o.afterShow.call(d.e, d)
                };
                switch (a.isFunction(d.o.beforeShow) && d.o.beforeShow.call(d.e, d), d.mode) {
                    case "chars":
                    case "words":
                        var g = e.height();
                        e.html(e.data("tHTML"));
                        var h = e.height();
                        e.height(g), e.animate({
                            height: h
                        }, c, function() {
                            e.height("auto"), f()
                        }).removeClass(d.o.hideClass).addClass(d.o.showClass), e.data("tHTML", e.html());
                        break;
                    case "lines":
                        0 == e.children("div").length && e.wrapInner("<div>");
                        var i = e.children("div"),
                            j = i.height(),
                            k = i.html(e.data("oCnt")).css("height", "").height();
                        i.css("height", j);
                        i.animate({
                            height: k
                        }, c, function() {
                            i.height("auto"), f()
                        }), e.removeClass(d.o.hideClass).addClass(d.o.showClass);
                        break;
                    case "block":
                        d.blockMode(e, "show", c, f)
                }
                return d.status = 1, 1 == d.o.lockHide ? (e.find("[data-ctrl]").remove(), "") : void("block" == d.mode ? e.off("click.coll").on("click.coll", function(a) {
                    a.preventDefault(), d.hide(e)
                }) : (0 != e.find("[data-ctrl]").length || a.isFunction(d.o.controlBtn) || e.append(d.ctrlHtml), d.ctrlBtn = a.isFunction(d.o.controlBtn) ? d.o.controlBtn.call(d.e) : a(e.find("[data-ctrl]")), d.ctrlBtn.off("click.coll").on("click.coll", function(a) {
                    a.preventDefault(), d.hide(e)
                }).html(d.o.hideText)))
            },
            hide: function(b, c) {
                var d = this,
                    e = a(b);
                "undefined" == typeof c && (c = d.o.speed);
                var f = function() {
                    a.isFunction(d.o.afterHide) && d.o.afterHide.call(d.e, d)
                };
                switch (a.isFunction(d.o.beforeHide) && d.o.beforeHide.call(d.e, d), e.find("[data-ctrl]").remove(), d.mode) {
                    case "chars":
                        var g = a.trim(e.text());
                        d.remaining.chars = g.length - d.o.truncate, g.length > d.o.truncate && (e.data("tHTML", e.html()), g = d.pad(g.slice(0, d.o.truncate), g.slice(d.o.truncate, g.length)), e.html(g).removeClass(d.o.showClass).addClass(d.o.hideClass), f());
                        break;
                    case "words":
                        var g = a.trim(e.text()),
                            h = g.split(" ");
                        d.remaining.words = h.length - d.o.truncate, h.length > d.o.truncate && (e.data("tHTML", e.html()), g = d.pad(h.slice(0, d.o.truncate).join(" "), h.slice(d.o.truncate, h.length).join(" ")), e.html(g).removeClass(d.o.showClass).addClass(d.o.hideClass), f());
                        break;
                    case "lines":
                        0 == e.children("div").length && e.wrapInner("<div>");
                        var i = e.children("div").css("height", "");
                        i.html(i.text());
                        var j = i.height();
                        "undefined" == typeof e.data("lHeight") ? (temp = i.clone(), lHeight = temp.text("a").insertAfter(i).height(), e.data("lHeight", lHeight), i.next().remove()) : lHeight = e.data("lHeight"), lines = j / lHeight, d.remaining.lines = lines - d.o.truncate, d.remaining.lines > 0 && (i.css("overflow", "hidden"), i.animate({
                            height: lHeight * d.o.truncate
                        }, c).data("tHeight", j), e.removeClass(d.o.showClass).addClass(d.o.hideClass), 0 != e.find("[data-ctrl]").length || a.isFunction(d.o.controlBtn) || e.append(d.ctrlHtml), f());
                        break;
                    case "block":
                        d.blockMode(e, "hide", c, f)
                }
                if (d.status = 0, "block" == d.mode) e.unbind("click.coll").bind("click.coll", function(a) {
                    a.preventDefault(), d.show(e)
                });
                else {
                    d.ctrlBtn = a.isFunction(d.o.controlBtn) ? d.o.controlBtn.call(d.e) : a(e.find("[data-ctrl]")), d.ctrlBtn.off("click.coll").on("click.coll", function(a) {
                        a.preventDefault(), d.show(e)
                    }).html(d.o.showText);
                    var k = d.o.showText,
                        l = {
                            chars: ["character", "characters"],
                            words: ["word", "words"],
                            lines: ["lines", "lines"]
                        },
                        m = d.remaining[d.mode] + (1 == d.remaining[d.mode] ? " " + l[d.mode][0] : " " + l[d.mode][1]);
                    k = k.replace("%s", m), d.ctrlBtn.html(k)
                }
            },
            pad: function(b, c) {
                var d = this;
                return b + '<span class="coll-ellipsis">' + d.o.ellipsis + "</span>" + (a.isFunction(d.o.ctrlBtn) ? "" : d.ctrlHtml) + '<span class="coll-hidden" style="display:none">' + c + "</span>"
            },
            blockMode: function(b, c, d, e) {
                var f = this,
                    g = ["fadeOut", "slideUp", "fadeIn", "slideDown"],
                    h = "fade" == f.o.effect ? 0 : 1,
                    i = "hide" == c ? g[h] : g[h + 2];
                a.isFunction(f.o.target) ? f.o.target.call(f.e)[i](d, e) : a.fn[f.o.target] && a(b)[f.o.target]()[i](d, e), "show" == c ? (b.removeClass(f.o.showClass).addClass(f.o.hideClass), f.o.changeText && b.text(f.o.hideText)) : (b.removeClass(f.o.hideClass).addClass(f.o.showClass), f.o.changeText && b.text(f.o.showText))
            },
            reInit: function(a) {
                var b = this;
                a.find("[data-ctrl]").remove(), "chars" == b.mode, a.html(b.e.data("oCnt")), 0 == b.status ? b.hide(a, 0) : b.show(a, 0)
            }
        }, a.fn[f] = function(b) {
            return this.each(function() {
                a.data(this, f) || a.data(this, f, new e(this, b))
            })
        }
    }(jQuery, window, document), fbConnectLoaded = !1, window.fbAsyncInit = function() {
        fbConnectLoaded = !0
    }, $(document).ready(function() {
        $(document.body).on("click", ".app-facebook-button", function() {
            if (!$(this).hasClass("noloader")) {
                fbButton = $(this).parent().html();
                var a = $("<img />").attr("src", globals.subdomain_cdn_img + "/img/ajax-loader-bar-blue.gif");
                $(this).parent().html(a), setTimeout(function() {
                    a.parent().html(fbButton)
                }, 1e4)
            }
        })
    });
var modal, scrollPosition;
! function(a) {
    a.modal = function(b) {
        var c = {
                url: null,
                urlForm: null,
                origen: "",
                rol: "",
                ajaxParams: {},
                template: "default",
                autoShow: !0,
                title: "",
                html: "",
                focus: !0,
                closeButton: !0,
                modalClass: "",
                callback: function() {},
                onClose: function() {},
                onBeforeClose: function() {}
            },
            d = {},
            e = this,
            f = null,
            g = null,
            h = a(document.body),
            i = "";
        return e.open = function() {
            f.fadeIn(), d.focus && setTimeout(function() {
                f.find("input:first").focus()
            }, 200)
        }, e.getModal = function() {
            return f
        }, e.getDefaultTemplate = function() {
            var a = "";
            return d.title ? (a = '<div class="modal-header">' + i, a += '<p class="title">' + d.title + "</p>", a += "</div>") : a = i, '<div class="modal-layer-wrapper">' + a + '       <div class="app-modal-content" />   </div>'
        }, e.getSuggestTemplate = function() {
            return '<div class="modal-layer-wrapper">       <div class="modal-header modal-header-suggest">' + i + '           <p class="title">' + d.title + '</p>           <input type="text">       </div>   </div>   <div class="modal-layer-wrapper">       <div class="suggest-results app-modal-content">           <ul class="panel-list app-mobile-modal-results" />       </div>   </div>'
        }, e.getCroppieProfileTemplate = function() {
            var a = 'Don\'t crop',
                b = "",
                c = "com-submit-no-foto";
            return "mywedding" == d.origen && (b = '<input type="hidden" id="rol" name="rol" value="' + d.rol + '">', a = 'Cancel', c = "app-close-modal-upload-mywedding"), '<div class="modal-dialog modal-layer-croppie">       <div class="modal-content">           <div class="modal-header">               <h2 id="tool-modal-header">' + 'My photo' + '</h2>           </div>           <div class="modal-body">               <div class="overflow">                   <div class="pure-g p20">                       <form id="imageCroppie" name="imageCroppie" action="' + d.urlForm + '" method="POST">                           <input type="hidden" id="origen" name="origen" value="' + d.origen + '">' + b + '                           <div class="com-perfil-croppie model"></div>                           <div class="pure-u-1 text-center mt20">                               <a role="button" class="btn btn-secondary mr15 ' + c + '">                                   ' + a + '                               </a>                               <a role="button" class="com-submit-img-profile btn btn-primary">' + 'Save' + "</a>                           </div>                       </form>                    </div>               </div>           </div>       </div>   </div>"
        }, e.getFullScreenTemplate = function() {
            return '<div class="modal-layer-fullscreen">       <button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="icon icon-close" aria-hidden="true"></i></button>       <div class="modal-full-content app-modal-content">       </div>   </div>'
        }, e.close = function() {
            d.onBeforeClose(), h.attr("style", "position:initial;height:initial;width:initial;"), h.scrollTop(scrollPosition, 10), h.removeClass("modal-open"), f.remove(), d.onClose()
        }, e.init = function(b) {
            scrollPosition = h.scrollTop(), b = "function" == typeof d ? {
                callback: b
            } : b, d = a.extend({}, c, b || {});
            var j = a(".app-mobile-modal");
            switch (j.length && j.remove(), d.closeButton && (i = '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>'), f = a('<div class="modal modal-' + d.template + " app-mobile-modal " + d.modalClass + '" />'), h.append(f), headerHeight = 42, gutter = 20, d.template) {
                case "fullscreen":
                    f.html(e.getFullScreenTemplate());
                    break;
                case "croppie":
                    f.html(e.getCroppieProfileTemplate());
                    break;
                default:
                    f.html(e.getDefaultTemplate())
            }
            if (g = f.find(".app-modal-content"), d.closeButton && f.find("button:first").on("click", function() {
                    e.close()
                }), h.attr("style", "position:fixed;width:100%;height:" + a(window).height() + "px"), d.url) g.load(d.url, d.ajaxParams, function() {
                d.callback()
            });
            else if (d.html) {
                var k = a("<div />").addClass("wrapper unit");
                k.html(d.html), g.html(k), d.callback()
            } else d.callback();
            return d.autoShow && e.open(), e
        }, new e.init(b)
    }
}(jQuery), ! function(a, b) {
    var c = b(a, a.document);
    a.lazySizes = c, "object" == typeof module && module.exports && (module.exports = c)
}(window, function(a, b) {
    "use strict";
    if (b.getElementsByClassName) {
        var c, d = b.documentElement,
            e = a.Date,
            f = a.HTMLPictureElement,
            g = "addEventListener",
            h = "getAttribute",
            i = a[g],
            j = a.setTimeout,
            k = a.requestAnimationFrame || j,
            l = a.requestIdleCallback,
            m = /^picture$/i,
            n = ["load", "error", "lazyincluded", "_lazyloaded"],
            o = {},
            p = Array.prototype.forEach,
            q = function(a, b) {
                return o[b] || (o[b] = new RegExp("(\\s|^)" + b + "(\\s|$)")), o[b].test(a[h]("class") || "") && o[b]
            },
            r = function(a, b) {
                q(a, b) || a.setAttribute("class", (a[h]("class") || "").trim() + " " + b)
            },
            s = function(a, b) {
                var c;
                (c = q(a, b)) && a.setAttribute("class", (a[h]("class") || "").replace(c, " "))
            },
            t = function(a, b, c) {
                var d = c ? g : "removeEventListener";
                c && t(a, b), n.forEach(function(c) {
                    a[d](c, b)
                })
            },
            u = function(a, c, d, e, f) {
                var g = b.createEvent("CustomEvent");
                return g.initCustomEvent(c, !e, !f, d || {}), a.dispatchEvent(g), g
            },
            v = function(b, d) {
                var e;
                !f && (e = a.picturefill || c.pf) ? e({
                    reevaluate: !0,
                    elements: [b]
                }) : d && d.src && (b.src = d.src)
            },
            w = function(a, b) {
                return (getComputedStyle(a, null) || {})[b]
            },
            x = function(a, b, d) {
                for (d = d || a.offsetWidth; d < c.minSize && b && !a._lazysizesWidth;) d = b.offsetWidth, b = b.parentNode;
                return d
            },
            y = function() {
                var a, c, d = [],
                    e = function() {
                        var b;
                        for (a = !0, c = !1; d.length;) b = d.shift(), b[0].apply(b[1], b[2]);
                        a = !1
                    };
                return function(f) {
                    a ? f.apply(this, arguments) : (d.push([f, this, arguments]), c || (c = !0, (b.hidden ? j : k)(e)))
                }
            }(),
            z = function(a, b) {
                return b ? function() {
                    y(a)
                } : function() {
                    var b = this,
                        c = arguments;
                    y(function() {
                        a.apply(b, c)
                    })
                }
            },
            A = function(a) {
                var b, c = 0,
                    d = 125,
                    f = 999,
                    g = f,
                    h = function() {
                        b = !1, c = e.now(), a()
                    },
                    i = l ? function() {
                        l(h, {
                            timeout: g
                        }), g !== f && (g = f)
                    } : z(function() {
                        j(h)
                    }, !0);
                return function(a) {
                    var f;
                    (a = a === !0) && (g = 66), b || (b = !0, f = d - (e.now() - c), 0 > f && (f = 0), a || 9 > f && l ? i() : j(i, f))
                }
            },
            B = function(a) {
                var b, c, d = 99,
                    f = function() {
                        b = null, a()
                    },
                    g = function() {
                        var a = e.now() - c;
                        d > a ? j(g, d - a) : (l || f)(f)
                    };
                return function() {
                    c = e.now(), b || (b = j(g, d))
                }
            },
            C = function() {
                var f, k, l, n, o, x, C, E, F, G, H, I, J, K, L, M = /^img$/i,
                    N = /^iframe$/i,
                    O = "onscroll" in a && !/glebot/.test(navigator.userAgent),
                    P = 0,
                    Q = 0,
                    R = 0,
                    S = 0,
                    T = function(a) {
                        R--, a && a.target && t(a.target, T), (!a || 0 > R || !a.target) && (R = 0)
                    },
                    U = function(a, c) {
                        var e, f = a,
                            g = "hidden" == w(b.body, "visibility") || "hidden" != w(a, "visibility");
                        for (F -= c, I += c, G -= c, H += c; g && (f = f.offsetParent) && f != b.body && f != d;) g = (w(f, "opacity") || 1) > 0, g && "visible" != w(f, "overflow") && (e = f.getBoundingClientRect(), g = H > e.left && G < e.right && I > e.top - 1 && F < e.bottom + 1);
                        return g
                    },
                    V = function() {
                        var a, b, e, g, i, j, m, n, p;
                        if ((o = c.loadMode) && 8 > R && (a = f.length)) {
                            b = 0, S++, null == K && ("expand" in c || (c.expand = d.clientHeight > 500 ? 500 : 400), J = c.expand, K = J * c.expFactor), K > Q && 1 > R && S > 3 && o > 2 ? (Q = K, S = 0) : Q = o > 1 && S > 2 && 6 > R ? J : P;
                            for (; a > b; b++)
                                if (f[b] && !f[b]._lazyRace)
                                    if (O)
                                        if ((n = f[b][h]("data-expand")) && (j = 1 * n) || (j = Q), p !== j && (C = innerWidth + j * L, E = innerHeight + j, m = -1 * j, p = j), e = f[b].getBoundingClientRect(), (I = e.bottom) >= m && (F = e.top) <= E && (H = e.right) >= m * L && (G = e.left) <= C && (I || H || G || F) && (l && 3 > R && !n && (3 > o || 4 > S) || U(f[b], j))) {
                                            if (ba(f[b]), i = !0, R > 9) break
                                        } else !i && l && !g && 4 > R && 4 > S && o > 2 && (k[0] || c.preloadAfterLoad) && (k[0] || !n && (I || H || G || F || "auto" != f[b][h](c.sizesAttr))) && (g = k[0] || f[b]);
                            else ba(f[b]);
                            g && !i && ba(g)
                        }
                    },
                    W = A(V),
                    X = function(a) {
                        r(a.target, c.loadedClass), s(a.target, c.loadingClass), t(a.target, Z)
                    },
                    Y = z(X),
                    Z = function(a) {
                        Y({
                            target: a.target
                        })
                    },
                    $ = function(a, b) {
                        try {
                            a.contentWindow.location.replace(b)
                        } catch (c) {
                            a.src = b
                        }
                    },
                    _ = function(a) {
                        var b, d, e = a[h](c.srcsetAttr);
                        (b = c.customMedia[a[h]("data-media") || a[h]("media")]) && a.setAttribute("media", b), e && a.setAttribute("srcset", e), b && (d = a.parentNode, d.insertBefore(a.cloneNode(), a), d.removeChild(a))
                    },
                    aa = z(function(a, b, d, e, f) {
                        var g, i, k, l, o, q;
                        (o = u(a, "lazybeforeunveil", b)).defaultPrevented || (e && (d ? r(a, c.autosizesClass) : a.setAttribute("sizes", e)), i = a[h](c.srcsetAttr), g = a[h](c.srcAttr), f && (k = a.parentNode, l = k && m.test(k.nodeName || "")), q = b.firesLoad || "src" in a && (i || g || l), o = {
                            target: a
                        }, q && (t(a, T, !0), clearTimeout(n), n = j(T, 2500), r(a, c.loadingClass), t(a, Z, !0)), l && p.call(k.getElementsByTagName("source"), _), i ? a.setAttribute("srcset", i) : g && !l && (N.test(a.nodeName) ? $(a, g) : a.src = g), (i || l) && v(a, {
                            src: g
                        })), y(function() {
                            a._lazyRace && delete a._lazyRace, s(a, c.lazyClass), (!q || a.complete) && (q ? T(o) : R--, X(o))
                        })
                    }),
                    ba = function(a) {
                        var b, d = M.test(a.nodeName),
                            e = d && (a[h](c.sizesAttr) || a[h]("sizes")),
                            f = "auto" == e;
                        (!f && l || !d || !a.src && !a.srcset || a.complete || q(a, c.errorClass)) && (b = u(a, "lazyunveilread").detail, f && D.updateElem(a, !0, a.offsetWidth), a._lazyRace = !0, R++, aa(a, b, f, e, d))
                    },
                    ca = function() {
                        if (!l) {
                            if (e.now() - x < 999) return void j(ca, 999);
                            var a = B(function() {
                                c.loadMode = 3, W()
                            });
                            l = !0, c.loadMode = 3, W(), i("scroll", function() {
                                3 == c.loadMode && (c.loadMode = 2), a()
                            }, !0)
                        }
                    };
                return {
                    _: function() {
                        x = e.now(), f = b.getElementsByClassName(c.lazyClass), k = b.getElementsByClassName(c.lazyClass + " " + c.preloadClass), L = c.hFac, i("scroll", W, !0), i("resize", W, !0), a.MutationObserver ? new MutationObserver(W).observe(d, {
                            childList: !0,
                            subtree: !0,
                            attributes: !0
                        }) : (d[g]("DOMNodeInserted", W, !0), d[g]("DOMAttrModified", W, !0), setInterval(W, 999)), i("hashchange", W, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend", "webkitAnimationEnd"].forEach(function(a) {
                            b[g](a, W, !0)
                        }), /d$|^c/.test(b.readyState) ? ca() : (i("load", ca), b[g]("DOMContentLoaded", W), j(ca, 2e4)), W(f.length > 0)
                    },
                    checkElems: W,
                    unveil: ba
                }
            }(),
            D = function() {
                var a, d = z(function(a, b, c, d) {
                        var e, f, g;
                        if (a._lazysizesWidth = d, d += "px", a.setAttribute("sizes", d), m.test(b.nodeName || ""))
                            for (e = b.getElementsByTagName("source"), f = 0, g = e.length; g > f; f++) e[f].setAttribute("sizes", d);
                        c.detail.dataAttr || v(a, c.detail)
                    }),
                    e = function(a, b, c) {
                        var e, f = a.parentNode;
                        f && (c = x(a, f, c), e = u(a, "lazybeforesizes", {
                            width: c,
                            dataAttr: !!b
                        }), e.defaultPrevented || (c = e.detail.width, c && c !== a._lazysizesWidth && d(a, f, e, c)))
                    },
                    f = function() {
                        var b, c = a.length;
                        if (c)
                            for (b = 0; c > b; b++) e(a[b])
                    },
                    g = B(f);
                return {
                    _: function() {
                        a = b.getElementsByClassName(c.autosizesClass), i("resize", g)
                    },
                    checkElems: g,
                    updateElem: e
                }
            }(),
            E = function() {
                E.i || (E.i = !0, D._(), C._())
            };
        return function() {
            var b, d = {
                lazyClass: "lazyload",
                loadedClass: "lazyloaded",
                loadingClass: "lazyloading",
                preloadClass: "lazypreload",
                errorClass: "lazyerror",
                autosizesClass: "lazyautosizes",
                srcAttr: "data-src",
                srcsetAttr: "data-srcset",
                sizesAttr: "data-sizes",
                minSize: 40,
                customMedia: {},
                init: !0,
                expFactor: 1.5,
                hFac: .8,
                loadMode: 2
            };
            c = a.lazySizesConfig || a.lazysizesConfig || {};
            for (b in d) b in c || (c[b] = d[b]);
            a.lazySizesConfig = c, j(function() {
                c.init && E()
            })
        }(), {
            cfg: c,
            autoSizer: D,
            loader: C,
            init: E,
            uP: v,
            aC: r,
            rC: s,
            hC: q,
            fire: u,
            gW: x,
            rAF: y
        }
    }
});
var crop_script_alwaysPreserveAspectRatio = !0,
    crop_script_fixedRatio = 1,
    crop_script_browserIsOpera = navigator.userAgent.indexOf("Opera") >= 0 ? !0 : !1,
    cropDiv_left = !1,
    cropDiv_top = !1,
    cropDiv_right = !1,
    cropDiv_bottom = !1,
    cropDiv_dotted = !1,
    crop_currentResizeType = !1,
    cropEvent_posX, cropEvent_posY, cropEvent_eventX, cropEvent_eventY, crop_resizeCounter = -1,
    crop_moveCounter = -1,
    crop_imageDiv = !1,
    imageDiv_currentWidth = !1,
    imageDiv_currentHeight = !1,
    imageDiv_currentLeft = !1,
    imageDiv_currentTop = !1,
    smallSquare_tl, smallSquare_tc, smallSquare_tr, smallSquare_lc, smallSquare_rc, smallSquare_bl, smallSquare_bc, smallSquare_br, smallSquareWidth = 7,
    offsetSmallSquares = Math.floor(smallSquareWidth / 2),
    cropScriptAjaxObjects = new Array,
    preserveAspectRatio = !0,
    cropWidthRatio = !1,
    cropToolBorderWidth = 1,
    mouseMoveEventInProgress = !1,
    PusherManager = function() {
        function a(a, b, c) {
            var d = {
                namespace: "concierge",
                expireDays: 1,
                storages: ["local", "cookie"]
            };
            Ya = new window.Basil(d), Za = Ya.check("local") || Ya.check("cookie"), ya = a;
            var e = JSON.parse(a);
            if (c && (Ka = !!c.isMobile, La = !!c.isAppAndroid, Ma = !!c.isAppIos, Sa = !!c.forceMinimizeChat, Na = !!c.isAppReferrerEnabled, eb = !!c.chatNeedsSpecialClass, Ta = !!c.disableChat, Ua = !!c.disableUserVendorNotifications, gb = !!c.appShowCloseButton, Qa = !!c.isAppSpecialChatPage, Ra = !!c.isAppBarsEnabled), Za) {
                var f = Ya.get("pusher-TTL");
                null != f && Date.now() - f > Ia && Ya.reset(), Ya.set("pusher-TTL", Date.now())
            }
            Sa && "open" == C() && B("minimized"), ua = b || !1, ua && (Pusher.log = function(a) {
                window.console && window.console.log && window.console.log(a)
            }), ta = new Pusher(globals.Request_Pusher_Key, {
                authEndpoint: "/pusher/pusherAuth.php",
                cluster: globals.Request_Pusher_Cluster,
                encrypted: !0
            }), ta.connection.bind("connected", function() {
                Ea = ta.connection.socket_id
            }), u(), "user" == e.type && (va = parseInt(e.id), za = e.name, Aa = e.avatar, Ba = null, w(), Ca = "user", Da = va), "vendor" == e.type && (wa = parseInt(e.id), za = e.name, Aa = e.avatar, x(), Ca = "vendor", Da = wa), "anonymous" == e.type && (xa = GuidManager.init(), za = e.name, Aa = e.avatar, y(), Ca = "anonymous", Da = xa), common_flushLocalStorage(), Ta || R()
        }

        function b() {
            return Pa = !1, c(ya, ua).then(function() {
                return Pa ? !1 : Oa ? (d(), !1) : (fa(), !0)
            })
        }

        function c(a, b) {
            if (null == ta) return $.when();
            ta.disconnect(), $("#app-chat-container").html("");
            var c = JSON.parse(a);
            return ua = b || !1, ua && (Pusher.log = function(a) {
                    window.console && window.console.log && window.console.log(a)
                }), ta = new Pusher(globals.Request_Pusher_Key, {
                    authEndpoint: "/pusher/pusherAuth.php",
                    cluster: globals.Request_Pusher_Cluster,
                    encrypted: !0
                }), ta.connection.bind("connected", function() {
                    Ea = ta.connection.socket_id
                }), "user" == c.type && (va = parseInt(c.id), za = c.name, Aa = c.avatar, Ba = null, w(), Ca = "user", Da = va),
                "vendor" == c.type && (wa = parseInt(c.id), za = c.name, Aa = c.avatar, x(), Ca = "vendor", Da = wa), "anonymous" == c.type && (xa = GuidManager.init(), za = c.name, Aa = c.avatar, y(), Ca = "anonymous", Da = xa), common_flushLocalStorage(), R()
        }

        function d() {
            Fa || ("anonymous" == Ca || "user" == Ca ? $.ajax({
                type: "POST",
                url: "/pusher/pusherConcierge.php",
                data: {
                    type: Ca,
                    idItem: Da,
                    url: document.location.href
                },
                success: function(a) {
                    if (a.trigger) {
                        Ga = E(a.concierge), O(a.concierge), K(a.concierge, !1, a.showGlobe, !0);
                        var b = z();
                        D(b + 1, a.showGlobe, !0), ea(a.concierge.body, a.concierge.actor.avatar, a.showGlobe), Oa = !0
                    } else fa(), Oa = !1
                }
            }) : $.ajax({
                type: "POST",
                url: "/pusher/pusherConciergeVendor.php",
                data: {
                    type: Ca,
                    idItem: Da,
                    url: document.location.href
                },
                success: function(a) {
                    if (a.trigger) {
                        Ga = E(a.concierge), O(a.concierge), K(a.concierge, !1, a.showGlobe, !0);
                        var b = z();
                        D(b + 1, a.showGlobe, !0)
                    }
                }
            }))
        }

        function e(a, b, c, d, e) {
            if ((Ma || La) && !Qa && Ra) return void la("PusherManager.initConversation('" + a + "', '" + b + "', '" + c + "', '" + d + "', '" + e + "');", e);
            var f = {
                idConversation: c,
                fromType: a,
                fromId: b,
                type: Ca,
                idItem: Da,
                actor: {
                    name: d,
                    avatar: e
                }
            };
            bb = d, cb = e, ab = !0, E(f), Ga = $("#app-" + a + "-" + b, "#app-chat-container"), S(c, Ga, "open"), Fa = !0, $("#app-closed").hide(), sa(), fa(), fb = !0
        }

        function f(a, b) {
            var c = _(),
                d = aa();
            (null == Ha || d != Ha) && (a.append('<div class="chat-separator-date"><span>' + d + "</span></div>"), Ha = d);
            var e = b.body.replace(/</g, "&lt;").replace(/>/g, "&gt;"),
                f = 0 == $("> div", $(a)).length || $("> div", $(a)).last().hasClass("message-income") || $("> div", $(a)).last().hasClass("chat-message-welcome") || $("> div", $(a)).last().hasClass("chat-separator-date");
            if (f) {
                var g;
                g = Ba ? '<div class="chat-message message-outcome">' + Ba + '    <div class="chat-message-globe">' + e + '        <small class="chat-timestamp">' + c + "</small>    </div></div>" : '<div class="chat-message message-outcome">    <div class="chat-message-avatar' + ("vendor" == Ca ? " avatar-vendor" : "") + '">        <img src="' + Aa + '" width="50" height="50" alt="' + za + '" />    </div>    <div class="chat-message-globe">' + e + '        <small class="chat-timestamp">' + c + "</small>    </div></div>", a.append(g)
            } else $(a).last().append('<div class="chat-message chat-aggregate message-outcome">    <div class="chat-message-globe">' + e + '        <small class="chat-timestamp">' + c + "</small>    </div></div>");
            V(a.parent()), v()
        }

        function g() {
            return Ea
        }

        function h(a) {
            ib = a
        }

        function j(a, b) {
            T($(a).closest(".app-chat-container-top"), b)
        }

        function k(a) {
            if (a = "undefined" != typeof a ? a : !1, null != ta) {
                var b = C(),
                    c = !1;
                "close" == b ? $(".app-chat-conversation", "#app-closed").hasClass("active") && ($(".app-chat-close", "#app-closed").trigger("click"), c = !0) : "open" == b && ($(".app-chat-min:visible", "#app-concierge-admin") ? $(".app-chat-min", "#app-concierge-admin").trigger("click") : $(".app-chat-close", "#app-concierge-admin").trigger("click"), c = !0)
            }
        }

        function l(a, b, c) {
            function d(a, b, c) {
                c = c || "post";
                var d = document.createElement("form");
                d.setAttribute("method", c), d.setAttribute("action", a);
                for (var e in b)
                    if (b.hasOwnProperty(e)) {
                        var f = document.createElement("input");
                        f.setAttribute("type", "hidden"), f.setAttribute("name", e), f.setAttribute("value", b[e]), d.appendChild(f)
                    }
                document.body.appendChild(d), d.submit()
            }
            c ? document.location.href = "/emp-Form.php?id_empresa=" + b + "&frmInsert=53" : d(a, {
                showContactar: 1
            })
        }

        function m() {
            var a = $(".app-scroll-calculate"),
                b = $("body").height() + 120;
            a.animate({
                scrollTop: b
            }, 250)
        }

        function n() {
            B("minimized")
        }

        function o() {
            if (Za) {
                var a = Ya.keys();
                for (i = 0; i < a.length; i++) Ya.remove(a[i]), console.log(a[i])
            }
        }

        function p() {
            return Ma || La ? Na ? document.referrer.indexOf(globals.Request_Cookie_domain + "/") > 0 || !/.*--e\d+/.test(document.location.pathname) ? !0 : (Fa && "hidden" != C() || fa(), !1) : !0 : (document.referrer.indexOf(globals.Request_Cookie_domain + "/") > 0 || !/.*--e\d+/.test(document.location.pathname)) && !(document.location.search.indexOf("appInstall=0") > 0)
        }

        function q(a, b, c) {
            ab = _a, $a = b, cb = c, ca($(a).closest(".app-chat-conversation"))
        }

        function r(a, b, c, d) {
            if (fa(), Ga && Ga.length) $(".app-chat-launcher", Ga).trigger("click");
            else {
                var e = {
                    fromType: a,
                    fromId: b,
                    type: Ca,
                    idItem: Da,
                    actor: {
                        name: c,
                        avatar: d
                    }
                };
                t(e)
            }
        }

        function s() {
            La && !Ra ? androidAppUsersProxy.appShowBars(!1, !0) : Ma && !Ra && iOSAppUsersProxyAppShowBars(0)
        }

        function t(a) {
            var b = "concierge",
                c = "admin",
                d = 1;
            "vendor" == Ca && (b = "concierge-vendor", d = 2), $.ajax({
                type: "POST",
                url: "/pusher/pusherNew.php",
                data: {
                    fromType: b,
                    fromId: c
                },
                success: function(a) {
                    var b = {
                        idConversation: "",
                        fromType: a.fromType,
                        fromId: a.fromId,
                        type: Ca,
                        idItem: Da,
                        actor: a.actor,
                        conciergeTemplate: d
                    };
                    bb = a.actor.name, cb = a.actor.avatar, $a = a.statusConcierge, ab = !0, Ga = E(b), Ga.data("idconversation", ""), $(".app-chat-history", parent).removeClass("active"), $(".app-chat-conversations", parent).html(""), $(".app-chat-button", parent).remove(), $(".app-conversation-parts", Ga).html(""), $(".app-conversation-summary", Ga).html(""), $(".app-chat-launcher", Ga).trigger("click"), O(b), $("#app-closed").hide(), $(".app-controls-menu").show(), $(".app-chat-min").show()
                }
            })
        }

        function u() {
            Xa = window.setTimeout(function() {
                ta.disconnect(), $("#app-chat-container").hide(), ka()
            }, Ja)
        }

        function v() {
            null !== Xa && window.clearTimeout(Xa), u()
        }

        function w() {
            var a = ta.subscribe("private-user-" + va);
            Ta || (a.bind("message", function(a) {
                Ka || $.titleAlert("-> " + a.body.replace(/(<([^>]+)>)/gi, ""), {
                    stopOnFocus: !0,
                    duration: 0,
                    interval: 500
                });
                var b = E(a);
                null == C() ? (Ga = b, S(a.idConversation, Ga, "minimized").then(function() {
                    L(b, !1), fb = !1, da("minimized", a.actor.avatar, z(), a.idConversation), ja(a.body, z(), a.idConversation)
                })) : "open" == C() && Ga && $(Ga).data("idconversation") == a.idConversation ? (K(a), ja(a.body, z(), a.idConversation)) : (Ga = b, S(a.idConversation, Ga, C()).then(function() {
                    ("minimized" == C() || "hidden" == C()) && L(b, !1), "hidden" == C() && ($(".app-chat-launcher", Ga).show(), fb = !1, da("minimized", a.actor.avatar, z(), a.idConversation), B("minimized")), ja(a.body, z(), a.idConversation), Z()
                })), v()
            }), a.bind("update", function(a) {
                var b = "app-" + a.toType + "-" + a.toId,
                    c = $("#" + b, "#app-chat-container");
                $(c).length && M(a)
            }), a.bind("status", function(a) {
                "writing" === a.status && ib === a.idConversation && I()
            })), Ua || a.bind("lead", function(a) {
                na(a)
            })
        }

        function x() {
            var a = ta.subscribe("private-vendor-" + wa);
            Ta || (a.bind("message", function(a) {
                E(a), K(a), v()
            }), a.bind("update", function(a) {
                var b = "app-" + a.toType + "-" + a.toId,
                    c = $("#" + b, "#app-chat-container");
                $(c).length && M(a)
            }), a.bind("status", function(a) {
                "writing" === a.status && ib === a.idConversation && I()
            })), Ua || (a.bind("lead", function(a) {
                ma(a)
            }), a.bind("adminAction", function(a) {
                ma(a)
            }))
        }

        function y() {
            var a = ta.subscribe("private-anonymous-" + xa);
            Ta || (a.bind("message", function(a) {
                Ka || $.titleAlert("-> " + a.body.replace(/(<([^>]+)>)/gi, ""), {
                    stopOnFocus: !0,
                    duration: 0,
                    interval: 500
                });
                var b = E(a);
                null == C() ? (Ga = b, S(a.idConversation, Ga, "minimized").then(function() {
                    L(b, !1), fb = !1, da("minimized", a.actor.avatar, z(), a.idConversation), ja(a.body, z(), a.idConversation)
                })) : "open" == C() && Ga && $(Ga).data("idconversation") == a.idConversation ? (K(a), ja(a.body, z(), a.idConversation)) : (Ga = b, S(a.idConversation, Ga, C()).then(function() {
                    ("minimized" == C() || "hidden" == C()) && L(b, !1), "hidden" == C() && ($(".app-chat-launcher", Ga).show(), fb = !1, da("minimized", a.actor.avatar, z(), a.idConversation), B("minimized")), ja(a.body, z(), a.idConversation), Z()
                })), v()
            }), a.bind("update", function(a) {
                var b = "app-" + a.toType + "-" + a.toId,
                    c = $("#" + b, "#app-chat-container");
                $(c).length && M(a)
            }), a.bind("status", function(a) {
                "writing" === a.status && ib === a.idConversation && I()
            }))
        }

        function z() {
            var a = 0;
            return Za && (a = Ya.get("pusher-pending"), null == a && (a = 0)), a
        }

        function A(a) {
            Za && Ya.set("pusher-pending", a)
        }

        function B(a) {
            Za && Ya.set("pusher-status", a), v()
        }

        function C() {
            var a = null;
            return Za && (a = Ya.get("pusher-status")), a
        }

        function D(a, b, c) {
            b = "undefined" != typeof b ? b : !0, c = "undefined" != typeof c ? c : !1, Ga && "hidden" == !C() && $(".app-chat-launcher", Ga).show();
            var d = $(".app-chat-num-messages"),
                e = $(".app-chat-num-messages", ".app-chat-conversation"),
                f = $(".app-chat-num-messages", ".app-chat-launcher");
            $(d).removeClass("bounce-once"), c ? ($(f).html(a).show(), b && $(f).addClass("bounce-once"), 1 == a ? $(e).html("").hide() : ($(e).html(a - 1).show(), b && $(e).addClass("bounce-once"))) : 0 == a ? $(d).html("").hide() : ($(d).html(a).show(), b && $(d).addClass("bounce-once"))
        }

        function E(a) {
            var b = $("#app-chat-container"),
                c = b.find("#app-" + a.fromType + "-" + a.fromId);
            if (c.length) return c;
            pendigTotal = z(), status = C();
            var d = "";
            ("close" == status || "hidden" == status) && (d = " dnone");
            var e;
            return e = La || Ma ? gb : "undefined" != typeof va ? !0 : Ka, b.append('<div id="app-' + a.fromType + "-" + a.fromId + '" data-fromtype="' + a.fromType + '" data-fromid="' + a.fromId + '" data-idconversation="' + a.idConversation + '" class="app-chat-container-top">    <div class="chat-launcher app-chat-launcher' + d + '">        <div class="chat-launcher-button">            <img class="app-chat-avatar" src="' + a.actor.avatar + '" />        </div>        <div class="chat-launcher-preview">            <div class="app-conversation-summary">            </div>        </div>        <span class="app-chat-num-messages chat-message-count dnone">' + pendigTotal + '</span>   </div>   <div class="chat-conversation app-chat-conversation">      <div class="chat-header">          <div class="app-controls-menu chat-controls chat-controls-left">' + (db ? ' <div class="chat-control-btn app-chat-menu">' : '<div class="">') + (db ? ' <span class="chat-ui chat-menu"></span>' : "") + (db ? ' <span class="app-chat-num-messages chat-message-count">' + pendigTotal + "</span>" : "") + '              </div>          </div>          <span class="app-chat-name chat-name">' + a.actor.name + '</span>          <div class="chat-controls chat-controls-right">              <span class="chat-control-btn app-chat-min "><span class="chat-ui chat-min"></span></span>' + (e ? ' <span class="chat-control-btn app-chat-close"><span class="chat-ui chat-close"></span></span>' : "") + '          </div>      </div>      <div class="app-chat-history chat-history">          <div class="app-chat-conversations chat-messages"></div>      </div>      <div class="app-conversation-parts app-mobile-nel-scrollfix chat-messages app-scroll-calculate"></div>      <div class="composer-container chat-message-send">          <div class="app-chat-writing-alert">' + '%s is writing...'.replace("%s", a.actor.name) + '</div>          <form method="POST" class="app-chat-form-' + a.fromType + '" data-type="' + Ca + '" data-id="' + Da + '">              <div class="composer-textarea-container">                  <textarea class="app-no-tiny" name="comment" placeholder="' + 'Write your message...' + '"></textarea>' + (Ka ? '     <div class="chat-submit"> <span class="app-chat-form-submit btn btn-primary">' + 'Send' + "</span> </div>" : "") + "              </div>          </form>" + (Ka ? "" : '<span class="app-chat-hint chat-send-hint">' + 'Presiona intro para enviar el mensaje' + "</span>") + "      </div>   </div></div>"), Ka && enableNelScrollFix(), c = b.find("#app-" + a.fromType + "-" + a.fromId), H(c), c
        }

        function F() {
            mobile_hide_menu($("#app-mobile-layer-settings"), "left", {}, !0), mobile_hide_menu($("#app-mobile-layer-user"), "right", {}, !0), $(document.body).attr("style", "overflow:hidden; position:fixed;width:100%;height:" + $(window).height() + "px"), blockFullscreen()
        }

        function G() {
            $(document.body).hasClass("listener-fullscreen-page") || $(document.body).attr("style", "position:initial;height:initial;width:initial;"), unblockFullscreen()
        }

        function H(a) {
            var b = $(".app-chat-conversation", a);
            $(".app-conversation-parts", a);
            status = C(), $(".app-chat-launcher", a).on("click", function() {
                $(this).css("display", "none").removeClass("init"), Ka && !Ma && F(), $(".app-chat-conversation", a).addClass("active"), $(".app-chat-num-messages", a).parent().removeClass("fadein").removeClass("fadeout"), Ka || $(".app-chat-conversation", a).find("textarea").focus();
                var c = $(a).data("idconversation"),
                    d = {
                        id: null,
                        idConversation: c,
                        toType: Ca,
                        toId: Da
                    };
                X(d), ca(b), B("open")
            }), $(".app-chat-min", a).on("click", function() {
                var b = function() {
                    $(".app-chat-conversation", a).removeClass("active"), $(".app-chat-launcher", a).removeClass("init").css("display", "block"), $(".app-conversation-summary", a).html().trim() ? Ka ? $(".app-conversation-summary", a).parent().removeClass("fadein").addClass("fadeout") : $(".app-conversation-summary", a).parent().removeClass("fadeout").addClass("fadein") : $(".app-conversation-summary", a).parent().removeClass("fadein").addClass("fadeout")
                };
                Qa ? setTimeout(b, 300) : b(), Ka && G(), B("minimized"), $(".app-conversation-summary", a).parent().removeClass("fadeout"), ha()
            }), $(".app-chat-close", a).on("click", function() {
                var b = function() {
                    $(".app-chat-conversation", a).fadeOut("fast", function() {
                        $(".app-chat-conversation", a).removeClass("active").show(), $(".app-chat-launcher", a).hide(), $(".app-chat-history", a).removeClass("active"), $(".app-chat-conversations", a).html("")
                    })
                };
                Qa ? setTimeout(b, 300) : b(), ra(), Ka && G(), B("hidden"), gb ? ga() : fa()
            }), $(".app-chat-menu", a).on("click", function() {
                var b = $(a).data("fromtype"),
                    c = $(a).data("fromid");
                $.ajax({
                    type: "POST",
                    url: "/pusher/pusherMenu.php",
                    data: {
                        type: Ca,
                        idItem: Da,
                        typeConcierge: b,
                        idConcierge: c
                    },
                    success: function(b) {
                        W(b.menu, a), A(b.numPending), D(b.numPending)
                    }
                })
            }), $("textarea[name='comment']", a).keyup(function(a) {
                13 == a.keyCode && ("" == $(this).val().trim() ? $(this).val("") : (!Ka && common_isIOS() && document.activeElement.blur(), $(this).closest("form").trigger("submit"))), Ka || Va || (setTimeout(function() {
                    $(".app-chat-hint").addClass("active")
                }, 1e3), Va = !0)
            }), $(".app-chat-form-submit", a).on("click", function(b) {
                b.preventDefault(), b.stopPropagation();
                var c = jQuery.Event("keyup");
                c.keyCode = 13, $("textarea[name='comment']", a).trigger(c)
            })
        }

        function I(a) {
            var a = "undefined" != typeof a ? a : !1,
                b = $(".app-chat-writing-alert");
            return a ? (b.is(":visible") && (clearTimeout(hb), b.slideUp(), hb = null), !0) : (hb ? (clearTimeout(hb), hb = null) : b.slideDown(), void(hb = setTimeout(function() {
                b.slideUp(), hb = null
            }, 6e3)))
        }

        function J(a, b, c, d) {
            (La || Ma) && (fb = !1, da(a, b, c, d))
        }

        function K(a, b, c, d) {
            b = "undefined" != typeof b ? b : !1, c = "undefined" != typeof c ? c : !0, d = "undefined" != typeof d ? d : !1, I(!0);
            var e = "app-" + a.fromType + "-" + a.fromId,
                f = $("#" + e, "#app-chat-container"),
                g = $(f).data("idconversation");
            "" == g && $(f).data("idconversation", a.idConversation);
            var h = !0;
            if (b || $(Ga).data("idconversation") == a.idConversation) {
                N(f, a);
                var i = 0 == $(".app-conversation-parts > div", $(f)).length || $(".app-conversation-parts > div", $(f)).last().hasClass("message-outcome") || $(".app-conversation-parts > div", $(f)).last().hasClass("chat-message-welcome") || $(".app-conversation-parts > div", $(f)).last().hasClass("chat-separator-date");
                i ? $(".app-conversation-parts", $(f)).append('<div class="chat-message message-income">    <div class="chat-message-avatar">        <img src="' + a.actor.avatar + '" width="50" height="50" alt="' + a.actor.name + '" />    </div>    <div class="chat-message-globe">' + a.body.replace(/(?:\r\n|\r|\n)/g, "<br/>") + '        <small class="chat-timestamp">' + a.publishedTime + "</small>    </div></div>") : $(".app-conversation-parts", $(f)).last().append('    <div class="chat-message chat-aggregate message-income">        <div class="chat-message-globe">' + a.body.replace(/(?:\r\n|\r|\n)/g, "<br/>") + '        <small class="chat-timestamp">' + a.publishedTime + "</small>    </div></div>");
                var j = a.body.replace(/(<([^>]+)>)/gi, "");
                j.length > 105 && (j = j.substring(0, 105) + "..."), $(".app-conversation-summary", $(f)).html(j), c && L(f, b), $(".app-chat-name", $(f)).html(a.actor.name), $(".app-chat-avatar", $(f)).attr("src", a.actor.avatar), V(f), h = !1, b || "open" != C() && "minimized" != C() && "hidden" != C() || Z()
            }
            if (null != a.numPending && A(a.numPending), b || !h && "close" != C() && "minimized" != C() && "hidden" != C()) b || d || X(a, c);
            else if (null != a.numPending)
                if (D(a.numPending, c), Ka) {
                    var k = $(".app-mobile-user-menu-box").find(".app-mobile-user-menu-link ");
                    k.length > 0 && oa(k)
                } else {
                    var l = $(".user-logged span.relative");
                    l.length > 0 && pa(l)
                }
        }

        function L(a, b) {
            b || ($(".app-conversation-summary", $(a)).parent().removeClass("fadeout").addClass("fadein"), Wa && clearTimeout(Wa), Wa = setTimeout(function() {
                $(".app-conversation-summary", $(a)).parent().removeClass("fadein").addClass("fadeout")
            }, 3e3))
        }

        function M(a, b) {
            b = "undefined" != typeof b ? b : !1;
            var c = "app-" + a.toType + "-" + a.toId,
                d = $("#" + c, "#app-chat-container");
            N(d, a);
            var e = 0 == $(".app-conversation-parts > div", $(d)).length || $(".app-conversation-parts > div", $(d)).last().hasClass("message-income") || $(".app-conversation-parts > div", $(d)).last().hasClass("chat-message-welcome") || $(".app-conversation-parts > div", $(d)).last().hasClass("chat-separator-date");
            (b || $(Ga).data("idconversation") == a.idConversation) && (e ? $(".app-conversation-parts", $(d)).append('<div class="chat-message message-outcome">' + (e ? Ba ? Ba : '    <div class="chat-message-avatar' + ("vendor" == Ca ? " avatar-vendor" : "") + '">        <img width="50" height="50" alt="' + a.fromType + '" src="' + a.actor.avatar + '">    </div>' : "") + '    <div class="chat-message-globe">' + a.body + '        <small class="chat-timestamp">' + a.publishedTime + "</small>    </div></div>") : $(".app-conversation-parts", $(d)).last().append('<div class="chat-message chat-aggregate message-outcome">    <div class="chat-message-globe">' + a.body + '        <small class="chat-timestamp">' + a.publishedTime + "</small>    </div></div>"), V(d))
        }

        function N(a, b) {
            (null == Ha || b.publishedDate != Ha) && ($(".app-conversation-parts", $(a)).append('<div class="chat-separator-date"><span>' + b.publishedDate + "</span></div>"), Ha = b.publishedDate)
        }

        function O(a) {
            var b = "app-" + a.fromType + "-" + a.fromId,
                c = $("#" + b, "#app-chat-container");
            1 == a.conciergeTemplate ? $(".app-conversation-parts", $(c)).append('<div class="chat-message-welcome">    <p class="title">' + 'Bodas.net Advisor' + "</p>    <p>" + 'Me gustaría ayudarte a elegir el proveedor que mejor se ajusta a tu boda soñada. Un servicio gratuito para que contrates siempre a los mejores profesionales en tu zona. ¡Pregúntanos!' + '</p></div><div class="chat-legal"><a class="app-pusher-link" href="' + globals.Request_Url_Condiciones_Legales + '#concierge">' + 'Condiciones de uso de bodas.net' + "</a>") : 2 == a.conciergeTemplate && $(".app-conversation-parts", $(c)).append('<div class="chat-message-welcome">    <p class="title">' + 'AYUDA A EMPRESAS' + "</p>    <p>" + 'Queremos ayudarte a gestionar tu menú de empresa y que le saques el máximo partido a tu presencia en Bodas.net. ¿Tienes alguna duda? ¡Pregúntanos!' + '</p></div><div class="chat-legal"><a class="app-pusher-link" href="' + globals.Request_Url_Condiciones_Legales + '">' + 'Condiciones de uso de bodas.net' + "</a>")
        }

        function P(a, b, c) {
            c = c || !1;
            var d = "open";
            return T(b, a, d), c || $(b).data("idconversation") != a ? S(a, b, d).then(function() {
                Q(b, !1)
            }) : (Q(b), $.when())
        }

        function Q(a, b) {
            b = "undefined" != typeof b ? b : !0, pendigTotal = z(), D(pendigTotal), b && $(".app-chat-launcher", a).trigger("click")
        }

        function R() {
            var a = $.when();
            if (Za) {
                var b = Ya.get("pusher-idConversation"),
                    c = Ya.get("pusher-status"),
                    d = Ya.get("pusher-fromId"),
                    e = Ya.get("pusher-fromType");
                if (ba(b) || "close" == c ? h(b) : (c = null, Ya.remove("pusher-status"), Ya.remove("pusher-idConversation")), "open" == c || "minimized" == c || "hidden" == c) {
                    var f = Ya.get("pusher-actorName"),
                        g = Ya.get("pusher-actorAvatar"),
                        i = {
                            idConversation: b,
                            fromType: e,
                            fromId: d,
                            type: Ca,
                            idItem: Da,
                            actor: {
                                name: f,
                                avatar: g
                            }
                        };
                    return E(i), Ga = $("#app-" + e + "-" + d, "#app-chat-container"), Fa = !0, S(b, Ga, c).then(function() {
                        da(c, g, z(), b)
                    })
                }
                if ("close" == c) {
                    U();
                    var g = Ya.get("pusher-actorAvatar");
                    da(c, g, z(), null)
                }
            }
            return a
        }

        function S(a, b, c) {
            return c = c || null, $.ajax({
                type: "POST",
                url: "/pusher/pusherHistory.php",
                data: {
                    type: Ca,
                    idItem: Da,
                    idConversation: a,
                    markAsRead: "open" == c || null == c ? 1 : 0
                },
                success: function(d) {
                    $a = d.statusConcierge, Ha = null, $(".app-conversation-parts", $(b)).html(""), d.history.forEach(function(a, b) {
                        a.fromId == Da && a.fromType == Ca ? M(a, !0) : K(a, !0)
                    }), A(d.numPending), D(d.numPending), Y(), T(b, a, c), "open" == c && (Qa || !Ra) && $(".app-chat-launcher", b).trigger("click")
                }
            })
        }

        function T(a, b, c) {
            Za && ($(a).data("idconversation", b), Ya.set("pusher-idConversation", parseInt(b)), Ya.set("pusher-fromId", $(a).data("fromid")), Ya.set("pusher-fromType", $(a).data("fromtype")), Ya.set("pusher-actorAvatar", $(".app-chat-avatar", a).attr("src")), Ya.set("pusher-actorName", $(".app-chat-name", a).html()), null != c && Ya.set("pusher-status", c)), h(b)
        }

        function U() {
            Za && Ya.remove("pusher-idConversation"), h(null), Ga = $("#app-closed"), Fa = !0, status = C();
            var a = z(),
                b = $("#app-closed", "#app-chat-container");
            if ($(b).length) return $(".app-chat-close", b).trigger("click", [{
                notifyApp: !1
            }]), D(a), void $(b).show();
            $("#app-chat-container").append('<div id="app-closed" class="app-chat-container-top">    <div class="chat-launcher app-chat-launcher dnone">        <div class="chat-launcher-button closed"></div>        <span class="app-chat-num-messages chat-message-count">' + a + '</span>   </div>   <div class="chat-conversation app-chat-conversation">      <div class="chat-header">          <span class="chat-name">' + 'Chats' + '</span>          <div class="chat-controls chat-controls-right">              <span class="app-chat-close chat-control-btn"><span class="chat-ui chat-close"></span></span>          </div>      </div>      <div class="app-chat-history chat-history">          <div class="app-chat-conversations chat-messages"></div>      </div>      <div class="app-conversation-parts chat-messages app-mobile-nel-scrollfix"></div>      <div class="composer-container chat-message-send">      </div>   </div></div>'), D(a), Ka && enableNelScrollFix();
            var c = $("#app-closed", "#app-chat-container");
            $(".app-chat-launcher", c).on("click", function() {
                $(this).css("display", "none").removeClass("init"), Ka && F(), $(".app-chat-conversation", c).addClass("active").find("textarea").focus(), $.ajax({
                    type: "POST",
                    url: "/pusher/pusherMenu.php",
                    data: {
                        type: Ca,
                        idItem: Da
                    },
                    success: function(a) {
                        W(a.menu, c), A(a.numPending), D(a.numPending)
                    }
                })
            }), $(".app-chat-close", c).on("click", function(a, b) {
                $(".app-chat-conversation", c).removeClass("active"), $(".app-chat-launcher", c).css("display", "block"), ra(), Ka && G(), B("minimized"), ia()
            })
        }

        function V(a) {
            var b = $(".app-conversation-parts", a);
            b.length && (Ma ? setTimeout(function() {
                b[0].scrollTop = b[0].scrollHeight
            }, 250) : b[0].scrollTop = b[0].scrollHeight)
        }

        function W(a, b) {
            $(".app-chat-conversations", b).html(""), a.forEach(function(a, c) {
                var d = 0 == a.pendingMessages ? "dnone" : "";
                $(".app-chat-conversations", b).append('<div class="app-chat-history-conversation chat-panel chat-message message-income" data-id="' + a.id + '" data-toid="' + a.toId + '" data-totype="' + a.toType + '">    <div class="chat-message-avatar">        <img class="app-chat-avatar" src="' + a.actorAvatar + '" width="50" height="50" alt="' + a.actorName + '" />        <span class="chat-message-count ' + d + '">' + a.pendingMessages + '</span>    </div>    <div class="chat-message-info">        <span class="app-chat-name chat-message-name">' + a.actorName + '</span>        <span class="chat-message-subject">' + (a.lastMessage ? a.lastMessage : a.asunto) + '</span>        <span class="chat-message-lastmessage">' + a.fechaLastMessage + "</span>    </div></div>")
            }), db && $(".app-chat-history", b).append('<div class="app-chat-button chat-btn-new-message">    <span class="btn btn-primary btn-medium app-chat-new-conversation">        <i class="fa fa-comment-o"></i> ' + 'Nueva conversación' + "    </span></div>"), $(".app-chat-new-conversation", b).on("click", function(a) {
                var c = "concierge",
                    d = "admin",
                    e = 1;
                "vendor" == Ca && (c = "concierge-vendor", e = 2), $.ajax({
                    type: "POST",
                    url: "/pusher/pusherNew.php",
                    data: {
                        fromType: c,
                        fromId: d
                    },
                    success: function(a) {
                        var c = {
                            idConversation: "",
                            fromType: a.fromType,
                            fromId: a.fromId,
                            type: Ca,
                            idItem: Da,
                            actor: a.actor,
                            conciergeTemplate: e
                        };
                        bb = a.actor.name, cb = a.actor.avatar, $a = a.statusConcierge, ab = !0, Ga = E(c), Ga.data("idconversation", ""), $(".app-chat-history", b).removeClass("active"), $(".app-chat-conversations", b).html(""), $(".app-chat-button", b).remove(), $(".app-conversation-parts", Ga).html(""), $(".app-conversation-summary", Ga).html(""), $(".app-chat-launcher", Ga).trigger("click"), O(c), $("#app-closed").hide(), $(".app-controls-menu").show(), $(".app-chat-min").show()
                    }
                })
            }), $(".app-chat-history", b).addClass("active"), $(".app-controls-menu").hide(), $(".app-chat-min").hide(), $(".app-chat-history-conversation", b).on("click", function(a) {
                var c = $(this).data("totype"),
                    d = $(this).data("toid"),
                    e = $(this).data("id"),
                    f = {
                        idConversation: e,
                        fromType: c,
                        fromId: d,
                        type: Ca,
                        idItem: Da,
                        actor: {
                            name: $(".app-chat-name", this).html(),
                            avatar: $(".app-chat-avatar", this).attr("src")
                        }
                    };
                bb = f.actor.name, cb = f.actor.avatar, ab = !0, Ga = E(f), P(e, Ga, !0).then(function() {
                    $(".app-chat-history", b).removeClass("active"), $(".app-chat-conversations", b).html(""), $(".app-chat-button", b).remove(), "app-closed" == $(b).attr("id") && ($(".app-chat-conversation", b).removeClass("active"), $(".app-chat-launcher", b).show()), $("#app-closed").hide(), $(".app-controls-menu").show(), $(".app-chat-min").show()
                })
            })
        }

        function X(a, b) {
            b = "undefined" != typeof b ? b : !0, $.ajax({
                type: "POST",
                url: "/pusher/pusherMarkAsRead.php",
                data: {
                    idMessage: a.id,
                    type: a.toType,
                    idItem: a.toId,
                    idConversation: a.idConversation
                },
                success: function(a) {
                    null != a.numPending && (A(a.numPending), D(a.numPending, b), Y(a.numPending))
                }
            })
        }

        function Y(a) {
            $.ajax({
                type: "GET",
                url: "/utils-HeaderUnreadedMessagesAjax.php",
                success: function(b) {
                    var c;
                    if (c = null != b.numUnread ? parseInt(b.numUnread) : parseInt(a), Ka) {
                        var d = $(".app-mobile-user-menu-box").find(".app-mobile-user-menu-link ");
                        d.length > 0 && oa(d, c)
                    } else {
                        var e = $(".user-logged span.relative");
                        e.length > 0 && pa(e, c)
                    }
                }
            })
        }

        function Z() {
            if (!La && !Ma) {
                var a = new Audio(globals.subdomain_cdn_img + "/assets/audio/blop.wav");
                try {
                    a.play()
                } catch (b) {}
            }
        }

        function _() {
            function a(a) {
                return 10 > a && (a = "0" + a), a
            }
            return date = new Date, dateTime = a(date.getHours()) + ":" + a(date.getMinutes()), dateTime
        }

        function aa() {
            function a(a) {
                return 10 > a && (a = "0" + a), a
            }
            return date = new Date, dateTime = a(date.getDate()) + "/" + a(date.getMonth() + 1) + "/" + date.getFullYear(), dateTime
        }

        function ba(a) {
            return Number(a) === a && a % 1 === 0
        }

        function ca(a) {
            !ab || 2 != $a && 3 != $a && 4 != $a || 0 != $(".app-chat-warning", a).length || (2 == $a || 3 == $a ? "vendor" == Ca ? $(a).append('<div class="app-chat-warning chat-warning">    <div class="chat-warning-content">        <span class="app-chat-warning-close chat-warning-close">&times;</span>        <img class="img-circle rounded" src="' + cb + '" width="60" height="60" />        <h2 class="fs18">' + 'I can\'t help you at the moment' + "</h2>        <p>" + 'El horario de asesoría es de Lunes a Viernes de 10h a 18h.' + "</p>        <p>" + 'Si tienes alguna duda puedes enviarme un email a <a href=\'mailto:monica.asesora@bodas.net\'>monica.asesora@bodas.net</a> y te responderé lo antes posible.' + "</p>    </div></div>") : $(a).append('<div class="app-chat-warning chat-warning">    <div class="chat-warning-content">        <img class="img-circle rounded" src="' + cb + '" width="60" height="60" />        <h2 class="fs18">' + 'I can\'t help you at the moment' + "</h2>        <p>" + 'El horario de asesoría es de Lunes a Viernes de 9h a 21h.' + "</p>        <p>" + 'If you have any questions you can email me at <a href=\'mailto:alicia.asesora@bodas.net\'> alicia.asesora@bodas.net</a> and I will answer you as soon as possible.' + "</p>    </div></div>") : "vendor" == Ca ? $(a).append('<div class="app-chat-warning chat-warning">    <div class="chat-warning-content">        <span class="app-chat-warning-close chat-warning-close">&times;</span>        <img class="img-circle rounded" src="' + cb + '" width="60" height="60" />        <h2>' + 'Out of service' + "</h2>        <p>" + 'I can\'t help you at the moment, but please come back soon.' + "</p>        <p>" + 'Si tienes alguna duda puedes enviarme un email a <a href=\'mailto:monica.asesora@bodas.net\'>monica.asesora@bodas.net</a> y te responderé lo antes posible.' + "</p>    </div></div>") : $(a).append('<div class="app-chat-warning chat-warning">    <div class="chat-warning-content">        <img class="img-circle rounded" src="' + cb + '" width="60" height="60" />        <h2>' + 'Out of service' + "</h2>        <p>" + 'I can\'t help you at the moment, but please come back soon.' + "</p>        <p>" + 'If you have any questions you can email me at <a href=\'mailto:alicia.asesora@bodas.net\'> alicia.asesora@bodas.net</a> and I will answer you as soon as possible.' + "</p>    </div></div>"), $(".app-chat-warning-close", a).on("click", function() {
                $(this).parent().parent().remove()
            }), Ka && (a.find(".app-conversation-parts").addClass("app-mobile-nel-scrollfix"), enableNelScrollFix()), ab = !1)
        }

        function da(a, b, c, d) {
            return Pa = !0, fb ? void(fb = !1) : void(La ? androidAppUsersProxy.appInitPusher(a, b, c, d) : Ma && (action = "PUSHER_INIT", data = window.btoa(JSON.stringify({
                status: a,
                avatar: b,
                numPendingMessages: c,
                idConversation: d
            })), iOSAppUsersProxyCommon(action + "|" + data + "|||")))
        }

        function ea(a, b, c) {
            a = a.replace(/(<([^>]+)>)/gi, ""), a = $("<textarea />").html(a).text(), a.length > 105 && (a = a.substring(0, 105) + "..."), La ? androidAppUsersProxy.appTriggerPusher(a, b, c) : Ma && (action = "PUSHER_TRIGGER", data = window.btoa(JSON.stringify({
                message: a,
                avatar: b,
                showGlobe: c
            })), iOSAppUsersProxyCommon(action + "|" + data + "|||"))
        }

        function fa() {
            La ? androidAppUsersProxy.appHidePusher() : Ma ? (action = "PUSHER_HIDE", iOSAppUsersProxyCommon(action + "||||")) : "undefined" != typeof isUsersAppVersion && isUsersAppVersion && (isAppUsersNativePlatformIOS ? (action = "PUSHER_HIDE", iOSAppUsersProxyCommon(action + "||||")) : androidAppUsersProxy.appHidePusher())
        }

        function ga() {
            La ? androidAppUsersProxy.appHideAndClosePusher(z()) : Ma ? (action = "PUSHER_HIDE_AND_CLOSE", data = window.btoa(JSON.stringify({
                numPendingMessages: z()
            })), iOSAppUsersProxyCommon(action + "|" + data + "|||")) : "undefined" != typeof isUsersAppVersion && isUsersAppVersion && (isAppUsersNativePlatformIOS ? (action = "PUSHER_HIDE_AND_CLOSE", data = window.btoa(JSON.stringify({
                numPendingMessages: z()
            })), iOSAppUsersProxyCommon(action + "|" + data + "|||")) : androidAppUsersProxy.appHideAndClosePusher(z()))
        }

        function ha() {
            La ? androidAppUsersProxy.appMinimizePusher(z()) : Ma && (action = "PUSHER_MINIMIZE", data = window.btoa(JSON.stringify({
                numPendingMessages: z()
            })), iOSAppUsersProxyCommon(action + "|" + data + "|||"))
        }

        function ia() {
            La ? androidAppUsersProxy.appClosePusher(z()) : Ma && (action = "PUSHER_CLOSE", data = window.btoa(JSON.stringify({
                numPendingMessages: z()
            })), iOSAppUsersProxyCommon(action + "|" + data + "|||"))
        }

        function ja(a, b, c) {
            a = a.replace(/(<([^>]+)>)/gi, ""), a = $("<textarea />").html(a).text(), a.length > 105 && (a = a.substring(0, 105) + "..."), La ? androidAppUsersProxy.appMessagePusher(a, b, c) : Ma && (action = "PUSHER_MESSAGE", data = window.btoa(JSON.stringify({
                message: a,
                numPendingMessages: b,
                idConversation: c
            })), iOSAppUsersProxyCommon(action + "|" + data + "|||"))
        }

        function ka() {
            La ? androidAppUsersProxy.appDeactivatePusher() : Ma && (action = "PUSHER_DEACTIVATE", iOSAppUsersProxyCommon(action + "||||"))
        }

        function la(a, b) {
            La ? androidAppUsersProxy.appRunJavascriptPusher(a, b) : Ma && (action = "PUSHER_RUN_JAVASCRIPT", data = window.btoa(JSON.stringify({
                command: a,
                avatar: b
            })), iOSAppUsersProxyCommon(action + "|" + data + "|||"))
        }

        function ma(a) {
            var b, c, d = a.url,
                e = a.text,
                f = a.idLead;
            if (Ka) b = d.replace("https://" + globals.subdomain, "https://" + globals.subdomainMobile + "/vendors"), $(".app-mobile-vendors-solicitudes-response-form").length > 0 && $("input[name=id_solicitud]", ".app-mobile-vendors-solicitudes-response-form").val() == f ? (c = $("#app-empresa-notification-alert"), $(c).html("<p><i class='icon icon-red-envelope'></i>" + 'New message, read it before sending a response' + "</p>").fadeIn(400), setTimeout(function() {
                $(c).fadeOut("fast")
            }, 5e3), $.ajax({
                url: "/vendors/emp-AdminSolicitudesShowAjaxRefresh.php?idSolicitud=" + f,
                cache: !1,
                success: function(a) {
                    var b = $(".chat-separator-date:first");
                    $(a).insertBefore(b), $(b).hasClass("chat-separator-date-new") && $(b).remove()
                }
            }), $(".chat-vendor-container").goTo(-250)) : (c = $("#app-empresa-notification-alert"), $(c).html("<a class='nounder' href=\"" + b + "\"><i class='icon icon-red-envelope'></i>" + e + "</a>").fadeIn(400), setTimeout(function() {
                $(c).fadeOut("fast")
            }, 5e3), Z());
            else if (b = d.replace("apps/empresas/", ""), $(".app-vendors-solicitudes-response-form").length > 0 && $("input[name=id_solicitud]", ".app-vendors-solicitudes-response-form").val() == f) c = $("#app-pusher-vendors-users-notification-alert"), $(c).html("<p><i class='icon icon-red-envelope'></i>" + 'New message, read it before sending a response' + "</p>").fadeIn(400), setTimeout(function() {
                $(c).fadeOut("fast")
            }, 5e3), $.ajax({
                url: "/emp-AdminSolicitudesShowAjaxRefresh.php?idSolicitud=" + f,
                cache: !1,
                success: function(a) {
                    var b = $(".box-sol-reply:first");
                    $(b).find(".tag-pending") && $(b).find(".tag-pending").remove(), $(".box-sol-reply").first().goTo(-50), $(a).insertBefore(b).hide().fadeIn("slow"),
                        Z()
                }
            });
            else {
                c = $("#app-pusher-vendors-users-notification-alert"), $(c).html("<a class='nounder' href=\"" + b + "\"><i class='icon icon-red-envelope'></i>" + e + "</a>").fadeIn(400), setTimeout(function() {
                    $(c).fadeOut("fast")
                }, 5e3), Z();
                var g = $(".nav-emp.nav-emp-requests");
                qa(g)
            }
        }

        function na(a) {
            var b, c, d = a.url,
                e = a.text,
                f = a.idLead;
            if (Ka)
                if (b = d.replace("https://" + globals.subdomain, "https://" + globals.subdomainMobile), $(".app-mobile-tools-new-vendor-msg").length > 0 && $("input[name=id_solicitud]", ".app-mobile-tools-new-vendor-msg").val() == f) {
                    c = $("#common-app-notification-alert"), $(c).html("<p><span class='badge-envelope fleft'><i class='icon icon-red-envelope'></i> <span class='badge-notice'>1</span></span> " + 'New message, read it before sending a response' + "</p>").fadeIn(400), setTimeout(function() {
                        $(c).fadeOut("fast")
                    }, 5e3), $.ajax({
                        url: "/tools/VendorsSolicAjaxRefresh?idSolicitud=" + f,
                        cache: !1,
                        success: function(a) {
                            $(".chat-separator-date-new").remove();
                            var b = $(".chat-message:last");
                            $(a).insertAfter(b).hide().fadeIn("slow"), $(".chat-container")[0].scrollTop = $(".chat-container")[0].scrollHeight
                        }
                    });
                    var g = $(".header-bar").find(".badge-envelope");
                    oa(g)
                } else {
                    c = $("#common-app-notification-alert"), $(c).html("<a class='nounder' href=\"" + b + "\"><span class='badge-envelope fleft'><i class='icon icon-red-envelope'></i> <span class='badge-notice'>1</span></span> " + e + "</a>").fadeIn(400), setTimeout(function() {
                        $(c).fadeOut("fast")
                    }, 5e3);
                    var g = $(".app-mobile-user-menu-box").find(".app-mobile-user-menu-link ");
                    oa(g)
                }
            else if (b = d, $(".app-vendors-users-solicitudes-response-form").length > 0 && $("input[name=id_solicitud]", ".app-vendors-users-solicitudes-response-form").val() == f) c = $("#app-pusher-vendors-users-notification-alert"), $(c).html("<p><span class='badge-envelope'><i class='icon icon-red-envelope'></i> </span> " + 'New message, read it before sending a response' + "</p>").fadeIn(400), setTimeout(function() {
                $(c).fadeOut("fast")
            }, 5e3), $.ajax({
                url: "/tools/VendorsSolicAjaxRefresh?idSolicitud=" + f,
                cache: !1,
                success: function(a) {
                    $(".app-sol-reply:first").goTo(-0);
                    var b = $(".app-sol-reply:first");
                    $(a).insertBefore(b).hide().fadeIn("slow"), Z()
                }
            });
            else {
                c = $("#app-pusher-vendors-users-notification-alert"), $(c).html('<a href="' + b + '">' + e + "</a>").fadeIn(400), setTimeout(function() {
                    $(c).fadeOut("fast")
                }, 5e3);
                var g = $(".user-logged > span");
                pa(g)
            }
        }

        function oa(a, b) {
            var c;
            if (a.find(".badge-notice strong").length > 0) {
                if ("undefined" != typeof b) c = b;
                else {
                    var d = parseInt(a.find(".badge-notice strong").html());
                    c = d + 1
                }
                0 != c ? a.find(".badge-notice").html("<strong>" + c + "</strong>").show() : a.find(".badge-notice").html("").hide()
            } else if (a.find(".badge-notice").length > 0) {
                if ("undefined" != typeof b) c = b;
                else {
                    var d = parseInt(a.find(".badge-notice").html());
                    isNaN(d) && (d = 0), c = parseInt(d + 1)
                }
                0 != c ? a.find(".badge-notice").html(c).show() : a.find(".badge-notice").html("").hide()
            } else "undefined" != typeof b ? 0 != b && $("<span class='badge-notice'>" + b + "</span>").insertAfter(a.find("img")) : $("<span class='badge-notice'>1</span>").insertAfter(a.find("img"))
        }

        function pa(a, b) {
            if (a.find(".badge").length > 0) {
                var c;
                if ("undefined" != typeof b) c = b;
                else {
                    var d;
                    d = a.find(".badge-notice").length > 0 ? parseInt(a.find(".badge-notice").html()) : parseInt(a.find(".badge").html()), isNaN(d) && (d = 0), c = parseInt(d + 1)
                }
                0 != c ? a.find(".badge").html(c).show() : a.find(".badge").html("").hide()
            } else "undefined" != typeof b ? 0 != b && $("<a class='badge' href='https://" + globals.subdomain + "/com-Buzon.php'>" + b + "</a>").insertBefore(a.find("a")) : $("<a class='badge' href='https://" + globals.subdomain + "/com-Buzon.php'>1</a>").insertBefore(a.find("a"))
        }

        function qa(a) {
            $.ajax({
                url: "/emp-AdminSolicitudesGetPendingAjax.php",
                cache: !1,
                success: function(b) {
                    b && (a.find(".nav-count").length > 0 ? a.find(".nav-count").html(b) : a.html("<span class='nav-count'>1</span>"))
                }
            })
        }

        function ra() {
            var a = $(".app-conversation-parts", Ga).find(".message-outcome").length;
            0 == a && bodas.setCookieTime(jb, "1", kb)
        }

        function sa() {
            bodas.deleteCookie(jb)
        }
        var ta, ua, va, wa, xa, ya, za, Aa, Ba, Ca, Da, Ea = null,
            Fa = !1,
            Ga = null,
            Ha = null,
            Ia = 864e5,
            Ja = 9e5,
            Ka = !1,
            La = !1,
            Ma = !1,
            Na = !1,
            Oa = !1,
            Pa = !1,
            Qa = !1,
            Ra = !1,
            Sa = !1,
            Ta = !1,
            Ua = !1,
            Va = !1,
            Wa = null,
            Xa = null,
            Ya = null,
            Za = !1,
            $a = 1,
            _a = !0,
            ab = !1,
            bb = null,
            cb = null,
            db = !1,
            eb = !1,
            fb = !1,
            gb = !1,
            hb = null,
            ib = null,
            jb = "CONCIERGE_TS_MC",
            kb = 1;
        return {
            init: a,
            reset: c,
            reload: b,
            initConcierge: d,
            initConversation: e,
            replyChat: f,
            getSocketId: g,
            updateConversation: j,
            showContactar: l,
            minimizeChat: n,
            forzeMinimizeChat: k,
            flush: o,
            forceBottomScroll: m,
            showConcierge: p,
            showLayerStatusConcierge: q,
            openCurrentChat: r,
            appHideBars: s,
            appInitPusher: J
        }
    }();
$(document).ready(function() {
        $(document.body).on("submit", ".app-chat-form-vendor", function(a) {
            a.preventDefault();
            var b = $(this),
                c = ($(this).data("type"), $(this).data("id")),
                d = $(this).find("textarea[name='comment']"),
                e = d.val();
            return $.ajax({
                type: "POST",
                url: "/tools/VendorsSolicRun",
                data: {
                    is_mobile: 1,
                    Comentario: e,
                    id_solicitud: c,
                    socketId: PusherManager.getSocketId()
                },
                success: function(a) {},
                beforeSend: function(a) {
                    var c = {
                        body: e,
                        published: "ahora"
                    };
                    PusherManager.replyChat($(b).closest(".app-chat-conversation").find(".app-conversation-parts"), c), d.val("")
                }
            }), !1
        }), $(document.body).on("submit", ".app-chat-form-user", function(a) {
            a.preventDefault();
            var b = $(this),
                c = ($(this).data("type"), $(this).data("id")),
                d = $(this).find("textarea[name='comment']"),
                e = d.val();
            return $.ajax({
                type: "POST",
                url: "/emp-AdminSolicitudesShowRun.php",
                data: {
                    Comentario: e,
                    id_solicitud: c,
                    socketId: PusherManager.getSocketId()
                },
                success: function(a) {},
                beforeSend: function(a) {
                    var c = {
                        body: e,
                        published: "ahora"
                    };
                    PusherManager.replyChat($(b).closest(".app-chat-conversation").find(".app-conversation-parts"), c), d.val("")
                }
            }), !1
        });
        $(document.body).on("submit", ".app-chat-form-concierge", function(a) {
            function b(a) {
                a || (a = c.closest(".app-chat-container-top").data("idconversation"));
                var b = $.ajax({
                    type: "POST",
                    url: "/pusher/pusherReply.php",
                    data: {
                        type: d,
                        idItem: e,
                        idConcierge: "admin",
                        comentario: g,
                        idConversation: a,
                        socketId: PusherManager.getSocketId(),
                        url: document.location.href
                    },
                    success: function(b) {
                        a || PusherManager.updateConversation(c, b.idConversation), 1 != b.statusConcierge && PusherManager.showLayerStatusConcierge(c, b.statusConcierge, b.conciergeAvatar)
                    }
                });
                return b
            }
            a.preventDefault();
            var c = $(this),
                d = $(this).data("type"),
                e = $(this).data("id"),
                f = $(this).find("textarea[name='comment']"),
                g = f.val(),
                h = $(this).closest(".app-chat-container-top").data("idconversation"),
                i = {
                    body: g
                };
            return PusherManager.replyChat(c.closest(".app-chat-conversation").find(".app-conversation-parts"), i), f.val(""), $(document).queue(function(a) {
                return function(c) {
                    b(a).then(c, c)
                }
            }(h)), !1
        }), $(document.body).on("submit", ".app-chat-form-concierge-vendor", function(a) {
            function b(a) {
                a || (a = c.closest(".app-chat-container-top").data("idconversation"));
                var b = $.ajax({
                    type: "POST",
                    url: "/pusher/pusherReply.php",
                    data: {
                        type: d,
                        idItem: e,
                        idConcierge: "admin",
                        comentario: g,
                        idConversation: a,
                        socketId: PusherManager.getSocketId(),
                        url: document.location.href
                    },
                    success: function(b) {
                        a || PusherManager.updateConversation(c, b.idConversation), 1 != b.statusConcierge && PusherManager.showLayerStatusConcierge(c, b.statusConcierge, b.conciergeAvatar)
                    }
                });
                return b
            }
            a.preventDefault();
            var c = $(this),
                d = $(this).data("type"),
                e = $(this).data("id"),
                f = $(this).find("textarea[name='comment']"),
                g = f.val(),
                h = $(this).closest(".app-chat-container-top").data("idconversation"),
                i = {
                    body: g
                };
            return PusherManager.replyChat(c.closest(".app-chat-conversation").find(".app-conversation-parts"), i), f.val(""), $(document).queue(function(a) {
                return function(c) {
                    b(a).then(c, c)
                }
            }(h)), !1
        })
    }),
    function(a) {
        a.titleAlert = function(b, c) {
            if (a.titleAlert._running && a.titleAlert.stop(), a.titleAlert._settings = c = a.extend({}, a.titleAlert.defaults, c), !c.requireBlur || !a.titleAlert.hasFocus) {
                c.originalTitleInterval = c.originalTitleInterval || c.interval, a.titleAlert._running = !0, a.titleAlert._initialText = document.title, document.title = b;
                var d = !0,
                    e = function() {
                        a.titleAlert._running && (d = !d, document.title = d ? b : a.titleAlert._initialText, a.titleAlert._intervalToken = setTimeout(e, d ? c.interval : c.originalTitleInterval))
                    };
                a.titleAlert._intervalToken = setTimeout(e, c.interval), c.stopOnMouseMove && a(document).mousemove(function(b) {
                    a(this).unbind(b), a.titleAlert.stop()
                }), c.duration > 0 && (a.titleAlert._timeoutToken = setTimeout(function() {
                    a.titleAlert.stop()
                }, c.duration))
            }
        }, a.titleAlert.defaults = {
            interval: 500,
            originalTitleInterval: null,
            duration: 0,
            stopOnFocus: !0,
            requireBlur: !1,
            stopOnMouseMove: !1
        }, a.titleAlert.stop = function() {
            a.titleAlert._running && (clearTimeout(a.titleAlert._intervalToken), clearTimeout(a.titleAlert._timeoutToken), document.title = a.titleAlert._initialText, a.titleAlert._timeoutToken = null, a.titleAlert._intervalToken = null, a.titleAlert._initialText = null, a.titleAlert._running = !1, a.titleAlert._settings = null)
        }, a.titleAlert.hasFocus = !0, a.titleAlert._running = !1, a.titleAlert._intervalToken = null, a.titleAlert._timeoutToken = null, a.titleAlert._initialText = null, a.titleAlert._settings = null, a.titleAlert._focus = function() {
            if (a.titleAlert.hasFocus = !0, a.titleAlert._running && a.titleAlert._settings.stopOnFocus) {
                var b = a.titleAlert._initialText;
                a.titleAlert.stop(), setTimeout(function() {
                    a.titleAlert._running || (document.title = ".", document.title = b)
                }, 1e3)
            }
        }, a.titleAlert._blur = function() {
            a.titleAlert.hasFocus = !1
        }, a(window).bind("focus", a.titleAlert._focus), a(window).bind("blur", a.titleAlert._blur)
    }(jQuery);