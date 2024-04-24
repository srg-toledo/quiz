$(document).ready(function() {
    function recolherMenu() {
        $('.sidebar').animate({ left: '-100%' });
        if ($(window).width() < 768){
            $('main').css({
                'filter': 'none', 
                'pointer-events': 'auto' 
            });
        }
        
    }

    function expandirMenu() {
        $('.sidebar').animate({ left: '0%' });
        if ($(window).width() > 768){
            $('main').css({
                'filter': 'none', 
                'pointer-events': 'auto' 
            });
        } else {
            $('main').css({
                'filter': 'blur(5px)',
                'pointer-events': 'none' 
            });
        }
    }

    function toggleMenu() {
        if ($('.sidebar').css('left') == '0px') {
            recolherMenu();
        } else {
            expandirMenu();
        }
    }

    function checkWindowWidth() {
        if ($(window).width() < 768) {
            $('.ma_page_content').css('margin-left', '0');
            $('#text-logo').removeClass('fs-3').addClass('fs-6');
            
            recolherMenu();
        } else {
            $('.ma_page_content').css('margin-left', '250px');
            $('#text-logo').removeClass('fs-6').addClass('fs-3');
            expandirMenu();
        } 
    }

    $('.btn-navbar').click(function(event) {
        event.stopPropagation();
        toggleMenu();
    });

    $('.sidebar').click(function(event) {
        event.stopPropagation();
    });

    $('body, a').click(function(event) {
        if ($('.sidebar').css('left') == '0px' && $(window).width() < 768) {
            $('main').css({
                'filter': 'none', 
                'pointer-events': 'auto' 
            });
            recolherMenu();
        }
    });

    $(window).change(function() {
        $(window).resize() 
        checkWindowWidth();
    });

    $('.category-container').click(function() {
        var target = $(this).data('target');
        var icon = $(this).find('.icon-dropDown');
        var toogleCategorySidebar = $(target).data('load');
        
        if (toogleCategorySidebar == 'show') {
            $(target).slideUp();
            $(target).data('load', 'hide');
            $(icon).removeClass('bi bi-caret-down-fill');
            $(icon).addClass('bi bi-caret-right-fill');
        } else {
            $(icon).removeClass('bi bi-caret-right-fill');
            $(icon).addClass('bi bi-caret-down-fill');
            $(target).slideDown();
            $(target).data('load', 'show');
        }
    });

    checkWindowWidth();
});
