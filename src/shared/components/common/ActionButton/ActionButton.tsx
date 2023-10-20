import { Button, Typography } from '@kirvanobr/react'

import { ActionButtonProps } from './ActionButton.types'
import { styles } from './ActionButton.styles'

export const ActionButton = ({
  children,
  color,
  startContent,
  isActive = false,
  ...otherProps
}: ActionButtonProps) => {
  return (
    <Button
      className={styles({ isActive }).base()}
      startContent={<div className={styles({ color }).iconWrapper()}>{startContent}</div>}
      size="sm"
      isDisabled={!isActive}
      {...otherProps}
    >
      <Typography size="small" weight="regular">
        {children}
      </Typography>
    </Button>
  )
}
