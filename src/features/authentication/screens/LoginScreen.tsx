import { LoginForm } from '../components/LoginForm'
import { useAuth } from '../hooks/useAuth'
import { Navigate } from 'react-router'

type Props = {
  onLoginSuccess: () => void
}

export function LoginScreen(props: Props) {
  const { onLoginSuccess } = props
  const { isAuthorized } = useAuth()

  if (isAuthorized) {
    return <Navigate to="/" replace />
  }

  const handleSubmit = () => {
    onLoginSuccess()
  }

  return <LoginForm onSubmit={handleSubmit} />
}
