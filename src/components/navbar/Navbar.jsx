import styled from 'styled-components';
import LogoDev from '../../img/logo_devox_x.png';

import { useState } from 'react';
import { useGlobalContext } from '../../context';

const Nav = styled.nav`
  background-color: ${({ isScrolled, isDark }) =>
    isScrolled && !isDark
      ? 'white'
      : isScrolled && isDark
      ? '#222'
      : 'transparent'};
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 50px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  transition: ease all 0.5s;
`;

const Logo = styled.img`
  transition: ease all 0.5s;
  border-radius: 10px;
  background-color: ${({ isDark }) => (isDark ? '#111' : 'whitesmoke')};
  padding: 0.5rem;
  position: absolute;
  left: 10px;
  top: 10px;
  width: ${({ isScrolled }) => (isScrolled ? '40px' : '80px')};
`;
const Links = styled.ul`
  padding-left: 0;
  display: flex;
  gap: 20px;
`;

const Link = styled.li`
  list-style: none;
`;

const A = styled.a`
  text-decoration: none;
  color: ${({ isDark }) => (isDark ? '#888' : '#222')};
  font-weight: bold;
`;
const Navbar = () => {
  const { isDark } = useGlobalContext();

  const [isScrolled, setIsScrolled] = useState(false);

  const scrolled = () => {
    if (window.pageYOffset > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  window.addEventListener('scroll', scrolled);

  return (
    <Nav isScrolled={isScrolled} isDark={isDark}>
      <Logo isScrolled={isScrolled} isDark={isDark} src={LogoDev} />
      <Links>
        <Link>
          <A isDark={isDark} href='#home'>
            Home
          </A>
        </Link>
        <Link>
          <A isDark={isDark} href='#about'>
            About
          </A>
        </Link>
        <Link>
          <A isDark={isDark} href='#work'>
            My Work
          </A>
        </Link>
        <Link>
          <A isDark={isDark} href='#contact'>
            Contact
          </A>
        </Link>
      </Links>
    </Nav>
  );
};

export default Navbar;
