function popularWords(text: string, words: string[]) {
    
    var obj = {};

    var stringArray = text.toLowerCase().split(/\s/);
    
    words.forEach((word) => {
        var count = 0;
        stringArray.forEach((textWord) => {
            if(word === textWord) {
                count++             
            }
        });
        obj[word] = count;
    });
    
    console.log(JSON.stringify(obj));
    return obj;
}
