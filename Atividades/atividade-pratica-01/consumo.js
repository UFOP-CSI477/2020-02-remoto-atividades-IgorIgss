var combustivel1;
var combustivel2;
var totalCombustivel1 = 0;

var km1;
var km2;
var totalKm = 0;

var totalVeículos = 0;

var mediaCombustivel = 0;
var mediaKm = 0;
var mediaKmPorLitro = 0;


function addveiculo(){

    totalVeículos = totalVeículos + 1;

    combustivel1 = document.frmDados.combustivel;
    combustivel2 = parseInt(combustivel1.value);
    totalCombustivel1 = totalCombustivel1 + combustivel2;

    km1 = document.frmDados.quilometragem;
    km2 = parseInt(km1.value);
    totalKm = totalKm + km2;


    console.log("Total de veículos: " + totalVeículos);
    console.log("Total de combustível: " +totalCombustivel1);
    console.log("Total de KM: " +totalKm);
        
}

function finalizarCadastro() {
    
    mediaCombustivel = totalCombustivel1 / totalVeículos;
    mediaKm = totalKm / totalVeículos;
    mediaKmPorLitro = totalKm / totalCombustivel1;

    document.frmResultados.totalcombustivel.value = totalCombustivel1;
    document.frmResultados.kmtotal.value = totalKm;
    document.frmResultados.mediacombustivel.value = mediaCombustivel;
    document.frmResultados.mediakm.value = mediaKm;
    document.frmResultados.desempenhokmporlitro.value = mediaKmPorLitro;

}

function apagarRegistros() {

    document.frmResultados.totalcombustivel.value = "";
    document.frmResultados.kmtotal.value = "";
    document.frmResultados.mediacombustivel.value = "";
    document.frmResultados.mediakm.value = "";
    document.frmResultados.desempenhokmporlitro.value = "";
    document.frmDados.placa.value = "";
    document.frmDados.combustivel.value = "";
    document.frmDados.quilometragem.value = "";

}
