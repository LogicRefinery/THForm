import React from "react";
import { styled } from "styled-components";
import SurveyContainer from "../containers/SurveyContainer";

function SurveyList() {
  return (
    <Main>
      <Article>
        <H3> 폼 목록</H3>
        <P>개인정보 보호관련 규제를 준수할 수 있는 폼을 생성하세요.</P>
        <SurveyContainer />
      </Article>
    </Main>
  );
}

const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Main = styled.main``;

const H3 = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;
const P = styled.p`
  margin-bottom: 40px;
`;
export default SurveyList;
