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
import withContext from 'hoc/withContext';
import { connect } from 'react-redux';
import { logout as logoutAction, TAction, TDispatch } from 'actions/actions';

type Props = {
  activecolor: string;
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
  background-color: ${({ activecolor, theme }: Props & ThemeProps<MyTheme>) =>
    // @ts-ignore
    activecolor ? theme[activecolor] : 'white'};
`;

const StyledLogo = styled(Link)`
  align-self: start;
  margin-top: 48px;
  width: 74px;
  height: 50px;
  background-image: url(${logoIcon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 100%;
`;

const StyledLogout = styled(ButtonIcon)`
  align-self: end;

  &:hover {
    background-size: 56%;
  }

  transition: 150ms ease-in-out;
`;

const StyledChooseBar = styled.div`
  margin: 12px 0;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  justify-content: center;
  height: 300px;
`;

const StyledButton = styled(ButtonIcon)`
  &:hover {
    &.active {
      background-size: 50%;
    }

    background-size: 60%;
  }

  transition: 150ms ease-in-out;
`;

const StyledBulbButton = styled(StyledButton)`
  background-size: 40%;

  &:hover {
    &.active {
      background-size: 40%;
    }

    background-size: 46%;
  }
`;

type SidebarProps = {
  pageContext?: 'notes' | 'twitters' | 'articles' | 'login';
  logout: TAction;
};

const Sidebar = ({ pageContext, logout }: SidebarProps) => (
  <StyledWrapper activecolor={pageContext as string}>
    <StyledLogo to="/" />
    <StyledChooseBar>
      <StyledButton as={NavLink} activeClassName="active" to="/notes" icon={penIcon} />
      <StyledButton as={NavLink} activeClassName="active" to="/twitters" icon={twitterIcon} />
      <StyledBulbButton as={NavLink} activeClassName="active" to="/articles" icon={bulbIcon} />
    </StyledChooseBar>
    <StyledLogout as={NavLink} to="/login" icon={logoutIcon} onClick={logout} />
  </StyledWrapper>
);

Sidebar.defaultProps = {
  pageContext: 'notes',
};

const mapDispatchToProps = (dispatch: TDispatch) => ({
  logout: () => dispatch(logoutAction()),
});

export default connect(null, mapDispatchToProps)(withContext(Sidebar));
