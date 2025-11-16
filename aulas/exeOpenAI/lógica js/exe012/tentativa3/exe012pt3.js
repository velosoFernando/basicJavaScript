function total() {
    const txtTotal = document.querySelector('#txtTotal')
    const resultado = document.getElementById('txtComp')

    const palavra = txtTotal.value
    const qtdTotal = palavra.length

    resultado.innerHTML = `O resultado é: ${qtdTotal}!`
}

function letras() {
    const txtLetras = document.querySelector('#txtLetras')
    const txtLet = document.getElementById('txtLet')

    const palavra = txtLetras.value
    const letras = palavra.replace(/[^a-zA-Z]/g, "")

    txtLet.innerHTML = `O resultado é: ${letras.length}`
}

function maiusculas() {
    const txtMaiusculas = document.querySelector('#txtMaiusculas')
    const txtMai = document.getElementById('txtMai')

    const palavra = txtMaiusculas.value
    const qtdMaiusculas = palavra.replace(/[^A-Z]/g, "")

    txtMai.innerHTML = `O resultado é: ${qtdMaiusculas.length}`
}

function minusculas() {
    const txtMinusculas = document.querySelector('#txtMinusculas')
    const txtMin = document.getElementById('txtMin')

    const palavra = txtMinusculas.value
    const qtdMinusculas = palavra.replace(/[^a-z]/g, "")

    txtMin.innerHTML = `O resultado é: ${qtdMinusculas.length}`
}