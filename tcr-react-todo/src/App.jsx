import React, { useState } from 'react';
import uuid from 'uuid/v4'
import './App.css';
import Form from './Form'

const List = () => <></>

function App() {
  const [items, setItems] = useState([])

  const removeItem = id => {
    const keptItems = items.filter(element => element.id !== id);
    keptItems.map((element, index) => Object.assign(element, { ordinal: index + 1 }))
    setItems(keptItems);
  }

  const toggleItem = id => {
    const toggleItem = items.find(element => element.id === id);
    toggleItem.isComplete = !toggleItem.isComplete;
    setItems(items.map(item => (item.id === id ? toggleItem : item)));
  }

  const addItem = text => {
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
      <List items={items} removeItem={removeItem} toggleItem={toggleItem} />
    </div>
  );
}

export default App;
