$( document ).ready(function() {
    $('#print-link').click(function()
     {
         $('.printable').not().hide();
         $('.printable').show();
         window.print();
     });

    $('.nav-btn').click(function () {

    	$('.nav-verticle').toggle();
    });

    $( window ).resize(function() {
        $('.nav-verticle').hide();
    });

    $( window ).scroll(function() {
        if ($(window).width() <= 480) {  
            $( "#main-cta" ).slideUp(700);
            $("#scroll-down-btn").click(function () {
                $( "#main-cta" ).slideUp(900);
            });
        }
    });
});

