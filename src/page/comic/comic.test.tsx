import { render, waitFor } from '@testing-library/react'

import '@testing-library/jest-dom'
import { RatingContext } from '../../context/comic-provider'
import { getComic } from '../../services/get-comic'

import { Comic } from './comic'

jest.mock('../../services/get-comic')

const mockGetComic = getComic as jest.MockedFunction<typeof getComic>

const mockRateComic = jest.fn()
const mockRatings = [{ id: 123, rating: 4 }]

const renderComic = () => {
  return render(
    <RatingContext.Provider value={{ rateComic: mockRateComic, ratings: mockRatings }}>
      <Comic />
    </RatingContext.Provider>
  )
}

describe('Comic', () => {
  beforeEach(() => {
    mockGetComic.mockClear()
    mockRateComic.mockClear()
  })

  it('should fetch comic data on initial render', async () => {
    const mockComic = {
      month: '1',
      num: 123,
      link: '',
      year: '2021',
      news: '',
      safe_title: 'Title',
      transcript: '',
      alt: 'alt text',
      img: 'image.jpg',
      title: 'Title',
      day: '1'
    }

    mockGetComic.mockResolvedValue([mockComic, null])

    renderComic()

    await waitFor(() => {
      expect(mockGetComic).toHaveBeenCalledWith('123')
    })
  })
})
