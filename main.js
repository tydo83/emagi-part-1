const translateWord = require('./translate-word.js');
const encodeWord = require('./encode-word.js')

let words = process.argv.slice(2);

// translatedResult = words.map(translateWord).join(' ');

encodedResult = words.map(encodeWord).join(' ');
console.log(encodedResult);

