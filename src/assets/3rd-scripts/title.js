$(document).ready(function () {
    $('.slider .item').hover(
        function () {
            $('.slider section').show("slow");
        }
    );
    $('.slider .item').mouseleave(
        function () {
            $('.slider section').fadeOut(1000);
        }
    );
});