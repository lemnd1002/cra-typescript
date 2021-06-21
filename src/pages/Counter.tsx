import React, { useState } from 'react'
import { Button } from 'reactstrap'

const Counter: React.FunctionComponent<{}> = (props) => {
  const [number, setNumber] = useState(0)

  const onIncrease = () => {
    setNumber(number + 1)
  }

  const onReset = () => {
    setNumber(0)
  }

  return (
    <div className="container text-center counter">
      <p>{number}</p>
      <Button className="custom-button" color="primary" onClick={onIncrease}>
        Increase 1
      </Button>
      <Button className="custom-button" color="info" onClick={onReset}>
        Reset to 0
      </Button>
    </div>
  )
}

export default Counter
