function somar() {
    var tn1 = document.querySelector('input#txtn1')
    var tn2 = document.querySelector('input#txtn2')

    var res = document.getElementById('res')

    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)

    var soma = n1 + n2

    res.innerHTML = `A soma entre os valores ${n1} e ${n2} é igual a <strong>${soma}</strong>`
}