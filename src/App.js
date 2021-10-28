import Intro from './components/intro/Intro';
import About from './components/about/About';
import Products from './components/products/Products';
import Contact from './components/contact/Contact';
import ToggleDark from './components/toggleDark/ToggleDark';
import { useGlobalContext } from './context';

function App() {
  const { isDark } = useGlobalContext();

  return (
    <div
      style={{
        backgroundColor: isDark ? '#222' : '#fff',
        color: isDark ? '#f1f1f4' : '#111',
      }}
    >
      <ToggleDark />
      <Intro />
      <About />
      <Products />
      <Contact />
    </div>
  );
}

export default App;
