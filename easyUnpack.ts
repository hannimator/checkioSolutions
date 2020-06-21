function easyUnpack(values: any[]): any[] {

// This was my original solution:

/*    const newArray = [];
    newArray.push(values[0], values[2], values[values.length - 2]);
    return newArray;*/
    
// Final solution - a lot more concise. Don't need to declare a new variable.
    
    return [values[0], values[2], values[values.length - 2]];
}

