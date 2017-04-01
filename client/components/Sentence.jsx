import React, {Component} from 'react';

class Sentence extends Component {
    onHover() {
        console.log(this.props.text);
    }
    render() {
        const { text } = this.props;
        return (
            <div onMouseEnter={ this.onHover.bind(this) }>
                {text}
            </div>
        );
    }
}

export default Sentence;
