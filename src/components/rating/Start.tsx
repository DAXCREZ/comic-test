interface StartProps {
  onClick: () => void
  color: boolean
}

export function Start({ onClick, color }: StartProps) {
  return (
    <div style={{ color: color ? '#1c2225' : 'white', fontSize: '100px', border: 'none', cursor: 'pointer' }} onClick={onClick}>
      ★
    </div>
  )
}
