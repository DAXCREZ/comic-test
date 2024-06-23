import { render, screen } from '@testing-library/react'

import { ComicImage } from './comic-image'
import '@testing-library/jest-dom'

describe('ComicImage', () => {
  it('renders the image with the correct alt text', () => {
    const image = 'https://example.com/image.jpg'
    const alt = 'Example Alt Text'

    render(<ComicImage alt={alt} image={image} />)

    const imgElement = screen.getByAltText(alt)

    expect(imgElement).toBeInTheDocument()
    expect(imgElement).toHaveAttribute('src', image)
  })
})
