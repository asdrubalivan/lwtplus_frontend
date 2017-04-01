import React, {Component} from 'react';

class Sentence extends Component {
    onHover() {
        console.log(this.props.text);
        console.log(this.props.words);
    }
    //TODO Divide words onto classes
    render() {
        const { text } = this.props;
        return (
            <div className="sentence" onMouseEnter={ this.onHover.bind(this) }>
                {text}
            </div>
        );
    }
}

export default Sentence;
