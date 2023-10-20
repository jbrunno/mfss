import { Button, Drawer, Input, Spacer, useDisclosure } from '@kirvanobr/react'
import { SearchLine } from '@kirvanobr/icons'

import { TabContentHeader } from '../../common'

import { CreateTeam, TeamsList, teamListData } from './components/'

export const Team = () => {
  const { isOpen, onOpenChange } = useDisclosure()

  return (
    <>
      <Drawer
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{ base: 'sm:max-w-[32.5rem]' }}
      >
        <CreateTeam />
      </Drawer>

      <Spacer y={4} />

      <TabContentHeader
        title="Turmas"
        subtitle="Administre suas turmas"
        itemsAmount={teamListData.length}
      >
        <Input
          placeholder="Buscar por turma, oferta..."
          variant="bordered"
          radius="sm"
          classNames={{
            base: ['flex-1'],
            inputWrapper: ['h-[56px]', 'border', 'rounded-[4px]', 'shadow-none'],
            innerWrapper: 'gap-3',
            input: ['text-base', 'text-slate-500', 'placeholder:text-slate-500'],
          }}
          startContent={<SearchLine className="text-primary-600 text-2xl" />}
        />
        <Button color="primary" size="lg" className="px-5 font-medium" onClick={onOpenChange}>
          Adicionar turma
        </Button>
      </TabContentHeader>

      <Spacer y={10} />

      <TeamsList data={teamListData} />
    </>
  )
}
