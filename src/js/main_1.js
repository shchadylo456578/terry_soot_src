//COOKIE-INFORM
function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}


$(document).ready(function () {

    // console.log(getCookie("cookie"));

    if (getCookie("cookie") == "true") {
        $(".cookie").remove();
    }

    //COOKIES-BUTTON
    $(".button-close").click(function () {
        $(".cookie").addClass("close");
        document.cookie = "cookie=true";
    });
//COOKIE-INFORM


//HEADER-MENU

    $(".dropdown-toggle").click(function () {
        $(".dropdown-menu").toggleClass("open");
    });

    $('.dropdown-menu').click(function (event) {
        event.stopPropagation();
    });

    $(document).click(function (e) {
        var target = e.target;
        if (!$(target).is(".dropdown-toggle") && !$(target).parents().is(".dropdown-toggle")) {
            $(".dropdown-menu").removeClass("open");
        }
    });


//HEADER-MENU


//INFORM
    //accordion menu
    $('.accordion-container').hide();
    $('.accordion-toggle').click(function () {
        if ($(this).next().not(':hidden')) {
            $('.accordion-toggle').next().slideUp(500);
        }

        if ($(this).next().is(':hidden')) {
            $('.accordion-toggle').next().slideUp(500);
            $(this).next().slideDown(500);
        }
        return false;
    });
    //accordion menu

    $('.switch').click(function () {
        if ($(this).hasClass('up-pointer')) {
            $(this).removeClass('up-pointer');
        } else {
            $('.switch').removeClass('up-pointer');
            $(this).addClass('up-pointer');
        }
    });


    //
    // $(".accordion").click(function () {
    //     $(".accordion-color").toggleClass("changeColor");
    // });



    // add class color menu accordion arrow onclick before , after
    // $('.accordion').click(function () {
    //     $('.arrow').toggleClass('to_show');
    // });




    //color arrow open

    // $('.accordion').click(function () {
    //     if ($(this).addClass('.arrow .changeColor')) {
    //         $(this).removeClass('.arrow .changeColor');
    //     } else {
    //         $('.accordion').removeClass('.arrow .changeColor');
    //         $(this).addClass('.arrow .changeColor');
    //
    //     }
    // });




    //ADD AND REMOVE CLASS ARROW C0LOR
    // $(".accordion").click(function () {
    //     $(".arrow-open").toggleClass("changeColor");
    // });s


    //REMOVE CLASS ARROW C0LOR

    //REMOVE CLASS ACCORDION_COLOR TEXT
    $('.accordion').click(function () {
        if ($(this).hasClass('changeColorText')) {
            $(this).removeClass('changeColorText');
        } else {
            $('.accordion').removeClass('changeColorText');
            $(this).addClass('changeColorText');

        }
    });
    //REMOVE CLASS ACCORDION_COLOR TEXT


});
//INFORM
//Smooth scroll

function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('#menu-center a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#menu-center ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else {
            currLink.removeClass("active");
        }
    });
}

$(document).ready(function () {
    $(document).on("scroll", onScroll);


    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        });
        $(this).addClass('active');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top + 30
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });

});

//Smooth scroll



