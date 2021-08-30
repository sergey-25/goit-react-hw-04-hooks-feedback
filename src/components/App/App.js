import { useState } from 'react';

import Statistics from '../Statistics';
import FeedbackOptions from '../FeedbackOptions';
import Section from '../Section';




function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addFeedback = event => {
    const name = event.target.textContent;
    switch (name) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        break;
    };
  };

  const countTotalFeedback = () => {
    const totalFeedback = good + neutral + bad;
    return totalFeedback;
  };

  const countPositiveFeedbackPercentage = () => {
    const positiveFeedbackPercentage =
      Math.round((good / (neutral + bad + good)) * 100) || 0;
    return positiveFeedbackPercentage;
  };

  return (
      <Section title="Please leave feedback">
        <FeedbackOptions styles ={{display:'flex'}}
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={addFeedback}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        ></Statistics>
      </Section>
  );
}

export default App;