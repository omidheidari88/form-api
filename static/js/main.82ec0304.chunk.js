(this.webpackJsonpformsender=this.webpackJsonpformsender||[]).push([[0],{3:function(e,t,a){e.exports=a(9)},8:function(e,t,a){},9:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(2),c=a.n(l),i=(a(8),function(){return r.a.createElement("div",{className:"limiter"},r.a.createElement("div",{className:"container-login100 bg-auth"},r.a.createElement("div",{className:"wrap-login100 p-t-30 p-b-50"},r.a.createElement("span",{className:"login100-form-title p-b-41"},"Register"),r.a.createElement("form",{id:"form",className:"login100-form validate-form p-b-33 p-t-5",onSubmit:function(e){return function(e){e.preventDefault();var t=document.querySelector("#form"),a={name:t.first_name.value,last_name:t.last_name.value};return fetch("https://imin.nonap.co/public/crm/add_crminfo",{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/x-www-form-urlencoded"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(a)}).then((function(e){return e.json()})).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))}(e)}},r.a.createElement("div",{className:"wrap-input100 validate-input","data-validate":"Enter firstname"},r.a.createElement("input",{type:"text",className:"input100",name:"first_name",id:"first_name",placeholder:"first name"}),r.a.createElement("span",{className:"focus-input100","data-placeholder":"\ue82a"})),r.a.createElement("div",{className:"wrap-input100 validate-input","data-validate":"Enter lastname"},r.a.createElement("input",{type:"text",className:"input100",name:"last_name",id:"last_name",placeholder:"last name"}),r.a.createElement("span",{className:"focus-input100","data-placeholder":"\ue82a"})),r.a.createElement("div",{className:"container-login100-form-btn m-t-32"},r.a.createElement("button",{type:"submit",className:"login100-form-btn"},"Register"))))))});c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i,null)),document.getElementById("root"))}},[[3,1,2]]]);
//# sourceMappingURL=main.82ec0304.chunk.js.map