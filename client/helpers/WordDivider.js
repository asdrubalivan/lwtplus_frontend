class WordDivider {
    constructor(sentence, splitEachChar) {
        this.splitEachChar = splitEachChar;
        this.sentence = sentence;
    }
    get words() {
        if (this.splitEachChar) {
            return this.sentence.split('');
        } else {
            return this.sentence.match(/\b(\w+)\b/g);
        }
    }
}

export default WordDivider;
