(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{109:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return i})),r.d(n,"metadata",(function(){return c})),r.d(n,"toc",(function(){return l})),r.d(n,"default",(function(){return s}));var t=r(3),o=r(7),a=(r(0),r(114)),i={title:"\u89c6\u9891\u955c\u50cf"},c={unversionedId:"examples/mirroring",id:"examples/mirroring",isDocsHomePage:!1,title:"\u89c6\u9891\u955c\u50cf",description:"\u8fd9\u4e2a\u529f\u80fd\u6211\u4eec\u4f7f\u7528 switch \u7c7b\u578b\u7684 SettingItem \u6765\u7f16\u5199\u3002",source:"@site/docs/examples/mirroring.md",slug:"/examples/mirroring",permalink:"/docs/examples/mirroring",editUrl:"https://github.com/woopen/nplayer/edit/main/website/docs/examples/mirroring.md",version:"current",sidebar:"docs",previous:{title:"\u89c6\u9891\u622a\u56fe",permalink:"/docs/examples/screenshot"}},l=[],p={toc:l};function s(e){var n=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},p,r,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u8fd9\u4e2a\u529f\u80fd\u6211\u4eec\u4f7f\u7528 ",Object(a.b)("inlineCode",{parentName:"p"},"switch")," \u7c7b\u578b\u7684 ",Object(a.b)("inlineCode",{parentName:"p"},"SettingItem")," \u6765\u7f16\u5199\u3002"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"const Mirroring = {\n  type: 'switch',\n  html: '\u89c6\u9891\u955c\u50cf',\n  checked: false,\n  init(player) {\n    player.video.classList.remove('nplayer_video-mirroring')\n    // \u9ed8\u8ba4\u4e0d\u662f\u955c\u50cf\n  },\n  change(value, player) {\n    player.video.classList.toggle('nplayer_video-mirroring', value)\n    // \u901a\u8fc7\u6dfb\u52a0\u79fb\u9664 class \u6765\u8ba9\u89c6\u9891\u662f\u5426\u662f\u955c\u50cf\n  }\n}\n\nconst player = new Player({\n  settings: [Mirroring, 'speed']\n})\nplayer.mount(document.body)\n")),Object(a.b)("p",null,"CSS \u4ee3\u7801\u5982\u4e0b\u3002"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-css"},".nplayer_video-mirroring {\n  transform: scaleX(-1);\n}\n")))}s.isMDXComponent=!0},114:function(e,n,r){"use strict";r.d(n,"a",(function(){return u})),r.d(n,"b",(function(){return f}));var t=r(0),o=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),s=function(e){var n=o.a.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},u=function(e){var n=s(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=t,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||a;return r?o.a.createElement(f,c(c({ref:n},p),{},{components:r})):o.a.createElement(f,c({ref:n},p))}));function f(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);