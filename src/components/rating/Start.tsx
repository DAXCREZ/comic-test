import { StarIcon } from '../../assets/star'
import './star.scss'

interface StartProps {
  onClick: () => void
  color: boolean
}

export function Start({ onClick, color }: StartProps) {
  return (
    <div onClick={onClick}>
      <StarIcon className="container__star" fill={color ? '#1c2225' : 'white'} stroke={color ? 'white' : '#1c2225'} style={{ border: color ? 'white' : '#1c2225' }} />
    </div>
  )
}
