import { Button, Drawer, Input, Spacer, useDisclosure } from '@kirvanobr/react'
import { useState } from 'react'
import { SearchLine } from '@kirvanobr/icons'

import { TabContentHeader } from '../../common'

import { CreateModule } from './CreateModule'
import { EmptyModules } from './components/EmptyModules/EmptyModules'
import { ModulesList } from './components/ModulesList'
import { ModulesMockData } from './mock/Modules.mock'
import { ExpandButton } from './components/ExpandButton/ExpandButton'

export const Modules = () => {
  const [modulesAmount] = useState(ModulesMockData.length)
  const { isOpen, onOpenChange } = useDisclosure()

  return (
    <>
      <Drawer
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{ base: 'sm:max-w-[32.5rem]' }}
      >
        <CreateModule />
      </Drawer>
      <Spacer y={4} />

      <TabContentHeader
        title="Módulos"
        subtitle="Crie módulos e insira conteúdos ao seu produto"
        itemsAmount={modulesAmount}
        actionComponent={
          <button className="rounded-full bg-neutral-200 py-1 px-3 text-neutral-400">
            Pré-visualizar
          </button>
        }
      >
        <Input
          placeholder="Buscar por aluno, turma, oferta..."
          variant="bordered"
          radius="sm"
          classNames={{
            base: ['flex-1'],
            inputWrapper: ['h-[56px]', 'border', 'shadow-none'],
            innerWrapper: 'gap-3',
            input: ['text-base', 'text-slate-500', 'placeholder:text-slate-500'],
          }}
          startContent={<SearchLine className="text-primary-600 text-2xl" />}
        />
        <ExpandButton />
        <Button color="primary" size="lg" className="px-5 font-medium" onClick={onOpenChange}>
          Criar módulo
        </Button>
      </TabContentHeader>

      <Spacer y={10} />

      {modulesAmount === 0 && <EmptyModules />}
      {modulesAmount > 0 && <ModulesList data={ModulesMockData} />}
    </>
  )
}
