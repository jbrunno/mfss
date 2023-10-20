import { Card } from '@kirvanobr/react'

export const Comments = () => {
  return (
    <>
      <div className="flex justify-between items-center mt-8">
        <h2 className="text-2xl font-medium">Comentários</h2>
        <button>Pré-visualizar</button>
      </div>
      <div>
        <span>Crie módulos e insira conteúdos ao seu produto</span>
      </div>
      <div className="flex flex-wrap">
        {/* <Input placeholder="Buscar por aluno, turma, oferta..." /> */}
      </div>
      <Card className="py-10">
        <div className="text-center">
          Você ainda não criou nenhum módulo. <br />
          Para começar, clique no botão “Criar módulo” acima
        </div>
      </Card>
    </>
  )
}
