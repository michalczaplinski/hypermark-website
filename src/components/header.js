import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import logoPath from '../images/icon.svg'

const Wrapper = styled.div`
  background-color: white;
`

const Logo = styled.img`
  height: 45px;
  display: block;
  margin-bottom: 0px;
  margin-right: 15px;
  padding-bottom: 5px;
`

const InnerWrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.1rem 1.0875rem;
  display: flex;
`

const Header = ({ siteTitle }) => (
  <Wrapper>
    <InnerWrapper>
      <Logo src={logoPath} alt="logo" />
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </InnerWrapper>
  </Wrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
