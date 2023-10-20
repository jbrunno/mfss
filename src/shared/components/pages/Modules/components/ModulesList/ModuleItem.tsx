import {
  Button,
  Card,
  Chip,
  Drawer,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Typography,
  useDisclosure,
} from '@kirvanobr/react'
import { KebabLine, EyeSlashLine } from '@kirvanobr/icons'

import { EditModule } from '../EditModule'
import { TransferContent } from '../TransferContent/TransferContent'

import { ModuleItemProps } from './ModulesList.types'

export const ModuleItem = ({ moduleNumber, itemsAmount, children, isHidden }: ModuleItemProps) => {
  const title = `Módulo ${moduleNumber}`
  const { isOpen, onOpenChange } = useDisclosure()
  const { isOpen: transferIsOpen, onOpenChange: onTransferOpenChange } = useDisclosure()

  return (
    <section>
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-2">
          <Typography weight="regular">{title}</Typography>
          {isHidden && (
            <Button
              isIconOnly
              startContent={<EyeSlashLine />}
              className="bg-transparent text-danger-600 text-2xl"
            />
          )}

          <Dropdown placement="bottom-start">
            <DropdownTrigger>
              <Button isIconOnly variant="link">
                <KebabLine className="text-2xl" />
              </Button>
            </DropdownTrigger>

            <DropdownMenu aria-label="Actions">
              <DropdownItem key="edit" onClick={onOpenChange}>
                Editar
              </DropdownItem>
              <DropdownItem key="reorder">Reordenar</DropdownItem>
              <DropdownItem key="transfer" onClick={onTransferOpenChange}>
                Transferir
              </DropdownItem>
              <DropdownItem key="delete">Excluir</DropdownItem>
            </DropdownMenu>
          </Dropdown>

          <Drawer
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            classNames={{ base: 'sm:max-w-[32.5rem]' }}
          >
            <EditModule />
          </Drawer>
          <Drawer
            isOpen={transferIsOpen}
            onOpenChange={onTransferOpenChange}
            classNames={{ base: 'sm:max-w-[32.5rem]' }}
          >
            <TransferContent />
          </Drawer>
        </div>
        <span className="flex items-center gap-2">
          <Typography weight="regular">Conteúdos</Typography>
          <Chip
            classNames={{
              base: 'w-6 h-6 grid items-center justify-center',
              content: 'text-[0.625rem] font-extrabold',
            }}
          >
            {itemsAmount}
          </Chip>
        </span>
      </div>
      <Card
        shadow="none"
        radius="sm"
        classNames={{
          base: `border ${isHidden ? 'opacity-40' : 'opacity-100'}`,
          header: 'px-6 py-5',
        }}
      >
        {children}
      </Card>
    </section>
  )
}
