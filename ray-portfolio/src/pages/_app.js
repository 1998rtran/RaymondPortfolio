import './styles.css'
import Head from 'next/Head'

// This default export is required in a new pages/_app.js file.
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ray's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <Component {...pageProps} />
      </>
    </>
  )
}