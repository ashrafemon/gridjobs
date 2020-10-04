$(document).ready(function(){
    $('#candidedItems').owlCarousel({
        autoplay: true,
        items: 3,
        loop: true,
        autoplayHoverPause: true,
        smartSpeed: 450,
        responsiveClass:true,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    });
});