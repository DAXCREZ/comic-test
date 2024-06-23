import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Button } from './buttons'

test('renders button with correct title', () => {
  const title = 'Click me'
  const titleTooltip = 'tooltip text'

  render(<Button title={title} tooltipText={titleTooltip} onClick={() => {}} />)
  const buttonElement = screen.getByText(title)

  expect(buttonElement).toBeInTheDocument()
})

test('calls onClick when button is clicked', () => {
  const onClickMock = jest.fn()
  const titleTooltip = 'tooltip text 2'

  render(<Button title="Click me" tooltipText={titleTooltip} onClick={onClickMock} />)
  const buttonElement = screen.getByText('Click me')

  fireEvent.click(buttonElement)
  expect(onClickMock).toHaveBeenCalled()
})

test('renders button with correct title', () => {
  const title = 'Click me'
  const titleTooltip = 'tooltip text 3'

  render(<Button title={title} tooltipText={titleTooltip} onClick={() => {}} />)
  const buttonElement = screen.getByText(title)

  expect(buttonElement).toBeInTheDocument()
})

test('calls onClick when button is clicked', () => {
  const onClickMock = jest.fn()
  const titleTooltip = 'tooltip text 4'

  render(<Button title="Click me" tooltipText={titleTooltip} onClick={onClickMock} />)
  const buttonElement = screen.getByText('Click me')

  fireEvent.click(buttonElement)
  expect(onClickMock).toHaveBeenCalled()
})
