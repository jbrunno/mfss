import { Button, Drawer, Input, Spacer, useDisclosure } from '@kirvanobr/react'
import { SearchLine, SettingLine } from '@kirvanobr/icons'

import { TabContentHeader } from '../../common'

import { CreateStudent, StudentList, studentListData } from './components/'

export const Students = () => {
  const { isOpen, onOpenChange } = useDisclosure()

  return (
    <>
      <Drawer
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{ base: 'sm:max-w-[32.5rem]' }}
      >
        <CreateStudent />
      </Drawer>

      <Spacer y={4} />

      <TabContentHeader
        title="Alunos"
        subtitle="Verifique quais alunos adquiriram seu produto e administre suas turmas"
        itemsAmount={studentListData.length}
      >
        <Input
          placeholder="Buscar por aluno, turma..."
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
        <Button isIconOnly aria-label="Like" size="lg">
          <SettingLine />
        </Button>
        <Button color="primary" size="lg" className="px-6 font-medium" onClick={onOpenChange}>
          Adicionar aluno
        </Button>
      </TabContentHeader>

      <Spacer y={10} />

      <StudentList data={studentListData} />
    </>
  )
}
