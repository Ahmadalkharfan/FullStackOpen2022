import { useState } from 'react'

const Header = (props) => {
  return (
    <>
      <h1>{props.headers}</h1>
    </>
  )
}

const History = ({text,counter}) => {
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

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const headers = ['give feedback','statistics'];
  
  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }
  
  return (
    <div>
      <Header headers={headers[0]} />

      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' /> 

      <Header headers={headers[1]} />
      
      <History counter={good} text='good'/>
      <History counter={neutral} text='neutral'/>
      <History counter={bad} text='bad'/>
    </div>
  )
}

export default App