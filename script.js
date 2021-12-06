var secretArray = document.getElementsByClassName("wrd");
var secret = ['tattoo', 'camera', 'picture', 'blanket', 'pillow', 'brown', 'phone', 'wallpaper', 'canvas', 'bed', 'marker', 'battery', 'tape', 'plush', 'keyboard', 'paper', 'knob', 'santa', 'orange', 'drawing', 'polaroid', 'comfort', 'shoe', 'hanger'];


for (var i = 0; i < secretArray.length; i++) {
  var random = Math.floor(Math.random()*24);
  secretArray[i].textContent = secret[random];
}