(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{80:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(45),i=n.n(a),s=n(46),u="csrf-token",o="CSRF-Token";function j(e){var t;return null===(t=document.cookie.split("; ").find((function(t){return(null===t||void 0===t?void 0:t.split("=")[0])===e})))||void 0===t?void 0:t.split("=")[1]}var d=n.n(s).a.create({headers:[{name:o,value:j(u)}].reduce((function(e,t){return t.value&&(e[t.name]=t.value),e}),{})}),b=d,l=n(28),h=n(84),O=n(7),p=n(1);var m=function(e){var t=e.icecream,n=e.onSubmit,c={flavour:t?t.flavour:""};return Object(p.jsx)(O.c,{initialValues:c,validate:function(){return{}},onSubmit:n,children:function(e){var t=e.isSubmitting;return Object(p.jsxs)(O.b,{children:[Object(p.jsx)(O.a,{type:"text",name:"flavour",placeholder:"Flavour"}),Object(p.jsx)("button",{type:"submit",disabled:t,children:"Submit"})]})}})},v=n(6);var f=function(){var e=Object(l.b)(),t=Object(v.f)(),n=Object(h.a)((function(e){return b.post("/api/v1/icecreams",e)}),{onSuccess:function(){e.invalidateQueries("icecreams")}});return Object(p.jsx)(m,{onSubmit:function(e,c){var r=c.setSubmitting;n.mutate(e),null===r||void 0===r||r(!1),t.push("/icecreams")}})},x=n(83);function g(e){var t=e.icecream,n=e.handleEdit,c=e.handleDelete,r=e.handleDetail;return Object(p.jsxs)(p.Fragment,{children:[t.flavour,Object(p.jsx)("br",{}),Object(p.jsx)("button",{type:"button",onClick:function(){return r(t)},children:"detail"}),Object(p.jsx)("button",{type:"button",onClick:function(){return n(t)},children:"edit"}),Object(p.jsx)("button",{type:"button",onClick:function(){return c(t)},children:"delete"})]})}var S=function(){var e,t,n=Object(v.f)(),c=Object(l.b)(),r=Object(x.a)("icecreams",(function(){return b.get("/api/v1/icecreams").then((function(e){return e.data}))})),a=Object(h.a)((function(e){var t=e.id;return b.delete("/api/v1/icecreams/".concat(t))}),{onSuccess:function(){c.invalidateQueries("icecreams")}}),i=function(e){var t=e.id;n.push("/icecreams/update/".concat(t))},s=function(e){var t=e.id;a.mutate({id:t})},u=function(e){var t=e.id;n.push("/icecreams/detail/".concat(t))};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("p",{children:[null===(e=r.data)||void 0===e?void 0:e.length," icecreams"]}),Object(p.jsx)("ul",{children:null===(t=r.data)||void 0===t?void 0:t.map((function(e){return Object(p.jsx)("li",{children:Object(p.jsx)(g,{icecream:e,handleDelete:s,handleEdit:i,handleDetail:u})},e.id)}))})]})};var w=function(){var e=Object(v.g)().id,t=Object(x.a)(["icecreams",e],(function(){return b.get("/api/v1/icecreams/".concat(e)).then((function(e){return e.data}))})),n=t.data;if(t.isLoading)return Object(p.jsx)("div",{children:"Loading..."});var c=n;return Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{children:c.flavour}),Object(p.jsx)("br",{})]})};var y=function(){var e=Object(v.g)().id,t=Object(l.b)(),n=Object(v.f)(),c=Object(x.a)(["icecreams",e],(function(){return b.get("/api/v1/icecreams/".concat(e)).then((function(e){return e.data}))})),r=c.data,a=c.isLoading,i=Object(h.a)((function(t){return b.put("/api/v1/icecreams/".concat(e),t).then((function(e){return e.data}))}),{onSuccess:function(){t.invalidateQueries("icecreams")}});if(a)return Object(p.jsx)("div",{children:"Loading..."});var s=r;return Object(p.jsx)(m,{icecream:s,onSubmit:function(e,t){var c=t.setSubmitting;i.mutate(e),null===c||void 0===c||c(!1),n.push("/icecreams")}})};var k=function(e){var t=e.user,n=e.onSubmit,c={username:t?t.username:"",passwordHash:t?t.passwordHash:""};return Object(p.jsx)(O.c,{initialValues:c,validate:function(){return{}},onSubmit:n,children:function(e){var t=e.isSubmitting;return Object(p.jsxs)(O.b,{children:[Object(p.jsx)(O.a,{type:"text",name:"username",placeholder:"Username"}),Object(p.jsx)(O.a,{type:"text",name:"passwordHash",placeholder:"PasswordHash"}),Object(p.jsx)("button",{type:"submit",disabled:t,children:"Submit"})]})}})};var C=function(){var e=Object(l.b)(),t=Object(v.f)(),n=Object(h.a)((function(e){return b.post("/api/v1/users",e)}),{onSuccess:function(){e.invalidateQueries("users")}});return Object(p.jsx)(k,{onSubmit:function(e,c){var r=c.setSubmitting;n.mutate(e),null===r||void 0===r||r(!1),t.push("/users")}})};function L(e){var t=e.user,n=e.handleEdit,c=e.handleDelete,r=e.handleDetail;return Object(p.jsxs)(p.Fragment,{children:[t.username,Object(p.jsx)("br",{}),Object(p.jsx)("button",{type:"button",onClick:function(){return r(t)},children:"detail"}),Object(p.jsx)("button",{type:"button",onClick:function(){return n(t)},children:"edit"}),Object(p.jsx)("button",{type:"button",onClick:function(){return c(t)},children:"delete"})]})}var D=function(){var e,t,n=Object(v.f)(),c=Object(l.b)(),r=Object(x.a)("users",(function(){return b.get("/api/v1/users").then((function(e){return e.data}))})),a=Object(h.a)((function(e){var t=e.id;return b.delete("/api/v1/users/".concat(t))}),{onSuccess:function(){c.invalidateQueries("users")}}),i=function(e){var t=e.id;n.push("/users/update/".concat(t))},s=function(e){var t=e.id;a.mutate({id:t})},u=function(e){var t=e.id;n.push("/users/detail/".concat(t))};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("p",{children:[null===(e=r.data)||void 0===e?void 0:e.length," users"]}),Object(p.jsx)("ul",{children:null===(t=r.data)||void 0===t?void 0:t.map((function(e){return Object(p.jsx)("li",{children:Object(p.jsx)(L,{user:e,handleDelete:s,handleEdit:i,handleDetail:u})},e.id)}))})]})};var E=function(){var e=Object(v.g)().id,t=Object(x.a)(["users",e],(function(){return b.get("/api/v1/users/".concat(e)).then((function(e){return e.data}))})),n=t.data;if(t.isLoading)return Object(p.jsx)("div",{children:"Loading..."});var c=n;return Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{children:c.username}),Object(p.jsx)("br",{}),Object(p.jsx)("label",{children:c.passwordHash}),Object(p.jsx)("br",{})]})};var F=function(){var e=Object(v.g)().id,t=Object(l.b)(),n=Object(v.f)(),c=Object(x.a)(["users",e],(function(){return b.get("/api/v1/users/".concat(e)).then((function(e){return e.data}))})),r=c.data,a=c.isLoading,i=Object(h.a)((function(t){return b.put("/api/v1/users/".concat(e),t).then((function(e){return e.data}))}),{onSuccess:function(){t.invalidateQueries("users")}});if(a)return Object(p.jsx)("div",{children:"Loading..."});var s=r;return Object(p.jsx)(k,{user:s,onSubmit:function(e,t){var c=t.setSubmitting;i.mutate(e),null===c||void 0===c||c(!1),n.push("/users")}})},Q=n(23),H=n.n(Q),U=n(30),R=n(31);var I=function(){var e=Object(c.useState)(""),t=Object(R.a)(e,2),n=t[0],r=t[1],a=Object(v.f)(),i=Object(l.b)(),s=function(e,t){var n=t.setSubmitting;if(e.response&&e.response.data){var c=e.response.data.error;c&&r(c)}null===n||void 0===n||n(!1)},u=function(){var e=Object(U.a)(H.a.mark((function e(t,n){var c;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.setSubmitting,e.prev=1,e.next=4,b.post("/auth/login",t);case 4:return null===c||void 0===c||c(!1),e.next=7,i.invalidateQueries("user");case 7:a.push("/"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),s(e.t0,{setSubmitting:c});case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(p.jsx)(O.c,{initialValues:{username:"",password:""},validate:function(){return{}},onSubmit:u,children:function(e){var t=e.isSubmitting;return Object(p.jsxs)(O.b,{children:[Object(p.jsx)(O.a,{type:"text",name:"username",placeholder:"Username"}),Object(p.jsx)(O.a,{type:"password",name:"password",placeholder:"Password"}),n&&Object(p.jsx)("div",{children:n}),Object(p.jsx)("button",{type:"submit",disabled:t,children:"Login"})]})}})};var N=function(){var e=Object(c.useState)(""),t=Object(R.a)(e,2),n=t[0],r=t[1],a=function(){var e=Object(U.a)(H.a.mark((function e(t,n){var c,a;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.setSubmitting,e.prev=1,e.next=4,b.post("/auth/register",t);case 4:null===c||void 0===c||c(!1),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),e.t0.response&&e.t0.response.data&&(a=e.t0.response.data.error)&&r(a),null===c||void 0===c||c(!1);case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(p.jsx)(O.c,{initialValues:{username:"",email:"",password:"",passwordConfirm:""},validate:function(){return{}},onSubmit:a,children:function(e){var t=e.isSubmitting;return Object(p.jsxs)(O.b,{children:[Object(p.jsx)(O.a,{type:"text",name:"username",placeholder:"Username"}),Object(p.jsx)(O.a,{type:"text",name:"email",placeholder:"Email"}),Object(p.jsx)(O.a,{type:"password",name:"password",placeholder:"Password"}),Object(p.jsx)(O.a,{type:"password",name:"passwordConfirm",placeholder:"Confirm password"}),n&&Object(p.jsx)("div",{children:n}),Object(p.jsx)("button",{type:"submit",disabled:t,children:"Register"})]})}})},V=n(9);var P=function(){return Object(x.a)("user",(function(){return b.get("/auth/me")}),{retry:!1}).data,Object(c.useEffect)((function(){j(u)||d.get("/auth/csrf").then((function(){d.defaults.headers[o]=j(u)})).catch((function(e){console.warn("Received error while fetching CSRF token :",e)}))}),[]),Object(p.jsxs)(V.a,{children:[Object(p.jsx)("nav",{children:Object(p.jsxs)("ul",{className:"flex",children:[Object(p.jsxs)("li",{children:[Object(p.jsx)(V.b,{to:"/",children:"Home"}),Object(p.jsx)("br",{})]}),Object(p.jsxs)("li",{className:"ml-10",children:[Object(p.jsx)(V.b,{to:"/login",children:"Login"}),Object(p.jsx)("br",{}),Object(p.jsx)(V.b,{to:"/register",children:"Register"}),Object(p.jsx)("br",{})]}),Object(p.jsxs)("li",{className:"ml-10",children:[Object(p.jsx)(V.b,{to:"/icecreams",children:"Icecreams"}),Object(p.jsx)("br",{}),Object(p.jsx)(V.b,{to:"/icecreams/create",children:"Create a Icecream"}),Object(p.jsx)("br",{})]}),Object(p.jsxs)("li",{className:"ml-10",children:[Object(p.jsx)(V.b,{to:"/users",children:"Users"}),Object(p.jsx)("br",{}),Object(p.jsx)(V.b,{to:"/users/create",children:"Create a User"}),Object(p.jsx)("br",{})]})]})}),Object(p.jsxs)("main",{children:[Object(p.jsx)(v.a,{path:"/icecreams",children:Object(p.jsx)("h1",{children:"Icecreams"})}),Object(p.jsx)(v.a,{path:"/users",children:Object(p.jsx)("h1",{children:"Users"})}),Object(p.jsxs)(v.c,{children:[Object(p.jsx)(v.a,{path:"/icecreams/create",component:f}),Object(p.jsx)(v.a,{path:"/icecreams/update/:id",component:y}),Object(p.jsx)(v.a,{path:"/icecreams/detail/:id",component:w}),Object(p.jsx)(v.a,{path:"/icecreams",component:S}),",",Object(p.jsx)(v.a,{path:"/users/create",component:C}),Object(p.jsx)(v.a,{path:"/users/update/:id",component:F}),Object(p.jsx)(v.a,{path:"/users/detail/:id",component:E}),Object(p.jsx)(v.a,{path:"/users",component:D}),Object(p.jsx)(v.a,{path:"/login",component:I}),Object(p.jsx)(v.a,{path:"/register",component:N})]})]})]})},J=new(n(82).a);i.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(l.a,{client:J,children:Object(p.jsx)(P,{})})}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.82545e91.chunk.js.map