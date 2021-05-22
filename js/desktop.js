$(function() {
    $('.page-link').click(function() {                                          //Select anything with the class of .... page-link, and listen to when it is clicked.
        var anchor = $(this).attr('dest');                                      //Grab the intended destination of the custom attribute "dest"
        //$('.link-wrap').removeClass('visible'); 
        $('nav span').removeClass('active');                                    //Disable this button
        $('nav')
        .find('[dest="' + anchor + '"]')                                        //Find the object with an id of var anchor
        .addClass('active');                                                    //Enable this button
        $('html, body').animate({scrollTop: $('#' + anchor).offset().top},400); //Go to the destination
    });
});