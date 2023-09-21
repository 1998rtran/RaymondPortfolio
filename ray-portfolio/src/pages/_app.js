import './styles.css'
import Head from 'next/Head'

// This default export is required in a new pages/_app.js file.
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ray's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"></link>
      </Head>
      <>
        <Component {...pageProps} />
      </>
    </>
  )
}