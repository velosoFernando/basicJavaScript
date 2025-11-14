function somar() {
    // Coleto os números inputados nas variáveis tn1 e tn2.
    var tn1 = document.getElementById('txtn1')
    var tn2 = document.querySelector('input#txtn2')

    // Crio um elemento res em uma div para apresentar o resultado.
    var res = document.getElementById('res')

    // Armazeno os valores em n1 e n2.
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)

    // Faço a soma de n1 e n2 e armazeno a informação na var soma.
    var soma = n1 + n2

    // Retorno no HTML, através do elemento res, dentro da div, que o resultado (soma) é o obtido na soma entre n1 e n2. 
    res.innerHTML = `A soma entre ${n1} e ${n2} é igual a ${soma}!`
}

