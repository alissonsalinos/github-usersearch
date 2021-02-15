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
        <meta property="og:url" content="https://github-usersearch.alissonsalinos.vercel.app" key="ogurl" />
        <meta property="og:title" content="GitHub UserSearch" key="ogtitle" />
        <meta property="og:site_name" content="GitHub UserSearch" key="ogsitename" />
        <meta property="og:description" content="A React NextJS App to search github developers all around the world." key="ogdescription"/>
        <meta property="og:image" content="https://github-usersearch.alissonsalinos.vercel.app/opengraph.jpg" key="ogimage" />
        <meta property="og:image:type" content="image/jpeg" key="ogimagetype" />
        <meta property="og:image:width" content="1200" key="ogimagewidth"/>
        <meta property="og:image:height" content="709" key="ogimageheight" />
        <meta property="og:type" content="website" key="ogtype" />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
