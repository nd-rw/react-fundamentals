// Styling
// http://localhost:3000/isolated/exercise/05.js

import { BackgroundColor } from 'chalk'
import React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor) for the color
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`
const smallBox = <div className="box box--small" style={{backgroundColor: 'lightblue'}}>small lightblue box</div>
const mediumBox = <div className="box box--medium" style={{backgroundColor: 'pink'}}>medium pink box</div>
const largeBox = <div className="box box--large" style={{backgroundColor: 'orange'}}>large orange box</div>

function getClassName(size) {
  if (size === "small") {
    return "box box--small";
  } else if (size === "medium") {
    return "box box--medium";
  } else if (size === "large") {
    return "box box--large";
  } else { return "box" }
}

function Box(props) {
  const computedClassName = getClassName(props.size);
  props.style.fontStyle = 'italic';

  return ( <div className={computedClassName} style={props.style}>{props.children}</div>) 
}

function App() {
  return (
    <div>
      <Box size="small" style={{backgroundColor: 'lightblue'}}> small lightblue box </Box>
      <Box size="medium" style={{backgroundColor: 'pink'}}> medium pink box </Box>
      <Box size="large" style={{backgroundColor: 'orange'}}> large orange box </Box>
    </div>
  )
}

export default App
