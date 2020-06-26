function isAllUpper(text: string): boolean {
    var madeUpperCase = text.toUpperCase();
    if(text == madeUpperCase) {
        return true
    } else return false;
}

console.log(isAllUpper('ALL UPPER'));

//This wasn't my initial thought for solving this - I was going down a big loop/if route.
//however my friend alerted me to the function toUpperCase()
//another case of - read documentation!!
//toUpperCase() doesn't change the string, but it will supply a new string that is in upper case, so you can compare original.

function isAllUpper(text: string): boolean {
    return text == text.toUpperCase();
}

//I also learnt that if you do a comparision which returns a boolean, you can just "return comparison" as in the example above.
