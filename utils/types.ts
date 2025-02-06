export type NextProp = { [key: string]: string[] } | string;

export type Mapping = {
  [key: string]:
    | string
    | {
        value: string;
        equalTo: string;
        basedOn: string;
      };
};

export type Question = {
  id: string;
  layout?: string;
  questionText: string;
  statement?: string;
  type: string;
  options: string[];
  next: NextProp;
  ignore?: boolean;
  mapping?: Mapping;
};

export type Answers = {
  [key: string]: {
    question: string;
    answer: string;
  };
};
