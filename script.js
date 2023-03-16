var mainColor = ["#007965", "#F58634", "#FFCC29", "#0F4C75", "#FF7B54", "#4ECCA3"];
var correctColor = "red";
var correctButton = "";
var userChosenButton = "";

var level = 0;

var started = false;
$(document).on("keydown", function(){
  if(!started){
    $("h1").text("Level " + level);
    nextColor();
    started  = true;
  }
});

// find user chosen color, log it to users choice, and animate it.
$(".btn").click(function() {
    userChosenButton = $(this).attr("id");
    // play sound
    // animate button
    checkAnswer();
  });

function nextColor() {
    level++;
    $(".level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 6);
    var randomChosenColor = mainColor[randomNumber];
    $(".btn").css("background-color", randomChosenColor);
    correctButton = Math.floor(Math.random() * 36);
    $("#" + correctButton).css("background-color", correctColor);
    
    // playSound
  }

function checkAnswer(){
    if(userChosenButton == correctButton){
        alert("right");
    }else {
        // play sound
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press a Key to Restart");
        // display the level and record.
        setTimeout(function () {
          $("body").removeClass("game-over");
        }, 200);
  
        // start over
      }
}



