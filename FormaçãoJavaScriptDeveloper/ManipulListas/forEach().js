const lista = [1, 2 ,3 ,4, 5, 6, 7, 8, 9, 10]

let cb = (value, i, listRef)=> {
    console.log(value, i, listRef)}

lista.forEach(cb)

for (let i = 0; i < lista.length; i++) {
    const element = lista[i];
    cb(element, i, lista)
    console.log(element, i, lista)
}