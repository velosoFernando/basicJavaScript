var corpo  = document.body

// Vamos capturar um elemento pela tag usando getElementsByTagName()[] usamos o colchete para definir qual é o elemento

// Cria uma variável que seleciona o elemento 'p'[1], que é o segundo paragráfo.
var p1 = document.getElementsByTagName('p')[1]

// Adiciona um texto concatenado a variável p1.
// evitar document.write/writeln
document.body.innerHTML += '<p>Está escrito assim: ' + p1.innerHTML + '</p>'

// Também é possível selecionar por ID usando o getElementByID()
// var d = document.getElementById('msg')
// d.style.background = 'green'

// // Estou modificando o texto Clique em mim
// d.innerText = 'Estou aguardando...'


// Também é possível selecionar por name usando getElementsByName()[]
// Lembrando que no html deve estar um name e não um id dentro da tag para funcionar dessa maneira
// var d = document.getElementByName('msg') 
// d.innerText = 'Estou aguardando...' 

// Também é possível selecionar por class usando getElementsByClassName()[]
// Lembrando que no html deve estar um class e não um id dentro da tag para funcionar dessa maneira
// var d = document.getElementByClass('msg') 
// d.innerText = 'Estou aguardando...'


// Também é possível selecionar por seletor com querySelector() e querySelectorAll()
// Recomendando por documentações recentes
// Toda div é representada por #
var d = document.querySelector('div#msg')
d.style.color = 'blue'
// Toda class é representada por .
// var d = document.querySelector('id.msg')




