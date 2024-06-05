export type Surveys = Survey[];

export type Survey = {
  id: string;
  surveyTitle: string;
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
  title: string;
}

export interface ShortSubjectiveType extends Question {
  type: "shortSubjective";
  answer: string;
  options: null;
}

export interface LongSubjectiveType extends Question {
  type: "longSubjective";
  answer: string;
  options: null;
}

export interface MultipleChoiceType extends Question {
  type: "multiple";
  options: Option[];
  answer: string;
}

export interface SingleChoiceType extends Question {
  type: "single";
  options: Option[];
  answer: string;
}

export type Option = {
  id: string;
  option: string;
  checked: boolean;
  other?: boolean;
};

export type QuestionMethodType = {
  onRequiredChange: (id: string, checked: boolean) => void;
  onClone: (id: string) => void;
  onRemove: (id: string) => void;
  onSelectedChange: (
    e: React.ChangeEvent<HTMLSelectElement>,
    id: string
  ) => void;
  onQuestionChange: (
    id: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  onAnswerChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
    id: string
  ) => void;
  onChangeOption: (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string,
    optionId: string
  ) => void;
  onAddOption: (id: string) => void;
  onRemoveOption: (id: string, optionId: string) => void;
  dragStart: (idx: number, id: string) => void;
  dragEnter: (idx: number) => void;
  optionDragStart: (idx: number, id: string) => void;
  optionDragEnter: (idx: number) => void;
  drop: (isOptions?: boolean) => void;
};
