/*----анимаци€----*/
$(window).scroll(function () {
    var windowWidth = $(this).width();
    var windowHeight = $(this).height();
    var windowScrollTop = $(this).scrollTop();

    /* ---шапка---*/
    if (windowScrollTop > 140) {
        $('.h-rel').css('display', 'none');
        $('.h-fixed').css('display', 'block');
    } else {
        $('.h-rel').css('display', 'block');
        $('.h-fixed').css('display', 'none');
    }

    /*блоки - шачматки--*/
    var firstAnimation = function () {
        $('.boxes .box').each(function () {
            $(this).delay(500).animate({
                opacity: 1,
                height: '256',
                width: '255'
            }, 2000);
        });
    };

    /*---*/
    var secondAnimation = function () {
        $('.btn-2').delay(700).animate({ opacity: 1 }, 'slow');
        $('.step-1').delay(1400).animate({ opacity: 1 }, 'slow');
        $('.step-2').delay(2100).animate({ opacity: 1 }, 'slow');
        $('.step-3').delay(2800).animate({ opacity: 1 }, 'slow');
        $('.step-4').delay(3500).animate({ opacity: 1 }, 'slow');
        $('.step-5').delay(4200).animate({ opacity: 1 }, 'slow');
        $('.btn-3').delay(4900).animate({ opacity: 1 }, 'slow');
    };

    /*---*/

    /*--Ўирина экрана меньше 549--*/
    if (windowWidth <= 549) {
        if (windowScrollTop > 1600) {
            $('.boxes').css('background', '#ffffff');
            firstAnimation();
        }
        if (windowScrollTop > 1750) {
            $('.steps').css('background', ' ');
            secondAnimation();
        }

    } else if (windowWidth > 549 && windowWidth <= 991) {
        if (windowScrollTop > 1480) {
            $('.boxes').css('background', '#ffffff');
            firstAnimation();
        }
        if (windowScrollTop > 1150) {
            $('.steps').css('background', ' ');
            secondAnimation();
        }

    } else {
        if (windowScrollTop > 950) {
            $('.boxes').css('background', '#ffffff');
            firstAnimation();
        }
        if (windowScrollTop > 1550) {
            $('.steps').css('background', ' ');
            secondAnimation();
        }

    }
});

/*----выравнивание блоков по высоте---*/
function setEqualHeight(columns)
{
    var tallestcolumn = 0;
    columns.each(
        function()
        {
            currentHeight = $(this).height();
            if(currentHeight > tallestcolumn)
            {
                tallestcolumn = currentHeight;
            }
        }
    );
    columns.height(tallestcolumn);
}
$(document).ready(function() {
    setEqualHeight($(".pl_box"));
});

/*--------*/

$(function () {
    var austDay = new Date();
    austDay = new Date(2015, 10, 12);
    $('#countdown').countdown({until: austDay});
    $('#year').text(austDay.getFullYear());
});

/*------*/
$(document).ready(function(){
    $('.bxslider-1').bxSlider({
        mode: 'fade',
        auto: true,
        autoControls: false,
        controls: false,
        pause: 5000,
        pager: false
    });

    $('.bxslider-2').bxSlider({
        auto: true,
        autoControls: false,
        pause: 5000
    });
    $('.fancybox').fancybox();

    //	Responsive layout, resizing the items
    $('#foo4').carouFredSel({
        responsive: true,
        width: '100%',
        prev: '#prev3',
        next: '#next3',
        auto: false,
        items: {
            width: 504,
            //	height: '30%',	//	optionally resize item-height
            visible: {
                min: 3,
                max: 4
            }
        },
        mousewheel: true,
        swipe: {
            onMouse: true,
            onTouch: true
        }
    });

});