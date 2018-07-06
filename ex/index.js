class Pessoa {
    construtor(nome) {
        this.nome = nome
    }

    toString() {
        return `Pessoa: ${this.nome}`
    }
}

const pessoa = new Pessoa('Diego')
console.log(pessoa.toString())