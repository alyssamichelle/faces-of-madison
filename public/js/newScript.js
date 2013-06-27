(function(){
  var $body = $('body'),
      $photos = $body.find('.photos');

    for (var i = 0; i < $photos.length; i++) {
        $photos[i].setAttribute('data-id', i);
        $photos[i].onclick = function(e){
            var currA = document.querySelector('.active');
            currA.setAttribute('photo');

            var href = this.getAttribute('href');
            $mainPhoto.style.backgroundImage = "url('" + href + "')";
            console.log('I am an href : ' + href);
            this.setAttribute('class', 'photo active');

            e.preventDefault();
            return false;
        };
    };
});