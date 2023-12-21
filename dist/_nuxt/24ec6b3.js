(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{683:function(e,n,t){"use strict";t.r(n);t(30),t(10),t(8),t(34);var r=t(49),o=(t(93),t(13),t(27),{layout:"user-dashboard",data:function(){return{processing:!1,userData:{},form:{plan:"",amount:""}}},computed:{isFormEmpty:function(){return!(!this.form.plan||!this.form.amount)}},mounted:function(){this.getUserInfo()},methods:{buyPlan:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var t,r,o,data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.processing=!0,t=JSON.parse(window.localStorage.getItem("auth")),n.prev=2,r="\n        mutation {\n          buyPlan(amount: ".concat(e.form.amount,', planType: "').concat(e.form.plan,'")\n        }\n      '),n.next=6,fetch("https://fidelityvalues.onrender.com/graphql/query",{method:"POST",headers:{"content-type":"application/json",authorization:"Bearer "+t},body:JSON.stringify({query:r,variables:{amount:e.form.amount,planType:e.form.plan}})});case 6:return o=n.sent,n.next=9,o.json();case 9:null!=(data=n.sent)&&data.errors?e.$toastr.e(data.errors[0].message):(e.$toastr.s("You have successfully purchased a plan"),e.form.amount="",e.form.plan="");case 11:return n.prev=11,e.processing=!1,n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[2,,11,14]])})))()},formatNumberAsDollar:function(e){return null==e?void 0:e.toLocaleString("en-US",{style:"currency",currency:"USD"})},getUserInfo:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var t,r,data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.loading=!0,t=JSON.parse(window.localStorage.getItem("auth")),e.loading=!0,"\n        query {\n          getUser {\n            id\n            firstName\n            lastName\n            email\n            Status\n            PlanType\n            accountBalance\n            tradingBalance\n            profit\n            eth\n            btc\n            timeAdded\n          }\n        }\n      ",n.prev=4,n.next=7,fetch("https://fidelityvalues.onrender.com/graphql/query",{method:"POST",headers:{"content-type":"application/json",authorization:"Bearer "+t},body:JSON.stringify({query:"\n        query {\n          getUser {\n            id\n            firstName\n            lastName\n            email\n            Status\n            PlanType\n            accountBalance\n            tradingBalance\n            profit\n            eth\n            btc\n            timeAdded\n          }\n        }\n      "})});case 7:return r=n.sent,n.next=10,r.json();case 10:null!=(data=n.sent)&&data.errors?e.$toastr.e(data.errors[0].message):e.userData=data.data.getUser;case 12:return n.prev=12,e.loading=!1,n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[4,,12,15]])})))()}}}),l=t(46),component=Object(l.a)(o,(function(){var e,n,t=this,r=t._self._c;return r("section",{staticClass:"bg-white lg:w-5/12 rounded-md border h-[500px]"},[r("p",{staticClass:"border-b text-sm font-semibold py-4 pl-6"},[t._v("\n    To buy a plan, select PLAN of your choice.\n  ")]),t._v(" "),r("form",{staticClass:"p-6 space-y-6 z-10",on:{submit:function(e){return e.preventDefault(),t.buyPlan.apply(null,arguments)}}},[r("div",{staticClass:"space-y-1"},[r("label",{staticClass:"text-xs text-gray-700 font-medium"},[t._v("Choose Plan:*")]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.form.plan,expression:"form.plan"}],staticClass:"block px-2 text-sm outline-none py-3 rounded-md border w-full border-transparent border-l-4 group-hover:border-blue-600 group-hover:bg-gray-100",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));t.$set(t.form,"plan",e.target.multiple?n:n[0])}}},t._l([{name:"Platinum Plan (29%) Monthly",value:"Platinum"},{name:"Diamond Plan (35%) Monthly",value:"Diamond"}],(function(e,n){return r("option",{key:n,domProps:{value:e.value}},[t._v("\n          "+t._s(e.name)+"\n        ")])})),0)]),t._v(" "),r("div",{staticClass:"space-y-1"},[r("label",{staticClass:"text-xs text-gray-700 font-medium"},[t._v("Enter Amount:*")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.amount,expression:"form.amount"}],staticClass:"py-2.5 border rounded-md w-full outline-none pl-6",domProps:{value:t.form.amount},on:{input:function(e){e.target.composing||t.$set(t.form,"amount",e.target.value)}}}),t._v(" "),r("span",{staticClass:"text-xs font-medium text-red-500"},[t._v("Note that plan amount must be available in your account balance of\n        "+t._s(null!==(e=t.formatNumberAsDollar(null===(n=t.userData)||void 0===n?void 0:n.accountBalance))&&void 0!==e?e:"0.00")+".")])]),t._v(" "),r("button",{staticClass:"w-full text-white text-sm rounded-lg bg-black py-3",class:[!t.isFormEmpty||t.processing?"opacity-25 cursor-not-allowed":""],attrs:{disabled:!t.isFormEmpty}},[t._v("\n      "+t._s(t.processing?"processing....":"Proceed")+"\n    ")])])])}),[],!1,null,null,null);n.default=component.exports}}]);