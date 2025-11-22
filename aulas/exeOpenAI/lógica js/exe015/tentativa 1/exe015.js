function firstNumber() {
    let numero1 = Number(document.querySelector('#firstNumber').value)
    let numero2 = Number(document.querySelector('#secondNumber').value)
    let res = document.getElementById('res')

    if (numero1 > numero2) {
        res.innerHTML = `O maior número é: ${numero1}!`
    } else if (numero1 < numero2) {
        res.innerHTML = `O maior número é: ${numero2}!`
    } else {
        res.innerHTML = `O número ${numero1} é igual ao número ${numero2}!`
    }
}
