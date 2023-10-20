import { ReactNode } from 'react'
import { ButtonProps } from '@kirvanobr/react'

export interface ActionButtonProps extends ButtonProps {
  startContent?: ReactNode
  isActive?: boolean
}
