import React, { useState } from "react"

const Form = ({addItem}) => {
  const [value, setValue] = useState("")

  const onChangeInput = (event) => {
    setValue(event.target.value)
  }
  
  const onKeyDownInput = event => {
    if (event.key === 'Enter') {
      addItem(value)
      setValue("")
    }
  }

  return <input
    autoFocus
    value={value}
    onChange={onChangeInput}
    onKeyDown={onKeyDownInput}
  >
  </input>
};

export default Form;