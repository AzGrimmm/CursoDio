const lista = [1, 2 ,3 ,4, 5, 6, 7, 8, 9, 10]

const cbNumerosPares = (element)=> {
    return (element % 2 === 0)
}

const listaDeNumerosPares = lista.filter(cbNumerosPares)

console.log(listaDeNumerosPares)

for (let i = 0; i < lista.length; i++) {
    const element = lista[i];
    nP = (element) => {
       if(element % 2 === 0){
        return element
       }
    }
    console.log(nP(element))
}
