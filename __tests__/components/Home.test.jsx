import React from 'react'
import { render } from 'react-testing-library'
import 'dom-testing-library/extend-expect'
import Home from '../../src/components/Home'

describe('Home', () => {
  test('renders the main title', () => {
    const {getByTestId} = render(<Home />)
    expect(getByTestId('title')).toHaveTextContent('Welcome')
  })
})
