import { WapRoutes } from '@/types/wap-routes'

export const WAP_ROUTES: WapRoutes = [
  { path: 'foods', label: 'Foods' },
  { path: 'cars', label: 'Cars' },
  { path: 'products', label: 'Products' },
]

export const DEFAULT_WAP_ROUTE = WAP_ROUTES[0]

export { Foods } from './Foods'
