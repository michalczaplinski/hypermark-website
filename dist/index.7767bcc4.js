var e,t,n,r,o,i,l,_={},a=[],c=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function u(e,t){for(var n in t)e[n]=t[n];return e}function s(e){var t=e.parentNode;t&&t.removeChild(e)}function p(t,n,r){var o,i,l,_={};for(l in n)"key"==l?o=n[l]:"ref"==l?i=n[l]:_[l]=n[l];if(arguments.length>2&&(_.children=arguments.length>3?e.call(arguments,2):r),"function"==typeof t&&null!=t.defaultProps)for(l in t.defaultProps)void 0===_[l]&&(_[l]=t.defaultProps[l]);return f(t,_,o,i,null)}function f(e,r,o,i,l){var _={type:e,props:r,key:o,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==l?++n:l};return null!=t.vnode&&t.vnode(_),_}function d(e){return e.children}function h(e,t){this.props=e,this.context=t}function m(e,t){if(null==t)return e.__?m(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?m(e):null}function g(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return g(e)}}function v(e){(!e.__d&&(e.__d=!0)&&r.push(e)&&!y.__r++||i!==t.debounceRendering)&&((i=t.debounceRendering)||o)(y)}function y(){for(var e;y.__r=r.length;)e=r.sort((function(e,t){return e.__v.__b-t.__v.__b})),r=[],e.some((function(e){var t,n,r,o,i,l;e.__d&&(i=(o=(t=e).__v).__e,(l=t.__P)&&(n=[],(r=u({},o)).__v=o.__v+1,S(l,o,r,t.__n,void 0!==l.ownerSVGElement,null!=o.__h?[i]:null,n,null==i?m(o):i,o.__h),j(n,o),o.__e!=i&&g(o)))}))}function b(e,t,n,r,o,i,l,c,u,s){var p,h,g,v,y,b,k,$=r&&r.__k||a,C=$.length;for(n.__k=[],p=0;p<t.length;p++)if(null!=(v=n.__k[p]=null==(v=t[p])||"boolean"==typeof v?null:"string"==typeof v||"number"==typeof v||"bigint"==typeof v?f(null,v,null,null,v):Array.isArray(v)?f(d,{children:v},null,null,null):v.__b>0?f(v.type,v.props,v.key,null,v.__v):v)){if(v.__=n,v.__b=n.__b+1,null===(g=$[p])||g&&v.key==g.key&&v.type===g.type)$[p]=void 0;else for(h=0;h<C;h++){if((g=$[h])&&v.key==g.key&&v.type===g.type){$[h]=void 0;break}g=null}S(e,v,g=g||_,o,i,l,c,u,s),y=v.__e,(h=v.ref)&&g.ref!=h&&(k||(k=[]),g.ref&&k.push(g.ref,null,v),k.push(h,v.__c||y,v)),null!=y?(null==b&&(b=y),"function"==typeof v.type&&null!=v.__k&&v.__k===g.__k?v.__d=u=x(v,u,e):u=w(e,v,g,$,y,u),s||"option"!==n.type?"function"==typeof n.type&&(n.__d=u):e.value=""):u&&g.__e==u&&u.parentNode!=e&&(u=m(g))}for(n.__e=b,p=C;p--;)null!=$[p]&&("function"==typeof n.type&&null!=$[p].__e&&$[p].__e==n.__d&&(n.__d=m(r,p+1)),L($[p],$[p]));if(k)for(p=0;p<k.length;p++)H(k[p],k[++p],k[++p])}function x(e,t,n){var r,o;for(r=0;r<e.__k.length;r++)(o=e.__k[r])&&(o.__=e,t="function"==typeof o.type?x(o,t,n):w(n,o,o,e.__k,o.__e,t));return t}function k(e,t){return t=t||[],null==e||"boolean"==typeof e||(Array.isArray(e)?e.some((function(e){k(e,t)})):t.push(e)),t}function w(e,t,n,r,o,i){var l,_,a;if(void 0!==t.__d)l=t.__d,t.__d=void 0;else if(null==n||o!=i||null==o.parentNode)e:if(null==i||i.parentNode!==e)e.appendChild(o),l=null;else{for(_=i,a=0;(_=_.nextSibling)&&a<r.length;a+=2)if(_==o)break e;e.insertBefore(o,i),l=i}return void 0!==l?l:o.nextSibling}function $(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||c.test(t)?n:n+"px"}function C(e,t,n,r,o){var i;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||$(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||$(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])i=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=n,n?r||e.addEventListener(t,i?P:E,i):e.removeEventListener(t,i?P:E,i);else if("dangerouslySetInnerHTML"!==t){if(o)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null!=n&&(!1!==n||"a"===t[0]&&"r"===t[1])?e.setAttribute(t,n):e.removeAttribute(t))}}function E(e){this.l[e.type+!1](t.event?t.event(e):e)}function P(e){this.l[e.type+!0](t.event?t.event(e):e)}function S(n,r,o,i,l,a,c,p,f){var g,v,y,x,k,w,$,E,P,S,j,H=r.type;if(void 0!==r.constructor)return null;null!=o.__h&&(f=o.__h,p=r.__e=o.__e,r.__h=null,a=[p]),(g=t.__b)&&g(r);try{e:if("function"==typeof H){if(E=r.props,P=(g=H.contextType)&&i[g.__c],S=g?P?P.props.value:g.__:i,o.__c?$=(v=r.__c=o.__c).__=v.__E:("prototype"in H&&H.prototype.render?r.__c=v=new H(E,S):(r.__c=v=new h(E,S),v.constructor=H,v.render=M),P&&P.sub(v),v.props=E,v.state||(v.state={}),v.context=S,v.__n=i,y=v.__d=!0,v.__h=[]),null==v.__s&&(v.__s=v.state),null!=H.getDerivedStateFromProps&&(v.__s==v.state&&(v.__s=u({},v.__s)),u(v.__s,H.getDerivedStateFromProps(E,v.__s))),x=v.props,k=v.state,y)null==H.getDerivedStateFromProps&&null!=v.componentWillMount&&v.componentWillMount(),null!=v.componentDidMount&&v.__h.push(v.componentDidMount);else{if(null==H.getDerivedStateFromProps&&E!==x&&null!=v.componentWillReceiveProps&&v.componentWillReceiveProps(E,S),!v.__e&&null!=v.shouldComponentUpdate&&!1===v.shouldComponentUpdate(E,v.__s,S)||r.__v===o.__v){v.props=E,v.state=v.__s,r.__v!==o.__v&&(v.__d=!1),v.__v=r,r.__e=o.__e,r.__k=o.__k,r.__k.forEach((function(e){e&&(e.__=r)})),v.__h.length&&c.push(v);break e}null!=v.componentWillUpdate&&v.componentWillUpdate(E,v.__s,S),null!=v.componentDidUpdate&&v.__h.push((function(){v.componentDidUpdate(x,k,w)}))}v.context=S,v.props=E,v.state=v.__s,(g=t.__r)&&g(r),v.__d=!1,v.__v=r,v.__P=n,g=v.render(v.props,v.state,v.context),v.state=v.__s,null!=v.getChildContext&&(i=u(u({},i),v.getChildContext())),y||null==v.getSnapshotBeforeUpdate||(w=v.getSnapshotBeforeUpdate(x,k)),j=null!=g&&g.type===d&&null==g.key?g.props.children:g,b(n,Array.isArray(j)?j:[j],r,o,i,l,a,c,p,f),v.base=r.__e,r.__h=null,v.__h.length&&c.push(v),$&&(v.__E=v.__=null),v.__e=!1}else null==a&&r.__v===o.__v?(r.__k=o.__k,r.__e=o.__e):r.__e=function(t,n,r,o,i,l,a,c){var u,p,f,d=r.props,h=n.props,g=n.type,v=0;if("svg"===g&&(i=!0),null!=l)for(;v<l.length;v++)if((u=l[v])&&(u===t||(g?u.localName==g:3==u.nodeType))){t=u,l[v]=null;break}if(null==t){if(null===g)return document.createTextNode(h);t=i?document.createElementNS("http://www.w3.org/2000/svg",g):document.createElement(g,h.is&&h),l=null,c=!1}if(null===g)d===h||c&&t.data===h||(t.data=h);else{if(l=l&&e.call(t.childNodes),p=(d=r.props||_).dangerouslySetInnerHTML,f=h.dangerouslySetInnerHTML,!c){if(null!=l)for(d={},v=0;v<t.attributes.length;v++)d[t.attributes[v].name]=t.attributes[v].value;(f||p)&&(f&&(p&&f.__html==p.__html||f.__html===t.innerHTML)||(t.innerHTML=f&&f.__html||""))}if(function(e,t,n,r,o){var i;for(i in n)"children"===i||"key"===i||i in t||C(e,i,null,n[i],r);for(i in t)o&&"function"!=typeof t[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===t[i]||C(e,i,t[i],n[i],r)}(t,h,d,i,c),f)n.__k=[];else if(v=n.props.children,b(t,Array.isArray(v)?v:[v],n,r,o,i&&"foreignObject"!==g,l,a,l?l[0]:r.__k&&m(r,0),c),null!=l)for(v=l.length;v--;)null!=l[v]&&s(l[v]);c||("value"in h&&void 0!==(v=h.value)&&(v!==t.value||"progress"===g&&!v)&&C(t,"value",v,d.value,!1),"checked"in h&&void 0!==(v=h.checked)&&v!==t.checked&&C(t,"checked",v,d.checked,!1))}return t}(o.__e,r,o,i,l,a,c,f);(g=t.diffed)&&g(r)}catch(n){r.__v=null,(f||null!=a)&&(r.__e=p,r.__h=!!f,a[a.indexOf(p)]=null),t.__e(n,r,o)}}function j(e,n){t.__c&&t.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){t.__e(e,n.__v)}}))}function H(e,n,r){try{"function"==typeof e?e(n):e.current=n}catch(e){t.__e(e,r)}}function L(e,n,r){var o,i;if(t.unmount&&t.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||H(o,null,n)),null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){t.__e(e,n)}o.base=o.__P=null}if(o=e.__k)for(i=0;i<o.length;i++)o[i]&&L(o[i],n,"function"!=typeof e.type);r||null==e.__e||s(e.__e),e.__e=e.__d=void 0}function M(e,t,n){return this.constructor(e,n)}function U(n,r,o){var i,l,a;t.__&&t.__(n,r),l=(i="function"==typeof o)?null:o&&o.__k||r.__k,a=[],S(r,n=(!i&&o||r).__k=p(d,null,[n]),l||_,_,void 0!==r.ownerSVGElement,!i&&o?[o]:l?null:r.firstChild?e.call(r.childNodes):null,a,!i&&o?o:l?l.__e:r.firstChild,i),j(a,n)}function A(e,t){U(e,t,A)}function T(t,n,r){var o,i,l,_=u({},t.props);for(l in n)"key"==l?o=n[l]:"ref"==l?i=n[l]:_[l]=n[l];return arguments.length>2&&(_.children=arguments.length>3?e.call(arguments,2):r),f(t.type,_,o||t.key,i||t.ref,null)}function F(e,t){var n={__c:t="__cC"+l++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var n,r;return this.getChildContext||(n=[],(r={})[t]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&n.some(v)},this.sub=function(e){n.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){n.splice(n.indexOf(e),1),t&&t.call(e)}}),e.children}};return n.Provider.__=n.Consumer.contextType=n}e=a.slice,t={__e:function(e,t){for(var n,r,o;t=t.__;)if((n=t.__c)&&!n.__)try{if((r=n.constructor)&&null!=r.getDerivedStateFromError&&(n.setState(r.getDerivedStateFromError(e)),o=n.__d),null!=n.componentDidCatch&&(n.componentDidCatch(e),o=n.__d),o)return n.__E=n}catch(t){e=t}throw e}},n=0,h.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=u({},this.state),"function"==typeof e&&(e=e(u({},n),this.props)),e&&u(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),v(this))},h.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),v(this))},h.prototype.render=d,r=[],o="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,y.__r=0,l=0;var N=function(e,t,n,r){var o;t[0]=0;for(var i=1;i<t.length;i++){var l=t[i++],_=t[i]?(t[0]|=l?1:2,n[t[i++]]):t[++i];3===l?r[0]=_:4===l?r[1]=Object.assign(r[1]||{},_):5===l?(r[1]=r[1]||{})[t[++i]]=_:6===l?r[1][t[++i]]+=_+"":l?(o=e.apply(_,N(e,_,n,["",null])),r.push(o),_[0]?t[0]|=2:(t[i-2]=0,t[i]=o)):r.push(_)}return r},D=new Map;var O,z,R,W=function(e){var t=D.get(this);return t||(t=new Map,D.set(this,t)),(t=N(this,t.get(e)||(t.set(e,t=function(e){for(var t,n,r=1,o="",i="",l=[0],_=function(e){1===r&&(e||(o=o.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?l.push(0,e,o):3===r&&(e||o)?(l.push(3,e,o),r=2):2===r&&"..."===o&&e?l.push(4,e,0):2===r&&o&&!e?l.push(5,0,!0,o):r>=5&&((o||!e&&5===r)&&(l.push(r,0,o,n),r=6),e&&(l.push(r,e,0,n),r=6)),o=""},a=0;a<e.length;a++){a&&(1===r&&_(),_(a));for(var c=0;c<e[a].length;c++)t=e[a][c],1===r?"<"===t?(_(),l=[l],r=3):o+=t:4===r?"--"===o&&">"===t?(r=1,o=""):o=t+o[0]:i?t===i?i="":o+=t:'"'===t||"'"===t?i=t:">"===t?(_(),r=1):r&&("="===t?(r=5,n=o,o=""):"/"===t&&(r<5||">"===e[a][c+1])?(_(),3===r&&(l=l[0]),r=l,(l=l[0]).push(2,0,r),r=0):" "===t||"\t"===t||"\n"===t||"\r"===t?(_(),r=2):o+=t),3===r&&"!--"===o&&(r=4,l=l[0])}return _(),l}(e)),t),arguments,[])).length>1?t:t[0]}.bind(p),q=0,I=[],B=t.__b,K=t.__r,G=t.diffed,V=t.__c,Z=t.unmount;function J(e,n){t.__h&&t.__h(z,e,q||n),q=0;var r=z.__H||(z.__H={__:[],__h:[]});return e>=r.__.length&&r.__.push({}),r.__[e]}function Q(e,t,n){var r=J(O++,2);return r.t=e,r.__c||(r.__=[n?n(t):_e(void 0,t),function(e){var t=r.t(r.__[0],e);r.__[0]!==t&&(r.__=[t,r.__[1]],r.__c.setState({}))}],r.__c=z),r.__}function X(e,n){var r=J(O++,4);!t.__s&&le(r.__H,n)&&(r.__=e,r.__H=n,z.__h.push(r))}function Y(e){return q=5,ee((function(){return{current:e}}),[])}function ee(e,t){var n=J(O++,7);return le(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function te(e){var t=z.context[e.__c],n=J(O++,9);return n.c=e,t?(null==n.__&&(n.__=!0,t.sub(z)),t.props.value):e.__}function ne(){I.forEach((function(e){if(e.__P)try{e.__H.__h.forEach(oe),e.__H.__h.forEach(ie),e.__H.__h=[]}catch(xe){e.__H.__h=[],t.__e(xe,e.__v)}})),I=[]}t.__b=function(e){z=null,B&&B(e)},t.__r=function(e){K&&K(e),O=0;var t=(z=e.__c).__H;t&&(t.__h.forEach(oe),t.__h.forEach(ie),t.__h=[])},t.diffed=function(e){G&&G(e);var n=e.__c;n&&n.__H&&n.__H.__h.length&&(1!==I.push(n)&&R===t.requestAnimationFrame||((R=t.requestAnimationFrame)||function(e){var t,n=function(){clearTimeout(r),re&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);re&&(t=requestAnimationFrame(n))})(ne)),z=void 0},t.__c=function(e,n){n.some((function(e){try{e.__h.forEach(oe),e.__h=e.__h.filter((function(e){return!e.__||ie(e)}))}catch(r){n.some((function(e){e.__h&&(e.__h=[])})),n=[],t.__e(r,e.__v)}})),V&&V(e,n)},t.unmount=function(e){Z&&Z(e);var n=e.__c;if(n&&n.__H)try{n.__H.__.forEach(oe)}catch(e){t.__e(e,n.__v)}};var re="function"==typeof requestAnimationFrame;function oe(e){var t=z;"function"==typeof e.__c&&e.__c(),z=t}function ie(e){var t=z;e.__c=e.__(),z=t}function le(e,t){return!e||e.length!==t.length||t.some((function(t,n){return t!==e[n]}))}function _e(e,t){return"function"==typeof t?t(e):t}let ae;const ce=(e,t)=>{if(ae=void 0,t&&"click"===t.type){if(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button)return e;const n=t.target.closest("a[href]");if(!n||n.origin!=location.origin||/^#/.test(n.getAttribute("href"))||!/^(_?self)?$/i.test(n.target))return e;ae=!0,t.preventDefault(),t=n.href.replace(location.origin,"")}else"string"==typeof t?ae=!0:t=location.pathname+location.search;return!0===ae?history.pushState(null,"",t):!1===ae&&history.replaceState(null,"",t),t};function ue(e){const[t,n]=Q(ce,e.url||location.pathname+location.search),r=!0===ae,o=ee((()=>{const e=new URL(t,location.origin),o=e.pathname.replace(/(.)\/$/g,"$1");return{url:t,path:o,query:Object.fromEntries(e.searchParams),route:n,wasPush:r}}),[t]);return X((()=>(addEventListener("click",n),addEventListener("popstate",n),()=>{removeEventListener("click",n),removeEventListener("popstate",n)})),[]),p(ue.ctx.Provider,{value:o},e.children)}const se=Promise.resolve();function pe(e){const[t,n]=Q((e=>e+1),0),{url:r,query:o,wasPush:i,path:l}=me(),{rest:_=l,params:a={}}=te(de),c=Y(!1),u=Y(l),s=Y(0),f=Y(),d=Y(),h=Y(),m=Y(!1),g=Y();g.current=!1,f.current=ee((()=>{let t,n,r;return this.__v&&this.__v.__k&&this.__v.__k.reverse(),s.current++,d.current=f.current,k(e.children).some((e=>{if(((e,t,n)=>{e=e.split("/").filter(Boolean),t=(t||"").split("/").filter(Boolean);for(let r,o,i=0;i<Math.max(e.length,t.length);i++){let[,l,_,a]=(t[i]||"").match(/^(:?)(.*?)([+*?]?)$/);if(r=e[i],l||_!=r){if(!l&&r&&"*"==a){n.rest="/"+e.slice(i).map(decodeURIComponent).join("/");break}if(!l||!r&&"?"!=a&&"*"!=a)return;if(o="+"==a||"*"==a,o?r=e.slice(i).map(decodeURIComponent).join("/"):r&&(r=decodeURIComponent(r)),n.params[_]=r,_ in n||(n[_]=r),o)break}}return n})(_,e.props.path,r={path:_,query:o,params:a,rest:""}))return t=T(e,r);e.props.default&&(n=T(e,r))})),p(de.Provider,{value:r},t||n)}),[r]);const v=d.current;return d.current=null,this.__c=t=>{g.current=!0,d.current=v,e.onLoadStart&&e.onLoadStart(r),c.current=!0;let o=s.current;t.then((()=>{o===s.current&&(d.current=null,se.then(n))}))},X((()=>{const t=this.__v&&this.__v.__e;g.current?m.current||h.current||(h.current=t):(!m.current&&h.current&&(h.current!==t&&h.current.remove(),h.current=null),m.current=!0,u.current!==l&&(i&&scrollTo(0,0),e.onLoadEnd&&c.current&&e.onLoadEnd(r),e.onRouteChange&&e.onRouteChange(r),c.current=!1,u.current=l))}),[l,i,t]),[p(fe,{r:f}),p(fe,{r:d})]}const fe=({r:e})=>e.current;pe.Provider=ue,ue.ctx=F({});const de=F({}),he=e=>p(e.component,e),me=()=>te(ue.ctx),ge=t.__e;function ve(e){return this.__c=ye,this.componentDidCatch=e.onError,e.children}function ye(e){e.then((()=>this.forceUpdate()))}let be;t.__e=(e,t,n)=>{if(e&&e.then){let r=t;for(;r=r.__;)if(r.__c&&r.__c.__c)return null==t.__e&&(t.__e=n.__e,t.__k=n.__k),t.__k||(t.__k=[]),r.__c.__c(e,t)}ge&&ge(e,t,n)};let xe,ke,we,$e={data:""},Ce=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||$e,Ee=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(})/g,Pe=/\/\*[^]*?\*\/|\s\s+|\n/g,Se=(e,t)=>{let n,r="",o="",i="";for(let l in e){let _=e[l];"object"==typeof _?(n=t?t.replace(/([^,])+/g,(e=>l.replace(/([^,])+/g,(t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)))):l,o+="@"==l[0]?"f"==l[1]?Se(_,l):l+"{"+Se(_,"k"==l[1]?"":t)+"}":Se(_,n)):"@"==l[0]&&"i"==l[1]?r=l+" "+_+";":(l=l.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=Se.p?Se.p(l,_):l+":"+_+";")}return i[0]?(n=t?t+"{"+i+"}":i,r+n+o):r+o},je={},He=e=>{let t="";for(let n in e)t+=n+("object"==typeof e[n]?He(e[n]):e[n]);return t},Le=(e,t,n,r,o)=>{let i="object"==typeof e?He(e):e,l=je[i]||(je[i]=(e=>{let t=0,n=11;for(;t<e.length;)n=101*n+e.charCodeAt(t++)>>>0;return"go"+n})(i));if(!je[l]){let t="object"==typeof e?e:(e=>{let t,n=[{}];for(;t=Ee.exec(e.replace(Pe,""));)t[4]&&n.shift(),t[3]?n.unshift(n[0][t[3]]=n[0][t[3]]||{}):t[4]||(n[0][t[1]]=t[2]);return n[0]})(e);je[l]=Se(o?{["@keyframes "+l]:t}:t,n?"":"."+l)}return((e,t,n)=>{-1==t.data.indexOf(e)&&(t.data=n?e+t.data:t.data+e)})(je[l],t,r),l},Me=(e,t,n)=>e.reduce(((e,r,o)=>{let i=t[o];if(i&&i.call){let e=i(n),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":Se(e,""):e}return e+r+(null==i?"":i)}),"");function Ue(e){let t=this||{},n=e.call?e(t.p):e;return Le(n.unshift?n.raw?Me(n,[].slice.call(arguments,1),t.p):n.reduce(((e,n)=>n?Object.assign(e,n.call?n(t.p):n):e),{}):n,Ce(t.target),t.g,t.o,t.k)}function Ae(e,t){let n=this||{};return function(){let r=arguments;function o(i,l){let _=Object.assign({},i),a=_.className||o.className;n.p=Object.assign({theme:ke&&ke()},_),n.o=/ *go\d+/.test(a),_.className=Ue.apply(n,r)+(a?" "+a:""),t&&(_.ref=l);let c=_.as||e;return delete _.as,we&&c[0]&&we(_),xe(c,_)}return t?t(o):o}}Ue.bind({g:1}),Ue.bind({k:1});const Te=Ae("div")`
  background-color: white;
`,Fe=Ae("img")`
  height: 45px;
  display: block;
  margin-bottom: 0px;
  margin-right: 15px;
  padding-bottom: 2px;
`,Ne=Ae("div")`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.1rem 1.0875rem;
  display: flex;
`,De=()=>W`<${Te}><${Ne}><${Fe} src="images/icon.svg" alt="logo"/><h1 style=${{margin:0}}><span>Hypermark</span></h1><//><//>`,Oe=Ae("div")`
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  padding-top: 30px;
  @media screen and (max-width: ${"700px"}) {
    padding-top: 27px;
    flex-flow: column;
    align-items: center;
  }
`,ze=Ae("div")`
  display: flex;
  flex-flow: column;
  color: var(--dark-color);
  max-width: 450px;
  min-width: 300px;
  width: auto;
  padding: 20px;
  padding-top: 23px;

  @media screen and (max-width: ${"700px"}) {
    max-width: 100%;
    padding-top: 10px;
    padding-left: 30px;
    padding-right: 30px;
    align-items: center;
  }
`,Re=Ae("h3")`
  width: 100%;
  line-height: 1.3;
  margin-bottom: 14px;

  @media screen and (max-width: ${"700px"}) {
    margin-bottom: 18px;
    font-size: 29px;
    text-align: center;
  }
`,We=Ae("div")`
  line-height: 2;
  margin-bottom: 24px;

  @media screen and (max-width: ${"700px"}) {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    text-align: left;
  }
`,qe=Ae("div")`
  margin-left: 8px;
`,Ie=Ae("button")`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-stretch: expanded;
  margin: 0;
  padding: 10px 21px;
  border-radius: 5px;
  border: 2px solid var(--dark-color);
  background-color: white;

  &:hover {
    background-color: #fff5d4;
    border-color: var(--dark-color);
    cursor: pointer;
  }

  transition: background-color, color, border-color, 150ms ease-in-out;
`,Be=Ae("div")`
  width: 450px;
  height: auto;
  max-width: 100%;
  display: flex;
  justify-content: center;
`,Ke=Ae("a")`
  text-decoration: none;
`,Ge=Ae("img")`
  padding-bottom: 0;
  margin-right: 12px;
  margin-bottom: 2px;
`,Ve=Ae("div")`
  width: 100%;
  height: auto;
  background: var(--main-color);
`,Ze=Ae("div")`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
  color: white;
`,Je=Ae("footer")`
  min-height: 45px;
  text-align: center;
  bottom: 0;
  left: 0;
  padding: 8px 20px;
  line-height: 1.5;
  font-size: 13px;
  background-color: #cff0ff;
  font-weight: 500;
`,Qe=Ae("a")`
  display: inline-block;
  font-size: 13px;
  margin-left: 4px;
  margin-right: 4px;
`,Xe=Ae("span")`
  display: inline-block;
  font-size: 20px;
  margin-left: 4px;
  margin-right: 2px;
`,Ye=({children:e})=>W`<${De}/><${Ve}><${Ze}>${e}<//><//><${Je}> Made with <${Xe} role="img"> ✌️ <//>&<${Xe} role="img"> ☕️️ <//> by <${Qe} href="https://github.com/michalczaplinski"> Michal Czaplinski <//><span>in Berlin, Kampala & Lima.</span><//>`,et=()=>W`<${Ye}><${Oe}><${Be}><picture><source srcset="images/app.webp" type="image/webp"/><img src="images/app.jpg" alt="hypermark "/></picture><//><${ze}><${We}><${Re}> Manager for your markdown notes <//><${qe}><div>👉 Markdown-first </div><div>👉 Instant search </div><div>👉 Bring your own notes </div><//><//><${Ke} href="https://github.com/michalczaplinski/hypermark/releases/download/v0.7.0/Hypermark-0.7.0.dmg"><${Ie}><${Ge} src="images/apple.svg"/>Download for MacOS <//><//><//><//><//>`,tt=()=>W`<section><h1>404: Not Found</h1><p>It's gone :(</p></section>`;var nt=new Map([["align-self","-ms-grid-row-align"],["color-adjust","-webkit-print-color-adjust"],["column-gap","grid-column-gap"],["gap","grid-gap"],["grid-template-columns","-ms-grid-columns"],["grid-template-rows","-ms-grid-rows"],["justify-self","-ms-grid-column-align"],["margin-inline-end","-webkit-margin-end"],["margin-inline-start","-webkit-margin-start"],["overflow-wrap","word-wrap"],["padding-inline-end","-webkit-padding-end"],["padding-inline-start","-webkit-padding-start"],["row-gap","grid-row-gap"],["scroll-margin-bottom","scroll-snap-margin-bottom"],["scroll-margin-left","scroll-snap-margin-left"],["scroll-margin-right","scroll-snap-margin-right"],["scroll-margin-top","scroll-snap-margin-top"],["scroll-margin","scroll-snap-margin"],["text-combine-upright","-ms-text-combine-horizontal"]]);function rt(){return W`<${ue}><${ve}><${pe}><${he} path="/" component=${et}/><${he} default component=${tt}/><//><//><//>`}async function ot(e){const{default:t}=await import("./chunks/prerender.0392e6f7.js"),n=await t(W`<${rt} ...${e}/>`),r=(e=>{let t=Ce(e),n=t.data;return t.data="",n})();return n.html=`<style id="_goober"> ${r}</style>${n.html}`,n}!function(e,t,n,r){Se.p=t,xe=e,ke=n,we=r}(p,(function(e,t){let n="";const r=nt.get(e);r&&(n+=`${r}:${t};`);const o=function(e){var t=/^(?:(text-(?:decoration$|e|or|si)|back(?:ground-cl|d|f)|box-d|(?:mask(?:$|-[ispro]|-cl)))|(tab-|column(?!-s)|text-align-l)|(ap)|(u|hy))/i.exec(e);return t?t[1]?1:t[2]?2:t[3]?3:5:0}(e);1&o&&(n+=`-webkit-${e}:${t};`),2&o&&(n+=`-moz-${e}:${t};`),4&o&&(n+=`-ms-${e}:${t};`);const i=function(e,t){var n=/^(?:(pos)|(background-i)|((?:max-|min-)?(?:block-s|inl|he|widt))|(dis))/i.exec(e);return n?n[1]?/^sti/i.test(t)?1:0:n[2]?/^image-/i.test(t)?1:0:n[3]?"-"===t[3]?2:0:/^(inline-)?grid$/i.test(t)?4:0:0}(e,t);return 1&i?n+=`${e}:-webkit-${t};`:2&i?n+=`${e}:-moz-${t};`:4&i&&(n+=`${e}:-ms-${t};`),n+=`${e}:${t};`,n})),function(e,t){if("undefined"==typeof window)return;let n=document.querySelector("script[type=isodata]");t=t||n&&n.parentNode||document.body,!be&&n?A(e,t):U(e,t),be=!0}(W`<${rt}/>`);export{rt as App,T as B,d,t as l,ot as prerender,p as v};