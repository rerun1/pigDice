// Business logic for dice
var roll = 0;
var turnTotal = 0;
var rolls = [];


function rollDie() {
  Math.ceil(1);
  Math.floor(6);
  return Math.floor(Math.random() * (6 - 1 + 1)) + 1;
}

$(document).ready(function(){

  $("button#rollDie").click(function(){
    var roll = rollDie();
    $("div#show-3D").hide();
    if (roll === 1){
      $("div#showRoll").html('<svg viewBox="0 0 64 64" class="svgDice"><path class="svgFill" d="M57,4H7A3,3,0,0,0,4,7V57a3,3,0,0,0,3,3H57a3,3,0,0,0,3-3V7A3,3,0,0,0,57,4Zm1,53a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V7A1,1,0,0,1,7,6H57a1,1,0,0,1,1,1Z"/><circle class="svgFill" cx="32" cy="32" r="5.29"/></svg>');
      
    } else if (roll === 2){
      $("div#showRoll").html('<svg viewBox="0 0 64 64" class="svgDice"><path class="svgFill" d="M57,4H7A3,3,0,0,0,4,7V57a3,3,0,0,0,3,3H57a3,3,0,0,0,3-3V7A3,3,0,0,0,57,4Zm1,53a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V7A1,1,0,0,1,7,6H57a1,1,0,0,1,1,1Z"/><circle class="svgFill" cx="42.25" cy="46.29" r="5.29"/><circle class="svgFill" cx="21.75" cy="17.71" r="5.29"/></svg>');
    } else if (roll === 3) {
      $("div#showRoll").html('<svg viewBox="0 0 64 64" class="svgDice"><path class="svgFill" d="M57,4H7A3,3,0,0,0,4,7V57a3,3,0,0,0,3,3H57a3,3,0,0,0,3-3V7A3,3,0,0,0,57,4Zm1,53a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V7A1,1,0,0,1,7,6H57a1,1,0,0,1,1,1Z"/><circle class="svgFill" cx="42.48" cy="47.29" r="5.29"/><circle class="svgFill" cx="21.97" cy="16.71" r="5.29"/><circle class="svgFill" cx="32.22" cy="32" r="5.29"/></svg>');
    } else if (roll === 4) {
      $("div#showRoll").html('<svg viewBox="0 0 64 64" class="svgDice"><path d="M57,4H7A3,3,0,0,0,4,7V57a3,3,0,0,0,3,3H57a3,3,0,0,0,3-3V7A3,3,0,0,0,57,4Zm1,53a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V7A1,1,0,0,1,7,6H57a1,1,0,0,1,1,1Z"/><circle cx="42.2" cy="16.71" r="5.29"/><circle cx="42.2" cy="47.29" r="5.29"/><circle cx="21.8" cy="16.71" r="5.29"/><circle cx="21.8" cy="47.29" r="5.29"/></svg>');
    } else if (roll === 5) {
      $("div#showRoll").html('<svg viewBox="0 0 64 64" class="svgDice"><path class="svgFill" d="M57,4H7A3,3,0,0,0,4,7V57a3,3,0,0,0,3,3H57a3,3,0,0,0,3-3V7A3,3,0,0,0,57,4Zm1,53a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V7A1,1,0,0,1,7,6H57a1,1,0,0,1,1,1Z"/><circle class="svgFill" cx="42.25" cy="16.71" r="5.29"/><circle class="svgFill" cx="42.25" cy="47.29" r="5.29"/><circle class="svgFill" cx="21.75" cy="16.71" r="5.29"/><circle class="svgFill" cx="32" cy="32" r="5.29"/><circle class="svgFill" cx="21.75" cy="47.29" r="5.29"/></svg>');
    } else if (roll === 6) {
      $("div#showRoll").html('<svg viewBox="0 0 64 64" class="svgDice"><path class="svgFill" d="M57,4H7A3,3,0,0,0,4,7V57a3,3,0,0,0,3,3H57a3,3,0,0,0,3-3V7A3,3,0,0,0,57,4Zm1,53a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V7A1,1,0,0,1,7,6H57a1,1,0,0,1,1,1Z"/><circle class="svgFill" cx="42.2" cy="16.71" r="5.29"/><circle cx="42.2" cy="32" r="5.29"/><circle class="svgFill" cx="42.2" cy="47.29" r="5.29"/><circle class="svgFill" cx="21.8" cy="16.71" r="5.29"/><circle cx="21.8" cy="32" r="5.29"/><circle class="svgFill" cx="21.8" cy="47.29" r="5.29"/></svg>');
    }
    rolls.push(roll);
    turnTotal += roll;
    $("div#displayTurnTotal").html(turnTotal);
  });
  console.log(rolls);
});
