import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Header from './header'
import './layout.css'

const OuterWrapper = styled.div`
  width: 100%;
  height: auto;
  background: #ffdbe8;
`

const PageContent = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
  color: white;
`

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 25px;
  font-size: 13px;
  background-color: white;
  width: 100vw;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <OuterWrapper>
          <PageContent>{children}</PageContent>
        </OuterWrapper>
        <Footer>
          © {new Date().getFullYear()}, Created by
          {` `}
          <a href="https://github.com/michalczaplinski">Michal Czaplinski</a>
        </Footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
