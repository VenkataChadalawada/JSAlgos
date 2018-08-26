// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

/* Way 1 - reversing the string & comparing
function palindrome(str) {
    let arr = str.split('');
    let rev = arr.reduce((reversed, char)=>{
        return char+reversed;
    },'');
    // return (str === rev) ?  true: false;
    // or
    return (str === rev)
}
*/

/* Way 2 - comparing mirror element position i with length-(i+1) */
//every runs on each element of array fails if 1 fails & stops executing

function palindrome(str){
    let arr = str.split('');
    return arr.every((char, i)=>{
        return char === str[str.length - i -1];
    });
}


module.exports = palindrome;
