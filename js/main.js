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
});

