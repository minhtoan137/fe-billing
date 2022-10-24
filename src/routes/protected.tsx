import { Suspense } from 'react'
import { Outlet, RouteObject } from 'react-router-dom'

import { MainLayout } from '@/components/Layout'
import { lazyImport } from '@/utils/lazyImport'

const { Dashboard } = lazyImport(() => import('@/features/misc'), 'Dashboard')
const { CustomersRoute } = lazyImport(
  () => import('@/features/customers'),
  'CustomersRoute',
)
const { NotFound } = lazyImport(() => import('@/features/misc'), 'NotFound')

const App = () => {
  return (
    <MainLayout>
      <Suspense
        fallback={
          <div className="flex h-full w-full items-center justify-center">
            Loading....
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </MainLayout>
  )
}

export const protectedRoutes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Dashboard /> },
      { path: 'customers', element: <CustomersRoute /> },
      // { path: '*', element: <Navigate to="." /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]
