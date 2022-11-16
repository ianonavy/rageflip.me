import Head from "next/head";
import styles from "../styles/Home.module.css";
import Main from "../views/Main";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>RageFlip.Me</title>
        <meta name="description" content="rageflip.me" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main />
    </div>
  );
}
