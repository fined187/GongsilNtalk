import Layout from '@/components/Layout'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}
