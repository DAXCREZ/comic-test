import type { Comic } from '../../model/comic'

import { useEffect, useState } from 'react'

import { getComic } from '../../services/get-comic'
import { ComicImage } from '../comic-image/comic-image'
import { ComicDescription } from '../comit-description/comic-description'

import './comic.scss'
import { getRandomNumber } from '../../util/get-random-number'

export function Comic() {
  const [comicState, setComicState] = useState<Comic>({} as Comic)
  const [idComic, setIdComic] = useState<number>(getRandomNumber())

  const handleGetComic = async () => {
    const id = idComic.toString()
    const response = await getComic(id)

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
        <ComicImage alt={comicState.alt} id={comicState.num} image={comicState.img} />
        <ComicDescription description={comicState.transcript} handleChangeComic={handleGetRandomComic} title={comicState.safe_title} />
      </section>
    </main>
  )
}
