import { Tabs } from 'antd'
import type { Tab } from 'rc-tabs/lib/interface'
import { useNavigate, useParams } from 'react-router-dom'

import { TextBadge, Breadcrumb } from '@/components/Elements'
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
      label: <TextBadge count={25} text="Thiết bị" />,
      key: 'device',
      children: <TableDevice />,
    },
  ]

  const breadcrumb = (
    <Breadcrumb
      subTitle="Mã khách hàng"
      title="Quản lý khách hàng"
      onClick={() => navigate('/customers')}
    />
  )

  return (
    <ContentLayout breadcrumb={breadcrumb}>
      <Tabs defaultActiveKey="device" items={items} />
    </ContentLayout>
  )
}
