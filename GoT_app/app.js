$(()=>{

    ///////////////////
    // AJAX
    ///////////////////
    $.ajax({
        url:'https://www.anapioficeandfire.com/api/houses/362'
    }).then(
        (data)=>{
            $('#words').html(data.words)
        },
    );


    ///////////////////
    // SEASON ONE
    ///////////////////
    $('.seasonOne').on('click', (event) => {
      event.preventDefault();
      $('#ned').append($('<h3>valar morghulis</h3>'));
      $('#ned').addClass('deadClass').removeClass('names');
      // $('#ned').hover(showNedOne, hideNedOne);
    })


    ///////////////////
    // SEASON TWO
    ///////////////////
    $('.seasonTwo').on('click', (event) => {
      event.preventDefault();

    })

    ///////////////////
    // SEASON THREE
    ///////////////////
    $('.seasonThree').on('click', (event) => {
      event.preventDefault();
      $('#cTully').append($('<h3>valar morghulis</h3>'));
      $('#cTully').addClass('deadClass').removeClass('names');
      $('#robby').append($('<h3>valar morghulis</h3>'));
      $('#robby').addClass('deadClass').removeClass('names');
    })


    ///////////////////
    // SEASON FOUR
    ///////////////////



    ///////////////////
    // SEASON FIVE
    ///////////////////
    $('.seasonFive').on('click', (event) => {
      event.preventDefault();
      $('#jSnow').append($('<h3>valar morghulis</h3>'));
      $('#jSnow').addClass('deadClass').removeClass('names');
    })


    ///////////////////
    // SEASON SIX
    ///////////////////
    $('.seasonSix').on('click', (event) => {
      event.preventDefault();
      $('#jSnow').children().remove();
      $('#jSnow').append($('<h2>Jon Snow</h2>'));
      $('#jSnow').addClass('names').removeClass('deadClass');
      $('#ricky').append($('<h3>valar morghulis</h3>'));
      $('#ricky').addClass('deadClass').removeClass('names');
    })


    ///////////////////
    // SEASON SEVEN
    ///////////////////



    ///////////////////
    // SEASON EIGHT
    ///////////////////

})


///////////////////
// OVERLAY TEXT
///////////////////

// SEASON ONE

// EDDARD STARK
// const showNedOne = (event) => {
//   $(event.currentTarget).css('z-index', 1).text('Beheaded in Kings Landing');
// }
//
// const hideNedOne = (event) => {
//
// }
