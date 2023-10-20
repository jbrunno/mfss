import { EditLine, RenewLeftLine, CloseLine, CheckLine } from '@kirvanobr/icons'
import {
  Chip,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Typography,
} from '@kirvanobr/react'

import { ActionButton } from '@/shared/components/common'

import { styles } from './StudentList.styles'
import { StudentTitleCell } from './StudentTitleCell/StudentTitleCell'
import { StudentProps } from './StudentList.types'

export const StudentList = ({ data: studentListData }: StudentProps) => {
  const { thead, tbody, division, center, base, bodyCellCenter } = styles()

  return (
    <section className={base()}>
      <Table
        aria-label="Alunos"
        removeWrapper
        selectionMode="multiple"
        classNames={{ th: thead(), td: tbody() }}
      >
        <TableHeader>
          <TableColumn className={division()}>
            <div>
              <ActionButton
                color="danger"
                isActive
                startContent={<CloseLine className="text-medium" />}
              >
                Bloquear
              </ActionButton>
              <ActionButton
                color="success"
                isActive
                startContent={<CheckLine className="text-medium" />}
              >
                Desbloquear
              </ActionButton>
              <ActionButton
                color="primary"
                isActive
                startContent={<RenewLeftLine className="text-medium" />}
              >
                Transferir
              </ActionButton>
            </div>
          </TableColumn>
          <TableColumn className={center()}>Edição</TableColumn>
          <TableColumn className={center()}>Status</TableColumn>
          <TableColumn className={center()}>Data da compra</TableColumn>
          <TableColumn className={center()}>Último acesso</TableColumn>
          <TableColumn className={center()}>Turma</TableColumn>
        </TableHeader>

        <TableBody>
          {studentListData &&
            studentListData.map((student) => {
              return (
                <TableRow key={student.id}>
                  <TableCell className={division()}>
                    <StudentTitleCell>
                      <Typography variant="body" weight="medium" size="small">
                        {student.name}
                      </Typography>
                      <Typography variant="subtitle" size="medium" className="text-gray-500">
                        {student.email}
                      </Typography>
                    </StudentTitleCell>
                  </TableCell>
                  <TableCell>
                    <span className={bodyCellCenter()}>
                      <ActionButton
                        startContent={<EditLine className="text-xl" />}
                        isIconOnly
                        color="primary"
                        isActive
                      />
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className={bodyCellCenter()}>
                      <Chip
                        className="border"
                        variant="bordered"
                        color="success"
                        radius="Xsm"
                        size="lg"
                      >
                        Ativo
                      </Chip>
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className={bodyCellCenter()}>
                      <Typography variant="body" size="small" weight="medium">
                        {student.purchaseDate}
                      </Typography>
                      <Typography variant="subtitle" size="medium" weight="medium">
                        às 16:00
                      </Typography>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className={bodyCellCenter()}>
                      <Typography variant="body" size="small" weight="medium">
                        {student.lastAccess}
                      </Typography>
                      <Typography variant="subtitle" size="medium" weight="medium">
                        às 16:00
                      </Typography>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className={bodyCellCenter()}>
                      <Typography variant="body" size="small" weight="medium">
                        {student.class.id}
                      </Typography>
                      <Typography variant="subtitle" size="medium" weight="medium">
                        {student.class.name}
                      </Typography>
                    </div>
                  </TableCell>
                </TableRow>
              )
            })}
        </TableBody>
      </Table>
    </section>
  )
}
