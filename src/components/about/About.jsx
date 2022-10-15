import './about.css';
import Ninja1 from '../../img/20200404_153512.jpg';
import styled from 'styled-components';
import { ReactComponent as Hyper } from '../../img/iconmonstr-link-1.svg';
import { useGlobalContext } from '../../context';

const Hyperlink = styled(Hyper)`
  visibility: hidden;
`;
const ATitle = styled.h1`
  font-weight: 600;
  font-size: 50px;
  a {
    font-weight: 600;
    font-size: 50px;
    text-decoration: none;
  }
  &:hover ${Hyperlink} {
    visibility: visible;
  }
`;

const About = () => {
  const { isDark } = useGlobalContext();
  document.title = 'devox-portfolio';
  return (
    <div className='a' id='about'>
      <div className='a-left'>
        <div className='a-card'>
          <div className='a-card bg' />
          <img src={Ninja1} alt='' className='a-img' />
        </div>
      </div>
      <div className='a-right'>
        <ATitle>
          <a href='#about' style={{ color: isDark ? '#f1f1f1' : '#111' }}>
            <Hyperlink /> About Me
          </a>
        </ATitle>
        <p className='a-desc'>
          I work hard to attain best knowledge in Modern JavaScript, ReactJS
          aswell as Modern Design. I'm passionate about creating stuff!
        </p>
      </div>
    </div>
  );
};

export default About;
