
$('.nav-link').click(function()
{
    $(this).css('color', 'black');
   $('#home').css('color', 'white');
   
})
$('#home').click(function(){
    $('#home').css('color', 'black');
    $('.nav-link').css('color', 'white');
    $('#home').css('color', 'black');
})

