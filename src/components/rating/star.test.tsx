import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Star } from './star'

test('Star component should render correctly', () => {
  const onClick = jest.fn()
  const onMouseEnter = jest.fn()
  const onMouseLeave = jest.fn()

  const { getByTestId } = render(<Star color onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />)

  const starElement = getByTestId('star')

  fireEvent.click(starElement)

  expect(starElement).toBeInTheDocument()
  expect(starElement).toHaveStyle('fill: #1c2225;')

  fireEvent.mouseEnter(starElement)
  expect(onMouseEnter).toHaveBeenCalled()

  fireEvent.mouseLeave(starElement)
  expect(onMouseLeave).toHaveBeenCalled()

  expect(onClick).toHaveBeenCalled()
})
