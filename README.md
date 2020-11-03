# Emagi Front-End - Part 1

### Translating An Untranslatable Word

Let's start by passing some tests! Create a file called `translate-word.js` and let's get started.

The first test is the simplest one, which is a GREAT place to start. It tests for whether this translate-to-emoji function, given a word that's does NOT translate to an emoji, simply returns that word. We can pass it by:

1. creating a `translateWord` function that takes in a parameter called `word`.
2. Returning that word.
3. Exporting the function so our test canrun it. Remember `module.exports`? Set that to the value of your function, i.e., the variable you stored your function in, i.e., `translateWord`.

And that easily, you should be passing one test.


### Wiring Our Simple Function To The Front End.

So right now, our function is what's known (in lingo far too fancy for what it does) as the "identity function": it returns what it's given. But we can use it to make sure our wiring is correct--wiring our dumb function to the tests, as we've already done, and now, as we're about to do, wiring it to our front end.

1) Let's create our `main.js` file. (Though you actually could name it whatever you want; `main.js` is a standard name but there's nothing magical about it! Still, we'll call the file that in our directions from here on out.) The first thing we want to do is `require` in our function. `require` is our Node-built-in function that takes in a string that's a relative path to a file and returns whatever that file `export`s. Put its return value in a variable called whatever you want (we called ours `translateWord`), and that will hold the function we made in `translate-word.js` just as if we'd made the function here.

(If you get stuck on the `require` syntax, the line is in `translate-word.test.js`, since we also need your function to use in that file in order to test it!)

2) Now let's use `process.argv` to pull in whatever the user types after `node main.js`. Index `0` is the first thing the user typed in (the path to `node`) and index `1` is the second (the path to `main.js`), so index `2` is what we want. Put that index 2 into a variable.

3) Now let's get the user some output. Pass that variable into the `translateWord` function that you pulled in from the other file, save the return value from that call into a new variable (`word`?), and console.log its value.

4) Test that it works. Go into your terminal, type `node main.js`, a space, and a word, and you should get back the word you typed.

If, however, we typed in a word that DOES translate to one of our emojis, such as "cry", we would just get the word "cry" back. Let's make our translation function actually work!


### Translating the Translatable

Jump back into `translate-word.js`. The first thing we'll need is the array from `emojis.js`. Go check out that file for a moment. I'll wait!

Each emoji in there is represented by an object. So for each emoji, there's a `categories` property that holds "tags" for the emoji, a `letter` property so we can encode the user's input letter by letter, and, most relevant to us, the `symbol` property holding the emoji's actual emoji string and the `name` property, which we'll use to look up whether their word matches an emoji.

Let's pull the file into `translate-word` by using `require` to import what `emojis.js` exports. What it exports is not a function, but an array of objects, and we'll need to go through each object, see if its `name` matches our parameter, and return the `symbol` if it does. Let's do it!

1) First, let's keep `return word` line; we'll still want to return the word if we finish looping through our array and never find a match. `cry` and `phone` should return emojis, but `Colin` or `towel` should just return `Colin` and `towel`. So the rest of our code will go **above** that line.

2) Let's loop through the `emojis` array. We can do this with an `i` loop or somethinmg more advanced, but either way, to make sure we're doing it right, let's just console.log each emoji's `symbol` property. When you run `node main.js`, you should get 80-odd emojis printed to your terminal, line by line (each `console.log` goes on a new line... we'll use that fact later!). Now, to double-check we can access our properties, let's change that printing to print each emoji's `name` property. You should see 80-odd words printed, with the last ones being `phone`, and `call`.

3) Remember how we're taking in a user's word? In your loop, for each emoji, compare its `name` property to the `word` parameter. If they're ever the same, return that emoji's `symbol` property. If they're not a match, don't do anything else; the loop will simply check the next emoji for a match. What we're doing here is asking, one-by-one, if any of the emoji's matches our `word`; if any of them do, we want to return the actual emoji symbol. If none of them do, we just return the word. This will give us the result outlined in our step 1 above!

4) Let's check it. Besides passing a second test now, if we run `node main.js hello`, we should still get `hello` printed out. But if we run `node main.js ladybug` or `node main.js birthday`, we should get back the translated version of those words. If it works, give yourself a pat on the back. We've already done something cool!


### From Words To Sentences.

What if you type in `node main.js birthday cry`? We only get that first one... But getting multiple words, or a full sentence, is a piece of cake! Err... so to speak.

1) Head back to main.js. What we need is to grab all the words the user types, not jsut the first one. So instead of grabbing just the index `2` of `process.argv`, we want to grab from index `2` on as an array. Fortunately, `slice` can do that for you. Try printing out a slice of the array from index `2` on. (You may have to refresh your memeory on how `.slice` works... The internet is perfect for this sort of research!) If it works, you'll be able to write `node main.js hello emojis you are cool` and get an array holding each of those words.

2) Now that we've confirmed we've got what the words we want, what we can do is get a transformed version of that array where for every word, we have either the original word or a matching emoji. What's that sound like? Well... a map operation! Save that array slice into a variable, if you haven't already. Maybe `words`? Then we'll use `words.map` and pass it our `translateWord` function, which is, by some *weird coincidence*, a perfect `.map` helper function. It should give us back an array of words that are translated. Print out that return value and test it with `node main.js its my birthday I can cry if I want to`. (Note the lack of apostrophe; you can include one if you precede it with a backslash if you want, but a good app wouldn't need that! In fact, no punctuation will work, even commas and periods. Again, that's definitely something we'd want to figure out in a real app!) You should get an array with regular words, but also with the cake and the crying emojis in place of `birthday` and `cry`.

3) But ideally we'd want to print out a sentence for them, not an array of strings. How can we do that? There's a method for that! Take the array of translated words and call `.join` on it, passing in a space (' '). That will return a string created by concatenating each of those words together, with the ' ' in between each. Print that out and you've got a fully functional feature! Huzzah.

4) But we've still got one test failing for `translateWord`. If we pass in `cry`, it will work, but `Cry` will not. (Try running `node main.js Cry in your fries` if you want to see this edge case in action.) All we need to fix this, pass our test, and not fail to translate if the user ever hits their shift key is to g o back to `translate-word.js` and compare each emoji's `name` not to the parameter passed in but to the lowercased version of the parameter. Although you could lowercase it above the loop, just lowercasing it right in your `if` check is probably the easiest way. Check the tests and (if you want!) test it manually. You're done with this feature!


### Encoding Words

What's the difference between encoding and translating the user's input? Translate goes word by word. `Cry in your fries` becomes `😭 in your 🍟`. Encoding means changing every LETTER in the input. `Cry in your fries` becomes `🌵🤖☯ 🍦📰 ☯🐙🦄🤖 🍟🤖🍦🐘💀`, with every letter becoming an emoji standing for that letter.

So this is going to take a more granular approach, building a string based on looking up each letter of the given word, rather than just looking up the whole word.

1) Create a file called `encode-word.js`, create a function in it called `encodeWord`, and export it. Exactly like the previous one, if you need to refer back to the syntax!

2) `require` in the `emojis` array from `emojis.js`. We'll need it!

3) Take in a parameter for a `word` from the user.

4) Create a string for the result. We'll append a letter to it for each letter of the given word. For now, it'll just be an empty string.

5) Now for the meat of this function. Let's loop through the letters of the `word` parameter.

6) For now, let's think about this next part, because it's a new concept for many. For each letter, we'll need to check the emojis for which one has that letter. So we'll need an inner loop in which we loop through the emojis. We can think of this like the classic Handshake Problem. You have a room of 20 people, and they all need to greet each other. So for each person, they need to go around the room shaking each other's hand. We would represent this is as a loop within a loop; for person 1, they need to loop through persons 2-20 and shake all their hands. Then person 2 needs to loop through 3-20 and shake all of THEIR hands. An inner loop is very inefficient (it's exponential!), but our data isn't very large, so it's doable.

7) So what's our inner loop look like? You might want to first make sure you're looping through each character; console.log that out to make sure your outer loop works. Then, for each character, inside your `for` loop, make another `for` loop that goes through all the emojis in the `emojis` array. For each emoji, we need check if it's letter is the same as the character we're currently on. So if our current character is 'c', we'll loop through the emojis, seeing that the first one has a `letter` property of 'a', so that's not it. The second has a `letter` property of 'b', so that's not it. but the third one has a `letter` property of 'c', so THAT'S the emoji we want. In terms of the code: we need to check each emoji's `letter` property against our current character. If they're the same (`===`), we'll append that emoji's `symbol` property to our result.

An illustrative example: if we pass our function 'cat', it will loop through the letters of that word. For the 'c', it will loop through the emojis until it finds one whose `letter` is 'c', and then append its `symbol` property to our result string. Our string becomes `🌵`. Then it would reach the next character, 'a', and loop through until it finds (right away) the matching emoji and append its `symbol` property, '👽'. Then it would loop again to the last character, 't', and append to our result the matching emoji's `symbol`, '👅'.

8) Finally, after both loops are done, return our result string. (In the example above, it would be '🌵👽👅'.) You should now be passing the first `encode` test!


### Meanwhile, Back In The User Interface

For now, let's comment out all of our `translateWord` code and have our app encode instead. We'll give them the option of which feature they want next! But while we're doing them one a time, this one will be much like the last, so we'll make it brief.

1) Pull in our `encodeWord` function using `require`.

2) Slice our `process.argv` to get an array of our user's words.

3) `.map` those words using our `encodeWord` helper function.

4) `.join` that array with a space as our separator so that we get a sentence again.

5) Print it out for the user! (`console.log`).


### Next Time, On Emagi...

Improving this feature so that it handles punctuation and case, many additonal features, and the ability to choose which feature we want!
