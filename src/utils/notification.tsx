import { notification } from 'antd'
import { IconType } from 'antd/lib/notification'
import { Suspense } from 'react'

import { lazyImport } from './lazyImport'

const { TickCircle } = lazyImport(() => import('iconsax-react'), 'TickCircle')

type NotificationProps = {
  readonly type?: IconType
  message: React.ReactNode
  description?: React.ReactNode
}

const getNotificationIcon = (type: IconType) => {
  const notificationIcon = {
    success: (
      <Suspense fallback={<div>Loading ....</div>}>
        <TickCircle size="20" className="text-sematic-success" variant="Bulk" />
      </Suspense>
    ),
    info: null,
    warning: null,
    error: null,
  }
  return notificationIcon[type] || notificationIcon['info']
}

export const openNotification = ({
  type = 'info',
  message,
  description,
}: NotificationProps) =>
  notification.open({
    type,
    message,
    description,
    icon: getNotificationIcon(type),
    prefixCls: `${import.meta.env.VITE_PREFIX_CLS}-notification`,
  })
