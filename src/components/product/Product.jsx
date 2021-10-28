import styled from 'styled-components';
import { mobile, tablet } from '../../responsive';
import { useGlobalContext } from '../../context';

const P = styled.div`
  width: 30%;
  height: 40vh;
  margin: 20px 10px;
  border: 2px solid ${({ isDark }) => (isDark ? '#333' : '#f3f2f2')};
  border-radius: 10px 10px 0px 0px;
  overflow: hidden;
  transition: all 0.5s ease;
  box-shadow: ${({ isDark }) =>
    isDark ? ' 4px 4px 10px #111' : '4px 4px 10px #888'};
  &:hover {
    transform: scale(1.15) rotate(-2deg);
  }
  ${mobile({ height: '20vh', width: '40%' })}
`;
const Pbrowser = styled.div`
  height: 30px;
  background-color: rgb(243, 242, 242);
  display: flex;
  align-items: center;
  position: sticky;
  z-index: 2;
`;
const Pcircle = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin: 3px;
  background-color: #${({ bg }) => bg};
  ${tablet({ width: '6px', height: '6px' })}
`;

const Link = styled.a``;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Product = ({ img, link }) => {
  const { isDark } = useGlobalContext();
  return (
    <P isDark={isDark}>
      <Pbrowser>
        <Pcircle bg='F3DE2C' />
        <Pcircle bg='4BB3FD' />
        <Pcircle bg='EF233C' />
      </Pbrowser>
      <Link href={link} target='_blank' rel='noreferrer'>
        <Img src={img} />
      </Link>
    </P>
  );
};

export default Product;
