$(function(){


    $('select.select-box').styler();


    setTimeout(function() {
	      $('input, select').styler();
    }, 100)

    $('.play-slider__inner').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow:
            '<button class="slick-arrow slick-prev"><img src="../images/icons/arrow-prev.png" alt=""></button>',
        nextArrow:
            '<button class="slick-arrow slick-next"><img src="../images/icons/arrow-next.png" alt=""></button>',
        variableWidth: true
    });

    $(".rate-star").rateYo({
        rating: 5,
        starWidth: "16px",
        readOnly: true,
        ratedFill: "#ffcc00"
    });
});