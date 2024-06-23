import { Tooltip } from '../tooltip/tooltip'
import './button.scss'

interface ButtonProps {
  title: string
  onClick: () => void
  tooltipText: string
}

export function Button({ title, onClick, tooltipText }: ButtonProps) {
  return (
    <div className="button__wrapper">
      <button className="button__comic" data-testid="button-action" type="button" onClick={onClick}>
        {title}
      </button>
      <Tooltip text={tooltipText} />
    </div>
  )
}
