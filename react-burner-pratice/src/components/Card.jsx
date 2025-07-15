import React, { useState, useRef, forwardRef, useImperativeHandle } from 'react';
import CardList from './CardList';
import Form from './Form';

const Card = () => {
    // prep for removal
    // const [errors, setErrors] = useState({});

    // const [name, setName] = useState('');
    // const [age, setAge] = useState('');
    // const [role, setRole] = useState('');
    const [users, setUsers] = useState([]);
    const formRef = useRef();

    const handleEdit = (index) => {
        formRef.current?.setFormData(index);
    }

    const handleDelete = (index) => {
        const updatedUsers = users.filter((_, i) => i !== index);
        setUsers(updatedUsers);
    }

    // const [editIndex, setEditIndex] = useState(null);// track if we are editing

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const newErrors = {};

    //     //name validation
    //     if (!name.trim()) { newErrors.name = "Name is  Required" }
    //     else if (name.trim().length <= 3) { newErrors.name = "Name must atleast be more than 3 characters length" }

    //     //age validation
    //     if (!age.trim()) { newErrors.age = "Age is required" } else if (isNaN(Number(age))) {
    //         newErrors.age = "Age must be a number"
    //     } else if (Number(age) <= 0 || Number(age) > 120) {
    //         newErrors.age = "Age should be within 1-120 range"
    //     }

    //     //Role Validation
    //     if (!role.trim()) newErrors.role = "Role is required";


    //     const nameExists = users.some((user, i) => i !== editIndex && user.name.toLowerCase() === name.toLowerCase());


    //     if (nameExists) {
    //         newErrors.name = "Name already Exists";
    //     }


    //     if (Object.keys(newErrors).length > 0) {
    //         setErrors(newErrors);
    //         return
    //     }

    //     const newUser = { age, name, role };

    //     if (editIndex !== null) {
    //         const updatedUsers = [...users];
    //         updatedUsers[editIndex] = newUser;
    //         setUsers(updatedUsers)
    //     } else {
    //         setUsers(prev => [...users, newUser])
    //     }


    //     setName('');
    //     setAge('');
    //     setRole('');
    //     setErrors({});
    //     setEditIndex(null);

    // }

    // const handleEdit = (index) => {
    //     const userToEdit = users[index];
    //     setName(userToEdit.name);
    //     setAge(userToEdit.age);
    //     setRole(userToEdit.role);
    //     setEditIndex(index);
    // }

    // const handleDelete = (index) => {

    //     //Remove the user at the edit selected index
    //     const filtered = users.filter((_, i) => i !== index);
    //     setUsers(filtered);

    //     //Reset the form if user being edited is deleted
    //     if (editIndex === index) {
    //         setName('');
    //         setAge('');
    //         setRole('');
    //         setEditIndex(null);
    //     }

    // }

    return (
        <div>
            <Form
                users={users}
                setUsers={setUsers}
                ref={formRef}
            />
            <CardList users={users}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
            />
        </div>
    )
}

export default Card