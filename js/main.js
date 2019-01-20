$( document ).ready(function() {
    $('#print-link').click(function()
     {
         $('.printable').not().hide();
         $('.printable').show();
         window.print();
     });
});