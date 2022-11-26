import { useState, useEffect } from 'react';
import axios from 'axios';

const Msgs = () => {
  const [msgs, setMsgs] = useState([])

  useEffect( () => {
    axios.get("http://localhost:3001/api/msgs")
      .then(res => setMsgs(res.data))
      .catch(err => console.log(err))
  }, [])

  const renderMsgs = () => (
    msgs.map(m =>
      <>
        <h3>{m.title}</h3>
        <p>{m.body}</p>
      </>  
    )
  )
  

  return (
    <>
      {renderMsgs()}
    </>
  )
}

export default Msgs;