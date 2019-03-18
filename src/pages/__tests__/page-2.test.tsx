import React from 'react'
import { render } from 'react-testing-library'
import PageTwo from '../page-2'
import { StaticQuery, useStaticQuery } from '../../../__mocks__/gatsby'

const site = {
  siteMetadata: {
    title: `GatsbyJS`,
  },
}

beforeEach(() => {
  StaticQuery.mockImplementation(({ render }) => render({ site }))
  useStaticQuery.mockReturnValue({ site })
})

describe(`Page Two`, () => {
  it(`contains welcome text`, () => {
    const { getByText } = render(<PageTwo />)

    const el = getByText(`Welcome to page 2`)

    expect(el).toBeInTheDocument()
  })
})
