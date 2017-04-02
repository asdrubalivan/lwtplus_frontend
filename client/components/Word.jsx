import React, {PureComponent} from 'react';

class Word extends PureComponent {
    //Props
    //word id
    //word status
    //word 

    get statusClass() {
        let klass = "word-";
        switch(this.props.status) {
            case 1:
                return `${klass}learning`;
            case 2:
                return `${klass}almost-learned`;
            case 3:
                return `${klass}known`;
            default:
                return `${klass}unknown`;
        }
    }

    render() {
        const { word } = this.props;
        return (
            <div className={`word ${this.statusClass}`}>{word}</div>
        );
    }
}

export default Word;
