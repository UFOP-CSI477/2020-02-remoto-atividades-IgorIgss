var botao = document.querySelector("#criar_linha_tabela");
var cp_largada = document.querySelector("input[name='largada']");
var cp_nome = document.querySelector("input[name='nome']");
var cp_tempo = document.querySelector("input[name='tempo']");
var cp_tabela = document.querySelector("tbody");

function Objetos(nome, tempo, largada){
    this.nome = nome;
    this.tempo = tempo;
    this.largada = largada;

    this.mostrar_dados = function(){
        console.log(this.nome, this.tempo, this.largada);
    }

    this.adicionar_linha = function(){
        let linha = document.createElement("tr");
        let campo_largada = document.createElement("td");
        let campo_nome = document.createElement("td");
        let campo_tempo = document.createElement("td");

        var texto_nome = document.createTextNode(this.nome);
        var texto_tempo = document.createTextNode(this.tempo);
        var texto_largada = document.createTextNode(this.largada);
        
        campo_largada.appendChild(texto_largada);
        campo_nome.appendChild(texto_nome);
        campo_tempo.appendChild(texto_tempo);

        linha.appendChild(campo_largada);
        linha.appendChild(campo_nome);
        linha.appendChild(campo_tempo);

        cp_tabela.appendChild(linha);
    }
     
}

function criar_linha_tabela(event){

    event.preventDefault();
    var largada_informada = cp_largada.value;

    if (largada_informada > 6 || largada_informada < 1){
        document.querySelector(".alerta").innerText = "Largada Inválida!";
    } else {
        novo_comp = new Objetos(cp_nome.value, cp_tempo.value, cp_largada.value);
        novo_comp.adicionar_linha();
        
    }

}

botao.addEventListener('click', criar_linha_tabela);