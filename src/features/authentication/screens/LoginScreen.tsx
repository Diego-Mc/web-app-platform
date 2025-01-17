import { LoginForm } from '../components/LoginForm'
import { useIsAuthorized } from '../hooks/useIsAuthorized'
import { Navigate } from 'react-router'

type Props = {
  onLoginSuccess: () => void
}

export function LoginScreen(props: Props) {
  const { onLoginSuccess } = props
  const isAuthorized = useIsAuthorized()

  if (isAuthorized) {
    return <Navigate to="/" replace />
  }

  const handleSubmit = () => {
    onLoginSuccess()
  }

  return <LoginForm onSubmit={handleSubmit} />
}
