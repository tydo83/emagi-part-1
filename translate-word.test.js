const translateWord = require('./translate-word.js');


describe('translateWord', () => {


    it('if there is no emoji for that word, returns the original word', () => {
        const word1 = 'help';
        const word2 = 'me';
        const word3 = 'please';

        expect(translateWord(word1)).toBe(word1);
        expect(translateWord(word2)).toBe(word2);
        expect(translateWord(word3)).toBe(word3);
    })

    it('gives back the emoji version of the given word', () => {
        const word1 = 'elephant';
        const word2 = 'news';
        const word3 = 'poop';
        const emoji1 = '🐘'
        const emoji2 = '📰'
        const emoji3 = '💩'

        expect(translateWord(word1)).toBe(emoji1);
        expect(translateWord(word2)).toBe(emoji2);
        expect(translateWord(word3)).toBe(emoji3);
    })

    it('is case-insensitive', () => {
        const word1 = 'Octopus';
        const word2 = 'dIe';
        const word3 = 'TONGUE';
        const emoji1 = '🐙'
        const emoji2 = '💀'
        const emoji3 = '👅'

        expect(translateWord(word1)).toBe(emoji1);
        expect(translateWord(word2)).toBe(emoji2);
        expect(translateWord(word3)).toBe(emoji3);
    })
})
