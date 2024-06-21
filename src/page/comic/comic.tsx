import type { Comic } from '../../model/comic'

import { useEffect, useState } from 'react'

import { getComic } from '../../services/get-comic'
import { ComicImage } from '../comic-image/comic-image'
import { ComicNav } from '../comit-nav/comic-nav'

import './comic.scss'
import { getRandomNumber } from '../../util/get-random-number'
import { Button } from '../../components/button/Button'
import { Rating } from '../../components/rating/Rating'

export function Comic() {
  const [comicState, setComicState] = useState<Comic>({} as Comic)
  const [idComic, setIdComic] = useState<number>(getRandomNumber())
  const [rating, setRating] = useState<number>(0)

  const handleGetComic = async () => {
    const id = idComic.toString()
    const response = await getComic(id)

    console.log(response)

    setComicState(response)
  }

  const handleGetRandomComic = () => {
    setIdComic(getRandomNumber())
  }

  const handleGetPreviousComic = () => {
    const idValidate = idComic - 1

    if (idValidate <= 0) {
      return
    }

    setIdComic(idValidate)
  }

  const handleGetNextComic = () => {
    const idValidate = idComic + 1

    if (idValidate >= 2949) {
      return
    }
    setIdComic(idComic + 1)
  }

  useEffect(() => {
    handleGetComic()
  }, [idComic])

  return (
    <main className="container">
      <section className="container__section">
        <ComicNav
          handleGetNextComic={handleGetNextComic}
          handleGetPreviousComic={handleGetPreviousComic}
          handleGetRandomComic={handleGetRandomComic}
          id={comicState.num}
          rating={rating}
          setRating={setRating}
          title={comicState.safe_title}
        />
        <ComicImage alt={comicState.alt} image={comicState.img} />
        <footer className="container__footer container__footer--disable">
          <div className="container__actions">
            <Rating rating={rating} setRating={setRating} />
          </div>
          <div className="container__actions">
            <Button title="<" onClick={handleGetPreviousComic} />
            <Button title="?" onClick={handleGetRandomComic} />
            <Button title=">" onClick={handleGetNextComic} />
          </div>
        </footer>
      </section>
    </main>
  )
}
