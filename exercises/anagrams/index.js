// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// Way 1
// iterating over array/string of, object in  - for loop
/*function anagrams(stringA, stringB) {
    const wordA = buildObj(stringA);
    const wordB = buildObj(stringB);
    
    if(Object.keys(wordA).length!== Object.keys(wordB).length){
        return false;
    } 
    for(let char in wordA){
        if(wordA[char]!==wordB[char]){
            return false;
        }
    }
    return true;
}

function buildObj(str){
    let word = str.replace(/[^\w]/g,"").toLowerCase()
    let obj={};
    for(let char of word){
        if(!obj[char]){
          obj[char]=1;
        } else {
          obj[char]++;
        }
    }
    return obj;
}
*/

// way 2
function anagrams(stringA, stringB){
   return cleanString(stringA) === cleanString(stringB);
}
function cleanString(str) {
    // remove punctuations , convert lowe case, sort them 
    // by splitting into letter array and join into a string
    return str.replace(/[^\w]/g,"").toLowerCase().split("").sort().join("");
}    

module.exports = anagrams;
