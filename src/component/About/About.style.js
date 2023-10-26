import styled from "styled-components";

export const AboutWrapper = styled.section`
  margin-bottom: 200px;

  @media (max-width: 769px) {
    position: relative;
  }
  .quotes__wrapper {
    position: relative;
    top: 80px;

    @media (max-width: 769px) {
      top: 40px;
    }
  }
`;

export const AboutInfo = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3rem;
  background-color: tranparent;

  > div:first-child {
    margin-right: 10%;
  }

  p {
    color: black;
  }

  .about__link {
    color: red;
  }
  @media (max-width: 768px) {
    flex-direction: row;
    margin-top: 120px;

    > div:first-child {
      margin-right: 0;
      margin-bottom: 30px;
    }
  }
`;
