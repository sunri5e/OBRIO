"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import surveyConfig from "@/data/surveyConfig.json";
import Header from "@/components/Header";
import { replacePlaceholders } from "@/utils/helpers";

export default function ResultPage() {
  const questions = surveyConfig.questions;
  const answers = useSelector((state: RootState) => state.survey.answers);

  return (
    <div className="app-l-main">
      <Header />
      <div className="app-l-container app-l-container__wide">
        <h1>Here your answers</h1>
        <ul>
          {Object.entries(answers).map(([questionId, data]) => {
            const mapping = questions.find((x) => x.id === questionId)?.mapping;
            return (
              <li key={questionId}>
                <strong>{replacePlaceholders(data.question, answers, mapping!)}:</strong>{" "}
                {data.answer}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
