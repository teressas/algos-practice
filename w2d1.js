function d6() {
    var roll = Math.floor(Math.random() * 6);
    console.log(roll)
    return roll;
}
    
var playerRoll = d6();
console.log("The player rolled: " + playerRoll);

// CONSULT THE ORACLE
var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

function answers(array){
    var index = Math.floor(Math.random() * array.length-1);
    return array[index];
}

console.log(answers(lifesAnswers))