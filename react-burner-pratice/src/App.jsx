import { useState } from 'react';
import React from 'react'
import './App.css'
import CardList from './components/CardList';
import Card from './components/Card';

function App() {
  const [users, setUsers] = useState([])

  return (
    <div className='bg-gray-100 min-h-vh p-6'>
      <Card setUsers={setUsers} />
      <CardList users={users} />
    </div>
  )
}

export default App
