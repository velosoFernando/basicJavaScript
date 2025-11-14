function descubra() {
    var tn1 = document.querySelector('input#txtn1')
    var res = document.getElementById('res')
    var n1 = Number(tn1.value)

    var dobro = n1 * 2
    var metade = n1 / 2

    res.innerHTML = `O dobro de ${n1} é igual a ${dobro} e a metade de ${n1} é igual a ${metade}!`
}