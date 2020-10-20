import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Sub} from './components/sub';
import "./style/style.scss";


class App extends React.Component {
  render() {
    return (
        <div>
          <h1>Hello React!!</h1>
          <Sub name="My Counter for TypeScript" />
        </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));
