const lista = [1, 2 ,3 ,4, 5, 6, 7, 8, 9, 10]
var soma = 0

for (let i = 0; i < lista.length; i++) {
    const element = lista[i];
    soma += element
}
console.log(soma)

const somaReduce = lista.reduce((previous, current) => {
    return previous + current
}, 0)

console.log(somaReduce)