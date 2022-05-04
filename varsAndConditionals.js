let jonSnowAttack = 25;
let = jamieLannisterAttack = 35;

if (jonSnowAttack > jamieLannisterAttack) {
    console.log("Jon Snow has better attack than Jamie Lannister");
} else if (jonSnowAttack === jamieLannisterAttack) {
    console.log("They have the same attack");
} else {
    console.log("Jamie Lanniser has better attack than Jon Snow");
}

let jonSnowHeatlh = 100;
let jonSnowDefense = 0;

if (jonSnowHeatlh <= jamieLannisterAttack) {
    console.log("Jon Snow has been slain");
} else { 
    jonSnowHeatlh -= jamieLannisterAttack;
    console.log(`Jon Snows health is now ${jonSnowHeatlh}`);
}

jonSnowDefense += 25;

if (jonSnowHeatlh <= jamieLannisterAttack - jonSnowDefense){
    console.log("Jon Snow is dead")
} else{
    jonSnowHeatlh -= jamieLannisterAttack - jonSnowDefense;
    console.log(`Jon Snow's health is down to ${jonSnowHeatlh}`);
}

if ((jonSnowHeatlh + 50) >= 100) {
    jonSnowHeatlh = 100
} else {
    jonSnowHeatlh += 50
}

let coinLandsHeads = false;

if (coinLandsHeads === true) {
    console.log("The fight continues.")
} else {
    console.log("Jon is allowed to run away.")
}

if (coinLandsHeads !== false) {
    console.log("The fight continues.")
} else {
    console.log("Jon is allowed to run away.")
}

// for(let i = 0; i < 5; i++){
//     jonSnowHeatlh -= (jamieLannisterAttack - jonSnowDefense)
//     console.log(`Jon Snow's health is ${jonSnowHeatlh}`)
// }

// for(let i = 0; i < 5; i++){
//     if (jonSnowHeatlh >= 0) {
//         console.log(`Jon Snow has been slain`)
//     } else {
//         jonSnowHeatlh -= (jamieLannisterAttack - jonSnowDefense)
//         console.log(`Jon Snow's health is ${jonSnowHeatlh}`)
//     }
// }

while(jonSnowHeatlh > 0){
    jonSnowHeatlh -= (jamieLannisterAttack - jonSnowDefense)
    console.log(`Jon Snow's health is ${jonSnowHeatlh}`)
}

while(jonSnowHeatlh > 0){
    jonSnowHeatlh -= (jamieLannisterAttack - jonSnowDefense)
    console.log(`Jon Snow's health is ${jonSnowHeatlh}`)
    if(jonSnowHeatlh <= 0){
        console.log(`Jon Snow has been slain`)
    }
}