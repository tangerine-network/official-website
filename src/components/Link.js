
import React from 'react'
import { Link } from 'gatsby';
// import { navigate } from '@reach/router';
import styled from 'styled-components';
import { injectIntl } from 'react-intl';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #282625;
`;

const LocaleLink = ({ children, ignoreLocale, to, intl: { locale }, ...props }) => {
  if (to.indexOf('#') > -1) {
    return (
      <div
        onClick={() => {
          setTimeout(() => {
            const target = document.getElementById(`${to.replace('#', '')}`);
            if (target) {
              target.scrollIntoView({
                behavior: 'smooth'
              });
            }
          }, 0);
        }}
      >
      {children}
    </div>);
  }
  const path = `/${ignoreLocale ? '' : locale}${to}`;
  return (
    <StyledLink
      {...props}
      to={path}
    >
      {children}
    </StyledLink>
  );
}

export default injectIntl(LocaleLink)