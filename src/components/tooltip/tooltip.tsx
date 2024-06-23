import './tooltip.scss'

interface TooltipProps {
  text: string
}

export function Tooltip({ text }: TooltipProps) {
  return (
    <div className="tooltip">
      <span className="tooltiptext">{text}</span>
    </div>
  )
}
