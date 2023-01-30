import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }
    //O metodo adiciona retorna void
    adiciona() {
        const negociacao = this.criaNegociacao();
        //Inserir a negociacao na lista
        this.negociacoes.adiciona(negociacao);
        //O metodo pop nao vai funcionar pois a lista esta com "ReadonlyArray"  
        //this.negociacoes.lista().pop();
        console.log(this.negociacoes.lista());
        this.limparFormulario();
    }
    //O metodo criaNegociacao retorna uma negociacao 
    criaNegociacao() {
        //Por padrao a data possui hifen para separar em dia, mes e ano (1111-11-11) para substituir por , deve criar uma expressao regular
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }
    limparFormulario() {
        this.inputData.value = "";
        this.inputQuantidade.value = "";
        this.inputValor.value = "";
        this.inputData.focus();
    }
}
