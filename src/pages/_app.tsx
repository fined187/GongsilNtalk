import Layout from '@/components/Layout';
import type { AppProps } from 'next/app';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const GlobalStyle = createGlobalStyle`
  background-color: #F5F5F5;
`;

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#F7F7F7',
      },
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
