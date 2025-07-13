import { useState } from 'react';
import React from 'react'
import './App.css'
import CardList from './components/CardList';
import Card from './components/Card';

function App() {
  const [users, setUsers] = useState([])

  return (
    <div >
      <Card setUsers={setUsers} />
      <CardList users={users} />
    </div>
  )
}

export default App
