import React, { Component } from 'react';
import styled, { ThemeProps } from 'styled-components';
import { connect } from 'react-redux';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import NewItemBar from 'components/organism/NewItemBar/NewItemBar';
import plusIcon from 'assets/icons/plus.svg';
import withContext from 'hoc/withContext';
import UserPageTemplate from './UserPageTemplate';
import { MyTheme } from '../theme/mainTheme';
import { State } from '../reducers';
import Loading from '../components/atoms/Loading/Loading';

const StyledWrapper = styled.div`
  position: relative;
  padding: 25px 150px 25px 70px;
  min-height: 100vh;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 85px;

  @media (max-width: 1500px) {
    grid-gap: 45px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
  grid-gap: 85px;
`;

const StyledPageHeader = styled.div`
  margin: 25px 0 50px 0;
`;

const StyledHeading = styled(Heading)`
  margin: 25px 0 0 0;

  ::first-letter {
    text-transform: uppercase;
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0;
  font-weight: ${({ theme }) => theme.bold};
`;

type ButtonIconProps = {
  activeColor: string;
};

const StyledButtonIcon = styled(ButtonIcon)<ButtonIconProps>`
  position: fixed;
  bottom: 40px;
  right: 40px;
  background-color: ${({ activeColor, theme }: ButtonIconProps & ThemeProps<MyTheme>) =>
    // @ts-ignore
    theme[activeColor]};
  background-size: 40%;
  border-radius: 50%;
  z-index: 110;
`;

const StyledNotification = styled(Heading)`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  text-align: center;
  color: ${({ theme }) => theme.black07};

  ::first-letter {
    text-transform: uppercase;
  }
`;

const StyledLoading = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  padding-top: 24px;
`;

type GridProps = {
  cardsAmount: number;
  pageContext: string;
  isLoading: boolean;
  isError: boolean;
};

class GridTemplate extends Component<GridProps> {
  state = {
    isNewBarVisible: false,
  };

  toggleNewItemBar = () => {
    this.setState((prevState: any) => ({
      isNewBarVisible: !prevState.isNewBarVisible,
    }));
  };

  render() {
    const { children, cardsAmount, pageContext, isLoading, isError } = this.props;
    const { isNewBarVisible } = this.state;

    return (
      <UserPageTemplate>
        <StyledWrapper>
          <StyledPageHeader>
            <Input search placeholder="search" />
            <StyledHeading big as="h1">
              {pageContext}
            </StyledHeading>
            <StyledParagraph>
              {cardsAmount} {pageContext}
            </StyledParagraph>
          </StyledPageHeader>
          {isError || isLoading ? (
            <>
              {isError && <StyledNotification big>Something go wrong :(</StyledNotification>}
              {isLoading && (
                <StyledLoading>
                  <Loading />
                </StyledLoading>
              )}
            </>
          ) : (
            <>{!cardsAmount && <StyledNotification big>{pageContext} are empty. Add something</StyledNotification>}</>
          )}
          <StyledGrid>{children}</StyledGrid>
          <StyledButtonIcon onClick={this.toggleNewItemBar} icon={plusIcon} activeColor={pageContext} />
          <NewItemBar handleClose={this.toggleNewItemBar} isVisible={isNewBarVisible} />
        </StyledWrapper>
      </UserPageTemplate>
    );
  }
}

const mapStateToProps = ({ isLoading, isError }: State) => ({
  isLoading,
  isError,
});

export default connect(mapStateToProps)(withContext(GridTemplate));
