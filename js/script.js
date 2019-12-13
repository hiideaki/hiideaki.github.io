$(document).ready(function() {
    var top = $(window).scrollTop();
    var windowHeight = $(window).height();
    var windowWidth = $(window).width();
    var sliderIndex = 0;
    var slides = $('.slide');
    var sliderLength = slides.length;
    slides.eq(sliderIndex).addClass('visible');

    scrollToHome = function() {
        
        if(windowWidth <= 1000) {        
            $('.menu').slideUp(400, function() {
                document.querySelector('.home').scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });
        } else {
            document.querySelector('.home').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }

    }
    $('.scrollToHome').click(scrollToHome)

    scrollToProjetos = function() {
        if(windowWidth <= 1000) {        
            $('.menu').slideUp(400, function() {
                document.querySelector('.projetos').scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });
        } else {
            document.querySelector('.projetos').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
    $('.scrollToProjetos').click(scrollToProjetos)

    scrollToContato = function() {
        if(windowWidth <= 1000) {        
            $('.menu').slideUp(400, function() {
                document.querySelector('.contato').scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            });
        } else {
            document.querySelector('.contato').scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
    $('.scrollToContato').click(scrollToContato)

    scrollHandler = function() {
        top = Math.ceil($(window).scrollTop());

        if(top < windowHeight) {
            $('header').removeClass('header-projeto');
            $('#link-projetos').removeClass('active');
            $('#link-contato').removeClass('active');
            $('#link-home').addClass('active');
            $('.title').html('Home');
        } else if(top >= windowHeight && top < 2 * windowHeight) {
            $('header').addClass('header-projeto');
            $('#link-home').removeClass('active');
            $('#link-contato').removeClass('active');
            $('#link-projetos').addClass('active');
            $('.title').html('Projetos');
        } else if(top >= 2 * windowHeight) {
            $('header').removeClass('header-projeto');
            $('#link-home').removeClass('active');
            $('#link-projetos').removeClass('active');
            $('#link-contato').addClass('active');
            $('.title').html('Contato');
        }
    }

    scrollHandler();

    $(window).on('scroll', scrollHandler)

    semaphore = false;
    sliderController = function(dir) {
        if(semaphore) return;
        semaphore = true;
        
        slides.eq(sliderIndex).fadeOut(250, function() {
            if(dir == 1) {
                if(sliderIndex == sliderLength - 1)
                    sliderIndex = 0;
                else
                    sliderIndex++;
                
            } else if(dir == -1) {
                if(sliderIndex == 0)
                    sliderIndex = sliderLength - 1;
                else 
                    sliderIndex--;
            }
            slides.eq(sliderIndex).fadeIn(250);
            
            
            semaphore = false;
        });        
    }

    $('.slide .descricao').on('click', function() {
        if(windowWidth <= 1000) {
            $('.slide img').toggleClass('blur');
            $('.descricao > *').toggleClass('show');
        }
    })

    $('.menu-trigger').on('click', function() {
        $('.menu').slideToggle();

    })

    $(window).resize(function() {
        windowHeight = $(window).height();
        windowWidth = $(window).width();
        
        if(windowWidth > 1000) {
            $('.menu').show();
        }
        scrollHandler();
    })

    


    
});
