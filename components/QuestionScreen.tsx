"use client";

import surveyConfig from "@/data/surveyConfig.json";
import { useState } from "react";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { setAnswer } from "@/store/features/surveySlice";
import { Question, NextProp } from "@/utils/types";

export default function QuestionScreen({ questionId }: { questionId: string }) {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();
  const answers = useSelector((state: RootState) => state.survey.answers);

  const question = surveyConfig.questions.find((q: { id: string }) => q.id === questionId);
  console.log(question);
  const { id, next, type, options, questionText, ignore } = question as Question;

  function getNextPage(nextConfig: NextProp, currentAnswer: string): string | null {
    for (const [nextQuestionId, [dependsOn, expectedAnswer]] of Object.entries(nextConfig)) {
      const answer = dependsOn === id ? currentAnswer : answers[dependsOn].answer;
      if (answer === expectedAnswer) {
        return nextQuestionId;
      }
    }
    return null;
  }

  const onNext = (answer: string) => {
    if (!ignore) dispatch(setAnswer({ questionId: id, answer, question: questionText }));

    const nextPage = typeof next === "string" ? next : getNextPage(next, answer);

    router.push(`/survey/${nextPage}`);
  };

  return (
    <div>
      <h1>{questionText}</h1>
      {type === "single-choice" &&
        options &&
        options.map((option) => (
          <button key={option} onClick={() => onNext(option)}>
            {option}
          </button>
        ))}
      {type === "input" && (
        <>
          <input type="text" onBlur={(e) => setInputValue(e.target.value)} />
          <button onClick={() => onNext(inputValue)}>Next</button>
        </>
      )}
    </div>
  );
}
