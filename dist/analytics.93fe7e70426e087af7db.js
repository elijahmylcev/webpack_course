window.analytics=function(){let e=0,t=!1;const n=()=>e++;return document.addEventListener("click",n),{destroy(){document.removeEventListener("click",n),t=!0},getClicks:()=>t?`Analytics is destroyed. Clics = ${e}`:e}}();