import { useState } from 'react'

import { Star } from './star'

import './rating.scss'

interface RatingProps {
  rating: number
  setRating: (newRating: number) => void
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
    <div className="rating" data-testid="rating-component">
      {Array.from({ length: 5 }, (_, index) => (
        <Star
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
