import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { AppProps } from 'next/app'
import { UIProvider } from '@kirvanobr/react'

const App = ({ Component, pageProps, ...rest }: AppProps) => {
  return (
    <UIProvider>
      <NextThemesProvider>
        <Component {...pageProps} key={rest.router.asPath} />
      </NextThemesProvider>
    </UIProvider>
  )
}

export default App
