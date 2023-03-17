var mainColor = ["#FF7B54", "#FFD495", "#4ECCA3", "#D7E9B9", "#FFFBAC", "#FFCC29", "#FFD1D1", "#AAC4FF"];
var distinguishColor = ["#9D4930", "#F7A52E", "#26916E", "#B4C19F","#F7F06D", "#EDE322", "#FFE2E2", "#BDD1FE" ];
var colorIndex = 0;
var correctColor = "red";
var correctButton = "";
var userChosenButton = "";

var level = 0;

var started = false;
$(document).on("keydown", function(){
  if(!started){
    $(".level-title").text("Level " + level);
    nextColor();
    started  = true;
    $(".score").text("");
  }
});

// find user chosen color, log it to users choice, and animate it.
$(".btn").click(function() {
  if(started){
    userChosenButton = $(this).attr("id");
    
    animateClick(userChosenButton);
    checkAnswer();
  }

  });

function nextColor() {
    level++;
    $(".level-title").text("Level " + level);
    var chosenColor = mainColor[colorIndex];
    var correctColor = distinguishColor[colorIndex];
    $(".btn").css("background-color", chosenColor);
    correctButton = Math.floor(Math.random() * 36 + 1);
    $("#" + correctButton).css("background-color", correctColor);
    colorIndex ++;
  }

function checkAnswer(){
    if(userChosenButton == correctButton){
      playSound("button-correct");
      if(colorIndex < mainColor.length){
        setTimeout(function () {
          nextColor();
        }, 1000);
      } else{
        youWon();
      }

    }else {
        playSound("button-wrong");
        $("body").addClass("game-over");
        $(".score").text("Game Over, Your score: " +( level-1));
        $(".level-title").text("Press a Key to Restart");
        setTimeout(function () {
          $("body").removeClass("game-over");
        }, 200);
  
        startOver();
      }
}

function animateClick(buttonId){
  $("#" + buttonId).addClass("clicked");
  setTimeout(function(){
    $("#" + buttonId).removeClass("clicked");
  }, 200);
}

function playSound(soundName) {
  var audio = new Audio("sounds/" + soundName + ".mp3");
  audio.play();
}

function startOver() {
  level = 0;
  started = false;
  $(".btn").css("background-color", "#121212")
  colorIndex = 0;
}

function youWon(){
   playSound("win");
  $(".score").text("Congratulations!");
  $(".level-title").text("You Win!!");
  setTimeout(function(){
    $(".score").text("");
    $(".level-title").text("Press a key to start the game");
  }, 3000);
  startOver()
}