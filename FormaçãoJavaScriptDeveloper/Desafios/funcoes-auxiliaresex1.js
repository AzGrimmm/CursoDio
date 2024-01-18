let entrada = [5.5]
let i = 0

function gets() {
    let valor = entrada[i]
    i++
    return valor
}

function print(texto) {
    console.log(texto)
}

module.exports = { gets, print }