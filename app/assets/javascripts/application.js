// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

$(function(){
  var $video = $("<div class='video' />");
  $video.load('/videos.html #video_mov');

  $("#videoContainer").prepend($video)

  $("#tabContainer").on("click", ".tab", function(event){
    var getTheData = $(event.currentTarget).data("video");
    var id = "video_" + getTheData;
    $("#videContainer div.video").remove();
    $video.empty();
    $video.load('/videos.html #'+ id);
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