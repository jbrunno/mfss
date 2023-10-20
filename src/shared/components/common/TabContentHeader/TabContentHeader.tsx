import { Chip, Typography } from '@kirvanobr/react'

import { styles } from './TabContentHeader.styles'
import { TabContentHeaderProps } from './TabContentHeader.types'

export const TabContentHeader = ({
  children,
  title,
  subtitle,
  itemsAmount,
  actionComponent,
}: TabContentHeaderProps) => {
  return (
    <div className={styles().base()}>
      <div className={styles().topComponentsWrapper()}>
        <div className={styles().titleWrapper()}>
          <div className={styles().title()}>
            <Typography as="h2" variant="head" size="small" weight="bold">
              {title}
            </Typography>
            <Chip
              classNames={{
                base: 'w-6 h-6 grid items-center justify-center',
                content: 'text-[0.625rem] font-extrabold',
              }}
            >
              {itemsAmount}
            </Chip>
          </div>
          <Typography
            variant="subtitle"
            size="large2"
            weight="regular"
            className={styles().subtitle()}
          >
            {subtitle}
          </Typography>
        </div>
        {actionComponent && (
          <div className={styles().actionComponentWrapper()}>{actionComponent}</div>
        )}
      </div>

      <div className={styles().childrenWrapper()}>{children}</div>
    </div>
  )
}
