$(()=>{
    $.ajax({
        url:'https://www.anapioficeandfire.com/api/houses/362'
    }).then(
        (data)=>{
            $('#words').html(data.words)
        },
    );

    $('.seasonOne').on('click', () => {
      console.log('seasonOne clicked');
    })
})
