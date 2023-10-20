import {
  Button,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  Input,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Typography,
} from '@kirvanobr/react'
import { InfoBold, TickLine } from '@kirvanobr/icons'
import { useState } from 'react'

import { styles } from './CreateTeam.styles'

export const CreateTeam = () => {
  const {
    body,
    titleSection,
    teamWrapper,
    titleWrapper,
    input,
    standardSection,
    switchWrapper,
    infoWrapper,
    infoIcon,
    offerSection,
    tableWrapper,
    thead,
    tbody,
    td,
  } = styles()
  const [isSelected, setIsSelected] = useState<boolean>(false)

  return (
    <DrawerContent>
      {(onClose) => (
        <>
          <DrawerHeader>
            <Typography variant="head" size="medium" weight="bold">
              Adicionar Turma
            </Typography>
          </DrawerHeader>

          <DrawerBody className={body()}>
            <section className={titleSection()}>
              <Typography variant="subtitle" size="large" weight="regular">
                Nome da turma
              </Typography>
              <div className={titleWrapper()}>
                <div className={teamWrapper()}>
                  <Typography weight="light">Turma 2</Typography>
                </div>
                <Input
                  value="Especial Master Finanças"
                  classNames={{
                    inputWrapper: input(),
                    base: 'h-full',
                  }}
                />
              </div>
            </section>

            <section className={standardSection()}>
              <Switch
                isSelected={isSelected}
                onValueChange={setIsSelected}
                classNames={{ wrapper: switchWrapper() }}
              >
                <Typography variant="body" size="medium" weight="regular">
                  Definir esta turma como padrão
                </Typography>
              </Switch>
            </section>

            {isSelected && (
              <section className={infoWrapper()}>
                <InfoBold className={infoIcon()} />
                <Typography size="small" weight="regular">
                  Esta será sua nova turma padrão, ela contém todas as ofertas não vinculadas a
                  outra turma. A padrão antiga ficará sem ofertas.
                </Typography>
              </section>
            )}

            <section className={offerSection()}>
              <Typography size="large">Oferta atrelada a turma:</Typography>
              <Table
                selectionMode="multiple"
                classNames={{
                  wrapper: tableWrapper(),
                  th: thead(),
                  tbody: tbody(),
                  td: td(),
                }}
              >
                <TableHeader>
                  <TableColumn>
                    <Typography>Oferta</Typography>
                  </TableColumn>
                  <TableColumn>
                    <Typography>Preço</Typography>
                  </TableColumn>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <Typography weight="regular">Black Friday</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography weight="regular">R$829,00</Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </section>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="link" size="lg" onClick={onClose}>
              Cancelar
            </Button>
            <Button color="success" size="lg" startContent={<TickLine className="text-2xl" />}>
              Salvar
            </Button>
          </DrawerFooter>
        </>
      )}
    </DrawerContent>
  )
}
