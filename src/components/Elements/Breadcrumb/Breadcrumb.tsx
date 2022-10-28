import { Breadcrumb as BreadcrumbAnt } from 'antd'
import { ArrowRight2 } from 'iconsax-react'

type BreadcrumbProps = {
  title: string
  subTitle?: string
  onClick?: () => void
}

export const Breadcrumb = ({ title, onClick, subTitle }: BreadcrumbProps) => (
  <BreadcrumbAnt separator={<ArrowRight2 />}>
    <BreadcrumbAnt.Item onClick={onClick}>{title}</BreadcrumbAnt.Item>

    {subTitle && <BreadcrumbAnt.Item>{subTitle}</BreadcrumbAnt.Item>}
  </BreadcrumbAnt>
)
