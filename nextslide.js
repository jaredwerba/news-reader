var main = function(){
    $('.dropdown-toggle').click(function(){
        ('.dropdown-menu').toggle();
    });
    //end of click function
    $('.arrow-next').click(function(){
        var currentSlide = $('.active-slide');
        var nextSlide = currentSlide.next();
        
        var currentDot = $('.active-dot');
        var nextDot = currentDot.next();
        
            if (nextSlide.length == 0){
            nextSlide = $('.slide').first(); //loops images
            nextDot = $('.dot').first(); //loops dots
            
        };
        
        
        currentSlide.fadeOut(600).removeClass('active-slide');
        nextSlide.fadeIn(600).addClass('active-slide');
        
        currentDot.removeClass('active-dot');
        nextDot.addClass('active-dot');
    });
};

$(document).ready(main);