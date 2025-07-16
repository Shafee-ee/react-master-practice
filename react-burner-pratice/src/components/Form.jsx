import React, { useState, forwardRef, useImperativeHandle, useRef } from 'react'

const Form = forwardRef((props, ref) => {
    const { users, setUsers } = props;
    const [errors, setErrors] = useState({});

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [role, setRole] = useState('');
    // const [users, setUsers] = useState([]);
    const nameInputRef = useRef(null);
    const [editIndex, setEditIndex] = useState(null);
    const isEditing = editIndex !== null;

    useImperativeHandle(ref, () => ({
        setFormData: (index) => {
            const user = users[index];
            if (!user) return;

            setName(user.name);
            setAge(user.age);
            setRole(user.role);
            setEditIndex(index);


            setTimeout(() => {
                const top = nameInputRef.current?.getBoundingClientRect().top + window.scrollY - 100;
                window.scrollTo({ top, behavior: 'smooth' })
                nameInputRef.current?.focus();
            }, 200)
        }
    }))



    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!name.trim()) {
            newErrors.name = "Name is required";
        } else if (name.trim().length <= 3) {
            newErrors.name = "Name must be more than 3 characters"
        }

        if (!age.trim()) {
            newErrors.age = "Age is a required field";
        } else if (Number(age) <= 16 || Number(age) > 120) {
            newErrors.age = "Your age is not valid";
        }

        if (!role.trim()) {
            newErrors.role = "Role is a required field"
        }

        const nameExists = users.some(
            (user, i) => i !== editIndex && user.name.toLowerCase() === name.toLowerCase()
        )

        if (nameExists) {
            newErrors.name = "Name already exists"
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        const newUser = { name, age, role };

        if (editIndex !== null) {
            const updatedUsers = [...users];
            updatedUsers[editIndex] = newUser;
            setUsers(updatedUsers)
        } else {
            setUsers([...users, newUser])
        }

        //Reset
        setName('');
        setAge('');
        setRole('');
        setErrors({});
        setEditIndex(null)

    }


    return (
        <form className='mt-20 bg-white border border-gray-800 flex w-full max-w-md mx-auto flex-col  p-6 shadow-lg'>
            <input type="text"
                ref={nameInputRef}
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
})

export default Form