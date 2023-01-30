import { Negociacao } from "./negociacao.js";

export class Negociacoes{
    //cria uma lista chamada "negociacoes" que recebera um tipo "Negociacao"
    private negociacoes: Negociacao[] = [];
    //Mesmo comando que "private negociacoes: Array<Negociacao> = [];"

    //Adiciona elementos em um array
    adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao);
    }
    
    //Vai listar o conteudo do array
    //O metodo "ReadonlyArray" ou "readonly" vai fazer com que soh possa ler o arrai impedindo de deletar/modificar
    lista(): readonly Negociacao[]{
        //Vai pegar cada item de uma lista e colocar em uma nova lista
        //Dessa forma a lista "negociacoes" nao tera modificacao, mas com essa outra lista podera modificar/deletar
        //return [...this.negociacoes];
        return this.negociacoes;
    }


}

