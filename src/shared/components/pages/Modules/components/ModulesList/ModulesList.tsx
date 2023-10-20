import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@kirvanobr/react'
import { EditLine, EyeLine, ArrowSwapLine, TrashLine } from '@kirvanobr/icons'

import { ModuleItemHeader } from './ModuleItemHeader'
import { ModuleItem } from './ModuleItem'
import { ModuleItemContent } from './ModuleItemContent'
import { ModulesListProps } from './ModulesList.types'

export const ModulesList = ({ data }: ModulesListProps) => {
  return (
    <div className="space-y-10">
      {data &&
        data.map((module, index) => {
          return (
            <ModuleItem
              moduleNumber={index + 1}
              itemsAmount={module.content.length}
              key={module.id}
              isHidden={module.isHidden}
            >
              <ModuleItemHeader title={module.title} description={module.description} />
              {module.content.length > 0 && (
                <ModuleItemContent>
                  <Table reorder aria-label={module.title} removeWrapper selectionMode="multiple">
                    <TableHeader>
                      <TableColumn key="1">
                        <div className="flex gap-6 items-center">
                          <Button
                            variant="solid"
                            size="sm"
                            className="px-0 font-normal !bg-transparent"
                          >
                            <EyeLine className="text-medium text-success-600" />
                            Mostrar
                          </Button>
                          <Button
                            variant="solid"
                            size="sm"
                            className="px-0 font-normal !bg-transparent"
                          >
                            <EyeLine className="text-medium text-danger-600" />
                            Ocultar
                          </Button>
                          <Button
                            variant="solid"
                            size="sm"
                            className="px-0 font-normal !bg-transparent"
                          >
                            <ArrowSwapLine className="text-medium text-primary-600 rotate-90" />
                            Mover
                          </Button>
                          <Button
                            variant="solid"
                            size="sm"
                            className="px-0 font-normal !bg-transparent"
                          >
                            <TrashLine className="text-medium" />
                            Excluir
                          </Button>
                        </div>
                      </TableColumn>
                      <TableColumn key="2" className="text-center">
                        Edição
                      </TableColumn>
                      <TableColumn key="3" className="text-center">
                        Status
                      </TableColumn>
                    </TableHeader>
                    <TableBody>
                      {module.content.map((moduleContent) => {
                        return (
                          <TableRow key={moduleContent.id}>
                            <TableCell>{moduleContent.title}</TableCell>
                            <TableCell>
                              <span className="mx-auto flex justify-center">
                                <EditLine className="text-xl text-primary-600" />
                              </span>
                            </TableCell>
                            <TableCell>
                              {moduleContent.isVisible ? (
                                <div className="w-24 h-9 grid place-content-center rounded-md text-center text-success-500 border border-success-500 mx-auto">
                                  Visivel
                                </div>
                              ) : (
                                <div className="w-24 h-9 grid place-content-center rounded-md text-center text-danger-500 border border-danger-500 mx-auto">
                                  Oculto
                                </div>
                              )}
                            </TableCell>
                          </TableRow>
                        )
                      })}
                    </TableBody>
                  </Table>
                </ModuleItemContent>
              )}
            </ModuleItem>
          )
        })}
    </div>
  )
}
