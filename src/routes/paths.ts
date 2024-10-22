import { lazy } from 'react'

export const Home = lazy(() =>
  import('../pages/Home/Home').then(module => ({
    default: module.Home,
  })),
)

export const Loading = lazy(() =>
  import('../components/Loading').then(module => ({
    default: module.Loading,
  })),
)

