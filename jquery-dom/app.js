console.log("Let's get ready to party with jQuery");

$(' article img').addClass('image-center');
$('article p').eq(5).remove();
$('#title').css('font-size', function(){
     const size = Math.floor(Math.random() * 100);
     return `${size}px`;
});

$('ol').append('<li>HEY</li>');
$('ol li').remove();
$('ol').append('<p> So sorry there was a list here.</p>');
$('.col-sm-4').on('change',function(){
    const r = $('.col-sm-4 input').eq(0).val();
    const b = $('.col-sm-4 input').eq(1).val();
    const g = $('.col-sm-4 input').eq(2).val();
    console.log(`rgb(${r},${b},${g})`);
 return $('body').css('background-color', `rgb(${r},${b},${g})`);
});

$('img').on('click', function(){
    $(this).remove();
})