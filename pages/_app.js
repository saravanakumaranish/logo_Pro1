import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import theme from "../theme/theme.js"


function App({ Component, pageProps }) {
  return (
  <ChakraProvider theme={theme}>
    <Component {...pageProps} />
  </ChakraProvider>
  )
}

export default App;
