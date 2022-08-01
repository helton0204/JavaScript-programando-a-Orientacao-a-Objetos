
import {Cliente} from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente(); //Foi instanciado um objeto Cliente na variável cliente1
cliente1.nome = "Sofia"; //populando os atributos da classe cliente pelo set nome e não pelo construtor
cliente1.cpf = 25598763245; //populando os atributos da classe cliente pelo set cpf e não pelo construtor
console.log(cliente1);
cliente1.nome; //chamada do assesor get nome(){}
cliente1.cpf; //chamada do assesor get cpf(){}

const ccCliente1 = new ContaCorrente(cliente1, 21387984, 23456);
//ccCliente1.cliente = cliente1; //associação de objetos. Observe também a atribuição de cliente1 para o assesor set cliente(cliente){} 
ccCliente1.deposito(100);
ccCliente1.saque(20);
console.log(ccCliente1);
ccCliente1.conta;
ccCliente1.agencia;

let saldo = ccCliente1.saldo;
console.log(`Saldo da conta ccCliente1: ${saldo}`);

const cliente2 = new Cliente("Helton", 14712108460); //instanciando e populando a classe Cliente pelo construtor.
console.log(cliente2);

const ccCliente2 = new ContaCorrente(cliente2, 482983479, 49586);
console.log(ccCliente2);

ccCliente2.saldo;

ccCliente1.transferencia(30, ccCliente2);

ccCliente2.saldo;

console.log(ContaCorrente.totalContas); //Um atributo estático só consegue ser chamado fazendo referência a sua classe



