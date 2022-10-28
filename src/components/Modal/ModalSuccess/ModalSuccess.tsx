import { Button, Modal } from 'antd'
import { TickCircle } from 'iconsax-react'
import { forwardRef, useImperativeHandle, useState } from 'react'

type ModalSuccessProps = {
  content: React.ReactNode
  okText?: React.ReactNode
  cancelText?: React.ReactNode
  onOk?: () => void
  onCanCel?: () => void
}

export type ModalSuccessRef = {
  openModal: () => void
}

type ModalContentProps = Pick<ModalSuccessProps, 'content'>

const ModalContent = ({ content }: ModalContentProps) => {
  return (
    <div className="flex w-full flex-col gap-y-3 px-20 py-8 text-center">
      <div className="flex w-full justify-center">
        <div className="rounded-full bg-gradient-to-b from-green-100 p-3">
          <TickCircle
            size="100"
            variant="Bold"
            className="rounded-full bg-gradient-to-b from-green-400 p-2 text-green-600"
          />
        </div>
      </div>

      <div className="text-2xl font-bold text-green-600">Thành công!</div>

      <div className="text-lg font-normal">{content}</div>
    </div>
  )
}

export const ModalSuccess = forwardRef<ModalSuccessRef, ModalSuccessProps>(
  (
    {
      content,
      cancelText = 'Đóng',
      okText = 'Xác nhận',
      onOk,
    }: ModalSuccessProps,
    ref,
  ) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

    useImperativeHandle(ref, () => ({ openModal }), [])

    const openModal = () => {
      setIsModalOpen(true)
    }
    const closeModal = () => {
      setIsModalOpen(false)
    }

    const handleOk = () => {
      onOk?.()
      closeModal()
    }

    return (
      <Modal
        centered
        width="35%"
        footer={null}
        closable={false}
        open={isModalOpen}
        onCancel={closeModal}
      >
        <ModalContent content={content} />

        <div className="flex gap-6">
          <Button className="flex-1" onClick={closeModal}>
            {cancelText}
          </Button>

          <Button className="flex-1" type="primary" onClick={handleOk}>
            {okText}
          </Button>
        </div>
      </Modal>
    )
  },
)

ModalSuccess.displayName = 'ModalSuccess'
