import PropTypes from 'prop-types';
import s from './FeadbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map((option, id) => (
      
            <button className={s.button} key={id} onClick={onLeaveFeedback}>
      {option}
    </button>
  
  ));
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;