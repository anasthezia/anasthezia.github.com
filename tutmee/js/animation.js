/**
 * Created by anasthezia on 18.09.2015.
 */
$(window).scroll(function () {
    var windowWidth = $(this).width();
    var windowHeight = $(this).height();
    var windowScrollTop = $(this).scrollTop();
   /* ---шапка---*/

   if (windowScrollTop > 140) {
        $('header .h-rel').css('display', 'none');
        $('header .h-fixed').css('display', 'block');
    } else {
        $('header .h-rel').css('display', 'block');
        $('header .h-fixed').css('display', 'none');
    }
    var firstAnimation = function () {
        $('.boxes .box').each(function () {
            $(this).delay(500).animate({
                opacity: 1,
                height: '256',
                width: '255'
            }, 2000);
        });
    };
    var secondAnimation = function () {
        $('.method:eq(0)').delay(1000).animate({ opacity: 1 }, 'slow', function () {
            $(this).find('h4').css('background-color', '#B5C3D5');
        });
        $('.method:eq(1)').delay(2000).animate({ opacity: 1 }, 'slow', function () {
            $(this).find('h4').css('background-color', '#B5C3D5');
        });
        $('.method:eq(2)').delay(3000).animate({ opacity: 1 }, 'slow', function () {
            $(this).find('h4').css('background-color', '#B5C3D5');
        });
        $('.method:eq(3)').delay(4000).animate({ opacity: 1 }, 'slow', function () {
            $(this).find('h4').css('background-color', '#B5C3D5');
        });
    };
    var thirdAnimation = function () {
        $('.blogs').find('p').delay(1400).animate({
            opacity: 1,
            left: 0
        }, 'slow');
        $('.blogs').find('img').delay(2000).animate({
            opacity: 1,
            right: 0
        }, 'slow');
        $('.blogs').find('button').delay(2500).animate({
            opacity: 1,
            bottom: 0
        }, 'slow');
    };
    if (windowWidth <= 549) {
        if (windowScrollTop > 600) {
            $('.boxes').css('background', 'tomato');
            firstAnimation();
        }
        if (windowScrollTop > 1750) {
            $('.process').css('background', 'tomato');
            secondAnimation();
        }
        if (windowScrollTop > 3500) {
            $('.blogs').css('background', 'tomato');
            thirdAnimation();
        }
    } else if (windowWidth > 549 && windowWidth <= 991) {
        if (windowScrollTop > 480) {
            $('.boxes').css('background', 'tomato');
            firstAnimation();
        }
        if (windowScrollTop > 1150) {
            $('.process').css('background', 'tomato');
            secondAnimation();
        }
        if (windowScrollTop > 2200) {
            $('.blogs').css('background', 'tomato');
            thirdAnimation();
        }
    } else {
        if (windowScrollTop > 450) {
            $('.boxes').css('background', 'tomato');
            firstAnimation();
        }
        if (windowScrollTop > 850) {
            $('.process').css('background', 'tomato');
            secondAnimation();
        }
        if (windowScrollTop > 1600) {
            $('.blogs').css('background', 'tomato');
            thirdAnimation();
        }
    }
});
</script>