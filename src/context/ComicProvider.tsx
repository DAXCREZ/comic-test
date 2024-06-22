import { createContext, useState } from 'react'

export interface RatedComic {
  id: number
  rating: number
}

interface RatingContextProps {
  ratings: RatedComic[]
  rateComic: (id: number, rating: number) => void
}

const RatingContext = createContext<RatingContextProps | null>(null)

interface RatingProviderProps {
  children: React.ReactNode
}

function RatingProvider({ children }: RatingProviderProps) {
  const [ratings, setRatings] = useState<RatedComic[]>([])

  const rateComic = (id: number, rating: number) => {
    setRatings((prevRatings) => {
      const existingRatingIndex = prevRatings.findIndex((r) => r.id === id)

      if (existingRatingIndex !== -1) {
        const updatedRatings = [...prevRatings]

        updatedRatings[existingRatingIndex] = { id, rating }

        return updatedRatings
      } else {
        return [...prevRatings, { id, rating }]
      }
    })
  }

  return <RatingContext.Provider value={{ ratings, rateComic }}>{children}</RatingContext.Provider>
}

export { RatingContext, RatingProvider }
