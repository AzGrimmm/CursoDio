const { gets, print } = require('./funcoes-auxiliares')

const numerosSortiados = []
let quantidadeDeAlunos = gets()

for (let i = 0; i < quantidadeDeAlunos; i++) {
   const numeroSorteado = gets()
   numerosSortiados.push(numeroSorteado)
}

let maiorValor = 0

for (let i = 0; i < numerosSortiados.length; i++) {
    const numeroSorteado = numerosSortiados[i];
    if(numeroSorteado > maiorValor){
        maiorValor = numeroSorteado
    }
}

print(maiorValor)