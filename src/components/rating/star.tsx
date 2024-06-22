import { StarIcon } from '../../assets/star-icon'
import './star.scss'

interface StartProps {
  onClick: () => void
  color: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
}

export function Star({ onClick, color, onMouseEnter, onMouseLeave }: StartProps) {
  return (
    <div onClick={onClick}>
      <StarIcon className="container__star" data-testid="star" style={{ fill: color ? '#1c2225' : 'white' }} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
    </div>
  )
}
