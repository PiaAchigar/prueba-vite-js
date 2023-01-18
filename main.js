import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'
import {suma} from "./components/functions/functions"
import {showResult} from './components/functions/showResult';


document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
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
`
document.getElementById("btn").addEventListener('click', () => {
  showResult(document.querySelector('#showRes'),document.getElementById('numero1').value,document.getElementById('numero2').value,document.getElementById('operacion').value)
}
)

//setupCounter(document.querySelector('#counter'))
