(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{126:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var r=n(45),a=n(3),s="SEND_MESSAGE",c={dialogs:[{id:1,name:"Alita"},{id:2,name:"Misha"},{id:3,name:"Kamalia"},{id:4,name:"Zeus"},{id:5,name:"Prometey"}],messages:[{id:1,message:"Hi"},{id:2,message:"How your name is"},{id:3,message:"How are you"},{id:4,message:"Yo"},{id:5,message:"Yo"}]},i=function(e){return{type:s,newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:var n=t.newMessageBody;return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:6,message:n}])});default:return e}}},132:function(e,t,n){e.exports={userPhoto:"users_userPhoto__2SWHz",selectedPage:"users_selectedPage__20fny"}},135:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(3),a=n(1),s=n(28),c=n(29),i=n(31),o=n(30),u=n(0),l=n.n(u),d=n(12),j=n(11),f=function(e){return{isAuth:e.auth.isAuth}},b=function(e){var t=function(t){Object(i.a)(u,t);var n=Object(o.a)(u);function u(){return Object(s.a)(this,u),n.apply(this,arguments)}return Object(c.a)(u,[{key:"render",value:function(){return this.props.isAuth?Object(a.jsx)(e,Object(r.a)({},this.props)):Object(a.jsx)(j.a,{to:"/login"})}}]),u}(l.a.Component);return Object(d.b)(f)(t)}},15:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i}));var r=n(131),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"3178fc81-e726-4820-9e30-ead2321e7fe8"}}),s={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e))},unfollow:function(e){return a.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method. Plase profileAPI object."),c.getProfile(e)}},c={getProfile:function(e){return a.get("profile/"+e)},getStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status",{status:e})}},i={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("auth/login")}}},163:function(e,t,n){},167:function(e,t,n){},17:function(e,t,n){e.exports={nav:"Navbar_nav__1mhbM",item:"Navbar_item__20Vex",active:"Navbar_active__3ZOMq"}},191:function(e,t,n){},289:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(0),s=n.n(a),c=(n(163),n(64)),i=n.n(c),o=n(28),u=n(29),l=n(31),d=n(30),j=(n(167),n(17)),f=n.n(j),b=n(14),p=function(){return Object(r.jsxs)("nav",{className:f.a.nav,children:[Object(r.jsx)("div",{className:f.a.item,children:Object(r.jsx)(b.b,{to:"/profile",activeClassName:f.a.active,children:"Profile"})}),Object(r.jsx)("div",{className:f.a.item,children:Object(r.jsx)(b.b,{to:"/dialogs",activeClassName:f.a.active,children:"Massages"})}),Object(r.jsx)("div",{className:f.a.item,children:Object(r.jsx)(b.b,{to:"/users",activeClassName:f.a.active,children:"Users"})}),Object(r.jsx)("div",{className:f.a.item,children:Object(r.jsx)(b.b,{to:"/News",activeClassName:f.a.active,children:"News"})}),Object(r.jsx)("div",{className:f.a.item,children:Object(r.jsx)(b.b,{to:"/Music",activeClassName:f.a.active,children:"Music"})}),Object(r.jsx)("div",{className:f.a.item,children:Object(r.jsx)(b.b,{to:"/Settings",activeClassName:f.a.active,children:"Settings"})})]})},h=n(11),O=n(12),g=n(10),m=n.n(g),v=n(21),x=n(45),w=n(3),P=n(15),_=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(w.a)(Object(w.a)({},e),r):e}))},y="FOLLOW",S="UNFOLLOW",C="SET_USERS",N="SET_CURRENT_PAGE",I="SET_TOTAL_USERS_COUNT",E="TOGGLE_IS_FETCHING",k="TOGGLE_IS_FOLLOWING_PROGRESS",T={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},U=function(e){return{type:y,userId:e}},A=function(e){return{type:S,userId:e}},z=function(e){return{type:N,currentPage:e}},F=function(e){return{type:E,isFetching:e}},M=function(e,t){return{type:k,isFetching:e,userId:t}},L=function(){var e=Object(v.a)(m.a.mark((function e(t,n,r,a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(M(!0,n)),e.next=3,r(n);case 3:0==e.sent.data.resultCode&&t(a(n)),t(M(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(w.a)(Object(w.a)({},e),{},{users:_(e.users,t.userId,"id",{followed:!0})});case S:return Object(w.a)(Object(w.a)({},e),{},{users:_(e.users,t.userId,"id",{followed:!1})});case C:return Object(w.a)(Object(w.a)({},e),{},{users:t.users});case N:return Object(w.a)(Object(w.a)({},e),{},{currentPage:t.currentPage});case I:return Object(w.a)(Object(w.a)({},e),{},{totalUsersCount:t.count});case E:return Object(w.a)(Object(w.a)({},e),{},{isFetching:t.isFetching});case k:return Object(w.a)(Object(w.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(x.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},D=n(55),G=n(67),H=n(128),q=n(69),B=n.n(q),Y=function(e){for(var t=e.totalItemsCount,n=e.pageSize,s=e.onPageChanged,c=e.currentPage,i=e.portionSize,o=void 0===i?10:i,u=Math.ceil(t/n),l=[],d=1;d<=u;d++)l.push(d);var j=Math.ceil(u/o),f=Object(a.useState)(1),b=Object(H.a)(f,2),p=b[0],h=b[1],O=(p-1)*o+1,g=p*o;return Object(r.jsxs)("div",{className:B.a.paginator,children:[p>1&&Object(r.jsx)("button",{onClick:function(){h(p-1)},children:"Prev"}),l.filter((function(e){return e>=O&&e<=g})).map((function(e){return Object(r.jsx)("span",{className:(Object(G.a)({},B.a.selectedPage,c===e),B.a.pageNumber),onClick:function(t){s(e)},children:e},e)})),j>p&&Object(r.jsx)("button",{onClick:function(){h(p+1)},children:"Next"})]})},V=n(132),W=n.n(V),J=n.p+"static/media/user.a6143582.png",Z=function(e){var t=e.user,n=e.followingInProgress,a=e.unfollow,s=e.follow;return Object(r.jsxs)("div",{children:[Object(r.jsxs)("span",{children:[Object(r.jsx)("div",{children:Object(r.jsx)(b.b,{to:"/profile/"+t.id,children:Object(r.jsx)("img",{src:null!=t.photos.small?t.photos.small:J,className:W.a.userPhoto})})}),Object(r.jsx)("div",{children:t.followed?Object(r.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)},children:"Unfollow"}):Object(r.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){s(t.id)},children:"Follow"})})]}),Object(r.jsxs)("span",{children:[Object(r.jsxs)("span",{children:[Object(r.jsx)("div",{children:t.name}),Object(r.jsx)("div",{children:t.status})]}),Object(r.jsxs)("span",{children:[Object(r.jsx)("div",{children:"user.location.country"}),Object(r.jsx)("div",{children:"user.location.city"})]})]})]})},K=function(e){var t=e.currentPage,n=e.totalUsersCount,a=e.pageSize,s=e.onPageChanged,c=e.users,i=Object(D.a)(e,["currentPage","totalUsersCount","pageSize","onPageChanged","users"]);return Object(r.jsxs)("div",{children:[Object(r.jsx)(Y,{currentPage:t,onPageChanged:s,totalItemsCount:n,pageSize:a}),Object(r.jsx)("div",{children:c.map((function(e){return Object(r.jsx)(Z,{user:e,followingInProgress:i.followingInProgress,unfollow:i.unfollow,follow:i.follow},e.id)}))})]})},X=n.p+"static/media/preloader.d69c91b1.svg",Q=function(e){return Object(r.jsx)("div",{style:{backgroundColor:"white"},children:Object(r.jsx)("img",{src:X})})},$=(n(135),n(9)),ee=function(e){return e.usersPage.users},te=function(e){return e.usersPage.pageSize},ne=function(e){return e.usersPage.totalUsersCount},re=function(e){return e.usersPage.currentPage},ae=function(e){return e.usersPage.isFetching},se=function(e){return e.usersPage.followingInProgress},ce=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){var n=e.props.pageSize;e.props.requestUsers(t,n)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.requestUsers(t,n)}},{key:"render",value:function(){return Object(r.jsxs)(r.Fragment,{children:[this.props.isFetching?Object(r.jsx)(Q,{}):null,Object(r.jsx)(K,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),n}(s.a.Component),ie=Object($.d)(Object(O.b)((function(e){return{users:ee(e),pageSize:te(e),totalUsersCount:ne(e),currentPage:re(e),isFetching:ae(e),followingInProgress:se(e)}}),{follow:function(e){return function(){var t=Object(v.a)(m.a.mark((function t(n){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:L(n,e,P.c.follow.bind(P.c),U);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(v.a)(m.a.mark((function t(n){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:L(n,e,P.c.unfollow.bind(P.c),A);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:z,toggleFollowingProgress:M,requestUsers:function(e,t){return function(){var n=Object(v.a)(m.a.mark((function n(r){var a;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(F(!0)),r(z(e)),n.next=4,P.c.getUsers(e,t);case 4:a=n.sent,r(F(!1)),r((c=a.items,{type:C,users:c})),r((s=a.totalCount,{type:I,count:s}));case 8:case"end":return n.stop()}var s,c}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(ce),oe=n(93),ue=n.n(oe),le=function(e){return Object(r.jsxs)("header",{className:ue.a.header,children:[Object(r.jsx)("img",{src:"https://codesign.com.bd/conversations/content/images/2020/03/Sprint-logo-design-Codesign-agency.png"}),Object(r.jsx)("div",{className:ue.a.loginBlock,children:e.isAuth?Object(r.jsxs)("div",{children:[e.login," - ",Object(r.jsx)("button",{onClick:e.logout,children:"Logout"})]}):Object(r.jsx)(b.b,{to:"/login",children:"Login"})})]})},de=n(38),je="network/auth/SET_USER_DATA",fe={userId:null,email:null,login:null,isAuth:!1},be=function(e,t,n,r){return{type:je,payload:{userId:e,email:t,login:n,isAuth:r}}},pe=function(){return function(){var e=Object(v.a)(m.a.mark((function e(t){var n,r,a,s,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,s=r.login,c=r.email,t(be(a,c,s,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case je:return Object(w.a)(Object(w.a)({},e),t.payload);default:return e}},Oe=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(r.jsx)(le,Object(w.a)({},this.props))}}]),n}(s.a.Component),ge=Object(O.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(v.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.logout();case 2:0===e.sent.data.resultCode&&t(be(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Oe),me=(n(191),n(127)),ve=n(37),xe=n(86),we=n(41),Pe=n.n(we),_e=Object(me.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return Object(r.jsxs)("form",{onSubmit:t,children:[Object(ve.c)("Email","email",[xe.b],ve.a),Object(ve.c)("Password","password",[xe.b],ve.a,{type:"password"}),Object(ve.c)(null,"rememberMe",[],ve.a,{type:"checkbox"},"rememberMe"),n&&Object(r.jsx)("div",{className:Pe.a.formSummaryError,children:n}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{children:"Login"})})]})})),ye=Object(O.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(v.a)(m.a.mark((function r(a){var s,c;return m.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,P.a.login(e,t,n);case 2:0===(s=r.sent).data.resultCode?a(pe()):(c=s.data.messages.length>0?s.data.messages[0]:"Some error",a(Object(de.a)("login",{_error:c})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(r.jsx)(h.a,{to:"/profile"}):Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Login"}),Object(r.jsx)(_e,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})]})})),Se="SET_INITIALIZED_SUCCESS",Ce={initialized:!1},Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Se:return Object(w.a)(Object(w.a)({},e),{},{initialized:!0});default:return e}},Ie=n(96),Ee=n(126),ke={},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke;return e},Ue=n(134),Ae=n(129),ze=Object($.c)({profilePage:Ie.b,dialogsPage:Ee.a,sidebar:Te,usersPage:R,auth:he,form:Ae.a,app:Ne}),Fe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||$.d,Me=Object($.e)(ze,Fe(Object($.a)(Ue.a))),Le=function(e){return function(t){return Object(r.jsxs)(a.Suspense,{fallback:Object(r.jsx)(Q,{}),children:[" ",Object(r.jsx)(e,Object(w.a)({},t))]})}},Re=s.a.lazy((function(){return n.e(4).then(n.bind(null,296))})),De=s.a.lazy((function(){return n.e(3).then(n.bind(null,295))})),Ge=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(r.jsxs)("div",{className:"app-wrapper",children:[Object(r.jsx)(ge,{}),Object(r.jsx)(p,{}),Object(r.jsxs)("div",{className:"app-wrapper-content",children:[Object(r.jsx)(h.b,{path:"/dialogs",render:Le(Re)}),Object(r.jsx)(h.b,{path:"/profile/:userId?",render:Le(De)}),Object(r.jsx)(h.b,{path:"/users",render:function(){return Object(r.jsx)(ie,{})}}),Object(r.jsx)(h.b,{path:"/login",render:function(){return Object(r.jsx)(ye,{})}})]})]}):Object(r.jsx)(Q,{})}}]),n}(s.a.Component),He=Object($.d)(h.f,Object(O.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(pe());Promise.all([t]).then((function(){e({type:Se})}))}}}))(Ge),qe=function(e){return Object(r.jsx)(b.a,{children:Object(r.jsx)(O.a,{store:Me,children:Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(He,{})})})})};i.a.render(Object(r.jsx)(qe,{}),document.getElementById("root"))},37:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return d})),n.d(t,"c",(function(){return j}));var r=n(3),a=n(55),s=n(1),c=(n(0),n(89)),i=n(41),o=n.n(i),u=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,a=e.children,c=n&&r;return Object(s.jsxs)("div",{className:o.a.formControl+" "+(c?o.a.error:""),children:[Object(s.jsx)("div",{children:a}),c&&Object(s.jsx)("span",{children:r})]})},l=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return Object(s.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{children:Object(s.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},d=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return Object(s.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{children:Object(s.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))},j=function(e,t,n,a){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(s.jsxs)("div",{children:[Object(s.jsx)(c.a,Object(r.a)({placeholder:e,name:t,validate:n,component:a},i))," ",o]})}},41:function(e,t,n){e.exports={formControl:"FormsControls_formControl__3OqYV",error:"FormsControls_error__1rOMF",formSummaryError:"FormsControls_formSummaryError__34o_s"}},69:function(e,t,n){e.exports={paginator:"Paginator_paginator__2GC3T",pageNumber:"Paginator_pageNumber__1xmzD",selectedPage:"Paginator_selectedPage__2Y5Js"}},86:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));n(0);var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t&&t.length>e)return"Max lenght is ".concat(e," symbols")}}},93:function(e,t,n){e.exports={header:"Header_header__2LmlR",loginBlock:"Header_loginBlock__3VjsT"}},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"d",(function(){return h})),n.d(t,"c",(function(){return O})),n.d(t,"e",(function(){return g}));var r=n(10),a=n.n(r),s=n(21),c=n(45),i=n(3),o=n(15),u="ADD-POST",l="SET_USER_PROFILE",d="SET_STATUS",j="DELETE_POST",f={posts:[{id:1,massage:"Hi. how are you?",likesCount:12},{id:2,massage:"Its mi first post",likesCount:23}],profile:null,status:""},b=function(e){return{type:u,newPostText:e}},p=function(e){return{type:d,status:e}},h=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.c.getProfile(e);case 2:r=t.sent,n((a=r.data,{type:l,profile:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getStatus(e);case 2:r=t.sent,n(p(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(p(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:var n={id:3,massage:t.newPostText,likesCount:5};return Object(i.a)(Object(i.a)({},e),{},{posts:[].concat(Object(c.a)(e.posts),[n]),newPostText:""});case l:return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case d:return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case j:return Object(i.a)(Object(i.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!=t.postId}))});default:return e}}}},[[289,1,2]]]);
//# sourceMappingURL=main.e401ea5f.chunk.js.map