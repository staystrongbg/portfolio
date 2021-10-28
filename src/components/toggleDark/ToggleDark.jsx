import './toggleDark.css';
import Sun from '../../img/sun.png';
import Moon from '../../img/moon.png';
import { useGlobalContext } from '../../context';

const ToggleDark = () => {
  const { toggleMode } = useGlobalContext();
  return (
    <div className='t'>
      <img src={Sun} alt='' className='t-icon' />
      <img src={Moon} alt='' className='t-icon' />
      <div className='t-button' onClick={(e) => toggleMode(e)}></div>
    </div>
  );
};

export default ToggleDark;
