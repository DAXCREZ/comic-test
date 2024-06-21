import './button.scss'

interface ButtonProps {
  title: string
  onClick: () => void
}

export function Button({ title, onClick }: ButtonProps) {
  return (
    <button className="button__comic" type="button" onClick={onClick}>
      {title}
    </button>
  )
}
