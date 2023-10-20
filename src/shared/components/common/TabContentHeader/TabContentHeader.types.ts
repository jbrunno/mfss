import { ReactNode } from 'react'

export interface TabContentHeaderProps {
  title: string
  subtitle: string
  itemsAmount: number | string
  actionComponent?: ReactNode
  children: ReactNode
}
