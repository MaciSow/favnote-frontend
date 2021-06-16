import React from 'react';
import styled, { ThemeProps } from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { MyTheme } from 'theme/mainTheme';
import bulbIcon from 'assets/icons/bulb.svg';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import logoIcon from 'assets/icons/logo.svg';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import PropTypes from 'prop-types';

type Props = {
  activeColor: string;
};

const StyledWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  display: grid;
  grid-template-rows: 0.25fr 1fr 0.25fr;
  justify-content: center;
  width: 153px;
  height: 100vh;
  background-color: ${({ activeColor, theme }: Props & ThemeProps<MyTheme>) =>
    // @ts-ignore
    activeColor ? theme[activeColor] : 'white'};
`;

const StyledLogo = styled.img`
  width: 74px;
  margin-top: 48px;
`;

const StyledLogout = styled(ButtonIcon)`
  align-self: end;
`;

const StyledChooseBar = styled.div`
  margin: 12px 0;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  justify-content: center;
  height: 300px;
`;

const FuckingBulb = styled(ButtonIcon)`
  background-size: 40%;
`;

const Sidebar = ({ sideColor }: any) => (
  <StyledWrapper activeColor={sideColor}>
    <StyledLogo src={logoIcon} alt="FavNote" />
    <StyledChooseBar>
      <ButtonIcon exact as={NavLink} activeClassName="active" to="/" icon={penIcon} />
      <ButtonIcon as={NavLink} activeClassName="active" to="/twitters" icon={twitterIcon} />
      <FuckingBulb as={NavLink} activeClassName="active" to="/articles" icon={bulbIcon} />
    </StyledChooseBar>
    <StyledLogout as={NavLink} to="/login" icon={logoutIcon} />
  </StyledWrapper>
);

Sidebar.propTypes = {
  sideColor: PropTypes.oneOf(['note', 'twitter', 'article']),
};

Sidebar.defaultProps = {
  sideColor: 'note',
};

export default Sidebar;
