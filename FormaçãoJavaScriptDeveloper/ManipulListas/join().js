const lista = [1, 2, 3]

console.log(lista.join(';'))
console.log(lista.join('.'))
console.log(lista.join(','))
console.log(lista.join('/'))

class Pessoa {
    constructor(nome){
        this.nome = nome
    }
}

const lista2 = [new Pessoa('Renan'), new Pessoa('Bruno'), new Pessoa('Roberto'), new Pessoa('Laercio'), new Pessoa('Vitor'), new Pessoa('José'), new Pessoa('Breno'), new Pessoa('João'), new Pessoa('Julia')]

const listaDeNomes = lista2.map((e) => e.nome).join(', ')

const nomesInBeJ = lista2.map(e => e.nome).filter((e) => e.startsWith('B') || e.startsWith('J')).join(', ')

const listaEmHtml = lista2.map(e => `<li>${e.nome}</li>` ).join('////')

console.log(listaDeNomes)
console.log(nomesInBeJ)
console.log(listaEmHtml)