import { createContext, useEffect, useState } from 'react'

export interface RatedComic {
  id: number
  rating: number
}

interface RatingContextProps {
  ratings: RatedComic[]
  rateComic: (id: number, rating: number) => void
}

const initialContext: RatingContextProps = {
  ratings: [],
  rateComic: () => null
}

const RatingContext = createContext<RatingContextProps>(initialContext)

interface RatingProviderProps {
  children: React.ReactNode
}

function RatingProvider({ children }: RatingProviderProps) {
  const [ratings, setRatings] = useState<RatedComic[]>([])

  useEffect(() => {
    const storedRatings = localStorage.getItem('comicRatings')

    if (storedRatings) {
      setRatings(JSON.parse(storedRatings) as RatedComic[])
    }
  }, [])

  const rateComic = (id: number, rating: number) => {
    setRatings((prevRatings) => {
      const existingRatingIndex = prevRatings.findIndex((r) => r.id === id)
      let updatedRatings

      if (existingRatingIndex !== -1) {
        updatedRatings = [...prevRatings]
        updatedRatings[existingRatingIndex] = { id, rating }
      } else {
        updatedRatings = [...prevRatings, { id, rating }]
      }
      localStorage.setItem('comicRatings', JSON.stringify(updatedRatings))

      return updatedRatings
    })

    return null
  }

  return <RatingContext.Provider value={{ ratings, rateComic }}>{children}</RatingContext.Provider>
}

export { RatingContext, RatingProvider }
