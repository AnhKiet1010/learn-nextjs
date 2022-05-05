import axiosClient from '@/api-client/axios-client'
import { EmptyLayout } from '@/components/layout'
import { AppPropsWithLayout } from '@/models'
import { createEmotionCache, theme } from '@/utils'
import { CacheProvider } from '@emotion/react'
import { PaletteMode } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { createContext, useMemo, useState } from 'react'
import { SWRConfig } from 'swr'
import '../styles/globals.css'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()
export const ColorModeContext = createContext({ toggleColorMode: () => {} })

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout
  const [mode, setMode] = useState<PaletteMode>('light')

  const colorMode = useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) => (prevMode === 'light' ? 'dark' : 'light'))
      },
    }),
    []
  )

  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <SWRConfig value={{ fetcher: (url) => axiosClient.get(url), shouldRetryOnError: false }}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </SWRConfig>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </CacheProvider>
  )
}

export default MyApp
