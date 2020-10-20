import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Sub} from './components/sub';
import * as myImage from "./images/bg.png";
import "./style/style.scss";
const imgBase64 = myImage.default


class App extends React.Component {
  render() {
    return (
        <div>
          <h1>Hello React!!</h1>
          <Sub name="My Counter for TypeScript" />
          <img src={imgBase64} />
        </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));
