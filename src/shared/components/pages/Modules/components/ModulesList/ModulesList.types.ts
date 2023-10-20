import { ReactNode } from 'react'

import { ModulesMockData } from '../../mock/Modules.mock'

export interface ModuleItemProps {
  moduleNumber: number
  itemsAmount?: number
  children: ReactNode
  isHidden?: boolean
}

export interface ModuleItemHeaderProps {
  title: string
  description?: string
}

export interface ModuleItemContentProps {
  children: ReactNode
}

export interface ModulesListProps {
  data: typeof ModulesMockData
}
