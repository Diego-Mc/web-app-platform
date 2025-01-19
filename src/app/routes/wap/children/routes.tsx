import { Navigate, RouteObject } from 'react-router'

import { WapRoute } from '@/types/wap-routes'
import { Foods } from './Foods/Foods'
import { Cars } from './Cars/Cars'
import { Products } from './Products/Products'

export const WAP_ROUTES = [
  { path: 'foods', label: 'Foods' },
  { path: 'cars', label: 'Cars' },
  { path: 'products', label: 'Products' },
] as const satisfies WapRoute[]

type Paths = (typeof WAP_ROUTES)[number]['path']

export const DEFAULT_WAP_ROUTE = WAP_ROUTES[0]

export const WAP_SCREENS: Record<Paths, React.FC> = {
  foods: Foods,
  cars: Cars,
  products: Products,
}

const DEFAULT_WAP_PATH = WAP_ROUTES[0].path

export const wapScreensRoutes: RouteObject[] = [
  {
    index: true,
    element: <Navigate to={DEFAULT_WAP_PATH} replace />,
  },
  ...WAP_ROUTES.map((route) => {
    const Screen = WAP_SCREENS[route.path]
    return {
      path: route.path,
      element: <Screen />,
    }
  }),
]
