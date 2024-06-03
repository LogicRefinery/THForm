export type SurveyList = Survey[];

export type Survey = SurveyType1;
// export type Survey = SurveyType1 | SurveyType2 | SurveyType3;

export type SurveyType1 = {
  id: number;
  title: string;
  type: "type1";
  description: string;
  questions: Question[];
};

// export type SurveyType2 = {
//   id: number;
//   title: string;
//   type: "type2";
//   // description: string;
//   questions: Question[];
// };

// export type SurveyType3 = {
//   id: number;
//   // title: string;
//   type: "type3";
//   description: string;
//   questions: Question[];
// };

export type Question = {
  id: number;
  isRequired: boolean;
  questionText: string;
  answerType: number;
  answer: string[];
};

// 단문 장문의 형태

// 객관식 복수의 형태와 단수의 형태
