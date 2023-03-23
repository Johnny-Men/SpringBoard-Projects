$('body').append('<form>');
$('body').append('<div>');
$('div').addClass('reviews');
$('form').addClass('movie-review');
$('.movie-review').append('<input>');
$('.movie-review').append('<input>');
$('.movie-review input').eq(0).attr('placeholder', 'Enter Movie');
$('.movie-review input').eq(1).attr('placeholder', 'Movie Rating');
$('.movie-review').append('<button>');
$('button').text('submit rating').attr({type:'submit', class: 'submit-btn'});
$('.submit-btn').on('click', function(evt){
    evt.preventDefault();
    const movie = $('form input').eq(0).val();
    const movieRating = $('form input').eq(1).val();
    $('.reviews').append('<h3>').append('<button>');
    $(`div h3`).last().addClass(`${movie}`);
    $('div h3').last().text(`${movie} gets a rating of ${movieRating}.`);
    $('div button').text('remove').addClass('remove-btn');
    $('form input').val('');
});

$('body').on('click', '.remove-btn', function(evt){
    $(this).prev().remove();
    $(this).remove();
})



