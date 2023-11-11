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

const a = Number(prompt("Enter first number: "));
const b = Number(prompt("Enter second number: "));

const operation = (a, b) => {
    console.log(a + b);
    console.log(a - b);
    console.log(a * b);
    console.log(a / b);
}

operation(a, b);

