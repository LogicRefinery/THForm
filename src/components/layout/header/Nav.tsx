import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  return (
    <StyledNav>
      <h2 className="sr-only">GNB</h2>
      <NavList>
        <NavItem>
          <StyledNavLink to="/">캐치폼 생성</StyledNavLink>
        </NavItem>

        <NavItem>
          <StyledNavLink to="/surveylist">캐치폼 목록</StyledNavLink>
        </NavItem>
      </NavList>
    </StyledNav>
  );
};

export default Nav;

const StyledNav = styled.nav``;

const NavList = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
`;

const NavItem = styled.li`
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }
`;

const StyledNavLink = styled(NavLink)<{ mode?: string }>`
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  color: black;

  &.active {
    color: #007bff;
  }

  &:hover {
    color: #007bff;
  }
`;
