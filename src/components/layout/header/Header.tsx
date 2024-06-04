import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import Nav from "./Nav";

function Header() {
  return (
    <StyledHeader>
      <h1>
        <Link to={"/"}>
          <Image src="/logo.webp" alt="캐치시큐" />
        </Link>
      </h1>
      <Nav></Nav>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 50px;
`;

const Image = styled.img`
  display: block;
  width: 256px;
  height: 256px;
`;

export default Header;
