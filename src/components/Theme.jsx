import React, {useContext, useEffect} from 'react'
import { ThemesContext } from '../App'


export default function Theme(props) {
  const themes = useContext(ThemesContext)

  const handleClick = () => {
    
    if (props.theme.button === 'sun') {
      props.updateTheme(themes.dark)
    } else {
      props.updateTheme(themes.light)
    }
  }
  const darkBtn = <button onClick={handleClick} className='fa-solid fa-moon fa-2x' style={{background: 'none'}}></button>
  const lightBtn = <button onClick={handleClick} className='fa-solid fa-sun fa-2x' style={{background: 'none', color: 'yellow'}}></button>

  
  return (
    <div>
      {props.theme.button === 'sun' ? darkBtn : lightBtn}
    </div>
  )
}