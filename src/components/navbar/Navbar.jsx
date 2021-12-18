import { mobile } from '../../responsive';
import styled from 'styled-components';
import { useGlobalContext } from '../../context';
import { Cbg } from '../contact/Contact';
import ToggleDark from '../toggleDark/ToggleDark';

const Nav = styled.nav`
  background-color: ${({ isScrolled, isDark, theme }) =>
    isScrolled && !isDark
      ? theme.colors.colorLight
      : isScrolled && isDark
      ? theme.colors.bg2
      : 'transparent'};
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: ${({ isScrolled, theme }) => isScrolled && theme.colors.shadow};
  -webkit-box-shadow: ${({ isScrolled, theme }) =>
    isScrolled && theme.colors.shadow};
  gap: 50px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  transition: ease all 0.5s;
  ${mobile({ justifyContent: 'flex-start', paddingLeft: '15px' })}
  animation: ${({ isScrolled }) => isScrolled && 'slideDown 0.3s ease'};
`;

const Links = styled.ul`
  padding-left: 0;
  display: flex;
  gap: 20px;
  height: 100%;
  ${mobile({ gap: '0px' })}
`;

const Link = styled.li`
  list-style: none;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  border-bottom: 4px solid transparent;
  position: relative;
`;

const ArrowUp = styled.div`
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid black;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;

const A = styled.a`
  text-decoration: none;
  color: ${({ isDark, theme }) =>
    isDark ? theme.colors.gray : theme.colors.darkGray};
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
            style={
              {
                // borderBottom: `${isActive === link.id ? '4px solid #000' : ''}`,
              }
            }
          >
            <A
              onClick={() => setIsActive(link.id)}
              style={{
                color: `${isDark ? '#fff' : '#222'}`,
              }}
              {...props}
              href={`#${link.href.toLowerCase()}`}
            >
              {link.href}
            </A>
            <ArrowUp
              style={{
                visibility: `${isActive === link.id ? 'visible' : 'hidden'}`,
              }}
            />
          </Link>
        ))}
      </Links>
      <ToggleDark />
    </Nav>
  );
};

export default Navbar;
