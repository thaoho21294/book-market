import React, { cloneElement } from 'react'
import { createMemoryHistory } from 'history'
import { Route, Routes, MemoryRouter } from 'react-router-dom'
import { render } from '@testing-library/react'

export const wrapWithRouter = (node, options = {}) => {
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
