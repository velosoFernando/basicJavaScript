function idade() {
    let idade = Number(document.querySelector('#idade').value)
    let res = document.getElementById('res')

    if (idade <= 17) {
        res.innerHTML = `Você é: Menor de idade!`
    } else {
        res.innerHTML = `Você é: Maior de idade!`
    }
}