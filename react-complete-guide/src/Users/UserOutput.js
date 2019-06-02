import React from 'react';

const UserOutput = (props) => {
    console.log('here is the output')
    return (
        <div>
            <p>{props.userName}</p>
            <p>{props.userDetails}</p>
        </div>
    )
}

export default UserOutput