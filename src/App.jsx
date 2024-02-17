import { useState, useEffect } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

function App() {
  const [feedbacks, setfeedbacks] = useState(() => {
    const savedfeedbacks = localStorage.getItem("feedbacks");
    return savedfeedbacks !== null
      ? JSON.parse(savedfeedbacks)
      : {
          good: 0,
          neutral: 0,
          bad: 0,
        };
  });

  const updateFeedback = (feedbackType) => {
    setfeedbacks({
      ...feedbacks,
      [feedbackType]: feedbacks[feedbackType] + 1,
    });
  };

  const resetFeedback = () => {
    setfeedbacks({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  useEffect(() => {
    localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
  }, [feedbacks]);
  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;
  const feedbackpositive = Math.round(
    ((feedbacks.good + feedbacks.neutral) / totalFeedback) * 100
  );

  return (
    <div>
      <Description />
      <Options
        feedbacksbuttons={feedbacks}
        onUpdateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
      />

      {totalFeedback ? (
        <Feedback
          feedbacks={feedbacks}
          totalFeedback={totalFeedback}
          feedbackpositive={feedbackpositive}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
