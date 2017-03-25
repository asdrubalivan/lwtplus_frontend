import React, {Component} from 'react';

class Text extends Component {
    render() {
        return (
            <div><span style={styles.known}>This</span> is my text</div>
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
