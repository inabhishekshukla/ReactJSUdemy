/*
  Funtional Components
*/
import React, { useState } from 'react';

import './App.css';
import Person from './Person/Person'
import person from './Person/Person';

// functional component
const app = props => {

  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Abhishek Shukla", age: 29, hobby: 'My Hobby is coding, biking, racing, reading' },
      { name: "Anubhav", age: 25 },
      { name: "Siya", age: 24 }
    ]
  })

  const [otherState] = useState({
    otherState: 'Here the other state'
  })

  console.log(personsState, otherState)

  const switchHandler = (newName, newAge) => {
    // console.log('Switch Clicked!')
    // DON'T DO THIS this.state.persons[0].name = 'abhishek shukla'
    setPersonsState({
      persons: [
        { name: newName, age: newAge, hobby: 'My Hobby is coding, biking, racing, reading' },
      { name: "Anubhav Shukla", age: 25, hobby: 'My Hobby is travling, business'},
      { name: "Siya Shukla", age: 24, hobby: 'My Hobby is steching' }
      ]
    })
    
  }
    return (
      <div className="App">
        <h1>Hello, I am react</h1>
        <button onClick={() => switchHandler('Shiva')}>Switch</button>
        <Person 
          name={personsState.persons[0].name} 
          age={personsState.persons[0].age}>
          {personsState.persons[0].hobby}
        </Person>

        <Person 
          name={personsState.persons[1].name} 
          age={personsState.persons[1].age}
          click={() => switchHandler('Abhi')}>
          {personsState.persons[1].hobby}
        </Person>

        <Person 
          name={personsState.persons[2].name} 
          age={personsState.persons[2].age}>
          {personsState.persons[2].hobby}
        </Person>
      </div>
    );
  } 




// functional component
export default app