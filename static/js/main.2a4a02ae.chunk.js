(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,a,t){e.exports={wrapper:"ExpenseDetail_wrapper__2PDeq",row:"ExpenseDetail_row__2RLyU",description:"ExpenseDetail_description__1MzQY",date:"ExpenseDetail_date__1fMkN"}},12:function(e,a,t){e.exports={wrapper:"Home_wrapper__1yaD0",header:"Home_header__2kEis",photo:"Home_photo__1vTJi",wrapperMain:"Home_wrapperMain___xk0I"}},13:function(e,a,t){e.exports={container:"AddUser_container__3bN4c",header:"AddUser_header__1zoA9",form:"AddUser_form__uZBpr",inputName:"AddUser_inputName__2gPzp"}},16:function(e,a,t){e.exports={wrapper:"Balances_wrapper__3MHPh",title:"Balances_title__1Bpys",list:"Balances_list__4JNNq"}},17:function(e,a,t){e.exports={wrapper:"Welcome_wrapper__1teJ-",message:"Welcome_message__2lgW4",addPeopleLink:"Welcome_addPeopleLink__3-bnm"}},23:function(e,a,t){e.exports={footer:"Footer_footer__2QXh3",freepik:"Footer_freepik__rNPLg"}},28:function(e,a,t){e.exports={btn:"Button_btn__1hdG6"}},33:function(e,a,t){},44:function(e,a,t){"use strict";t.r(a);var s=t(1),n=t(24),r=t.n(n),c=(t(33),t(12)),i=t.n(c),l=t.p+"static/media/friends.8fd0a22b.jpg",d=t(3),o=t(15);function j(){return u()}function p(e){var a=u();a.push(e),function(e){localStorage.setItem("friends",JSON.stringify(e))}(a)}function u(){var e=localStorage.getItem("friends");return null===e?[]:JSON.parse(e)}function x(e){var a=m();a.push(e),function(e){localStorage.setItem("expenses",JSON.stringify(e))}(a)}function b(){var e,a=0,t=Object(o.a)(m());try{for(t.s();!(e=t.n()).done;){a+=e.value.amount}}catch(s){t.e(s)}finally{t.f()}return a}function h(){var e,a=j(),t=b()/a.length,s={},n=Object(o.a)(a);try{for(n.s();!(e=n.n()).done;){s[e.value]=0}}catch(h){n.e(h)}finally{n.f()}var r,c=Object(o.a)(m());try{for(c.s();!(r=c.n()).done;){var i=r.value;s[i.friend]+=i.amount}}catch(h){c.e(h)}finally{c.f()}for(var l=[],d=0,p=Object.keys(s);d<p.length;d++){var u=p[d],x=s[u]-t;l.push({friend:u,amount:x})}return l}function m(){var e=localStorage.getItem("expenses");return null===e?[]:JSON.parse(e)}var _=t(9),O=t.n(_);function f(e){return e.toLocaleString("es-ES",{style:"currency",currency:"EUR"})}var v=t(10),N=t.n(v),w=t(25),g=t.n(w),y=t(0);var E=function(e){var a=e.expense;return Object(y.jsxs)("div",{className:N.a.wrapper,children:[Object(y.jsxs)("div",{className:N.a.row,children:[Object(y.jsx)("div",{children:a.friend}),Object(y.jsx)(g.a,{fromNow:!0,className:N.a.date,children:a.date})]}),Object(y.jsxs)("div",{className:N.a.row,children:[Object(y.jsxs)("span",{children:[Object(y.jsx)("i",{className:"fas fa-receipt"}),Object(y.jsxs)("span",{className:N.a.description,children:[" ",a.description," "]})]}),Object(y.jsx)("div",{children:f(a.amount)})]})]})};var k=function(){return Object(y.jsxs)("section",{className:O.a.wrapper,children:[Object(y.jsxs)("div",{className:O.a.header,children:[Object(y.jsx)("h2",{className:O.a.title,children:"Expenses"}),Object(y.jsx)(d.c,{to:"/add-expense",className:O.a.expenseLink,children:"Add expense"})]}),m().sort((function(e,a){return e.date>a.date?-1:e.date<a.date?1:0})).map((function(e,a){return Object(y.jsx)(E,{expense:e},a)})),Object(y.jsxs)("div",{className:O.a.totalExpenses,children:[Object(y.jsx)("span",{children:"Total: "}),Object(y.jsx)("strong",{children:f(b())})]})]})},A=t(16),U=t.n(A);var S=function(){return Object(y.jsxs)("section",{className:U.a.wrapper,children:[Object(y.jsx)("h2",{className:U.a.title,children:"Balances"}),h().map((function(e,a){return Object(y.jsxs)("div",{className:U.a.list,children:[Object(y.jsx)("div",{children:e.friend}),Object(y.jsx)("div",{children:f(e.amount)})]},a)}))]})},L=t(23),M=t.n(L);var B=function(){return Object(y.jsxs)("footer",{className:M.a.footer,children:[Object(y.jsxs)("div",{children:["Made with ",Object(y.jsx)("i",{className:"fas fa-heart"})," by Yosiris Mari\xf1ez"]}),Object(y.jsx)("a",{href:"http://www.freepik.com",className:M.a.freepik,children:"Image designed by pikisuperstar / Freepik"})]})},I=t(8),J=t.n(I);var P=function(){return Object(y.jsxs)("section",{className:J.a.wrapper,children:[Object(y.jsxs)("div",{className:J.a.header,children:[Object(y.jsx)("h2",{className:J.a.title,children:"Users"}),Object(y.jsx)(d.c,{to:"/add-user",className:J.a.addUsersLink,children:"Add User"})]}),Object(y.jsx)("div",{className:J.a.list,children:j().map((function(e,a){return Object(y.jsx)("div",{children:Object(y.jsx)(d.c,{to:"/add-expense",className:J.a.listName,children:e})},a)}))})]})},D=t(17),q=t.n(D);var H=function(){return Object(y.jsxs)("div",{className:q.a.wrapper,children:[Object(y.jsx)("h1",{children:"Welcome to SharedExpenses!"}),Object(y.jsx)("p",{className:q.a.message,children:"In order to create expenses you need to add people first."}),Object(y.jsxs)(d.c,{to:"/add-user",className:q.a.addPeopleLink,children:[Object(y.jsx)("i",{className:"fas fa-users"})," Add people"]})]})};var C=function(){return Object(y.jsxs)("div",{className:i.a.wrapper,children:[Object(y.jsx)("header",{className:i.a.header,children:Object(y.jsx)("img",{src:l,className:i.a.photo,alt:"friends"})}),Object(y.jsx)("main",{className:i.a.wrapperMain,children:0===j().length?Object(y.jsx)(H,{}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(P,{}),Object(y.jsx)(k,{}),Object(y.jsx)(S,{})]})}),Object(y.jsx)(B,{})]})},F=t(2),W=t(7),Y=t(13),z=t.n(Y),Q=t(28),R=t.n(Q);var T=function(e){var a=e.label,t=e.type,s=void 0===t?"button":t,n=e.onClick,r=void 0===n?function(){}:n;return Object(y.jsx)("button",{type:s,className:R.a.btn,onClick:r,children:a})};var G=function(){var e=Object(s.useState)(""),a=Object(W.a)(e,2),t=a[0],n=a[1],r=Object(F.g)();return Object(y.jsxs)("div",{className:z.a.container,children:[Object(y.jsxs)("header",{className:z.a.header,children:[Object(y.jsx)(d.c,{to:"/home",children:Object(y.jsx)("i",{className:"fas fa-arrow-left"})}),Object(y.jsx)("h1",{children:"Add User "})]}),Object(y.jsxs)("form",{onSubmit:function(e){e.preventDefault(),p(t),r.push("/home")},className:z.a.form,children:[Object(y.jsx)("i",{className:"fas fa-user"}),Object(y.jsx)("input",{className:z.a.inputName,placeholder:"Name",required:!0,type:"text",value:t,onChange:function(e){return n(e.target.value)},autoFocus:!0}),Object(y.jsx)(T,{label:"Add",type:"submit"})]})]})},X=t(6),Z=t.n(X),K=t(20),V=t.n(K);var $=function(){var e=V()().format("YYYY-MM-DDTHH:mm"),a=Object(F.g)(),t=Object(s.useState)(""),n=Object(W.a)(t,2),r=n[0],c=n[1],i=Object(s.useState)(""),l=Object(W.a)(i,2),o=l[0],p=l[1],u=Object(s.useState)(e),b=Object(W.a)(u,2),h=b[0],m=b[1],_=Object(s.useState)(""),O=Object(W.a)(_,2),f=O[0],v=O[1];return Object(y.jsxs)("div",{className:Z.a.container,children:[Object(y.jsxs)("header",{className:Z.a.header,children:[Object(y.jsx)(d.c,{to:"/home",children:Object(y.jsx)("i",{className:"fas fa-arrow-left"})}),Object(y.jsx)("h1",{children:"Add Expenses "})]}),Object(y.jsxs)("form",{onSubmit:function(e){e.preventDefault(),x({friend:r,amount:parseFloat(o),date:h,description:f}),a.push("/home")},className:Z.a.form,children:[Object(y.jsx)("input",{className:Z.a.date,required:!0,type:"datetime-local",max:e,value:h,onChange:function(e){return m(e.target.value)}}),Object(y.jsxs)("label",{className:Z.a.label,children:[Object(y.jsx)("span",{children:"User"}),Object(y.jsxs)("select",{className:Z.a.selectOption,onChange:function(e){return c(e.target.value)},value:r,required:!0,children:[Object(y.jsx)("option",{value:""}),j().map((function(e,a){return Object(y.jsx)("option",{value:e,children:e},a)}))]})]}),Object(y.jsxs)("label",{className:Z.a.label,children:[Object(y.jsx)("span",{children:"Amount"}),Object(y.jsxs)("div",{className:Z.a.amountBox,children:[Object(y.jsx)("input",{className:Z.a.amount,required:!0,type:"number",min:"0.01",step:"0.01",placeholder:"0.0",value:o,onChange:function(e){return p(e.target.value)}}),Object(y.jsx)("span",{className:Z.a.currency,children:"\u20ac"})]})]}),Object(y.jsxs)("label",{className:Z.a.label,children:[Object(y.jsx)("span",{children:"Concept"}),Object(y.jsx)("input",{placeholder:"Restaurant",className:Z.a.description,required:!0,type:"text",value:f,onChange:function(e){return v(e.target.value)}})]}),Object(y.jsx)(T,{label:"Add",type:"submit"})]})]})};var ee=function(){return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(d.a,{children:Object(y.jsxs)(F.d,{children:[Object(y.jsx)(F.b,{path:"/home",component:C}),Object(y.jsx)(F.b,{path:"/add-user",component:G}),Object(y.jsx)(F.b,{path:"/add-expense",component:$}),Object(y.jsx)(F.a,{to:"/home"})]})})})};r.a.render(Object(y.jsx)(d.b,{children:Object(y.jsx)(ee,{})}),document.getElementById("root"))},6:function(e,a,t){e.exports={container:"AddExpense_container__3M0Wl",header:"AddExpense_header__iIKyh",form:"AddExpense_form__3uOyf",date:"AddExpense_date__khaUo",label:"AddExpense_label__1Nu7W",amountBox:"AddExpense_amountBox__ZnuA_",amount:"AddExpense_amount__3LVNF",currency:"AddExpense_currency__wwLJ9",description:"AddExpense_description__Oj0wt",selectOption:"AddExpense_selectOption__16Q95"}},8:function(e,a,t){e.exports={wrapper:"Users_wrapper__2q_ke",header:"Users_header__1v6pf",title:"Users_title__3u8y-",addUsersLink:"Users_addUsersLink__2GMeX",list:"Users_list__P1vP5",listName:"Users_listName__3f3IJ"}},9:function(e,a,t){e.exports={wrapper:"Expenses_wrapper__1vzbH",header:"Expenses_header__wHbi9",title:"Expenses_title__b5o8I",expenseLink:"Expenses_expenseLink__2qPpP",totalExpenses:"Expenses_totalExpenses__1w7vb"}}},[[44,1,2]]]);
//# sourceMappingURL=main.2a4a02ae.chunk.js.map