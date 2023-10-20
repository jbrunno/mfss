import {
  Button,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  Radio,
  RadioGroup,
  Typography,
} from '@kirvanobr/react'
import { TickLine } from '@kirvanobr/icons'

import { mockedList } from './TransferContent.mock'

export function TransferContent() {
  return (
    <DrawerContent>
      <DrawerHeader>
        <div className="grid grid-cols-1 gap-[.625rem]">
          <Typography variant="head" size="medium" weight="bold">
            Transferir conteúdos
          </Typography>
          <Typography
            variant="body"
            size="medium"
            weight="regular"
            className="text-gray-600 inline"
          >
            Você está prestes{' '}
            <span className="text-base font-bold text-gray-700">transferir os 38 conteúdos</span> do
            módulo <span className="text-base font-bold text-gray-700">[nome do módulo]</span> para
            outro módulo
          </Typography>
        </div>
      </DrawerHeader>
      <DrawerBody>
        <Typography variant="body" weight="regular" size="medium" className="text-gray-500 mb-4">
          Selecione o módulo para o qual deseja transferir:
        </Typography>
        <div>
          <RadioGroup>
            {mockedList.map((name) => (
              <Radio
                key={name.title}
                value={name.content}
                description={name.content}
                className="[&:nth-of-type(n+2)]:mt-4"
              >
                {name.title}
              </Radio>
            ))}
          </RadioGroup>
        </div>
      </DrawerBody>
      <DrawerFooter>
        <Button size="lg" variant="solid" className="text-gray-900 text-base font-bold leading-6">
          Cancelar
        </Button>
        <Button
          size="lg"
          radius="xsm"
          startContent={<TickLine className="text-xl" />}
          color="success"
          className="text-[#F5F5F6] text-base font-bold leading-6"
        >
          Confirmar
        </Button>
      </DrawerFooter>
    </DrawerContent>
  )
}
