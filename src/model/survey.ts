export type Surveys = Survey[];

export type Survey = {
  id: string;
  title: string;
  description: string;
  questions: Questions;
};

export type Questions = QuestionType[];

export type QuestionType =
  | ShortSubjectiveType
  | LongSubjectiveType
  | MultipleChoiceType
  | SingleChoiceType;

export interface Question {
  id: string;
  isRequired: boolean;
  question: string;
}

export interface ShortSubjectiveType extends Question {
  type: "shortSubjective";
  answer: string;
}

export interface LongSubjectiveType extends Question {
  type: "longSubjective";
  answer: string;
}

export interface MultipleChoiceType extends Question {
  type: "multiple";
  options: Option[];
  answer: number[];
}

export interface SingleChoiceType extends Question {
  type: "single";
  options: Option[];
  answer: number;
}

export type Option = { id: string; option: string; checked: boolean };
