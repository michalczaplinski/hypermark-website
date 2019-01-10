import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const Row = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
`

const TextContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  color: #383838;
  max-width: 320px;
`

const Paragraph = styled.div`
  line-height: 1.6;
`

const DownloadButton = styled.button`
  display: block;
  font-weight: 700;
  font-stretch: expanded;
  margin: 0;
  padding: 6px 21px;
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
  width: 502px;
  height: 490px;
`

const IndexPage = () => (
  <Layout>
    <SEO
      title="Hypermark"
      keywords={[`application`, `productivity`, `markdown`]}
    />
    <Row>
      <TextContainer>
        <Paragraph>
          <h4>Manager for your markdown notes.</h4>
          <div>• Instant Search.</div>
          <div>• Bring your own notes.</div>
          <div>• Markdown-first.</div>
        </Paragraph>
        <DownloadButton> Download </DownloadButton>
      </TextContainer>
      <ImageContainer>
        <Image />
      </ImageContainer>
    </Row>
  </Layout>
)

export default IndexPage
