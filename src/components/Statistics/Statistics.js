import PropTypes from 'prop-types';

export default function FeedbackOptions({
  good,
  neutral,
  bad,
  total,
  positiveFeedback,
}) {
  return (
    <ul className="statistics">
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive feedback: {positiveFeedback}%</li>
    </ul>
  );
}

FeedbackOptions.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positiveFeedback: PropTypes.number,
};
