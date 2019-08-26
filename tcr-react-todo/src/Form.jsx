import React, { useState } from "react"

const Form = () => {
  const [value] = useState("")
  return <input value={value}>
  </input>
};

export default Form;