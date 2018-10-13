import React from 'react'
import renderer from 'react-test-renderer'
import IndexPage from '.'

describe('index', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<IndexPage />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
