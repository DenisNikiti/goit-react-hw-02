import PropTypes from "prop-types";

export default function Feedback({
  feedbacks: { good, neutral, bad },
  totalFeedback,
  feedbackpositive,
}) {
  return (
    <div>
      <p>Good: {good}</p>
      <p> Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Totalfeedback: {totalFeedback} </p>
      <p>Positive: {feedbackpositive}%</p>
    </div>
  );
}

Feedback.propTypes = {
  feedbacks: PropTypes.object.isRequired,
  totalFeedback: PropTypes.number.isRequired,
  feedbackpositive: PropTypes.number.isRequired,
};
