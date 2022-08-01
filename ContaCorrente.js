import { Cliente } from "./Cliente.js";


export class ContaCorrente{ //para essa classe ser chamada em um outro arquivo, precisa ser exportada, por isso a palavra export
    _cliente;
    _conta; //# antes do nome do atributo, significa que esse atributo é privado, não é acessível fora da classe ContaCorrente
    _agencia; //uma outra forma de sinalizar um atributo privado é digitar _ antes do nome do atributo, o atributo não fica privado, mas essa é uma convenção de que esse atributo não deve ser acessado fora da classe
    _saldo = 0;
    static totalContas = 0; //Atributo estático pertence somente a sua classe, dessa forma, quando essa classe é instanciada, esse atributo não pertence ao objeto da instância. Todos os objetos dessa classe compartilham um único atributo estático.

    constructor(cliente, conta, agencia){
        this.cliente = cliente; //Observe que o parâmetro cliente do construtor não está sendo passado para o atributo _cliente e sim para o set cliente, dessa forma esse parâmetro tem de obedecer as regras do set cliente.
        this._conta = conta;
        this._agencia = agencia;
        ContaCorrente.totalContas++; //é dessa forma que um atributo estático é chamado.
    }

    set cliente(cliente){
        if(cliente instanceof Cliente){ //Dessa forma o atributo _cliente só recebe o parâmetro cliente se ele for objeto da classe Cliente.
            this._cliente = cliente;
        }
    }

    get cliente(){
        console.log(`Cliente: ${this._cliente}`);
        return this._cliente;
    }

    get conta(){
        console.log(`Conta: ${this._conta}`);
        return this._conta;
    }

    get agencia(){
        console.log(`Agencia: ${this._agencia}`);
        return this._agencia;
    }

    get saldo(){
        console.log(`Saldo: ${this._saldo}`);
        return this._saldo;
    }

    deposito(valor){
        if(valor > 0){
            this._saldo += valor;
            console.log("Operação realizada com sucesso!");
            return true;
        }else{
            console.log("O valor precisa ser positivo.");
            return false;
        }
    }

    saque(valor){
        if(valor > 0 && this._saldo >= valor){
            this._saldo -= valor;
            console.log("Operação realizada com sucesso!");
            return true;
        }
        else{
            console.log("Saldo insuficiente.");
            return false;
        }
    }

    transferencia(valor, outraConta){
        if(this.saque(valor)){
            outraConta.deposito(valor);
            console.log("Operação realizada com sucesso!");
            return true;
        }
        else{
            console.log("Saldo insuficiente.");
            return false;
        }
    }
}