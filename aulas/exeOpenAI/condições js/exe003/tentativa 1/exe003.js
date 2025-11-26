function parImpar() {
    let numero = Number(document.querySelector('#numero').value)
    let res = document.getElementById('res')

    if (numero % 2 !== 0) {
        res.innerHTML = `O seu número é: ÍMPAR!`
    } else {
        res.innerHTML = `O seu número é: PAR!`
    }
}