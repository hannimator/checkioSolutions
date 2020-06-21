function firstWord(text: string): string {


// my initial solution for this problem:
  /*  for(let i = 0; i < text.length - 1; i++) {
        if(text.charAt(i) == " ") {
            text = text.slice(0, i);    
        }
    }
    return text;*/
    
        
// after looking at some other solutions, this seems to be the way. It confused me a little bit, as I didn't quite understand what .split() does


    return text.split(' ')[0];
    
 // .split() returns an array. So, you can't just do text.split(' ', 1), as this returns an array, and because we are using TypeScript
 // we can't return an array (needs to return a string as declared above)
 // so what this is doing is creating an array of "text" (e.g ["hello", "world"], and *then* pulling out the first word from the array using [0].
 
 //here is another solution using .split():
 
 /* return text.split(' ', 1).toString();  */
 
 //here .split() is returning an array (as the specified item is within the method itself , 1 , then converting the returned array to a string.
 
}

console.log(firstWord('Hello world'));
