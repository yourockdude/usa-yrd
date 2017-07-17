$('.item').hover(
    function () {
        $('.item section').show("slow");
    }
);
$('.item').mouseleave(
    function () {
        $('.item section').fadeOut(1000);
    }
);