(window.webpackJsonp=window.webpackJsonp||[]).push([[5,3],{309:function(e,t,n){var content=n(311);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(108).default)("f36ca022",content,!0,{sourceMap:!1})},310:function(e,t,n){"use strict";n(309)},311:function(e,t,n){var r=n(107)((function(i){return i[1]}));r.push([e.i,".card[data-v-ed6ddd42]{border:1px solid #ccc;margin:5px;padding:10px;width:-moz-fit-content;width:fit-content}.star-emoji[data-v-ed6ddd42]{margin-right:2px}",""]),r.locals={},e.exports=r},312:function(e,t,n){"use strict";n.r(t);n(168);var r={props:{serviceName:String,businessName:String,serviceRating:Number}},o=(n(310),n(63)),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"card"},[t("h4",[e._v("Review Card")]),e._v(" "),t("p",[e._v("Service Name: "+e._s(e.serviceName))]),e._v(" "),t("p",[e._v("Business Name: "+e._s(e.businessName))]),e._v(" "),e.serviceRating?t("div",[t("p",[e._v("\n      Rating:\n      "),e._l(e.serviceRating,(function(n){return t("span",{key:n,staticClass:"star-emoji"},[e._v("⭐")])}))],2)]):e._e()])}),[],!1,null,"ed6ddd42",null);t.default=component.exports},320:function(e,t,n){"use strict";n.r(t);n(168);var r={data:function(){return{title:"My First Impressions of Working with Nuxt.js",message:"I started by following the Nuxt documentation, installed everything, and quickly had the project up and running. After some experimentation with a non-store form app, I grasped 'state management' and created the initial store functions. It was quite straightforward to use them in components.",message2:"To be honest, I struggled the most with the Bootstrap styles because I'm more accustomed to using Tailwind CSS. That's also why I opted to create the form using plain CSS.",message3:"Overall, it was a good experience because everything is well-documented and easy to understand."}},computed:{filteredReviews:function(){return this.$store.getters.filteredReviews}}},o=n(63),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"container-xl"},[t("div",{staticClass:"mt-4"},[t("h2",[e._v(e._s(e.title))]),e._v(" "),t("p",{staticClass:"my-4"},[e._v(e._s(e.message))]),e._v(" "),t("p",{staticClass:"my-2"},[e._v(e._s(e.message2))]),e._v(" "),t("p",{staticClass:"my-2"},[e._v(e._s(e.message3))])]),e._v(" "),t("div",{staticClass:"mt-4"},[t("span",[e._v("\n      The getter function (filters the key 'm') enables us to use the function\n      globally, not as a local filter like the one I am using here to\n    ")]),e._v(" "),t("nuxt-link",{attrs:{to:"/get-f"}},[e._v(" filter 'F'")]),e._v(", which is very easy to use\n    and understand.\n  ")],1),e._v(" "),t("div",{staticClass:"d-flex"},e._l(e.filteredReviews,(function(e,n){return t("ReviewCard",{key:n,staticClass:"my-5 mx-2",attrs:{"service-name":e.serviceName,"business-name":e.businessName,"service-rating":Number(e.serviceRating)}})})),1),e._v(" "),t("div",{staticClass:"mt-5"},[t("nuxt-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" "),e._m(0)],1)])}),[function(){var e=this,t=e._self._c;return t("div",[e._v("\n      I hope I understood the requirements correctly and fulfilled all\n      criteria to complete this task. I am looking forward to your feedback.\n      LG Eric Strohmaier\n      "),t("a",{attrs:{href:"https://github.com/EricStrohmaier/first-nuxt-project"}},[e._v("Link to the Github Repo")])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{ReviewCard:n(312).default})}}]);