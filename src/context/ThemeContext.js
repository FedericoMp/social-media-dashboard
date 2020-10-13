import React, {createContext, useState} from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {

  const [theme, setTheme] = useState({ isDark: true })

  const toogleTheme = () => {
    setTheme({ ...theme, isDark: !theme.isDark })
  }

  return (
    <ThemeContext.Provider value={{theme, toogleTheme}}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider;