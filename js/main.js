$(function() {

    $("circle:nth-of-type(1n)").addClass("test1");
    $("circle:nth-of-type(2n)").addClass("test2").removeClass("test1");
    $("circle:nth-of-type(3n)").addClass("test3").removeClass("test1 test2");
    $("circle:nth-of-type(3n+1)").addClass("test4").removeClass("test1 test2 test3");
    $("#hero p").mouseover(function() {
        $("i", this).addClass("fa-arrow-down");
        $("i", this).removeClass("fa-arrow-right");
    });
    $("#hero p").mouseleave(function() {
        $("i", this).removeClass("fa-arrow-down");
        $("i", this).addClass("fa-arrow-right");
    });
    console.log('nesto');

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
    // var nizCardova = $(".port-card::before");
    console.log($("div.col-lg-4.col-sm-12:last-of-type()").outerHeight());
    var portCardHeight = ($("div.col-lg-4.col-sm-12:last-of-type()").outerHeight());
    $("div.col-lg-4.col-sm-12").css("height", "portCardHeight" + "px");
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