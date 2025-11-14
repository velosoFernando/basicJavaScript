function somar() {
    var tn1 = document.querySelector('input#txtn1')
    var tn2 = document.querySelector('input#txtn2')
    var tn3 = document.querySelector('input#txtn3')

    var res = document.getElementById('res')

    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var n3 = Number(tn3.value)

    var soma = (n1 + n2) + n3

    res.innerHTML = `O resultado da soma entre ${n1}, ${n2} e ${n3} é igual a <strong>${soma}</strong>`
}