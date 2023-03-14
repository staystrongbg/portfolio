import styled from 'styled-components';
import { tablet } from '../../responsive';
import { useGlobalContext } from '../../context';

const P = styled.div`
  height: 360px;
  display: flex;
  flex-direction: column;
  border: 2px solid ${({ isDark }) => (isDark ? '#333' : '#f3f2f2')};
  transition: all 0.3s ease;
  box-shadow: ${({ isDark }) =>
    isDark ? ' 4px 4px 10px #111' : '4px 4px 10px #888'};

  &:hover {
    transform: scale(1.1) rotate(-2deg);
  }
`;
const Pbrowser = styled.div`
  height: 30px;
  background-color: ${({ isDark }) =>
    isDark ? '#111' : ' rgb(243, 242, 242)'};
  display: flex;
  align-items: center;
  position: sticky;
  z-index: 2;
  ${tablet({ zIndex: 0 })};
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
    <Link href={link} target='_blank' rel='noreferrer'>
      <P isDark={isDark}>
        <Pbrowser isDark={isDark}>
          <Pcircle bg='F3DE2C' />
          <Pcircle bg='4BB3FD' />
          <Pcircle bg='EF233C' />
        </Pbrowser>
        <Img src={img} />
      </P>
    </Link>
  );
};

export default Product;
