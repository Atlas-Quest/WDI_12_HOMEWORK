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
  image = response['data'][0].images.fixed_height
  for (var i = 0; i < image.length; i++) {
    image[i].each
  }
}
