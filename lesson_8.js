const sum = (...args) => {
    for (let i = 0; i < args.length; i++) {
        if (typeof args[i] === 'number') {
            const rrr = sum[i];
            console.log(rrr);
        }
        else {
            console.log('All elements must be numbers!');
            return;
        }

    }
};

sum(1);