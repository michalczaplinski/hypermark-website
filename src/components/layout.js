import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Header from './header'
import './layout.css'

const OuterWrapper = styled.div`
  width: 100%;
  height: auto;
  background: var(--main-color);
`

const PageContent = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
  color: white;
`

const Footer = styled.footer`
  min-height: 45px;
  text-align: center;
  bottom: 0;
  left: 0;
  padding: 8px 20px;
  line-height: 1.5;
  font-size: 13px;
  background-color: #cff0ff;
  width: 100vw;
  font-weight: 500;
`

const PersonalLink = styled.a`
  display: inline-block;
  font-size: 13px;
  margin-left: 4px;
  margin-right: 4px;
`

const Emoji = styled.span`
  display: inline-block;
  font-size: 20px;
  margin-left: 4px;
  margin-right: 2px;
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
          Made with
          <Emoji role="img"> ✌️ </Emoji>
          &
          <Emoji role="img"> ☕️️ </Emoji>
          by
          <PersonalLink href="https://github.com/michalczaplinski">
            Michal Czaplinski
          </PersonalLink>
          <span>in Berlin, Kampala & Lima.</span>
        </Footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
