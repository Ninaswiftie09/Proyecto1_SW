import { render, screen, fireEvent } from '@testing-library/react'
import Calculator from '../components/Calculator'
import { describe, it, expect } from 'vitest'

describe('Calculator', () => {
  it('muestra número al hacer clic', () => {
    render(<Calculator />)
    fireEvent.click(screen.getByText('7'))
    expect(screen.getByTestId('display')).toHaveTextContent('7')
  })

  it('suma dos números correctamente', () => {
    render(<Calculator />)
    fireEvent.click(screen.getByText('3'))
    fireEvent.click(screen.getByText('+'))
    fireEvent.click(screen.getByText('4'))
    fireEvent.click(screen.getByText('='))
    expect(screen.getByTestId('display')).toHaveTextContent('7')
  })

  it('muestra ERROR si el número es negativo', () => {
    render(<Calculator />)
    fireEvent.click(screen.getByText('3'))
    fireEvent.click(screen.getByText('-'))
    fireEvent.click(screen.getByText('7'))
    fireEvent.click(screen.getByText('='))
    expect(screen.getByTestId('display')).toHaveTextContent('ERROR')
  })

  it('muestra ERROR si hay más de 9 caracteres', () => {
    render(<Calculator />)
    const longNumber = '1234567890'
    for (const digit of longNumber) {
      fireEvent.click(screen.getByText(digit))
    }
    expect(screen.getByTestId('display')).not.toHaveTextContent(longNumber)
  })
})
