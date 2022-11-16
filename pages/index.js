import Head from "next/head";
import styles from "../styles/Home.module.css";
import Main from "../views/Main";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>RageFlip.Me</title>
        <meta name="description" content="rageflip.me" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimal-ui"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main />
    </div>
  );
}
