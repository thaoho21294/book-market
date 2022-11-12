import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  render(<App />)
  const linkElement = screen.getByText('Books Market')
  expect(linkElement).toBeInTheDocument()
  expect(0).toEqual(1)
})
