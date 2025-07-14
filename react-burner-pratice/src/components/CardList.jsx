import React from 'react'

const CardList = ({ users, handleEdit, handleDelete }) => {
    return (
        <div >
            {users.map((user, index) => (
                <div key={index} className='bg-gray-100 p-10 border w-full max-w-lg mx-auto p-6 rounded mt-10'>
                    <h1 className='text-bold'>{user.name}</h1>
                    <p className='text-md'>{user.age}</p>
                    <p className='text-lg'>{user.role}</p>

                    <button className='bg-red-400 px-4 py-2 mr-4 rounded  hover:bg-red-500' onClick={() => handleDelete(index)}>Delete</button>
                    <button className='bg-blue-400 px-4 py-2 rounded hover:bg-blue-500' onClick={() => handleEdit(index)}>Edit</button>
                </div>

            ))}
        </div>
    )
}

export default CardList