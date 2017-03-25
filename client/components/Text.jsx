import React, {Component} from 'react';
import Word from './Word.jsx';
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
        console.log(this.divider.sentences);
        console.log(this.divider.words);
        return (
            <div>
                Amet eligendi soluta similique atque optio. Aspernatur repudiandae ullam eveniet sapiente ab. Natus recusandae praesentium sit obcaecati ab incidunt ducimus nam, quas incidunt id? Ipsam porro animi nisi impedit quis?
                
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
