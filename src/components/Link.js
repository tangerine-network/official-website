
import React from 'react'
import { Link } from 'gatsby'
import { injectIntl } from 'react-intl'

const LocaleLink = ({ to, intl: { locale }, ...props }) => {
  const path = `/${locale}${to}`
  return <Link
    // style={{ textDecoration: 'none' }}
    {...props}
    to={path}
  />
}

export default injectIntl(LocaleLink)