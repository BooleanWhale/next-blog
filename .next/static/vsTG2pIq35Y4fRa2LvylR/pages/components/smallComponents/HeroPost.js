(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"/OhW":function(t,e,n){"use strict";function r(t){return t.dateString.slice(0,10)}n.r(e),n.d(e,"default",(function(){return r}))},"2w1Q":function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return s}));var r=n("q1tI"),o=n.n(r),i=(n("TSYQ"),n("YFqc")),a=n.n(i),c=o.a.createElement;function s(t){var e=t.title,n=t.src,r=t.slug;c("img",{src:n,alt:"Cover Image for ".concat(e),className:"cover-image"});return c(o.a.Fragment,null,r?c(a.a,{as:"/blog/".concat(r),href:"/blog/[slug]"},c("div",{className:"blog-image-container",style:{backgroundImage:"url(".concat(n,")")},"aria-label":e})):c("div",{className:"blog-image-container",style:{backgroundImage:"url(".concat(n,")")},"aria-label":e}))}},"7W2i":function(t,e,n){var r=n("SksO");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},MiHD:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return l}));var r=n("q1tI"),o=n.n(r),i=n("2w1Q"),a=n("YFqc"),c=n.n(a),s=n("/OhW"),u=o.a.createElement;function l(t){var e=t.title,n=t.coverImage,r=t.date,o=t.excerpt,a=t.slug;return u("section",{className:"hero-post"},u("div",null,u(i.default,{title:e,src:n,slug:a})),u("div",null,u("div",null,u("h3",null,u(c.a,{as:"/blog/".concat(a),href:"/blog/[slug]"},u("a",null,e))),u("div",null,u(s.default,{dateString:r}))),u("div",null,u("p",null,o," - this is the post description"))))}},Nsbk:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},PJYZ:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},TSYQ:function(t,e,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var i=typeof r;if("string"===i||"number"===i)t.push(r);else if(Array.isArray(r)&&r.length){var a=o.apply(null,r);a&&t.push(a)}else if("object"===i)for(var c in r)n.call(r,c)&&r[c]&&t.push(c)}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(r=function(){return o}.apply(e,[]))||(t.exports=r)}()},YFqc:function(t,e,n){t.exports=n("cTJO")},a1gu:function(t,e,n){var r=n("cDf5"),o=n("PJYZ");t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?o(t):e}},cTJO:function(t,e,n){"use strict";var r=n("lwsE"),o=n("W8MJ"),i=n("7W2i"),a=n("a1gu"),c=n("Nsbk");function s(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return a(this,n)}}var u=n("TqRt"),l=n("284h");e.__esModule=!0,e.default=void 0;var f,p=l(n("q1tI")),h=n("QmWs"),v=n("g/15"),d=u(n("nOHt")),g=n("elyg");function y(t){return t&&"object"===typeof t?(0,v.formatWithValidation)(t):t}var m=new Map,b=window.IntersectionObserver,w={};function k(){return f||(b?f=new b((function(t){t.forEach((function(t){if(m.has(t.target)){var e=m.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(f.unobserve(t.target),m.delete(t.target),e())}}))}),{rootMargin:"200px"}):void 0)}var P=function(t){i(n,t);var e=s(n);function n(t){var o;return r(this,n),(o=e.call(this,t)).p=void 0,o.cleanUpListeners=function(){},o.formatUrls=function(t){var e=null,n=null,r=null;return function(o,i){if(r&&o===e&&i===n)return r;var a=t(o,i);return e=o,n=i,r=a,a}}((function(t,e){return{href:(0,g.addBasePath)(y(t)),as:e?(0,g.addBasePath)(y(e)):e}})),o.linkClicked=function(t){var e=t.currentTarget,n=e.nodeName,r=e.target;if("A"!==n||!(r&&"_self"!==r||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var i=o.formatUrls(o.props.href,o.props.as),a=i.href,c=i.as;if(function(t){var e=(0,h.parse)(t,!1,!0),n=(0,h.parse)((0,v.getLocationOrigin)(),!1,!0);return!e.host||e.protocol===n.protocol&&e.host===n.host}(a)){var s=window.location.pathname;a=(0,h.resolve)(s,a),c=c?(0,h.resolve)(s,c):a,t.preventDefault();var u=o.props.scroll;null==u&&(u=c.indexOf("#")<0),d.default[o.props.replace?"replace":"push"](a,c,{shallow:o.props.shallow}).then((function(t){t&&u&&(window.scrollTo(0,0),document.body.focus())}))}}},o.p=!1!==t.prefetch,o}return o(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var t=window.location.pathname,e=this.formatUrls(this.props.href,this.props.as),n=e.href,r=e.as,o=(0,h.resolve)(t,n);return[o,r?(0,h.resolve)(t,r):o]}},{key:"handleRef",value:function(t){var e=this;this.p&&b&&t&&t.tagName&&(this.cleanUpListeners(),w[this.getPaths().join("%")]||(this.cleanUpListeners=function(t,e){var n=k();return n?(n.observe(t),m.set(t,e),function(){try{n.unobserve(t)}catch(e){console.error(e)}m.delete(t)}):function(){}}(t,(function(){e.prefetch()}))))}},{key:"prefetch",value:function(t){if(this.p){var e=this.getPaths();d.default.prefetch(e[0],e[1],t).catch((function(t){0})),w[e.join("%")]=!0}}},{key:"render",value:function(){var t=this,e=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof e&&(e=p.default.createElement("a",null,e));var i=p.Children.only(e),a={ref:function(e){t.handleRef(e),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(e):"object"===typeof i.ref&&(i.ref.current=e))},onMouseEnter:function(e){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(e),t.prefetch({priority:!0})},onClick:function(e){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(e),e.defaultPrevented||t.linkClicked(e)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(a.href=o||r),p.default.cloneElement(i,a)}}]),n}(p.Component);e.default=P},rPiF:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/smallComponents/HeroPost",function(){return n("MiHD")}])}},[["rPiF",0,1,2]]]);