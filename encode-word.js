const emoji = require('./emojis.js')

const encodeWord = function(word) {
    let newStr = '';
    // let repeatChecker = false;
    for(let i = 0; i < word.length; i++) {
        for(let j = 0; j < emoji.length; j++) {
            if(word[i].toLowerCase() === emoji[j].letter) {
                newStr += emoji[j].symbol;
                }
            // if((word[i].toLowerCase() !== emoji[j].letter) && repeatChecker == false) {
            //     newStr += word[i];
            //     repeatChecker = true;
            //     }   
            // }
        }
    }
    return newStr;
}

module.exports = encodeWord;
