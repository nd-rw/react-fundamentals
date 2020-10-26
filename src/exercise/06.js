// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [username, setUsername] = React.useState(null);
  const usernameInputRef = React.useRef()

  function handleSubmit(event) {
    event.preventDefault();
    const value = usernameInputRef.current.value;
    onSubmitUsername(value);
    
  }

  function handleChange(event) {
    const {value} = event.target
    const valueLowerCase = value.toLowerCase();
    setUsername(valueLowerCase);
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input value={username} onChange={handleChange} ref={usernameInputRef} id="usernameInput" type="text" />
      </div>
      <div style={{color: 'darkgrey'}}>{username}</div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
