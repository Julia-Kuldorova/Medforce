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
    $('.comments-slider__inner').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:
            '<button class="slick-arrow slick-prev"><img src="../images/icons/arrow-prev.png" alt=""></button>',
        nextArrow:
            '<button class="slick-arrow slick-next"><img src="../images/icons/arrow-next.png" alt=""></button>',
        dots: true
    });

    $(".rate-star").rateYo({
        rating: 5,
        starWidth: "16px",
        readOnly: true,
        ratedFill: "#ffcc00"
    });

    $(".qfa__item .qfa__item-btn").on("click", function  () {
        $(this).closest('.qfa__item').children('.qfa__item-bottom').slideToggle();
        $(this).toggleClass('active');
    })

});