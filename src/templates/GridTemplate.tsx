import React, { ChangeEvent, Component, ReactChildren, ReactElement, ReactNode } from 'react';
import styled, { css, ThemeProps } from 'styled-components';
import { connect } from 'react-redux';
import { MyTheme } from 'theme/mainTheme';
import { State } from 'reducers';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import NewItemBar from 'components/organism/NewItemBar/NewItemBar';
import plusIcon from 'assets/icons/plus.svg';
import withContext from 'hoc/withContext';
import Loading from 'components/atoms/Loading/Loading';
import UserPageTemplate from './UserPageTemplate';

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
  activecolor: string;
  rotated: boolean;
};

const StyledButtonIcon = styled(ButtonIcon)<ButtonIconProps>`
  position: fixed;
  bottom: 40px;
  right: 40px;
  background-color: ${({ activecolor, theme }: ButtonIconProps & ThemeProps<MyTheme>) =>
    // @ts-ignore
    theme[activecolor]};
  background-size: 40%;
  border-radius: 50%;
  z-index: 110;

  transform: rotate(${({ rotated }) => (rotated ? '45deg' : '0')});
  transition: transform 150ms ease-in-out;
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
  children: ReactNode;
  pageContext: string;
  isLoading: boolean;
  isError: boolean;
};

class GridTemplate extends Component<GridProps> {
  state = {
    isNewBarVisible: false,
    cards: [],
    value: '',
    resetFunction: () => null,
  };

  componentDidMount() {
    this.setBasicCard();
  }

  componentDidUpdate(prevProps: Readonly<GridProps>) {
    const { children } = this.props;
    if (prevProps.children !== children) {
      this.setBasicCard();
    }
  }

  toggleNewItemBar = () => {
    this.setState((prevState: any) => ({
      isNewBarVisible: !prevState.isNewBarVisible,
    }));

    this.handleResetForm();
  };

  setBasicCard = () => {
    const { children } = this.props;

    this.setState({
      cards: [...(children as Array<ReactChildren>)],
      value: '',
    });
  };

  addResetFunction = (resetFunction: any) => {
    this.setState({ resetFunction });
  };

  handleResetForm = () => {
    const { resetFunction, isNewBarVisible } = this.state;

    if (resetFunction && !isNewBarVisible) {
      resetFunction();
    }
  };

  handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const { children } = this.props;

    const childrenArray = [...(children as Array<ReactElement>)];

    if (childrenArray.length) {
      this.setState({
        cards: childrenArray.filter((item) => item.props.title.indexOf(e.target.value) !== -1),
        value: e.target.value,
      });
    }
  };

  render() {
    const { pageContext, isLoading, isError } = this.props;
    const { isNewBarVisible, cards, value } = this.state;
    const itemsAmountInfo = `${cards.length} ${
      cards.length === 1 ? pageContext.substr(0, pageContext.length - 1) : pageContext
    }`;

    return (
      <UserPageTemplate>
        <StyledWrapper>
          <StyledPageHeader>
            <Input search placeholder="search" value={value} onChange={(event) => this.handleSearch(event)} />
            <StyledHeading big as="h1">
              {pageContext}
            </StyledHeading>
            <StyledParagraph>{itemsAmountInfo}</StyledParagraph>
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
            <>{!cards.length && <StyledNotification big>{pageContext} are empty. Add something</StyledNotification>}</>
          )}
          <StyledGrid>{cards}</StyledGrid>
          <StyledButtonIcon
            rotated={isNewBarVisible}
            onClick={this.toggleNewItemBar}
            icon={plusIcon}
            activecolor={pageContext}
          />
          <NewItemBar
            handleResetForm={this.addResetFunction}
            handleClose={this.toggleNewItemBar}
            isVisible={isNewBarVisible}
          />
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
