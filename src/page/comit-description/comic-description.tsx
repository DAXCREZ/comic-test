import { useState } from 'react'

import { Rating } from '../../components/rating/Rating'
import './comic-description.scss'
import { Button } from '../../components/button/Button'

interface ComicDescriptionProps {
  title: string
  description: string
  handleChangeComic: () => void
}

export function ComicDescription({ title, description, handleChangeComic }: ComicDescriptionProps) {
  const [rating, setRating] = useState<number>(0)

  return (
    <article className="description">
      <h1 className="description__title">{title}</h1>
      <p className="description__content">{description}</p>
      <Rating rating={rating} setRating={setRating} />
      <Button onClick={handleChangeComic} />
    </article>
  )
}
