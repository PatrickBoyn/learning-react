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

  switchNameHandler = newName => {
    this.setState({
      people: [
        {
          name: newName,
          age: 38
        },
        {
          name: 'John',
          age: 25
        },
        {
          name: 'Jane',
          age: 21
        }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hello world from React!</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.people[0].name}
          age={this.state.people[0].age}
        />
        <Person
          click={this.switchNameHandler}
          name={this.state.people[1].name}
          age={this.state.people[1].age}>
          Hobbies: violin
        </Person>
        <Person
          name={this.state.people[2].name}
          age={this.state.people[2].age}
        />
      </div>
    );
  }
}

export default App;
