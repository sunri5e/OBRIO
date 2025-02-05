export type NextProp = { [key: string]: string[] } | string;

export type Question = {
  id: string;
  layout?: string;
  questionText: string;
  statement?: string;
  type: string;
  options: string[];
  next: NextProp;
  ignore?: boolean;
};
