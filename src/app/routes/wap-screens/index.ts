import { WapRoutes } from '@/types/wap-routes'
import { Foods } from './Foods'
import { Cars } from './Cars'
import { Products } from './Products'

type Paths = 'foods' | 'cars' | 'products'

export const WAP_ROUTES: WapRoutes<Paths> = [
  { path: 'foods', label: 'Foods' },
  { path: 'cars', label: 'Cars' },
  { path: 'products', label: 'Products' },
] as const

export const DEFAULT_WAP_ROUTE = WAP_ROUTES[0]

export const WAP_SCREENS: Record<Paths, React.FC> = {
  foods: Foods,
  cars: Cars,
  products: Products,
}
