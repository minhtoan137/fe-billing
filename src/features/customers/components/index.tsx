import { Button, Input } from 'antd'

import { ContentLayout } from '@/components/Layout'

export const Customers = () => {
  return (
    <ContentLayout
      breadcrumb="Quản lý khách hàng"
      extra={
        <>
          <Input.Search
            placeholder="input search text"
            style={{ width: 200 }}
          />
          <Button>Add</Button>
        </>
      }
    >
      Customer
    </ContentLayout>
  )
}
