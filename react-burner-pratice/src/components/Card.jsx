import React, { useState } from 'react'

const Card = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [role, setRole] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name.trim() || !age.trim() || !role.trim()) {
            console.log("Validation failed");
            return;
        }
        const user = { name, age, role };
        console.log('User:', user);

        setName('');
        setAge('');
        setRole('');
    }

    return (
        <div>
            <form action="submit">
                <input type="text"
                    placeholder='Enter Name...'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <input type="number"
                    placeholder='Enter Age...'
                    onChange={(e) => setAge(e.target.value)}
                    value={age}
                />
                <input type="text"
                    placeholder='Enter Role...'
                    onChange={(e) => setRole(e.target.value)}
                    value={role}
                />
                <button onClick={handleSubmit}>Add user</button>
            </form>
        </div>
    )
}

export default Card