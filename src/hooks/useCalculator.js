import { useState } from 'react'

export default function useCalculator() {
  const [display, setDisplay] = useState('0')
  const [firstValue, setFirstValue] = useState(null)
  const [operator, setOperator] = useState(null)
  const [waitingForSecond, setWaitingForSecond] = useState(false)

  const isTooLong = (val) => val.replace('-', '').length > 9
  const toDisplay = (val) => {
    if (val < 0 || val > 999999999 || isTooLong(val.toString())) {
      return 'ERROR'
    }
    return val.toString()
  }

  const inputDigit = (digit) => {
    if (display === 'ERROR') return

    if (waitingForSecond) {
      setDisplay(digit)
      setWaitingForSecond(false)
    } else {
      if (display === '0') {
        setDisplay(digit)
      } else if (display.length < 9) {
        setDisplay(display + digit)
      }
    }
  }

  const inputDot = () => {
    if (display === 'ERROR') return
    if (!display.includes('.') && display.length < 9) {
      setDisplay(display + '.')
    }
  }

  const compute = (a, b, op) => {
    switch (op) {
      case '+': return a + b
      case '-': return a - b
      case '*': return a * b
      case '/': return b === 0 ? Infinity : a / b
      case '%': return a % b
      default: return b
    }
  }

  const handleOperator = (op) => {
    if (display === 'ERROR') return

    if (firstValue != null && !waitingForSecond) {
      const result = compute(firstValue, parseFloat(display), operator)
      setFirstValue(result)
      setDisplay(toDisplay(result))
    } else {
      setFirstValue(parseFloat(display))
    }

    setOperator(op)
    setWaitingForSecond(true)
  }

  const handleEqual = () => {
    if (operator && firstValue != null) {
      const result = compute(firstValue, parseFloat(display), operator)
      const final = toDisplay(result)
      setDisplay(final)
      setFirstValue(null)
      setOperator(null)
      setWaitingForSecond(false)
    }
  }

  const handleSign = () => {
    if (display === 'ERROR') return
    if (display.startsWith('-')) {
      setDisplay(display.slice(1))
    } else if (display.length < 9) {
      setDisplay('-' + display)
    }
  }

  const handleClick = (label) => {
    if (!isNaN(label)) {
      inputDigit(label)
    } else if (label === '.') {
      inputDot()
    } else if (label === '=') {
      handleEqual()
    } else if (['+', '-', '*', '/', '%'].includes(label)) {
      handleOperator(label)
    } else if (label === '+/-') {
      handleSign()
    }
  }

  return {
    display,
    handleClick,
  }
}
