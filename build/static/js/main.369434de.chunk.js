(this.webpackJsonpreactinterface=this.webpackJsonpreactinterface||[]).push([[0],{29:function(e,t,a){},34:function(e,t,a){e.exports=a(42)},39:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(9),r=a.n(n),o=a(32),c=a.n(o),s=(a(39),a(13)),i=a(10),l=(a(29),a(0)),u=a.n(l),d=a(2),m=a(33),p=a(17),f=(Object(m.a)({apiKey:"AIzaSyAJTihH8JkI-znX0vaytX7CdYR8u6JNEMQ",authDomain:"uber-eats-clone-eaa56.firebaseapp.com",databaseURL:"https://uber-eats-clone-eaa56-default-rtdb.firebaseio.com",projectId:"uber-eats-clone-eaa56",storageBucket:"uber-eats-clone-eaa56.appspot.com",messagingSenderId:"958443395901",appId:"1:958443395901:web:f07248095ca24e32a38354"}),Object(p.e)()),b=a(27),v=function(){var e=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t.target.id),e.next=3,Object(p.c)(Object(p.d)(f,"password-saver",t.target.id.toString()));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var g=function(e){var t=function(){var e="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$",a=0;for(a=1;a<=8;a++){var n=Math.floor(Math.random()*t.length+1);e+=t.charAt(n)}return e}();console.log(t);var a=Object(p.d)(f,"password-saver",e.target.id.toString());Object(p.h)(a,{password:t},{merge:!0})},h=function(e){var t=e.todo,a=(e.index,e.markComplete,e.doc1);return r.a.createElement("div",{className:"todo"},t.name," ","Password is :-"," ",t.password,r.a.createElement(b.a,{onClick:v,id:a}),r.a.createElement(b.b,{onClick:g,id:a}))},j=function(e){var t=e.todos,a=e.markComplete,n=r.a.useState([]),o=Object(i.a)(n,2),c=o[0],s=o[1],l=localStorage.getItem("user")||"";return r.a.useEffect(Object(d.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(p.g)(Object(p.b)(f,"password-saver"),Object(p.i)("email","==",l)),a=Object(p.f)(t,(function(e){var t=[];e.forEach((function(e){t.push([e.data(),e.id]),console.log(e.data())})),s(t),console.log("Current cities in CA: ",t.join(", "))})),e.abrupt("return",(function(){return a()}));case 3:case"end":return e.stop()}}),e)}))),[t]),console.log(c,"\ud83e\udd6e\ud83e\udd6e\ud83e\udd6e\ud83e\udd6e"),r.a.createElement("div",{className:"todo-list"},c.map((function(e,t){return r.a.createElement(h,{todo:e[0],key:t,index:t,markComplete:a,doc1:e[1]})})))},E=function(e){var t=e.addTodo,a=Object(n.useState)(""),o=Object(i.a)(a,2),c=o[0],s=o[1];return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"App"},"Passowrd Creator"),r.a.createElement("form",{className:"App",onSubmit:function(e){e.preventDefault(),c&&(t(c),s(""))}},r.a.createElement("input",{className:"form-control col-md-8 ",type:"textarea",placeholder:"Add a ToDo",value:c,onChange:function(e){s(e.target.value)}}),r.a.createElement("input",{className:"form-control btn-primary col-md-4 submit-button",type:"submit",value:"Add"})))};var w=function(){var e=Object(n.useState)([{id:1,name:"Wake Up bud",password:"Check password",isCompleted:!1},{id:2,name:" brush both teeth and brain",password:"Test examples ",isCompleted:!1}]),t=Object(i.a)(e,2),a=t[0],o=t[1];return r.a.createElement("div",{className:"parent-container"},r.a.createElement("div",{className:"container top-container"},r.a.createElement("div",{className:"App-header"},r.a.createElement("div",{className:"todoform"},r.a.createElement(E,{addTodo:function(e){var t=function(){var e="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$",a=0;for(a=1;a<=8;a++){var n=Math.floor(Math.random()*t.length+1);e+=t.charAt(n)}return e}(),n=localStorage.getItem("user")||"";o([].concat(Object(s.a)(a),[{name:e,password:t}]));Object(p.a)(Object(p.b)(f,"password-saver"),{name:e,password:t,email:n});console.log({state:a})}}),r.a.createElement(j,{todos:a,markComplete:function(e){var t=Object(s.a)(a);t[e].isCompleted=!t[e].isCompleted,o(t)}})))))},O=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,43)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),o(e),c(e)}))},C=a(22);var k=function(){var e=Object(C.b)(),t=new C.a;return r.a.createElement("button",{onClick:function(){Object(C.c)(e,t).then((function(e){C.a.credentialFromResult(e).accessToken;var t=e.user;console.log(t),localStorage.setItem("user",t.email),localStorage.setItem("username",t.displayName),window.location.reload()})).catch((function(e){e.code;var t=e.message;e.email,C.a.credentialFromError(e);alert(t)}))}},"signin")},S=localStorage.getItem("user");c.a.render(S?r.a.createElement(w,null):r.a.createElement(k,null),document.getElementById("root")),O()}},[[34,1,2]]]);
//# sourceMappingURL=main.369434de.chunk.js.map