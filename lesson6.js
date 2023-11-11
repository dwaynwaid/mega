/*function decTax(grosary) {
    const tax = 0.6;

    if (typeof grosary !== 'number') {
        console.log('Grosary must be number');
        return;
    }

    if (grosary <= 0) {
        console.log('Grosary must be positive number ');
        return;
    }
    return grosary - grosary * tax;
}
*/
/*

const sum = (a, b) => {
    return a + b;
};

*/

//lesson 6

/*
const a = Number(prompt("Enter first number: "));
const b = Number(prompt("Enter second number: "));




function operations() {
    console.log(a + b);
    console.log(a - b);
    console.log(a * b);
    console.log(a / b);

}
operations(a, b);

*/

// lesson6 function => 
/*
const a = Number(prompt("Enter first number: "));
const b = Number(prompt("Enter second number: "));

const operation = (a, b) => {
    console.log(a + b);
    console.log(a - b);
    console.log(a * b);
    console.log(a / b);
}

operation(a, b);

*/

//lesson 6, task 2

const numbers1 = Number(prompt(("Enter your numbers")));

function checkNumber() {

    if (numbers1 % 2 === 0) {

        even();

    }
    else if (numbers1 % 2 !== 0) {


        odd();

    }

}
checkNumber(numbers1);

function even() {
    console.log(numbers1);
}

function odd() {
    console.log(numbers1 * 2);
}


