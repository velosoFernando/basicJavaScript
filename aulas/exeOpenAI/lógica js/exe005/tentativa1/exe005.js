function elevarQuadrado() {
    var tn = document.querySelector('input#txtn')

    var res = document.getElementById('res')

    var n1 = Number(tn.value)

    var elevarQuadrado = n1 ** 2

    res.innerHTML = `A potência de ${n1} é igual a <strong>${elevarQuadrado}</strong>`
}