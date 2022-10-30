import React from 'react'
import { Route, Routes, MemoryRouter } from 'react-router-dom'
import { render } from '@testing-library/react'

export const wrapWithRouter = (node, options = {}) => {
  // @ts-expect-error TS(2339): Property 'routePath' does not exist on type '{}'.
  const { routePath, initialEntries } = options

  const nodeWithRouter = (
    <MemoryRouter initialEntries={initialEntries}>
      <Routes>
        <Route path={routePath} element={node} />
      </Routes>
    </MemoryRouter>
  )
  return {
    nodeWithRouter,
  }
}

export const renderWithRouter = (node, options) => {
  const { nodeWithRouter } = wrapWithRouter(node, options)
  return render(nodeWithRouter)
}
