import styled from 'styled-components';

const F = styled.div`
  width: 100%;
  position: relative;
  background-color: ${({ theme }) => theme.colors.sucmurastaDark};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.sucmurasta};
`;

const Footer = () => {
  return (
    <F>
      <p>devox &copy; 2022 </p>
    </F>
  );
};

export default Footer;
