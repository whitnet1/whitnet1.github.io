
//Scroll reveal nav
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {

    var currentScrollpos = window.pageYOffset;
    if (prevScrollpos > currentScrollpos) {
        document.getElementById('navbar').style.top = '0';
    }
    else {
        document.getElementById('navbar').style.top = '-100vh';
    }

    prevScrollpos = currentScrollpos;
}

//Page link delay
$('.box').click(function (e) {
    e.preventDefault();
    setTimeout(function (url) { window.location = url }, 300, this.href);
});


$('document').ready(() => {

    //Page Wipes
    $('.menu > .a').click(function () {
        $('.pagewipe.a').animate({ 'width': '100vw' }, 300);
        $('.animation').animate({ 'background-position-x': '-100vw' }, 300);
    });

    $('.menu > .b').click(function () {
        $('.pagewipe.b').animate({ 'width': '100vw' }, 300);
        $('.animation').animate({ 'background-position-x': '-100vw' }, 300);
    });

    $('.menu > .c').click(function () {
        $('.pagewipe.c').animate({ 'width': '100vw' }, 300);
    });

    $('.menu > .d').click(function () {
        $('.pagewipe.d').animate({ 'width': '100vw' }, 300);
        $('.animation').animate({ 'background-position-x': '100vw' }, 300);
    });

    $('.menu > .e').click(function () {
        $('.pagewipe.e').animate({ 'width': '100vw' }, 300);
        $('.animation').animate({ 'background-position-x': '100vw' }, 300);
    });



    /* slider */
    $('.slider').cycle({
        fx: 'scrollHorz',
        next: '#next',
        prev: '#prev',
    });
    
    $('video').each(function(){
        if ($(this).is(":in-viewport")) {
            $(this)[0].play();
        } else {
            $(this)[0].pause();
        }
    });

});
