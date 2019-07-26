import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    people: [
      {
        name: 'Patrick',
        age: 38,
      },
      {
        name: 'John',
        age: 25,
      },
      {
        name: 'Jane',
        age: 29,
      },
    ],
    showPeople: false,
  };

  switchNameHandler = newName => {
    this.setState({
      people: [
        {
          name: newName,
          age: 38,
        },
        {
          name: 'John',
          age: 25,
        },
        {
          name: 'Jane',
          age: 21,
        },
      ],
    });
  };

  nameChangeHandler = event => {
    this.setState({
      people: [
        {
          name: 'Patrick',
          age: 38,
        },
        {
          name: event.target.value,
          age: 25,
        },
        {
          name: 'Jane',
          age: 21,
        },
      ],
    });
  };

  // This is so that the this keyword refers to this particular method.
  togglePersonHandler = () => {
    const doesShow = this.state.showPeople;
    // This is a toggle from true to false or vice versa.
    this.setState({ showPeople: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      borderRadius: '6px',
      padding: '8px',
      cursor: 'pointer',
    };
    return (
      <div className="App">
        <h1>Hello world from React!</h1>
        <p>This is really working!</p>
        {/* This can be inefficient. */}
        <button style={style} onClick={this.togglePersonsHandler}>
          Switch Name
        </button>
        {this.state.showPeople ? (
          <div>
            <Person
              name={this.state.people[0].name}
              age={this.state.people[0].age}
            />
            <Person
              click={this.switchNameHandler.bind(this, 'Allen')}
              name={this.state.people[1].name}
              age={this.state.people[1].age}
              changed={this.nameChangeHandler}
            />
            Hobbies: violin
            <Person
              name={this.state.people[2].name}
              age={this.state.people[2].age}
            />
          </div>
        ) : // Else renders nothing.
        null}
      </div>
    );
  }
}

export default App;
