import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 90%;
  margin: 0 auto;
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 50%;
  margin: 1rem;
  padding: 0.2rem;

  font-family: Amatic SC;
  font-style: normal;
  font-weight: bold;
  font-size: 1.5rem;
`;

function Header(props) {
  return (
    <Wrapper>
      <Navigation>
        <Link className="header-link" to="/home">
          Home
        </Link>
        <Link className="header-link" to="/about">
          About
        </Link>
        <Link id="login" className="header-link" to="/login">
          Login
        </Link>
      </Navigation>
    </Wrapper>
  );
}

export default Header;
