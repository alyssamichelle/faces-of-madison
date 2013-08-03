//= require jquery
//= require jquery_ujs
//= require_tree .

$(function(){
  var $video = $("<div class='video' />");
  $video.load('/videos #video_mov');

  $("#videoContainer").prepend($video)

  $("#tabContainer").on("click", ".tab", function(event){
    var getTheData = $(event.currentTarget).data("video");
    var id = "video_" + getTheData;
    $("#videContainer div.video").remove();
    $video.empty();
    $video.load('/videos #'+ id);
    $("#videoContainer").prepend($video);
  });

  var timeout;
  $(window).on('resize', function(){
    clearTimeout(timeout);
    timeout = setTimeout(function(){
      resizeFaces();
    }, 25);
  });

  var resizeFaces = function() {
    var width = $('#imagesContainer > div:first').width();
    $('#imagesContainer > div').css('height', width);
  }

  resizeFaces();
});
