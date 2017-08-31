// Input: a3b2c1d4a1
// Output: aaabbcdddda

class DecompressString {
    // Create the constructor and require a string.
    constructor(string) {
        if (typeof string !== 'string')
            return new TypeError('Input must be a string');

        this.str = string;
        this.builtString = '';
    }

    // Loop through the string to find the numbers, and then decompress it.
    decompress() {
        if (this.str.length <= 0)
            throw new TypeError('Input string is empty');

        for (let i = 0; i < this.str.length; i++) {
            let current = this.str.substr(i, 1); // The current letter.
            let next = parseInt(this.str.substr(i+1, 1)); // The next letter/number to compare to.

            if (!isNaN(next)) {
                this.builtString = this.builtString + current.repeat(next);
            }
        }
        return ((this.builtString !== '') ? this.builtString : 'Empty');
    }
}

const meow = new DecompressString('a3b2c1d4a1');
console.log(meow.decompress());
