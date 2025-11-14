function celsius() {
    var tn1 = document.querySelector('input#celsius')
    var res1 = document.getElementById('res1')
    var cel = Number(tn1.value)
    var fah = (cel * 1.8) + 32
    res1.innerHTML = `${cel}° é igual a ${fah.toFixed(1)}F!` 
}

function fahrenheit() {
    var tn2 = document.querySelector('input#fahrenheit')
    var res2 = document.getElementById('res2')
    var fahr = Number(tn2.value)
    var cels = [(fahr - 32) * 5] / 9
    res2.innerHTML = `${fahr}F é igual a ${cels.toFixed(1)}°`
}