import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  return (
    <StyledNav>
      <h2 className="sr-only">GNB</h2>
      <NavList>
        <NavItem>
          <StyledLink to="/">메인</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/surveylist">질문 리스트</StyledLink>
        </NavItem>
      </NavList>
    </StyledNav>
  );
};

export default Nav;

const StyledNav = styled.nav`
  /* 네비게이션 스타일 */
`;

const NavList = styled.ul`
  /* 리스트 스타일 */
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
`;

const NavItem = styled.li`
  /* 리스트 아이템 스타일 */
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }
`;

const StyledLink = styled(Link)`
  /* 링크 스타일 */
  text-decoration: none;
  color: #000;

  &:hover {
    color: #007bff;
  }
`;
