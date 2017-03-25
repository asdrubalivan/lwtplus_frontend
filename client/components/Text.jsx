import React, {Component} from 'react';

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
        ]
    };
    render() {
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
