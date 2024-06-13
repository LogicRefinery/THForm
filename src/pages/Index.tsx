import React from "react";
import { useSearchParams } from "react-router-dom";
import { styled } from "styled-components";
import QuestionContainer from "../containers/QuestionContainer";

function Index() {
  const [searchParams, setSearchParams] = useSearchParams();
  const mode = searchParams.get("mode");

  return (
    <Main>
      <Article>
        <H3>{mode === "modify" ? " 폼 수정" : " 폼 생성"}</H3>
        <P>개인정보 보호관련 규제를 준수할 수 있는 폼을 생성하세요.</P>
        <QuestionContainer />
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

export default Index;
