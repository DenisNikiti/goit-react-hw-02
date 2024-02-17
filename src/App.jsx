import { useState } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";

function App() {
  const [feedbacks, setfeedbacks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;

  const updateFeedback = (feedbackType) => {
    setfeedbacks({
      ...feedbacks,
      [feedbackType]: feedbacks[feedbackType] + 1,
    });
  };
  return (
    <div>
      <Description />
      <Options feedbacksbuttons={feedbacks} onupdateFeedback={updateFeedback} />

      {totalFeedback ? <Feedback feedbacks={feedbacks} /> : "Нету"}
    </div>
  );
}

export default App;
