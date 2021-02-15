import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Head from 'next/head';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #5f45bb;
    background-image: linear-gradient(to bottom right, #180cac, #d054e4); 
    color: #fff;
    font-family: "Quicksand", sans-serif;
    font-size: 16px;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    line-height: 1.5;
    min-height: 100vh;
    width:100%;
    overflow-x: hidden;
    text-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
    background-attachment: fixed;
    margin: 0!important;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>GitHub UserSearch</title>
        <link href="https://fonts.googleapis.com/css?family=Montserrat|Quicksand" rel="stylesheet" />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
