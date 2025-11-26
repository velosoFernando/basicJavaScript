function maiorNumero() {
    const primeiroNumero = Number(document.querySelector('#firstNumber').value)
    const segundoNumero = Number(document.querySelector('#secondNumber').value)
    const terceiroNumero = Number(document.querySelector('#thirdNumber').value)
    const resultado = document.getElementById('resultado')

    if (primeiroNumero > segundoNumero && primeiroNumero > terceiroNumero ) {
        resultado.innerHTML = `O maior número é: ${primeiroNumero}!`
    } else if (primeiroNumero < segundoNumero && segundoNumero > terceiroNumero) {
        resultado.innerHTML = `O maior número é: ${segundoNumero}!`
    } else if (primeiroNumero < terceiroNumero && segundoNumero < terceiroNumero) {
        resultado.innerHTML = `O maior número é: ${terceiroNumero}!`
    } else if (primeiroNumero === segundoNumero && primeiroNumero > terceiroNumero) {
        resultado.innerHTML = `O maior número é: ${primeiroNumero}!`
    } else if (primeiroNumero === terceiroNumero && primeiroNumero > segundoNumero) {
        resultado.innerHTML = `O maior número é: ${primeiroNumero}!`
    } else if (segundoNumero === terceiroNumero && segundoNumero > primeiroNumero) {
        resultado.innerHTML = `O maior número é: ${segundoNumero}!`
    } else {
        resultado.innerHTML = `O maior número é: ${primeiroNumero}. <br> Já que todos são iguais!`
    }
}