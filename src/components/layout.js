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
  position: absolute;
  display: flex;
  align-items: center;
  height: 32px;
  bottom: 0;
  left: 0;
  padding: 0px 20px;
  font-size: 13px;
  background-color: #cff0ff;
  width: 100vw;
  font-weight: 600;
`

const PersonalLink = styled.a`
  display: block;
  font-size: 13px;
  margin-left: 6px;
  margin-right: 6px;
`

const Emoji = styled.div`
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
