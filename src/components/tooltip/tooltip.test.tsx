import { render, screen } from '@testing-library/react'

import '@testing-library/jest-dom'
import { Tooltip } from './tooltip'

describe('Tooltip', () => {
  it('renders the tooltip text', () => {
    const text = 'Hello, World!'

    render(<Tooltip text={text} />)
    const tooltipText = screen.getByText(text)

    expect(tooltipText).toBeInTheDocument()
  })
})
