import Head from "next/head";
import styles from "../styles/Home.module.css";
import Main from "../views/Main";
import { rageFlipped } from "../lib/flip";

export async function getServerSideProps(context) {
  const input = context.params.input.join("/");
  return {
    props: { input }, // will be passed to the page component as props
  };
}

export default function Input({ input }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>RageFlip.Me</title>
        <meta name="description" content={rageFlipped(input)} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main textToFlip={input} />
    </div>
  );
}
