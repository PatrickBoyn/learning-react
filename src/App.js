import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    people: [
      {
        name: 'Patrick',
        age: 38
      },
      {
        name: 'John',
        age: 25
      },
      {
        name: 'Jane',
        age: 29
      }
    ]
  };
  render() {
    return (
      <div className="App">
        <h1>Hello world from React!</h1>
        <p>This is really working!</p>
        <button>Switch Name</button>
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
