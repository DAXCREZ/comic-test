import { type Dispatch, type SetStateAction } from 'react'

import { Rating } from '../../components/rating/Rating'
import './comic-nav.scss'
import { Button } from '../../components/button/Button'

interface ComicNavProps {
  id: number
  title: string
  rating: number
  handleGetRandomComic: () => void
  handleGetPreviousComic: () => void
  handleGetNextComic: () => void
  handleRateComic: (newRating: number) => void
}

export function ComicNav({ id, title, rating, handleGetRandomComic, handleGetNextComic, handleGetPreviousComic, handleRateComic }: ComicNavProps) {
  return (
    <nav className="nav">
      <div className="nav__header">
        <div className="nav__info">
          <h1 className="nav__id"># {id}</h1>
          <h1 className="nav__title">{title}</h1>
          <div className="nav__rating__position">
            <Rating rating={rating} setRating={handleRateComic} />
          </div>
        </div>
        <div className="nav__actions nav__action--disable">
          <Button title="<" onClick={handleGetPreviousComic} />
          <Button title="?" onClick={handleGetRandomComic} />
          <Button title=">" onClick={handleGetNextComic} />
        </div>
      </div>
    </nav>
  )
}
