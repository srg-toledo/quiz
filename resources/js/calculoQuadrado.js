$(document).ready(function() {
    $('#formQuadrados').submit(function(event) {
      event.preventDefault(); 

      var valor1 = parseInt($('#valor_1').val());
      var valor2 = parseInt($('#valor_2').val());
      var valor3 = parseInt($('#valor_3').val());

      var quadrado1 = valor1 * valor1;
      var quadrado2 = valor2 * valor2;
      var quadrado3 = valor3 * valor3;

      $('#resultado').html(`
        <p>O quadrado de ${valor1} é ${quadrado1}.</p>
        <p>O quadrado de ${valor2} é ${quadrado2}.</p>
        <p>O quadrado de ${valor3} é ${quadrado3}.</p>
      `);

      $('#resultado').show();
      $('#valor_1, #valor_2, #valor_3').val('');
    });

});