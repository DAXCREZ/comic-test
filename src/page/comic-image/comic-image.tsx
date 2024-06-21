import './comic-image.scss'

interface ComicImageProps {
  image: string
  alt: string
}

export function ComicImage({ image, alt }: ComicImageProps) {
  return (
    <div className="container__image">
      <img alt={alt} className="container__image__img" src={image} />
    </div>
  )
}
