import React from "react";

function Progress({ index, totalQuestions }) {
  return (
    <header className="progress">
      <p>
        Question <strong>{index + 1}</strong>/ {totalQuestions}
      </p>
    </header>
  );
}

export default Progress;
