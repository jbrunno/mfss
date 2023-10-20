import { Accordion, AccordionItem, Typography } from '@kirvanobr/react'
import { ChevronLowLine } from '@kirvanobr/icons'
import { useState } from 'react'

import { ModuleItemContentProps } from './ModulesList.types'

export const ModuleItemContent = ({ children }: ModuleItemContentProps) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Accordion
      selectionMode="multiple"
      hideIndicator
      itemClasses={{ base: 'flex flex-col flex-col-reverse' }}
      onExpandedChange={(e) => setIsExpanded(e.has('1'))}
    >
      <AccordionItem
        indicator="a"
        key="1"
        aria-label="acc1"
        title={
          <div className="border-t pt-1 -mb-3 -mx-2 text-center flex items-center gap-3 justify-center">
            <Typography weight="light" size="small">
              {isExpanded ? 'Ver menos' : 'Ver mais'}
            </Typography>
            <span className={`${isExpanded ? 'rotate-180' : 'rotate-0'} transition-all`}>
              <ChevronLowLine />
            </span>
          </div>
        }
      >
        {children}
      </AccordionItem>
    </Accordion>
  )
}
