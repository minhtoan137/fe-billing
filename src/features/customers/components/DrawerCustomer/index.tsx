import { Button, Col, Divider, Drawer, Form, Input, Row, Space } from 'antd'
import { Refresh2 } from 'iconsax-react'
import { forwardRef, useImperativeHandle, useState } from 'react'

type DrawerCustomerProps = Record<string, unknown>

export type DrawerCustomerRef = {
  showDrawer: () => void
}

const DrawerCustomer = forwardRef<DrawerCustomerRef, DrawerCustomerProps>(
  (_, ref) => {
    const [open, setOpen] = useState<boolean>(false)

    const [form] = Form.useForm()

    useImperativeHandle(ref, () => ({ showDrawer }), [])

    const showDrawer = () => {
      setOpen(true)
    }

    const onClose = () => {
      setOpen(false)
      form.resetFields()
    }

    const handleSubmit = () => {
      form
        .validateFields()
        .then((values) => {
          console.log('🚀 ~ file:  ~ values', values)
          onClose()
        })
        .catch((errorInfo) => {
          console.error(errorInfo)
        })
    }

    const handleRetype = () => {
      form.resetFields()
    }

    return (
      <Drawer
        title={<b>Tạo khách hàng</b>}
        width="26.25%"
        // width={722}
        onClose={onClose}
        open={open}
        extra={
          <Button type="primary" onClick={handleSubmit}>
            Tạo
          </Button>
        }
        destroyOnClose
      >
        <Form form={form} layout="vertical" name="customer_form">
          <Space className="flex" direction="vertical" size="middle">
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="code"
                  label="Mã khách hàng"
                  rules={[
                    { required: true, message: 'Vui lòng nhập mã khách hàng' },
                  ]}
                >
                  <Input placeholder="Nhập mã khách hàng" />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="name"
                  label="Tên khách hàng"
                  rules={[
                    { required: true, message: 'Vui lòng nhập tên khách hàng' },
                  ]}
                >
                  <Input placeholder="Nhập tên khách hàng" />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="taxCode"
                  label="Mã số thuế"
                  rules={[
                    { required: true, message: 'Vui lòng nhập mã số thuế' },
                  ]}
                >
                  <Input placeholder="Nhập mã số thuế" />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="address"
                  label="Địa chỉ"
                  rules={[{ required: true, message: 'Vui lòng nhập địa chỉ' }]}
                >
                  <Input.TextArea rows={2} placeholder="Nhập địa chỉ" />
                </Form.Item>
              </Col>
            </Row>
          </Space>
        </Form>

        <div className="absolute bottom-0 left-0 w-full">
          <Divider dashed className="my-0 bg-[#F3F4F6]" />

          <div className="p-6">
            <div
              aria-hidden
              onClick={handleRetype}
              className="flex cursor-pointer items-center gap-2 text-base font-medium text-[#1890FF]"
            >
              <Refresh2 />

              <span>Nhập lại</span>
            </div>
          </div>
        </div>
      </Drawer>
    )
  },
)

DrawerCustomer.displayName = 'DrawerCustomer'

export default DrawerCustomer
