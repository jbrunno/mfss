import {
  Button,
  Checkbox,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  Input,
  Switch,
  Tooltip,
  Typography,
} from '@kirvanobr/react'

import { styles } from './CreateModule.style'
import { InfoIcon } from './InfoIcon'
import { CheckedIcon } from './CheckedIcon'

export function CreateModule() {
  const { bodyContainer, checkboxes, headerContainer, selectAll } = styles()

  return (
    <DrawerContent>
      <DrawerHeader>
        <div className={headerContainer()}>
          <Typography variant="head" size="medium" weight="bold" className="text-gray-800">
            Criar módulo
          </Typography>
          <Typography variant="body" size="medium" weight="regular" className="text-gray-500">
            Desenvolva e personalize o módulo que corresponde ao produto
          </Typography>
        </div>
      </DrawerHeader>
      <DrawerBody>
        <Input
          className="mb-8"
          placeholder=" "
          label={
            <Typography variant="subtitle" size="large" weight="regular" className="text-gray-600">
              Nome do módulo
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
                Descrição do módulo
              </Typography>
              <Tooltip
                showArrow
                placement="right"
                content={<Typography>Só você verá (título interno)</Typography>}
              >
                <InfoIcon />
              </Tooltip>
            </div>
          }
          variant="bordered"
          labelPlacement="outside"
          radius="Xsm"
          size="lg"
        />
        <div className={bodyContainer()}>
          <div className="col-span-3 gap-1">
            <Typography variant="body" weight="bold" size="large" className="text-gray-900">
              Acesso
            </Typography>
            <Typography variant="body" size="medium" weight="regular" className="text-gray-500">
              Turmas com acesso ao módulo
            </Typography>
          </div>
          <Typography variant="body" size="small" weight="regular" className={selectAll()}>
            (Selecionar todas)
          </Typography>
          <div className={checkboxes()}>
            <Checkbox radius="none">
              <Typography
                variant="subtitle"
                weight="regular"
                size="medium"
                className="text-gray-900"
              >
                Turma A
              </Typography>{' '}
              <Typography
                variant="subtitle"
                weight="regular"
                size="medium"
                className="text-gray-500"
              >
                (padrão)
              </Typography>
            </Checkbox>
          </div>
          <Switch className="col-span-4 mt-4">
            <div className="flex gap-1">
              <Typography variant="body" size="medium" weight="regular" className="text-gray-600">
                Deixar módulo oculto
              </Typography>
              <Tooltip
                showArrow
                placement="right"
                content={
                  <Typography>
                    Seus usuários não poderão ver este módulo. Mostre-o quando estiver pronto
                  </Typography>
                }
              >
                <InfoIcon />
              </Tooltip>
            </div>
          </Switch>
        </div>
      </DrawerBody>
      <DrawerFooter>
        <Button size="lg" variant="link" className="text-gray-900 text-base font-bold leading-6">
          Cancelar
        </Button>
        <Button
          size="lg"
          radius="xsm"
          startContent={<CheckedIcon />}
          color="success"
          className="text-[#F5F5F6] text-base font-bold leading-6"
        >
          Salvar
        </Button>
      </DrawerFooter>
    </DrawerContent>
  )
}
