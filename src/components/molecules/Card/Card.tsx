import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import styled, { css, ThemeProps } from 'styled-components';
import LinkIcon from 'assets/icons/link.svg';
import { MyTheme } from 'theme/mainTheme';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import { removeItem as removeItemAction } from 'actions/actions';
import withContext from 'hoc/withContext';

type Props = {
  activecolor?: string;
  flex?: boolean;
};

const StyledWrapper = styled.div`
  min-height: 380px;
  min-width: 380px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
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

const InnerWrapper = styled.div<Props>`
  position: relative;
  padding: 17px 64px 17px 30px;
  background-color: ${({ activecolor, theme }: Props & ThemeProps<MyTheme>) =>
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
  pageContext?: string;
  title: string;
  twitterName?: string;
  twitterImg?: string;
  articleUrl?: string;
  content: string;
  id: string;
  removeItem?: any;
};

class Card extends Component<CardProps> {
  state = {
    redirect: false,
  };

  handleCardClick = () => this.setState({ redirect: true });

  render() {
    const { pageContext, id, title, twitterName, twitterImg, articleUrl, content, removeItem } = this.props;
    const { redirect } = this.state;
    const imageLink =
      twitterImg && twitterImg !== ''
        ? twitterImg
        : 'https://escolarevolution.com.br/wp-content/uploads/2021/01/twitter-icon-square-logo-108D17D373-seeklogo.com_.png';

    if (redirect) {
      return <Redirect to={`${pageContext}/${id}`} />;
    }

    return (
      <StyledWrapper>
        <InnerWrapper activecolor={pageContext} onClick={this.handleCardClick}>
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

const mapDispatchToProps = (dispatch: any) => ({
  removeItem: (itemType: string, id: string) => dispatch(removeItemAction(itemType, id)),
});

export default connect(null, mapDispatchToProps)(withContext(Card));
