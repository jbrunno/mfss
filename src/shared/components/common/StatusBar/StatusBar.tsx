import { Progress, Typography } from '@kirvanobr/react'

export const StatusBar = () => {
  return (
    <div>
      <Typography variant="subtitle" size="medium" weight="medium" className="text-gray-500">
        Adicione um conteúdo ao módulo
      </Typography>

      <div className="grid grid-cols-6 gap-4 items-center">
        <Progress color="success" aria-label="Loading..." value={100} className="col-span-5" />
        <Typography variant="subtitle" size="medium" weight="bold" className="text-gray-500">
          Etapa 1
        </Typography>
      </div>
    </div>
  )
}
