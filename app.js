$(document).ready(console.log("Let’s get ready to party with jQuery!"))

$('article img').addClass('image-center')

$('article p').last().remove();

const fontSize = (Math.round(Math.random()*100)+1)
$('#title').css('font-size',fontSize);

$('ol').append('<li>Look at me now!</li>');

$('aside').children().remove();
$('aside').append('<p>I do apologize for any confusion the previous list caused.</p>');

$('body').on('change','input', function (){
    let newColor = '';
    newColor = 
    'rgb(' + 
    $('input').eq(0).val() + ', ' +
    $('input').eq(2).val() + ', ' +
    $('input').eq(1).val() + ')'
    
    $('body').css('background-color', newColor)
})

$('img').on('click', function(){
    $(this).remove();
})