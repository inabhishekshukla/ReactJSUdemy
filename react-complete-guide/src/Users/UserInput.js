import React from 'react';

const UserInput = (props) => {
    return (
        <div>
            <input 
                type="text" 
                onChange={props.inputChanged} 
                value={props.userName}
                placeholder='user name'/>
        </div>
    )
}

export default UserInput