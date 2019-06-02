import React, {Component} from 'react';

import UserInput from './Users/UserInput'
import UserOutput from './Users/UserOutput'

class App2 extends Component {

    state = {userName: '', userDetails: 'Nehru Nagar'}
    

    handleUserChanged = (event) => {
        this.setState({
            userName: event.target.value
        })
    }

     
    render() {
        return (
            <div>
                <h1>Here is the app2</h1>
                <UserInput inputChanged={this.handleUserChanged}/>
                <UserOutput 
                    userName={this.state.userName}  
                    userDetails='I hope your fine'
                    />
            </div>
        );
    }
}

export default App2