import { NegociacaoController } from "./controllers/negociacao-controller.js";
const controller = new NegociacaoController();
const form = document.querySelector('.form');
//Ao cilcar no botão de submeter ele vai enviar as informações para o Negociacao Controller
form.addEventListener('submit', event => {
    event.preventDefault(); //não recarrega a página
    controller.adiciona();
});
