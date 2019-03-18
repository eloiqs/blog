import React from 'react'
import { render } from 'react-testing-library'
import { StaticQuery, useStaticQuery } from '../../../__mocks__/gatsby'
import FourOhFour from '../404'

const site = {
  siteMetadata: {
    title: `GatsbyJS`,
  },
}

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) => render({ site }))
  useStaticQuery.mockReturnValue({ site })
})

describe(`404`, () => {
  it(`contains NOT FOUND text`, () => {
    const { getByText } = render(<FourOhFour />)

    const el = getByText(`NOT FOUND`)

    expect(el).toBeInTheDocument()
  })
})
