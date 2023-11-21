/*
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

*/


/*

const obj = {
    id: 1,
    name: "Tester Testowy",
    pwdHash: 'dfdfsdfsdjflksdhgsdhgslgsfdmgvsngeioongdfgn',
    isAdmin: true,
    hasAvatar: true,
};

function filter(obj) {
    const { id, name, hasAvatar } = obj;

    const safeObj = {
        id, name, hasAvatar
    };

    return safeObj;
}

console.log(filter(obj));

*/

const name = 'Smbd Test';
const age = 35;
const role = 'Admin';

const info = `${name} has a role of  ${role} and is born in year' ${(new Date().getFullYear() - age)}`;
console.log(info);