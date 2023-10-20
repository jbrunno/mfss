import { Button } from '@kirvanobr/react'
import { FrameLine, Frame2Line } from '@kirvanobr/icons'

import { ExpandButtonProps } from './ExpandButton.types'
import { styles } from './ExpandButton.styles'

export const ExpandButton = ({ isExpanded }: ExpandButtonProps) => {
  const SelectedIcon = isExpanded ? Frame2Line : FrameLine
  return (
    <Button
      className={styles().base()}
      startContent={<SelectedIcon className={styles().icon()} />}
      isIconOnly
    />
  )
}
