const fs = require('fs')

const path = require('path')

const filePath = path.resolve(__dirname, 'tarefas.csv')

const promessaDeLeituraDoArquivo = fs.promises.readFile(filePath)


promessaDeLeituraDoArquivo
.then((arquivo) => arquivo.toString('utf-8'))
.then((texto) => texto.split('\n').slice(1))
.then((linhasSemCabecalho) => linhasSemCabecalho.map((linha) => {
    const [nome, feito] = linha.split("=")
    return {
        nome,
        feito: feito.trim() === 'true'
    }
}))
.then((listaDeTarefas) => console.log(listaDeTarefas))
.catch((error) => {
    console.error('Deu Ruim!', error)
})
