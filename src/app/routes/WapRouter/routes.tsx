import { RouteObject } from 'react-router'
import { WapLayout } from './WapLayout'
import { wapScreensRoutes } from './children'

export const wapRoutes: RouteObject[] = [
  {
    path: 'wap',
    element: <WapLayout />,
    children: wapScreensRoutes,
  },
]
