const translateWord = require('./translate-word.js');
const encodeWord = require('./encode-word.js')

let words = process.argv.slice(2);

// function result(words) {
//     return words.map(translateWord).join(' ');
// }

function result(words) {
    return words.map(encodeWord).join(' ');
}

console.log(result(words));

