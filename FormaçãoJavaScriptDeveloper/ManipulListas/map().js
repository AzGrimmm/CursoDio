class Pessoa {
    constructor(nome){
        this.nome = nome
    }
}

const lista = [new Pessoa('Renan'), new Pessoa('Bruno'), new Pessoa('Vitor'), new Pessoa('José')]

const listaDeNomes = []

const listaDeNomesMap = lista.map((element) => {
    return element.nome
})

const listaEmHtml = lista.map((element)=> {
    return `
    <li>${element.nome}</li>
    `
})

for (let i = 0; i < lista.length; i++) {
    const element = lista[i];
    listaDeNomes.push(element.nome)
}
console.log(listaDeNomes)
console.log(listaDeNomesMap)
console.log(listaEmHtml)