export default class SentenceDivider {
    //TODO Delete unneeded parameters
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
}
