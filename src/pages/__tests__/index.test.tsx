import { StaticQuery, useStaticQuery } from '../../../__mocks__/gatsby'
import React from 'react'
import { render } from 'react-testing-library'
import Index from '..'

const site = {
  siteMetadata: {
    title: `GatsbyJS`,
  },
}

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({ site })
  ).mockImplementationOnce(({ render }) =>
    render({
      placeholderImage: {
        childImageSharp: {
          fluid: {
            aspectRatio: 1,
            sizes: `100 200 300`,
            src: `pretend-i-am-a-base64-encoded-image`,
            srcSet: `asdfasdf`,
          },
        },
      },
    })
  )

  useStaticQuery.mockReturnValue({ site })
})

describe(`Index`, () => {
  const data = {
    allMarkdownRemark: {
      totalCount: 0,
      edges: [],
    },
  }

  it(`renders`, () => {
    const { container } = render(<Index data={data} />)
    expect(container).toBeInTheDocument()
  })
})
