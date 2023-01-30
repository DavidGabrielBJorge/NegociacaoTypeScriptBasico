export class Negociacoes {
    constructor() {
        //cria uma lista chamada "negociacoes" que recebera um tipo "Negociacao"
        this.negociacoes = [];
    }
    //Mesmo comando que "private negociacoes: Array<Negociacao> = [];"
    //Adiciona elementos em um array
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    //Vai listar o conteudo do array
    //O metodo "ReadonlyArray" ou "readonly" vai fazer com que soh possa ler o arrai impedindo de deletar/modificar
    lista() {
        //Vai pegar cada item de uma lista e colocar em uma nova lista
        //Dessa forma a lista "negociacoes" nao tera modificacao, mas com essa outra lista podera modificar/deletar
        //return [...this.negociacoes];
        return this.negociacoes;
    }
}
