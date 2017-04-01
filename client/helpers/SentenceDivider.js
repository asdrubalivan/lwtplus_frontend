export default class SentenceDivider {
    constructor(text, removeSpaces, splitEachChar, regexSplitSentences) {
        this.text = text;
        this.removeSpaces = removeSpaces;
        this.splitEachChar = splitEachChar;
        this.regexSplitSentences = regexSplitSentences;
    }

    get sentences() {
        let unprocessed = this.text.split(this.regexSplitSentences);
        return unprocessed.map((txt) => txt.trim()).filter((txt) => txt);
    }

    get words() {
        if (this.splitEachChar) {
            return this.text.split('');
        } else {
            return this.text.match(/\b(\w+)\b/g);
        }
    }
}
