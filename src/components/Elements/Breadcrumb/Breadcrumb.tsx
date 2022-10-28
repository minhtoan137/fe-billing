import { Breadcrumb as BreadcrumbAnt } from 'antd'
import { ArrowRight2 } from 'iconsax-react'
import { Link } from 'react-router-dom'

type Route = {
  path: string
  breadcrumbName: string
  children?: Omit<Route, 'children'>[]
}

type BreadcrumbProps = {
  routes: Array<Route>
}

export const Breadcrumb = ({ routes }: BreadcrumbProps) => (
  <BreadcrumbAnt
    routes={routes}
    itemRender={itemRender}
    separator={<ArrowRight2 />}
  />
)

const itemRender = (
  route: Route,
  _: any,
  routes: Array<Route>,
  paths: Array<string>,
) => {
  const last = routes.indexOf(route) === routes.length - 1

  return last ? (
    <span>{route.breadcrumbName}</span>
  ) : (
    <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
  )
}
