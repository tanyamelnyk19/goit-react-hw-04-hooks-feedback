import PropTypes from 'prop-types';
import './FeedbackOptions.css';

export default function Feedback({ options, onLeaveFeedback }) {
  return (
    <ul className="buttonsList">
      {options.map(option => {
        return (
          <li className="buttonItem" key={option}>
            <button
              className="button"
              value={option}
              type="button"
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

Feedback.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

Feedback.defaultProps = {
  options: ['good', 'neutral', 'bad'],
};
