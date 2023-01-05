import { useState } from 'react';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

import { Container } from './App.styled';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedback = ['good', 'neutral', 'bad'];
  const totalFeedback = good + neutral + bad;
  const countPositiveFeedbackPercentage = Math.round(
    (good / totalFeedback) * 100
  );

  const onLeaveFeedback = option => {
    const value = prevState => prevState + 1;

    switch (option) {
      case 'good':
        setGood(value);
        break;
      case 'neutral':
        setNeutral(value);
        break;
      case 'bad':
        setBad(value);
        break;
      default:
        return;
    }
  };

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions options={feedback} onLeaveFeedback={onLeaveFeedback} />
      </Section>

      <Section title="Statistics">
        {totalFeedback ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Container>
  );
}
