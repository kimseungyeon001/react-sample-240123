import { PropsWithChildren } from 'react'

export function DefaultLayout({ children }: PropsWithChildren) {
  return (
    <div>
      {/* header */}
      {/* <div></div> */}
      {/* main */}
      <div>{children}</div>
      {/* footer */}
      {/* <div></div> */}
    </div>
  )
}
