import './button.scss'

interface ButtonProps {
  title: string
  onClick: () => void
}

export function Button({ title, onClick }: ButtonProps) {
  return (
    <button className="button__comic" data-testid="button-action" type="button" onClick={onClick}>
      {title}
    </button>
  )
}
