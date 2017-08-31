// Input: aaabbcdddda
// Output: a3b2c1d4a1

class CompressString {
    constructor(string) {
        if (typeof string !== 'string')
            return new TypeError('Input must be a string');

        this.str = string;
        this.builtString = '';
    }

    findDuplicates() {
        if (this.str.length <= 0)
            throw new TypeError('Input string is empty');

        let count = 1;
        for (let i = 0; i < this.str.length; i++) {
            let current = this.str.substr(i, 1);
            let next = this.str.substr(i+1, 1);

            if (current === next) {
                count++;
            } else {
                this.builtString += current + count;
                count = 1;
            }
        }
        console.log(this.builtString);
    }
}

const meow = new CompressString('aaabbcdddda');
meow.findDuplicates();
