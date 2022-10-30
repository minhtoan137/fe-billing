import { Button, Input, Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { AddCircle, DocumentDownload, SearchNormal1 } from 'iconsax-react'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

import { Breadcrumb } from '@/components/Elements'
import { ContentLayout } from '@/components/Layout'

import DrawerCustomer, { DrawerCustomerRef } from './DrawerCustomer'

interface DataType {
  code: string
  name: string
  taxCode: string
  address: string
}

export const Customers = () => {
  const navigate = useNavigate()
  const drawerCustomerRef = useRef<DrawerCustomerRef | null>(null)

  const handleOpenDrawerCustomer = () => {
    drawerCustomerRef.current?.showDrawer()
  }

  const handleClickRow = (
    event: React.MouseEvent<any, MouseEvent>,
    record: DataType,
  ) => {
    event.preventDefault()

    navigate('/customers/123')

    console.log(record, 'record')
  }

  const breadcrumb = (
    <Breadcrumb
      routes={[{ path: 'customers', breadcrumbName: 'Quản lý khách hàng' }]}
    />
  )

  return (
    <ContentLayout
      breadcrumb={breadcrumb}
      extra={
        <div className="flex items-center justify-between gap-4">
          <Input
            className="w-[450px]"
            placeholder="Tìm kiếm MST, mã khách hàng, tên khách hàng"
            suffix={<SearchNormal1 size={19} variant="Bulk" />}
          />

          <Button
            shape="circle"
            className="flex min-w-[40px] items-center justify-center"
            icon={<DocumentDownload className="text-blue-500" variant="Bulk" />}
          />

          <Button
            type="primary"
            className="flex gap-2"
            onClick={handleOpenDrawerCustomer}
            icon={<AddCircle className="text-gray-0" variant="Bulk" />}
          >
            Tạo mới
          </Button>
        </div>
      }
    >
      <Table
        // loading
        // bordered
        dataSource={dataSource}
        className="customers-table"
        columns={columns}
        // pagination={{
        //   defaultPageSize: 10,
        //   defaultCurrent: 1,
        // }}
        scroll={{ x: 'max-content' }}
        rowKey={(record) => record.code}
        rowClassName="cursor-pointer"
        onRow={(record) => ({
          // onClick: (event) => {
          //   handleClickRow(event, record)
          // },
          onDoubleClick: (event) => {
            handleClickRow(event, record)
          },
        })}
      />

      <DrawerCustomer ref={drawerCustomerRef} />
    </ContentLayout>
  )
}

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
