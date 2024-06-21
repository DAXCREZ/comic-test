import { type Dispatch, type SetStateAction } from 'react'

import { Rating } from '../../components/rating/Rating'
import './comic-nav.scss'
import { Button } from '../../components/button/Button'

interface ComicNavProps {
  id: number
  title: string
  rating: number
  setRating: Dispatch<SetStateAction<number>>
  handleChangeComic: () => void
}

export function ComicNav({ id, title, rating, setRating, handleChangeComic }: ComicNavProps) {
  return (
    <nav className="nav">
      <div className="nav__header">
        <div className="nav__info">
          <h1 className="nav__id"># {id}</h1>
          <h1 className="nav__title">{title}</h1>
          <div className="nav__rating__position">
            <Rating rating={rating} setRating={setRating} />
          </div>
        </div>
        <div className="nav__actions nav__action--disable">
          <Button title="<" onClick={handleChangeComic} />
          <Button title="?" onClick={handleChangeComic} />
          <Button title=">" onClick={handleChangeComic} />
        </div>
      </div>
    </nav>
  )
}
