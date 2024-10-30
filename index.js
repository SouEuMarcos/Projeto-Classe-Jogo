/*
Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)

## Saída

Ao final deve se exibir uma mensagem:

- "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
  guerreiro atacou usando espada
*/

class classeHeroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
  
    //método pra definir o tipo e o ataque correspondente.
    defineAtaque(){
        switch (this.tipo){
            case 'mago':
                return 'magia'
    
            case 'guerreiro':
                return 'espada'
    
            case 'monge':
                return 'artes marciais'
    
            case 'ninja':
                return 'shuriken'
    
            default:
                return 'ataque desconhecido'
        }
    }

    //mensagem para apresentar o herói.
    apresentar(){
        console.log(`O herói ${this.nome} possui ${this.idade} anos de idade e é da classe ${this.tipo}`)
    }

    //mensagem pra exibir o tipo e o ataque do herói.
    mensagemAtaque(){
        console.log(`O ${this.tipo} atacou usando ${this.defineAtaque()}`)
    }
}

const heroi1 = new classeHeroi ('Felipao', 48, 'mago')
heroi1.apresentar()
heroi1.mensagemAtaque()

const heroi2 = new classeHeroi ('Marcola', 248, 'monge')
heroi2.apresentar()
heroi2.mensagemAtaque()

const heroi3 = new classeHeroi ('Joseph', 21, 'guerreiro')
heroi3.apresentar()
heroi3.mensagemAtaque()

const heroi4 = new classeHeroi ('Osvaldo', 30, 'ninja')
heroi4.apresentar()
heroi4.mensagemAtaque()