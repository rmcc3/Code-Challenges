// Input: aaabbcdddda
// Output: a3b2c1d4a1

class CompressString {
    // Create the constructor and require a string.
    constructor(string) {
        if (typeof string !== 'string')
            return new TypeError('Input must be a string');

        this.str = string;
        this.builtString = '';
    }

    // Loop through the string to find duplicates, and then compress it.
    findDuplicates() {
        if (this.str.length <= 0)
            throw new TypeError('Input string is empty');

        // The count for the duplicates should always start at 1.
        let count = 1;
        for (let i = 0; i < this.str.length; i++) {
            let current = this.str.substr(i, 1); // The current letter.
            let next = this.str.substr(i+1, 1); // The next letter to compare to.

            if (current === next) {
                count++;
            } else {
                this.builtString += current + count;
                count = 1;
            }
        }
        return this.builtString;
    }
}

const meow = new CompressString('aaabbcdddda');
console.log(meow.findDuplicates());

const meow2 = new CompressString('abcdefg');
console.log(meow2.findDuplicates());
