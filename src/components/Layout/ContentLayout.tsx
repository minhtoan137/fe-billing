import { Divider } from 'antd'
import * as React from 'react'

// import { Head } from '../Head'

type ContentLayoutProps = {
  children: React.ReactNode
  // title: string
  breadcrumb: React.ReactNode
  extra?: React.ReactNode
}

export const ContentLayout = ({
  children,
  breadcrumb,
  extra,
}: ContentLayoutProps) => {
  return (
    <>
      {/* <Head title={title} /> */}

      <div className="h-[100vh] overflow-auto bg-white">
        <div className="flex max-h-[56px] items-center justify-between py-3 px-6">
          <h3 className="text-base font-bold">{breadcrumb}</h3>
          <div>{extra}</div>
        </div>

        <Divider dashed className="my-0 bg-[#F3F4F6]" />

        <div className="h-[calc(100%_-_3.7rem)] py-6 px-6">{children}</div>
      </div>
    </>
  )
}
