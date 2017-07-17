search =  $('form').submit(function(event){
  event.preventDefault();
  var giphs = $('input').val();

  var settings = {

    url: 'http://api.giphy.com/v1/gifs/search',
    data: {
      q: giphs,
      apiKey: '8792c364a89a488f96989e3fd221dcf6',
      limit: 10
    }
  }

  console.log(giphs);

  $.ajax(settings).done(displaySearches)
})

function displaySearches(response){
  var giphList = response.data;
  debugger
  for (var i = 0; i < giphList.length; i++) {
    var div = $('<div>');
    giphList[i].images;
    giphList.append(images);
    $('#giphs').append(div);
  }
  console.log(response.data[0].Title)
}
