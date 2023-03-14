import "./intro.css";
import { useGlobalContext } from "../../context";
import { ReactComponent as Scroll } from "../../img/C.svg";
import Code from "../../img/darrrk.png";
import styled from "styled-components";

const ITitleItem = styled.div`
  height: 50px;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  align-items: center;
  color: ${({ isDark }) => (isDark ? "#f3de2c" : "crimson")};
`;

const Intro = () => {
  const { isDark } = useGlobalContext();

  const titles = ["Javascript Developer"];

  return (
    <div className="i" id="home">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Welcome! I am</h2>
          <h2 className="i-name">Zoran</h2>
          <div className="i-title">
            <div className="i-title-wrapper">
              {titles.map((title, index) => (
                <ITitleItem key={index} isDark={isDark}>
                  {title}
                </ITitleItem>
              ))}
            </div>
          </div>
          <p className="i-desc">
            <b>FullStack developer</b> based in Belgrade/Serbia <br /> I develop
            fast dynamic websites and Single Page Aplications using latest Web
            Technologies
          </p>
        </div>
        <Scroll
          style={{ fill: isDark ? "#f5ced6" : "#333" }}
          className="i-scroll"
        />
      </div>
      <div className="i-right">
        <img
          src={Code}
          alt=""
          style={{ border: !isDark && "2px solid lightgray" }}
        />
      </div>
    </div>
  );
};

export default Intro;
