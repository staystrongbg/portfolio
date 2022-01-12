import { ReactComponent as Sun } from '../../img/iconmonstr-weather-1.svg';
import { ReactComponent as Moon } from '../../img/iconmonstr-weather-114.svg';
import { useGlobalContext } from '../../context';
import { useRef } from 'react';
import styled from 'styled-components';

const ToggleWrapper = styled('div')`
  width: 50px;
  height: 25px;
  border-radius: 20px;
  border: 1px solid #999;
  background-color: #fff;
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 9999;
  svg {
    width: 15px;
    height: 15px;
  }
`;

const TButton = styled.button`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #1e3888;
  position: absolute;
  transition: all ease 0.3s;
  left: ${({ isDark }) => (isDark ? '25px' : '0px')}}};
`;

const ToggleDark = () => {
  const toggleEle = useRef();
  const { toggleMode, isDark } = useGlobalContext();
  return (
    <ToggleWrapper ref={toggleEle} onClick={toggleMode}>
      <Sun />
      <Moon />
      <TButton isDark={isDark}></TButton>
    </ToggleWrapper>
  );
};

export default ToggleDark;
