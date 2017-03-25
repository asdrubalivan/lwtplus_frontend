import React, {Component} from 'react';
import Text from './Text.jsx';

class App extends Component {
    render() {
      return ( 
        <div>
            <h1>Hola Mundo</h1>
            <div>Y ahora tenemos un texto
                <Text></Text>
            </div>
        </div>
      );
    }
}

export default App;
