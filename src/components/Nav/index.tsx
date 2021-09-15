import * as S from "./styles";

const Nav = () => {
  return (
    <S.Nav>
      <input id="menu-toggle" type="checkbox" />
      <label htmlFor="menu-toggle">
        <div className="menu-hamburger">
          <span className="hamburger"></span>
        </div>
      </label>
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
        <a href="">Home</a>
        </li>
      </ul>
    </S.Nav>
  );
};

export default Nav;