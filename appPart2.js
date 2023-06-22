$(document).ready( function(){

$('body').append('<form>Movie Titles and Ratings!</form>').append('<table id="myTable">')

$('form').append('<br> <input id = "movie-info" text = "Title" minlength= "2" Placeholder = "Enter Movie Title">').append('<input type="number" min = "1" max = "10" id="rating-info">').append('<button>Submit</button>')

$('table').append('<tr><th id = "movie-list" class = "listedM">Movie <sub id="sortM">sort<sub></th> <th id = "rating-list" class = "listedR">Rating <sub id="sortR">sort<sub></th> </tr>')



$('form').submit(function(e){
    const mov = $('#movie-info').val()
    const rat = $('#rating-info').val()
    if(mov.length > 1 ){
        e.preventDefault()};
    $('input').val('')

    $('table').append('<tr> <td class="newMov"></td> <td class = "newRate"></td> <td> <button> Remove </button> </td> </tr>');
    $('.newMov').text(mov).removeClass('newMov').addClass('listedM');
    $('.newRate').text(rat).removeClass('newRate').addClass('listedR');
})

$('table').on('click','button', function(){
    $(this).parent().parent().remove();
})

$('table').on('click','#sortM', function(){
    const table = document.getElementById('myTable');
    const trCount = $('tr').length;
    let switching = true;
    let i = 1;

    while(switching){
        switching = false;
        let rows = table.rows;
        let shouldSwitch = false;

        for (i = 1; i < (trCount); i++){
            shouldSwitch = false;
            let currVal = $('.listedM').eq(i).text().toLowerCase();
            let nexVal = $('.listedM').eq(i+1).text().toLowerCase();
            if ( currVal > nexVal){
                shouldSwitch = true;
                break;
            }
        }

        if (shouldSwitch){
            rows[i].parentNode.insertBefore(rows[i+1], rows[i]);
            switching = true;
        }
    }
})
//https://www.w3schools.com/howto/howto_js_sort_table.asp#:~:text=Sort%20Table%20by%20Clicking%20the,ascending%20(A%20to%20Z).
//Used above website for organizing the sort function. 

//below is a repeat sort for the ratings information. 
$('table').on('click','#sortR', function(){
    const table = document.getElementById('myTable');
    const trCount = $('tr').length;
    let switching = true;
    let i = 1;

    while(switching){
        switching = false;
        let rows = table.rows;
        let shouldSwitch = false;

        for (i = 1; i < (trCount); i++){
            shouldSwitch = false;
            let currVal = $('.listedR').eq(i).text().toLowerCase();
            let nexVal = $('.listedR').eq(i+1).text().toLowerCase();
            if ( currVal > nexVal){
                shouldSwitch = true;
                break;
            }
        }

        if (shouldSwitch){
            rows[i].parentNode.insertBefore(rows[i+1], rows[i]);
            switching = true;
        }
    }
})


})

