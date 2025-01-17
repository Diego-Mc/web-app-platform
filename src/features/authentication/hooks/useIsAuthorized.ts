import { useSessionStorage } from '@mantine/hooks'
import { FAKE_AUTH_TOKEN_KEY } from '../consts/login'

export function useIsAuthorized() {
  const [value] = useSessionStorage({
    key: FAKE_AUTH_TOKEN_KEY,
    getInitialValueInEffect: false,
  })

  return !!value
}
