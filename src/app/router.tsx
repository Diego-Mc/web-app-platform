import { Navigate, Route, Routes } from 'react-router'
import { Login } from './routes/Login'
import { AuthorizationLayout } from '@/features/authentication/components/AuthorizationLayout'
import { Wap } from './routes/Wap'
import {
  WAP_SCREENS,
  WAP_ROUTES,
  DEFAULT_WAP_ROUTE,
} from './routes/wap-screens'

export function Router() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<AuthorizationLayout />}>
        <Route path="wap" element={<Wap />}>
          <Route
            index
            element={<Navigate to={DEFAULT_WAP_ROUTE.path} replace />}
          />
          {WAP_ROUTES.map((route) => {
            const Screen = WAP_SCREENS[route.path]
            return (
              <Route key={route.path} path={route.path} element={<Screen />} />
            )
          })}
        </Route>
        <Route path="/" element={<Navigate to="/wap" replace />} />
        <Route path="*" element={<h1>404</h1>} />
      </Route>
    </Routes>
  )
}
