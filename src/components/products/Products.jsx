import Product from '../product/Product';
import styled from 'styled-components';
import { mobile, tablet } from '../../responsive';
import { products } from '../../data'; //named import ne mora da bude default export

const Pl = styled.div`
  padding: 50px 100px;
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
const PlList = styled.div`
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
      <PlTexts>
        <PlTitle>Create & inspire.</PlTitle>
        <PlDesc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          fugit explicabo tenetur perferendis sapiente dolore recusandae
          facilis, voluptate qui repellat, sit consectetur, dolor asperiores.
          Minus, a. Aut, numquam. Accusantium, expedita.
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
