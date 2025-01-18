import { WAP_ROUTES } from './children'
import { WapScreen } from '@/screens/WapScreen/WapScreen'

export function WapLayout() {
  return <WapScreen routes={WAP_ROUTES} />
}
