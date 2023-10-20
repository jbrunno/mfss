import { styles } from './StudentTitleCell.styles'
import { StudentTitleCellProps } from './StudentTitleCell.types'

export const StudentTitleCell = ({ children }: StudentTitleCellProps) => {
  return (
    <div className={styles().base()}>
      <span className={styles().textWrapper()}>{children}</span>
    </div>
  )
}
