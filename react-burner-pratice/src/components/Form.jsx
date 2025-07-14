import React, { useState } from 'react'

const Form = ({ name, setName, age, setAge, role, setRole, handleSubmit, errors, isEditing }) => {


    return (
        <form className='mt-20 bg-white border border-gray-800 flex w-full max-w-md mx-auto flex-col  p-6 shadow-lg'>
            <input type="text"
                placeholder='Enter Name....'
                value={name}
                onChange={e => setName(e.target.value)}
                className='border border-blue-100 py-4 mb-1 px-2' />
            {errors?.name && <p className='text-red-500 text-sm'>{errors.name}</p>}
            <input type="text"
                placeholder='Enter Age....'
                value={age}
                onChange={e => setAge(e.target.value)}
                className='border border-blue-100 py-4 mb-1 px-2' />
            {errors?.age && <p className='text-red-500 text-sm'>{errors.age}</p>}

            <input type="text"
                placeholder='Enter Role....'
                value={role}
                onChange={e => setRole(e.target.value)}
                className='border border-blue-100 py-4 mb-1 px-2' />
            {errors?.role && <p className='text-sm text-red-500'>{errors.role}</p>}

            <button onClick={handleSubmit} className='bg-green-300 px-3 py-2 hover:bg-green-400 w-50 mx-auto mt-5'>{isEditing ? 'Update User' : 'Add User'}</button>
        </form>
    )
}

export default Form