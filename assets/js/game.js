// Game States
// "WIN" - Player robot has defeated all enemy-robots
//      * Fight all enemy-robots
//      * Defeat each enemy
// 'LOSE" - Player robot's health is zero or less

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// function to set name
var getPlayerName = function() {
  var name = "";

  while (name === "" || name === null){
    name = prompt("What is your robot's name?");
  }
  
  console.log("Your robot's name is " + name);
  return name;
  };

/* Game Information / variables */
var playerInfo = {
  name: getPlayerName(),
}
//window.alert('Welcome to Robot Gladiators!  round ' = (i + 1));


// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;


// my code was changed to match their code b/c the prompts that the class provided were poorly written and clear as mud.  TA notified.
console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[1]);
console.log(enemyNames[2]);


// fight function (now with parameter for enemy's name)
var fightOrSkip = function () {
  // ask player if they'd like to fight or skip using fightOrSkip function
  var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

// repeat and execute as long as the enemy-robot is alive 
while (playerInfo.health > 0 && enemy.health > 0) {
  // ask player if they'd like to fight or skip using fightOrSkip function
  if (fightOrSkip()) {
    // if true, leave fight by breaking loop
    break;
  }
  var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
  
  promptFight = promptFight.toLowerCase();
  // if player picks "skip" confirm and then stop the loop
  if (promptFight === "skip") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

   // if yes (true), leave fight
   if (confirmSkip) {
    window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
    // subtract money from playerMoney for skipping, but don't let them go into the negative
    playerInfo.money = Math.max(0, playerInfo.money - 10);

    // return true if player wants to leave
    return true;
  }
      shop();
    }
  }
  return false;
}
var fight = function(enemy) {
  // keep track of who goes first
  var isPlayerTurn = true;

  // randomly change turn order
  if (Math.random() > 0.5) {
    isPlayerTurn = false;
  }

  while (playerInfo.health > 0 && enemy.health > 0) {
    if (isPlayerTurn) {
      // ask player if they'd like to fight or skip using fightOrSkip function
      if (fightOrSkip()) {
        // if true, leave fight by breaking loop
        break;
      }

      var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

      // remove enemy's health by subtracting the amount we set in the damage variable
      enemy.health = Math.max(0, enemy.health - damage);
      console.log(
        playerInfo.name +
          " attacked " +
          enemy.name +
          ". " +
          enemy.name +
          " now has " +
          enemy.health +
          " health remaining."
      );

      // check enemy's health
      if (enemy.health <= 0) {
        window.alert(enemy.name + " has died!");

        // award player money for winning
        playerInfo.money = playerInfo.money + 20;

        // leave while() loop since enemy is dead
        break;
      } else {
        window.alert(enemy.name + " still has " + enemy.health + " health left.");
      }
      // player gets attacked first
    } else {
      var damage = randomNumber(enemy.attack - 3, enemy.attack);

      // remove player's health by subtracting the amount we set in the damage variable
      playerInfo.health = Math.max(0, playerInfo.health - damage);
      console.log(
        enemy.name +
          " attacked " +
          playerInfo.name +
          ". " +
          playerInfo.name +
          " now has " +
          playerInfo.health +
          " health remaining."
      );

      // check player's health
      if (playerInfo.health <= 0) {
        window.alert(playerInfo.name + " has died!");
        // leave while() loop if player is dead
        break;
      } else {
        window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
      }
    }
    // switch turn order for next round
    isPlayerTurn = !isPlayerTurn;
  }
};

// fight each enemy-robot by looping over them and fighting them one at a time
// function to start a new game
var startGame = function() {
  // reset player stats //
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;

    
  for (var i = 0; i < enemyNames.length; i++) {
  // if player is still alive, keep fighting
  if (playerHealth > 0) {
    // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
    window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));

    // pick new enemy to fight based on the index of the enemyNames array
    var pickedEnemyName = enemyNames[i];

    // function to generate a random numeric value
    var randomNumber = function() {
      var value = Math.floor(Math.random() * (21)) + 40;
  
      // reset enemyHealth before starting new fight
      enemyHealth = randomNumber(40, 60);

      return value;
    };


    // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
    fight(pickedEnemyName);
  }
  // if player is still alive and we're not at the last enemy in the array
  if (playerHealth > 0 && i < enemyNames.length -1) {
    // ask if player wants to use the store before next round
    var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
    
    // if yes, take them to the store() function
    if (storeConfirm) {
      shop();
    }
    else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
  }

// after loop ends, we are either out of playerHealth or enemies to fight, so run the endGame function
endGame();
};

// function to end the entire game
var endGame = function() {  // if player is still alive, player wins!
  if (playerHealth > 0) {
  window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
}
  else {
    window.alert("You've lost your robot in battle.");
  }
};
// ask player if they'd like to play again
var playAgainConfirm = window.confirm("Would you like to play again?");
  if (playAgainConfirm) {
    // restart the game
    startGame();
  }
  else {
    window.alert("Thank you for playing Robot Gladiators! come back soon!");
  }
};

var shop = function() {
  // ask player what they'd like to do
  var shopOptionPrompt = window.prompt(
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
  );

  // use switch to carry out action
  switch (shopOptionPropmt) {
    case "Refill": // new case
    case "refill":
      if (playerMoney >= 7) {
          window.alert("Refilling player's health by 20 for 7 dollars.");

        // increase health and decreate money
        playerHealth = playerHealth + 20;
        playerMoney = playerMoney - 7;
      
      } else {
        window.alert("You don't have enough money!");
      }
      break;
    
    case "UPGRADE": // new case
    case "upgrade":
      if (playerMoney >= 7) {  
    window. alert("Upgrading player's attack by 6 for 7 dollars.");

      // increase attack and decrease money
      playerAttack = playerAttack + 6;
      playerMoney = playerMoney - 7;
      
      } else {
        window.alert("You don't have enough money!");
      }
      break;

    case "LEAVE": // new case 
    case "leave":
      window.alert("Leaving the store.");

      // do nothing, so function will end
      break;
    
    default:
      window.alert("You did not pick a valid option. Try again.");

      // call shop() again to force player to pick a valid option
      shop();
      break;
  }
};

startGame(); 