import { useContext, createContext, useState } from 'react';

const ThemeContext = createContext();

const AppProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);
  const toggleMode = (e) => {
    setIsDark(!isDark);
    e.target.style.left = isDark ? '0' : '25px';
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(ThemeContext);
};
export { ThemeContext, AppProvider };
