(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"/E3z":function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return l}));var r=n("q1tI"),o=n.n(r),a=n("/OhW"),s=n("2w1Q"),i=n("YFqc"),c=n.n(i),u=o.a.createElement;function l(t){var e=t.title,n=t.coverImage,r=t.date,o=t.excerpt,i=t.slug,l=t.tags;return u("div",{className:"blog-post-preview flex-item"},u(s.default,{slug:i,title:e,src:n}),u("div",{className:"blog-info"},u("div",{className:"accented-title"},u("h3",{className:"blog-title"},u(c.a,{as:"/blog/".concat(i),href:"/blog/[slug]"},u("a",{className:"hover:underline"},e))),u("div",{className:l+"-accent accent"})),u("p",{className:"blog-text"},o),u("div",{className:"blog-info-bottom"},u("div",{className:"blog-date"},u(a.default,{dateString:r})),u("div",{className:"blog-tags"},u("span",{className:l+"-tag"},l.toUpperCase())))))}},"/OhW":function(t,e,n){"use strict";function r(t){return t.dateString.slice(0,10)}n.r(e),n.d(e,"default",(function(){return r}))},"2w1Q":function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return c}));var r=n("q1tI"),o=n.n(r),a=(n("TSYQ"),n("YFqc")),s=n.n(a),i=o.a.createElement;function c(t){var e=t.title,n=t.src,r=t.slug;i("img",{src:n,alt:"Cover Image for ".concat(e),className:"cover-image"});return i(o.a.Fragment,null,r?i(s.a,{as:"/blog/".concat(r),href:"/blog/[slug]"},i("div",{className:"blog-image-container",style:{backgroundImage:"url(".concat(n,")")},"aria-label":e})):i("div",{className:"blog-image-container",style:{backgroundImage:"url(".concat(n,")")},"aria-label":e}))}},"6gP9":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/smallComponents/PostsList",function(){return n("fPyY")}])},"7W2i":function(t,e,n){var r=n("SksO");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},Nsbk:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},PJYZ:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},TSYQ:function(t,e,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var a=typeof r;if("string"===a||"number"===a)t.push(r);else if(Array.isArray(r)&&r.length){var s=o.apply(null,r);s&&t.push(s)}else if("object"===a)for(var i in r)n.call(r,i)&&r[i]&&t.push(i)}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(r=function(){return o}.apply(e,[]))||(t.exports=r)}()},YFqc:function(t,e,n){t.exports=n("cTJO")},a1gu:function(t,e,n){var r=n("cDf5"),o=n("PJYZ");t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?o(t):e}},cTJO:function(t,e,n){"use strict";var r=n("lwsE"),o=n("W8MJ"),a=n("7W2i"),s=n("a1gu"),i=n("Nsbk");function c(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=i(t);if(e){var o=i(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}var u=n("TqRt"),l=n("284h");e.__esModule=!0,e.default=void 0;var f,p=l(n("q1tI")),h=n("QmWs"),v=n("g/15"),d=u(n("nOHt")),g=n("elyg");function m(t){return t&&"object"===typeof t?(0,v.formatWithValidation)(t):t}var y=new Map,b=window.IntersectionObserver,w={};function N(){return f||(b?f=new b((function(t){t.forEach((function(t){if(y.has(t.target)){var e=y.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(f.unobserve(t.target),y.delete(t.target),e())}}))}),{rootMargin:"200px"}):void 0)}var k=function(t){a(n,t);var e=c(n);function n(t){var o;return r(this,n),(o=e.call(this,t)).p=void 0,o.cleanUpListeners=function(){},o.formatUrls=function(t){var e=null,n=null,r=null;return function(o,a){if(r&&o===e&&a===n)return r;var s=t(o,a);return e=o,n=a,r=s,s}}((function(t,e){return{href:(0,g.addBasePath)(m(t)),as:e?(0,g.addBasePath)(m(e)):e}})),o.linkClicked=function(t){var e=t.currentTarget,n=e.nodeName,r=e.target;if("A"!==n||!(r&&"_self"!==r||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var a=o.formatUrls(o.props.href,o.props.as),s=a.href,i=a.as;if(function(t){var e=(0,h.parse)(t,!1,!0),n=(0,h.parse)((0,v.getLocationOrigin)(),!1,!0);return!e.host||e.protocol===n.protocol&&e.host===n.host}(s)){var c=window.location.pathname;s=(0,h.resolve)(c,s),i=i?(0,h.resolve)(c,i):s,t.preventDefault();var u=o.props.scroll;null==u&&(u=i.indexOf("#")<0),d.default[o.props.replace?"replace":"push"](s,i,{shallow:o.props.shallow}).then((function(t){t&&u&&(window.scrollTo(0,0),document.body.focus())}))}}},o.p=!1!==t.prefetch,o}return o(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var t=window.location.pathname,e=this.formatUrls(this.props.href,this.props.as),n=e.href,r=e.as,o=(0,h.resolve)(t,n);return[o,r?(0,h.resolve)(t,r):o]}},{key:"handleRef",value:function(t){var e=this;this.p&&b&&t&&t.tagName&&(this.cleanUpListeners(),w[this.getPaths().join("%")]||(this.cleanUpListeners=function(t,e){var n=N();return n?(n.observe(t),y.set(t,e),function(){try{n.unobserve(t)}catch(e){console.error(e)}y.delete(t)}):function(){}}(t,(function(){e.prefetch()}))))}},{key:"prefetch",value:function(t){if(this.p){var e=this.getPaths();d.default.prefetch(e[0],e[1],t).catch((function(t){0})),w[e.join("%")]=!0}}},{key:"render",value:function(){var t=this,e=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof e&&(e=p.default.createElement("a",null,e));var a=p.Children.only(e),s={ref:function(e){t.handleRef(e),a&&"object"===typeof a&&a.ref&&("function"===typeof a.ref?a.ref(e):"object"===typeof a.ref&&(a.ref.current=e))},onMouseEnter:function(e){a.props&&"function"===typeof a.props.onMouseEnter&&a.props.onMouseEnter(e),t.prefetch({priority:!0})},onClick:function(e){a.props&&"function"===typeof a.props.onClick&&a.props.onClick(e),e.defaultPrevented||t.linkClicked(e)}};return!this.props.passHref&&("a"!==a.type||"href"in a.props)||(s.href=o||r),p.default.cloneElement(a,s)}}]),n}(p.Component);e.default=k},fPyY:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return i}));var r=n("q1tI"),o=n.n(r),a=n("/E3z"),s=o.a.createElement;function i(t){var e=t.posts;return s("section",{className:"more-posts"},s("div",{className:"posts-container"},e.map((function(t){return s(a.default,{key:t.slug,title:t.title,coverImage:t.coverImage,date:t.date,author:t.author,slug:t.slug,excerpt:t.excerpt,tags:t.tags})}))))}}},[["6gP9",0,1,2]]]);