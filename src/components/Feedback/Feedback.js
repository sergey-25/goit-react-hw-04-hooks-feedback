import React, {Component} from 'react';
import FeedbackOptions  from "../FeedbackOptions";
import Statistics from "../Statistics";
import Section from "../Section";
import s from './Feedback.module.css';

class Feedback extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    onLeaveFeedback = (event) => {
        if (event.target.name === "good") {
            this.setState(prevState => ({
            good: prevState.good + 1
        }))
        } else if (event.target.name === "neutral") {
            this.setState(prevState => ({
            neutral: prevState.neutral + 1
        }))
        } else if (event.target.name === "bad") {
            this.setState(prevState => ({
            bad: prevState.bad + 1
        }))
        }
    }

    countTotalFeedback = () => {
        const total = this.state.good + this.state.neutral + this.state.bad
        return total
    }

    countPositiveFeedbackPercentage = () => {
        const positivePercentage = Math.round((this.state.good * 100) / this.countTotalFeedback())
        return positivePercentage
    }

    render() { 
        return(
        <div className={s.container}>
            <Section title='Please leave feedback' className = {s.title}>
                <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback}/>
            </Section>
            <Section title='Statistics'>
                <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()} />
            </Section>
        </div>
    )
    }
}

export default Feedback;