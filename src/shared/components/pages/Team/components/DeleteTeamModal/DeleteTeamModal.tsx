import {
  Button,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Typography,
} from '@kirvanobr/react'
import { TickLine } from '@kirvanobr/icons'

import { DeleteTeamModalProps } from './DeleteTeamModal.types'

export const DeleteTeamModal = ({ teamName }: DeleteTeamModalProps) => {
  return (
    <ModalContent>
      {(onClose) => (
        <>
          <ModalHeader>
            <Typography variant="head" weight="bold">
              Excluir turma
            </Typography>
          </ModalHeader>
          <ModalBody>
            <Typography weight="regular" color="neutral-light">
              Você esta prestes a excluir a turma{' '}
              <Typography weight="bold" color="neutral" as="span">
                {teamName}.
              </Typography>
            </Typography>
            <Typography weight="bold" color="neutral" as="span">
              Esta ação é irreversível.
            </Typography>
          </ModalBody>
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
