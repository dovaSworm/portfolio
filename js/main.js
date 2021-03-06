$(() => {
    $("#hero a").mouseover(function() {
        $("i", this).addClass("fa-arrow-down");
        $("i", this).removeClass("fa-arrow-right");
    });
    $("#hero a").mouseleave(function() {
        $("i", this).removeClass("fa-arrow-down");
        $("i", this).addClass("fa-arrow-right");
    });

    $('div.navbar-collapse ul li a').click(() => {
        $('div.navbar-collapse').removeClass("show");
    });
    var removeBorder = (o) => {
        o.css("border-bottom", "transparent");
    };

    $(window).on('activate.bs.scrollspy', (e, obj) => {
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

    $(".mm-buttons span").mouseover(function() {
        if ($(this).text() === "Major skills") {
            $(".skill-buttons span.major").addClass("highlight");
        }
        if ($(this).html() === "Minor skills") {
            $(".skill-buttons span.minor").addClass("highlight");
        }
        $(this).mouseleave(() => {
            $(".skill-buttons span").removeClass("highlight");
        });
    });

    $(window).on('scroll', () => {
        dodajAnimu();
        if (about.offsetTop > 70) {
            navbar.style.position = "sticky";
        }
    });
    var isMobile;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        isMobile = true;
    }
    if (isMobile) {
        $("nav").addClass("sticky");
    }
    if (!isMobile) {
        $(window).on('scroll', () => {
            stickyNavbar();
        });
    }

    $("#navbar button").click(function() {
        $(this).toggleClass("pritisnut");
        $("#navbarNavDropdown").toggleClass("toggler-anima");
    });
    $("#navbarNavDropdown li").click(function() {
        $("#navbar button").removeClass("pritisnut");
        $("#navbarNavDropdown").toggleClass("toggler-anima");
    });

    var navbar = document.getElementById("navbar");

    function stickyNavbar() {
        var sticky = navbar.offsetTop;
        if (window.pageYOffset >= sticky + 70) {
            navbar.classList.add("sticky");
            var poz = navbar.offsetTop;
            navbar.style.position = "unset";
            console.log('nije sticky');
        } else {
            console.log('sticky');
            navbar.classList.remove("sticky");
            navbar.style.position = "sticky";
        }
    }

    var windowHeight = (window.innerHeight * 5) / 10;
    var about = document.getElementById("about");
    var portfolio = document.getElementById("portfolio");
    var personal = document.getElementById("personal");
    var contact = document.getElementById("contact");

    function dodajAnimu() {
        var positionP = portfolio.getBoundingClientRect().top;
        var positionA = about.getBoundingClientRect().top;
        var positionPerson = personal.getBoundingClientRect().top;
        var positionC = contact.getBoundingClientRect().top;


        if (windowHeight >= positionA) {
            about.getElementsByClassName("col-lg-3")[0].classList.add("anima-left");
            about.getElementsByClassName("col-lg-3")[1].classList.add("anima-up-down");
            about.getElementsByClassName("col-lg-3")[2].classList.add("anima-down-up");
            about.getElementsByClassName("col-lg-3")[3].classList.add("anima-right");
        }
        if (windowHeight >= positionPerson) {
            personal.getElementsByClassName("col-lg-6")[0].classList.add("small-in");
            personal.getElementsByClassName("col-lg-6")[1].classList.add("skill-bar");
        }
        if (windowHeight >= positionP) {
            $("#portfolio h2").addClass("anima-down-up");
            portfolio.getElementsByClassName("col-lg-4")[0].classList.add("anima-left");
            portfolio.getElementsByClassName("col-lg-4")[1].classList.add("anima-up-down");
            portfolio.getElementsByClassName("col-lg-4")[2].classList.add("anima-right");
            portfolio.getElementsByClassName("col-lg-4")[3].classList.add("anima-left");
            portfolio.getElementsByClassName("col-lg-4")[4].classList.add("anima-up-down");
            portfolio.getElementsByClassName("col-lg-4")[5].classList.add("anima-right");
        }
        if (windowHeight >= positionC) {
            $("#contact .container p.m-auto").addClass("anima-right");
            $("#contact h2").addClass("anima-left");
            $("#contact form").addClass("contact-input");
            $(".social").addClass("anima-down-up");
        }
    }

});