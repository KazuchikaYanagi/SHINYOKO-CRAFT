$(function() {
    $('.message').hide();
    $('.message').fadeIn(3000);

    // About
    $('.shinyoko-hover').hover(
        function() {
            $('#detail').addClass('text-active');
            $('.detail').slideDown('slow');
        },
        function() {
            $('#detail').removeClass('text-active');
            $('.detail').slideUp('slow');
        }
    );

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
