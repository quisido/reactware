(this.webpackJsonpreactware=this.webpackJsonpreactware||[]).push([[3],{10:function(A,e){A.exports="data:image/gif;base64,R0lGODlhkQAxAPcAAAAAAAAAMwAAZgAAmQAAzAAA/wArAAArMwArZgArmQArzAAr/wBVAABVMwBVZgBVmQBVzABV/wCAAACAMwCAZgCAmQCAzACA/wCqAACqMwCqZgCqmQCqzACq/wDVAADVMwDVZgDVmQDVzADV/wD/AAD/MwD/ZgD/mQD/zAD//zMAADMAMzMAZjMAmTMAzDMA/zMrADMrMzMrZjMrmTMrzDMr/zNVADNVMzNVZjNVmTNVzDNV/zOAADOAMzOAZjOAmTOAzDOA/zOqADOqMzOqZjOqmTOqzDOq/zPVADPVMzPVZjPVmTPVzDPV/zP/ADP/MzP/ZjP/mTP/zDP//2YAAGYAM2YAZmYAmWYAzGYA/2YrAGYrM2YrZmYrmWYrzGYr/2ZVAGZVM2ZVZmZVmWZVzGZV/2aAAGaAM2aAZmaAmWaAzGaA/2aqAGaqM2aqZmaqmWaqzGaq/2bVAGbVM2bVZmbVmWbVzGbV/2b/AGb/M2b/Zmb/mWb/zGb//5kAAJkAM5kAZpkAmZkAzJkA/5krAJkrM5krZpkrmZkrzJkr/5lVAJlVM5lVZplVmZlVzJlV/5mAAJmAM5mAZpmAmZmAzJmA/5mqAJmqM5mqZpmqmZmqzJmq/5nVAJnVM5nVZpnVmZnVzJnV/5n/AJn/M5n/Zpn/mZn/zJn//8wAAMwAM8wAZswAmcwAzMwA/8wrAMwrM8wrZswrmcwrzMwr/8xVAMxVM8xVZsxVmcxVzMxV/8yAAMyAM8yAZsyAmcyAzMyA/8yqAMyqM8yqZsyqmcyqzMyq/8zVAMzVM8zVZszVmczVzMzV/8z/AMz/M8z/Zsz/mcz/zMz///8AAP8AM/8AZv8Amf8AzP8A//8rAP8rM/8rZv8rmf8rzP8r//9VAP9VM/9VZv9Vmf9VzP9V//+AAP+AM/+AZv+Amf+AzP+A//+qAP+qM/+qZv+qmf+qzP+q///VAP/VM//VZv/Vmf/VzP/V////AP//M///Zv//mf//zP///wAAAAAAAAAAAAAAACH5BAEAAPwALAAAAACRADEAAAj/AAHsE0hwoMGCCA8qTMhwocOGEB9KjEhxosWKAvdp3Mixo8ePIEOKHEmypMmTKEFmTDkQgMuVLA3GfOky5kaYKGniTLmzZE2OP23yxBlU6MmiLYX2FLlUJs+nKmdC/diU6dSoRklWdZo15NatWE1+ZQkW6MiyHdFqHHtVq8+uXt/CpSo359G6Yu+6tZt3r96+Z+fS9Sv4Jl7AhOPyPRwWceDEkK1GnltWLVnGkxsPXozZbNvHijl3NlzYI9vSnkOLzmyZ9F/TUle7lq2VaGujSJGiBmpbqU2duH/TDD5zuG/iux0nl5z1durjv7s6nx0dOeqXaYNOFwwTO++q27lW/8/uvaX38GuRA19rHLb1wjrj/0Qv/ab89ZvJ6v5svibB4eWNp19GwP0X4HNPFXTdfOw1tFxcCp7XIHN8EQgdhTJZKKBeGiKo2l8r0UdhiNQ9SGJ6Hn5IWHexgcZiiaM19iKKmWlGVHId0qjjbjemptaP7qWIYVQ7FcmfZuJlqJyKSTZZX5BCNpefYUBOtlSVG8KI5JRaYjmklk6W1pSIO0ZJG5hhpolmjZWBxuVlX5qp5pNMnllmi1DSddqWee355p1moReiduYRWWNwYFVG6IFU1ldgf0YCit2gJ8Lp5KT2kfgofq6FR+B97XVKFYCQSnnnpqGCGiqNgpbaoG6VfnWnKqB+9aSqhPhxyqp6ucGalmnt6dpWkcGueiCjPWZ5mK29xvpak8cSaimth35I5rPXOubptGvW+eV0t9mqbGTZutktd3/GuCW43FIb57fjvlsun3PCNWa89DrX2r3tmisnvQ8GLDCPFxWMkcEIH6xwwgwrHBAAOw=="},11:function(A,e,r){"use strict";r.r(e);var t,n={cycle:0,step:0};!function(A){A[A.CompleteStep=0]="CompleteStep"}(t||(t={}));var c=t;function a(A){switch(A){case 0:return 1;case 1:return 2;case 2:return 3;case 3:return 4;case 4:return 5;case 5:return 0}}var m=r(0),M=r.n(m),V=r(1);var z=r(10),Z=r.n(z),u=["2","ArrowDown","s"],s=["4","ArrowLeft","a"],i=["6","ArrowRight","d"],o=["8","ArrowUp","w"];function w(A){var e,r=A.cycle,t=A.dispatch,n=A.step,a=Object(m.useMemo)((function(){return function(A){switch(A){case 0:return s;case 1:case 4:return o;case 2:case 5:return u;case 3:return i}}(n)}),[n]),M=Object(m.useCallback)((function(A){a.includes(A.key)&&t(c.CompleteStep)}),[t,a]);return e=M,Object(m.useEffect)((function(){return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[e]),Object(m.useMemo)((function(){var A=function(A){switch(A){case 0:case 1:case 3:case 4:return[-1,-1];case 2:return[-49,-1];case 5:return[-97,-1]}}(n),e=Object(V.a)(A,2),t=e[0],c=e[1],a=function(A){return 1+Math.log(A+1)}(r),m=Math.round(t*a),M=Math.round(c*a),z=Math.round(49*a),u=Math.round(145*a);return{backgroundImage:'url("'.concat(Z.a,'")'),backgroundPosition:"".concat(m,"px ").concat(M,"px"),backgroundSize:"".concat(u,"px ").concat(z,"px"),height:Math.floor(47*a),width:Math.floor(47*a)}}),[r,n])}var p={initialState:n,reducer:function(A,e){switch(e){case c.CompleteStep:return{cycle:(r=A.cycle,t=A.step,5===t?r+1:r),step:a(A.step)}}var r,t},title:"Lift",View:function(A){var e=A.dispatch,r=A.state,t=w({cycle:r.cycle,dispatch:e,step:r.step});return M.a.createElement("div",{style:t})}};e.default=p}}]);
//# sourceMappingURL=3.ffab14dd.chunk.js.map