(this.webpackJsonpreactware=this.webpackJsonpreactware||[]).push([[3],{10:function(e,t,r){"use strict";r.r(t);var n,c={cycle:0,step:0};!function(e){e[e.CompleteStep=0]="CompleteStep"}(n||(n={}));var s=n;function a(e){switch(e){case 0:return 1;case 1:return 2;case 2:return 3;case 3:return 4;case 4:return 5;case 5:return 0}}var i=r(0),u=r.n(i);var o=["2","ArrowDown","s"],p=["4","ArrowLeft","a"],w=["6","ArrowRight","d"],f=["8","ArrowUp","w"];function l(e){var t,r=e.dispatch,n=e.step,c=Object(i.useMemo)((function(){return function(e){switch(e){case 0:return p;case 1:case 4:return f;case 2:case 5:return o;case 3:return w}}(n)}),[n]),a=Object(i.useCallback)((function(e){c.includes(e.key)&&r(s.CompleteStep)}),[r,c]);t=a,Object(i.useEffect)((function(){return window.addEventListener("keydown",t),function(){window.removeEventListener("keydown",t)}}),[t])}var d={initialState:c,reducer:function(e,t){switch(t){case s.CompleteStep:return{cycle:(r=e.cycle,n=e.step,5===n?r+1:r),step:a(e.step)}}var r,n},title:"Lift",View:function(e){var t=e.dispatch,r=e.state,n=r.cycle,c=r.step;return l({dispatch:t,step:c}),u.a.createElement("div",null,"Lift ",n," ",c)}};t.default=d}}]);
//# sourceMappingURL=3.f4dc8b8d.chunk.js.map