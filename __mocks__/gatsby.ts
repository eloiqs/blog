import React from 'react'

export const gatsby = jest.requireActual('gatsby')

export const graphql = jest.fn()

export const Link = jest.fn().mockImplementation(({ to, ...rest }) =>
  React.createElement('a', {
    ...rest,
    href: to,
  })
)

export const StaticQuery = jest.fn()
export const useStaticQuery = jest.fn()
