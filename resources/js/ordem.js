$(document).ready(function(){
    $('#formValores').submit(function(event){
        event.preventDefault();

        var valor1 = parseInt($('#valor1').val());
        var valor2 = parseInt($('#valor2').val());
        var valor3 = parseInt($('#valor3').val());
        var valor4 = parseInt($('#valor4').val());
        var valor5 = parseInt($('#valor5').val());

        const valores = [valor1, valor2, valor3, valor4, valor5];

        valores.sort((a, b) => a - b);

        $('#ordem').show();
      
        $('#ordem').text("Valores Ordenados: " + valores.join(", "));
        $('#valor1, #valor2, #valor3, #valor4, #valor5').val('');
        
    });
});