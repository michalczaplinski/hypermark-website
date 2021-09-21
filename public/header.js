import { styled } from "goober";

const Wrapper = styled("div")`
  background-color: white;
`;

const Logo = styled("img")`
  height: 45px;
  display: block;
  margin-bottom: 0px;
  margin-right: 15px;
  padding-bottom: 2px;
`;

const InnerWrapper = styled("div")`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.1rem 1.0875rem;
  display: flex;
`;

const Header = () => (
  <Wrapper>
    <InnerWrapper>
      <Logo src="images/icon.svg" alt="logo" />
      <h1 style={{ margin: 0 }}>
        <span>Hypermark</span>
      </h1>
    </InnerWrapper>
  </Wrapper>
);

export default Header;
