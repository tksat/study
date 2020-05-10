import Head from "next/head"
import Link from "next/link"

import styles from "../../components/layout.module.css"

import Layout from "../../components/layout"

export default function firstPost() {
  return (
    <div className={styles.container}>
      <Head>
        <title>下層のページです</title>
      </Head>

      <h1>
        <Link href="/">
          <a>first-postページです！</a>
        </Link>
      </h1>
      <Layout>コンポーネントです</Layout>
    </div>
  )
}
