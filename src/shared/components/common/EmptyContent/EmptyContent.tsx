import { styles } from './EmptyContent.styles'
import { EmptyContentProps } from './EmptyContent.types'
import { EmptyIcon } from './EmptyIcon'

/**
 *
 * @param icon (optional) ReactNode
 * - Use icon prop to especify what icon should be used
 *
 * @param children ReactNode
 * - Texts used inside this component
 */
export const EmptyContent = ({ children, icon }: EmptyContentProps) => {
  return (
    <div className={styles().base()}>
      <div className={styles().iconWrapper()}>{icon ? icon : <EmptyIcon />}</div>
      <div className={styles().textsWrapper()}>{children}</div>
    </div>
  )
}
