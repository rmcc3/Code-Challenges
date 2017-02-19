function isAnagram(word, anagram) {
    var splitWord = word.split('');
    var splitAnagram = anagram.split('');
    var foundCount = 0; // Number of letters found in anagram

    // Return false if it's the same.
    if (word == anagram)
        return false;

    for (var i = 0; i < splitWord.length; i++) {
        if (splitAnagram.indexOf(word[i]) != -1) {
            foundCount++;

            if (foundCount >= splitWord.length)
                return true;
        }
    }

    return false;
}

console.log('Should be true (ape, pea): ' + isAnagram('ape', 'pea'));
console.log('Should be true (dog, god): ' + isAnagram('dog', 'god'));
console.log('Should be false (mother, brother): ' + isAnagram('mother', 'brother'));
console.log('Should be false if it\'s the same: ' + isAnagram('cat', 'cat'));