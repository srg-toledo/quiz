function expandirMenu() {
    $('.sidebar').animate({ left: '0%' }, 10); // Anima o menu para a direita
}
$(document).ready(function () {
    // $('.btn-navbar').click(function () {
    //     // expandirMenu();
    //     alert('teste');
    // });
    // $('.form-check').click(function() {
    //     var radiosChecked = false; // Variável para controlar se os botões de rádio foram clicados
    //     if (!radiosChecked) { // Verifica se os botões de rádio não foram clicados
    //         var radioButton = $(this).find('input[type="radio"]');
    //         radioButton.prop('checked', true); // Marca o botão de rádio clicado
    //         radioButton.prop('disabled', true); // Desativa todos os botões de rádio
    //         radiosChecked = true; // Define a variável para true para indicar que os botões foram clicados
    //     }
    // });


    $('.form-check').click(function(event) {
        
        // Evitar que o clique propague para elementos pai
        event.stopPropagation();
        // Selecionar o input de rádio associado
        var radioButton = $(this).find('input[type="radio"]');
        // Verificar se o input de rádio não está marcado
        if (!radioButton.prop('checked')) {
            // Alternar o estado do input de rádio
            radioButton.prop('checked', true);
        }
    });

    $('.form-check-label').click(function(event) {
        // Evitar que o clique propague para elementos pai
        event.stopPropagation();
        // Selecionar o input de rádio associado
        var radioButton = $(this).siblings('input[type="radio"]');
        // Verificar se o input de rádio não está marcado
        if (!radioButton.prop('checked')) {
            // Alternar o estado do input de rádio
            radioButton.prop('checked', true);
        }
    });
    
    $('#resetBtn').click(function() {
        $.ajax({
            url: window.location.href,
            type: 'GET',
            success: function(data) {
            
                window.location.reload();
            },
            error: function(xhr, status, error) {
                console.error("Erro ao recarregar a página:", error);
            }
        });
    });

    $('#quizFormDB').submit(function(event) {
        event.preventDefault();

        var erros = 0;
        var acertos = 0;

        var resposta1 = $('input[name="pergunta1"]:checked').val();
        var resposta2 = $('input[name="pergunta2"]:checked').val();
        var resposta3 = $('input[name="pergunta3"]:checked').val();
    
        if (resposta1 === 'd') {
            acertos ++;
            $('#1d').addClass('bg-success text-white');
        } else {
            erros ++;
            $('#1' + resposta1).addClass('bg-danger text-white');
            $('#1d').addClass('bg-success text-white');
        }

        if (resposta2 === 'a') {
            acertos ++;
            $('#2a').addClass('bg-success text-white');
        } else {
            erros ++;
            $('#2' + resposta2).addClass('bg-danger text-white');
            $('#2a').addClass('bg-success text-white');
        }

        if (resposta3 === 'c') {
            acertos ++;
            $('#3c').addClass('bg-success text-white');
        } else {
            erros ++;
            $('#3' + resposta3).addClass('bg-danger text-white');
            $('#3c').addClass('bg-success text-white');
        }
        
        $('.btn').hide();
        $('#resultado').addClass('alert alert-primary').text('Acertos: ' + acertos + ' Erros: ' + erros).fadeIn();
        
        // var radioButton = $(this).find('input[type="radio"]');
        // radioButton.prop('disabled', true);

        $('#resetBtn').css('display', 'block');
        // $('#resetBtn').click(function() {
        //     // Remover classes de estilo dos elementos de resposta
        //     $('.form-check').removeClass('bg-success text-white bg-danger');
        
        //     // Resetar resultados
        //     $('#resultado').fadeOut().empty();
        
        //     // Exibir botão de envio novamente
            
        // });
        // $('#resultado').text('Acertos: ' + acertos + ' Erros: ' + erros).show();
    });

    $('#quizFormPoo').submit(function(event) {
        event.preventDefault();
    
        var erros = 0;
        var acertos = 0;
    
        var resposta1 = $('input[name="pergunta1"]:checked').val();
        var resposta2 = $('input[name="pergunta2"]:checked').val();
        var resposta3 = $('input[name="pergunta3"]:checked').val();
    
        console.log(resposta1);
    
       
        if (resposta1 === 'a') {
            acertos ++;
            $('#1a').addClass('bg-success text-white');
        } else {
            erros ++;
            $('#1' + resposta1).addClass('bg-danger text-white');
            $('#1a').addClass('bg-success text-white');
        }
    
        if (resposta2 === 'c') {
            acertos ++;
            $('#2c').addClass('bg-success text-white');
        } else {
            erros ++;
            $('#2' + resposta2).addClass('bg-danger text-white');
            $('#2c').addClass('bg-success text-white');
        }
    
        if (resposta3 === 'a') {
            acertos ++;
            $('#3a').addClass('bg-success text-white');
        } else {
            erros ++;
            $('#3' + resposta3).addClass('bg-danger text-white');
            $('#3a').addClass('bg-success text-white');
        }
    
        $('.btn').hide();
        $('#resultado').addClass('alert alert-primary').text('Acertos: ' + acertos + ' Erros: ' + erros).fadeIn();
        $('#resetBtn').css('display', 'block');
    });

    $('#quizFormHTML').submit(function(event) {
        event.preventDefault();

        var erros = 0;
        var acertos = 0;

        var resposta1 = $('input[name="pergunta1"]:checked').val();
        var resposta2 = $('input[name="pergunta2"]:checked').val();
        var resposta3 = $('input[name="pergunta3"]:checked').val();

        console.log(resposta1);

    
        if (resposta1 === 'd') {
            acertos ++;
            $('#1d').addClass('bg-success text-white');
        } else {
            erros ++;
            $('#1' + resposta1).addClass('bg-danger text-white');
            $('#1d').addClass('bg-success text-white');
        }

        if (resposta2 === 'a') {
            acertos ++;
            $('#2a').addClass('bg-success text-white');
        } else {
            erros ++;
            $('#2' + resposta2).addClass('bg-danger text-white');
            $('#2a').addClass('bg-success text-white');
        }

        if (resposta3 === 'c') {
            acertos ++;
            $('#3c').addClass('bg-success text-white');
        } else {
            erros ++;
            $('#3' + resposta3).addClass('bg-danger text-white');
            $('#3c').addClass('bg-success text-white');
        }

        $('#resultado').text('Acertos: ' + acertos + ' Erros: ' + erros).show();
    });

    $('#quizFormCSS').submit(function(event) {
        event.preventDefault();

        var erros = 0;
        var acertos = 0;

        var resposta1 = $('input[name="pergunta1"]:checked').val();
        var resposta2 = $('input[name="pergunta2"]:checked').val();
        var resposta3 = $('input[name="pergunta3"]:checked').val();

        console.log(resposta1);

    
        if (resposta1 === 'd') {
            acertos ++;
            $('#1d').addClass('bg-success text-white');
        } else {
            erros ++;
            $('#1' + resposta1).addClass('bg-danger text-white');
            $('#1d').addClass('bg-success text-white');
        }

        if (resposta2 === 'a') {
            acertos ++;
            $('#2a').addClass('bg-success text-white');
        } else {
            erros ++;
            $('#2' + resposta2).addClass('bg-danger text-white');
            $('#2a').addClass('bg-success text-white');
        }

        if (resposta3 === 'c') {
            acertos ++;
            $('#3c').addClass('bg-success text-white');
        } else {
            erros ++;
            $('#3' + resposta3).addClass('bg-danger text-white');
            $('#3c').addClass('bg-success text-white');
        }

        $('#resultado').text('Acertos: ' + acertos + ' Erros: ' + erros).show();
    });

    $('#quizFormJs').submit(function(event) {
        event.preventDefault();

        var erros = 0;
        var acertos = 0;

        var resposta1 = $('input[name="pergunta1"]:checked').val();
        var resposta2 = $('input[name="pergunta2"]:checked').val();
        var resposta3 = $('input[name="pergunta3"]:checked').val();

        console.log(resposta1);

    
        if (resposta1 === 'd') {
            acertos ++;
            $('#1d').addClass('bg-success text-white');
        } else {
            erros ++;
            $('#1' + resposta1).addClass('bg-danger text-white');
            $('#1d').addClass('bg-success text-white');
        }

        if (resposta2 === 'a') {
            acertos ++;
            $('#2a').addClass('bg-success text-white');
        } else {
            erros ++;
            $('#2' + resposta2).addClass('bg-danger text-white');
            $('#2a').addClass('bg-success text-white');
        }

        if (resposta3 === 'c') {
            acertos ++;
            $('#3c').addClass('bg-success text-white');
        } else {
            erros ++;
            $('#3' + resposta3).addClass('bg-danger text-white');
            $('#3c').addClass('bg-success text-white');
        }

        $('#resultado').text('Acertos: ' + acertos + ' Erros: ' + erros).show();
    });
    
});

