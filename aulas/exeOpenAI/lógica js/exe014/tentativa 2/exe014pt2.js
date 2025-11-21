function parImpar() {
    let numero = document.querySelector('#insertNumber').value
    let res = document.getElementById('res')

    let parImpar = (numero % 2 === 0) ? "Par" : "Ímpar"

    res.innerHTML = `O seu número ${numero} é: ${parImpar}.`
}