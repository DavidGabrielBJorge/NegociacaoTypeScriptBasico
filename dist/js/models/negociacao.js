export class Negociacao {
    //No constructor ao colocar em public readonly, funcionará da mesma forma que o private.
    //Logo não pode atribuir propriedade para essas variáveis.
    /*
    Pode ser escrito dessa forma, com isso não tem necessidade de adicionar os getters
    constructor(
        public readonly data: Date,
        public readonly quantidade:number,
        public readonly valor:number
        ){}

    Obs: usando esse metodo a variavel data pode ser modificada usando setDate()
    para evitar isso deve usar o constructor abaixo
     */
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    //Colocado o data dessa forma impede de modificar a variavel usando comandos como setDate()
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
}
