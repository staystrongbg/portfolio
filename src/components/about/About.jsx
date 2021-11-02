import './about.css';
import Ninja1 from '../../img/20200404_153512.jpg';

const About = () => {
  document.title = 'devox-portfolio';
  return (
    <div className='a' id='about'>
      <div className='a-left'>
        <div className='a-card bg'></div>
        <div className='a-card'>
          <img src={Ninja1} alt='' className='a-img' />
        </div>
      </div>
      <div className='a-right'>
        <h1 className='a-title'>About Me</h1>
        <p className='a-desc'>
          I work hard to attain best knowledge in Modern JavaScript, ReactJS
          aswell as Modern Design. I'm passionate about making things!
        </p>
      </div>
    </div>
  );
};

export default About;
