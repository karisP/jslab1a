//Declare Variables
let grantHealth = 10;
let userHealth = 40;
let userWins = 0;
let play = prompt("Would you like to battle in a game for glory?");

//While Loop
if (play === "yes") {
    let userName = prompt("Enter your username");
    while (play) {
        userHealth -= Math.floor(Math.random() * 2) + 1;
        console.log(`${userName} has ${userHealth} health left.`);
        grantHealth -= Math.floor(Math.random() * 2) + 1;
        console.log(`Grant the Almighty Chicken has ${grantHealth} health left.`);
        if (grantHealth <= 0) {
            userWins += 1;
            grantHealth = 10;
        }
        if (userHealth <= 0) {
            console.log("You have died and brought shame upon your ancestors!!!");
            break;
        }
        if (userWins === 3) {
            console.log(`${userName} has overcome Grant the Almighty in a glorious battle!!`)
            break;
        }
    }
}
