import { Button, Card, Form, Input, Modal } from 'antd'
import { Edit, Trash } from 'iconsax-react'
import { useState } from 'react'

import { openNotification } from '@/utils'

type ExtraButtonEditProps = {
  onSave: () => void
  onCancel: () => void
}

const ExtraButtonEdit = ({ onSave, onCancel }: ExtraButtonEditProps) => {
  return (
    <div className="flex items-center">
      <Button type="primary" onClick={onSave}>
        Lưu
      </Button>

      <Button type="text" onClick={onCancel}>
        Huỷ
      </Button>
    </div>
  )
}

type ExtraButtonDefaultProps = {
  onEdit: () => void
  onDelete: () => void
}

const ExtraButtonDefault = ({ onEdit, onDelete }: ExtraButtonDefaultProps) => {
  return (
    <div className="space-x-6">
      <Trash
        variant="Bulk"
        onClick={onDelete}
        className="cursor-pointer text-gray-600 hover:text-red-500"
      />

      <Edit
        variant="Bulk"
        onClick={onEdit}
        className="cursor-pointer text-gray-600 hover:text-branding-primary"
      />
    </div>
  )
}

type InfoSectionProps = Record<string, unknown>

const InfoSection: React.FC<InfoSectionProps> = () => {
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [form] = Form.useForm()

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    openNotification({ type: 'success', message: 'Xoá thành công' })
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }
  const handleToggleEdit = (isEdit = true) => {
    setIsEdit(isEdit)
  }

  const handleSave = () => {
    openNotification({ type: 'success', message: 'Cập nhật thành công' })
    handleToggleEdit(false)
  }

  return (
    <>
      {/* <Form form={form} name="customer_form"> */}
      {/* <Descriptions
          column={1}
          title="Thông tin khách hàng"
          extra={
            isEdit ? (
              <ExtraButtonEdit
                onSave={handleSave}
                onCancel={() => handleToggleEdit(false)}
              />
            ) : (
              <ExtraButtonDefault
                onDelete={showModal}
                onEdit={() => handleToggleEdit(true)}
              />
            )
          }
        > */}
      <Card
        bordered={false}
        title="Thông tin khách hàng"
        extra={
          isEdit ? (
            <ExtraButtonEdit
              onSave={handleSave}
              onCancel={() => handleToggleEdit(false)}
            />
          ) : (
            <ExtraButtonDefault
              onDelete={showModal}
              onEdit={() => handleToggleEdit(true)}
            />
          )
        }
        bodyStyle={{ maxHeight: 300 }}
      >
        <Form
          form={form}
          name="customer_form"
          layout="horizontal"
          labelCol={{ span: 3 }}
          labelAlign="left"
          requiredMark={false}
        >
          <div className="flex min-w-0 flex-row flex-wrap">
            <div className="relative block min-h-[1px] max-w-full flex-[0_0_100%]">
              <Form.Item
                name="code"
                label="Mã khách hàng"
                rules={[
                  { required: true, message: 'Vui lòng nhập mã khách hàng' },
                ]}
              >
                {isEdit ? (
                  <Input placeholder="Nhập mã khách hàng" />
                ) : (
                  <span>LMXKH001</span>
                )}
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
                {isEdit ? (
                  <Input placeholder="Nhập tên khách hàng" />
                ) : (
                  <span>CÔNG TY CỔ PHẦN VOLGA VN</span>
                )}
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
                {isEdit ? (
                  <Input placeholder="Nhập mã số thuế" />
                ) : (
                  <span>92901903</span>
                )}
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
                {isEdit ? (
                  <Input.TextArea rows={1} placeholder="Nhập địa chỉ" />
                ) : (
                  <span>
                    Lô F1-6, đường NK, KCN Lê Minh Xuân 3, X. Lê Minh Xuân,H.
                    Bình Chánh, Tp. HCM
                  </span>
                )}
              </Form.Item>
            </div>
          </div>
        </Form>
      </Card>

      <Modal
        title="Xoá khách hàng?"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width="28%"
        okText="Xoá"
        cancelText="Huỷ"
        okButtonProps={{ danger: true }}
        maskClosable={false}
      >
        Thông tin của khách hàng {''}
        <span className="font-medium">“LMXKH001”</span> sẽ bị xoá và không thể
        khôi phục.
      </Modal>
    </>
  )
}

const BasicInformation = () => {
  return (
    <>
      <div className="py-3">
        <InfoSection />
      </div>

      <div className="py-3">
        <Card bordered={false} title="Tệp đính kèm (9)">
          Files
        </Card>
      </div>
    </>
  )
}

export default BasicInformation
