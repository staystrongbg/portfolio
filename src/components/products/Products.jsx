import Product from '../product/Product';
import styled from 'styled-components';
import { mobile, tablet } from '../../responsive';
import { products } from '../../data'; //named import ne mora da bude default export
import { ReactComponent as Hyper } from '../../img/iconmonstr-link-1.svg';
import { useGlobalContext } from '../../context';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/swiper.min.css';
import './products.css';

const Pl = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  text-align: center;
  ${tablet({ padding: '10px' })};
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

  &:hover ${Hyperlink} {
    visibility: visible;
  }
`;

const Products = () => {
  const { isDark } = useGlobalContext();

  return (
    <Pl id='work'>
      <PlTexts>
        <a href='#work' style={{ color: isDark ? '#f1f1f4' : '#111' }}>
          <PlTitle>
            <Hyperlink /> Sites I've built
          </PlTitle>
        </a>
      </PlTexts>
      <Swiper
        autoplay={{
          delay: 4500,
          disableOnInteraction: true,
        }}
        modules={[Autoplay]}
        breakpoints={{
          360: { slidesPerView: 1 },
          480: { slidesPerView: 1, spaceBetween: 18 },
          768: { slidesPerView: 2, spaceBetween: 24 },
          960: { slidesPerView: 2, spaceBetween: 32 },
          1260: { slidesPerView: 3, spaceBetween: 42 },
          1650: { slidesPerView: 4, spaceBetween: 52 },
        }}
        spaceBetween={52}
        className='mySwiper'
      >
        {products.map((item) => (
          <SwiperSlide className='mySwiperSlide' key={item.id}>
            <Product img={item.img} link={item.link} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Pl>
  );
};

export default Products;
