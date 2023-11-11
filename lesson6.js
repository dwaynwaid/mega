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

const a = Number(prompt("Enter first number: "));
const b = Number(prompt("Enter second number: "));

typeof a;
typeof b;


function operations() {
    console.log(a + b);
    console.log(a - b);
    console.log(a * b);
    console.log(a / b);

}
operations(a, b);

