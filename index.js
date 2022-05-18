// To make the buttons register the click
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var ofbuttoninnerHTML = this.innerHTML;
    playAudio(ofbuttoninnerHTML);
    buttonAnimation(ofbuttoninnerHTML);
  });
}

// To make the website register keyboard clicks of the keys

document.addEventListener("keydown",function (event){
    playAudio(event.key);
    buttonAnimation(event.key);
});



// Function for playing the audio
function playAudio (innerHTMLKeyPressed){
  switch (innerHTMLKeyPressed) {
    case "w":
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
    case "a":
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;
    case "s":
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;
    case "d":
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;
    case "j":
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;
    case "k":
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;
    case "l":
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;

    default:
      console.log(innerHTMLKeyPressed);

  }

}

// Function for animation
function buttonAnimation(keyPressed){
  document.querySelector("." + keyPressed).classList.add("pressed")

  setTimeout(function(){
    document.querySelector("." + keyPressed).classList.remove('pressed');
  },100);
}
