import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
// import context
import { AuthContextProvider } from '../hooks/AuthContext'
// import custom components
import '../styles/globals.css'


function MyApp({ Component, pageProps }: AppProps) {

  return <AuthContextProvider>
    <Component {...pageProps} />
  </AuthContextProvider>
}

export default MyApp
