const getCategory = require('./get-category.js');


describe('getCategory', () => {
    it('returns an array of emojis that match a category word', () => {
        const word1 = 'plant';
        const word2 = 'weather';
        const emojis1 = [
            {
                symbol:'🌵',
                letter: 'c',
                name: 'cactus',
                categories: [
                    'plant'
                ],
            },
            {
                symbol: '🎄',
                name: 'christmas',
                categories: [
                    'holiday',
                    'plant',
                ],
            },
        ]

        const emojis2 = [
            {
                symbol: '🌧',
                name: 'rain',
                categories: [
                    'weather',
                ],
            },
            {
                symbol: '🌨',
                name: 'snow',
                categories: [
                    'weather',
                ],
            },
            {
                symbol: '🌩',
                name: 'thunderstorm',
                categories: [
                    'weather',
                ],
            },
            {
                symbol: '🌞',
                name: 'sun',
                categories: [
                    'weather',
                    'face',
                ],
            },
            {
                symbol: '🌪',
                name: 'tornado',
                categories: [
                    'weather',
                ],
            },
        ]

        expect(getCategory(word1)).toEqual(emojis1)
        expect(getCategory(word2)).toEqual(emojis2)
    })

    it('returns an empty array if no matching emojis are found', () => {
        const word1 = 'building';
        const word2 = 'colin';
        const emojis1 = [];
        const emojis2 = [];

        expect(getCategory(word1)).toEqual(emojis1)
        expect(getCategory(word2)).toEqual(emojis2)
    })
})
