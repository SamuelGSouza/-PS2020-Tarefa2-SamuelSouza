class Pessoa {
    constructor(nome, idade, uni, curso, residencia) {
        this.nome = nome
        this.idade = idade
        this.uni = uni
        this.curso = curso
        this.residencia = residencia
    }
}

class Garcom extends Pessoa {
    constructor(nome, idade, uni, curso, residencia) {
        super(nome, idade, uni, curso, residencia)
        this.profissao = 'Garçom'
        this.localDeTrabalho = 'Clube da Cerveja'
    }

    checarIDs(ana, pedro, paulo, armando) {
        var anaRes = ""
        var pedroRes = ""
        var pauloRes = ""
        var armandoRes = ""
        if(ana.idade < 18) {
            anaRes = `${ana.nome} vai tomar Coca-Cola`
        }
        else {
            anaRes = `${ana.nome} pode tomar cerveja`
        }

        if(pedro.idade < 18) {
            pedroRes = `${pedro.nome} vai tomar Coca-Cola`
        }
        else {
            pedroRes = `${pedro.nome} pode tomar cerveja`
        }

        if(paulo.idade < 18) {
            pauloRes = `${paulo.nome} vai tomar Coca-Cola`
        }
        else {
            pauloRes = `${paulo.nome} pode tomar cerveja`
        }

        if(armando.idade < 18) {
            armandoRes = `${armando.nome} vai tomar Coca-Cola`
        }
        else {
            armandoRes = `${armando.nome} pode tomar cerveja`
        }

        return `${anaRes}\n${pedroRes}\n${pauloRes}\n${armandoRes}`
    }
}

class Amigos extends Pessoa {
    constructor(nome, idade, uni, curso, residencia, parente, amigos) {
        super(nome, idade, uni, curso, residencia)
        this.parente = parente
        this.amigos = amigos
    }

    pedirConta(total, individual) {
        console.log("Ei garçom! A conta, por favor. \nTotal: R$" + total.toFixed(2) + "\nIndividual: R$" + individual.toFixed(2))
    }
}