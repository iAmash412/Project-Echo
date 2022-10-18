import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'

const TestPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Project - E - TestPage</title>
        <meta name="description" content="E-commerce" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Test page</h1>
    </div>
  )
}

export default TestPage