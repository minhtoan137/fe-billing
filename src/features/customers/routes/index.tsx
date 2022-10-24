import { Route, Routes } from 'react-router-dom'

import { Customers } from '../components'

export const CustomersRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Customers />} />
    </Routes>
  )
}
