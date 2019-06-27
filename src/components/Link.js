
import React from 'react'
import { Link } from 'gatsby';
import styled from 'styled-components';
import { injectIntl } from 'react-intl'

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #282625;
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
`;

const LocaleLink = ({ ignoreLocale, to, intl: { locale }, ...props }) => {
  const path = `/${ignoreLocale ? '' : locale}${to}`;
  return <StyledLink
    // style={{ textDecoration: 'none' }}
    {...props}
    to={path}
  />
}

export default injectIntl(LocaleLink)