/*
const numbers = [1, 2, 8];
const newNumbers = numbers.map(function (number) {
    return number.toString();
});

console.log(newNumbers);
console.log(numbers);

*/
/*
const numbers = [1, 2, 8];
const newNumbers = numbers.filter((el) => {
    return true;
});

console.log(numbers);

*/

//Exersice nr1

/*
const grades = [3, 4, 5, 6, 3, 4, 2, 5, 6];
let aver = 0;
let fin = 0;

grades.forEach((num, i, array) => {

    aver += array[i];
    fin = aver / array.length;

});

console.log(fin);

*/

//Exersice nr2 
/*
const grades = [3, 4, 5, 6, 3, 4, 2, 5, 6];


const newgrades = grades.map((num) => {


    return num >= 4;
});
console.log(newgrades);
*/

const grades = [3, 4, 5, 6, 3, 4, 2, 5, 6];


const ggg = grades.filter((num) => {


    return num < 4;

});
console.log(ggg);

