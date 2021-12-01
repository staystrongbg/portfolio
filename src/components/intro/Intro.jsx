import './intro.css';
import { useGlobalContext } from '../../context';
import { ReactComponent as Ninja } from '../../img/3276834.svg';
import { ReactComponent as Scroll } from '../../img/C.svg';
import styled from 'styled-components';
import { Cbg } from '../contact/Contact';

const ITitleItem = styled.div`
  height: 50px;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  align-items: center;
  color: ${({ isDark }) => (isDark ? '#f3de2c' : 'crimson')};
`;
const ICbg = styled(Cbg)`
  background-color: crimson;
`;

const INinja = styled(Ninja)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* position: absolute; */
  g {
    fill: ${({ isDark, color }) => (!isDark ? color : '#000')};
  }
`;

const Intro = () => {
  const { isDark } = useGlobalContext();

  const titles = [
    'Web Developer',
    'UI/UX Designer',
    'Content Creator',
    'Graphic Designer',
  ];

  return (
    <div className='i' id='home'>
      <ICbg></ICbg>
      <div className='i-left'>
        <div className='i-left-wrapper'>
          <h2 className='i-intro'>Hello my name is</h2>
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
        <Scroll
          style={{ fill: isDark ? '#f5ced6' : '#333' }}
          className='i-scroll'
        />
      </div>
      <div className='i-right'>
        <INinja isDark={isDark} color='#333' />
      </div>
    </div>
  );
};

export default Intro;
