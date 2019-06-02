// // functional component
// import React, { useState } from 'react';

// class component
import React, { Component } from 'react';

import './App.css';
import Person from './Person/Person'

// // functional component
// const app = props => {

//   const [personsState, setPersonsState] = useState({
//     persons: [
//       { name: "Abhishek Shukla", age: 29, hobby: 'My Hobby is coding, biking, racing, reading' },
//       { name: "Anubhav", age: 25 },
//       { name: "Siya", age: 24 }
//     ]
//   })

//   const [otherState] = useState({
//     otherState: 'Here the other state'
//   })

//   console.log(personsState, otherState)

//   const switchHandler = (newName, newAge) => {
//     // console.log('Switch Clicked!')
//     // DON'T DO THIS this.state.persons[0].name = 'abhishek shukla'
//     setPersonsState({
//       persons: [
//         { name: newName, age: newAge, hobby: 'My Hobby is coding, biking, racing, reading' },
//       { name: "Anubhav Shukla", age: 25, hobby: 'My Hobby is travling, business'},
//       { name: "Siya Shukla", age: 24, hobby: 'My Hobby is steching' }
//       ]
//     })
    
//   }
//     return (
//       <div className="App">
//         <h1>Hello, I am react</h1>
//         <button onClick={() => switchHandler('Shiva')}>Switch</button>
//         <Person 
//           name={personsState.persons[0].name} 
//           age={personsState.persons[0].age}>
//           {personsState.persons[0].hobby}
//         </Person>

//         <Person 
//           name={personsState.persons[1].name} 
//           age={personsState.persons[1].age}
//           click={() => switchHandler('Abhi')}>
//           {personsState.persons[1].hobby}
//         </Person>

//         <Person 
//           name={personsState.persons[2].name} 
//           age={personsState.persons[2].age}>
//           {personsState.persons[2].hobby}
//         </Person>
//       </div>
//     );
//   } 

// class based component
class App extends Component {

  state = {
    persons: [
      { name: "Abhishek", age: 29, hobby: 'My Hobby is coding, biking, racing, reading' },
      { name: "Anubhav", age: 25 },
      { name: "Siya", age: 24 }
    ]
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

  render() {
    return (
      <div className="App">
        <h1>Hello, I am react</h1>
        <button onClick={this.switchHandler.bind(this, 'Shiva', 30)}>Switch</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}>
          {this.state.persons[0].hobby}
        </Person>

        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchHandler.bind(this, 'Abhi', 28)}
          changed={this.handleNameChanged}>
          {this.state.persons[1].hobby}
        </Person>

        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}>
          {this.state.persons[2].hobby}
        </Person>
      </div>
    );
    // return React.createElement('div', {className: 'App'},
    //         React.createElement('h1', null, 'Hello I \'m react component!!'))
  } 
}


// // functional component
// export default app

// class based component
export default App;
