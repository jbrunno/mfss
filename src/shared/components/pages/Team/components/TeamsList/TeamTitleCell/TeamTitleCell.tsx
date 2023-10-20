import { Typography } from '@kirvanobr/react'

import { Tag } from '../../Tag/Tag'

import { styles } from './TeamTitleCell.styles'
import { TeamTitleCellProps } from './TeamTitleCell.types'

export const TeamTitleCell = ({ children, isStandard, teamNumber }: TeamTitleCellProps) => {
  return (
    <div className={styles().base()}>
      <span className={styles().textWrapper()}>
        <Typography variant="body" weight="medium" size="small">
          {children}
        </Typography>
        <Typography variant="subtitle" size="medium" className="text-gray-500">
          {`Turma ${teamNumber}`}
        </Typography>
      </span>
      {isStandard && <Tag>Padrão</Tag>}
    </div>
  )
}
