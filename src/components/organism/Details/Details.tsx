import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import { Link } from 'react-router-dom';
import { routes } from 'routes';
import { removeItem as removeItemAction } from 'actions/actions';
import { connect } from 'react-redux';
import withContext from 'hoc/withContext';

const StyledWrapper = styled.div`
  display: flex;
  max-width: 500px;
  height: 100%;
  flex-direction: column;
  position: relative;
`;

const StyledHeading = styled(Heading)`
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
  top: -16px;
  right: 0;
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
  margin: 24px 0 16px 0;
`;

const Details = ({ id, pageContext, title, content, twitterImg, link, removeItem }: any) => (
  <StyledWrapper>
    <StyledHeading big>{title}</StyledHeading>
    {pageContext === 'twitters' && <StyledAvatar href={link} target="_blank" avatarUrl={twitterImg} />}
    <Paragraph>{content}</Paragraph>
    {pageContext !== 'notes' && (
      <StyledLink href={link} target="_blank">
        Open this {pageContext.substr(0, pageContext.length - 1)}
      </StyledLink>
    )}
    {
      // @ts-ignore
      <StyledButton buttoncolor={pageContext} as={Link} to={routes[pageContext]}>
        close / save
      </StyledButton>
    }
    {
      // @ts-ignore
      <Link to={routes[pageContext]} onClick={() => removeItem(pageContext, id)}>
        remove note
      </Link>
    }
  </StyledWrapper>
);

Details.propTypes = {
  id: PropTypes.string.isRequired,
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  twitterImg: PropTypes.string,
  link: PropTypes.string,
  removeItem: PropTypes.func.isRequired,
};

Details.defaultProps = {
  pageContext: 'notes',
  twitterImg:
    'https://escolarevolution.com.br/wp-content/uploads/2021/01/twitter-icon-square-logo-108D17D373-seeklogo.com_.png',
  link: '',
};

const mapDispatchToProps = (dispatch: any) => ({
  removeItem: (itemType: string, id: string) => dispatch(removeItemAction(itemType, id)),
});

export default connect(null, mapDispatchToProps)(withContext(Details));
