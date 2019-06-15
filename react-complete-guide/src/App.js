/*
  Class Components
*/
import React, { Component } from 'react';

import './App.css';
import Person from './Person/Person'
import person from './Person/Person';

// class based component
class App extends Component {

  state = {
    persons: [
      { name: "Abhishek", age: 29, hobby: 'My Hobby is coding, biking, racing, reading' },
      { name: "Anubhav", age: 25 },
      { name: "Siya", age: 24 }
    ],
    showPersons: false,
    buttonTitle: "title"
  }

  switchHandler = (newName,newAge) => {
    // console.log('Switch Clicked!')
    // DON'T DO THIS this.state.persons[0].name = 'abhishek shukla'
    this.setState({
      persons: [
        { name: newName, age: newAge, hobby: 'My Hobby is coding, biking, racing, reading' },
      { name: "Anubhav Shukla", age: 25, hobby: 'My Hobby is travling, business'},
      { name: "Siya Shukla", age: 24, hobby: 'My Hobby is steching' }
      ]
    })
  }

  handleNameChanged = (event) => {
    console.log('hangle Name changed called')
    this.setState({
      persons: [
        { name: 'Abhishek', age: 29, hobby: 'My Hobby is coding, biking, racing, reading' },
      { name: event.target.value, age: 25, hobby: 'My Hobby is travling, business'},
      { name: "Siya Shukla", age: 24, hobby: 'My Hobby is steching' }
      ]
    })
  }

  togglePersonsHandler = () => {
      const doesPersonShown = this.state.showPersons
      this.setState({
        showPersons: !doesPersonShown
      })
    }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      cursor: 'pointer',
      padding: '8px'
    }

    let persons = null
    if (this.state.showPersons) {
      persons = (
            <div>
              {
                this.state.persons.map(person => {
                  return <Person 
                          name={person.name}
                          age={person.age}
                  />
                })
              }
            </div>  
      )
    }
    return (
      <div className="App">
        <h1>Hello, I am react</h1>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>{this.buttonTitle}</button>
          {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'},
    //         React.createElement('h1', null, 'Hello I \'m react component!!'))
  } 
}

export default App;
