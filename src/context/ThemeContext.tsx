import { createContext, useContext, useState, type ReactNode } from "react";

// theme context with default theme value
// and a empty callback function to change theme
const ThemeContext = createContext({ theme: "light", toggle: () => {} });

// this is our theme provider
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // state variables for theme
  const [theme, setTheme] = useState("light");

  // theme toggle function
  const toggle = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    // wraping the children with context provider
    // and providing valus
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
