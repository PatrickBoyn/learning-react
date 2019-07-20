import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello world from React!</h1>
        <p>This is really working!</p>
        <Person name="Patrick" age="38" />
        <Person name="John" age="25">
          Hobbies: violin
        </Person>
        <Person name="Jane" age="29" />
      </div>
    );
  }
}

export default App;
