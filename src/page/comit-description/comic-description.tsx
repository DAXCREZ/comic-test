import { Rating } from '../../components/Rating'
import './comic-description.scss'

export function ComicDescription() {
  return (
    <article>
      <h1>Titulo del comic</h1>
      <Rating />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consectetur, metus sed varius fermentum, nunc ex cursus libero, ac dictum justo nunc in neque. Nullam nec libero sit amet justo
        fermentum ultricies. Donec in nunc nec enim ultricies varius. Nullam euismod, nunc nec ultricies fermentum, nunc libero dictum libero, vitae ultricies sapien libero nec nisi. Nullam nec libero
        sit amet justo fermentum ultricies. Donec in nunc nec enim ultricies varius. Nullam euismod, nunc nec ultricies fermentum, nunc libero dictum libero, vitae ultricies sapien libero nec nisi.
      </p>
    </article>
  )
}
