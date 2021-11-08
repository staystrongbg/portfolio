import './about.css';
import Ninja1 from '../../img/20200404_153512.jpg';
import { Cbg } from '../contact/Contact';
import styled from 'styled-components';
import { ReactComponent as Hyperlink } from '../../img/iconmonstr-link-1.svg';

const ACbg = styled(Cbg)`
  background-color: #f3de2c;
`;

const About = () => {
  document.title = 'devox-portfolio';
  return (
    <div className='a' id='about'>
      <ACbg />
      <div className='a-left'>
        <div className='a-card bg'></div>
        <div className='a-card'>
          <img src={Ninja1} alt='' className='a-img' />
        </div>
      </div>
      <div className='a-right'>
        <h1 className='a-title'>
          <Hyperlink /> About Me
        </h1>
        <p className='a-desc'>
          I work hard to attain best knowledge in Modern JavaScript, ReactJS
          aswell as Modern Design. I'm passionate about creating stuff!
        </p>
      </div>
    </div>
  );
};

export default About;
