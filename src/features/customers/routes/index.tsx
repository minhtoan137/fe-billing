import { Navigate, Route, Routes } from 'react-router-dom'

import { lazyImport } from '@/utils/lazyImport'

const { Customers } = lazyImport(
  () => import('../components/Customers'),
  'Customers',
)
const { CustomerDetail } = lazyImport(
  () => import('../components/CustomerDetail'),
  'CustomerDetail',
)

export const CustomersRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Customers />} />
      <Route path="/:customerId" element={<CustomerDetail />} />
      <Route path="/*" element={<Navigate to={'/customers'} />} />
    </Routes>
  )
}
