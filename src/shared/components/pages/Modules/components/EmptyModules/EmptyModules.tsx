import { Card, Typography } from '@kirvanobr/react'

import { EmptyContent } from '@/shared/components/common'

import { styles } from './EmptyModules.styles'

export const EmptyModules = () => {
  return (
    <Card className="py-8" shadow="none" classNames={{ base: styles().base() }}>
      <EmptyContent>
        <Typography weight="regular">Você ainda não criou nenhum módulo.</Typography>
        <Typography weight="regular">Para começar, clique no botão “Criar módulo” acima</Typography>
      </EmptyContent>
    </Card>
  )
}
