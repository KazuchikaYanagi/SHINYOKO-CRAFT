$(function() {
    $('.message').hide();
    $('.message').fadeIn(3000);

    // About
    $('.shinyoko-hover h2').click(function() {
        var $detail = $('.detail');
        if($detail.hasClass('open')) {
            $detail.removeClass('open');
            $detail.slideUp('slow');
            $('span').text('+')
        } else {
            $detail.addClass('open');
            $detail.slideDown('slow');
            $('span').text('-');
        }
    })

    // FAQ
    $('.faq-item').click(function() {
        var $answer = $(this).find('.answer');
        if($answer.hasClass('open')) {
            $answer.removeClass('open');
            $answer.slideUp('slow');
            $(this).find('span').text('+');
        } else {
            $answer.addClass('open');
            $answer.slideDown('slow');
            $(this).find('span').text('-');
        }
    });
});
