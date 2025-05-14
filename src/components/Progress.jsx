import React from "react";

function Progress({
  index,
  totalQuestions,
  points,
  maxPossiblePoints,
  answer,
}) {
  return (
    <header className="progress">
      <progress
        value={index + Number(answer !== null)}
        max={totalQuestions}
      ></progress>

      <p>
        Question <strong>{index + 1}</strong>/ {totalQuestions}
      </p>

      <p>
        <strong>{points}</strong>/ {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
