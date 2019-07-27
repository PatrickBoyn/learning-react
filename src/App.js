import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    people: [
      {
        id: 1,
        name: 'Patrick',
        age: 38,
      },
      {
        id: 2,
        name: 'John',
        age: 25,
      },
      {
        id: 3,
        name: 'Jane',
        age: 29,
      },
    ],
    showPeople: false,
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.people.findIndex(p => {
      return p.id === id;
    });

    const person = this.state.people[personIndex];

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

  deletePersonHandler = peopleIndex => {
    // const people = this.state.people;
    const people = [...this.state.people];
    people.splice(peopleIndex, 1);
    this.setState({ people: people });
  };

  // This is so that the this keyword refers to this particular method.
  togglePeopleHandler = () => {
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

    let people = null;

    if (this.state.showPeople) {
      people = (
        <div>
          {this.state.people.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => this.nameChangeHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hello world from React!</h1>
        <p>This is really working!</p>
        {/* This can be inefficient. */}
        <button style={style} onClick={this.togglePeopleHandler}>
          Show people
        </button>
        {people}
      </div>
    );
  }
}

export default App;
