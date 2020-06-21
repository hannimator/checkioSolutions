//my initial solving:

function isAcceptablePassword(password: string): boolean {
    if(password.length <= 6) {
        return false;    
    } else {
        return true;
    }
}

// however after checking solutions...
// because the result of a logical operator is a boolean!! this would also work, and is much nicer to read...

// return password.length > 6

console.log(isAcceptablePassword('short'));
