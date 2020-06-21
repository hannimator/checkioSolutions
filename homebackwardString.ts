//my solution:

function backwardString(value: string): string {
    return value.split('').reverse().join('');
}

console.log(backwardString('val'));


//looks like most solutions follow this pattern, but I have seen a few like this:

//return [...value].reverse().join('');

//waht is [...value?]
//it is the DESTRUCTURING ASSIGNMENT
//"makes it possible to unpack values from arrays, or properties from objects, into distinct variables."
//basically does the same thing. Breaks the string in to an array of strings, so we can reverse. Then still have to join at the end!
