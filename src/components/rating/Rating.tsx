import { useState, type Dispatch, type SetStateAction } from 'react'

import { Start } from './Start'
import './rating.scss'

interface RatingProps {
  rating: number
  setRating: Dispatch<SetStateAction<number>>
}

export function Rating({ rating, setRating }: RatingProps) {
  const [hoverRating, setHoverRating] = useState<number | null>(null)

  const handleMouseEnter = (ratingValue: number) => {
    setHoverRating(ratingValue)
  }

  const handleMouseLeave = () => {
    setHoverRating(null)
  }

  return (
    <div className="rating">
      {Array.from({ length: 5 }, (_, index) => (
        <Start
          key={index}
          color={hoverRating !== null ? index < hoverRating : index < rating}
          onClick={() => {
            setRating(index + 1)
          }}
          onMouseEnter={() => {
            handleMouseEnter(index + 1)
          }}
          onMouseLeave={handleMouseLeave}
        />
      ))}
    </div>
  )
}
