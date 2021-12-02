// Game States
// "WIN" - Player robot has defeated all enemy-robots
//      * Fight all enemy-robots
//      * Defeat each enemy
// 'LOSE" - Player robot's health is zero or less

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames[0]);
console.log(enemyNames[1]);
console.log(enemyNames[2]);
console.log(enemyNames.length);
for(var i = 0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index");
}

var fight = function(enemyName) {
    // Alert players that they are starting the round --> fight function statements
    window.alert("Welcome to Robot Gladiators!");
};
var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle?  Enter 'FIGHT' or 'SKIP' to choose.");
fight();

// if player chooses to fight, then fight
if (promptFight === "fight" || promptFight === "Fight" || promptFight === "FIGHT") {

// Subtract the value of 'playerAttack' from the value of 'enemyHealth and use that result to update the value in the 'enemyHealth' variable
enemyHealth = enemyHealth - playerAttack;

// Log a resulting message to the console so that we know it worked
console.log(playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
);

// check enemy's health
if (enemyHealth <= 0) {
    window.alert(enemyNames + " has died!");
}
else {
    window.alert(enemyNames + " still has " + enemyHealth + " health left.");
}

// Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable.
playerHealth = playerHealth - enemyAttack;

//check player's health
if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
}
else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
}

// Log a resulting message to the console so that we know it worked
console.log(
    enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
);}

// if player chooses to skip
else if (promptFight === "skip" || promptFight === "Skip" || promptFight === "SKIP") {
    window.alert(playerName + " has chosen to skip the fight!");

    // confirm player wants to skip
    var confrimSkip = window.confirm("Are you sure you'd like to quit?");

    //if yes (true), leave fight
    if (confrimSkip) {
        window.alert(playerName + " has decided to skip this fight.  Goodbye!");

        // subtract money from playerMoney for skipping
        playerMoney = playerMoney -2;
    }

    // if no (false), ask question again by running fight () again
    else {
for(var i = 0; i < enemyNames.length; i++); {
    fight(enemyNames[i]);
    } 
}
}
    else {
    window.alert("You need to choose a valid option. Try again!");
}