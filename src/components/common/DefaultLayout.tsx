import { PropsWithChildren } from 'react'

export function DefaultLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col h-screen w-screen">
      {/* header */}
      <div className="border-b-2 border-black p-2 font-bold">
        demo app header
      </div>
      {/* main */}
      <div className="h-full w-full">{children}</div>
      {/* footer */}
      <div className="border-t-2 border-black flex justify-end p-2 font-bold">
        demo app footer
      </div>
    </div>
  )
}
