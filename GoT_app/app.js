$(()=>{
    $.ajax({
        url:'https://www.anapioficeandfire.com/api/houses/362'
    }).then(
        (data)=>{
            $('#words').html(data.words)
        },
    );

    $('.seasonOne').on('click', (event) => {
      event.preventDefault();
      $('#ned').append($('<h3>valar morghulis</h3>'));
      $('#ned').addClass('deadClass').removeClass('names');
    })

    $('.seasonThree').on('click', (event) => {
      event.preventDefault();
      $('#cTully').append($('<h3>valar morghulis</h3>'));
      $('#cTully').addClass('deadClass').removeClass('names');
      $('#robby').append($('<h3>valar morghulis</h3>'));
      $('#robby').addClass('deadClass').removeClass('names');
    })

    $('.seasonFive').on('click', (event) => {
      event.preventDefault();
      $('#jSnow').append($('<h3>valar morghulis</h3>'));
      $('#jSnow').addClass('deadClass').removeClass('names');
    })

    $('.seasonSix').on('click', (event) => {
      event.preventDefault();
      $('#jSnow').children().remove();
      $('#jSnow').append($('<h2>Jon Snow</h2>'));
      $('#jSnow').addClass('names').removeClass('deadClass');
      $('#ricky').append($('<h3>valar morghulis</h3>'));
      $('#ricky').addClass('deadClass').removeClass('names');
    })
})
