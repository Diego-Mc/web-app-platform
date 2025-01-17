import { LoginScreen } from '@/feature/authentication/screens/LoginScreen'
import { notifications } from '@mantine/notifications'
import { useNavigate } from 'react-router'

export function Login() {
  const navigate = useNavigate()

  const handleLoginSuccess = () => {
    void navigate('/wap')
    notifications.show({
      title: 'Login Success',
      message: 'You are now logged in',
      color: 'green',
    })
  }

  return <LoginScreen onLoginSuccess={handleLoginSuccess} />
}
