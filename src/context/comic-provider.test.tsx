import { render, screen } from '@testing-library/react'

import { RatingProvider, RatingContext } from './comic-provider'

import '@testing-library/jest-dom'
import 'whatwg-fetch'

describe('RatingProvider', () => {
  it('should render the children', () => {
    render(
      <RatingProvider>
        <div>Child Component</div>
      </RatingProvider>
    )

    const childComponent = screen.getByText('Child Component')

    expect(childComponent).toBeInTheDocument()
  })

  it('should initialize ratings from localStorage', () => {
    const storedRatings = [
      { id: 1, rating: 5 },
      { id: 2, rating: 3 }
    ]

    localStorage.setItem('comicRatings', JSON.stringify(storedRatings))

    render(
      <RatingProvider>
        <RatingContext.Consumer>{(context) => <div>Ratings Count: {context.ratings.length}</div>}</RatingContext.Consumer>
      </RatingProvider>
    )

    const ratingsCount = screen.getByText('Ratings Count: 2')

    expect(ratingsCount).toBeInTheDocument()
  })
})
