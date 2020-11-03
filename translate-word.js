const emojis = require("./emojis");
const emojiArray = require('./emojis.js')

const translateWord = function(word) {
    for(let i = 0; i < emojiArray.length; i++)
        if(word.toLowerCase() === emojiArray[i].name) {
            return emojiArray[i].symbol;
    }
    return word;
}

module.exports = translateWord;