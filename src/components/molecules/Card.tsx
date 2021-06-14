import React from 'react';
import PropTypes from 'prop-types';
import styled, { css, ThemeProps } from 'styled-components';
import LinkIcon from 'assets/icons/link.svg';
import { MyTheme } from '../../theme/mainTheme';
import Paragraph from '../atoms/Paragraph/Paragraph';
import Heading from '../atoms/Heading/Heading';
import Button from '../atoms/Button/Button';

type Props = {
  activeColor?: string;
  flex?: boolean;
};

const StyledWrapper = styled.div`
  min-height: 380px;
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
  border: 5px solid ${({ theme }: ThemeProps<MyTheme>) => theme.twitter};
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

const Card = ({ cardType }: any) => (
  <StyledWrapper>
    <InnerWrapper activeColor={cardType}>
      <StyledHeading>Hi hi hey</StyledHeading>
      <DateInfo>3 days</DateInfo>
      {cardType === 'twitter' && (
        <StyledAvatar src="https://pbs.twimg.com/profile_images/1104491562854158336/A-NTwQhW_400x400.png" />
      )}
      {cardType === 'article' && <StyledLinkButton href="https://twitter.com/hello_roman" target="_blank" />}
    </InnerWrapper>
    <InnerWrapper flex>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci consequuntur corporis cumque debitis
        eligendi est iure labore minima, molestiae mollitia nobis nulla quaerat quia ratione, repudiandae sequi sint
        sunt totam voluptates. A dicta iusto molestiae nesciunt odio, reprehenderit sapiente.
      </Paragraph>
      <Button secondary>remove</Button>
    </InnerWrapper>
  </StyledWrapper>
);

Card.propTypes = {
  cardType: PropTypes.oneOf(['note', 'twitter', 'article']),
};

Card.defaultProps = {
  cardType: 'note',
};

export default Card;
