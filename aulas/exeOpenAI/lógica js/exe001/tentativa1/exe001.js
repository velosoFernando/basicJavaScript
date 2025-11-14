function somar() {
    var n1 = document.querySelector('input#txtn1')
    var n2 = document.querySelector('input#txtn2')

    var res = document.getElementById('res')

    var valor1 = Number(n1.value)
    var valor2 = Number(n2.value)

    var soma = valor1 + valor2

    res.innerHTML = `A soma entre ${valor1} e ${valor2} é igual a <strong>${soma}!</strong>`
}