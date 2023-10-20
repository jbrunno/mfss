import { EditLine, TrashLine, RenewLeftLine } from '@kirvanobr/icons'
import {
  Modal,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Typography,
  useDisclosure,
} from '@kirvanobr/react'

import { ActionButton } from '@/shared/components/common'

import { DeleteTeamModal } from '../DeleteTeamModal/DeleteTeamModal'
import { TransferStudents } from '../TransferStudents/TransferStudents'
import { EditTeamModal } from '../EditTeamModal/EditTeamModal'

import { styles } from './TeamsList.styles'
import { TeamTitleCell } from './TeamTitleCell/TeamTitleCell'
import { TeamListProps } from './TeamsList.types'

export const TeamsList = ({ data: teamListData }: TeamListProps) => {
  const { thead, tbody, division, center, base, bodyCellCenter } = styles()
  const {
    onOpen: onOpenDelete,
    isOpen: isDeleteOpen,
    onOpenChange: onDeleteOpenChange,
  } = useDisclosure()

  const {
    onOpen: onOpenTransfer,
    isOpen: isTransferOpen,
    onOpenChange: onTransferOpenChange,
  } = useDisclosure()

  const {
    onOpen: onOpenEditTeam,
    isOpen: isEditTeamOpen,
    onOpenChange: onEditTeamOpenChange,
  } = useDisclosure()

  return (
    <section className={base()}>
      <Modal isOpen={isDeleteOpen} onOpenChange={onDeleteOpenChange} radius="Xsm">
        <DeleteTeamModal teamName="Turma x: Teste" />
      </Modal>
      <Modal isOpen={isTransferOpen} onOpenChange={onTransferOpenChange} radius="Xsm" size="lg">
        <TransferStudents />
      </Modal>
      <Modal isOpen={isEditTeamOpen} onOpenChange={onEditTeamOpenChange} radius="Xsm" size="xl">
        <EditTeamModal />
      </Modal>
      <Table
        aria-label="Turmas"
        removeWrapper
        selectionMode="multiple"
        classNames={{ th: thead(), td: tbody() }}
      >
        <TableHeader>
          <TableColumn className={division()}>
            <div>
              <ActionButton
                startContent={<TrashLine className="text-medium" />}
                isActive
                onPress={onOpenDelete}
              >
                Excluir
              </ActionButton>
              <ActionButton
                isActive
                onPress={onOpenTransfer}
                color="primary"
                startContent={<RenewLeftLine className="text-medium" />}
              >
                Transferir Alunos
              </ActionButton>
            </div>
          </TableColumn>
          <TableColumn className={center()}>Ofertas</TableColumn>
          <TableColumn className={center()}>Alunos</TableColumn>
          <TableColumn className={center()}>Conclusão</TableColumn>
          <TableColumn className={center()}>Criação</TableColumn>
        </TableHeader>

        <TableBody>
          {teamListData &&
            teamListData.map((team, index) => {
              return (
                <TableRow key={team.id}>
                  <TableCell className={division()}>
                    <TeamTitleCell teamNumber={index + 1} isStandard={team.isStardard}>
                      {team.title}
                    </TeamTitleCell>
                  </TableCell>
                  <TableCell>
                    <div className={bodyCellCenter()}>
                      <ActionButton
                        startContent={<EditLine className="text-xl" />}
                        isIconOnly
                        color="primary"
                        isActive
                        onClick={onOpenEditTeam}
                      />
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className={bodyCellCenter()}>
                      <Typography variant="body" size="small" weight="medium">
                        {team.studants}
                      </Typography>
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className={bodyCellCenter()}>
                      <Typography variant="body" size="small" weight="medium">
                        {team.conclusion}
                      </Typography>
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className={bodyCellCenter()}>
                      <Typography variant="body" size="small" weight="medium">
                        {team.createdAt}
                      </Typography>
                      <Typography
                        variant="subtitle"
                        size="medium"
                        weight="medium"
                        color="neutral-light"
                      >
                        às 16:00
                      </Typography>
                    </span>
                  </TableCell>
                </TableRow>
              )
            })}
        </TableBody>
      </Table>
    </section>
  )
}
