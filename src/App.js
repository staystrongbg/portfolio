import Intro from './components/intro/Intro';
import About from './components/about/About';
import Products from './components/products/Products';
import Contact from './components/contact/Contact';
import { GlobalStyles } from './components/GlobalStyles';
import { useGlobalContext } from './context';
import Navbar from './components/navbar/Navbar';
import { ThemeProvider } from 'styled-components';
import Footer from './components/ footer/footer';

function App() {
  const { isDark } = useGlobalContext();

  const theme = {
    colors: {
      bg: 'radial-gradient(at left top, rgb(13, 32, 18) 0%, rgb(0, 9, 107) 100%)',
      bg2: '#222',
      colorLight: '#f1f1f4',
      colorDark: '#111',
      yellowColor: '#f3de2c',
      shadow: '0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0)',
      sucmurasta: 'rgba(215,215,205,0.9  )',
      sucmurastaDark: 'rgba(12, 13, 18,0.9)',
      gray: '#888',
      darkGray: '#222',
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          background: isDark ? theme.colors.bg2 : theme.colors.colorLight,
          color: isDark ? theme.colors.colorLight : theme.colors.colorDark,
        }}
      >
        <GlobalStyles />
        <Navbar />
        <Intro />
        <About />
        <Products />
        <Contact />
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
