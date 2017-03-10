var currentSlide = 0;
var slides = document.getElementsByClassName('slide-page');
var dots = document.getElementsByClassName('inner-dot');
var slideshowInterval = setInterval( function (){
		slideShow();
}, 4000);

function slideShow(n){
	if (typeof n !== 'undefined'){   
		slides[currentSlide].style.display = 'none';
		dots[currentSlide].style.background = '#bdbdbd';
		currentSlide = n;
		slides[currentSlide].style.display = 'block';
		dots[currentSlide].style.background = '#bbdefb';
		return;
	} else {
		currentSlide += 1;
	}

	if(currentSlide >= slides.length){
		slides[currentSlide-1].style.display = 'none';
		dots[currentSlide-1].style.background = '#bdbdbd';
		currentSlide = 0;
	}

	if (currentSlide !== 0){
		slides[currentSlide - 1].style.display = 'none';
		dots[currentSlide - 1].style.background = '#bdbdbd';
	} else {
		slides[0].style.display = 'none';
	}

	slides[currentSlide].style.display = 'block';
	dots[currentSlide].style.background = '#bbdefb';
}

// set up slide show bubbles
(function (){Array.from(slides).forEach(function(element){
	var outDot = document.createElement('div');
	outDot.className += 'slide-dot';
	var inDot = document.createElement('div');
	inDot.className += 'inner-dot';
	outDot.appendChild(inDot);
	document.getElementById("dot-wrap").appendChild(outDot);
	
}), 
	dots[0].style.background = '#bbdefb';
	document.getElementById('slideshow').addEventListener('click', () => {
		slideShow();
		clearInterval(slideshowInterval);
		slideshowInterval = setInterval( function (){
			slideShow();
		}, 4000);
	});
}());

document.addEventListener('click', function(e) {
    e = e || window.event;
    var target = e.target || e.srcElement;
        //console.log(target);
}, false);

for (var i = 0; i < dots.length; i++)
{

    (function(index){
       dots[i].onclick = function(){
              slideShow(index);
        }    
    })(i);

}