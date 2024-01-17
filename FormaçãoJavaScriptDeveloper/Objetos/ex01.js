

class Carro {
    marca;
    cor;
    litrosPorKm;

    constructor(marca,cor,litrosPorKm){
        this.marca = marca
        this.cor = cor
        this.litrosPorKm = litrosPorKm
    }

    calcularViagem(distancia , preco){
        return this.litrosPorKm * distancia * preco
    }

}

const uno = new Carro('Fiat','Preto', 1 / 10)
const palio = new Carro('fiat','Branco',1 / 12)


console.log(palio.calcularViagem(70, 5))