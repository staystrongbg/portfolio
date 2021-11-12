import { mobile } from '../../responsive';
import styled from 'styled-components';
import { useGlobalContext } from '../../context';
import { Cbg } from '../contact/Contact';
import ToggleDark from '../toggleDark/ToggleDark';

const Nav = styled.nav`
  background-color: ${({ isScrolled, isDark }) =>
    isScrolled && !isDark
      ? 'white'
      : isScrolled && isDark
      ? 'rgba(12, 13, 18,0.9)'
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
  animation: ${({ isScrolled }) => isScrolled && 'slideDown 1s ease'};
`;

const Links = styled.ul`
  padding-left: 0;
  display: flex;
  gap: 20px;
  height: 100%;
  ${mobile({ gap: '10px' })}
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

  let props = {
    isDark,
    isActive,
    isScrolled,
  };

  return (
    <Nav {...props}>
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
              {...props}
              href={`#${link.href.toLowerCase()}`}
            >
              {link.href}
            </A>
          </Link>
        ))}
      </Links>
      <ToggleDark />
    </Nav>
  );
};

export default Navbar;
