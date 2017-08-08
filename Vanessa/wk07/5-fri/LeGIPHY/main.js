search =  $('form').submit(function(event){
  event.preventDefault();

  var giph = $('input').val();

  var settings = {

    url: 'http://api.giphy.com/v1/gifs/search',
    data: {
      q: giph,
      api_key: '8792c364a89a488f96989e3fd221dcf6',
      limit: 10,
      offset: 0
    }
  }

  $.ajax(settings).done(displaySearches)

  $(window).scroll(function() {
    if($(window).scrollTop() + $(window).height() > $(document).height()) {
      $('.results').append($.ajax(request).done(displaySearches))
    }
  })
})


function displaySearches(response) {
  console.log(response);

  response.data.forEach(function(picture){
    var image = $('<img>').attr('src', picture.images.original.url)
    $('.results').append(image)
  })
}
