import './intro.css';
import Me from '../../img/toppng.com-collection-of-free-person-drawing-pop-art-download-pop-art-man-1741x1784.png';
import ScrollImg from '../../img/scroll.png';
const Intro = () => {
  return (
    <div className='i' id='home'>
      <div className='i-left'>
        <div className='i-left-wrapper'>
          <h2 className='i-intro'>Hello my name is</h2>
          <h2 className='i-name'>Zoran</h2>
          <div className='i-title'>
            <div className='i-title-wrapper'>
              <div className='i-title-item'>Web Developer</div>
              <div className='i-title-item'>UI/UX Designer</div>
              <div className='i-title-item'>Content Creator</div>
              <div className='i-title-item'>Graphic Designer</div>
            </div>
          </div>
          <p className='i-desc'>
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services and
            online stores.
          </p>
        </div>
        <img className='i-scroll' src={ScrollImg} alt='' width='50px' />
      </div>
      <div className='i-right'>
        <div className='i-bg'></div>
        <img src={Me} className='i-img' alt='' />
      </div>
    </div>
  );
};

export default Intro;
