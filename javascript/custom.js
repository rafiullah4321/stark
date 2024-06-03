$(document).ready(function(){
    $('.last-right a').hover(function(){
        var target = $(this).data('target');
        $('#last-img img').hide();
        $('.' + target).show();
    });
});



// iii. .brand-item (carousel)
		
$('.brand-item').owlCarousel({
    items:6,
    loop:true,
    smartSpeed: 1000,
    autoplay:true,
    dots:false,
    autoplayHoverPause:false,
    responsive:{
            0:{
                items:2
            },
            415:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:6
            }
        }
    });
    
    
    $('.play').on('click',function(){
        owl.trigger('play.owl.autoplay',[1000])
    })
    $('.stop').on('click',function(){
        owl.trigger('stop.owl.autoplay')
    });