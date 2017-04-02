import React, {Component} from 'react';
import Word from './Word.jsx';
import WordDivider from '../helpers/WordDivider';

class Sentence extends Component {
    onHover() {
        console.log(this.props.text);
        console.log(this.props.words);
    }
    get wordDivider() {
        const { text, splitEachChar } = this.props;
        return new WordDivider(text, splitEachChar);
    }
    get wordComponents() {
        let divided = this.wordDivider.words;
        const { words } = this.props;
        //TODO better key
        return divided.map((w, i) => {
            let found = words.find(word => (
                w.toLowerCase() === word.word.toLowerCase()
            ));
            let status = found !== void 0 ? found.status : 0;
            let id = found !== void 0 ? found.id : 0;
            let key = `${i}-${id}`;
            return <Word key={key} status={status} word={w} />
        });
    }
    //TODO Divide words onto classes
    render() {
        const { text } = this.props;
        return (
            <div className="sentence" onMouseEnter={ this.onHover.bind(this) }>
                {this.wordComponents}
            </div>
        );
    }
}

export default Sentence;
