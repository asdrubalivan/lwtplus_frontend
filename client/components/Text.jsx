import React, {Component} from 'react';
import Word from './Word.jsx';
import Sentence from './Sentence.jsx';
import WordDivider from '../helpers/WordDivider';

class Text extends Component {
    static defaultProps = {
        knownWords: [
            {
                word: "Amet",
                id: 1,
                status: 2,
            },
            {
                word: "soluta",
                id: 2,
                status: 1,
            },
            {
                word: "atque optio",
                id: 4,
                status: 3
            }
        ],
        text: `
                Amet eligendi soluta similique atque optio. Aspernatur repudiandae ullam eveniet sapiente ab. Natus recusandae praesentium sit obcaecati ab incidunt ducimus nam, quas incidunt id? Ipsam porro animi nisi impedit quis?
                
        `,
        splitChars: false,
    };

    get divider() {
        return new WordDivider(this.props.text, false, this.props.splitChars, /[.!?:;]/g);
    }
    get sentences () {
        let mySentences = this.divider.sentences;
        return mySentences.map((sentence, i)=> (
            <Sentence key={i} text={sentence} />
        ));
    }

    /*
     * Algorithm
     * 1) Divide the words in n
     * 2) For each word in n
     * 3) Have a hash and save the location of the words
     * 4) Apply properties to words
     * Notes: Maybe saving pairs of words too for accelerating search of pairs?
     *
        * */
    render() {
        return (
            <div className="sentence-body">
                {this.sentences}
            </div>
        );
    }
}

const styles = {
    known: {
        backgroundColor: 'green'
    },
    learning: {
        backgroundColor: 'yellow',
    },
    unknown: {
        backgroundColor: 'red'
    }
};

export default Text;
