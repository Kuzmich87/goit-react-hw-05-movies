import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  color: #c4c4c4;
  background-color: #c47c2f;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: left;
  font-size: 24px;
  padding: 24px 0;
  margin-left:50px;
`;

export const NavItem = styled.li`
  & + & {
    margin-left: 24px;
  }
`;

export const Link = styled(NavLink)`
  &.active {
    color: #288c1f;
  }
  cursor: pointer;
`;