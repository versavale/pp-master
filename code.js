$(document).ready(function() {

$(".scroll-button").click(function() {
    $('html,body').animate({
        scrollTop: $(".h1-panel-2").offset().top},
        'slow');
});


var fIn = function() { $(this).fadeIn(700, fOut); };
var fOut = function() { $(this).fadeOut(700, fIn); };
$('#blinking-image').fadeOut(700, fIn);
  
var count = 7;
var fIn = function() { $(this).fadeIn(700, fOut); };
var fOut = function() { if (--count > 0) $(this).fadeOut(700, fIn); };
$('#blinking-image').fadeOut(700, fIn);

});
