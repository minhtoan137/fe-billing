import { Button, Input, Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { AddCircle, DocumentDownload, SearchNormal1 } from 'iconsax-react'

import { ContentLayout } from '@/components/Layout'

interface DataType {
  code: string
  name: string
  taxCode: string
  address: string
}

export const Customers = () => {
  const dataSource: DataType[] = [
    {
      code: '1',
      name: 'Mike',
      taxCode: '32',
      address: '10 Downing Street',
    },
    {
      code: '2',
      name: 'John',
      taxCode: '42',
      address: '10 Downing Street',
    },
  ]

  const columns: ColumnsType<DataType> = [
    {
      title: 'Mã khách hàng',
      dataIndex: 'code',
      key: 'code',
      fixed: 'left',
      width: 200,
    },
    {
      title: 'Tên khách hàng',
      dataIndex: 'name',
      key: 'name',
      width: 500,
    },
    {
      title: 'Mã số thuế',
      dataIndex: 'taxCode',
      key: 'taxCode',
      width: 150,
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'address',
      key: 'address',
      width: 800,
    },
  ]

  return (
    <ContentLayout
      breadcrumb="Quản lý khách hàng"
      extra={
        <div className="flex items-center justify-between gap-4">
          <Input
            className="flex min-h-[40px] w-[450px] items-center text-base"
            placeholder="Tìm kiếm MST, mã khách hàng, tên khách hàng"
            suffix={<SearchNormal1 size={19} variant="Bulk" />}
          />

          <Button
            // size='large'
            shape="circle"
            className=" flex min-h-[40px] min-w-[40px] items-center justify-center border-none bg-[#E1EDFB]"
            icon={<DocumentDownload color="#1890FF" variant="Bulk" />}
          />

          <Button
            type="primary"
            className="flex min-h-[40px] items-center justify-between gap-2 border-r-4 px-4 py-2"
            icon={<AddCircle color="#FFFFFF" variant="Bulk" />}
          >
            <span className="text-base">Tạo mới</span>
          </Button>
        </div>
      }
    >
      <Table
        // loading
        bordered
        dataSource={dataSource}
        className="customers-table"
        columns={columns}
        // pagination={{
        //   defaultPageSize: 10,
        //   defaultCurrent: 1,
        // }}
        scroll={{ x: 'max-content' }}
        rowKey={(record) => record.code}
      />
    </ContentLayout>
  )
}
