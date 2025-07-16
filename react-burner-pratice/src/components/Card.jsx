import React, { useState, useRef, forwardRef, useImperativeHandle, useEffect } from 'react';
import CardList from './CardList';
import Form from './Form';

const Card = () => {

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const formRef = useRef();


    useEffect(() => {
        const storedUsers = localStorage.getItem('users');
        if (storedUsers) {
            setUsers(JSON.parse(storedUsers))
        }
        setIsLoading(false)
    }, [])

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users));
    }, [users])

    const handleEdit = (index) => {
        formRef.current?.setFormData(index);
    }

    const handleDelete = (index) => {
        const updatedUsers = users.filter((_, i) => i !== index);
        setUsers(updatedUsers);
    }



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