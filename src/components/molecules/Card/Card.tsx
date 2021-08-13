import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import styled, { css, ThemeProps } from 'styled-components';
import LinkIcon from 'assets/icons/link.svg';
import { MyTheme } from 'theme/mainTheme';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import { removeItem as removeItemAction, TDispatch, TRemoveItem } from 'actions/actions';
import withContext, { PageContextProps } from 'hoc/withContext';
import { basicTwitter } from 'data/cardContent';

type WrapperProps = {
  isHover: boolean;
};

const StyledWrapper = styled.div<WrapperProps>`
  min-height: 380px;
  min-width: 380px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-rows: 0.25fr 1fr;

  ${({ isHover }) =>
    isHover &&
    css`
      box-shadow: 0 4px 16px 8px hsl(0, 0%, 0%, 0.15);
      cursor: pointer;
    `}
  transition: 150ms ease-in-out;
`;

type AvatarProps = {
  avatarUrl?: string;
};

const StyledAvatar = styled.a<AvatarProps>`
  width: 86px;
  height: 86px;
  border: 5px solid ${({ theme }: ThemeProps<MyTheme>) => theme.twitters};
  border-radius: 50%;
  background-color: black;
  background-image: url(${({ avatarUrl }) => avatarUrl});
  background-size: 100%;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  position: absolute;
  right: 25px;
  top: 25px;
`;

const StyledLinkButton = styled.a`
  display: block;
  width: 47px;
  height: 47px;
  border-radius: 50%;
  background-size: 60%;
  background: white url(${LinkIcon}) no-repeat 50%;
  position: absolute;
  right: 25px;
  top: 25%;
`;

type InnerWrapperProps = {
  activecolor?: string;
  flex?: boolean;
};

const InnerWrapper = styled.div<InnerWrapperProps>`
  position: relative;
  padding: 17px 64px 17px 30px;
  background-color: ${({ activecolor, theme }: InnerWrapperProps & ThemeProps<MyTheme>) =>
    // @ts-ignore
    activecolor ? theme[activecolor] : 'white'};

  :first-of-type {
    z-index: 10;
  }

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;

const StyledHeading = styled(Heading)`
  margin: 5px 0 0;
`;

const StyledButton = styled(Button)`
  z-index: 100;

  &:hover {
    font-size: 1.2rem;
  }

  transition: 150ms ease-in-out;
`;

type CardProps = {
  title: string;
  twitterName?: string;
  twitterImg?: string;
  articleUrl?: string;
  content: string;
  id: string;
  removeItem: TRemoveItem;
} & PageContextProps;

type CardState = {
  redirect: boolean;
  isHover: boolean;
};

class Card extends Component<CardProps, CardState> {
  state = {
    redirect: false,
    isHover: false,
  };

  handleCardClick = () => this.setState({ redirect: true });

  handleMouseOver = () => {
    this.setState((prevState) => (prevState.isHover ? null : { isHover: true }));
  };

  handleMouseLeave = () => {
    this.setState({ isHover: false });
  };

  render() {
    const { pageContext, id, title, twitterName, twitterImg, articleUrl, content, removeItem } = this.props;
    const { redirect, isHover } = this.state;
    const imageLink = twitterImg && twitterImg !== '' ? twitterImg : basicTwitter;

    if (redirect) {
      return <Redirect to={`${pageContext}/${id}`} />;
    }

    return (
      <StyledWrapper isHover={isHover}>
        <InnerWrapper
          activecolor={pageContext}
          onClick={this.handleCardClick}
          onMouseOver={this.handleMouseOver}
          onMouseLeave={this.handleMouseLeave}
        >
          <StyledHeading>{title}</StyledHeading>
          {pageContext === 'twitters' && (
            <StyledAvatar avatarUrl={imageLink} href={`https://twitter.com/${twitterName}`} target="_blank" />
          )}
          {pageContext === 'articles' && <StyledLinkButton href={articleUrl} target="_blank" />}
        </InnerWrapper>
        <InnerWrapper flex>
          <Paragraph>{content}</Paragraph>
          <StyledButton secondary onClick={() => removeItem(pageContext, id)}>
            remove
          </StyledButton>
        </InnerWrapper>
      </StyledWrapper>
    );
  }
}

const mapDispatchToProps = (dispatch: TDispatch) => ({
  removeItem: (itemType: string, id: string) => dispatch(removeItemAction(itemType, id)),
});

export default connect(null, mapDispatchToProps)(withContext(Card));
