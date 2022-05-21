import React, {useState, useEffect, useContext, useRef, useReducer} from 'react';
import './App.css';
import Controls from './components/Controls'
import Theme from './components/Theme'
import Timer from './components/Timer'


export const ThemesContext = React.createContext(null)


const themes = {
  dark: {
  background: "#121212",
  buttonColor: "purple",
  textColor: "#D3D3D3",
  button: "moon"
},
  light: {
  background: "white",
  buttonColor: "blue",
  textColor: "black",
  button: "sun"
}
}


function App() {
  const [theme, updateTheme] = useState(themes.light)

  useEffect(() => {
    const mainEl = document.querySelector('body')
    mainEl.setAttribute('style', 'background:' + theme.background)
  }, [theme])

  
  return (
    <main>
      <ThemesContext.Provider value={themes}>
        
      <Timer theme={theme} />
      <Theme theme={theme} updateTheme={updateTheme} />
        
      </ThemesContext.Provider>
    </main>
  );
}

export default App;