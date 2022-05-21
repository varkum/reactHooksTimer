import React, { useState, useContext, useEffect, useRef } from 'react'
import { ThemesContext } from '../App'

export default function Controls(props) {
  const themes = useContext(ThemesContext)
  const [running, updateRun] = useState(false)
  const buttonColor = props.theme.buttonColor
  const refId = useRef(null)
  
  useEffect(() => {
    refId.current = setInterval(() => {
      props.dispatch('increment')
    }, 1000)
  }, [running])
  
  const handleStart = () => {
    updateRun(true)
  }

  const handleStop = () => {
    updateRun(false)
  }

  const handleReset = () => {
    props.dispatch({type: 'reset'})
  }
  return (
    <div>
      <button onClick={handleStart} style={{background:buttonColor, color: "white", fontWeight: "bold"}}>Start</button>
      <button onClick={handleStop} style={{background:buttonColor, color: "white", fontWeight: "bold"}}>Stop</button>
      <button onClick={handleReset} style={{background:buttonColor, color: "white", fontWeight: "bold"}}>Reset</button>
    </div>
  )
}