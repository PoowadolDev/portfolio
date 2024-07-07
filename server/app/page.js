(()=>{var t={};t.id=931,t.ids=[931],t.modules={7849:t=>{"use strict";t.exports=require("next/dist/client/components/action-async-storage.external")},2934:t=>{"use strict";t.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:t=>{"use strict";t.exports=require("next/dist/client/components/request-async-storage.external")},4580:t=>{"use strict";t.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:t=>{"use strict";t.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:t=>{"use strict";t.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:t=>{"use strict";t.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},2330:(t,e,s)=>{"use strict";s.r(e),s.d(e,{GlobalError:()=>o.a,__next_app__:()=>d,originalPathname:()=>u,pages:()=>c,routeModule:()=>h,tree:()=>l});var n=s(482),i=s(9108),r=s(2563),o=s.n(r),a=s(8300),A={};for(let t in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(t)&&(A[t]=()=>a[t]);s.d(e,A);let l=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,4894)),"D:\\Project\\portfolio\\front-end\\app\\page.jsx"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,8243)),"D:\\Project\\portfolio\\front-end\\app\\layout.js"],loading:[()=>Promise.resolve().then(s.bind(s,5016)),"D:\\Project\\portfolio\\front-end\\app\\loading.js"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,9361,23)),"next/dist/client/components/not-found-error"]}],c=["D:\\Project\\portfolio\\front-end\\app\\page.jsx"],u="/page",d={require:s,loadChunk:()=>Promise.resolve()},h=new n.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},8960:(t,e,s)=>{let n={"5d6594d65e274614de75371ec62b36dc0e5e0e78":()=>Promise.resolve().then(s.bind(s,4894)).then(t=>t.default)};async function i(t,...e){return(await n[t]()).apply(null,e)}t.exports={"5d6594d65e274614de75371ec62b36dc0e5e0e78":i.bind(null,"5d6594d65e274614de75371ec62b36dc0e5e0e78")}},5446:(t,e,s)=>{Promise.resolve().then(s.bind(s,4247)),Promise.resolve().then(s.bind(s,7140)),Promise.resolve().then(s.t.bind(s,1900,23))},1226:(t,e,s)=>{Promise.resolve().then(s.bind(s,7085)),Promise.resolve().then(s.bind(s,946)),Promise.resolve().then(s.t.bind(s,1900,23))},3907:(t,e,s)=>{Promise.resolve().then(s.t.bind(s,2583,23)),Promise.resolve().then(s.t.bind(s,6840,23)),Promise.resolve().then(s.t.bind(s,8771,23)),Promise.resolve().then(s.t.bind(s,3225,23)),Promise.resolve().then(s.t.bind(s,9295,23)),Promise.resolve().then(s.t.bind(s,3982,23))},5303:()=>{},4247:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>c});var n=s(5344),i=s(3729);function r(){return(r=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}return t}).apply(this,arguments)}var o={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(t){},onComplete:function(t){},preStringTyped:function(t,e){},onStringTyped:function(t,e){},onLastStringBackspaced:function(t){},onTypingPaused:function(t,e){},onTypingResumed:function(t,e){},onReset:function(t){},onStop:function(t,e){},onStart:function(t,e){},onDestroy:function(t){}},a=new(function(){function t(){}var e=t.prototype;return e.load=function(t,e,s){if(t.el="string"==typeof s?document.querySelector(s):s,t.options=r({},o,e),t.isInput="input"===t.el.tagName.toLowerCase(),t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=!t.isInput&&t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map(function(t){return t.trim()}),t.stringsElement="string"==typeof t.options.stringsElement?document.querySelector(t.options.stringsElement):t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var n=Array.prototype.slice.apply(t.stringsElement.children),i=n.length;if(i)for(var a=0;a<i;a+=1)t.strings.push(n[a].innerHTML.trim())}for(var A in t.strPos=0,t.currentElContent=this.getCurrentElContent(t),t.currentElContent&&t.currentElContent.length>0&&(t.strPos=t.currentElContent.length-1,t.strings.unshift(t.currentElContent)),t.sequence=[],t.strings)t.sequence[A]=A;t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1,t.autoInsertCss=t.options.autoInsertCss,t.autoInsertCss&&(this.appendCursorAnimationCss(t),this.appendFadeOutAnimationCss(t))},e.getCurrentElContent=function(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:"html"===t.contentType?t.el.innerHTML:t.el.textContent},e.appendCursorAnimationCss=function(t){var e="data-typed-js-cursor-css";if(t.showCursor&&!document.querySelector("["+e+"]")){var s=document.createElement("style");s.setAttribute(e,"true"),s.innerHTML="\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      ",document.body.appendChild(s)}},e.appendFadeOutAnimationCss=function(t){var e="data-typed-fadeout-js-css";if(t.fadeOut&&!document.querySelector("["+e+"]")){var s=document.createElement("style");s.setAttribute(e,"true"),s.innerHTML="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      ",document.body.appendChild(s)}},t}()),A=new(function(){function t(){}var e=t.prototype;return e.typeHtmlChars=function(t,e,s){if("html"!==s.contentType)return e;var n,i=t.substring(e).charAt(0);if("<"===i||"&"===i){for(n="<"===i?">":";";t.substring(e+1).charAt(0)!==n&&!(1+ ++e>t.length););e++}return e},e.backSpaceHtmlChars=function(t,e,s){if("html"!==s.contentType)return e;var n,i=t.substring(e).charAt(0);if(">"===i||";"===i){for(n=">"===i?"<":"&";t.substring(e-1).charAt(0)!==n&&!(--e<0););e--}return e},t}()),l=function(){function t(t,e){a.load(this,e,t),this.begin()}var e=t.prototype;return e.toggle=function(){this.pause.status?this.start():this.stop()},e.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},e.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},e.destroy=function(){this.reset(!1),this.options.onDestroy(this)},e.reset=function(t){void 0===t&&(t=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())},e.begin=function(){var t=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){0===t.strPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos):t.backspace(t.strings[t.sequence[t.arrayPos]],t.strPos)},this.startDelay)},e.typewrite=function(t,e){var s=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var n=this.humanizer(this.typeSpeed),i=1;!0!==this.pause.status?this.timeout=setTimeout(function(){e=A.typeHtmlChars(t,e,s);var n,r=0,o=t.substring(e);if("^"===o.charAt(0)&&/^\^\d+/.test(o)&&(n=1+(o=/\d+/.exec(o)[0]).length,r=parseInt(o),s.temporaryPause=!0,s.options.onTypingPaused(s.arrayPos,s),t=t.substring(0,e)+t.substring(e+n),s.toggleBlinking(!0)),"`"===o.charAt(0)){for(;"`"!==t.substring(e+i).charAt(0)&&(i++,!(e+i>t.length)););var a=t.substring(0,e),l=t.substring(a.length+1,e+i);t=a+l+t.substring(e+i+1),i--}s.timeout=setTimeout(function(){s.toggleBlinking(!1),e>=t.length?s.doneTyping(t,e):s.keepTyping(t,e,i),s.temporaryPause&&(s.temporaryPause=!1,s.options.onTypingResumed(s.arrayPos,s))},r)},n):this.setPauseStatus(t,e,!0)},e.keepTyping=function(t,e,s){0===e&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var n=t.substring(0,e+=s);this.replaceText(n),this.typewrite(t,e)},e.doneTyping=function(t,e){var s=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),!1===this.loop||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){s.backspace(t,e)},this.backDelay))},e.backspace=function(t,e){var s=this;if(!0!==this.pause.status){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var n=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){e=A.backSpaceHtmlChars(t,e,s);var n=t.substring(0,e);if(s.replaceText(n),s.smartBackspace){var i=s.strings[s.arrayPos+1];s.stopNum=i&&n===i.substring(0,e)?e:0}e>s.stopNum?(e--,s.backspace(t,e)):e<=s.stopNum&&(s.arrayPos++,s.arrayPos===s.strings.length?(s.arrayPos=0,s.options.onLastStringBackspaced(),s.shuffleStringsIfNeeded(),s.begin()):s.typewrite(s.strings[s.sequence[s.arrayPos]],e))},n)}else this.setPauseStatus(t,e,!1)},e.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},e.setPauseStatus=function(t,e,s){this.pause.typewrite=s,this.pause.curString=t,this.pause.curStrPos=e},e.toggleBlinking=function(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},e.humanizer=function(t){return Math.round(Math.random()*t/2)+t},e.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))},e.initFadeOut=function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)},this.fadeOutDelay)},e.replaceText=function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:"html"===this.contentType?this.el.innerHTML=t:this.el.textContent=t},e.bindFocusEvents=function(){var t=this;this.isInput&&(this.el.addEventListener("focus",function(e){t.stop()}),this.el.addEventListener("blur",function(e){t.el.value&&0!==t.el.value.length||t.start()}))},e.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},t}();let c=function({text:t,options:e={}}){let s=(0,i.useRef)(null);return(0,i.useEffect)(()=>{let t=new l(s.current,{strings:["Software Developer","Backend Developer","Frontend Developer","Data Scientist"],typeSpeed:50,backSpeed:50,loop:!0});return()=>t.destroy()},[t,e]),n.jsx("span",{ref:s})}},7085:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>r});var n=s(5344),i=s(6506);function r(){return(0,n.jsxs)("div",{className:"navbar ps-2 pe-2 font-mono fixed bg-base-100 top-0 z-40 Context",children:[n.jsx("div",{className:"flex-1 ",children:n.jsx(i.default,{className:"btn btn-ghost text-2xl md:text-3xl",href:"/",children:"PR."})}),n.jsx("div",{className:"hidden md:flex flex-row-reverse space-x-4 space-x-reverse",children:(0,n.jsxs)("ul",{className:"menu menu-horizontal px-1 text-2xl",children:[n.jsx("li",{children:n.jsx(i.default,{href:"/",children:"Home"})}),n.jsx("li",{children:n.jsx(i.default,{href:"/about",children:"About"})}),n.jsx("li",{children:n.jsx(i.default,{href:"/project",children:"Project"})}),n.jsx("li",{children:n.jsx("a",{className:"m-0 p-0",download:!0,href:"./Poowadol_CV.pdf",children:n.jsx("button",{className:"btn btn-outline btn-info",children:"Download CV"})})})]})}),(0,n.jsxs)("div",{className:"dropdown dropdown-end md:hidden",children:[n.jsx("div",{tabIndex:0,role:"button",className:"btn m-1 text-white",children:"MENU"}),(0,n.jsxs)("ul",{tabIndex:0,className:"dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-32 text-xs",children:[n.jsx("li",{children:n.jsx(i.default,{href:"/",children:"Home"})}),n.jsx("li",{children:n.jsx(i.default,{href:"/about",children:"About"})}),n.jsx("li",{children:n.jsx(i.default,{href:"/project",children:"Project"})}),n.jsx("li",{children:n.jsx("a",{className:"m-0 p-0",download:!0,href:"./Poowadol_CV.pdf",children:n.jsx("button",{className:"btn btn-outline text-xs btn-info",children:"Download CV"})})})]})]})]})}},8243:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>h,metadata:()=>d});var n=s(5036),i=s(2842),r=s.n(i);s(7272);var o=s(2813);let a={src:"/portfolio/_next/static/media/BG.53069297.jpg",height:1536,width:1536,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAAIsVH//EAB4QAAEDBAMAAAAAAAAAAAAAAAMBAiIABBFhMkFS/9oACAEBAAE/AGFtwCjIqpz856bvdf/EABYRAAMAAAAAAAAAAAAAAAAAAAABEv/aAAgBAgEBPwCmf//EABYRAAMAAAAAAAAAAAAAAAAAAAABEv/aAAgBAwEBPwCEf//Z",blurWidth:8,blurHeight:8},A=(0,s(6843).createProxy)(String.raw`D:\Project\portfolio\front-end\app\component\Navbar.jsx`),{__esModule:l,$$typeof:c}=A,u=A.default,d={title:"Poowadol | Portfolio"};function h({children:t}){return n.jsx("html",{lang:"en","data-theme":"dark",children:(0,n.jsxs)("body",{className:r().className,children:[n.jsx("div",{className:"blur-xl",style:{zIndex:-1,position:"fixed",width:"100%",height:"100%"},children:n.jsx(o.default,{src:a,layout:"fill",objectFit:"cover"})}),n.jsx(u,{}),n.jsx("div",{className:"",children:n.jsx("div",{className:"overflow-auto Context",children:t})}),(0,n.jsxs)("footer",{className:"footer footer-center pt-10 py-10 p-4 bg-base-300 text-base-content text-xs md:text-ms buttom-100 z-40",children:[(0,n.jsxs)("div",{className:"grid grid-cols-1 md:hidden",children:[n.jsx("div",{className:" ps-2 left-0",children:n.jsx("p",{children:"Designed and Developed by Poowadol Rungtabnapa"})}),n.jsx("div",{className:"pe-2 right-0",children:n.jsx("p",{children:"Copyright \xa9 2024"})})]}),(0,n.jsxs)("aside",{className:"hidden md:flex",children:[n.jsx("div",{className:"absolute ps-5 left-0",children:n.jsx("p",{children:"Designed and Developed by Poowadol Rungtabnapa"})}),n.jsx("div",{className:"absolute  pe-5 right-0",children:n.jsx("p",{children:"Copyright \xa9 2024"})})]})]})]})})}},5016:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>i});var n=s(5036);function i(){return n.jsx("section",{className:"container mx-auto content-center",children:n.jsx("div",{className:"relative w-full h-screen",children:n.jsx("div",{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",children:n.jsx("span",{className:"loading loading-bars loading-lg"})})})})}},4894:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>d});var n=s(5036),i=s(3762);s(8616);let r=(0,s(6843).createProxy)(String.raw`D:\Project\portfolio\front-end\app\component\AutoType.js`),{__esModule:o,$$typeof:a}=r,A=r.default;var l=s(2813);let c={src:"/portfolio/_next/static/media/profile.1adcec9b.jpg",height:2048,width:1366,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABQMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAwT/2gAMAwEAAhADEAAAALIKr//EAB4QAAEEAQUAAAAAAAAAAAAAAAECAxESBAAFExRR/9oACAEBAAE/ABu/VwsMvMTdCq8aqRUxB91//8QAFxEBAQEBAAAAAAAAAAAAAAAAAQIAEf/aAAgBAgEBPwCqZeDv/8QAGBEBAQADAAAAAAAAAAAAAAAAAgEAAxH/2gAIAQMBAT8AGkIy8z//2Q==",blurWidth:5,blurHeight:8};s(2);var u=s(5016);async function d(){return n.jsx("section",{className:"overflow-auto ms-5 mt-20  sm:ms-20 md:ms-40  lg:ms-30 xl:ms-40 2xl:ms-60 font-mono",children:n.jsx("div",{className:"flex justify-center",children:(0,n.jsxs)("div",{className:"grid grid-rows-2",children:[(0,n.jsxs)("div",{className:"grid grid-rows-2 md:grid-rows-2   xl:grid-cols-2",children:[n.jsx("div",{className:"relative",children:(0,n.jsxs)("div",{className:"absolute top bottom-10 md:bottom-0 text-xl mt-40 sm:mt-20 md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-4xl  font-medium md:mt-48 lg:mt-40",children:[n.jsx("h1",{className:"text-wrap my-5",children:"Hello There!"}),(0,n.jsxs)("p",{className:"text-wrap my-5",children:["I'M ",n.jsx("span",{className:"text-sky-400/100",children:"POOWADOL RUNGTABNAPA"})]}),n.jsx("p",{className:" text-sky-400/100",children:n.jsx(A,{text:"Software Developer"})})]})}),n.jsx("div",{className:"relative",children:n.jsx("div",{className:"absolute right-20  sm:right-20  md:right-36 md:top-10 lg:right-24 lg:top-0 xl:right-32 xl:top-32 2xl:right-20 2xl:top-40 avatar",children:n.jsx("div",{className:"w-fit h-fit lg:h-96 md:w-80 md:h-80 lg:w-96 xl:w-fit xl:h-fit rounded-full ring ring-sky-400/100 ring-offset-base-100 ring-offset-2",children:n.jsx(l.default,{src:c,loader:u.Loading,layout:"flex",sizes:"50vw",alt:"Picture of the author"})})})})]}),(0,n.jsxs)("div",{className:"text-xl mt-2 sm:mt-40 md:text-3xl lg:text-4xl font-normal bottom-0 me-10 md:mt-48 md:me-20 mb-20",children:[(0,n.jsxs)("p",{className:"text-wrap mb-10 md:mb-20",children:["LET ME ",n.jsx("span",{className:"text-sky-400/100",children:"INTRODUCE"})," MYSELF"]}),(0,n.jsxs)("div",{className:"grid gap-4 text-sm md:text-lg xl:text-2xl font-sans",children:[n.jsx("div",{children:n.jsx("p",{children:"I'm a passionate Programmer with a strong desire to build innovative. I enjoy tackling complex problems and transforming them into efficient solutions"})}),n.jsx("div",{className:"m-0 p-0",children:n.jsx("p",{className:"m-0 p-0",children:"I am fluent in classics like Python, Javascript and Go."})}),n.jsx("div",{children:n.jsx("p",{children:"With experience in building new web applications and a strong foundation in machine learning, This expertise allows me to integrate machine learning models seamlessly into web apps, to fulfill project needs."})}),n.jsx("div",{children:n.jsx("p",{children:"Whenever possible, I also apply my passion for develop with Node.js and Modern Javascript Library, Frameworks like React.js and Next.js"})})]})]})]})})})}(0,s(2053).h)([d]),(0,i.j)("5d6594d65e274614de75371ec62b36dc0e5e0e78",d)},946:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});let n={src:"/portfolio/_next/static/media/BG.53069297.jpg",height:1536,width:1536,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAAIsVH//EAB4QAAEDBAMAAAAAAAAAAAAAAAMBAiIABBFhMkFS/9oACAEBAAE/AGFtwCjIqpz856bvdf/EABYRAAMAAAAAAAAAAAAAAAAAAAABEv/aAAgBAgEBPwCmf//EABYRAAMAAAAAAAAAAAAAAAAAAAABEv/aAAgBAwEBPwCEf//Z",blurWidth:8,blurHeight:8}},7140:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});let n={src:"/portfolio/_next/static/media/profile.1adcec9b.jpg",height:2048,width:1366,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABQMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAwT/2gAMAwEAAhADEAAAALIKr//EAB4QAAEEAQUAAAAAAAAAAAAAAAECAxESBAAFExRR/9oACAEBAAE/ABu/VwsMvMTdCq8aqRUxB91//8QAFxEBAQEBAAAAAAAAAAAAAAAAAQIAEf/aAAgBAgEBPwCqZeDv/8QAGBEBAQADAAAAAAAAAAAAAAAAAgEAAxH/2gAIAQMBAT8AGkIy8z//2Q==",blurWidth:5,blurHeight:8}},7272:()=>{}};var e=require("../webpack-runtime.js");e.C(t);var s=t=>e(e.s=t),n=e.X(0,[832,994,222],()=>s(2330));module.exports=n})();