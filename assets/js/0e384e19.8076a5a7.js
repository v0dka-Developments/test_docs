"use strict";(self.webpackChunkcconline_docs=self.webpackChunkcconline_docs||[]).push([[671],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=i(r),d=a,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[p]="string"==typeof e?e:a,l[1]=u;for(var i=2;i<o;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8060:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>D,contentTitle:()=>j,default:()=>V,frontMatter:()=>I,metadata:()=>x,toc:()=>S});var n=r(7462),a=r(7294),o=r(3905),l=r(6010),u=r(2466),s=r(6550),i=r(1980),c=r(7392),p=r(12);function m(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function d(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??m(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function f(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:r}=e;const n=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function h(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=d(e),[l,u]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,i]=b({queryString:r,groupId:n}),[c,m]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,p.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),h=(()=>{const e=s??c;return f({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{h&&u(h)}),[h]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);u(e),i(e),m(e)}),[i,m,o]),tabValues:o}}var y=r(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:r,selectedValue:o,selectValue:s,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,u.o5)(),m=e=>{const t=e.currentTarget,r=c.indexOf(t),n=i[r].value;n!==o&&(p(t),s(n))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},t)},i.map((e=>{let{value:t,label:r,attributes:u}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},u,{className:(0,l.Z)("tabs__item",v.tabItem,u?.className,{"tabs__item--active":o===t})}),r??t)})))}function w(e){let{lazy:t,children:r,selectedValue:n}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function k(e){const t=h(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",v.tabList)},a.createElement(g,(0,n.Z)({},e,t)),a.createElement(w,(0,n.Z)({},e,t)))}function E(e){const t=(0,y.Z)();return a.createElement(k,(0,n.Z)({key:String(t)},e))}const T={tabItem:"tabItem_Ymn6"};function O(e){let{children:t,hidden:r,className:n}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(T.tabItem,n),hidden:r},t)}const I={sidebar_position:1},j="Docs Intro",x={unversionedId:"intro",id:"intro",title:"Docs Intro",description:"can this please work?",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/test_docs/docs/intro",draft:!1,editUrl:"https://github.com/v0dka-Developments/test_docs/tree/main/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"PHP - API",permalink:"/test_docs/docs/category/php---api"}},D={},S=[],N={toc:S},P="wrapper";function V(e){let{components:t,...r}=e;return(0,o.kt)(P,(0,n.Z)({},N,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"docs-intro"},"Docs Intro"),(0,o.kt)("p",null,"can this please work?\n",(0,o.kt)("a",{parentName:"p",href:"https://i.imgur.com/AKQUBDh.jpeg?raw=true"},"https://i.imgur.com/AKQUBDh.jpeg?raw=true"),"\n",(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/AKQUBDh.jpeg?raw=true?raw=true",alt:"alt-text"})),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=StTqXEQ2l-Y",title:"Everything Is AWESOME"},(0,o.kt)("img",{parentName:"a",src:"https://img.youtube.com/vi/StTqXEQ2l-Y/0.jpg",alt:"Everything Is AWESOME"}))),(0,o.kt)(E,{mdxType:"Tabs"},(0,o.kt)(O,{value:"apple",label:"Apple",default:!0,mdxType:"TabItem"},"This is an apple \ud83c\udf4e"),(0,o.kt)(O,{value:"orange",label:"Orange",mdxType:"TabItem"},"This is an orange \ud83c\udf4a"),(0,o.kt)(O,{value:"banana",label:"Banana",mdxType:"TabItem"},"This is a banana \ud83c\udf4c")))}V.isMDXComponent=!0}}]);