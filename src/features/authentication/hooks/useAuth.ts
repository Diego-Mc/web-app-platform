import { useSessionStorage } from '@mantine/hooks'
import { FAKE_AUTH_TOKEN, FAKE_AUTH_TOKEN_KEY } from '../consts/login'
import { useCallback, useMemo } from 'react'

export function useAuth() {
  const [value, setValue, removeValue] = useSessionStorage({
    key: FAKE_AUTH_TOKEN_KEY,
    defaultValue: '',
    getInitialValueInEffect: false,
  })

  const login = useCallback(() => {
    setValue(FAKE_AUTH_TOKEN)
  }, [setValue])

  const logout = useCallback(() => {
    removeValue()
  }, [removeValue])

  const isAuthorized = useMemo(() => value === FAKE_AUTH_TOKEN, [value])

  return { login, logout, isAuthorized }
}
