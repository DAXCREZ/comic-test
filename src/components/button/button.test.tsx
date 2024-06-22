import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Button } from './button'

test('renders button with correct title', () => {
  const title = 'Click me'

  render(<Button title={title} onClick={() => {}} />)
  const buttonElement = screen.getByText(title)

  expect(buttonElement).toBeInTheDocument()
})

test('calls onClick when button is clicked', () => {
  const onClickMock = jest.fn()

  render(<Button title="Click me" onClick={onClickMock} />)
  const buttonElement = screen.getByText('Click me')

  fireEvent.click(buttonElement)
  expect(onClickMock).toHaveBeenCalled()
})
