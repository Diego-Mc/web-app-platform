import { Navigate, Route, Routes } from 'react-router'
import { Login } from './routes/Login'
import { AuthorizationLayout } from '@/feature/authentication/components/AuthorizationLayout'
import { WAP_ROUTES } from '@/consts/wap-routes'
import { Wap } from './routes/Wap'

export function Router() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<AuthorizationLayout />}>
        <Route path="wap" element={<Wap />}>
          <Route index element={<Navigate to={WAP_ROUTES[0].path} replace />} />
          {WAP_ROUTES.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<h1>{route.label}</h1>}
            />
          ))}
        </Route>
        <Route path="/" element={<Navigate to="/wap" replace />} />
        <Route path="*" element={<h1>404</h1>} />
      </Route>
    </Routes>
  )
}
