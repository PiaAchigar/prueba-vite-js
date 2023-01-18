(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const c="/assets/javascript-8dac5379.svg";function s(r,o){return r+o}function a(r,o,n,i){let e=0;e=s(o,n),r.innerHTML=`Result is ${e}`}document.querySelector("#app").innerHTML=`
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${c}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Calculadora</h1>
    <input type="text" id="numero1" placeholder="incerte numero 1">
    <input type="text" id="numero2" placeholder="incerte numero 2">
    <input type="text" id="operacion" placeholder="incerte la operacion">
    <div class="card">
      <button id="btn" type="button">Calcular</button>
    </div>
    <p id="showRes"></p>
  </div>
`;document.getElementById("btn").addEventListener("click",()=>{a(document.querySelector("#showRes"),document.getElementById("numero1").value,document.getElementById("numero2").value,document.getElementById("operacion").value)});
