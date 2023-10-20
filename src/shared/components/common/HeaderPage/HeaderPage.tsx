import { Typography } from '@kirvanobr/react'

import { HeaderPageProps } from './HeaderPage.types'

export const HeaderPage = ({ children, title }: HeaderPageProps) => {
  return (
    <div className="flex justify-between items-center mb-8">
      <Typography variant="head" size="medium" weight="bold" className="text-gray-800">
        {title}
      </Typography>
      {children}
    </div>
  )
}
