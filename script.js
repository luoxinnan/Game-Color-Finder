var mainColor = ["#007965", "#F58634", "#FFCC29", "#0F4C75", "#FF7B54", "#4ECCA3"];

var level = 0;

var started = false;
$(document).on("keydown", function(){
  if(!started){
    $("h1").text("Level " + level);
    nextColor();
    started  = true;
  }
});

function nextColor() {
    level++;
    $(".level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 6);
    var randomChosenColour = mainColor[randomNumber];
  
    $(".btn").css("background-color", randomChosenColour);
    // playSound
  }

  



