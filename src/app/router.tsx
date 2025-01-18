import { createBrowserRouter, Navigate, RouterProvider } from 'react-router'
import { authRoutes } from './routes/auth'
import { wapRoutes } from './routes/wap'
import { AuthorizationLayout } from '@/features/authentication/components/AuthorizationLayout'

const router = createBrowserRouter([
  ...authRoutes,
  {
    element: <AuthorizationLayout />,
    children: [
      ...wapRoutes,
      {
        path: '/',
        element: <Navigate to="/wap" replace />,
      },
      {
        path: '*',
        element: <h1>404</h1>,
      },
    ],
  },
])

export function Router() {
  return <RouterProvider router={router} />
}
