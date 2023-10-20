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
import { TickLine, InfoBold } from '@kirvanobr/icons'

import { styles } from './EditModule.style'

export function EditModule() {
  const {
    bodyContainer,
    checkbox,
    checkboxContainer,
    headerContainer,
    selectAll,
    iconInfo,
    tickIcon,
  } = styles()

  return (
    <DrawerContent>
      <DrawerHeader>
        <div className={headerContainer()}>
          <Typography variant="head" size="medium" weight="bold" className="text-gray-800">
            Editar módulo
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
                <InfoBold className={iconInfo()} />
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
            (Desmarcar todas)
          </Typography>
          <div className={checkboxContainer()}>
            {['Turma A (padrão)', 'Turma B', 'Turma C', 'Turma D'].map((classModuleName) => (
              <div className={checkbox()} key={classModuleName}>
                <Checkbox radius="none">
                  <Typography
                    variant="subtitle"
                    weight="regular"
                    size="medium"
                    className="text-gray-900"
                  >
                    {classModuleName}
                  </Typography>{' '}
                </Checkbox>
              </div>
            ))}
          </div>
          <Switch className="col-span-4 mt-4">
            <div className="flex gap-1 items-center">
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
                <InfoBold className={iconInfo()} />
              </Tooltip>
            </div>
          </Switch>
        </div>
      </DrawerBody>
      <DrawerFooter>
        <Button size="lg" variant="solid" className="text-gray-900 text-base font-bold leading-6">
          Cancelar
        </Button>
        <Button
          size="lg"
          radius="xsm"
          startContent={<TickLine className={tickIcon()} />}
          color="success"
          className="text-[#F5F5F6] text-base font-bold leading-6"
        >
          Salvar
        </Button>
      </DrawerFooter>
    </DrawerContent>
  )
}
