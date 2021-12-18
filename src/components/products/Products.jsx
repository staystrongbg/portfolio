import Product from '../product/Product';
import styled from 'styled-components';
import { mobile, tablet } from '../../responsive';
import { products } from '../../data'; //named import ne mora da bude default export
import { Cbg } from '../contact/Contact';
import { ReactComponent as Hyper } from '../../img/iconmonstr-link-1.svg';
import { useGlobalContext } from '../../context';

const PCbg = styled(Cbg)`
  background-color: ${({ theme }) => theme.colors.darkGray};
  top: 0;
`;

const Pl = styled.div`
  padding: 50px 100px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  ${tablet({ padding: '10px' })}
`;

const PlTexts = styled.div`
  width: 65%;
  ${mobile({ width: '100%' })}
`;
const Hyperlink = styled(Hyper)`
  visibility: hidden;
`;
const PlTitle = styled.h1`
  font-size: 50px;
  font-weight: 600;
  a {
    font-size: 50px;
    font-weight: 600;
    text-decoration: none;
  }
  &:hover ${Hyperlink} {
    visibility: visible;
  }
`;

const PlDesc = styled.p`
  margin: 20px 0px;
  ${mobile({ display: 'none' })}
`;
const PlList = styled('div')`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  ${mobile({ justifyContent: 'center' })}
  ${tablet({ justifyContent: 'center' })}
`;

const Products = () => {
  const { isDark } = useGlobalContext();
  return (
    <Pl id='work'>
      <PCbg />
      <PlTexts>
        <PlTitle>
          <a href='#work' style={{ color: isDark ? '#f1f1f4' : '#111' }}>
            <Hyperlink /> Content i created
          </a>
        </PlTitle>
        <PlDesc>
          Here is some of my work. On some projects i worked as Web Developer,
          on others, as a Graphic Designer.
        </PlDesc>
      </PlTexts>
      <PlList>
        {products.map((item) => (
          <Product img={item.img} key={item.id} link={item.link} />
        ))}
      </PlList>
    </Pl>
  );
};

export default Products;
