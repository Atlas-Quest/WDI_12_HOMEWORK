var $btn = $('button');

$btn.on('click', function(event) {

  event.preventDefault();

  var movieName = document.querySelector('input').value;

  var inputBox = document.querySelector('input').value;

  var settings = {
    url: 'http://omdbapi.com',
    data: {
      t: movieName,
      apikey: '2f6435d9'
  }
}

  $.ajax(settings).done(function(response) {
    var newItem = document.createElement('p');
    newItem.textContent = response.Title
    document.querySelector('.response').append(newItem);
  })
  console.log('after ajax function call');
});


// var searchMovies = function() {
//   var query = document.querySelector("input").value;
//   var movieList = [];
//   $.ajax(settings).done(function(movies){
//     $.each(movies.Search,function(ind,movie){
//       movieList.push(movie.Title);
//     })
//   });
// }
