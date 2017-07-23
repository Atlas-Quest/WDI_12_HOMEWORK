var loadComments = function(event){
  event.preventDefault();
  $.ajax({
    url: '/api/comments'
  }).done(function(res){

    var $commentsDiv = $('.comments');

    res.forEach(function(comment) {
      var $comment = $('<p>').html(comment.content);
      $commentsDiv.append($comment);
    })

  });
}
