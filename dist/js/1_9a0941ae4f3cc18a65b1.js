webpackJsonp([1,9],[,,,,,,,,,,,,,,function(t,e,n){n(106);var r=n(29)(n(67),n(98),null,null);t.exports=r.exports},,,,,,,,,,,,,,,function(t,e){t.exports=function(t,e,n,r){var s,a=t=t||{},i=typeof t.default;"object"!==i&&"function"!==i||(s=t,a=t.default);var o="function"==typeof a?a.options:a;if(e&&(o.render=e.render,o.staticRenderFns=e.staticRenderFns),n&&(o._scopeId=n),r){var c=o.computed||(o.computed={});Object.keys(r).forEach(function(t){var e=r[t];c[t]=function(){return e}})}return{esModule:s,exports:a,options:o}}},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},s=0;s<this.length;s++){var a=this[s][0];"number"==typeof a&&(r[a]=!0)}for(s=0;s<e.length;s++){var i=e[s];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},function(t,e,n){function r(t){for(var e=0;e<t.length;e++){var n=t[e],r=l[n.id];if(r){r.refs++;for(var s=0;s<r.parts.length;s++)r.parts[s](n.parts[s]);for(;s<n.parts.length;s++)r.parts.push(i(n.parts[s]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var a=[],s=0;s<n.parts.length;s++)a.push(i(n.parts[s]));l[n.id]={id:n.id,refs:1,parts:a}}}}function s(t,e){for(var n=[],r={},s=0;s<e.length;s++){var a=e[s],i=a[0],o=a[1],c=a[2],u=a[3],l={css:o,media:c,sourceMap:u};r[i]?(l.id=t+":"+r[i].parts.length,r[i].parts.push(l)):(l.id=t+":0",n.push(r[i]={id:i,parts:[l]}))}return n}function a(){var t=document.createElement("style");return t.type="text/css",d.appendChild(t),t}function i(t){var e,n,r=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]'),s=null!=r;if(s&&g)return h;if(v){var i=f++;r=p||(p=a()),e=o.bind(null,r,i,!1),n=o.bind(null,r,i,!0)}else r=r||a(),e=c.bind(null,r),n=function(){r.parentNode.removeChild(r)};return s||e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}function o(t,e,n,r){var s=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=m(e,s);else{var a=document.createTextNode(s),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(a,i[e]):t.appendChild(a)}}function c(t,e){var n=e.css,r=e.media,s=e.sourceMap;if(r&&t.setAttribute("media",r),s&&(n+="\n/*# sourceURL="+s.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var s=n(33),l={},d=u&&(document.head||document.getElementsByTagName("head")[0]),p=null,f=0,g=!1,h=function(){},v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){g=n;var a=s(t,e);return r(a),function(e){for(var n=[],i=0;i<a.length;i++){var o=a[i],c=l[o.id];c.refs--,n.push(c)}e?(a=s(t,e),r(a)):a=[];for(var i=0;i<n.length;i++){var c=n[i];if(0===c.refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete l[c.id]}}}};var m=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(3),s=n.n(r),a=n(5),i=n(8),o=n(35).default,c={cacheRequest:function(t,e,n){return new Promise(function(r,s){o.get(t,e,n).then(function(t){r(t)}).catch(function(t){i.a.dispatch("showNotification","Oops! Looks like you are offline or the service is unavailable"),s(t)})})},getSettings:function(t){return this.cacheRequest(t,s.a.wpDomain+"wp-json?fields=",86400).then(function(t){i.a.commit(a.a,t.body)}).catch(function(t){return Promise.reject(t)})},getMenuByName:function(t,e){var n=this;return this.cacheRequest(t,s.a.wpDomain+"wp-json/wp-api-menus/v2/menus/?name="+e,86400).then(function(e){n.getMenu(t,e.body[0].term_id)}).catch(function(t){Promise.reject(t)})},getMenu:function(t,e){return this.cacheRequest(t,s.a.wpDomain+"wp-json/wp-api-menus/v2/menus/"+e,86400).then(function(t){i.a.commit(a.b,t.body)}).catch(function(t){return Promise.reject(t)})},getCategory:function(t,e,n){var r=s.a.wpDomain+"wp-json/wp/v2/categories/"+e;if(!e&&n)r=s.a.wpDomain+"wp-json/wp/v2/categories/?slug="+n+"&fields=id,name,slug,parent,link";else if(!e&&!n)return Promise.resolve("");return this.cacheRequest(t,r,300).then(function(t){return Promise.resolve(t.body)}).catch(function(t){return Promise.reject(t)})},getCategoryChildren:function(t,e){return this.cacheRequest(t,s.a.wpDomain+"wp-json/wp/v2/categories?parent="+e,300).then(function(t){return Promise.resolve(t.body)}).catch(function(t){return Promise.reject(t)})},getPostsFromCategories:function(t,e,n){var r=s.a.wpDomain+"wp-json/wp/v2/posts?categories="+e+"&per_page="+n+"&fields=id,slug,date,better_featured_image,excerpt";return this.cacheRequest(t,r,300).then(function(t){return Promise.resolve(t.body)}).catch(function(t){return Promise.reject(t)})},getPosts:function(t,e,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"desc",i=s.a.wpDomain+"wp-json/wp/v2/posts?categories="+e+"&page="+n+"&order="+a+"&per_page="+r+"&fields=id,title,slug,date,better_featured_image,excerpt";return this.cacheRequest(t,i,300).then(function(t){return Promise.resolve({posts:t.body,totalPages:t.headers.map["x-wp-totalpages"][0]})}).catch(function(t){return Promise.reject(t)})},getPost:function(t,e,n){var r=s.a.wpDomain+"wp-json/wp/v2/posts/"+e+"?fields=id,title,slug,tags,date,better_featured_image,content,rest_api_enabler,pure_taxonomies";return!e&&n&&(r=s.a.wpDomain+"wp-json/wp/v2/posts/?slug="+n+"&fields=id,title,slug,tags,date,better_featured_image,content,rest_api_enabler,pure_taxonomies"),this.cacheRequest(t,r,900).then(function(t){return Promise.resolve(t.body)}).catch(function(t){return Promise.reject(t)})},getPage:function(t,e,n){var r=s.a.wpDomain+"wp-json/wp/v2/pages/"+e;return!e&&n&&(r=s.a.wpDomain+"wp-json/wp/v2/pages/?slug="+n),this.cacheRequest(t,r,900).then(function(t){return Promise.resolve(t.body)}).catch(function(t){return Promise.reject(t)})}};e.default=c},function(t,e){t.exports=function(t,e){for(var n=[],r={},s=0;s<e.length;s++){var a=e[s],i=a[0],o=a[1],c=a[2],u=a[3],l={id:t+":"+s,css:o,media:c,sourceMap:u};r[i]?r[i].parts.push(l):n.push(r[i]={id:i,parts:[l]})}return n}},,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(3),s=n.n(r),a={localforage:"",store:"",storeCacheTime:"",currentTime:"",networkFirstStrategy:function(t,e,n){return new Promise(function(r,s){t.$http.get(e).then(function(t){a.storeCacheTime.setItem(e,a.currentTime+n),a.store.setItem(e,{body:t.body,headers:t.headers}).then(r(t)).catch(function(t){return s(t)})}).catch(function(t){a.store.getItem(e).then(function(t){return r(t)}).catch(function(t){return s(t)})})})},offlineFirstStrategy:function(t,e,n){return new Promise(function(r,s){a.storeCacheTime.getItem(e).then(function(i){i<a.currentTime?a.networkFirstStrategy(t,e,n).then(function(t){r(t)}).catch(function(t){return s(t)}):a.store.getItem(e).then(function(i){i?r(i):a.networkFirstStrategy(t,e,n).then(function(t){return r(t)}).catch(function(t){return s(t)})}).catch(function(i){a.networkFirstStrategy(t,e,n).then(function(t){return r(t)}).catch(function(t){return s(t)})})}).catch(function(i){a.networkFirstStrategy(t,e,n).then(function(t){return r(t)}).catch(function(t){return s(t)})})})},get:function(t,e,r){return new Promise(function(i,o){a.currentTime=Math.floor(Date.now()/1e3),n.e(10).then(function(){a.localforage=n(34),a.store=a.localforage.createInstance({name:s.a.loadDbName}),a.storeCacheTime=a.localforage.createInstance({name:s.a.loadDbName+"_cacheTime"}),r?a.offlineFirstStrategy(t,e,r).then(function(t){t?i(t):o()}).catch(function(t){return o(t)}):a.networkFirstStrategy(t,e,0).then(function(t){t?i(t):o()}).catch(function(t){return o(t)})}.bind(null,n)).catch(n.oe)})}};e.default=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app-newsletter"}},function(t,e,n){var r=n(29)(n(36),n(38),null,null);t.exports=r.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"vwp-newsletter"}},[n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container"},[n("div",{staticClass:"columns is-vcentered",attrs:{id:"mc_embed_signup"}},[n("div",{staticClass:"column is-one-third is-left"},[n("p",{staticClass:"title"},[t._v("Full Stack Weekly "),n("strong",[t._v("Newsletter")])]),t._v(" "),n("p",{staticClass:"subtitle"},[t._v("A free weekly newsletter for full stack web developers!")])]),t._v(" "),n("div",{staticClass:"column"},[n("form",{staticClass:"validate",attrs:{action:"//fullstackweekly.us14.list-manage.com/subscribe/post?u=c327ca0aef5ca85988950be67&id=459d58dda4",method:"post",id:"mc-embedded-subscribe-form",name:"mc-embedded-subscribe-form",target:"_blank",novalidate:"novalidate"}},[n("div",{attrs:{id:"mc_embed_signup_scroll"}},[n("div",{staticClass:"control is-grouped"},[n("div",{staticClass:"control has-icon is-expanded"},[n("input",{staticClass:"input is-flat required email",attrs:{type:"email",value:"",name:"EMAIL",id:"mce-EMAIL",placeholder:"email address",required:"","aria-required":"true"}}),t._v(" "),n("span",{staticClass:"icon is-small"},[n("i",{staticClass:"icon-mail-alt"})])]),t._v(" "),n("div",{staticClass:"control"},[n("input",{staticClass:"button is-outlined",attrs:{type:"submit",value:"Subscribe",name:"subscribe",id:"mc-embedded-subscribe"}})])]),t._v(" "),n("div",{attrs:{id:"mce-responses"}},[n("div",{staticClass:"notification is-danger response",staticStyle:{display:"none"},attrs:{id:"mce-error-response"}}),t._v(" "),n("div",{staticClass:"notification is-success response",staticStyle:{display:"none"},attrs:{id:"mce-success-response"}})]),t._v(" "),n("div",{staticStyle:{position:"absolute",left:"-5000px"},attrs:{"aria-hidden":"true"}},[n("input",{attrs:{type:"text",name:"b_c327ca0aef5ca85988950be67_459d58dda4",tabindex:"-1",value:""}})])])])])])])])])}]}},,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=(n(32),n(4)),s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};e.default={props:["totalPages","path"],data:function(){return{pages:[],neighboors:2,page:1}},computed:s({},n.i(r.mapGetters)(["blogPagingPage"])),methods:{refreshPages:function(t){t||(t=1),t=parseInt(t),this.pages=[];for(var e=1;e<=this.totalPages;e++)1==e||e==this.totalPages?this.pages.push(e):e>=t-this.neighboors&&e<=t||e>=t&&e<=t+this.neighboors?this.pages.push(e):e!=t-this.neighboors-1&&e!=t+this.neighboors+1||this.pages.push("...")}},created:function(){this.page=1,this.blogPagingPage&&(this.page=this.blogPagingPage),this.refreshPages(this.page)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"vwp-post-card",props:["post","category"]}},,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(32),s=n(50),a=n.n(s),i=n(49),o=n.n(i),c=n(4),u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};e.default={name:"vwp-subcategory",components:{vwpPostCard:a.a,vwpPaging:o.a},props:["category","hidePagination"],computed:u({},n.i(c.mapGetters)(["blogPagingPage"])),data:function(){return{posts:[],totalPages:0}},watch:{blogPagingPage:function(t){t||(t=1),this.refreshPages(t,this.category.id)},category:function(t){t&&t.id&&this.refreshPages(1,t.id)}},methods:{refreshPages:function(t,e){var n=this;t||(t=1),t=parseInt(t),this.posts=[],this.totalPages=0,r.default.getPosts(this,e,t,6).then(function(t){n.posts=t.posts,n.totalPages=t.totalPages})}},created:function(){this.refreshPages(this.blogPagingPage,this.category.id)}}},,function(t,e,n){e=t.exports=n(30)(),e.push([t.i,"#vwpPaging{padding:2rem;margin-right:0;margin-left:0;background-color:#fff;width:100%}#vwpPaging .paging-link{text-align:center;padding:0}#vwpPaging .paging-link a{border:1px solid #287ab1;color:#287ab1;padding:10px}#vwpPaging .paging-link .is-active{background-color:#287ab1;color:#fff}#vwpPaging .paging-wrapper{margin:0 auto;padding-left:.75rem;display:block;width:100%;max-width:300px}#vwpPaging .is-active{font-weight:700}#vwpPaging .paging-wrapper-inner{display:flex}",""])},function(t,e,n){e=t.exports=n(30)(),e.push([t.i,"#vwp-post-card{padding-bottom:40px}#vwp-post-card .post-title a{font-size:1.5rem;color:#287ab1;padding:0 0 10px;font-weight:700}#vwp-post-card .card-image img{max-height:250px;width:auto;margin:0 auto}#vwp-post-card .content{word-break:normal;word-wrap:break-word}#vwp-post-card footer{position:absolute;bottom:0;width:100%;left:0}",""])},,function(t,e,n){n(59);var r=n(29)(n(41),n(56),null,null);t.exports=r.exports},function(t,e,n){n(60);var r=n(29)(n(42),n(57),null,null);t.exports=r.exports},,function(t,e,n){var r=n(29)(n(44),n(54),null,null);t.exports=r.exports},,function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"columns category-posts"},t._l(t.posts,function(e,r){return n("div",{staticClass:"column is-one-third"},[n("vwp-post-card",{attrs:{post:e,category:t.category}})],1)})),t._v(" "),t.hidePagination?t._e():n("div",[t._m(0),t._v(" "),t.totalPages>0?n("vwp-paging",{attrs:{totalPages:t.totalPages,path:"/category/"+t.category.slug}}):t._e()],1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"columns"},[n("div",{staticClass:"column"})])}]}},,function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"vwpPaging"}},[n("div",{staticClass:"paging-wrapper"},[n("div",{staticClass:"columns paging-wrapper-inner"},t._l(t.pages,function(e,r){return n("div",{staticClass:"column paging-link"},["..."!=e?n("router-link",{class:{"is-active":e==t.page},attrs:{to:t.path+"/page/"+e+"/"}},[t._v(t._s(e))]):t._e(),t._v(" "),"..."==e?n("div",[t._v(t._s(e))]):t._e()],1)}))])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card",attrs:{id:"vwp-post-card"}},[n("div",{staticClass:"card-image"},[t.post.better_featured_image&&t.post.better_featured_image.media_details.sizes.medium?n("figure",{staticClass:"image"},[n("img",{attrs:{src:t.post.better_featured_image.media_details.sizes.medium.source_url,alt:t.post.better_featured_image.description}})]):t._e()]),t._v(" "),n("div",{staticClass:"card-content"},[n("div",{staticClass:"content"},[n("div",{staticClass:"post-title"},[n("router-link",{attrs:{to:"/category/"+t.category.slug+"/"+t.post.slug},domProps:{innerHTML:t._s(t.post.title.rendered)}})],1),t._v(" "),n("p",{staticClass:"is-clearfix"}),t._v(" "),n("div",{domProps:{innerHTML:t._s(t.post.excerpt.rendered)}}),t._v(" "),t._l(t.post.tags,function(e){return n("span",[t._v("#"+t._s(e))])}),t._v(" "),n("br"),t._v(" "),n("small",[t._v(t._s(t.post.date))])],2)]),t._v(" "),n("footer",{staticClass:"card-footer"},[n("router-link",{staticClass:"card-footer-item",attrs:{to:"/category/"+t.category.slug+"/"+t.post.slug}},[t._v("Read More")])],1)])},staticRenderFns:[]}},,function(t,e,n){var r=n(46);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(31)("5ed7aefa",r,!0)},function(t,e,n){var r=n(47);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(31)("99d0d096",r,!0)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),window.twttr=function(t,e,n){var r,s=t.getElementsByTagName(e)[0],a=window.twttr||{};return t.getElementById(n)?a:(r=t.createElement(e),r.id=n,r.src="https://platform.twitter.com/widgets.js",s.parentNode.insertBefore(r,s),a._e=[],a.ready=function(t){a._e.push(t)},a)}(document,"script","twitter-wjs")},,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=(n(61),n(4)),s=n(32),a=n(52),i=n.n(a),o=n(37),c=n.n(o),u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};e.default={name:"ThemeCategoryNewsletter",components:{vwpSubcategory:i.a,AppNewsletter:c.a},data:function(){return{categoryId:0,subCategories:[]}},methods:{loadSubcategories:function(){var t=this;s.default.getCategoryChildren(this,this.categoryId).then(function(e){t.subCategories=e})},loadTwitter:function(){window.twttr.widgets.createTimeline({sourceType:"profile",screenName:"fullstacknews"},document.getElementById("category-newsletter-twitter-feed"),{chrome:"nofooter",linkColor:"#287ab1",showReplies:!0})}},computed:u({},n.i(r.mapGetters)(["routeParamId","routeMetaId"])),mounted:function(){var t=this;Promise.resolve().then(function(){window.twttr.ready(function(e){t.loadTwitter()})}.bind(null,n)).catch(n.oe)},created:function(){var t=this;this.routeMetaId?(this.categoryId=this.routeMetaId,this.loadSubcategories()):s.default.getCategory(this,null,this.routeParamId).then(function(e){t.categoryId=e[0].id,t.loadSubcategories()})}}},,,,,,,,,,function(t,e,n){e=t.exports=n(30)(),e.push([t.i,"#vwp-category-app-newsletter{border-bottom:1px solid #cfcfcf;margin-bottom:30px}#vwp-category-app-newsletter .hero-body{padding-top:0;padding-bottom:0}#vwp-category-app-newsletter .subtitle{display:none}#vwp-category-app-newsletter p.title{font-size:180%}.category-posts{flex-wrap:wrap}",""])},,,,,,,,,,,,,,,,,,,,,function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"vwp-category-newsletter"}},[n("app-newsletter",{attrs:{id:"vwp-category-app-newsletter"}}),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"columns"}),n("div",{staticClass:"column"}),t._v(" "),n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-three-quarters"},t._l(t.subCategories,function(e,r){return n("div",{staticClass:"columns"},[n("div",{staticClass:"column"},[n("h2",[n("router-link",{attrs:{to:"/category/"+e.slug+"/"}},[t._v(t._s(e.name))])],1),t._v(" "),t._m(1,!0),t._v(" "),n("vwpSubcategory",{staticClass:"columns category-posts",attrs:{hidePagination:"hidePagination",category:e}}),t._v(" "),t._m(2,!0)],1)])})),t._v(" "),t._m(3)])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",[t._v("Full Stack Weekly is free weekly newsletter for full stack developers. Every Thursday. I do not share your email and keep it safe! No spam, promise!")]),t._v(" "),n("p",[t._v("My name is "),n("a",{attrs:{href:"https://twitter.com/bstavroulakis"}},[t._v("Bill")]),t._v(" and I'm in the eternal pursuit of finding the next shiny thing. I love to read articles and learn new technologies. This newsletter is all of the links and material that raise my eyebrow each week as a full stack developer.")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"columns"},[n("div",{staticClass:"column"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"columns"},[n("div",{staticClass:"column"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"column"},[n("div",{attrs:{id:"category-newsletter-twitter-feed"}})])}]}},,,,,,,,function(t,e,n){var r=n(77);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(31)("4895ed6c",r,!0)}]);