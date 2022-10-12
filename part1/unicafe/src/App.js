import { useState } from 'react'

const Header = ({ headers }) => {
  return (
    <>
      <h1>{headers}</h1>
    </>
  )
}

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
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

  if (props.allFeedbacks === 0) {
    return (
      <>
        <Header headers={props.headers} />
        No feedback given
      </>
    )
  }

  return (
    <>
      <Header headers={props.headers} />
      <table>
        <tbody>
          <StatisticLine value={props.good} text='good' />
          <StatisticLine value={props.neutral} text='neutral' />
          <StatisticLine value={props.bad} text='bad' />
          <StatisticLine value={props.allFeedbacks} text='all' />
          <StatisticLine value={average} text='average' />
          <StatisticLine value={positive + '%'} text='positive ' />
        </tbody>
      </table>
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
    <>
      <Header headers={headers[0]} />

      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />

      <Statistics headers={headers[1]} good={good} neutral={neutral} bad={bad} allFeedbacks={allFeedbacks} />
    </>
  )
}

export default App