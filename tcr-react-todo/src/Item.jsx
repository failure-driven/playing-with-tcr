import React from "react"

const Item = ({item: {id, text, isComplete} , toggleItem }) => (
  <li>
    <input type="checkbox" checked={isComplete} onChange={() => {}}></input>
    <span className="checkmark" onClick={() => toggleItem(id)}></span>
    <span className={isComplete && 'checked'}>{text}</span>
  </li>
);

export default Item;