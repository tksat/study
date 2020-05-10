import Head from "next/head"
import Layout, { siteTitle } from "../components/layout"
import utilStyles from "../styles/utils.module.css"
import Alert from "../components/Alert"

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>自己紹介</p>
        <p>
          NEXTチュートリアルで作成したblogページです
          (これはサンプルウェブサイトです-このようなサイトを構築します{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <Alert type="success">
        <p>classnamesのサンプルです</p>
      </Alert>
    </Layout>
  )
}
