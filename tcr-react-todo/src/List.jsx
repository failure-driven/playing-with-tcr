import React from "react"
import Item from './Item'

const List = ({items, toggleItem}) => (
  <ul>
    {items.map(item => <Item key={item.id} item={item} toggleItem={toggleItem} />)}
  </ul>
);

export default List;