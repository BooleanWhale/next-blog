(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=u,t.useAmp=function(){return u(r.default.useContext(i.AmpStateContext))};var a,r=(a=n("q1tI"))&&a.__esModule?a:{default:a},i=n("lwAK");function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,a=e.hybrid,r=void 0!==a&&a,i=e.hasQuery;return n||r&&(void 0!==i&&i)}},"8Kt/":function(e,t,n){"use strict";t.__esModule=!0,t.defaultHead=l,t.default=void 0;var a=c(n("q1tI")),r=c(n("Xuae")),i=n("lwAK"),u=n("FYa8"),o=n("/0+H");function c(e){return e&&e.__esModule?e:{default:e}}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function s(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(s,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,a={};return function(r){var i=!0;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){var u=r.key.slice(r.key.indexOf("$")+1);e.has(u)?i=!1:e.add(u)}switch(r.type){case"title":case"base":t.has(r.type)?i=!1:t.add(r.type);break;case"meta":for(var o=0,c=d.length;o<c;o++){var l=d[o];if(r.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?i=!1:n.add(l);else{var s=r.props[l],f=a[l]||new Set;f.has(s)?i=!1:(f.add(s),a[l]=f)}}}return i}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}var m=(0,r.default)();function p(e){var t=e.children;return(a.default.createElement(i.AmpStateContext.Consumer,null,(function(e){return a.default.createElement(u.HeadManagerContext.Consumer,null,(function(n){return a.default.createElement(m,{reduceComponentsToState:f,handleStateChange:n,inAmpMode:(0,o.isInAmpMode)(e)},t)}))})))}p.rewind=m.rewind;var v=p;t.default=v},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var a;t.__esModule=!0,t.HeadManagerContext=void 0;var r=((a=n("q1tI"))&&a.__esModule?a:{default:a}).default.createContext(null);t.HeadManagerContext=r},Ijbi:function(e,t,n){var a=n("WkPL");e.exports=function(e){if(Array.isArray(e))return a(e)}},Juyh:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),i=n("Q0LR"),u=n("Qtx7"),o=r.a.createElement;t.default=Object(i.default)((function(){return o("section",{className:"container page about row"},o("div",{className:"about-image"},o("img",{src:"/static/ashley-saleem-west.jpg"})),o("div",{className:"about-title"},o("h1",null,"Hi, I'm Ashley")),o("div",{className:"about-text text-size-2"},o("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")),o("div",{className:"social-links"},o(u.default,null)),o("div",{className:"about-body"},o("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.lorem aefawef awef brt drt hsare areg ges dyj ju fiy jtd srth aerg areb srtn dtuj dtyj srth aerg aergv abdf bat srthb rtsh dtyj tjy jty srte vs`d ce.")))}))},"MR+r":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var a=n("q1tI"),r=n.n(a),i=r.a.createElement;function u(){return i(r.a.Fragment,null,i("input",{type:"checkbox",id:"dark-mode-switch",name:"dark-mode"}),i("script",{defer:!0,src:"/static/scripts/darkmode.js"}))}},Q0LR:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var a=n("q1tI"),r=n.n(a),i=(n("8Kt/"),n("sGm0")),u=n("uzCx"),o=n("MR+r"),c=r.a.createElement;function l(e){return function(t){return c(r.a.Fragment,null,c(o.default,null),c(i.default,null),c("main",{className:"main dark-bg"},c("div",{className:"main-despace"}),c(e,t),c("div",{className:"main-despace"})),c(u.default,null))}}},Qtx7:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var a=n("q1tI"),r=n.n(a),i=r.a.createElement;function u(){return i(r.a.Fragment,null,[{title:"Code Pen",link:"www.test.com",image:"/static/social-icons/dribbble.svg"},{title:"Linked In",link:"www.test.com",image:"/static/social-icons/linkedin.svg"},{title:"Code Pen",link:"www.test.com",image:"/static/social-icons/codepen.svg"},{title:"Behance",link:"www.test.com",image:"/static/social-icons/behance.svg"},{title:"Github",link:"www.test.com",image:"/static/social-icons/github.svg"}].map((function(e,t){return i("a",{key:t,href:e.link,title:e.title,className:"social-link"},i("img",{alt:e.title,src:e.image}))})))}},RIqP:function(e,t,n){var a=n("Ijbi"),r=n("EbDI"),i=n("ZhPi"),u=n("Bnag");e.exports=function(e){return a(e)||r(e)||i(e)||u()}},Xuae:function(e,t,n){"use strict";var a=n("lwsE"),r=n("PJYZ"),i=n("W8MJ"),u=n("7W2i"),o=n("a1gu"),c=n("Nsbk"),l=n("RIqP");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=c(e);if(t){var r=c(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return o(this,n)}}t.__esModule=!0,t.default=void 0;var d=n("q1tI"),f=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(l(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return(function(o){u(l,o);var c=s(l);function l(e){var i;return a(this,l),i=c.call(this,e),f&&(t.add(r(i)),n(r(i))),i}return i(l,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),i(l,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),l}(d.Component))}},lwAK:function(e,t,n){"use strict";var a;t.__esModule=!0,t.AmpStateContext=void 0;var r=((a=n("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});t.AmpStateContext=r},rB5V:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n("Juyh")}])},uzCx:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i}));var a=n("q1tI"),r=n.n(a).a.createElement;function i(){return r("footer",{className:"dark-bg"},r("p",null,"Built with SCSS & React/Next.js"),r("p",null,"\xa9 Ashley Saleem-West ",(new Date).getFullYear()))}}},[["rB5V",0,1,2,3]]]);