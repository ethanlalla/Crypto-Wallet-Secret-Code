var secretArray = document.getElementsByClassName("wrd");
var secretArray = [ 'tattoo, camera, picture, blanket, pillow, brown, phone, wallpaper, canvas, bed, marker, battery, tape, plush, keyboard, paper, knob, santa, orange, drawing, polaroid, comfort, shoe, hanger' ];
 
var secretArray = document.querySelectorAll('li.wrd');


for (var i = 0; i < secretArray.length; i++){
secretArray[i].className = "wrd";
}