// Create a "close" button and append it to each list item
      var myNodelist = document.getElementsByTagName("LI");
      var i;
      for (i = 0; i < myNodelist.length; i++) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("×");
        span.className = "close";
        span.appendChild(txt);
        myNodelist[i].appendChild(span);
      }

      // Click on a close button to hide the current list item
      var close = document.getElementsByClassName("close");
      var i;
      for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
        }
      }

      // Add a "checked" symbol when clicking on a list item
      var list = document.querySelector('ul');
      list.addEventListener('click', function(ev) {
        if (ev.target.tagName === 'LI') {
          ev.target.classList.toggle('checked');
        }
      }, false);

      // Create a new list item when clicking on the "Add" button
      function newElement() {
        var li = document.createElement("li");
        var inputValue = document.getElementById("myInput").value;
        var t = document.createTextNode(inputValue);
        li.appendChild(t);
        if (inputValue === '') {
          alert("You must write something!");
        }
        else {
          document.getElementById("myUL").appendChild(li);
        }
        document.getElementById("myInput").value = "";

        var span = document.createElement("SPAN");
        var txt = document.createTextNode("×");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);

        for (i = 0; i < close.length; i++) {
          close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
          }
        }
      }
      
  // Carousel Code
  
var carouselSlide = document.querySelector(".holder");
var carouselImages = document.querySelectorAll(".holder img"); 
var nextBtn = document.getElementById("nextBtn");
var prevBtn = document.getElementById("prevBtn");
var counter = 1;
var myInterval;
var playPause = document.getElementById("playPause");

// start of slideshow:

carouselSlide.style.transform = "translateX(" + (counter * -20) + "%)";

// functions:

function slideRight(){
  carouselSlide.style.transition = "transform 0.4s ease-in-out"; 
	counter++;
	carouselSlide.style.transform = "translateX(" + (counter * -20) + "%)";
}

function slideLeft(){
  carouselSlide.style.transition = "transform 0.4s ease-in-out"; 
	counter--;
	carouselSlide.style.transform = "translateX(" + (counter * -20) + "%"  
}
// button navigation:

nextBtn.addEventListener("click", function(){
	if(counter >= carouselImages.length -1) return; 
  slideRight();
});


prevBtn.addEventListener("click", function(){
	if(counter <=0) return; 
  slideLeft();
});

// transitions:

carouselSlide.addEventListener("transitionend", function(){
  if(counter === 4){ // (total number of slides -1)
  	carouselSlide.style.transition = "none"; 
  	counter = 1;
  	carouselSlide.style.transform = "translateX(" + (counter * -20) + "%";
  }

  if(counter === 0){
  	carouselSlide.style.transition = "none"; 
  	counter = 3; // (total number of slides - 2)
  	carouselSlide.style.transform = "translateX(" + (counter * -20) + "%";
  }
});

// play-pause button functionality:

   function myFunction() { 
        if(counter >= carouselImages.length -1) return; 
     slideRight();
      };

    playPause.addEventListener("change", function(){
        if(this.checked != true){
          myInterval=setInterval(myFunction, 3000);
        } else 
          clearInterval(myInterval);
        
});

// arrow-key navigation:

document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
            if(counter <=0) return; 
        slideLeft();
            break;
        case 39:
            if(counter > 3) return;
        slideRight();
            break;
    }
};