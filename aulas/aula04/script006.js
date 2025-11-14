// Essa variável funciona para todas as functions.
var area = document.getElementById('area')

// Adiciona um evento que aguarda a interação direto no arquivo JS, impedindo assim a necessidade do aumento de código no HTML.
area.addEventListener('click', clicar)
area.addEventListener('mouseenter', entrar)
area.addEventListener('mouseout', sair)

// Vamos disparar um evento de click. Esse evento só acontece quando clicamos.
function clicar() {
    area.innerText = 'Clicou!'
    area.style.background = 'red'
}

// Vamos disparar um evento de inside. Esse evento só acontece quando passamos o mouse por cima da div.

function entrar () {
    area.innerText = 'Entrou!'
    area.style.background = 'blue'
}

// Vamos disparar um evento de outside. Esse evento só acontece quando saímos com o mouse da div.
function sair () {
    area.innerText = 'Saiu!'
    area.style.background = 'black'
}

// Como descobrir que tenho um erro no meu código.
// 1. Ir no devtools do navegador.
// 2. Abrir o console e visualizar onde está o erro (linha e documento).



