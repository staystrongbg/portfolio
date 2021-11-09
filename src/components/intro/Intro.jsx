import './intro.css';
import { useGlobalContext } from '../../context';
import Ninja from '../../img/3276834.svg';
import ScrollImg from '../../img/scroll.png';
import styled from 'styled-components';
import { Cbg } from '../contact/Contact';

const ITitleItem = styled.div`
  height: 50px;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  align-items: center;
  color: #f5ced6;
  color: ${({ isDark }) => (isDark ? '#f3de2c' : 'crimson')};
`;
const ICbg = styled(Cbg)`
  background-color: crimson;
`;
const Intro = () => {
  const { isDark } = useGlobalContext();

  const titles = [
    'Web Developer',
    'UI/UX Designer',
    'Content Createor',
    'Graphic Designer',
  ];
  return (
    <div className='i' id='home'>
      <ICbg></ICbg>
      <div className='i-left'>
        <div className='i-left-wrapper'>
          <h2 className='i-intro'>Hello, my name is</h2>
          <h2 className='i-name'>Zoran</h2>
          <div className='i-title'>
            <div className='i-title-wrapper'>
              {titles.map((title, index) => (
                <ITitleItem key={index} isDark={isDark}>
                  {title}
                </ITitleItem>
              ))}
            </div>
          </div>
          <p className='i-desc'>
            I create small scale dynamic projects and Single Page Apps (SPA) for
            individual clients using JS/React/Sass
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
