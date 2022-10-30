import { Button, Drawer, Form, Input } from 'antd'
import { Refresh2 } from 'iconsax-react'
import { forwardRef, useImperativeHandle, useState } from 'react'

import { openNotification } from '@/utils'

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

          openNotification({
            type: 'success',
            message: 'Xoá thành công',
            description: (
              <>
                Thiết bị <span className="font-bold">“HU700720035100”</span> đã
                được xoá khỏi danh sách thiết bị
              </>
            ),
          })

          onClose()
        })
        .catch((errorInfo) => {
          console.error(errorInfo)
        })
    }

    const handleRetype = () => {
      form.resetFields()
    }

    const extraButton = (
      <Button type="primary" onClick={handleSubmit}>
        Tạo
      </Button>
    )

    return (
      <Drawer
        open={open}
        destroyOnClose
        width="26.25%"
        onClose={onClose}
        extra={extraButton}
        title={<b>Tạo khách hàng</b>}
      >
        <Form form={form} layout="vertical" name="customer_form">
          <div className="flex min-w-0 flex-row flex-wrap">
            <div className="relative block min-h-[1px] max-w-full flex-[0_0_100%]">
              <Form.Item
                name="code"
                label="Mã khách hàng"
                rules={[
                  { required: true, message: 'Vui lòng nhập mã khách hàng' },
                ]}
              >
                <Input placeholder="Nhập mã khách hàng" />
              </Form.Item>
            </div>
          </div>

          <div className="flex min-w-0 flex-row flex-wrap">
            <div className="relative block min-h-[1px] max-w-full flex-[0_0_100%]">
              <Form.Item
                name="name"
                label="Tên khách hàng"
                rules={[
                  { required: true, message: 'Vui lòng nhập tên khách hàng' },
                ]}
              >
                <Input placeholder="Nhập tên khách hàng" />
              </Form.Item>
            </div>
          </div>

          <div className="flex min-w-0 flex-row flex-wrap">
            <div className="relative block min-h-[1px] max-w-full flex-[0_0_100%]">
              <Form.Item
                name="taxCode"
                label="Mã số thuế"
                rules={[
                  { required: true, message: 'Vui lòng nhập mã số thuế' },
                ]}
              >
                <Input placeholder="Nhập mã số thuế" />
              </Form.Item>
            </div>
          </div>

          <div className="flex min-w-0 flex-row flex-wrap">
            <div className="relative block min-h-[1px] max-w-full flex-[0_0_100%]">
              <Form.Item
                name="address"
                label="Địa chỉ"
                rules={[{ required: true, message: 'Vui lòng nhập địa chỉ' }]}
              >
                <Input.TextArea rows={1} placeholder="Nhập địa chỉ" />
              </Form.Item>
            </div>
          </div>
        </Form>

        <div className="absolute bottom-0 left-0 w-full">
          <div className="h-1 w-full bg-gray-200" />

          <div className="p-6">
            <div
              aria-hidden
              onClick={handleRetype}
              className="inline-flex cursor-pointer items-center space-x-2.5 text-base font-medium text-[#1890FF]"
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
