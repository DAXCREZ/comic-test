import { StarIcon } from '../../assets/star'

interface StartProps {
  onClick: () => void
  color: boolean
}

export function Start({ onClick, color }: StartProps) {
  return (
    <div onClick={onClick}>
      <StarIcon fill={color ? '#1c2225' : 'white'} fontWeight={5} height={50} stroke={color ? 'white' : '#1c2225'} style={{ border: color ? 'white' : '#1c2225', cursor: 'pointer' }} width={50} />
    </div>
  )
}
