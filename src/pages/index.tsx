import { Tab, Tabs } from '@kirvanobr/react'

import {
  Modules,
  Team,
  Students,
  Comments,
  Preferences,
  Certificate,
} from '@/shared/components/pages'
import { ThemeSwitch, HeaderPage, StatusBar } from '@/shared/components/common'

const Home = () => {
  const tabs = [
    {
      id: 'Módulos',
      label: 'Módulos',
      content: <Modules />,
    },
    {
      id: 'Turmas',
      label: 'Turmas',
      content: <Team />,
    },
    {
      id: 'Alunos',
      label: 'Alunos',
      content: <Students />,
    },
    {
      id: 'Comentários',
      label: 'Comentários',
      content: <Comments />,
    },
    {
      id: 'Preferências',
      label: 'Preferências',
      content: <Preferences />,
    },
    {
      id: 'Certificado',
      label: 'Certificado',
      content: <Certificate />,
    },
  ]

  return (
    <div className="container mx-auto">
      <ThemeSwitch className="fixed top-0 right-0 m-4" />

      <HeaderPage title="Área de Membros">
        <StatusBar />
      </HeaderPage>

      <Tabs
        classNames={{
          base: ['w-full'],
          tabList: [
            'flex-1 relative p-0 rounded-none bg-transparent gap-0 before:content-[""] before:absolute before:border-b before:inset-0 before:bottom-[1px]',
          ],
          tab: ['rounded-none h-[50px] text-lg'],
          cursor: ['shadow-none h-[4px] rounded-lg bottom-0 top-auto'],
        }}
        color="primary"
        items={tabs}
      >
        {(item) => (
          <Tab key={item.id} title={item.label}>
            {item.content}
          </Tab>
        )}
      </Tabs>
    </div>
  )
}

export default Home
