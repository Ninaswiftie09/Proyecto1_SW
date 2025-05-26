function Button({ label, onClick, wide = false }) {
  return (
    <button className={`btn ${wide ? 'wide' : ''}`} onClick={() => onClick(label)}>
      {label}
    </button>
  )
}

export default Button
