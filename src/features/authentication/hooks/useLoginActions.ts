import { useSessionStorage } from '@mantine/hooks'
import { FAKE_AUTH_TOKEN, FAKE_AUTH_TOKEN_KEY } from '../consts/login'
import { useCallback } from 'react'

export function useLoginActions() {
  const [, setValue, removeValue] = useSessionStorage({
    key: FAKE_AUTH_TOKEN_KEY,
    defaultValue: '',
  })

  const login = useCallback(() => {
    setValue(FAKE_AUTH_TOKEN)
  }, [setValue])

  const logout = useCallback(() => {
    removeValue()
  }, [removeValue])

  return { login, logout }
}
