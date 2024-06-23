import { render, screen } from '@testing-library/react'

import { ComicNav } from './comic-nav'
import '@testing-library/jest-dom'
import 'whatwg-fetch'

describe('ComicNav', () => {
  const mockProps = {
    id: 123,
    title: 'Barrel - Part 2',
    rating: 4,
    handleGetRandomComic: jest.fn(),
    handleGetPreviousComic: jest.fn(),
    handleGetNextComic: jest.fn(),
    handleRateComic: jest.fn()
  }

  beforeEach(() => {
    render(<ComicNav {...mockProps} />)
  })

  it('should render the comic id', () => {
    const comicIdElement = screen.getByText('# 123')

    expect(comicIdElement).toBeInTheDocument()
  })

  it('should render the comic title', () => {
    const comicTitleElement = screen.getByText('Barrel - Part 2')

    expect(comicTitleElement).toBeInTheDocument()
  })

  it('should render the comic rating', () => {
    const ratingGroup = screen.getByRole('group', { name: /rating/i })

    expect(ratingGroup).toBeInTheDocument()
  })
})
