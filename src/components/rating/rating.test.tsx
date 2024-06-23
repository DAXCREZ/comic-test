import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Rating } from './rating'

test('renders the Rating component', () => {
  const setRating = () => {
    return
  }
  const { getByTestId } = render(<Rating rating={3} setRating={setRating} />)
  const ratingComponent = getByTestId('rating-component')

  expect(ratingComponent).toBeInTheDocument()
})

test('renders the correct number of stars', () => {
  const setRating = () => {
    return
  }
  const { getAllByTestId } = render(<Rating rating={3} setRating={setRating} />)
  const stars = getAllByTestId('star')

  expect(stars.length).toBe(5)
})

test('sets the rating on star click', () => {
  let rating = 0
  const setRating = (newRating: number) => {
    rating = newRating
  }
  const { getAllByTestId } = render(<Rating rating={rating} setRating={setRating} />)
  const stars = getAllByTestId('star')

  fireEvent.click(stars[2])
  expect(rating).toBe(3)
})
