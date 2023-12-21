(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{672:function(e,t,r){"use strict";r.r(t);var n=r(49),o=(r(93),r(13),r(8),{layout:"authLayout",data:function(){return{processing:!1,token_sent:!1,form:{email:""}}},computed:{isFormEmpty:function(){return!!this.form.email}},mounted:function(){if(window.process){var e,t=window.localStorage.getItem("user"),r=JSON.parse(t);null!==(e=Object.keys(r))&&void 0!==e&&e.length&&this.$router.push("/dashboard")}},methods:{handleForgetPassword:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.processing=!0,"\n          mutation SendResetPasswordCode($email: String!) {\n            sendResetPasswordCode(email: $email)\n          }\n        ",t.prev=2,t.next=5,fetch("https://fidelityvalues.onrender.com/graphql/query",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({query:"\n          mutation SendResetPasswordCode($email: String!) {\n            sendResetPasswordCode(email: $email)\n          }\n        ",variables:{email:e.form.email}})});case 5:return r=t.sent,t.next=8,r.json();case 8:null!=(data=t.sent)&&data.errors?e.$toastr.e(data.errors[0].message):(e.token_sent=!0,window.localStorage.setItem("user-email",JSON.stringify(e.form.email)));case 10:return t.prev=10,e.processing=!1,t.finish(10);case 13:case"end":return t.stop()}}),t,null,[[2,,10,13]])})))()}}}),l=r(46),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"bg-[#003b6d] h-screen"},[e.token_sent?t("section",{staticClass:"grid place-content-center h-screen"},[t("div",{staticClass:"flex justify-center items-center flex-col gap-y-3"},[t("img",{staticClass:"h-10 w-10",attrs:{src:r(336),alt:""}}),e._v(" "),t("p",{staticClass:"text-white"},[e._v("\n        Reset password token has been sent to your email.\n      ")]),e._v(" "),t("nuxt-link",{staticClass:"bg-black text-white px-6 py-2 rounded-md tetx-sm",attrs:{to:"/reset"}},[e._v("Proceed to reset")])],1)]):t("section",{staticClass:"bg-[#003b6d] flex justify-center items-center pt-20 container mx-auto"},[t("div",{staticClass:"w-full max-w-md p-8 space-y-6 rounded-xl bg-white"},[t("h1",{staticClass:"text-3xl font-bold"},[e._v("\n        Don't worry!\n      ")]),e._v(" "),t("p",{staticClass:"text-gray-500 text-sm leading-loose"},[e._v("\n        we are here to help you recover your password. Enter the email address you used when you joined and we'll send you instructions to reset your password.\n      ")]),e._v(" "),t("form",{staticClass:"space-y-10",on:{submit:function(t){return t.preventDefault(),e.handleForgetPassword.apply(null,arguments)}}},[t("div",{staticClass:"space-y-1 text-sm w-full"},[t("label",{staticClass:"block text-gray-900 font-medium",attrs:{for:"email"}},[e._v("Email")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.email,expression:"form.email"}],staticClass:"border w-full outline-none px-4 py-3 rounded-md border-gray-900 text-gray-900",attrs:{id:"email",type:"email",name:"email",placeholder:"email"},domProps:{value:e.form.email},on:{input:function(t){t.target.composing||e.$set(e.form,"email",t.target.value)}}})]),e._v(" "),t("div",{staticClass:"w-full"},[t("button",{staticClass:"w-full shrink-0 text-xs disabled:cursor-not-allowed disabled:opacity-25 rounded-md border border-green-500 bg-green-600 px-12 py-3 font-medium text-white transition",class:[!e.isFormEmpty||e.processing?"opacity-25 cursor-not-allowed":""],attrs:{disabled:!e.isFormEmpty}},[e._v("\n            "+e._s(e.processing?"processing...":"Submit")+"\n          ")])])])])])])}),[],!1,null,null,null);t.default=component.exports}}]);