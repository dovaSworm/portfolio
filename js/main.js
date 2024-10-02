
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
// toggler button
if (isMobile) {
    if (hero + 100 < window.scrollY) {
        navbar.addClass('show');
    }
}
$(".toggler").click(function () {
    $(".nav-links").toggleClass("active")
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

$(".mm-buttons span.action-btn").mouseover(function () {
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
    });
});

$(window).on('scroll', () => {
    var hero = document.getElementById("hero").getBoundingClientRect().top;
    var about = document.getElementById("about").getBoundingClientRect().top;

    var portfolio = document.getElementById("portfolio").getBoundingClientRect().top;

    var contact = document.getElementById("contact").getBoundingClientRect().top;


    if (hero + 800 < window.scrollY) {
        navbar.addClass('show');
    } else {
        navbar.removeClass('show');
    }
});
