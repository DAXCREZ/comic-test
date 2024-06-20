import './button.scss'

interface ButtonProps {
  onClick: () => void
}

export function Button({ onClick }: ButtonProps) {
  return <button onClick={onClick}>Siguiente comic</button>
}
