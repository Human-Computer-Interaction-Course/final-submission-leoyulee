$(function() {
    $('.page-link').click(function() {
        var anchor = $(this).attr('dest');
        $('.link-wrap').removeClass('visible');
        $('nav span').removeClass('active');
        $('nav')
        .find('[dest="' + anchor + '"]')
        .addClass('active');
        $('html, body').animate({scrollTop: $('#' + anchor).offset().top},400);
    });
});