import { getComic } from './get-comic'
import '@testing-library/jest-dom'
import 'whatwg-fetch'

describe('getComic', () => {
  it('should return the comic data when a valid id is provided', async () => {
    const id = '123'
    const expectedComic = {
      month: '6',
      num: 123,
      link: '',
      year: '2006',
      news: '',
      safe_title: 'Barrel - Part 2',
      transcript: '',
      alt: 'Barrel - Part 2',
      img: 'https://imgs.xkcd.com/comics/barrel_cropped_(1).jpg',
      title: 'Barrel - Part 2',
      day: '1'
    }

    jest.spyOn(global, 'fetch').mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        contents: JSON.stringify(expectedComic)
      })
    } as Response)

    const [comic, error] = await getComic(id)

    expect(comic).toEqual(expectedComic)
    expect(error).toBeNull()

    jest.restoreAllMocks()
  })

  it('should return null and an error when an invalid id is provided', async () => {
    const id = 'abc'

    const [comic, error] = await getComic(id)

    expect(comic).toBeNull()
    expect(error).toBeInstanceOf(Error)
    expect((error as Error).message).toBe('Id invalido')
  })

  it('should return null and an error when an error occurs during the API request', async () => {
    const id = '456'
    const expectedError = new Error('API request failed')

    jest.spyOn(global, 'fetch').mockRejectedValueOnce(expectedError)

    const [comic, error] = await getComic(id)

    expect(comic).toBeNull()
    expect(error).toBe(expectedError)

    jest.restoreAllMocks()
  })
})
