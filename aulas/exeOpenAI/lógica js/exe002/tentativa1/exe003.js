function subtrair() {
    var tn1 = document.querySelector('input#txtn1')
    var tn2 = document.querySelector('input#txtn2')

    var res = document.getElementById('res')

    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)

    var sub = n1 - n2

    res.innerHTML = `A subtração entre ${n1} e ${n2} é igual a <strong>${sub}</strong>`
}