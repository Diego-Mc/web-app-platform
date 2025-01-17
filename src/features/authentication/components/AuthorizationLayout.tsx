import { Navigate, Outlet } from 'react-router'
import { useAuth } from '../hooks/useAuth'

export function AuthorizationLayout() {
  const { isAuthorized } = useAuth()

  if (!isAuthorized) {
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}
