import { Navigate, Outlet } from 'react-router'
import { useIsAuthorized } from '../hooks/useIsAuthorized'

export function AuthorizationLayout() {
  const isAuthorized = useIsAuthorized()

  if (!isAuthorized) {
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}
