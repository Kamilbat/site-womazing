$(function(){

    $('.intro-slider').slick({
        dots:true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2300,
        speed: 1000,
        pauseOnFocus: false,
        arrows: false,

    });

     $('.dreamteam__slider').slick({
        dots:true,
        arrows: true,
         autoplay: true,
        autoplaySpeed: 1800,
        speed: 1000,
        pauseOnFocus: false,
     });

    let header = $("#header");
    let intro =$("#intro");
    let introH = intro.innerHeight();
    let scrollPos= $(window).scrollTop();

     checkScroll(scrollPos, introH)

    $(window).on("scroll resize", function() {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, introH);
    });

    function checkScroll(scrollPos, introH) {
         if(scrollPos > introH) {
            header.addClass("fixed");

        } else {
            header.removeClass("fixed");
        }
    }

    $('.burger').click(function(event){
        event.preventDefault();

        $('.header-nav,.burger ').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.goods__button, .sweetshot__button').click(function(event){
        event.preventDefault();

        $('.goods__button, .sweetshot__button').removeClass('active');
        $(this).addClass('active');
    });
     $('.sweetshot__color__button').click(function(event){
        event.preventDefault();

        $('.sweetshot__color__button').removeClass('active');
        $(this).addClass('active');
    });


});
