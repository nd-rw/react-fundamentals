// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [error, setError] = React.useState(null);
  const usernameInputRef = React.useRef()

  function handleSubmit(event) {
    event.preventDefault();
    const value = usernameInputRef.current.value;
    onSubmitUsername(value);
    
  }

  function handleChange(event) {
    const {value} = event.target;
    const isLowerCase = value === value.toLowerCase()
    setError(isLowerCase ? null : 'Username needs to be lower case')
  }

  // TODO
  // 
  // Complete Extra Credit 3. 💯 Control the input value
  //
  // TODO
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input onChange={handleChange} ref={usernameInputRef} id="usernameInput" type="text" />
      </div>
      <div style={{color: 'red'}}>{error}</div>
      <button di type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
