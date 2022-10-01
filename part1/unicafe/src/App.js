import { useState } from 'react'

const Header = ({headers}) => {
  return (
    <>
      <h1>{headers}</h1>
    </>
  )
}

const Counter = ({text,counter}) => {
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

const Average = (props) =>{ 
  if (props.allFeedbacks > 0) {
    return (
      <div>
        average {(props.good - props.bad) / props.allFeedbacks }
      </div>
    )
  }
  return (
    <div>
      average 0
    </div>
  )
}

const Positive = ({good,allFeedbacks}) =>{ 
  if (allFeedbacks > 0) {
  return (
    <div>
      positive {good/allFeedbacks} %
    </div>
  )
  }
  return (
    <div>
      positive 0 %
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allFeedbacks, setAll] = useState(0)

  const headers = ['give feedback','statistics'];
  
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

      <Header headers={headers[1]} />
      
      <Counter counter={good} text='good'/>
      <Counter counter={neutral} text='neutral'/>
      <Counter counter={bad} text='bad'/>
      <Counter counter={allFeedbacks} text='all'/>
      <Average good={good} bad={bad} allFeedbacks={allFeedbacks} />
      <Positive good={good} allFeedbacks={allFeedbacks} />

    </div>
  )
}

export default App