(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s,a=c(7),n=c.n(a),l=c(8),i=c(2),o=c(1),d=(c(13),c(14),c(6)),r=c.n(d),j=c(0),u=function(e){var t=e.todos,c=e.onTodoSelect,s=e.selectedTodo;return Object(j.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"#"}),Object(j.jsx)("th",{children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:"fas fa-check"})})}),Object(j.jsx)("th",{children:"Title"}),Object(j.jsx)("th",{children:" "})]})}),Object(j.jsx)("tbody",{children:t.map((function(e){var t=(null===s||void 0===s?void 0:s.id)===e.id;return Object(j.jsxs)("tr",{"data-cy":"todo",className:r()({"has-background-info-light":t}),children:[Object(j.jsx)("td",{className:"is-vcentered",children:e.id}),Object(j.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(j.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(j.jsx)("i",{className:"fas fa-check"})})}),Object(j.jsx)("td",{className:"is-vcentered is-expanded",children:Object(j.jsx)("p",{className:r()("has-text-success",{"has-text-danger":!e.completed}),children:e.title})}),Object(j.jsx)("td",{className:"has-text-right is-vcentered",children:Object(j.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return function(e){c(e)}(e)},children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:"".concat(t?"far fa-eye-slash":"far fa-eye")})})})})]},e.id)}))})]})};!function(e){e.All="all",e.Active="active",e.Completed="completed"}(s||(s={}));var b=function(e){var t=e.query,c=e.setQuery,a=e.setSelect;return Object(j.jsxs)("form",{className:"field has-addons",children:[Object(j.jsx)("p",{className:"control",children:Object(j.jsx)("span",{className:"select",children:Object(j.jsx)("select",{"data-cy":"statusSelect",onChange:function(e){a(e.target.value)},children:Object.values(s).map((function(e){return Object(j.jsx)("option",{value:e,children:e},e)}))})})}),Object(j.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(j.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(e){c(e.target.value)}}),Object(j.jsx)("span",{className:"icon is-left",children:Object(j.jsx)("i",{className:"fas fa-magnifying-glass"})}),t&&Object(j.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(j.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return c("")}})})]})]})},h=(c(16),function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(j.jsx)("div",{className:"Loader__content"})})});function m(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var O=function(e){var t=e.selectedTodo,c=e.setSelectedTodo,s=t.id,a=t.title,n=t.userId,l=t.completed,d=Object(o.useState)(null),r=Object(i.a)(d,2),u=r[0],b=r[1],O=Object(o.useState)(!1),x=Object(i.a)(O,2),f=x[0],v=x[1];return Object(o.useEffect)((function(){v(!0),function(e){return m("/users/".concat(e))}(n).then(b).catch((function(){throw new Error("No users")})).finally((function(){return v(!1)}))}),[n]),Object(j.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(j.jsx)("div",{className:"modal-background"}),f&&Object(j.jsx)(h,{}),!f&&u&&Object(j.jsxs)("div",{className:"modal-card",children:[Object(j.jsxs)("header",{className:"modal-card-head",children:[Object(j.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(s)}),Object(j.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return c(null)}})]}),Object(j.jsxs)("div",{className:"modal-card-body",children:[Object(j.jsx)("p",{className:"block","data-cy":"modal-title",children:a}),Object(j.jsxs)("p",{className:"block","data-cy":"modal-user",children:[l?Object(j.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(j.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(j.jsx)("a",{href:"mailto:".concat(null===u||void 0===u?void 0:u.email),children:null===u||void 0===u?void 0:u.name})]})]})]})]})},x=function(){var e=Object(o.useState)([]),t=Object(i.a)(e,2),c=t[0],a=t[1],n=Object(o.useState)(!1),d=Object(i.a)(n,2),r=d[0],x=d[1],f=Object(o.useState)(""),v=Object(i.a)(f,2),N=v[0],p=v[1],y=Object(o.useState)(s.All),g=Object(i.a)(y,2),S=g[0],k=g[1],T=Object(o.useState)(null),w=Object(i.a)(T,2),C=w[0],E=w[1];Object(o.useEffect)((function(){x(!0),m("/todos").then(a).finally((function(){return x(!1)}))}),[]);var _=Object(o.useMemo)((function(){var e=Object(l.a)(c);switch(N&&(e=e.filter((function(e){return e.title.toLowerCase().includes(N.toLowerCase())}))),S){case s.Active:return e.filter((function(e){return!e.completed}));case s.Completed:return e.filter((function(e){return e.completed}));default:return e}}),[N,c,S]);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"box",children:[Object(j.jsx)("h1",{className:"title",children:"Todos:"}),Object(j.jsx)("div",{className:"block",children:Object(j.jsx)(b,{query:N,setQuery:p,setSelect:k})}),Object(j.jsxs)("div",{className:"block",children:[r&&Object(j.jsx)(h,{}),Object(j.jsx)(u,{todos:_,onTodoSelect:E,selectedTodo:C})]})]})})}),C&&Object(j.jsx)(O,{selectedTodo:C,setSelectedTodo:E})]})};n.a.render(Object(j.jsx)(x,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.6f285630.chunk.js.map