//const and new const

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(`Give me a number between 1-10: `, function(number){
    console.log(multiplyByTwo(number));
    //console.log(`${number}`);
    rl.close();
});

function multiplyByTwo(number) {
    console.log(`inside my multiplier function the num is ${number}`);
    let response = "";
    if (number >= 10) {
        response = "Number is too large!! Choose a number less than 10!"
    }
    if (number <= 1) {
        response = "Number is too small!! Choose a number larger than 0!"
    }
    if (number < 10 && number > 1) {
        response =  number * 2;
    }
    return response;
}

// //let and reset variable

// let readline = require('readline');

// readline = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// readline.question(`What's your name? `, function(name){
//     console.log(`Hi ${name}!`);
//     readline.close();
// });

//chaining

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// readline.question(`What's your name? `, function(name){
//     console.log(`Hi ${name}!`);
//     readline.close();
// });