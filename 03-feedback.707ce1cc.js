var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,o=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,l=f||u||Function("return this")(),c=Object.prototype.toString,s=Math.max,m=Math.min,d=function(){return l.Date.now()};function g(e,t,n){var i,r,o,a,f,u,l=0,c=!1,g=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=i,o=r;return i=r=void 0,l=t,a=e.apply(o,n)}function S(e){return l=e,f=setTimeout(T,t),c?b(e):a}function O(e){var n=e-u;return void 0===u||n>=t||n<0||g&&e-l>=o}function T(){var e=d();if(O(e))return h(e);f=setTimeout(T,function(e){var n=t-(e-u);return g?m(n,o-(e-l)):n}(e))}function h(e){return f=void 0,y&&i?b(e):(i=r=void 0,a)}function j(){var e=d(),n=O(e);if(i=arguments,r=this,u=e,n){if(void 0===f)return S(u);if(g)return f=setTimeout(T,t),b(u)}return void 0===f&&(f=setTimeout(T,t)),a}return t=p(t)||0,v(n)&&(c=!!n.leading,o=(g="maxWait"in n)?s(p(n.maxWait)||0,t):o,y="trailing"in n?!!n.trailing:y),j.cancel=function(){void 0!==f&&clearTimeout(f),l=0,i=u=r=f=void 0},j.flush=function(){return void 0===f?a:h(d())},j}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var f=r.test(e);return f||o.test(e)?a(e.slice(2),f?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),g(e,t,{leading:i,maxWait:t,trailing:r})};const y=document.querySelector(".feedback-form"),b=document.querySelector('input[name="email"]'),S=document.querySelector('textarea[name="message"]');let O={email:"",message:""};localStorage.getItem("feedback-form-state")||localStorage.setItem("feedback-form-state",JSON.stringify(O));let T=JSON.parse(localStorage.getItem("feedback-form-state"));(T.email||T.message)&&(b.value=T.email,S.value=T.message),y.addEventListener("input",t((function(){localStorage.setItem("feedback-form-state",JSON.stringify({email:b.value,message:S.value}))}),1e3)),y.addEventListener("submit",(function(e){e.preventDefault();const{elements:{email:t,message:n}}=e.currentTarget;if(""===t.value||""===n.value)return console.log("Please fill in all the fields!");O={email:t.value,message:n.value},console.log(O),localStorage.setItem("feedback-form-state",JSON.stringify(O)),e.currentTarget.reset()}));
//# sourceMappingURL=03-feedback.707ce1cc.js.map
