//sort by extension:
//edge cases
//- files named ".config" or "config." do not have an extension and must be sorted by name
//- files named "aaa.bbb.xls" have extension .xls


function sortByExt(files: string[]): string[] {  
    //using the sort function
    files.sort((a, b) => {
        //splitting the string by "." and returning new array
        const aParts = a.split(".");
        const bParts = b.split(".");
        //checking first edge case
        if(a.lastIndexOf(".") === 0 || a.lastIndexOf(".") === a.length - 1) {
            if(b.lastIndexOf(".") === 0 || b.lastIndexOf(".") === b.length - 1) {
                return a < b ? -1 : 1;
            }
            return -1;
        }
        
        //checking first edge case for b which would be missed above if the if statement is not fulfilled                    
        if(b.lastIndexOf(".") === 0 || b.lastIndexOf(".") === b.length - 1) {
            return 1;
        }
        
        //if a is less than b, a goes in front
        if (aParts[aParts.length - 1] < bParts[bParts.length - 1]) {
          return -1;
        }
        
        //if a is greater than be, be goes in front
        if (aParts[aParts.length - 1] > bParts[bParts.length - 1]) {
            return 1;
        }
        // a must be equal to b
        return 0;
    })

    return files;
}
