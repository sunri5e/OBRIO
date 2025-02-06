import { NextProp, Answers, Mapping } from "@/utils/types";

export function getNextPage({
  next,
  currentAnswer,
  answers,
  id,
}: {
  next: NextProp;
  currentAnswer: string;
  id: string;
  answers: Answers;
}): string | null {
  if (typeof next === "string") return next;

  for (const [nextQuestionId, [dependsOn, expectedAnswer]] of Object.entries(next)) {
    const answer = dependsOn === id ? currentAnswer : answers[dependsOn].answer;
    if (answer === expectedAnswer) {
      return nextQuestionId;
    }
  }

  return null;
}

const replaceText = ({
  mapping,
  key,
  answers,
}: {
  mapping: Mapping;
  key: string;
  answers: Answers;
}): string => {
  const base = typeof mapping[key] === "object" ? mapping[key].basedOn : "";
  const answer = answers[base].answer;

  if (typeof mapping[key] === "object" && answer === mapping[key].equalTo) {
    return mapping[key].value;
  }

  return "";
};

export const replacePlaceholders = (text: string, answers: Answers, mapping: Mapping): string => {
  const matches = text.match(/{(.*?)}/g);

  if (matches) {
    matches.forEach((match) => {
      const key = match.slice(1, -1).toLowerCase();
      const mapKey = mapping[key];
      const answer =
        typeof mapKey === "string"
          ? answers[mapKey].answer
          : replaceText({ mapping, key, answers });

      if (key in mapping && answers) {
        text = text.replace(match, answer);
      }
    });
  }

  return text;
};
