$(document).ready(function () {
    $('#formParImpar').submit(function (event) {
        event.preventDefault(); 

        var valor = parseInt($('#valor').val());
        
        var resultado = (valor % 2 === 0) ? "Par" : "Ímpar";

        $('#imparPar').show();

        $('#imparPar').text("O valor " + valor + " é: " + resultado);
        $('#valor').val('');

    });
});