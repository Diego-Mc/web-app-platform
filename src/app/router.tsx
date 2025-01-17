import { Navigate, Route, Routes } from 'react-router'
import { Login } from './routes/Login'

export function Router() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      {/* TODO: add a layout for wap to be checked for auth */}
      {/* TODO: add a layout for wap to have an inner slot to only render the different inner content */}
      <Route path="/wap/foods" element={<h1>Foods</h1>} />
      <Route path="/wap/cars" element={<h1>Cars</h1>} />
      <Route path="/wap/products" element={<h1>Products</h1>} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}
