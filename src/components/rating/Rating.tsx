import type { Dispatch, SetStateAction } from 'react'

import { Start } from './Start'
import './rating.scss'

interface RatingProps {
  rating: number
  setRating: Dispatch<SetStateAction<number>>
}

export function Rating({ rating, setRating }: RatingProps) {
  return (
    <div className="rating">
      {Array.from({ length: 5 }, (_, index) => (
        <Start
          key={index}
          color={index < rating}
          onClick={() => {
            setRating(index + 1)
          }}
        />
      ))}
    </div>
  )
}
