import { Badge, Breadcrumb, Space, Tabs } from 'antd'
import { ArrowRight2 } from 'iconsax-react'
import type { Tab } from 'rc-tabs/lib/interface'
import { useNavigate, useParams } from 'react-router-dom'

import { ContentLayout } from '@/components/Layout'

import BasicInformation from './BasicInformation'
import TableDevice from './TableDevice'

export const CustomerDetail = () => {
  const params = useParams()
  const navigate = useNavigate()
  console.log('🚀 ~ file: Cetail ~ params', params)
  const items: Tab[] = [
    { label: 'Thông tin cơ bản', key: 'info', children: <BasicInformation /> },
    {
      label: (
        <Space>
          <span>Thiết bị</span>
          <Badge count={25} />
        </Space>
      ),
      key: 'device',
      children: <TableDevice />,
    },
  ]

  const breadcrumb = (
    <Breadcrumb separator={<ArrowRight2 />}>
      <Breadcrumb.Item
        className="cursor-pointer"
        onClick={() => navigate('/customers')}
      >
        Quản lý khách hàng
      </Breadcrumb.Item>
      <Breadcrumb.Item>Tên khách hàng</Breadcrumb.Item>
    </Breadcrumb>
  )

  return (
    <ContentLayout breadcrumb={breadcrumb}>
      <Tabs defaultActiveKey="device" items={items} />
    </ContentLayout>
  )
}
