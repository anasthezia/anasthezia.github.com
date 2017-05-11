
$(document).ready(function(){

    $("#bitpool").on('click', function() {
        $.fancybox.open([
            {src  : 'img/portfolio/bitpool/bitpool-ipad-1.png'},
            {src  : 'img/portfolio/bitpool/bitpool-ipad-2.png'},
            {src  : 'img/portfolio/bitpool/bitpool-ipad-3.png'},
            {src  : 'img/portfolio/bitpool/bitpool-ipad-4.png'},
            {src  : 'img/portfolio/bitpool/bitpool-ipad-5.png'},
            {src  : 'img/portfolio/bitpool/bitpool-ipad-6.png'},
            {src  : 'img/portfolio/bitpool/bitpool-ipad-7.png'}
        ], {
            loop : false,
            hash : "bitpool"
        });
    });

    $("#palmetto").on('click', function() {
        $.fancybox.open([
            {src  : 'img/portfolio/palmetto/palmetto-0.png'},
            {src  : 'img/portfolio/palmetto/palmetto-1.png'},
            {src  : 'img/portfolio/palmetto/palmetto-8.png'},
            {src  : 'img/portfolio/palmetto/palmetto-admin-4.png'}
        ], {
            loop : false,
            hash : "palmetto"
        });
    });
});