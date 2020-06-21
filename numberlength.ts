function numberLength(value: number): number {
    return value.toString().length;
}

console.log(numberLength(10));

//other solution 

//return String(value).length;

//what is the difference? Very little
//value.toString() will cause an error if value is null. String(value) should not. Like that you would want an undefined or null value to error.
