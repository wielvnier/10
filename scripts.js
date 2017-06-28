$(function() {
	var $carousel = $('#carousel'),
        $prev = $('#prev'),
        $next = $('#next'),
        carouselList = $("#carousel ul"),
        interval;

    interval = setInterval(moveNext, 3000);

    function moveNext() {
        carouselList.animate({'marginLeft':-500}, 500, moveFirstSlide);
    }

    function movePrev() {
        moveLastSlide();
        carouselList.animate({'marginLeft':0}, 500);
    }

    function moveLastSlide() {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");

        firstItem.before(lastItem);
        carouselList.css({marginLeft: -500});
    }

    function moveFirstSlide() {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        lastItem.after(firstItem);
        carouselList.css({marginLeft:0});
    }

    $carousel.hover(
        function() {
            clearInterval(interval);
        },
        function() {
            interval = setInterval(moveNext, 3000);
        }
    );

    $next.click(function() {
        moveNext();
    });

    $prev.click(function() {
        movePrev();
    });
});
