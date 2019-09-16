// Business logic for dice
var gameTotal = 0;


function rollDie() {
  Math.ceil(1);
  Math.floor(6);
  return Math.floor(Math.random() * (6 - 1 + 1)) + 1;
}

function Turns(turnTotal){
  this.turnTotals = [],
  this.currentGameTotal = 0
}

Turns.prototype.getTotals = function() {
  var thisGameTotal = 0;
  this.turnTotals.forEach(function(total){
    thisGameTotal += total;
  });
  this.currentGameTotal = thisGameTotal;
  return this.currentGameTotal;
  alert(thisGameTotal);
}


var newTurn = new Turns();
var rollsTotal = 0;
var turnTotal = 0;


$(document).ready(function(){

  $("button#rollDie").click(function(){
    var roll = rollDie();
    console.log(roll);
    $("div#show-3D").hide();
    $("div#displayRollsTotal").show();

    if (roll === 1){
      $("div#showRoll").html('<svg viewBox="0 0 64 64" class="svgDice"><title>dice1Red</title><path class="svgFillRed" d="M57,4H7A3,3,0,0,0,4,7V57a3,3,0,0,0,3,3H57a3,3,0,0,0,3-3V7A3,3,0,0,0,57,4Zm1,53a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V7A1,1,0,0,1,7,6H57a1,1,0,0,1,1,1Z"/><circle class="svgFill" cx="32" cy="32" r="5.29"/></svg>');
      $("div#buttons").hide();

      roll = 0;
      rollsTotal = 0;
      turnTotal = 0;
      newTurn.turnTotals.push(turnTotal);

      $("div#newTurn").show();

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

    rollsTotal += roll;


    $("span.displayThisRollsTotal").html(rollsTotal);

  });

  $("button#newTurnButton").click(function(){
    $("div#show-3D").hide();
    $("div#showRoll").html('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" class="svgDice"><title>dice3D</title><path class="svgFill" d="M60,12,34.27.74,34,.64a5.08,5.08,0,0,0-.88-.33,5,5,0,0,0-2,0,2.73,2.73,0,0,0-.79.31l-.28.14L4.42,12a3.92,3.92,0,0,0-2.27,3.3v31a3.9,3.9,0,0,0,2.24,3.28L30.14,63.27l.28.14a2.76,2.76,0,0,0,.79.31,5.36,5.36,0,0,0,1,.09,3.78,3.78,0,0,0,1-.11,5.29,5.29,0,0,0,.89-.33L60,49.55a3.92,3.92,0,0,0,2.27-3.3v-31A3.92,3.92,0,0,0,60,12ZM31.62,62.78l-.22,0a1.79,1.79,0,0,1-.52-.21l-.32-.16L4.82,48.65a3,3,0,0,1-1.68-2.39V15.62h.05A.76.76,0,0,1,3.47,15a1,1,0,0,1,1,.11l25.72,13.5a3.08,3.08,0,0,1,1.47,2.57h0Zm.53-33.44a3.68,3.68,0,0,0-1.54-1.65L4.9,14.19a2.28,2.28,0,0,0-1.28-.27,3,3,0,0,1,1.19-1L30.53,1.64l.35-.17a1.79,1.79,0,0,1,.52-.21,4.17,4.17,0,0,1,.79-.07,2.93,2.93,0,0,1,.71.07,4.21,4.21,0,0,1,.74.28l26,11.35a3,3,0,0,1,1.19,1,2.27,2.27,0,0,0-1.27.27L33.79,27.69A4.25,4.25,0,0,0,32.16,29.34ZM61.27,46.25a3,3,0,0,1-1.72,2.41L33.87,62.37l-.23.1a4.28,4.28,0,0,1-.75.28l-.29,0V31.15h0a3.31,3.31,0,0,1,1.64-2.57L60,15.07a1,1,0,0,1,1-.11.76.76,0,0,1,.28.66h.05Z"/><path class="svgFill" d="M40.48,29.64a5.89,5.89,0,0,0-3.37,5c0,2,1.52,2.9,3.39,2.11a5.89,5.89,0,0,0,3.37-5C43.86,29.79,42.35,28.84,40.48,29.64Z"/><path class="svgFill" d="M54,30.47a5.89,5.89,0,0,0,3.37-5c0-2-1.52-2.9-3.39-2.11a5.89,5.89,0,0,0-3.37,5C50.61,30.32,52.13,31.27,54,30.47Z"/><path class="svgFill" d="M40.33,38.79a5.89,5.89,0,0,0-3.37,5c0,2,1.52,2.9,3.39,2.11a5.89,5.89,0,0,0,3.37-5C43.72,38.94,42.2,38,40.33,38.79Z"/><path class="svgFill" d="M53.93,39.38a5.89,5.89,0,0,0,3.37-5c0-2-1.52-2.9-3.39-2.11a5.89,5.89,0,0,0-3.37,5C50.55,39.23,52.06,40.17,53.93,39.38Z"/><path class="svgFill" d="M40.27,47.77a5.89,5.89,0,0,0-3.37,5c0,2,1.52,2.9,3.39,2.11a5.89,5.89,0,0,0,3.37-5C43.65,47.92,42.14,47,40.27,47.77Z"/><path class="svgFill" d="M54.1,41.36a5.89,5.89,0,0,0-3.37,5c0,2,1.52,2.9,3.39,2.11a5.89,5.89,0,0,0,3.37-5C57.48,41.51,56,40.56,54.1,41.36Z"/><path class="svgFill" d="M10.39,22.84a2.37,2.37,0,0,0-3.47,2.24,5.36,5.36,0,0,0,3,5,2.37,2.37,0,0,0,3.47-2.24A5.36,5.36,0,0,0,10.39,22.84Z"/><path class="svgFill" d="M24.77,29.62a2.37,2.37,0,0,0-3.47,2.24,5.36,5.36,0,0,0,3,5,2.37,2.37,0,0,0,3.47-2.24A5.36,5.36,0,0,0,24.77,29.62Z"/><path class="svgFill" d="M17.65,35.17a2.37,2.37,0,0,0-3.47,2.24,5.36,5.36,0,0,0,3,5,2.37,2.37,0,0,0,3.47-2.24A5.36,5.36,0,0,0,17.65,35.17Z"/><path class="svgFill" d="M10.08,41.05a2.37,2.37,0,0,0-3.47,2.24,5.36,5.36,0,0,0,3,5A2.37,2.37,0,0,0,13.08,46,5.36,5.36,0,0,0,10.08,41.05Z"/><path class="svgFill" class="svgFill" d="M24.76,47.75A2.37,2.37,0,0,0,21.29,50a5.36,5.36,0,0,0,3,5,2.37,2.37,0,0,0,3.47-2.24A5.36,5.36,0,0,0,24.76,47.75Z"/><ellipse class="svgFill" cx="32.26" cy="7.87" rx="4.44" ry="2.38"/><ellipse class="svgFill" cx="46.3" cy="13.95" rx="4.45" ry="2.26"/><ellipse class="svgFill" cx="18.27" cy="14.04" rx="4.27" ry="2.28"/><ellipse class="svgFill" cx="32.26" cy="20.44" rx="4.26" ry="2.28"/></svg>');
    $("div#buttons").show();
    $("div#displayTurnStatus").empty();
    $("div#newTurn").hide();
    $("span.displayThisRollsTotal").empty();
    newTurn.getTotals();
    $("span.gameTotal").html("Current game total: " + newTurn.currentGameTotal);
  });

  $("button#hold").click(function(){
    $("div#show-3D").show();
    $("div#showRoll").empty();
    $("div#buttons").hide();
    turnTotal = rollsTotal;
    newTurn.turnTotals.push(turnTotal);
    rollsTotal = 0;
    $("div#newTurn").show();
    $("div#rollOne").hide();
  });



});
