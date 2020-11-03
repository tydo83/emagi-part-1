const encodeWord = require('./encode-word.js');


describe('encodeWord', () => {
    it('gives back the emoji version of each letter in the given word', () => {
        const word1 = 'help';
        const word2 = 'hello';
        const word3 = 'please';
        const expectedWord1 = '💜🐘🐞💩'
        const expectedWord2 = '💜🐘🐞🐞🐙'
        const expectedWord3 = '💩🐞🐘👽💀🐘'

        expect(encodeWord(word1)).toBe(expectedWord1);
        expect(encodeWord(word2)).toBe(expectedWord2);
        expect(encodeWord(word3)).toBe(expectedWord3);
    })

    it('leaves non-letters untouched', () => {
        const word1 = 'help!';
        const word2 = 'r2d2';
        const word3 = 'colin.jaffe@codeimmersives.com';
        const expectedWord1 = '💜🐘🐞💩!'
        const expectedWord2 = '🤖2🍩2'
        const expectedWord3 = '🌵🐙🐞🍦📰.🤹👽🍟🍟🐘@🌵🐙🍩🐘🍦🍄🍄🐘🤖💀🍦🌋🐘💀.🌵🐙🍄'

        expect(encodeWord(word1)).toBe(expectedWord1);
        expect(encodeWord(word2)).toBe(expectedWord2);
        expect(encodeWord(word3)).toBe(expectedWord3);
    })

    it('is case-insensitive', () => {
        const word1 = 'Colin';
        const word2 = 'YELLS';
        const word3 = 'atAnthonyDeRosa';
        const expectedWord1 = '🌵🐙🐞🍦📰'
        const expectedWord2 = '☯🐘🐞🐞💀'
        const expectedWord3 = '👽👅👽📰👅💜🐙📰☯🍩🐘🤖🐙💀👽'

        expect(encodeWord(word1)).toBe(expectedWord1);
        expect(encodeWord(word2)).toBe(expectedWord2);
        expect(encodeWord(word3)).toBe(expectedWord3);
    })
})
