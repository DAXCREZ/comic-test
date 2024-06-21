import { StarIcon } from '../../assets/star'
import './star.scss'

interface StartProps {
  onClick: () => void
  color: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
}

export function Start({ onClick, color, onMouseEnter, onMouseLeave }: StartProps) {
  return (
    <div onClick={onClick}>
      <StarIcon className="container__star" fill={color ? '#1c2225' : 'white'} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
    </div>
  )
}
