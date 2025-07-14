import React from 'react'

const CardList = ({ users, handleEdit, handleDelete }) => {
    return (
        <div >
            {users.map((user, index) => (
                <div key={index} className='bg-gray-100 p-10'>
                    <h1>{user.name}</h1>
                    <p>{user.age}</p>
                    <p>{user.role}</p>

                    <button className='bg-red-400 px-4 py-2 mr-4 rounded' onClick={() => handleDelete(index)}>Delete</button>
                    <button className='bg-blue-400 px-4 py-2 rounded ' onClick={() => handleEdit(index)}>Edit</button>
                </div>

            ))}
        </div>
    )
}

export default CardList