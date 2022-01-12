import styled from 'styled-components';
import { Cbg } from '../contact/Contact';

const F = styled.div`
  width: 100%;
  position: relative;
  background-color: #000;
  height: 30px;
  text-align: center;
  color: #f2f2f2;
  p {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;
const FCbg = styled(Cbg)`
  background-color: darkgray;
  height: 30px;
`;
const Footer = () => {
  return (
    <F>
      <FCbg></FCbg>
      <p>devox &copy; 2021 </p>
    </F>
  );
};

export default Footer;
