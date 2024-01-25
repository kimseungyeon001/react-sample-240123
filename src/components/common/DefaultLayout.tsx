import { PropsWithChildren } from 'react'

export function DefaultLayout({ children }: PropsWithChildren) {
  return (
    <div>
      {/* header */}
      {/* <div></div> */}
      {/* main */}
      <div className="flex justify-center items-center">{children}</div>
      {/* footer */}
      {/* <div></div> */}
    </div>
  )
}
