"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export default function ResultPage() {
  const answers = useSelector((state: RootState) => state.survey.answers);

  return (
    <div>
      <h1>Here your answers</h1>
      <ul>
        {Object.entries(answers).map(([questionId, data]) => (
          <li key={questionId}>
            <strong>{data.question}:</strong> {data.answer}
          </li>
        ))}
      </ul>
    </div>
  );
}
