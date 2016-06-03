$(function () {
    var $btnMenu = $(".menu-ico-resp");
    var $header = $("#header");
    var enlaces = $("#menu a");
    var logo = $("#header figure");
    var $top = $("#top");
    var $preload = $(".preload");
    var $ancho = $(window).width();


    // console.log($ancho);

    window.onload = function () {
        $preload.hide();
    };

    $btnMenu.on("click", function () {
        $(document).find(".menu-top").toggleClass("menuShow");
        $(".menu-ico-resp span:nth-child(1)").toggleClass("span1");
        $(".menu-ico-resp span:nth-child(2)").toggleClass("span2");
        $(".menu-ico-resp span:nth-child(3)").toggleClass("span3");
        $(".circle").toggleClass("expand");
    });
    $.getScript('https://cdn.jsdelivr.net/scrollreveal.js/3.0.9/scrollreveal.min.js', function () {
        window.sr = ScrollReveal();
        sr.reveal(".aparecer-arriba", {
            duration: 500,
            useDelay: "always"
        });
        sr.reveal(".aparecer-derecha", {
            duration: 500,
            useDelay: "always",
            origin: "left"
        });
        sr.reveal(".aparecer-izquierda", {
            duration: 500,
            useDelay: "always",
            origin: "right",
            delay: 500,
            easing: 'cubic-bezier(0.17, 0.67, 0.83, 0.67)'
        });
        sr.reveal(".aparecer-abajo", {
            duration: 500,
            useDelay: "always",
            origin: "top"
        });
        sr.reveal(".aparecer-delay", {
            duration: 500
        }, 50);
    });

    $(window).scroll(function () {
        var $scroll = $(document).scrollTop();
        var efecto = $("#segunda").offset().top - 66;
        var $efectoBlue = $("#cuarta").offset();
        var $menuBef = $(".triangle");
        var $menuDiv = $("#menu");
        // console.log($scroll);
        // console.log($efectoBlue);
        if ($scroll >= (efecto)) {
            logo.addClass("logo-fig2");
            $top.css("opacity", "1");
            $menuBef.css("top", "-38px");
            // $menuDiv.css("border-bottom", "2px solid #00AEEF");

        } else {
            logo.removeClass("logo-fig2");
            $top.css("opacity", "0");
            $menuBef.css("top", "");
            //$menuDiv.css("border-bottom", "2px solid transparent");
        }
    });
    var $trama = $(".trama");
    $trama.on("click", function (e) {
        e.preventDefault();
    });
    enlaces.on("click", function (e) {
        e.preventDefault();
        var t = $(this);
        var tbox = t.attr("href");
        var topCaja = $(tbox).offset().top - 66;
        var $document = $("html , body");
        $(document).find(".menu-top").toggleClass("menuShow");
        $document.stop().animate({
            scrollTop: topCaja
        }, 600, "easeInOutCubic");
        $(".menu-ico-resp span:nth-child(1)").toggleClass("span1");
        $(".menu-ico-resp span:nth-child(2)").toggleClass("span2");
        $(".menu-ico-resp span:nth-child(3)").toggleClass("span3");
        $(".circle").toggleClass("expand");
    });

    $top.on("click", function () {
        $("html , body").animate({
            "scrollTop": 0
        }, 600, "easeInOutCubic");
    });

    var intervalID = window.setInterval(myCallback, 1800);

    function myCallback() {
        var c = document.getElementById("submit");
        var t = c.getAttribute("value");
        if (t === "COMENZAR MI PLAN") {
            c.setAttribute("value", "COMPLETÁ TUS DATOS");
        } else {
            c.setAttribute("value", "COMENZAR MI PLAN");
        }

    }

    var $numeroTel = $("[data-tel]");
    var cambiarEste = $numeroTel.attr("data-tel");
    var mystring = cambiarEste.replace('-', '');

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        var $paraBtn = $(".btn-llamar");
        $paraBtn.append('<a href="tel:+5411' + mystring + '"><button1 class="btn-llamar centro hasta-web espacio icon-telefono btn-gracias">LLAMANOS!</button1></a>');
    }
});

