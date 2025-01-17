import { LoginForm } from '@/feature/authentication/components/LoginForm'
import { FormValues } from '@/feature/authentication/types/login'
import { useNavigate } from 'react-router'

export function Login() {
  const navigate = useNavigate()

  const handleSubmit = (values: FormValues) => {
    console.log(values)
    void navigate('/wap/foods')
  }

  return <LoginForm onSubmit={handleSubmit} />
}
