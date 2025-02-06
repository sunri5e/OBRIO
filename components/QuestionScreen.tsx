"use client";

import surveyConfig from "@/data/surveyConfig.json";
import { useState } from "react";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { setAnswer } from "@/store/features/surveySlice";
import { Question } from "@/utils/types";
import { getNextPage, replacePlaceholders } from "@/utils/helpers";

export default function QuestionScreen({ questionId }: { questionId: string }) {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();
  const answers = useSelector((state: RootState) => state.survey.answers);

  const question = surveyConfig.questions.find((q: { id: string }) => q.id === questionId);
  const { id, next, type, options, questionText, ignore, statement, mapping } =
    question as Question;

  const onNext = (answer: string) => {
    if (!ignore) dispatch(setAnswer({ questionId: id, answer, question: questionText }));

    const nextPage = getNextPage({ next, currentAnswer: answer, answers, id });

    router.push(`/survey/${nextPage}`);
  };

  return (
    <div>
      <h1>{replacePlaceholders(questionText, answers, mapping!)}</h1>
      {statement && <p>{statement}</p>}
      {type === "single-choice" &&
        options.length &&
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
