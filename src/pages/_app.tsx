import Head from 'next/head'

import type { AppProps } from 'next/app'

import '@picocss/pico'
import '../styles/global.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
      <Head>
        <title>Todo-app</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
