import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
`;

export const Box = styled.div`
  min-height: 15px;
  margin-right: 10px;
  padding: 5px;
  background: purple;
`;

export const Link = styled(NavLink)`
  display: block;
  text-align: center;
  color: white;
  text-decoration: none;
`;
