function betweenMarkers(text: string, begin: string, end: string): string {
    
    //edge case of neither begin or end in string
    if(!text.includes(begin) && !text.includes(end)) {
        return text;   
    }
    
    //edge case of end before begin
    if(text.indexOf(begin) > text.indexOf(end) && text.includes(begin) && text.includes(end)) {
        return "";
    }
    
    //if no begin maker
    if(!text.includes(begin)) {
        text = text.slice(0, text.indexOf(end));
        return text
    }
    
    //if no end marker
    if(!text.includes(end)) {
        text = text.slice(text.indexOf(begin) + begin.length);
        return text
    }
    
    //basic
    text = text.slice(text.indexOf(begin) + begin.length, text.indexOf(end));
    
    return text;
}
