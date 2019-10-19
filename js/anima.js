$(() => {
    $(window).on('scroll', () => {
        dodajAnimu();
        stickyNavbar();
    });

    $("#navbar button").click(function() {
        $(this).toggleClass("pritisnut");
        $("#navbarNavDropdown").toggleClass("toggler-anima");
    });
    $("#navbarNavDropdown li").click(function() {
        $("#navbar button").removeClass("pritisnut");
        $("#navbarNavDropdown").toggleClass("toggler-anima");
    });

    var windowHeight = (window.innerHeight * 5) / 10;
    var about = document.getElementById("about");
    var portfolio = document.getElementById("portfolio");
    var personal = document.getElementById("personal");
    var contact = document.getElementById("contact");
    var navbar = document.getElementById("navbar");

    function stickyNavbar() {
        var sticky = navbar.offsetTop;
        if (window.pageYOffset >= sticky + 70) {
            navbar.classList.add("sticky")
        } else {
            navbar.classList.remove("sticky");
        }
    }

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
        }
        if (windowHeight >= positionC) {
            $("#contact .container p.m-auto").addClass("anima-right");
            $("#contact h2").addClass("anima-left");
            $("#contact form").addClass("contact-input");
            $(".social").addClass("anima-down-up");
        }
        // console.log(windowHeight);
    }
});