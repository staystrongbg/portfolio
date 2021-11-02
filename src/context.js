import { useContext, createContext, useState } from 'react';

const ThemeContext = createContext();

const AppProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);
  const toggleMode = (toggle) => {
    setIsDark(!isDark);
    toggle.lastChild.style.left = isDark ? '0' : '25px';
  };

  const [isScrolled, setIsScrolled] = useState(false);

  const scrolled = () => {
    if (window.pageYOffset > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  window.addEventListener('scroll', scrolled);

  return (
    <ThemeContext.Provider value={{ isDark, toggleMode, isScrolled, scrolled }}>
      {children}
    </ThemeContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(ThemeContext);
};
export { ThemeContext, AppProvider };
