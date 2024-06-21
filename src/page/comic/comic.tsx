import type { Comic } from '../../model/comic'

import { useEffect, useState } from 'react'

import { getComic } from '../../services/get-comic'
import { ComicImage } from '../comic-image/comic-image'
import { ComicNav } from '../comit-description/comic-nav'

import './comic.scss'
import { getRandomNumber } from '../../util/get-random-number'

export function Comic() {
  const [comicState, setComicState] = useState<Comic>({} as Comic)
  const [idComic, setIdComic] = useState<number>(getRandomNumber())

  const handleGetComic = async () => {
    const id = idComic.toString()
    const response = await getComic(id)

    console.log(response)

    setComicState(response)
  }

  const handleGetRandomComic = () => {
    setIdComic(getRandomNumber())
  }

  useEffect(() => {
    handleGetComic()
  }, [idComic])

  return (
    <main className="container">
      <section className="container__section">
        <ComicNav handleChangeComic={handleGetRandomComic} id={comicState.num} title={comicState.safe_title} />
        <ComicImage alt={comicState.alt} image={comicState.img} />
      </section>
    </main>
  )
}
