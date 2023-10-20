import {
  Button,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  Input,
  Typography,
} from '@kirvanobr/react'
import { TickLine } from '@kirvanobr/icons'

import { styles } from './CreateStudent.styles'

export const CreateStudent = () => {
  const { body } = styles()

  return (
    <DrawerContent>
      <DrawerHeader>
        <Typography variant="head" size="medium">
          Adicionar Aluno
        </Typography>
      </DrawerHeader>

      <DrawerBody className={body()}>
        <section>
          <Input
            className="mb-8"
            placeholder=" "
            label={
              <Typography
                variant="subtitle"
                size="large"
                weight="regular"
                className="text-gray-600"
              >
                Nome do aluno
              </Typography>
            }
            variant="bordered"
            labelPlacement="outside"
            radius="Xsm"
            size="lg"
          />
          <Input
            className="mb-8"
            placeholder=" "
            label={
              <div className="flex gap-1 items-center">
                <Typography
                  variant="subtitle"
                  size="large"
                  weight="regular"
                  className="text-gray-600"
                >
                  E-mail
                </Typography>
              </div>
            }
            variant="bordered"
            labelPlacement="outside"
            radius="Xsm"
            size="lg"
          />
          <Input
            className="mb-8"
            placeholder=" "
            label={
              <div className="flex gap-1 items-center">
                <Typography
                  variant="subtitle"
                  size="large"
                  weight="regular"
                  className="text-gray-600"
                >
                  Telefone (opcional)
                </Typography>
              </div>
            }
            variant="bordered"
            labelPlacement="outside"
            radius="Xsm"
            size="lg"
          />
          <Input
            className="mb-8"
            placeholder=" "
            label={
              <div className="flex gap-1 items-center">
                <Typography
                  variant="subtitle"
                  size="large"
                  weight="regular"
                  className="text-gray-600"
                >
                  Turma
                </Typography>
              </div>
            }
            variant="bordered"
            labelPlacement="outside"
            radius="Xsm"
            size="lg"
          />
        </section>
      </DrawerBody>

      <DrawerFooter>
        <Button variant="link" size="lg">
          Cancelar
        </Button>
        <Button color="success" size="lg" startContent={<TickLine className="text-2xl" />}>
          Salvar
        </Button>
      </DrawerFooter>
    </DrawerContent>
  )
}
