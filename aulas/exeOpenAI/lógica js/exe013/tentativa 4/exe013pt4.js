function reverter() {
    const texto = document.querySelector('#textoCompleto').value
    const res = document.getElementById('res')

    const palavra = texto
    .split("")
    .reverse()
    .join("")

    res.innerHTML = `O resultado invertido é: ${palavra}!`
}