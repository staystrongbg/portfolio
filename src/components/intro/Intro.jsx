import './intro.css';
import { useGlobalContext } from '../../context';
import Ninja from '../../img/3276834.svg';
import ScrollImg from '../../img/scroll.png';
import styled from 'styled-components';

const ITitleItem = styled.div`
  height: 50px;
  font-size: 30px;
  font-weight: bold;
  color: crimson;
  display: flex;
  align-items: center;
  color: ${({ isDark }) => isDark && '#f3de2c'};
`;

const Intro = () => {
  const { isDark } = useGlobalContext();
  return (
    <div className='i' id='home'>
      <div className='i-left'>
        <div className='i-left-wrapper'>
          <h2 className='i-intro'>Hello my name is</h2>
          <h2 className='i-name'>Zoran</h2>
          <div className='i-title'>
            <div className='i-title-wrapper'>
              <ITitleItem isDark={isDark}>Web Developer</ITitleItem>
              <ITitleItem isDark={isDark}>UI/UX Designer</ITitleItem>
              <ITitleItem isDark={isDark}>Content Creator</ITitleItem>
              <ITitleItem isDark={isDark}>Graphic Designer</ITitleItem>
            </div>
          </div>
          <p className='i-desc'>
            I create small scale dynamic projects and Single Page Apps (SPA) for
            individual clients using JS, React, Styled-Components, React Router,
            Sass
          </p>
        </div>
        <img className='i-scroll' src={ScrollImg} alt='' width='50px' />
      </div>
      <div className='i-right'>
        <div className='i-bg'></div>
        <img src={Ninja} className='i-img' alt='' />
      </div>
    </div>
  );
};

export default Intro;
