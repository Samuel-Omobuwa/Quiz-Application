import React from "react";

function FinishedScreen({ points, maxPossiblePoint, highscore }) {
  const percentage = (points / maxPossiblePoint) * 100;

  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "😄";
  if (percentage >= 0 && percentage < 50) emoji = "😉";
  if (percentage === 0) emoji = "🤦‍♂️";

  return (
    <>
      <p className="result">
        <span>{emoji}</span>You scored <strong>{points}</strong> out of{maxPossiblePoint} 
      </p>
      <p className="highscore"> (Highscore: {highscore} points)</p>
    </>
  );
}

export default FinishedScreen;
