import React from "react";

function NextButton({ dispatch, answer, index, totalQuestions }) {
  if (answer === null) return null;
 if(index < totalQuestions -1) return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "nextQuestion" })}
    >
      Next
    </button>
  );

 if(index === totalQuestions -1) return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "finish" })}
    >
      finish
    </button>
  );
}

export default NextButton;
