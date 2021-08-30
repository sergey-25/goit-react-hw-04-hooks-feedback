import PropTypes from 'prop-types';
import s from'../FeedbackOptions/FeadbackOptions.module.css'

export default function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
        <div className = {s.btns}>
            {options.map(option => (
                <button  className={s[option]}  type="button" key={option} name={option} onClick={onLeaveFeedback}  >{option  }</button>
            ))}
        </div>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.array,
    onLeaveFeedback: PropTypes.func,
}