import React from 'react'
import Display from './Display'
import Keyboard from './Keyboard'
import useCalculator from '../hooks/useCalculator'

function Calculator() {
  const { display, handleClick } = useCalculator()

  return (
    <div className="calculator">
      <Display value={display} />
      <Keyboard onButtonClick={handleClick} />
    </div>
  )
}

export default Calculator
