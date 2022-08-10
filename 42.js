// Wouldn't this suffice for this repo? What's the rest of the files for?

const fizzBuzz = (num) => {
    let msg = '';
    if (num % 3 === 0) msg += 'Fizz';
    if (num % 5 === 0) msg += 'Buzz';
    if (msg === '') msg = num;
    window.alert(msg);
}
