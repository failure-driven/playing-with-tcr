import React, { useState } from 'react';
import uuid from 'uuid/v4'
import './App.css';
import Form from './Form'

const List = () => <></>

function App() {
  const [items, setItems] = useState([])

  const addItem = (text) => {
    const newItem = {
      id: uuid(),
      ordinal: items.length + 1,
      isComplete: false,
      isEditing: false,
      text
    };

    setItems([...items, newItem])
  }

  return (
    <div>
      <h1>Pairing Talk Todo</h1>
      <h3>An easy way to sort out your tasks, fast and efficient</h3>
      <Form addItem={addItem} />
      <List items={items} />
    </div>
  );
}

export default App;