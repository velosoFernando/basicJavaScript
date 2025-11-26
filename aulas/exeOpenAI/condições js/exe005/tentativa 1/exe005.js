function maiorNumero() {
  let primeiroNumero = Number(document.querySelector("#numberOne").value);
  let segundoNumero = Number(document.querySelector("#numberTwo").value);
  let terceiroNumero = Number(document.querySelector("#numberThree").value);
  let resultado = document.getElementById("resultado");

  if (primeiroNumero > segundoNumero && primeiroNumero > terceiroNumero) {
    resultado.innerHTML = `O número ${primeiroNumero} é o maior!`;
  } else if (segundoNumero > primeiroNumero && segundoNumero > terceiroNumero) {
    resultado.innerHTML = `O número ${segundoNumero} é o maior!`;
  } else if (
    terceiroNumero > primeiroNumero &&
    terceiroNumero > segundoNumero
  ) {
    resultado.innerHTML = `O número ${terceiroNumero} é o maior!`;
  } else if (
    primeiroNumero === segundoNumero &&
    primeiroNumero > terceiroNumero
  ) {
    resultado.innerHTML = `Os números ${primeiroNumero} e ${segundoNumero} são os maiores!`;
  } else if (
    segundoNumero === terceiroNumero &&
    segundoNumero > primeiroNumero
  ) {
    resultado.innerHTML = `Os números ${segundoNumero} e ${terceiroNumero} são os maiores!`;
  } else if (
    primeiroNumero === terceiroNumero &&
    primeiroNumero > segundoNumero
  ) {
    resultado.innerHTML = `Os números ${primeiroNumero} e ${terceiroNumero} são os maiores!`;
  } else {
    resultado.innerHTML = `Todos os números são iguais!`;
  }
}
