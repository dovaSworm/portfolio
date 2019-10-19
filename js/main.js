$(() => {

    // $("circle:nth-of-type(1n)").addClass("test1");
    // $("circle:nth-of-type(2n)").addClass("test2").removeClass("test1");
    // $("circle:nth-of-type(3n)").addClass("test3").removeClass("test1 test2");
    // $("circle:nth-of-type(3n+1)").addClass("test4").removeClass("test1 test2 test3");
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
    }

    $(window).on('activate.bs.scrollspy', (e, obj) => {
        $.each($("#navbar a.nav-link"), function(i, val) {
            if (obj.relatedTarget === $(this).attr("href")) {
                console.log(obj.relatedTarget);
                var col = $(this).css("color");
                $(this).css("color", "ff0053!important");
                $(this).css("border-bottom", "2px solid " + "#e7eef3");
            } else {
                removeBorder($(this));
            }
        });
    });



    $(".mm-buttons span").mouseover(function() {
        // console.log($(this).text());
        if ($(this).text() === "Major skills") {
            $(".skill-buttons span.major").addClass("highlight");
        }
        if ($(this).html() === "Minor skills") {
            $(".skill-buttons span.minor").addClass("highlight");
        }
        $(this).mouseleave(() => {
            $(".skill-buttons span").removeClass("highlight");
        })

    });

});