import { Navigate, Route, Routes } from 'react-router-dom'

import { Customers } from '../components'

export const CustomersRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Customers />} />
      <Route path="/*" element={<Navigate to={'/customers'} />} />
    </Routes>
  )
}
