import React from 'react';
import FeedbackOptions from './components/FeedbackOptions'
import Section from './components/Section'
import Statistics from './components/Statistics'

class App extends React.Component { 
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onButtonClick = (event) => {
    const buttonName = event.currentTarget.name;
    this.setState(prevState => {
      return {
      [buttonName]: prevState[buttonName] + 1,
    }}
    )
  }

  countTotalFeedback = () => { 
    return this.state.good+this.state.neutral+this.state.bad
  };

  countPositiveFeedbackPercentage = () => {
    const countTotal = this.countTotalFeedback();
     return !countTotal ? 0 : Math.round(this.state.good/countTotal * 100)
  };
  
  render() {

    const {good, neutral, bad} = this.state
    const buttonNames = Object.keys(this.state)

    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions buttonNames={buttonNames} onButtonClick={this.onButtonClick}/>
        </Section>

        <Section title={'Statistics'}>
          <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />
        </Section>
      </>)
  }
};

export default App