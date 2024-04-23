$(document).ready(function () {
    $('#formMedia').submit(function (event) {
        event.preventDefault(); 

        var nota1 = parseFloat($('#nota_1').val());
        var nota2 = parseFloat($('#nota_2').val());

        var media = (nota1 + nota2) / 2;

        $('#media').show();

        $('#media').text("Média: " + media);
        $('#nota_1, #nota_2').val('');

    });


});