"use strict";(self.webpackChunkcconline_docs=self.webpackChunkcconline_docs||[]).push([[671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8060:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>x,contentTitle:()=>I,default:()=>P,frontMatter:()=>O,metadata:()=>C,toc:()=>S});var a=n(7462),r=n(7294),o=n(3905),i=n(6010),l=n(2466),u=n(6550),s=n(1980),c=n(7392),p=n(12);function m(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??m(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const a=(0,u.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[u,s]=b({queryString:n,groupId:a}),[c,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,p.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),h=(()=>{const e=u??c;return f({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!f({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),s(e),m(e)}),[s,m,o]),tabValues:o}}var k=n(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:o,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),a=s[n].value;a!==o&&(p(t),u(a))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},l,{className:(0,i.Z)("tabs__item",y.tabItem,l?.className,{"tabs__item--active":o===t})}),n??t)})))}function g(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=h(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",y.tabList)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(g,(0,a.Z)({},e,t)))}function N(e){const t=(0,k.Z)();return r.createElement(w,(0,a.Z)({key:String(t)},e))}const E={tabItem:"tabItem_Ymn6"};function T(e){let{children:t,hidden:n,className:a}=e;return r.createElement("div",{role:"tabpanel",className:(0,i.Z)(E.tabItem,a),hidden:n},t)}const O={sidebar_position:1},I="Docs Intro",C={unversionedId:"intro",id:"intro",title:"Docs Intro",description:"can this please work?",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/test_docs/docs/intro",draft:!1,editUrl:"https://github.com/v0dka-Developments/test_docs/tree/main/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"PHP - API",permalink:"/test_docs/docs/category/php---api"}},x={},S=[],j={toc:S},D="wrapper";function P(e){let{components:t,...n}=e;return(0,o.kt)(D,(0,a.Z)({},j,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"docs-intro"},"Docs Intro"),(0,o.kt)("p",null,"can this please work?\nimage"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/AKQUBDh.jpeg?raw=true?raw=true",alt:"alt-text"}),"\nvideo"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=StTqXEQ2l-Y",title:"Everything Is AWESOME"},(0,o.kt)("img",{parentName:"a",src:"https://img.youtube.com/vi/StTqXEQ2l-Y/0.jpg",alt:"Everything Is AWESOME"}))),(0,o.kt)("p",null,"tabs"),(0,o.kt)(N,{mdxType:"Tabs"},(0,o.kt)(T,{value:"apple",label:"Apple",default:!0,mdxType:"TabItem"},"This is an apple \ud83c\udf4e"),(0,o.kt)(T,{value:"orange",label:"Orange",mdxType:"TabItem"},"This is an orange \ud83c\udf4a"),(0,o.kt)(T,{value:"banana",label:"Banana",mdxType:"TabItem"},"This is a banana \ud83c\udf4c")),(0,o.kt)("p",null,"notes"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Some ",(0,o.kt)("strong",{parentName:"p"},"content")," with ",(0,o.kt)("em",{parentName:"p"},"Markdown")," ",(0,o.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,o.kt)("a",{parentName:"p",href:"#"},"this ",(0,o.kt)("inlineCode",{parentName:"a"},"api")),".")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Some ",(0,o.kt)("strong",{parentName:"p"},"content")," with ",(0,o.kt)("em",{parentName:"p"},"Markdown")," ",(0,o.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,o.kt)("a",{parentName:"p",href:"#"},"this ",(0,o.kt)("inlineCode",{parentName:"a"},"api")),".")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Some ",(0,o.kt)("strong",{parentName:"p"},"content")," with ",(0,o.kt)("em",{parentName:"p"},"Markdown")," ",(0,o.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,o.kt)("a",{parentName:"p",href:"#"},"this ",(0,o.kt)("inlineCode",{parentName:"a"},"api")),".")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Some ",(0,o.kt)("strong",{parentName:"p"},"content")," with ",(0,o.kt)("em",{parentName:"p"},"Markdown")," ",(0,o.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,o.kt)("a",{parentName:"p",href:"#"},"this ",(0,o.kt)("inlineCode",{parentName:"a"},"api")),".")),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Some ",(0,o.kt)("strong",{parentName:"p"},"content")," with ",(0,o.kt)("em",{parentName:"p"},"Markdown")," ",(0,o.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,o.kt)("a",{parentName:"p",href:"#"},"this ",(0,o.kt)("inlineCode",{parentName:"a"},"api")),".")))}P.isMDXComponent=!0}}]);