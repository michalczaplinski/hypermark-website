import { styled } from "goober";
import Header from "../../header";
import { useEffect, useState } from "preact/hooks";

const breakpoint = `700px`;

const Row = styled("div")`
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  padding-top: 30px;
  @media screen and (max-width: ${breakpoint}) {
    padding-top: 27px;
    flex-flow: column;
    align-items: center;
  }
`;

const TextContainer = styled("div")`
  display: flex;
  flex-flow: column;
  color: var(--dark-color);
  max-width: 450px;
  min-width: 300px;
  width: auto;
  padding: 20px;
  padding-top: 23px;

  @media screen and (max-width: ${breakpoint}) {
    max-width: 100%;
    padding-top: 10px;
    padding-left: 30px;
    padding-right: 30px;
    align-items: center;
  }
`;

const Tagline = styled("h3")`
  width: 100%;
  line-height: 1.3;
  margin-bottom: 14px;

  @media screen and (max-width: ${breakpoint}) {
    margin-bottom: 18px;
    font-size: 29px;
    text-align: center;
  }
`;

const Paragraph = styled("div")`
  line-height: 2;
  margin-bottom: 24px;

  @media screen and (max-width: ${breakpoint}) {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    text-align: left;
  }
`;

const ParagraphContent = styled("div")`
  margin-left: 8px;
`;

const DownloadButton = styled("button")`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-stretch: expanded;
  margin: 0;
  padding: 10px 21px;
  border-radius: 5px;
  border: 2px solid var(--dark-color);
  background-color: white;

  &:hover {
    background-color: #fff5d4;
    border-color: var(--dark-color);
    cursor: pointer;
  }

  transition: background-color, color, border-color, 150ms ease-in-out;
`;

const ImageContainer = styled("div")`
  width: 450px;
  height: auto;
  max-width: 100%;
  display: flex;
  justify-content: center;
`;

const Link = styled("a")`
  text-decoration: none;
`;

const AppleLogo = styled("img")`
  padding-bottom: 0;
  margin-right: 12px;
  margin-bottom: 2px;
`;

const OuterWrapper = styled("div")`
  width: 100%;
  height: auto;
  background: var(--main-color);
`;

const PageContent = styled("div")`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
  color: white;
`;

const Footer = styled("footer")`
  min-height: 45px;
  text-align: center;
  bottom: 0;
  left: 0;
  padding: 8px 20px;
  line-height: 1.5;
  font-size: 13px;
  background-color: #cff0ff;
  font-weight: 500;
`;

const PersonalLink = styled("a")`
  display: inline-block;
  font-size: 13px;
  margin-left: 4px;
  margin-right: 4px;
`;

const Emoji = styled("span")`
  display: inline-block;
  font-size: 20px;
  margin-left: 4px;
  margin-right: 2px;
`;

const Layout = ({ children }) => (
  <>
    <Header />
    <OuterWrapper>
      <PageContent>{children}</PageContent>
    </OuterWrapper>
    <Footer>
      Made with
      <Emoji role="img"> ✌️ </Emoji>&<Emoji role="img"> ☕️️ </Emoji>
      by
      <PersonalLink href="https://github.com/michalczaplinski">
        Michal Czaplinski
      </PersonalLink>
      <span>in Berlin, Kampala & Lima.</span>
    </Footer>
  </>
);

const IndexPage = () => {
  const [repo, setRepo] = useState("");

  useEffect(() => {
    fetch(
      `https://api.github.com/repos/michalczaplinski/hypermark/releases/latest`
    )
      .then((res) => res.json())
      .then((data) => {
        const asset = data?.assets.find(
          ({ name }) => name && name.slice(-4) === ".dmg"
        );
        setRepo(asset.browser_download_url);
      });
  }, []);

  return (
    <Layout>
      <Row>
        <ImageContainer>
          <picture height="456" width="500">
            <source srcset="images/app.webp" type="image/webp" />
            <img src="images/app.jpg" alt="hypermark demo" />
          </picture>

          {/* <Image src="images/app.png" width="500" /> */}
        </ImageContainer>
        <TextContainer>
          <Paragraph>
            <Tagline> Manager for your markdown notes </Tagline>
            <ParagraphContent>
              <div>👉 Markdown-first </div>
              <div>👉 Instant search </div>
              <div>👉 Bring your own notes </div>
            </ParagraphContent>
          </Paragraph>
          <Link href={repo}>
            <DownloadButton>
              <AppleLogo src="images/apple.svg"></AppleLogo>Download for MacOS
            </DownloadButton>
          </Link>
        </TextContainer>
      </Row>
    </Layout>
  );
};

export default IndexPage;
