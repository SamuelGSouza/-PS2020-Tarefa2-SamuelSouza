class Pedido {
    constructor(produto, quantidade, mesa, preco) {
        this.produto = produto
        this.quantidade = quantidade
        this.mesa = mesa
        this.preco = preco
    }

    calcularTotal() {
        var total = this.quantidade * this.preco
        return "A conta deu R$" + total.toFixed(2) + ", galerinha."
    }

    calcularIndividual() {
        var individual = (this.quantidade * this.preco) / 4
        return "Deu R$" + individual.toFixed(2) + " para cada um."
    }
}

class Bebida extends Pedido {
    constructor(nome, quantidade, mesa, preco) {
        super(nome, quantidade, mesa, preco)
    }
}