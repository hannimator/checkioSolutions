function endZeros(value: number): number {
    var str = value.toString();
    console.log(str);
    var counter = 0;
    for(var i = str.length - 1; i >= 0; i--) {
        if (str[i] == "0") {
            counter++;  
        } else break; 
    }
    return counter;
}

console.log(endZeros(100100));

//don't forget to break when you finish counting the initial 0's...
