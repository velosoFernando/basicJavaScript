function nacionalidade() {
    let origem = document.querySelector('#nacionalidade').value
    let res = document.getElementById('res')

    origem = origem.toLowerCase()

    if (origem === "brasil") {
        res.innerHTML = `Você é: Brasileiro(a)!`
    } else {
        res.innerHTML = `Você é: Estrangeiro(a)!`
    }
}