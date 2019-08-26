import React from "react"

const Item = ({item: {text}}) => <li>{text}</li>

const List = ({items}) => (
  <ul>
    {items.map(item => <Item key={item.id} item={item} />)}
  </ul>
);

export default List;