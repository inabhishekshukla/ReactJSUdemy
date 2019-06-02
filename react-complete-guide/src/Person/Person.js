import React from 'react'

const person = (pros) => {
    return (
        <div>
            <p>I'm {pros.name} and {pros.age} years old.</p>
            <p>{pros.children}</p>
        </div>
    )
}

export default person