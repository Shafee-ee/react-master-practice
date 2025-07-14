import React, { useState } from 'react'

const Form = ({ name, setName, age, setAge, role, setRole, handleSubmit, errors }) => {


    return (
        <form>
            <input type="text"
                placeholder='Enter Name....'
                value={name}
                onChange={e => setName(e.target.value)} />
            {errors?.name && <p className='text-red-500 text-sm'>{errors.name}</p>}
            <input type="text"
                placeholder='Enter Age....'
                value={age}
                onChange={e => setAge(e.target.value)} />
            {errors?.age && <p className='text-red-500 text-sm'>{errors.age}</p>}

            <input type="text"
                placeholder='Enter Role....'
                value={role}
                onChange={e => setRole(e.target.value)} />
            {errors?.roles && <p className='text-sm text-red-500'>{errors.role}</p>}

            <button onClick={handleSubmit} className='bg-gray-100 px-3 py-2 hover:bg-gray-200'>Add user</button>
        </form>
    )
}

export default Form