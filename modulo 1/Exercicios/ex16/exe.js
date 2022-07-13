class Pessoa{
    #idade
    #sexo
    #nome
   
    constructor(nome, idade, sexo){
        this.#nome = nome // cria os atributos privado
        this.#idade = idade
        this.#sexo = sexo
    }

    apresentar(){
        console.log(`${this.#nome} tem ${this.#idade} e é do sexo ${this.#sexo}`)
    }
    //Metodos setter e getter
    get nome(){
        return this.#nome
    }
    set nome(n){
        this. #nome = n
    }

    get idade(){
        return this.#idade
    }
    set idade(i){
        this.#idade = i
    }

    get sexo(){
        return this.#sexo
    }
    set sexo(s){
        this.#sexo = s
    }

}

class Aluno extends Pessoa{// Herdando tudo da classe mãe 
    #nota
    constructor(nome,idade,sexo,nota){
        super(nome,idade,sexo)//atributos escolhidos para ser usado da classe mae 
        this.#nota = nota
    }

    situacao(){
        if(this.nota < 6) {
            console.log(`vc foi reprovado`)
        }
        else{
            console.log('Vc foi aprovado com '+ this.nota)
        }

    }
    apresentar(){
        console.log(this.nota)
    }
    //metodos getter e setter
    get nota(){
        return this.#nota
    }

    set nota(n){
        this.#nota = n
    }

}

a1 = new Aluno('williams',22,'M',5.5)
a1.apresentar()
a1.situacao()
a1.apresentar()