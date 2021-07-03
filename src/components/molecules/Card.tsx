import React, { Component } from 'react';
// import PropTypes from 'prop-types';
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
  activeColor?: string;
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

const StyledAvatar = styled.img`
  width: 86px;
  height: 86px;
  border: 5px solid ${({ theme }: ThemeProps<MyTheme>) => theme.twitters};
  border-radius: 50%;
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
  padding: 17px 30px;
  background-color: ${({ activeColor, theme }: Props & ThemeProps<MyTheme>) =>
    // @ts-ignore
    activeColor ? theme[activeColor] : 'white'};

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

const DateInfo = styled(Paragraph)`
  margin: 0 0 5px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const StyledHeading = styled(Heading)`
  margin: 5px 0 0;
`;

const StyledButton = styled(Button)`
  z-index: 100;
`;

type CardProps = {
  pageContext?: string;
  title: string;
  created: string;
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
    const { pageContext, id, title, created, twitterImg, articleUrl, content, removeItem } = this.props;
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to={`${pageContext}/${id}`} />;
    }

    return (
      <StyledWrapper onClick={this.handleCardClick}>
        <InnerWrapper activeColor={pageContext}>
          <StyledHeading>{title}</StyledHeading>
          <DateInfo>{created}</DateInfo>
          {pageContext === 'twitters' && <StyledAvatar src={twitterImg} />}
          {pageContext === 'articles' && <StyledLinkButton href={articleUrl} target="_blank" />}
        </InnerWrapper>
        <InnerWrapper flex>
          <Paragraph>{content}</Paragraph>
          <StyledButton
            secondary
            onClick={() => {
              removeItem(pageContext, id);
            }}
          >
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
