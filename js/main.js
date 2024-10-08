
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}
var navbar = $("#navbar");
var ww = $(window).width();
var wh = $(window).height();
getYear();
var isMobile;
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    isMobile = true;
}

if (isMobile) {
    if (hero + 100 < window.scrollY) {
        navbar.addClass('show');
    }
}

// toggler button
$(".toggler").click(function () {
    $(".nav-links").toggleClass("active");
    $(".nav-link").click(function () {
        $(".nav-links").removeClass("active");
        $(".toggler").removeClass("hide");
    });
    $(".toggler").toggleClass("hide");
});

$("#hero a").mouseover(function () {
    $("i", this).addClass("fa-arrow-down");
    $("i", this).removeClass("fa-arrow-right");
});
$("#hero a").mouseleave(function () {
    $("i", this).removeClass("fa-arrow-down");
    $("i", this).addClass("fa-arrow-right");
});
$(".bio-nav").mouseover(function () {
    if ($(this).html() === "Bio") {
        $(".bio p").addClass("highlight");
        $(".bio h5").addClass("highlight");
    }
    if ($(this).html() === "Certificates") {
        $(".certif p").addClass("highlight");
        $(".certif h5").addClass("highlight");
    }
    if ($(this).html() === "Education") {
        $(".education p").addClass("highlight");
        $(".education h5").addClass("highlight");
    } $(this).mouseleave(() => {
        $(".bio p, h5").removeClass("highlight");
        $(".certif p, h5").removeClass("highlight");
        $(".education p, h5").removeClass("highlight");
    });
});
$(".project").mouseover(function () {
    $(".project .const-img").addClass("stelar");
    $(this).mouseleave(() => {
        $(".project .const-img").removeClass("stelar");
    });
});
$(".bio-nav").mouseover(function () {
    if ($(this).text() === "Major") {
        $(".skill-col span.major span.bulb").addClass("bulb-on");
        $(".skill-col span.major").addClass("highlight");
    }
    if ($(this).html() === "Minor") {
        $(".skill-col span.minor span.bulb").addClass("bulb-on");
        $(".skill-col span.minor").addClass("highlight");
    }
    $(this).mouseleave(() => {
        $(".skill-col span").removeClass("highlight");
        $(".skill-col span").removeClass("bulb-on");
        $(".bio p, h5").removeClass("highlight");
        $(".certif p, h5").removeClass("highlight");
        $(".education p, h5").removeClass("highlight");
    });

});

function dodajAnimu() {
    var webs = document.getElementsByClassName("websites")[0].getBoundingClientRect().top;
    var proj = document.getElementsByClassName("projects")[0].getBoundingClientRect().top;
    if (webs < wh) {
        $(".websites h3").addClass('smallin');
    }
    if (proj < wh) {
        $(".projects h3").addClass('smallin');
    }
}

function navbarAnima() {
    if (wh / 2 < window.scrollY) {
        navbar.addClass('show');
    } else {
        navbar.removeClass('show');
    }
}

$(window).on('scroll', () => {
    navbarAnima();
    dodajAnimu();
});
