import { PropsWithChildren } from 'react'

export const Tag = ({ children }: PropsWithChildren) => {
  return (
    <span className="grid place-content-center w-24 h-8 border rounded-[4px] border-primary-600  text-primary-600">
      {children}
    </span>
  )
}
