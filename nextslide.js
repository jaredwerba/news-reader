var main = function(){
    $('.dropdown-toggle').click(function(){
        ('.dropdown-menu').toggle();
    });
    //end of click function
    $('.arrow-next').click(function(){
        var currentSlide = $('.active-slide');
        var nextSlide = currentSlide.next();
        if (nextSlide.length == 0){
            nextSlide = $('.slide').first();
        };
        //loop
        $('.active-dot') = currentDot;
        currentDot.next() = nextDot;
        $('.active-dot').removeClass('currentDot')
        $('.active-dot').addClass('nextDot')
        currentSlide.fadeOut(600).removeClass('active-slide');
        nextSlide.fadeIn(600).addClass('active-slide');
    });
};

$(document).ready(main);