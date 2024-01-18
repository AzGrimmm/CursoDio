const { gets, print } = require('./funcoes-auxiliaresex1')

const media = gets()

if(media < 5){
    print('REPROVADO')
}else if(media >= 5 && media < 7){
    print('RECUPERAÇÂO')
} else {
    print('APROVADO')
}

