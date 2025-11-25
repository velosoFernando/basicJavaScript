function maiorNumero() {
    let numeroUm = Number(document.querySelector('#numeroUm').value)
    let numeroDois = Number(document.querySelector('#numeroDois').value)
    let res = document.getElementById('res')

    if (numeroUm > numeroDois) {
        res.innerHTML = `O maior número é: ${numeroUm}!`
    } else if (numeroUm < numeroDois) {
        res.innerHTML = `O maior número é: ${numeroDois}!`
    } else {
        res.innerHTML = `Ambos os números são iguais!`
    }
}