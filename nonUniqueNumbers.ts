function nonUniqueElements(data: number[]): number[] {
    var tempArray = [];
    for(var i = 0; i < data.length; i++) {
        if (data.lastIndexOf(data[i]) !== data.indexOf(data[i])) {
            tempArray.push(data[i]);
        }
    }
    return tempArray;
}
