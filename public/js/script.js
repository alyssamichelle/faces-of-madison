
(function(){

    var photos = document.querySelectorAll('.photo');
    var mainPhoto = document.querySelector('#mainImage');
    var lArrow = document.querySelector('#leftArrow');
    var rArrow = document.querySelector('#rightArrow');

    for (var i = 0; i < photos.length; i++) {
        photos[i].setAttribute('data-id', i);
        photos[i].onclick = function(e){
            var currA = document.querySelector('.active');
            currA.setAttribute('photo');

            var href = this.getAttribute('href');
            mainPhoto.style.backgroundImage = "url('" + href + "')";
            console.log('I am an href : ' + href);
            this.setAttribute('class', 'photo active');

            e.preventDefault();
            return false;
        };
    };

    lArrow.onclick = function(e){
        var active = document.querySelector('.active');
        var index = active.getAttribute('data-id');
        active.setAttribute('class', 'photo');

        if(index < 1){
            index = photos.length-1;
        }else{
            index--;
        }

        var newCurr = photos[index];
        console.log(photos, index);
        newCurr.setAttribute('class', 'photo active');
        var href = newCurr.getAttribute('href');

        mainPhoto.style.backgroundImage = "url('" + href + "')";

        e.preventDefault();
        return false;
    };

    rArrow.onclick = function(e){
        var active = document.querySelector('.active');
        var index = active.getAttribute('data-id');
        active.setAttribute('class', 'photo');


        if(index >= photos.length -1){
            index = 0;
        }else{
            index++;
        }

        var newCurr = photos[index];
        console.log(photos, index);
        newCurr.setAttribute('class', 'photo active');
        var href = newCurr.getAttribute('href');

        mainPhoto.style.backgroundImage = "url('" + href + "')";

        e.preventDefault();
        return false;
    };

})();












