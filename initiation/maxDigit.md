
I've solved this twice now.

I decided to go back and redo the solution to see if I could do it in less lines. It's interesting going back to the old code because I think I've learned quite a bit.

The first solution does make sense, but I wasn't aware of all the functionality with Math or strings or arrays.



## OLD SOLUTION

```
function maxDigit(value: number): number {
    var newVal = value.toString();
    if(newVal.length == 1) {
        return value    
    } else {
        var biggestNumber = "0";
        for(var i = 0; i <= newVal.length-1; i++) {
            if(newVal[i] > biggestNumber) {
                biggestNumber = newVal[i]
            }
        }
        return parseInt(biggestNumber);
    }
}
```

## NEW SOLUTION

```
function maxDigit(value: number): number {
    var num = value.toString().split('').map(Number);
    var maxNum = Math.max(...num);
    return maxNum
}
```

## SLIGHTLY BETTER NEW SOLUTION

```
function maxDigit(value: number): number {
    return Math.max(...value.toString().split('').map(Number))
}
```

## ARROW FUNCTION NEW SOLUTION

> note: this doesn't work when running "Check Solution" in checkio. But it works against the asserts. Suspect something in checkio doesn't like arrow functions.

```
let maxDigit = (value: number): number => Math.max(...value.toString().split('').map(Number));
```

## THE CHANGES

In both solutions, we still need to change the number to a string or array so that we can iterate through and find the max digit. 

In the first solution I overcomplicated things, mainly by not knowing the `Math.max` function. The logic still checks out mind - if the length of the string is 1 then that is
the max digit (it's the only one!). I then create a variable to store the "biggest found digit so far" in `biggestNumber` and in the for loop compare to that until the end.
And then return the largest digit found (after converting from string back to number).

The second solution is essentially the same, but using javscript methods instead. We convert the `value` argument to a string, then split it and convert to an array using `map`.
`map` creates the array using the argument provided - so here it is converting each char in the string (because we split at '') to a number and creating an array. We then use
`Math.max` on the array using a spread operator `...num` and return the max.

The slightly better solution just condenses the second solution in to one line. And likewise, the arrow function was just an extra test to see if I could convert it. 
**Note to self - don't forget the return type** 

