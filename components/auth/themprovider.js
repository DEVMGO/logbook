import React, { createContext, useState } from "react";

export const THEME_TYPE = {
    ADMIN: "digilogbook",
    MORABI: "morabi",
    KHALABAN: "khalaban",
    ANJOMAN: "anjoman",
};

export const ThemeContext = createContext(THEME_TYPE.USER)

const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState(THEME_TYPE.USER)

  return (
    <ThemeContext.Provider value={{themeMode, setThemeMode}}>
      {children}
    </ThemeContext.Provider>
  )
};

export default ThemeProvider;