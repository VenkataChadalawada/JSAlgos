// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let obj = {};
    // "of" is for strings ; if you want to use in split the str into array & use
    for (let char of str){
        if(!obj[char]){
            obj[char] = 1;
        } else {
            obj[char]++;
        }
    }
    console.log(obj);
    // "in" is for objs & arrays 
    let max =0;
    
    for (let val in obj){
        if (obj[val] > max){
            max = val;
        }
    }
    console.log('--', max);
    return max;
}

module.exports = maxChar;
