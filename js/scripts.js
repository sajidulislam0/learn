$(document).ready(function () {


    /*=========Forgot Password Popup=========*/

    $('.full_view_popup').hide();
    $('#forgot_password_link').click(function () {
        $('.full_view_popup').fadeIn(500);
        $('#close').click(function () {
            $('.full_view_popup').fadeOut(500);
        })

    });

    /*=========Menu Dropdown OnHover=========*/

    $('ul.nav li.dropdown').hover(function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(200);
    }, function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(200);
    });



    /*=========Password Show Hide on OnClick=========*/

    $('.pass_show').append('<span class="ptxt">Show</span>');

    $(document).on('click', '.pass_show .ptxt', function () {
        $(this).text($(this).text() == "Show" ? "Hide" : "Show");
        $(this).prev().attr('type', function (index, attr) {
            return attr == 'password' ? 'text' : 'password';
        });
    });

    /*=========Blog published Later Show Hide=========*/
    $('#post_later_date').hide();
    $('#auto_publish_time').hide();


    $('#publishing_status').change(function () {
        if ($('#publishing_status').val() == 'Later')
            $('#post_later_date').show(),
                    $('#auto_publish_time').show();
        else
            $('#post_later_date').hide(),
                    $('#auto_publish_time').hide();
    });


$( "#datepicker" ).datepicker();

});