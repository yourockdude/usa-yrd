$(".accordeon dd").hide().prev().click(function () {
    $(this).parent().find('dd').not(this).slideUp().prev().removeClass('active');
    $(this).next().not(':visible').slideDown().prev().addClass('active');
});
$('.only-child').find('dd').show();