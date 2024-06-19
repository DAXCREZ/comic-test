import { useEffect } from 'react'

import { getComic } from '../../services/get-comic'
import { ComicImage } from '../comic-image/comic-image'
import { ComicDescription } from '../comit-description/comic-description'
import './comic.scss'

export function Comic() {
  const handleGetComic = async () => {
    const response = await getComic('614')
  }

  useEffect(() => {
    handleGetComic()
  }, [])

  return (
    <main className="container">
      <section className="container__section">
        <ComicImage />
        <ComicDescription />
      </section>
    </main>
  )
}
