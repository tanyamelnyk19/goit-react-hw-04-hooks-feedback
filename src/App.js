import { Component, Fragment } from 'react';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Section from './components/Section/Section';
import Notification from './components/Notification/Notification';
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  getButtonsNames() {
    const buttons = Object.keys(this.state);
    return buttons;
  }

  render() {
    // const buttons = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    const { onLeaveFeedback } = this;
    const countTotalFeedback = good + neutral + bad;
    const countPositiveFeedbackPercentage = Math.round(
      (good / countTotalFeedback) * 100,
    );
    return (
      <Fragment>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.getButtonsNames()}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {countTotalFeedback ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback}
              positiveFeedback={countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </Fragment>
    );
  }
}

export default App;
