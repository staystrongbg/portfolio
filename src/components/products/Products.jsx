import Product from '../product/Product';
import styled from 'styled-components';
import { mobile, tablet } from '../../responsive';
import { products } from '../../data'; //named import ne mora da bude default export
import { Cbg } from '../contact/Contact';
import { ReactComponent as Hyperlink } from '../../img/iconmonstr-link-1.svg';

const PCbg = styled(Cbg)`
  background-color: #111;
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
const PlTitle = styled.h1`
  font-size: 50px;
  font-weight: 600;
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
  return (
    <Pl id='work'>
      <PCbg />
      <PlTexts>
        <PlTitle>
          <Hyperlink /> Content i created
        </PlTitle>
        <PlDesc>
          Here is some of my work. On some projects i worked as a Web Developer,
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
