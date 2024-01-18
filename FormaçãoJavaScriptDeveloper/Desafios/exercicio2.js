const { gets, print } = require('./funcoes-auxiliaresex2')


const numeros = []
let num = gets()

for (let i = 0; i < num; i++) {
    let numero = gets()
    numeros.push(numero)
}

let maiorPar = null
let menorImpar = null

for (let i = 0; i < numeros.length; i++) {

    const n = numeros[i]

    if (n % 2 === 0) {
        if (maiorPar == null || n > maiorPar) {
            maiorPar = n
        }

    } else {
        if (menorImpar === null || n < menorImpar) {
            menorImpar = n
        }
    }

}

print(maiorPar)
print(menorImpar)