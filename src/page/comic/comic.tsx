import type { Comic } from '../../model/comic'

import { useContext, useEffect, useState } from 'react'

import { getComic } from '../../services/get-comic'
import { ComicImage } from '../comic-image/comic-image'
import { ComicNav } from '../comit-nav/comic-nav'
import './comic.scss'
import { getRandomNumber } from '../../util/get-random-number'
import { Button } from '../../components/button/button'
import { Rating } from '../../components/rating/rating'
import { RatingContext } from '../../context/comic-provider'

export function Comic() {
  const [comicState, setComicState] = useState<Comic>({} as Comic)
  const [idComic, setIdComic] = useState<number>(getRandomNumber())
  const [rating, setRating] = useState<number>(0)
  const { rateComic, ratings } = useContext(RatingContext)

  const handleGetComic = async () => {
    const id = idComic.toString()
    const response = await getComic(id)

    setComicState(response)
    const rating = ratings.find((rating) => rating.id === response?.num)

    setRating(rating ? rating.rating : 0)
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

  const handleRateComic = (newRating: number) => {
    setRating(newRating)
    rateComic(comicState.num, newRating)
  }

  return (
    <main className="container">
      <section className="container__section">
        <ComicNav
          handleGetNextComic={handleGetNextComic}
          handleGetPreviousComic={handleGetPreviousComic}
          handleGetRandomComic={handleGetRandomComic}
          handleRateComic={handleRateComic}
          id={comicState.num}
          rating={rating}
          title={comicState.safe_title}
        />
        <ComicImage alt={comicState.alt} image={comicState.img} />
        <footer className="container__footer container__footer--disable">
          <div className="container__actions">
            <Rating rating={rating} setRating={handleRateComic} />
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
