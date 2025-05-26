import Button from './Button'

function Keyboard({ onButtonClick }) {
  const buttons = [
  '7', '8', '9', '+',
  '4', '5', '6', '-',
  '1', '2', '3', '*',
  '+/-', '0', '.', '=',
  '/', '%'
]


  return (
    <div className="keyboard">
      {buttons.map((b, i) => (
        <Button key={i} label={b} onClick={onButtonClick} wide={b === '0'} />
      ))}
    </div>
  )
}

export default Keyboard