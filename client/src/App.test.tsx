import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  const a = 1;
  render(<App />)
  const linkElement = screen.getByText('Book Market')
  expect(linkElement).toBeInTheDocument()
})
