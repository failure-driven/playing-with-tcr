import React, { useState } from 'react';
import './App.css';
import Form from './Form'

const List = () => <></>

function App() {
  const [items] = useState([])

  const addItem = (text) => {
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
