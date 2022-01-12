import { useContext, createContext, useState } from 'react';

const ThemeContext = createContext();

const AppProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);
  const [isActive, setIsActive] = useState(1);

  const toggleMode = () => {
    setIsDark(!isDark);
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
    <ThemeContext.Provider
      value={{
        isDark,
        toggleMode,
        isScrolled,
        scrolled,
        isActive,
        setIsActive,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(ThemeContext);
};
export { ThemeContext, AppProvider };
