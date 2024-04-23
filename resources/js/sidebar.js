function recolherMenu() {
    $('.sidebar').animate({ left: '-100%' }, 10); // Anima o menu para a esquerda
}

function expandirMenu() {
    $('.sidebar').animate({ left: '0%' }, 10); // Anima o menu para a direita
}

$(document).ready(function() {

    function checkWindowWidth() {
        if ($(window).width() < 768) {
            // $('.sidebar').fadeOut();
            $('.ma_page_content').css('margin-left', '0');
            $('#text-logo').removeClass('fs-3').addClass('fs-6');
            recolherMenu();
        } else {
            $('.ma_page_content').css('margin-left', '250px');
            $('#text-logo').removeClass('fs-6').addClass('fs-3');
            expandirMenu();
            
        } 
    }

    // $('.btn-navbar').click(function() {
    //         expandirMenu();
    //     // if ($('.sidebar').css('left') == '0px') {
    //     //     recolherMenu();
    
    //     // } else {
    //     // }
    // });

    checkWindowWidth();
    $(window).resize(function() {
        checkWindowWidth();
    });

    $('.category-container').click(function() {
        var target = $(this).data('target');
        var icon = $(this).find('.icon-dropDown');
        var toogleCategorySidebar = $(target).data('load');
        
        if (toogleCategorySidebar == 'show') {
            $(target).slideUp(400);
            $(target).data('load', 'hide');
            $(icon).removeClass('bi bi-caret-down-fill');
            $(icon).addClass('bi bi-caret-right-fill');
        } else {
            // $('.teste').css('transform', 'rotateX(-40deg)')
            $(icon).removeClass('bi bi-caret-right-fill');
            $(icon).addClass('bi bi-caret-down-fill');
            $(target).slideDown(400);
            $(target).data('load', 'show');
        }
    });
});