import { useState } from 'react'

const Header = ({ headers }) => {
  return (
    <>
      <h1>{headers}</h1>
    </>
  )
}

const Counter = ({ text, counter }) => {
  return (
    <div>
      {text} {counter}
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)


const Statistics = (props) => {


  const average = props.allFeedbacks > 0 ? (props.good - props.bad) / props.allFeedbacks : 0;
  const positive = props.allFeedbacks > 0 ? (props.good / props.allFeedbacks) * 100 : 0;

  return (
    <>
      <Header headers={props.headers} />

      <Counter counter={props.good} text='good' />
      <Counter counter={props.neutral} text='neutral' />
      <Counter counter={props.bad} text='bad' />
      <Counter counter={props.allFeedbacks} text='all' />
      average {average} <br/>
      positive {positive} %
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allFeedbacks, setAll] = useState(0)

  const headers = ['give feedback', 'statistics'];

  const handleGoodClick = () => {
    setAll(allFeedbacks + 1)
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setAll(allFeedbacks + 1)
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setAll(allFeedbacks + 1)
    setBad(bad + 1)
  }

  return (
    <div>
      <Header headers={headers[0]} />

      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />

      <Statistics headers={headers[1]} good={good} neutral={neutral} bad={bad} allFeedbacks={allFeedbacks} />
    </div>
  )
}

export default App