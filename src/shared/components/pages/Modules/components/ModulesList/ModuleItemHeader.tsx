import { Button, CardHeader, Typography } from '@kirvanobr/react'
import { AddLine } from '@kirvanobr/icons'

import { ModuleItemHeaderProps } from './ModulesList.types'

export const ModuleItemHeader = ({ title, description }: ModuleItemHeaderProps) => {
  return (
    <CardHeader>
      <div className="flex justify-between w-full">
        <div className="space-y-2">
          <Typography weight="medium" size="large">
            {title}
          </Typography>
          {description && <Typography weight="regular">{description}</Typography>}
        </div>
        <Button
          variant="solid"
          className="text-sm font-medium"
          startContent={<AddLine className="text-2xl" />}
          radius="sm"
        >
          Adicionar conteúdo
        </Button>
      </div>
    </CardHeader>
  )
}
