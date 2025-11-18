function invertido() {
    const texto = document.querySelector('#txtCompleto').value
    const res = document.getElementById('res')

    const palavra = texto
        .split("")
        .reverse()
        .join("")

    res.innerHTML = `O resultado da palavra é: ${palavra}!`
}
