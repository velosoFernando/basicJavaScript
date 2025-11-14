function descubra() {
    var tn1 = document.querySelector('input#txtn1')
    var res = document.getElementById('res')
    var n1 = Number(tn1.value)
    var idade = 2025 - n1
    res.innerHTML = `A idade que você quer descobrir para quem nasceu em ${n1} é de ${idade} anos!`
}