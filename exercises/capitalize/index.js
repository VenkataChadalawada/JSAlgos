// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

/*function capitalize(str) {
    let words = str.split(" ");
    // console.log(words);
    let newWords = [];
    // words.map((word)=>{
    for(let s of words){
        let firstLetter = s[0].toUpperCase();
        // console.log(firstLetter);
        let remaining = s.slice(1);
        // console.log(firstLetter+remaining);
        newWords.push(firstLetter+remaining);
    };
    console.log(newWords);
    return newWords.join(" ");
} */

function capitalize(str){
    let result = str[0].toUpperCase();
    for (let i=1;i<str.length;i++){
        if(str[i-1]===' ')
        {
            result+= str[i].toUpperCase();
        } else{
            result+=str[i];
        }
    }
    console.log(result);
    return result;
}
module.exports = capitalize;
