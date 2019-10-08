$(function() {

    // $("circle:nth-of-type(1n)").addClass("test1");
    // $("circle:nth-of-type(2n)").addClass("test2").removeClass("test1");
    // $("circle:nth-of-type(3n)").addClass("test3").removeClass("test1 test2");
    // $("circle:nth-of-type(3n+1)").addClass("test4").removeClass("test1 test2 test3");
    $("#hero p").mouseover(function() {
        $("i", this).addClass("fa-arrow-down");
        $("i", this).removeClass("fa-arrow-right");
    });
    $("#hero p").mouseleave(function() {
        $("i", this).removeClass("fa-arrow-down");
        $("i", this).addClass("fa-arrow-right");
    });

    $('div.navbar-collapse ul li a').click(function() {
        $('div.navbar-collapse').removeClass("show");
    });
    var removeBorder = function(o) {
        o.css("border-bottom", "transparent");
    }

    $(window).on('activate.bs.scrollspy', function(e, obj) {
        // console.log(obj.relatedTarget);
        $.each($("#navbar a.nav-link"), function(i, val) {
            if (obj.relatedTarget === $(this).attr("href")) {
                var col = $(this).css("color");
                $(this).css("color", "ff0053!important");
                $(this).css("border-bottom", "2px solid " + "#e7eef3");
            } else {
                removeBorder($(this));
            }
        });
    });

    function dodajAnimu() {
        var scrollPosition = $(window).scrollTop();
        console.log(scrollPosition);
        if ($(window).width() <= 768) {
            if (scrollPosition >= 500) {
                $("#about h2").addClass("anima-up-down")
                $("#about .col-6:nth-of-type(1)").addClass("anima-left");
                $("#about .col-6:nth-of-type(2)").addClass("anima-down-up");
                $("#about .col-6:nth-of-type(3)").addClass("anima-up-down");
                $("#about .col-6:nth-of-type(4)").addClass("anima-right");
            }
            if (scrollPosition >= 1100) {

                $("#about .col-lg-6:first-of-type").addClass("small-in");
            }
            if (scrollPosition >= 1450) {
                $("#about .col-lg-6:last-of-type").addClass("skill-bar")

            }
            if (scrollPosition >= 1900) {
                $("#portfolio h2").addClass("anima-down-up");
                $("#portfolio .col-lg-4:nth-of-type(1)").addClass("anima-left");
            }
            if (scrollPosition >= 2300) {
                $("#portfolio .col-lg-4:nth-of-type(2)").addClass("anima-up-down");
                $("#portfolio .col-lg-4:nth-of-type(3)").addClass("anima-right");
            }
            if (scrollPosition >= 3250) {
                $("#contact .container p.m-auto").addClass("anima-right");
                $("#contact h2").addClass("anima-left");
            }
            if (scrollPosition >= 3450) {
                $("#contact form").addClass("contact-input");
                $(".social").addClass("anima-down-up");
            }
        } else {
            if (scrollPosition >= 550) {
                $("#about h2").addClass("anima-up-down")
                $("#about .col-6:nth-of-type(1)").addClass("anima-left");
                $("#about .col-6:nth-of-type(2)").addClass("anima-down-up");
                $("#about .col-6:nth-of-type(3)").addClass("anima-up-down");
                $("#about .col-6:nth-of-type(4)").addClass("anima-right");
            }
            if (scrollPosition >= 650) {
                $("#about .col-lg-6:first-of-type").addClass("small-in");
                $("#about .col-lg-6:last-of-type").addClass("skill-bar")

            }
            if (scrollPosition >= 1650) {
                $("#portfolio h2").addClass("anima-down-up");
                $("#portfolio .col-lg-4:nth-of-type(1)").addClass("anima-left");
                $("#portfolio .col-lg-4:nth-of-type(2)").addClass("anima-up-down");
                $("#portfolio .col-lg-4:nth-of-type(3)").addClass("anima-right");
            }
            if (scrollPosition >= 2278) {
                $("#contact .container p.m-auto").addClass("anima-right");
                $("#contact h2").addClass("anima-left");
                $("#contact form").addClass("contact-input");
                $(".social").addClass("anima-down-up");
            }
        }
    }
    $(window).on('scroll', () => {
        dodajAnimu();;
    });
    var scrollTop = $(window).scrollTop(),
        elementOffset = $('#portfolio').offset().top,
        distance = (elementOffset - scrollTop);
    console.log(elementOffset);

    $("#navbar button").click(function() {
        $(this).toggleClass("pritisnut");
        $("#navbarNavDropdown").toggleClass("toggler-anima");
    });
    // window.pageYOffset

    // var nizCardova = $(".port-card::before");
    // console.log($("div.col-lg-4.col-sm-12:last-of-type()").outerHeight());
    // var portCardHeight = ($("div.col-lg-4.col-sm-12:last-of-type()").outerHeight());
    // $("div.col-lg-4.col-sm-12").css("height", "portCardHeight" + "px");
    // if ($(window).width() > 1024) {
    //     $("div.col-sm-12").removeClass("d-flex");
    // }

    // $.each($("#navbar a"), function(i, val) {

    //     if (val.text === "PORTFOLIO") {
    //         $(this).css("color", "#00c1ff");
    //     } else if (val.text === "Skills") {
    //         $(this).css("color", "#00c1ff");
    //     } else if (val.text === "ABOUT") {
    //         $(this).css("color", "#00c1ff");
    //     } else if (val.text === "CONTACT") {
    //         $(this).css("color", "#00c1ff");
    //     } else if (val.text === "HOME") {
    //         $(this).css("color", "#00c1ff");
    //     }
    // });

});
// document.getElementById("tunnel").animate([
//     // keyframes
//     {
//         transform: 'translateY(0px)'
//     }, {
//         transform: 'translateY(-300px)'
//     }
// ], {
//     // timing options
//     duration: 1000,
//     delay: 3000,
//     endDelay: 3000,
//     iterations: Infinity
// });