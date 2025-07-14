import React, { useState } from 'react';
import CardList from './CardList';
import Form from './Form';

const Card = () => {
    const [errors, setErrors] = useState({});

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [role, setRole] = useState('');
    const [users, setUsers] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!name.trim()) newErrors.name = "Name is  Required";
        if (!age.trim() || Number(age) <= 0) newErrors.age = "Age is required";
        if (!role.trim()) newErrors.role = "Role is required";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return
        }

        const newUser = { age, name, role };
        setUsers(prev => [...prev, newUser]);

        setName('');
        setAge('');
        setRole('');
        setErrors({});

    }

    return (
        <div>
            <Form
                name={name}
                setName={setName}
                age={age}
                setAge={setAge}
                role={role}
                setRole={setRole}
                handleSubmit={handleSubmit}
                errors={errors}
            />
            <CardList users={users} />
        </div>
    )
}

export default Card