import { TickLine } from '@kirvanobr/icons'
import {
  Button,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
  Spacer,
  Typography,
} from '@kirvanobr/react'

import { styles } from './TransferStudents.styles'

export const TransferStudents = () => {
  const { originItem, originWrapper, selectWrapper } = styles()

  const selectData = [
    {
      id: '1',
      label: 'Turma 1: Master Finanças',
    },
    {
      id: '3',
      label: 'Turma 3: Master Finanças',
    },
  ]

  return (
    <ModalContent>
      {(onClose) => (
        <>
          <ModalHeader>
            <Typography variant="head" weight="bold">
              Transferir alunos
            </Typography>
          </ModalHeader>
          <ModalBody>
            <Typography weight="regular" color="neutral-light">
              Você esta prestes a trasferir{' '}
              <Typography weight="bold" color="neutral" as="span">
                832
              </Typography>{' '}
              para outra turma.
            </Typography>

            <Spacer y={0} />

            <section className={originWrapper()}>
              <Typography weight="bold">Origem</Typography>
              <div className={originItem()}>
                <Typography weight="medium" color="neutral">
                  Turma 2
                </Typography>
                <Typography weight="regular" color="neutral-light">
                  800 alunos
                </Typography>
              </div>
              <div className={originItem()}>
                <Typography weight="medium" color="neutral">
                  Turma 3
                </Typography>
                <Typography weight="regular" color="neutral-light">
                  800 alunos
                </Typography>
              </div>
            </section>

            <section className={selectWrapper()}>
              <Typography variant="subtitle" size="large" color="neutral-medium" weight="regular">
                Escolha a turma que receberá os alunos
              </Typography>
              <Select
                items={selectData}
                variant="bordered"
                radius="Xsm"
                placeholder="Selecione uma turma"
                defaultSelectedKeys={selectData[0].id}
                classNames={{ popover: 'rounded-sm', trigger: 'border' }}
              >
                {(item) => <SelectItem key={item.id}>{item.label}</SelectItem>}
              </Select>
            </section>
          </ModalBody>

          <Spacer y={4} />

          <ModalFooter>
            <Button variant="link" size="lg" fullWidth onClick={onClose}>
              Cancelar
            </Button>
            <Button color="danger" size="lg" fullWidth startContent={<TickLine fontSize={24} />}>
              Confirmar
            </Button>
          </ModalFooter>
        </>
      )}
    </ModalContent>
  )
}
