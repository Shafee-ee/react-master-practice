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

        const nameExists = users.some(user => user.name.toLowerCase() === name.toLowerCase());
        if (nameExists) {
            newErrors.name = "Name already Exists";
        }

        if (!name.trim()) { newErrors.name = "Name is  Required" }
        else if (name.trim().length <= 3) { newErrors.name = "Name must atleast be more than 3 characters length" }
        else if (nameExists) {
            newErrors.name = "Name Already Exists";
        }
        ;
        if (!age.trim()) { newErrors.age = "Age is required" } else if (isNaN(Number(age))) {
            newErrors.age = "Age must be a number"
        } else if (Number(age) <= 0 || Number(age) > 120) {
            newErrors.age = "Age should be within 1-120 range"
        }
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

    const handleDelete = (index) => {
        const updatedUsers = [...users];
        updatedUsers.splice(index, 1);
        setUsers(updatedUsers);
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
            <CardList users={users}
                handleDelete={handleDelete}
            />
        </div>
    )
}

export default Card