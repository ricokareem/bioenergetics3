import React from "react";
import styled from "styled-components";
// import { Icon } from 'expo';

const StyledHeader = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 15px;
  padding-top: 60px;
  padding-bottom: 15px;
  background-color: #fff;
`;

const StarLogo = styled.Text`
  font-weight: bold;
  font-size: 24px;
  color: #fb8400;
`;

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <StarLogo>✸</StarLogo>
    </StyledHeader>
  );
};

export default Header;
