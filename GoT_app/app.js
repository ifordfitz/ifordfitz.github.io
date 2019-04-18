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
      // if ($('#ned').children().length == 2) {
      //   return;
      // }
      $('#cTully').addClass('names').removeClass('deadClass');
      $('#robby').addClass('names').removeClass('deadClass');
      $('#ricky').addClass('names').removeClass('deadClass');
      $('.valar').remove();
      $('#ned').append($('<h3 class="valar">valar morghulis</h3>'));
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
      $('#cTully').addClass('names').removeClass('deadClass');
      $('#robby').addClass('names').removeClass('deadClass');
      $('#ricky').addClass('names').removeClass('deadClass');
      $('.valar').remove();
      $('#ned').append($('<h3 class="valar">valar morghulis</h3>'));
      $('#ned').addClass('deadClass').removeClass('names');
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
      // if ($('#cTully').children().length == 2) {
      //   return;
      // }
      // if ($('#robby').children().length == 2) {
      //   return;
      // }
      $('#ricky').addClass('names').removeClass('deadClass');
      $('.valar').remove();
      $('#ned').append($('<h3 class="valar">valar morghulis</h3>'));
      $('#ned').addClass('deadClass').removeClass('names');
      $('#cTully').append($('<h3 class="valar">valar morghulis</h3>'));
      $('#cTully').addClass('deadClass').removeClass('names');
      $('#robby').append($('<h3 class="valar">valar morghulis</h3>'));
      $('#robby').addClass('deadClass').removeClass('names');
      $('#nedText').text("Still missing a head");
      $('#catText').text("Murdered at the Red Wedding by the Frey's");
      $('#robbText').text("Murdered at the Red Wedding by the Frey's");
      $('#jonText').text("Joins the wildling army, scales the wall, finds love in a cave, gets shot by Ygritte");
      $('#sansaText').text("Supposed to marry Loras Tyrell even though she's not his type, Sansa marries Tyrion later");
      $('#aryaText').text("Escapes the brotherhood and is kidnapped by Sandor Clegane, they head to the Frey's and narrowly avoid the Red Wedding");
      $('#branText').text("Meets Jojen and Meera, works on his wargness, goes north of the wall");
      $('#rickonText').text("Travels with Osha to Last Hearth");
    })


    ///////////////////
    // SEASON FOUR
    ///////////////////
    $('.seasonFour').on('click', (event) => {
      event.preventDefault();
      $('#jSnow').addClass('names').removeClass('deadClass');
      $('#ricky').addClass('names').removeClass('deadClass');
      $('.valar').remove();
      $('#ned').append($('<h3 class="valar">valar morghulis</h3>'));
      $('#ned').addClass('deadClass').removeClass('names');
      $('#cTully').append($('<h3 class="valar">valar morghulis</h3>'));
      $('#cTully').addClass('deadClass').removeClass('names');
      $('#robby').append($('<h3 class="valar">valar morghulis</h3>'));
      $('#robby').addClass('deadClass').removeClass('names');
      $('#nedText').text("Still missing a head");
      $('#catText').text("Murdered at the Red Wedding by the Frey's");
      $('#robbText').text("Murdered at the Red Wedding by the Frey's");
      $('#jonText').text("Back with the Watch, fights the Wilding's attack on the Castle Black, loses Ygritte");
      $('#sansaText').text("Escapes King's Landing after Joffrey is poisoned, goes to the Eyrie with Petyr to visit her crazy aunt Lysa");
      $('#aryaText').text("Kills some Lannister soldiers with Sandor, head towards the Eyrie for a bit, robs an injured Sandor, boards a boat to Braavos");
      $('#branText').text("Captured by Karl, wargs into Hodor, continues his search for the Three-Eyed Raven");
      $('#rickonText').text("Apparently still traveling with Osha");
    })


    ///////////////////
    // SEASON FIVE
    ///////////////////
    $('.seasonFive').on('click', (event) => {
      event.preventDefault();
      // if ($('#jSnow').children().length == 2) {
      //   return;
      // }
      $('#ricky').addClass('names').removeClass('deadClass');
      $('.valar').remove();
      $('#ned').append($('<h3 class="valar">valar morghulis</h3>'));
      $('#ned').addClass('deadClass').removeClass('names');
      $('#cTully').append($('<h3 class="valar">valar morghulis</h3>'));
      $('#cTully').addClass('deadClass').removeClass('names');
      $('#robby').append($('<h3 class="valar">valar morghulis</h3>'));
      $('#robby').addClass('deadClass').removeClass('names');
      $('#jSnow').append($('<h3 class="valar">valar morghulis</h3>'));
      $('#jSnow').addClass('deadClass').removeClass('names');
      $('#nedText').text("Still missing a head");
      $('#catText').text("Murdered at the Red Wedding by the Frey's");
      $('#robbText').text("Murdered at the Red Wedding by the Frey's");
      $('#jonText').text("Goes to Hardhome, kills a White Walker, is tricked and murdered");
      $('#sansaText').text("Petyr marries Sansa off to Ramsay Bolton who is the worst person of all time");
      $('#aryaText').text("Goes to the House of Black and White and finds Jaqen, is tormented by the Waif, kills some people, becomes blind");
      $('#branText').text("Meets Jojen and Meera, works on his wargness, goes north of the wall");
      $('#rickonText').text("Travels with Osha to Last Hearth");
    })


    ///////////////////
    // SEASON SIX
    ///////////////////
    $('.seasonSix').on('click', (event) => {
      event.preventDefault();
      // if ($('#ricky').children().length == 2) {
      //   return;
      // }
      $('.valar').remove();
      $('#ned').append($('<h3 class="valar">valar morghulis</h3>'));
      $('#ned').addClass('deadClass').removeClass('names');
      $('#cTully').append($('<h3 class="valar">valar morghulis</h3>'));
      $('#cTully').addClass('deadClass').removeClass('names');
      $('#robby').append($('<h3 class="valar">valar morghulis</h3>'));
      $('#robby').addClass('deadClass').removeClass('names');
      $('#jSnow').children().remove();
      $('#jSnow').append($('<h2>Jon Snow</h2>'));
      $('#jSnow').addClass('names').removeClass('deadClass');
      $('#ricky').append($('<h3 class="valar">valar morghulis</h3>'));
      $('#ricky').addClass('deadClass').removeClass('names');
      $('#nedText').text("Still missing a head");
      $('#catText').text("Murdered at the Red Wedding by the Frey's");
      $('#robbText').text("Murdered at the Red Wedding by the Frey's");
      $('#jonText').text("Brought back to life by Melisandre, turns out to be a terrible battlefield commander, takes back Wintefell from evil Ramsay");
      $('#sansaText').text("Escapes Ramsay, meets up with Jon, saves Jon with the Knights of the Vale, watches Ramsay get killed by his dogs");
      $('#aryaText').text("Fights the Waif a bunch, gets her vision back, kills a bunch of Frey's including Walder");
      $('#branText').text("Hangs out in a cave with the Three-Eyed Raven and Children of the Forest, has more visions, escapes the Night King");
      $('#rickonText').text("Captured by Ramsay, is almost rescued but is killed when he decides to run only in a straight line while being shot at");
    });


    ///////////////////
    // SEASON SEVEN
    ///////////////////
    $('.seasonSeven').on('click', (event) => {
      event.preventDefault();
      $('.valar').remove();
      $('#ned').append($('<h3 class="valar">valar morghulis</h3>'));
      $('#ned').addClass('deadClass').removeClass('names');
      $('#cTully').append($('<h3 class="valar">valar morghulis</h3>'));
      $('#cTully').addClass('deadClass').removeClass('names');
      $('#robby').append($('<h3 class="valar">valar morghulis</h3>'));
      $('#robby').addClass('deadClass').removeClass('names');
      $('#ricky').append($('<h3 class="valar">valar morghulis</h3>'));
      $('#ricky').addClass('deadClass').removeClass('names');
      $('#nedText').text("Still missing a head");
      $('#catText').text("Murdered at the Red Wedding by the Frey's");
      $('#robbText').text("Murdered at the Red Wedding by the Frey's");
      $('#jonText').text("Meets Daenerys, won't bend the knee, captures a wight, gets a dragon killed, tries to convince everyone the real battle is between the living and the dead");
      $('#sansaText').text("Reunited with distant Bran and killer Arya, quarrels with Arya, puts Petyr on trial");
      $('#aryaText').text("Kills more Frey's, spars with Brienne, kills Petyr");
      $('#branText').text("Back in Winterfell and using his sight, sees that Jon is actually the legitimate son of Rhaegar Targaryen and Lyanna Stark");
      $('#rickonText').text("Still not running zigg-zagg");
    })


    ///////////////////
    // SEASON EIGHT
    ///////////////////
    $('.seasonEight').on('click', (event) => {
      event.preventDefault();
      $('.valar').remove();
      $('#ned').append($('<h3 class="valar">valar morghulis</h3>'));
      $('#ned').addClass('deadClass').removeClass('names');
      $('#cTully').append($('<h3 class="valar">valar morghulis</h3>'));
      $('#cTully').addClass('deadClass').removeClass('names');
      $('#robby').append($('<h3 class="valar">valar morghulis</h3>'));
      $('#robby').addClass('deadClass').removeClass('names');
      $('#ricky').append($('<h3 class="valar">valar morghulis</h3>'));
      $('#ricky').addClass('deadClass').removeClass('names');
      $('#nedText').text("Still missing a head");
      $('#catText').text("Murdered at the Red Wedding by the Frey's");
      $('#robbText').text("Murdered at the Red Wedding by the Frey's");
      $('#jonText').text("Rides a dragon with Daenerys and finds out he is not Jon Snow");
      $('#sansaText').text("Not feeling too wild about having Daenerys as a queen");
      $('#aryaText').text("Finally reunited with Jon, still has Needle");
      $('#branText').text("Hanging out in Winterfell just seeing stuff");
      $('#rickonText').text("Still not running zigg-zagg");
    })

    // ===================
  // GRABBING ELEMENTS
  // ===================
  const $openBtn = $('#openModal');
  const $modal = $('#modal');
  const $closeBtn = $('#close');

  // ===================
  // EVENT HANDLER
  // ===================
  // opens the modal
  const openModal = () => {
    $modal.css('display', 'block');
  }
  // closes the modal
  const closeModal = () => {
    $modal.css('display', 'none');
  }

  // ===================
  // EVENT LISTENERS
  // ===================
  // about the game button
  $openBtn.on('click', openModal);
  // close button
  $closeBtn.on('click', closeModal);

  // ===================
  // HAVE MODAL POP UP
  // ===================
  setTimeout(openModal, 2000)
});
