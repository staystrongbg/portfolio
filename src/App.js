import Intro from './components/intro/Intro';
import About from './components/about/About';
import Products from './components/products/Products';
import Contact from './components/contact/Contact';
import { useGlobalContext } from './context';
import Navbar from './components/navbar/Navbar';

function App() {
  const { isDark } = useGlobalContext();

  document.body.style = `background: ${isDark} ? 'radial-gradient(at left top, rgb(23, 32, 18) 0%, rgb(43, 9, 107) 100%)'
          : '#f1f1f4'`;
  return (
    <div
      style={{
        background: isDark
          ? 'radial-gradient(at left top, rgb(23, 32, 18) 0%, rgb(43, 9, 107) 100%)'
          : '#f1f1f4',
        color: isDark ? '#f1f1f4' : '#111',
      }}
    >
      <Navbar />
      <Intro />
      <About />
      <Products />
      <Contact />
    </div>
  );
}

export default App;
