import { Tabs } from 'antd'
import type { Tab } from 'rc-tabs/lib/interface'
// import { useParams } from 'react-router-dom'

import { Breadcrumb, TextBadge } from '@/components/Elements'
import { ContentLayout } from '@/components/Layout'

import BasicInformation from './BasicInformation'
import TableDevice from './TableDevice'

export const CustomerDetail = () => {
  // const params = useParams()
  // console.log('🚀 ~ file: Cetail ~ params', params)

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
      routes={[
        { path: 'customers', breadcrumbName: 'Quản lý khách hàng' },
        { path: 'customerCode', breadcrumbName: 'Mã khách hàng' },
      ]}
    />
  )

  return (
    <ContentLayout breadcrumb={breadcrumb}>
      <Tabs defaultActiveKey="info" items={items} />
    </ContentLayout>
  )
}
