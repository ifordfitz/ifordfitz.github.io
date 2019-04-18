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
      $('.overlayEddard').text("Beheaded in King's Landing on the orders of King Joffrey");
      $('.overlayCatelyn').text("Kidnaps Tyrion at the Crossroads Inn, takes him to the Eyrie, meets Robb's army in the Riverlands");
      $('.overlayRobb').text("Marches the Stark army south and wins a battle against the Lannister army");
      $('.overlayJon').text("Joins the nights watch");
      $('.overlaySansa').text("Betrothed to Joffrey, is generally uppity, regrets wanting to go to King's Landing");
      $('.overlayArya').text("Bit of a tomboy, learns to sword fight, escapes King's Landing with Hot Pie and co");
      $('.overlayBran').text("Pushed out a window and is paralyzed, attacked by wildlings, starts having Three-Eyed Raven dreams");
      $('.overlayRickon').text("Doesn't do much this season but does name his direwolf 'Shaggydog'");
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
