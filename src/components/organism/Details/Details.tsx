import React from 'react';
import styled, { ThemeProps } from 'styled-components';
import PropTypes from 'prop-types';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import { Link } from 'react-router-dom';
import { routes } from 'routes';
import { removeItem as removeItemAction } from 'actions/actions';
import { connect } from 'react-redux';
import withContext from 'hoc/withContext';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import trash from 'assets/icons/trash.svg';
import { MyTheme } from '../../../theme/mainTheme';

const StyledWrapper = styled.div`
  display: flex;
  max-width: 600px;
  height: 100%;
  flex-direction: column;
  position: relative;
`;

const StyledHeading = styled(Heading)`
  max-width: 550px;
  margin: 0;
`;

// const CreatedInfo = styled(Paragraph)`
//   color: ${({ theme }) => theme.black07};
//   font-weight: ${({ theme }) => theme.bold};
//   text-transform: uppercase;
//   margin-bottom: 24px;
// `;

type AvatarProps = {
  avatarUrl?: string;
};

const StyledAvatar = styled.a<AvatarProps>`
  display: block;
  position: absolute;
  top: -24px;
  right: -100px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: black;
  background-image: url(${({ avatarUrl }) => avatarUrl});
  background-size: 100%;
  background-position: 50% 50%;
  background-repeat: no-repeat;
`;

const StyledLink = styled.a`
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.bold};
  margin-bottom: 16px;
`;

const StyledButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: black;
  margin-right: 10px;

  &:hover {
    font-size: 1.8rem;
  }

  transition: 150ms ease-in-out;
`;

type ButtonIconProps = {
  activecolor: string;
};

const StyledButtonIcon = styled(ButtonIcon)<ButtonIconProps>`
  background-color: ${({ activecolor, theme }: ButtonIconProps & ThemeProps<MyTheme>) =>
    // @ts-ignore
    theme[activecolor]};
  background-size: 40%;
  border-radius: 50%;
  height: 47px;
  width: 47px;

  &:hover {
    background-size: 48%;
  }

  transition: 150ms ease-in-out;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 24px 0 16px 0;
`;

const Details = ({ id, pageContext, title, content, twitterName, articleImageUrl, removeItem }: any) => {
  const correctLink = pageContext === 'twitters' ? `https://twitter.com/${twitterName}` : articleImageUrl;
  const twitterImg =
    articleImageUrl !== ''
      ? articleImageUrl
      : 'https://escolarevolution.com.br/wp-content/uploads/2021/01/twitter-icon-square-logo-108D17D373-seeklogo.com_.png';

  return (
    <StyledWrapper>
      <StyledHeading big>{title}</StyledHeading>
      {pageContext === 'twitters' && <StyledAvatar href={correctLink} target="_blank" avatarUrl={twitterImg} />}
      <Paragraph>{content}</Paragraph>
      {pageContext !== 'notes' && (
        <StyledLink href={correctLink} target="_blank">
          Open this {pageContext.substr(0, pageContext.length - 1)}
        </StyledLink>
      )}
      <StyledButtonWrapper>
        {
          // @ts-ignore
          <StyledButton buttoncolor={pageContext} as={Link} to={routes[pageContext]}>
            close
          </StyledButton>
        }
        {
          <StyledButtonIcon
            onClick={() => removeItem(pageContext, id)}
            icon={trash}
            activecolor={pageContext}
            as={Link}
            // @ts-ignore
            to={routes[pageContext]}
          />
        }
      </StyledButtonWrapper>
    </StyledWrapper>
  );
};

Details.propTypes = {
  id: PropTypes.string.isRequired,
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  twitterName: PropTypes.string,
  articleImageUrl: PropTypes.string,
  removeItem: PropTypes.func.isRequired,
};

Details.defaultProps = {
  pageContext: 'notes',
  twitterName: 'Noname :c',
  articleImageUrl: '',
};

const mapDispatchToProps = (dispatch: any) => ({
  removeItem: (itemType: string, id: string) => dispatch(removeItemAction(itemType, id)),
});

export default connect(null, mapDispatchToProps)(withContext(Details));
