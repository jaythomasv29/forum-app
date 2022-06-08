
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import Header from '../components/Header'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <div className='h-screen bg-slate-200 overflow-y-scroll '>
        <Header />
        <Component {...pageProps} />
      </div>
  </SessionProvider>
  )
}

export default MyApp
