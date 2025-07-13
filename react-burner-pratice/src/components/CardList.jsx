import React from 'react'

const CardList = ({ users }) => {
    return (
        <div>
            {users.map((user, index) => (
                <div key={index} className='card'>
                    <h1>{user.name}</h1>
                    <p>{user.age}</p>
                    <p>{user.role}</p>
                </div>
            ))}
        </div>
    )
}

export default CardList