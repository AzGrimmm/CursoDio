const promessaNumQualquer = new Promise((resolve, reject) => {
    const numero = parseInt(Math.random() * 100)
    resolve(numero)
})

promessaNumQualquer.then((value) => {
    if(value > 59 & value <= 100 ) {
        console.log(`${value} / Parabéns, Aprovado!`)
    } else {
        console.log(`${value} / Reprovado!`)
    }
    
}).catch((error) => {
    console.log(error)
}).finally(() => {
    console.log('Finalizou!')
})   