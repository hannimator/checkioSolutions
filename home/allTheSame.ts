//my solution:

function allTheSame(elements: any[]): boolean {
    
    if (elements.length <= 1) {
        return true; 
    } else {
        var counter = 0
        for(var i = 1; i <= elements.length - 1; i ++) {
            if(elements[i] != elements[i-1]) {
                return false
            } else return true;
        }
    }
}

console.log(allTheSame([1, 1, 1]))


//one liner:
 // return e.every(a => a == e[0]);
 
 // from w3schools:
// .every() checks if all methods in an array pass a test
//The every() method executes the function once for each element present in the array:
//If it finds an array element where the function returns a false value, every() returns false (and does not check the remaining values)
//If no false occur, every() returns true

//so this line is comparing every item in the array to index 1. With a starting as "current value".
