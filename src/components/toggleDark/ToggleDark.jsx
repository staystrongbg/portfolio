import './toggleDark.css';
import Sun from '../../img/sun.png';
import Moon from '../../img/moon.png';
import { useGlobalContext } from '../../context';
import { useRef } from 'react';

const ToggleDark = () => {
  const toggleEle = useRef();
  const { toggleMode } = useGlobalContext();
  return (
    <div
      ref={toggleEle}
      className='t'
      onClick={() => toggleMode(toggleEle.current)}
    >
      <img src={Sun} alt='' className='t-icon' />
      <img src={Moon} alt='' className='t-icon' />
      <div className='t-button'></div>
    </div>
  );
};

export default ToggleDark;
