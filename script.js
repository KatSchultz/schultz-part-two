/*
1. prompt user for name.
2. prompt user if they want to play 3 or 6 holes
3. prompt 3 or 6 times (based on previous input) for number of putts on that hole
    -modify prompt with each ask
4. keep track of cumulative score.
5. compare score to total course par
6. log final message to console
*/

let playerName = prompt("Welcome to GC mini golf! What is your name?");
let rounds = Number(prompt(`Hi, ${playerName}! Would you like to play 3 or 6 holes?`));


let score = 0;
for (let i = 0; i < rounds; i++) {
    let holeScore = Number(prompt("How many puts for hole " + (i + 1) + " ? (par 3)"));
    score += holeScore
}
console.log(score)

let par;

if (rounds === 3) {
    par = 9;
    if (score < 9) {
        console.log(`Great job, ${playerName}! Your total par was: -` + (par - score) + `.`);
    } else if (score === 9) {
        console.log(`Good game, ${playerName}. Your total par was: 0.`);
    } else {
        console.log(`Nice try, ${playerName}... Your total par was: +` + (score - par) + `.`);
    }
} else {
    par = 18;
    if (score < 18) {
        console.log(`Great job, ${playerName}! Your total par was: -` + (par - score) + `.`);
    } else if (score === 18) {
        console.log(`Good game, ${playerName}. Your total par was: 0.`);
    } else {
        console.log(`Nice try, ${playerName}... Your total par was: +` + (score - par) + `.`);
    }
}