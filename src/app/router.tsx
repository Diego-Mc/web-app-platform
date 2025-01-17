import { Navigate, Outlet, Route, Routes } from 'react-router'
import { Login } from './routes/Login'
import { AuthorizationLayout } from '@/feature/authentication/components/AuthorizationLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<AuthorizationLayout />}>
        <Route path="wap" element={<Outlet />}>
          <Route index element={<Navigate to="foods" replace />} />
          <Route path="foods" element={<h1>Foods</h1>} />
          <Route path="cars" element={<h1>Cars</h1>} />
          <Route path="products" element={<h1>Products</h1>} />
        </Route>
        <Route path="/" element={<Navigate to="/wap" replace />} />
        <Route path="*" element={<h1>404</h1>} />
      </Route>
    </Routes>
  )
}
