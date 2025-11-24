function velocidade() {
    let velocidadeCarro = Number(document.querySelector('#velocidade').value);
    let res = document.getElementById('res');

    if (velocidadeCarro <= 60) {
        res.innerHTML = `O seu carro: Não foi multado!`;
    } else {
        res.innerHTML = `O seu carro: Foi multado!`;
    }
}
