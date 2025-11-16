function total() {
    const txtCompleto = document.querySelector('#txtCompleto')
    const resultado = document.getElementById('txtComp')

    const palavra = txtCompleto.value
    const qtdCompleto = palavra.length

    resultado.innerHTML = `O resultado é: ${qtdCompleto}`
}

function letras() {
    const txtLetras = document.querySelector('#txtLetras')
    const resultado = document.getElementById('txtLet')

    const palavra = txtLetras.value;
    const apenasLetras = palavra.replace(/[^a-zA-Z]/g, "")

    resultado.innerHTML = `O resultado é: ${apenasLetras.length}`
}

function maiusculas() {
    const txtMaiusculas = document.querySelector('#txtMaiusculas')
    const resultado = document.getElementById('txtMai')

    const palavra = txtMaiusculas.value;
    const maius = palavra.replace(/[^A-Z]/g, "")

    resultado.innerHTML = `O resultado é: ${maius.length}`
}

function minusculas() {
    const txtMinusculas = document.querySelector('#txtMinusculas')
    const resultado = document.getElementById('txtMin')

    const palavra = txtMinusculas.value;
    const minus = palavra.replace(/[^a-z]/g, "")

    resultado.innerHTML = `O resultado é: ${minus.length}`
}
