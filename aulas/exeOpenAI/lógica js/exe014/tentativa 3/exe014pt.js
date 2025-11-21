function parImpar() {
    let numero = document.querySelector('#inputNumber').value
    let res = document.getElementById('res')

    let parImpar = (numero % 2 === 0) ? "Par" : "Ímpar"

    res.innerHTML = `O número ${numero} é: ${parImpar}`
}