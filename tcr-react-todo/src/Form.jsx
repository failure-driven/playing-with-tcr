import React, { useState } from "react"

const Form = () => {
  const [value, setValue] = useState("")

  const onChangeInput = (event) => {
    setValue(event.target.value)
  }

  return <input value={value} onChange={onChangeInput}>
  </input>
};

export default Form;