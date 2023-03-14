import styled from "styled-components";
import { useGlobalContext } from "../../context";

const F = styled.div`
  width: 100%;
  position: relative;
  background: ${({ theme, isDark }) =>
    isDark ? theme.colors.bg : theme.colors.colorLight};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme, isDark }) =>
    isDark ? theme.colors.colorLight : theme.colors.bg};
`;

const Footer = () => {
  const { isDark } = useGlobalContext();
  return (
    <F isDark={isDark}>
      <p>devox &copy; 2022 </p>
    </F>
  );
};

export default Footer;
