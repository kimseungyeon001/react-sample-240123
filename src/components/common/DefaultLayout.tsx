import { PropsWithChildren } from 'react'

export function DefaultLayout({ children }: PropsWithChildren) {
  return (
    <div>
      {/* header */}
      <div className="border-b-2 p-2">DEMO APP</div>
      {/* main */}
      <div>{children}</div>
      {/* footer */}
      {/* <div></div> */}
    </div>
  )
}
