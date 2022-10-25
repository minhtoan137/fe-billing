import { Avatar, Button, Form, Image, Input, Space, Table } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { Add } from 'iconsax-react'
import React, { useState } from 'react'

interface DataType {
  code: string
  name: string
  taxCode: string
  address: string
}

const TableDevice = () => {
  const [isCreate, setIsCreate] = useState<boolean>(false)
  const [form] = Form.useForm()
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
      title: 'Mã thiết bị',
      dataIndex: 'code',
      key: 'code',
      fixed: 'left',
      width: 200,
    },
    {
      title: 'Tên thiết bị',
      dataIndex: 'name',
      key: 'name',
      width: 500,
    },
    {
      title: 'Loại dữ liệu',
      dataIndex: 'type',
      key: 'type',
      width: 200,
    },
    {
      title: 'Ngày hoạt động',
      dataIndex: 'createdAt',
      key: 'createdAt',
      width: 150,
    },
    {
      title: 'Đề xuất',
      dataIndex: 'offer',
      key: 'offer',
      width: 150,
    },
    {
      title: '',
      dataIndex: 'action',
      key: 'action',
      width: 800,
    },
  ]

  const footer = () =>
    isCreate ? (
      <Space>
        <Avatar
          size={40}
          src={
            <Image preview={false} src="https://joeschmoe.io/api/v1/random" />
          }
        />

        <Form name="create_customer_device_form" form={form}>
          <Form.Item label="" name="code" className="mb-0">
            <Input className="w-[650px]" placeholder="Nhập mã thiết bị" />
          </Form.Item>
        </Form>

        <>
          <Button
            type="primary"
            onClick={() => {
              form
                .validateFields()
                .then((values) => {
                  console.log('🚀 ~ file:  ~ values', values)
                  setIsCreate(false)
                })
                .catch((errorInfo) => {
                  console.error(errorInfo)
                })
            }}
          >
            Thêm
          </Button>

          <Button type="text" onClick={() => setIsCreate(false)}>
            Hủy
          </Button>
        </>
      </Space>
    ) : (
      <Space onClick={() => setIsCreate(true)} className="cursor-pointer">
        <Add className="flex" />
        <span>Thêm thiết bị</span>
      </Space>
    )

  return (
    <>
      <Table
        // loading
        // bordered
        footer={footer}
        dataSource={dataSource}
        // className="customers-table"
        columns={columns}
        // pagination={{
        //   defaultPageSize: 10,
        //   defaultCurrent: 1,
        // }}

        scroll={{ x: 'max-content' }}
        rowKey={(record) => record.code}
        // onRow={(record) => ({
        //   onClick: (event) => {
        //     handleClickRow(event, record)
        //   },
        // })}
      />
    </>
  )
}

export default TableDevice
