(this["webpackJsonpwl-test"] = this["webpackJsonpwl-test"] || []).push([[0], {
  108:  function (e, a, t) {
    e.exports = t(1398)
  },
  1398: function (e, a, t) {
    "use strict";
    t.r(a);
    var n = t(0), r = t.n(n), l = t(10), o = t.n(l), c = t(16), i = t(14), m = t(80), u = t(85), s = t(33), d = t(37),
        b = t.n(d), f = t(1450), h = t(1454), E = t(1453), p = t(1449), g = t(1451), v = t(1452), j = t(1436),
        O = t(1467), y = t(1458), C = t(71), x = t(1446), k = t(84), N = t.n(k), w = t(42), S = t(1462), W = t(1439),
        D = t(1440), T = t(1441), M = t(1442), F = t(1443), P = t(1402), A = t(1403), I = t(1407), Y = t(1465),
        B = t(1405), V = t(1404), G = t(1463), J = t(1448), z = t(1459), L = t(1445), U = t(1457), q = function (e) {
          var a = e.onAdd, t = e.onCancel, l = Object(n.useState)({
                dob:        null,
                experience: "",
                fName:      "",
                gender:     "",
                job:        "",
                lName:      ""
              }), o = Object(c.a)(l, 2), i = o[0], m = o[1], u = Object(n.useState)(!0), d = Object(c.a)(u, 2), b = d[0],
              f = d[1], h = Object(n.useState)(!1), E = Object(c.a)(h, 2), p = E[0], g = E[1], v = Object(n.useState)(!1),
              j = Object(c.a)(v, 2), O = j[0], C = j[1], k = Object(n.useState)(null), N = Object(c.a)(k, 2), q = N[0],
              H = N[1];
          Object(n.useEffect)((function () {
            return function () {
              null != q && clearTimeout(q)
            }
          }), [q]), Object(n.useEffect)((function () {
            var e = window.setTimeout((function () {
              f(!1)
            }), Math.floor(3e3 * Math.random()));
            H(e)
          }), []), Object(n.useEffect)((function () {
            setTimeout((function () {
              g(null != i.dob)
            }), 0)
          }), [i.dob]);
          var K = Object(n.useCallback)((function () {
            if (Object.values(i).some((function (e) {
              return !e
            }))) C(!0); else {
              f(!0);
              var e = window.setTimeout((function () {
                f(!1), a(i)
              }), Math.floor(1e4 * Math.random()));
              H(e)
            }
          }), [i, a]), Q = Object(n.useCallback)((function (e) {
            return function (a) {
              var t = a.target.value;
              m((function (a) {
                return Object(s.a)({}, a, Object(w.a)({}, e, t))
              }))
            }
          }), []), R = function (e) {
            return O && !i[e]
          }, X = Object(n.useCallback)((function (e) {
            m((function (a) {
              return Object(s.a)({}, a, {dob: (null === e || void 0 === e ? void 0 : e.toDate()) || null})
            }))
          }), []);
          return r.a.createElement(S.a, {
            open:      !0,
            onClose:   t,
            fullWidth: !0,
            maxWidth:  "sm"
          }, r.a.createElement(W.a, {id: "form-dialog-title"}, "Add User"), b && r.a.createElement(y.a, {
            display:        "flex",
            alignItems:     "center",
            justifyContent: "center",
            pb:             3
          }, r.a.createElement(D.a, null)), !b && r.a.createElement(r.a.Fragment, null, r.a.createElement(T.a, null, r.a.createElement(M.a, null, "Check all fields before click on Save button"), r.a.createElement(y.a, null, r.a.createElement(F.a, {
            error:      R("fName"),
            helperText: R("fName") && "Should be filled",
            autoFocus:  !0,
            label:      "First Name",
            type:       "text",
            fullWidth:  !0,
            margin:     "normal",
            value:      i.fName,
            onChange:   Q("fName")
          }), r.a.createElement(F.a, {
            error:      R("lName"),
            helperText: R("lName") && "Should be filled",
            label:      "Last Name",
            type:       "text",
            fullWidth:  !0,
            margin:     "normal",
            value:      i.lName,
            onChange:   Q("lName")
          }), r.a.createElement(P.a, {
            error:     R("job"),
            margin:    "normal",
            fullWidth: !0
          }, r.a.createElement(A.a, {id: "job-label"}, "Job position"), r.a.createElement(I.a, {
            labelId:  "job-label",
            value:    i.job,
            onChange: Q("job")
          }, r.a.createElement(Y.a, {value: "Director"}, "Director"), r.a.createElement(Y.a, {value: "Accountant"}, "Accountant"), r.a.createElement(Y.a, {value: "Engineer"}, "Engineer")), R("job") && r.a.createElement(B.a, null, "Should be filled")), r.a.createElement(U.a, {
            error:      R("dob"),
            helperText: R("dob") && "Should be filled",
            fullWidth:  !0,
            margin:     "normal",
            label:      "Birthday",
            format:     "MM/DD/yyyy",
            value:      i.dob,
            onChange:   X
          }), p && r.a.createElement(F.a, {
            error: R("experience"),
            helperText: R("experience") && "Should be filled",
            label: "Work Experience (years)",
            type: "number",
            fullWidth: !0,
            InputProps: {
              inputProps: {
                max: 30,
                min: 0
              }
            },
            margin: "normal",
            value: i.experience,
            onChange: Q("experience")
          }), r.a.createElement(P.a, {
            error:     R("gender"),
            margin:    "normal",
            component: "fieldset"
          }, r.a.createElement(V.a, {component: "legend"}, "Gender"), r.a.createElement(G.a, {
            row:      !0,
            name:     "gender",
            value:    i.gender,
            onChange: Q("gender")
          }, r.a.createElement(J.a, {
            value:   "female",
            control: r.a.createElement(z.a, null),
            label:   "Female"
          }), r.a.createElement(J.a, {
            value:   "male",
            control: r.a.createElement(z.a, null),
            label:   "Male"
          }), r.a.createElement(J.a, {
            value:   "other",
            control: r.a.createElement(z.a, null),
            label:   "Other"
          })), R("gender") && r.a.createElement(B.a, null, "Should be filled")))), r.a.createElement(L.a, null, r.a.createElement(x.a, {
            onClick: t,
            color:   "secondary",
            variant: "contained"
          }, "Cancel"), r.a.createElement(x.a, {
            onClick: K,
            color:   "primary",
            variant: "contained"
          }, "Add"))))
        }, H = {
          email: "",
          name: "",
          phone1: "",
          phone2: "",
          desc: "",
          workers: []
        }, K = r.a.createContext(H), Q = r.a.createContext((function () {
        })), R = function (e) {
          var a = e.children, t = Object(n.useState)(H), l = Object(c.a)(t, 2), o = l[0], i = l[1];
          return r.a.createElement(K.Provider, {value: o}, r.a.createElement(Q.Provider, {value: i}, a))
        }, X = t(1444), Z = t(67), $ = t(1460), _ = Object(X.a)((function (e) {
          return Object(O.a)({
            delete: {
              cursor: "pointer",
              color: Z.a[500],
              "&:hover": {color: Z.a[600]}
            },
            hasError: {
              fontStyle:  "italic",
              fontWeight: "bold",
              color:      Z.a[500]
            }
          })
        })), ee = function (e) {
          var a = e.isValidate, t = Object(n.useCallback)((function (e, t, n) {
                if (!a) return !1;
                var r = data.workers[e];
                return null != r[t] && r[t] !== n
              }), [a]), l = _(), o = Object(n.useContext)(K).workers, i = Object(n.useContext)(Q), m = Object(n.useState)(!1),
              d = Object(c.a)(m, 2), O = d[0], k = d[1], w = Object(n.useCallback)((function () {
                k(!0)
              }), []), S = Object(n.useCallback)((function () {
                k(!1)
              }), []), W = Object(n.useCallback)((function (e) {
                i((function (a) {
                  return Object(s.a)({}, a, {workers: [].concat(Object(u.a)(a.workers), [e])})
                })), k(!1)
              }), [i]), D = Object(n.useCallback)((function (e) {
                i((function (a) {
                  return Object(s.a)({}, a, {
                    workers: a.workers.filter((function (a) {
                      return a !== e
                    }))
                  })
                }))
              }), [i]);
          return r.a.createElement(j.a, {
            elevation: 1,
            style: {marginTop: "15px"}
          }, r.a.createElement(y.a, {p: 3}, r.a.createElement(C.a, {variant: "h5"}, "Workers"), r.a.createElement(p.a, null, a && o.length !== data.workers.length && r.a.createElement($.a, {severity: "error"}, "Not all workers filled. Expected: ", data.workers.length, ", filled: ", o.length), r.a.createElement(f.a, {size: "small"}, r.a.createElement(g.a, null, r.a.createElement(v.a, null, r.a.createElement(E.a, null, "Full Name"), r.a.createElement(E.a, {align: "right"}, "Date of Birth"), r.a.createElement(E.a, {align: "right"}, "Profession"), r.a.createElement(E.a, {align: "right"}, "Experience"), r.a.createElement(E.a, {align: "right"}, "Gender"), r.a.createElement(E.a, {align: "right"}))), r.a.createElement(h.a, null, o.map((function (e, a) {
            return r.a.createElement(v.a, {key: a}, r.a.createElement(E.a, {
              component: "th",
              scope:     "row",
              className: t(a, "firstName", e.fName) || t(a, "lastName", e.lName) ? l.hasError : void 0
            }, "".concat(e.fName, " ").concat(e.lName)), r.a.createElement(E.a, {
              align:     "right",
              className: t(a, "dob", b()(e.dob).format("yyyy-MM-DD")) ? l.hasError : void 0
            }, e.dob ? b()(e.dob).format("DD/MM/yyyy") : ""), r.a.createElement(E.a, {
              align:     "right",
              className: t(a, "job", e.job) ? l.hasError : void 0
            }, e.job), r.a.createElement(E.a, {
              align:     "right",
              className: t(a, "experience", e.experience) ? l.hasError : void 0
            }, e.experience), r.a.createElement(E.a, {
              align:     "right",
              className: t(a, "gender", e.gender) ? l.hasError : void 0
            }, e.gender), r.a.createElement(E.a, {align: "right"}, r.a.createElement(y.a, {
              display:        "flex",
              justifyContent: "flex-end"
            }, r.a.createElement(N.a, {
              className: l.delete,
              onClick:   function () {
                return D(e)
              }
            }))))
          }))))), r.a.createElement(y.a, {
            display:        "flex",
            justifyContent: "flex-end",
            mt:             2
          }, r.a.createElement(x.a, {
            variant: "contained",
            color:   "primary",
            onClick: w
          }, "Add")), O && r.a.createElement(q, {
            onAdd:    W,
            onCancel: S
          })))
        }, ae = t(1455), te = Object(X.a)((function (e) {
          return Object(O.a)({
            fab: {
              position: "absolute",
              top: e.spacing(2),
              right: e.spacing(2),
              color: e.palette.common.white,
              backgroundColor: Z.a[500],
              "&:hover": {backgroundColor: Z.a[600]},
              zIndex: 1400
            }
          })
        }));

    function ne() {
      var e = te();
      return r.a.createElement(ae.a, {
        color:     "primary",
        className: e.fab
      }, "Fill")
    }

    var re = t(70), le = t.n(re);

    function oe(e) {
      var a = e.isValidate, t = Object(n.useContext)(K), l = t.name, o = t.email, c = t.phone1, i = t.phone2,
          m = t.desc, u = Object(n.useContext)(Q), d = Object(n.useCallback)((function (e) {
            return function (a) {
              var t = a.target.value;
              u((function (a) {
                return Object(s.a)({}, a, Object(w.a)({}, e, t))
              }))
            }
          }), [u]), b = function (e) {
            var n;
            if (!a) return !1;
            var r, l, o = function (e) {
              return e.replace(/[()-]/g, "")
            };
            switch (e) {
              case"phone1":
                r = "firstPhone", l = o(t.phone1);
                break;
              case"phone2":
                r = "secondaryPhone", l = o(t.phone2);
                break;
              default:
                r = e, l = t[e]
            }
            return l !== (("desc" === e ? null === (n = window.data[r]) || void 0 === n ? void 0 : n.substr(0, 20) : window.data[r]) || "")
          };
      return r.a.createElement(j.a, {elevation: 1}, r.a.createElement(y.a, {p: 3}, r.a.createElement(C.a, {variant: "h5"}, "General Info"), r.a.createElement(F.a, {
        error:      b("name"),
        helperText: b("name") && "Filling not valid",
        fullWidth:  !0,
        label:      "Name",
        value:      l,
        onChange:   d("name")
      }), r.a.createElement(F.a, {
        error:      b("email"),
        helperText: b("email") && "Filling not valid",
        fullWidth:  !0,
        label:      "Email",
        type:       "email",
        value:      o,
        onChange:   d("email")
      }), r.a.createElement(le.a, {
        mask:     "(999) 999-99-99",
        value:    c,
        onChange: d("phone1")
      }, (function () {
        return r.a.createElement(F.a, {
          label:      "Primary phone",
          fullWidth:  !0,
          error:      b("phone1"),
          helperText: b("phone1") && "Filling not valid"
        })
      })), r.a.createElement(le.a, {
        mask:     "(999) 999-99-99",
        value:    i,
        onChange: d("phone2")
      }, (function () {
        return r.a.createElement(F.a, {
          label:      "Secondary phone",
          fullWidth:  !0,
          error:      b("phone2"),
          helperText: b("phone2") && "Filling not valid"
        })
      })), r.a.createElement(F.a, {
        error:      b("desc"),
        helperText: b("desc") && "Filling not valid",
        fullWidth:  !0,
        label:      "Business Description",
        value:      m,
        onChange:   d("desc"),
        inputProps: {maxLength: 20}
      })))
    }

    var ce = t(1456);

    function ie() {
      var e = Object(n.useState)(!1), a = Object(c.a)(e, 2), t = a[0], l = a[1],
          o = Object(n.useCallback)((function () {
            l(!0)
          }), [l]);
      return r.a.createElement(i.a, {utils: m.a}, r.a.createElement(R, null, r.a.createElement(ce.a, {maxWidth: "md"}, r.a.createElement(oe, {isValidate: t}), r.a.createElement(ee, {isValidate: t}), r.a.createElement(y.a, {
        mt:             2,
        display:        "flex",
        justifyContent: "center"
      }, r.a.createElement(x.a, {
        variant: "contained",
        color:   "secondary",
        onClick: o
      }, "Check Form")))), r.a.createElement(ne, null))
    }

    var me = t(15), ue = t.n(me);

    function se(e) {
      return ue.a.random.arrayElement([null, e])
    }

    function de() {
      var e = {
        firstName:  ue.a.name.firstName(),
        lastName:   ue.a.name.lastName(),
        dob:        b()(ue.a.date.past(20, new Date(2e3, 0, 1))).format("YYYY-MM-DD"),
        experience: ue.a.random.number(20).toString(),
        gender:     ue.a.random.arrayElement(["male", "female", "other"]),
        job:        ue.a.random.arrayElement(["Director", "Accountant", "Engineer"])
      };
      return Object.fromEntries(Object.entries(e).map((function (e) {
        var a = Object(c.a)(e, 2);
        return [a[0], se(a[1])]
      })))
    }

    window.data = {
      name:           ue.a.company.companyName(),
      email:          se(ue.a.internet.email()),
      firstPhone:     se(ue.a.phone.phoneNumber("### #######")),
      secondaryPhone: se(ue.a.phone.phoneNumber("### #######")),
      desc:           se(ue.a.lorem.sentence()),
      workers:        Array(ue.a.random.number(10)).fill(null).map(de)
    }, o.a.render(r.a.createElement(ie, null), document.getElementById("root"))
  }
}, [[108, 1, 2]]]);
