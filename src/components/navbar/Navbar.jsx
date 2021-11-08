import { mobile } from '../../responsive';
import styled from 'styled-components';
import { useGlobalContext } from '../../context';
import { Cbg } from '../contact/Contact';
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
  box-shadow: ${({ isScrolled }) =>
    isScrolled &&
    '0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0)'};
  -webkit-box-shadow: ${({ isScrolled }) =>
    isScrolled &&
    '0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0)'};
  gap: 50px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  transition: ease all 0.5s;
  ${mobile({ justifyContent: 'flex-start', paddingLeft: '15px' })}
`;

const Links = styled.ul`
  padding-left: 0;
  display: flex;
  gap: 20px;
  height: 100%;
`;

const Link = styled.li`
  list-style: none;
  padding: 5px 10px;
  display: flex;
  align-items: center;
`;

const A = styled.a`
  text-decoration: none;
  color: ${({ isDark }) => (isDark ? '#888' : '#222')};
  font-weight: bold;
`;
const Navbar = () => {
  const { isDark, isScrolled, isActive, setIsActive } = useGlobalContext();

  const liList = [
    { id: 1, href: 'Home' },
    { id: 2, href: 'About' },
    { id: 3, href: 'Work' },
    { id: 4, href: 'Contact' },
  ];

  return (
    <Nav isScrolled={isScrolled} isDark={isDark}>
      <Cbg />
      <Links>
        {liList.map((link) => (
          <Link
            key={link.id}
            style={{ background: `${isActive === link.id ? '#000' : ''}` }}
          >
            <A
              onClick={() => setIsActive(link.id)}
              style={{ color: `${isActive === link.id ? '#fff' : ''}` }}
              isDark={isDark}
              href={`#${link.href.toLowerCase()}`}
            >
              {link.href}
            </A>
          </Link>
        ))}
      </Links>
    </Nav>
  );
};

export default Navbar;
