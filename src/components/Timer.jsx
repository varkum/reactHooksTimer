import React, { useState, useEffect, useRef, useContext, useReducer } from 'react'
import timerReducer from '../reducers/timerReducer'
import Controls from './Controls'


export default function Timer(props) {
  
  const [time, dispatch] = useReducer(timerReducer, 0)
  
  return (
    <div style={{color: props.theme.textColor}}>
      <h1>{time}</h1>
      <Controls time={time} dispatch={dispatch} theme={props.theme} />
      
    </div>
  )
}