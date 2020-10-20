import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {SubComponent} from './sub-component';
import * as myImage from "./images/bg.png";
import * as myImage2 from "./images/cat3.jpg";
import * as myImage3 from "./images/dog8.jpg";
import "./style.scss";
const imgBase64 = myImage.default
const imgBase64_2 = myImage2.default
const imgBase64_3 = myImage3.default

class App extends React.Component {
  render() {
    return (
        <div>
          <h1>Hello React!!</h1>
          <SubComponent name="My Counter for TypeScript" />
          <img src={imgBase64} />
          <img src={imgBase64_2} />
          <img src={imgBase64_3} />
        </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));
