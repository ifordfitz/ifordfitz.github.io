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
      $('#nedText').text("Beheaded in King's Landing on the orders of King Joffrey");
      $('#catText').text("Kidnaps Tyrion at the Crossroads Inn, takes him to the Eyrie, meets Robb's army in the Riverlands");
      $('#robbText').text("Marches the Stark army south and wins a battle against the Lannister army");
      $('#jonText').text("Joins the nights watch, makes friends and enemies");
      $('#sansaText').text("Betrothed to Joffrey, is generally uppity, regrets wanting to go to King's Landing");
      $('#aryaText').text("Bit of a tomboy, learns to sword fight, escapes King's Landing with Hot Pie and co");
      $('#branText').text("Pushed out a window and is paralyzed, starts having Three-Eyed Raven dreams");
      $('#rickonText').text("Doesn't do much this season but does name his direwolf 'Shaggydog'");
    })


    ///////////////////
    // SEASON TWO
    ///////////////////
    $('.seasonTwo').on('click', (event) => {
      event.preventDefault();
      $('#nedText').text("Still missing a head");
      $('#catText').text("Releases Jaime Lannister and warns Robb not to break his marriage promise to House Frey");
      $('#robbText').text("Continues to be victorious against the Lannister forces, falls in love with Talisa");
      $('#jonText').text("Ranges beyond the wall, meets Ygritte, and is captured by the Lord of Bones");
      $('#sansaText').text("Stuck in King's Landing, is saved by The Hound, Joffrey divorces her");
      $('#aryaText').text("Somehow becomes Tywin Lannister's cupbearer and befriends Jaqen H'ghar");
      $('#branText').text("Escapes Winterfell after Theon's betrayal and heads north with Hodor, Osha, Rickon, and direwolves x 2");
      $('#rickonText').text("Escapes Winterfell after Theon's betrayal and heads north with Hodor, Osha, Bran, and direwolves x 2");
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
