// Wouldn't this suffice for this repo? What's the rest of the files for?

try {
    
    const fizzBuzz = (num) => {
        let msg = '';
        if (num % 3 === 0) msg += 'Fizz';
        if (num % 5 === 0) msg += 'Buzz';
        if (msg === '') msg = num;
        window.alert(msg);
    };
    
} catch (err) {
    
    // Legacy shorthand (efficient but not proper)
    if (!fizzBuzz) {
        fizzBuzz = function fizzBuzz (num) {
            var msg = '';
            if (!(num % 3)) msg += 'Fizz';
            if (!(num % 5)) msg += 'Buzz';
            if (!msg) msg = num;
            window.alert(msg);
        };
    };
    
}

fizzBuzz(15);
