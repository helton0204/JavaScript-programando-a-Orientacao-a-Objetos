
export class Cliente{ //Cliente é uma classe
    _nome; //nome e cpf são atributos da classe Cliente
    _cpf; //_ antes do nome do atributo sinaliza que ele é um atributo é "privado". O atributo não fica privado, mas essa é uma convenção de que ele não deve ser acessado fora da classe

    constructor(nome, cpf){
        this._nome = nome;
        this._cpf = cpf;
    }

    set nome(nome){ //set e get não são métodos, são chamados de assessores
        this._nome = nome;
    }

    get nome(){
        console.log(`Nome: ${this._nome}`);
        return this._nome;
    }

    set cpf(cpf){
        this._cpf = cpf;
    }

    get cpf(){
        console.log(`CPF: ${this._cpf}`);
        return this._cpf;
    }
}