function portugues() {
    const materiaPortugues = document.querySelector('#materia1')
    const nota1 = document.getElementById('nota1')
    const notaPortugues = Number(materiaPortugues.value)

    if (notaPortugues > 7) {
        nota1.innerHTML = `Sua nota é maior que 7, parabéns!`
    } else if (notaPortugues === 7) {
        nota1.innerHTML = `Sua nota é 7, parabéns!`
    } else {
        nota1.innerHTML = `Sua nota é menor que 7. Segunda chamada!`
    }
}

function matematica() {
    const materiaMatematica = document.querySelector('#materia2')
    const nota2 = document.getElementById('nota2')
    const notaMatematica = Number(materiaMatematica.value)

    if (notaMatematica > 7) {
        nota2.innerHTML = `Sua nota é maior que 7, parabéns!`
    } else if (notaMatematica === 7) {
        nota2.innerHTML = `Sua nota é igual a 7, parabéns!`
    } else {
        nota2.innerHTML = `Sua nota é menor que 7. Segunda chamada!`
    }
}

function historia() {
    const materiaHistoria = document.querySelector('#materia3')
    const nota3 = document.getElementById('nota3')
    const notaHistoria = Number(materiaHistoria.value)

    if (notaHistoria > 7) {
        nota3.innerHTML = `Sua nota é maior que 7, parabéns!`
    } else if (notaHistoria === 7) {
        nota3.innerHTML = `Sua nota é igual a 7, parabéns!`
    } else {
        nota3.innerHTML = `Sua nota é menor que 7. Segunda chamada!`
    }
}

