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
        <div className="flex max-h-[56px] min-h-[56px] items-center justify-between py-3 px-6">
          {breadcrumb}

          {extra}
        </div>

        <div className="h-1 w-full bg-gray-200" />

        <div className="h-[calc(100%_-_4.5rem)] py-4 px-6">{children}</div>
      </div>
    </>
  )
}
