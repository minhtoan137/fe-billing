import { Badge } from 'antd'

type TextBadgeProps = {
  text: string
  count: number
}

// TODO: add Badge props, styles props,  if necessary
export const TextBadge = ({ text = '', count = 0 }: TextBadgeProps) => (
  <div className="flex items-center space-x-2.5">
    <span>{text}</span>
    <Badge count={count} />
  </div>
)
