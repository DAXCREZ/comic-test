import { useState } from 'react'

import { Rating } from '../../components/rating/Rating'
import './comic-nav.scss'
import { Button } from '../../components/button/Button'

interface ComicNavProps {
  id: number
  title: string
  handleChangeComic: () => void
}

export function ComicNav({ id, title, handleChangeComic }: ComicNavProps) {
  const [rating, setRating] = useState<number>(0)

  return (
    <nav className="nav">
      <div className="nav__header">
        <div className="nav__info">
          <div className="nav__id"># {id}</div>
          <h1 className="nav__title">{title}</h1>
          <Rating rating={rating} setRating={setRating} />
        </div>
        <div className="nav__actions">
          <Button title="<" onClick={handleChangeComic} />
          <Button title="?" onClick={handleChangeComic} />
          <Button title=">" onClick={handleChangeComic} />
        </div>
      </div>
    </nav>
  )
}
