function revVowels(str) {
    // object literal so we can ID vowels in our word
    let vowels = { 'a': true, 'e': true, 'i': true, 'o': true, 'u': true }
    // split string into words, change word to result of reverseWord func, join back together and return
    return str.split(" ").map(v => reverseWord(v)).join(' ');



    // helper function to reverse vowels per word
    function reverseWord(word) {
        word = word.split('');
        let vowelsFound = [];
        let positions = [];
        // find vowels and positions in word
        for (let i = 0; i < word.length; i++) {
            let letter = word[i];
            // use vowels object literal to identify if vowel, then add vowel and index to corresponding array
            if (vowels[letter]) {
                vowelsFound.push(letter);
                positions.push(i);
            }
        }
        // for each position stored, change the value to the last item in vowelFound array, and remove it from vowelsFound array
        positions.forEach(v => {
            word[v] = vowelsFound.pop();
        })
        return word.join('');

    }
}


let input = 'bohemian rhapsody on tuesday';
revVowels(input);