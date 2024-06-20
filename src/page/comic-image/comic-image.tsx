import './comic-image.scss'

interface ComicImageProps {
  id: number
  image: string
  alt: string
}

export function ComicImage({ id, image, alt }: ComicImageProps) {
  return (
    <article className="image">
      <div className="image__circle">{id}</div>
      <figure className="image__content">
        <img alt={alt} className="image__img" src={image} />
      </figure>
    </article>
  )
}
