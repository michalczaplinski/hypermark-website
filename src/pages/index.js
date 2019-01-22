import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

import apple from '../images/apple.svg'

const breakpoint = `700px`

const Row = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding-top: 30px;
  @media screen and (max-width: ${breakpoint}) {
    padding-top: 15px;
    flex-flow: column;
    align-items: center;
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-flow: column;
  color: #383838;
  max-width: 420px;
  min-width: 300px;
  width: auto;
  padding: 20px;

  @media screen and (max-width: ${breakpoint}) {
    max-width: 100%;
    padding-top: 0;
    padding-left: 30px;
    padding-right: 30px;
  }
`

const Tagline = styled.h3`
  width: 100%;
  line-height: 1.4;
  font-size: 23px;
  margin-bottom: 10px;
`

const Paragraph = styled.div`
  line-height: 2;
  margin-bottom: 25px;
  padding-left: 5px;
`

const DownloadButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-stretch: expanded;
  margin: 0;
  padding: 10px 21px;
  border-radius: 5px;
  border: 2px solid #383838;

  &:hover {
    background-color: #383838;
    color: white;
    border-color: #383838;
    cursor: pointer;
  }

  transition: background-color, color, border-color, 150ms ease-in-out;
`

const ImageContainer = styled.div`
  width: 450px;
  height: auto;
  max-width: 100%;
`

const AppleLogo = styled.img`
  padding-bottom: 0;
  margin-right: 12px;
  margin-bottom: 2px;
`

const IndexPage = () => (
  <Layout>
    <SEO
      title="Hypermark"
      keywords={[`application`, `productivity`, `markdown`]}
    />
    <Row>
      <ImageContainer>
        <Image />
      </ImageContainer>
      <TextContainer>
        <Paragraph>
          <Tagline>Manager for your markdown notes.</Tagline>
          <div>• Instant Search</div>
          <div>• Bring your own notes</div>
          <div>• Markdown-first</div>
          <div>• Dark-mode enabled</div>
        </Paragraph>
        <DownloadButton>
          {' '}
          <AppleLogo src={apple} fill="white" /> Download for MacOS{' '}
        </DownloadButton>
      </TextContainer>
    </Row>
  </Layout>
)

export default IndexPage
