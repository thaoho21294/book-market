import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  const a = 1
  render(<App />)
  const linkElement = screen.getByText('Books Market')
  expect(linkElement).toBeInTheDocument()
  expect(0).toEqual(1)
})
