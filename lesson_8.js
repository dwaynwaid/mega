
const sum = (...args) => {
    let suma = 0;
    for (let i = 0; i < args.length; i++) {
        if (typeof args[i] !== 'number') {
            console.log('All elements must be numbers!');
            return;
        }
        else {

            suma += args[i];
        }

    }
    console.log(suma);
};

sum(1, 2, 5);
sum('sdfsdfsdf sd fsd ');